---
title: 정적 메서드의 고통
date: 2023-04-26
author: zombieJ
zhihu_url: https://zhuanlan.zhihu.com/p/633333904
yuque_url: https://www.yuque.com/ant-design/ant-design/gkkyx81eihftzzq7
---

> `message.success`를 잘 쓰고 있는데 왜 훅을 사용하라고 경고를 하죠? antd가 점점 별로네요. 잘 있어요!

정적 메서드를 훅으로 대체하는 것에 대한 불만이 많다는 이야기를 들었습니다. 이게 고통스럽다는 걸 잘 알고 있지만, 여러 해에 걸친 고민 끝에 v5에서 변경하기로 결정했습니다(사실 이 논의는 훅 보다도 오래된 것이지만, 훅 이전에는 간단한 구현 방법이 없어서 그냥 미뤄두었습니다).

## 정적 메서드

JS 초기에 간단하고 사용하기 쉬운 API인 `alert`가 존재했습니다. 언제 어디서든 호출할 수 있죠. 프레임워크 수준에서도 이러한 편리함은 매력적입니다. 흔히 사용하는 예로는 Redux에서 ajax 요청이 실패했을 때 `message.error`를 호출하여 화면에 오류 메시지를 표시하는 경우가 있습니다.

<img width="300" alt="Fetch Failed" src="https://user-images.githubusercontent.com/5378891/234574678-44b12d00-9318-4ff9-b234-08129c82fc78.png" />

하지만 데이터 흐름의 관점에서 보면, 이는 실제로 UI와 데이터 레이어를 결합하게 됩니다. 호출할 때 UI 컨텍스트에 직접 의존하지 않는 것처럼 보이므로 무해하게 보입니다. 그러나 테스트 관점에서도 이런 결합은 테스트를 복잡하게 만듭니다.

함수 내에서 정적 메서드를 호출하면 컨텍스트가 존재하는 것처럼 보이지만, 실제로 정적 메서드는 컨텍스트를 소비하지 않으며 현재 React의 생명 주기와 독립적입니다. 따라서 컨텍스트를 통해 가져온 내용은 사실상 아무것도 얻지 못합니다.

### 컨텍스트 손실의 고통

함수 내에서 정적 메서드를 호출하면 컨텍스트가 있는 것처럼 보이지만, 실제로 정적 메서드는 컨텍스트를 소비하지 않으며 현재 React 생명 주기와 독립적입니다. 따라서 컨텍스트를 통해 얻은 내용은 사실상 아무것도 얻지 못합니다 :

```tsx
const Context = React.createContext('default');

const MyContent = () => React.useContext(Context);

const Wrapper = () => {
  React.useEffect(() => {
    // Static function이 컨텍스트에 맞지 않음.
    // 우리는 'Hello World' 대신 'default'만 가져올 수 있음
    message.success(<MyContent />);
  }, []);

  return null;
};

const Demo = () => (
  <Context.Provider value="Hello World">
    <Wrapper />
  </Context.Provider>
);
```

정적 메서드는 실제로 독립적인 `ReactDOM.render`를 통해 새로운 React 인스턴스를 생성함으로써 구현됩니다. 이렇게 하면 어떤 상황에서도 호출할 수 있지만, 현재 호출자의 컨텍스트와는 완전히 무관합니다. 그래서 테마, 다국어 지원, 글로벌 설정 등을 구성하면 이러한 설정이 적용되지 않을 것이라고 쉽게 생각할 수 있습니다.

여기서 "잠깐! antd의 정적 메서드 다국어 지원은 작동하고 있어!"라고 반응할 수 있습니다.

맞습니다. 하지만 이는 실제로 컨텍스트를 소비하는 것이 아니라 매우 해킹 같은 구현을 한 것입니다. 사용자가 ConfigProvider를 통해 `locale` 속성을 제공하면, 이를 전역 변수에 임시로 저장합니다. 그리고 정적 메서드가 호출될 때 이 값을 사용하여 채웁니다 :

