---
title: Happy Work 테마
date: 2023-08-04
author: zombieJ
---

지난 v5 릴리스 발표에서, 우리 디자인 팀은 happy work 테마를 제공할 것이라고 언급했습니다. 작업은 여전히 진행 중이지만, 몇몇 작업에서 진전을 보였기에 여러분과 이를 공유하고자 합니다.

## 한 줄 요약!

이제 `@ant-design/happy-work-theme`를 통해 테마 효과를 전환할 수 있습니다 (더 궁금한 사항이 있다면 계속해서 읽어주세요):

```tsx
import { HappyProvider } from '@ant-design/happy-work-theme';

export default () => (
  <HappyProvider>
    <Button />
  </HappyProvider>
);
```

![Happy Work 테마](https://github.com/react-component/picker/assets/5378891/3c54ef05-5448-4619-b492-b5328c032c52)

## 커스텀 물결 효과

Ant Design에는 클릭 시 물결 효과가 발생하는 특별한 컴포넌트가 존재합니다. 이는 다음과 같이 다양한 곳에서 확인할 수 있습니다:

- <img alt="Button" height="110" src="https://github.com/react-component/picker/assets/5378891/60aaad50-cfd5-4c1f-b91f-0be217877f3f" />
- <img alt="Checkbox" height="70" src="https://github.com/react-component/picker/assets/5378891/f7d64d64-29db-4c9c-a0d6-de8b36a31d48" />
- <img alt="Radio" height="70" src="https://github.com/react-component/picker/assets/5378891/9f4edaa8-26f7-468c-bcf3-1ce80163bf0e" />
- <img alt="Switch" height="84" src="https://github.com/react-component/picker/assets/5378891/16abcee6-32d0-4075-bc4c-440d8aade067" />

지난 메이저 버전에서는 이 물결 효과를 마음대로 수정할 수 없었습니다. 만약 이 효과를 끄고 싶다면, 개발자들은 이를 위한 "마법의 코드"가 필요했었죠. 이 때문에 디자인 팀은 happy work 테마를 제안했고, 개발자로서 우리는 변화를 불러올 적절한 시기라고 생각했습니다.

### Wave 컴포넌트

물결 효과는 실제 컴포넌트로, 자식 컴포넌트로부터 클릭 이벤트를 수신하고 `box-shadow` 애니메이션 효과를 추가하여 해당 효과를 만들어냅니다:

```tsx
// 예시 코드
const Button = (
  <Wave>
    <button />
  </Wave>
);
```

초기에 이를 설계할 때 ([#40111](https://github.com/ant-design/ant-design/pull/40111)), 커스텀 물결 효과를 Design Token을 통해 관리하길 원했습니다. 그러나 이 방식은 기존의 `string | number` 타입을 `string | number | Function<T>` 로 변경하며 Design Token을 더 복잡하게 만들 것이 분명했습니다. 이를 API 설계 관점에서 보아도 `Function<T>` 는 좋은 코드가 아니며, 커스텀에 대한 새로운 요구사항이 발생한다면 함수의 유형이 다양해지면서 컴포넌트의 복잡도는 더욱 올라갈 것입니다. 이런 다양한 이유들로 인해 PR [#40111](https://github.com/ant-design/ant-design/pull/40111)은 여전히 초안에 머물러있습니다.

### ConfigProvider

다음으로, 우리는 이를 ConfigProvider에 추가하기로 했습니다. ConfigProvider는 전역 설정 컴포넌트로 모든 자식 컴포넌트에 영향을 끼칠 수 있고, API를 통해 다양한 컴포넌트를 설정할 수 있습니다. 따라서 우리는 `wave` 속성만을 추가하면 되었기 때문에 ConfigProvider에 이를 추가하였습니다:

```tsx
<ConfigProvider wave={{ showEffect }}>
  <Button />
</ConfigProvider>
```

![커스텀 물결 효과](https://github.com/react-component/picker/assets/5378891/425094d8-8767-4a53-85fb-5b13b888f2c4)

[ConfigProvider 예제 확인](/components/config-provider#config-provider-demo-wave)

`showEffect` 메소드는 효과를 생성해야 하는 DOM 노드를 알려줍니다. 해당 메소드는 내부적으로 캡슐화되어 항상 다음과 같은 올바른 노드에 대응하도록 만들어졌습니다 (예시 : Button, Radio의 Label에 있는 원형 DOM 노드). 또한 이 메소드는 어떤 컴포넌트인지, 그리고 해당 컴포넌트가 어떤 Design Token에 속하는지 알려줍니다.

```tsx
type ShowEffect = (target: HTMLElement, info: { component: string; token: GlobalToken }) => void;
```

Design Token을 통해, 현재 테마에 대응되는 효과를 구현할 수 있습니다. 예를 들어서 문서 초반의 GIF의 경우, 테마의 색상이 변경되면 이를 가져온 뒤 해당 효과를 추가할 수 있습니다.

## 마지막으로!

Happy Work 테마는 여전히 작업 중에 있으며, 우린 점진적으로 최종 버전에 더 많은 기능을 추가할 계획입니다. 또한 현재 `@ant-design/happy-work-theme`에 의해 제공되는 HappyProvider가 ConfigProvider를 통해 기존의 물결 효과를 대체하고 있고, 향후 개발자들의 추가적인 수정이 없어도 편리하게 사용할 수 있도록, 버전을 거듭하며 점진적으로 더 많은 "Happiness"를 추가할 예정입니다. 그럼 읽어주셔서 감사하고 계속해서 지켜봐 주세요!
