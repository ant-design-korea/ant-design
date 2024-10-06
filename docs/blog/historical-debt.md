---
title: API 기술 부채
date: 2023-10-11
author: zombieJ
---

Ant Design을 업그레이드 할 때, 아마 이런 메세지를 받은 적이 있을 겁니다:
<!-- You may have received this warning when upgrading Ant Design: -->

```text
Warning: [antd: XXX] `old prop` is deprecated. Please use `new prop` instead.
```

이런 메시지가 뜨는 이유는 antd의 API Design의 잘못된 설계로 인해 발생한 과거의 기술 부채 때문입니다. 예를 들어, antd v3 버전 이하의 TreeSelect와 Select가 존재합니다. TreeSelect는 Select의 코드를 직접 복사하고 기반으로 확장되어 왔습니다. 그러나 두 컴포넌트 간의 검색 스타일에는 차이점이 존재합니다:

<img alt="Select" height="162" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uDbxSKTLU8YAAAAAAAAAAAAADrJ8AQ/original" />

<img alt="TreeSelect" height="316" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ggTeQqbnFVkAAAAAAAAAAAAADrJ8AQ/original" />

그리고 이후의 유지 보수 과정에서, 개발자들은 Search Box의 값을 직접 제어하길 원했습니다. 공교롭게도 다른 시간, 다른 개발자들에 의해 PR이 이루어졌고, 결과적으로 각 컴포넌트에는 `inputValue`와 `searchValue`라 불리는 서로 다른 속성이 추가되었습니다:

```tsx
// Combobox 모드를 선택하면, Search Box가 곧 Input Box입니다. 따라서 `inputValue`가 더 적합해 보입니다.
<Select inputValue="search" />

// TreeSelect의 Search box는 팝업 레이어에 해당합니다, 따라서 `searchValue`가 적합합니다.
<TreeSelect searchValue="search" />
```

Multiple 모드를 사용했을 때, Select 컴포넌트는 Search Box 내의 Item 선택에 따라 자동으로 기존의 콘텐츠를 지우고 있습니다. 그러나 몇몇 시나리오에서 개발자들은 이를 유지하길 원하였고, 따라서 해당 요구사항을 위하여 Select와 TreeSelect 컴포넌트에 `autoClearSearchValue` 속성을 추가하였습니다.

잠깐! Select가 갖고 있던 속성은 `inputValue`인데, 어째서 `autoClearInputValue`가 아닌 `autoClearSearchValue`라고 불리는 걸까요? 만약 우리가 이런 유형의 API 스타일을 기존의 API에 계속해서 적용했다면, 컴포넌트 내의 속성은 점점 더 늘어나고 세분화되었을 겁니다. 또한 이는 코드 유지 보수에 있어 안 좋은 영향을 미칩니다. 상단의 예시 같은 경우, 이후에 해당 컴포넌트를 추출하여 통합 UI 레이어에 추가한 뒤 `rs-select`에 병합하였습니다. 이를 통해 `rc-tree-select`는 팝업 레이어의 내용만 구현하여 해당 구조와 Input Box 스타일을 완전히 재사용 할 수 있게 되었습니다. 그러나 두 컴포넌트의 API 간의 일관성 부족으로 추가적인 처리가 필요했고, 반복 프로세스 중 해당 API 부채를 리팩토링하고 하나로 통합하였습니다. (v4 버전에서 해당 컴포넌트를 `searchValue`로 병합한 뒤 디자인을 하나로 표준화하였습니다.)

그러나 세상에는 만병통치약이 없는 것처럼, 우리 또한 시작부터 완벽한 API를 설계할 수 없습니다. 몇몇 API는 초기에 적합해 보이나, 반복 프로세스가 진행됨에 따라서 부적합하게 보일 수도 있습니다. 예를 들자면, 초기에는 팝업 레이어를 Dropdown과 Select 컴포넌트의 팝업 콘텐츠라는 의미에서 dropdown이라고 명명하였습니다. 그러나 ToolTip의 관점에서 보았을 때, dropdown이라는 이름은 적합하지 않습니다. 전체적인 관점에서 본다면, 이는 popup이라는 이름이 더 적합합니다.

### Deprecated 경고