```tsx
// 샘플입니다. 실제 코드가 아닙니다.
let globalLocale = null;

const ConfigProvider = (props) => {
  if (props.locale) {
    globalLocale = props.locale;
  }

  // ...
};

Modal.confirm = (props) => {
  // ...

  ReactDOM.render(
    <ConfigProvider locale={globalLocale}>
      <Modal {...modalProps} />
    </ConfigProvider>,
  );
};
```

이 코드는 매우 불안정하다는 것을 쉽게 알 수 있습니다. 정적 메서드는 호출 스택이 무엇인지 전혀 알지 못합니다. 이 메서드는 ConfigProvider 안에서 호출될 수도 있고, 바깥에서 호출될 수도 있습니다. 심지어 여러 개의 ConfigProvider가 동시에 존재할 수도 있습니다. 이러한 경우, 정적 메서드가 현재 설정을 정확하게 가져올 수 있다고 보장할 수 없습니다.

동적 테마를 지원하기 시작하면 이 문제가 더욱 두드러지게 나타납니다. 테마에서는 혼합된 테마를 쉽게 만날 수 있습니다. 개발자가 다른 레벨에서 호출하는 Modal, message, notification의 스타일이 완전히 다를 수 있습니다.

### Hooks

앞서 언급했듯이, 컨텍스트를 소비하기 위해서는 메서드를 호출할 때 현재 노드 위치를 알아야 합니다. 따라서 v4에서는 정적 메서드에 대응하는 훅을 도입했습니다 :

```tsx
const Demo = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <>
      {/* 삽입 홀더 위치에 따라 다른 컨텍스트가 제공됩니다. */}
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};
```

이것이 사실 그렇게 편리하지 않다는 것을 알 수 있습니다. 개발자에게는 각 사용 장소에서 과거의 정적 메서드를 직접 호출해야 하며, 주입된 컨텍스트 노드를 추가로 설정해야 합니다. 대다수의 경우, 과거 정적 메서드의 컨텍스트는 주로 다국어 지원, 테마와 같은 비교적 안정적인 설정만 신경 쓰면 되었습니다. 따라서 Holder를 놓을 수 있는 장소가 있다면, 다른 곳에서도 직접 재사용할 수 있으면 더 좋을 것입니다.

#### App

따라서 v5 버전에서는 App 컴포넌트를 제공합니다. 이 컴포넌트는 DOM 구조를 가지며, 하위 노드에 몇 가지 리셋 스타일을 추가합니다(예를 들어, 이전 버전에서 비판받았던 전역 스타일 문제는 이제 App 아래에서만 작동합니다). 동시에 Modal, message, notification의 ContextHolder도 App에 추가되었습니다. 개발자가 애플리케이션의 가장 바깥층에 App을 추가하면, 코드에서 간단하게 이들을 사용할 수 있습니다 :

```tsx
const Demo = () => {
  const { message } = App.useApp();

  React.useEffect(() => {
    message.success('Hello World');
  }, []);

  // ...
};
```

### 결론

디자인 관점에서 볼 때, 정적 메서드는 매우 좋지 않은 구현입니다. 그러나 우리는 비즈니스 시나리오에서 정적 메서드가 매우 편리하고 사용하기 쉽다는 것을 잘 알고 있습니다. 비록 몇 가지 "무해한" 단점이 있더라도, 여전히 역사에서 한 자리를 차지할 가치가 있습니다. 그래서 우리는 이러한 부작용을 컴포넌트 라이브러리에서 제거하면서도 개발자를 도울 수 있는 다른 방법이 있는지 고민하고 있습니다. 예를 들어, umi antd 플러그인을 개선하여 `appData`를 구성할 때 최상위 App 인스턴스를 자동으로 antd에 정적화하는 방법이 있습니다. 물론, 이는 단지 몇 가지 아이디어일 뿐입니다. 우리는 후속 버전에서 이 문제를 계속 탐구할 것입니다.