우린 유지 보수 과정 중, 점진적으로 API 네이밍 룰을 표준화하였습니다 ([API Naming rules](https://github.com/ant-design/ant-design/wiki/API-Naming-rules)). 새로운 기능을 추가할 때에는 기존의 존재하는 컴포넌트 중 유사한 API를 찾습니다. 이후 이미 존재하는 API에 Deprecated 경고가 점진적으로 추가됩니다. 또한 우리는 호환성을 유지하기 위하여, 각 버전에 Deprecated된 기능을 다음 메이저 버전까지 유지합니다. 이후 해당 기능들은 다다음 메이저 버전에서 최종적으로 제거됩니다. v4로 예를 들자면, 해당 버전에서 Deprecated된 기능들은 v5까지 지원되지만 v6에선 최종적으로 삭제될 것입니다. 이는 개발자들이 기존의 Deprecated된 기능을 새 버전으로 이전할 충분한 시간을 주기 위함입니다.

하지만 개발자의 관점에서 바라본다면, 이는 합리적이지 못하다고 생각할 수 있습니다. 개발자들은 그저 antd 업그레이드를 진행했을 뿐이지만, 컴포넌트 라이브러리 내의 API 설계 문제로 발생하는 콘솔 경고 등으로 고통받아야 하기 때문입니다.
특히 몇몇 경고가 Deprecated 경고와 합쳐지는 경우, 개발자들은 이를 구분하고 찾아내는데 많은 어려움을 겪습니다. 이러한 상황은 특히 메이저 버전으로 업그레이드할 때 특히 중요합니다. 또한 회사로부터 이를 업그레이드하고 새 버전으로 이전할 수 있는 충분한 시간이 주어지지 않을 수 있습니다. 그렇기에 호환성이 제공되는 패키지와 이를 우선 동작하게 만들 기술을 사용해야 합니다. 오래 지속된 Deprecated 경고에 대해서, 개발자들은 이를 임시 또는 영구적으로 무시할 것인지 선택해야만 합니다. 이러한 상황을 위해서는 사용에 대한 경고가 매우 중요합니다, 그렇기에 우리는 [Warning Filter RFC](https://github.com/ant-design/ant-design/discussions/44551)를 제안합니다.

#### 경고 필터

ConfigProvider의 `warning` 속성을 통해 Deprecated에 관련된 정보를 집계할 수 있습니다:

```tsx
<ConfigProvider warning={{ strict: false }} />
```

집계가 끝난 뒤, 원본 Deprecated 관련 정보들은 배열로 병합되며 이후 콘솔을 통해 보이게 됩니다. 또한 이는 사용에 관련된 경고에는 영향을 미치지 않습니다:

![Merged Message](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MG-rQ4NSbbcAAAAAAAAAAAAADrJ8AQ/original)

#### 확장 문제

위에서 언급했던 바와 같이, 완벽한 API 설계를 위한 정답은 없습니다. 우린 급작스러운 변경을 방지하기 위해, 일반적으로 기존에 구현된 API를 변경하지 않습니다. 그러나 일부의 규약에 대해서는 문제가 발생할 수 있습니다. `ref` 컴포넌트가 그 전형적인 예시입니다. React 개발자라면 `ref`를 통해 DOM 노드를 가져온 뒤 `focus`와 같은 기본적인 연산이 가능한다는 것을 이미 알고 계실 것입니다. 그러나 복합적으로 구성된 컴포넌트의 경우, 메서드와 DOM 등을 호출하는 것은 표준적이지 못합니다. 예를 들자면, Table 컴포넌트의 `ref`는 명백하게 가장 바깥쪽에 존재하는 div에 해당해야 하나, `scrollTo` 메서드의 경우에는 스크롤 컨테이너를 가리켜야 합니다. (만약 가상 테이블이라면, 내부적인 `rc-virtual-list`에 의해서 관리되어야 합니다.) antd 모바일의 경우, `ref`는 복합적인 구조로 설계되었습니다. 또한 DOM 노드는 `naiveElement`를 통해 반환됩니다.

```tsx
export interface SampleRef {
  nativeElement: HTMLElement;
  focus(): void;
  blur(): void;
}
```
그러나 antd의 경우, 초기에 `ref`에 대한 규약을 만들지 않았기에 이 메서드를 구현하는 것에 많은 어려움이 있었습니다.
하지만 다행히도 프록시가 지원된다는 점을 통해, 이를 활용하여 `ref`에 대한 호출 등을 가로챔으로써 우리가 원하는 결과를 반환하도록 할 수 있었습니다:

```tsx
useImperativeHandle(
  ref,
  () =>
    new Proxy(divRef.current, {
      get(target, key) {
        // ...
      },
    }),
);
```

이 방식을 통해서, 이전에 사용된 기능들에 대한 호환성을 성공적으로 유지할 수 있습니다. 여전히 DOM 노드지만 SampleRef 호출에 대한 정의도 지원합니다.

## Summary

API 설계는 어려운 문제입니다. 이는 기술 스택과 컴포넌트들이 계속해서 반복되기 때문입니다. 몇몇 설계의 경우에는 점진적으로 쇠퇴하며 API 업그레이드 자체도 개발자에게는 고통스러운 요소입니다. 우리는 이 글을 통해서 여러분이 우리의 설계 이념과 업그레이드 프로세스 중의 발생하는 몇몇 문제들에 대해서 잘 이해해 주었으면 합니다. 새로운 제안이나 아이디어가 있다면 언제든지 GitHub를 통해서 공유해 주세요.
