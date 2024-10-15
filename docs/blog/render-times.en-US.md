---
title: Unnecessary Rerender
date: 2022-12-31
author: zombieJ
zhihu_url: https://zhuanlan.zhihu.com/p/633328911
yuque_url: https://www.yuque.com/ant-design/ant-design/uz7b7d6wq05e4wvo
juejin_url: https://juejin.cn/post/7322352551088537627
---

무거운 컴포넌트의 경우, 시간이 지나면서 버그 수정이나 새로운 기능 추가가 원래의 성능 최적화를 무심코 파괴할 수 있습니다. 최근 우리는 Table 컴포넌트를 리팩토링하여 과거 업데이트로 인한 성능 손실을 찾아내고 복구하고 있습니다. 여기서는 자주 사용하는 몇 가지 문제 해결 방법과 자주 발생하는 문제들을 소개합니다.

이전에, 먼저 React 공식 문서의 [성능 도구](https://reactjs.org/docs/perf.html)를 읽고 필요한 디버깅 내용을 선택하는 것을 권장합니다.

### 렌더링 횟수 통계

대부분의 경우, 비효율적인 렌더링은 최적화되지 않은 루프에 비해 체감 성능 저하가 그렇게 크지 않습니다. 그러나 대형 폼, 표 및 목록과 같은 일부 상황에서는 하위 컴포넌트의 수가 많기 때문에, 비효율적인 렌더링이 겹치면 성능에 미치는 영향이 상당히 심각할 수 있습니다.

예를 들어, antd v4에서는 `rowSpan`의 Table hover 하이라이팅 경험을 개선하기 위해 `tr`에 이벤트 리스너를 추가하고, `td`에서 선택된 행에 대해 추가적인 `className`을 더하여 여러 행을 하이라이팅 표시할 수 있도록 지원했습니다. 그러나 `td`가 context에서 `hoverStartRow`와 `hoverEndRow` 데이터를 소비하기 때문에, `hoverStartRow`와 `hoverEndRow`의 변화로 인해 관련 없는 행들까지 [리렌더링](https://github.com/ant-design/ant-design/issues/33342)되는 문제가 발생합니다.

이와 같은 문제들은 무거운 컴포넌트에서 반복되므로, 렌더링 횟수를 결정할 수 있는 몇가지 보조적인 방법이 필요합니다. 최신 [`rc-table`](https://github.com/react-component/table)에서는 [`useRenderTimes`](https://github.com/react-component/table/blob/ecf3fdb77523b370ee86e19164e95f00e65281a8/src/hooks/useRenderTimes.tsx) 메서드를 캡슐화했습니다. 이 메서드는 개발 모드에서 React의 `useDebugValue`를 통해 React Dev Tools에 모니터링된 렌더링 횟수를 표시합니다.

![VDM](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vlwQQIcEXFkAAAAAAAAAAAAADrJ8AQ/original)

```tsx
// 예시 코드로, 필요한 경우 실제 코드를 확인하세요
import React from 'react';

function useRenderTimes<T>(props: T) {
  // 렌더링 횟수
  const timesRef = React.useRef(0);
  timesRef.current += 1;

  // 이전 props를 캐시
  const cacheProps = React.useRef(props);
  const changedPropKeys = getDiff(props, cacheProps.current); // 비교 로직

  React.useDebugValue(timesRef.current);
  React.useDebugValue(changedPropKeys);

  cacheProps.current = props;
}

export default process.env.NODE_ENV !== 'production' ? useRenderTimes : () => {};
```

### Context

#### useMemo

일반적으로 컴포넌트의 루트 노드에서는 `props`와 `state`를 기반으로 Context를 생성하여 집계된 데이터를 하위로 전달합니다. 그러나 경우에 따라 Context의 실제 내용이 변경되지 않을 수도 있으며 하위 컴포넌트의 리렌더링을 유발할 수 있습니다.

```tsx
// pseudocode
const MyContext = React.createContext<{ prop1: string; prop2: string }>();

const Child = React.memo(() => {
  const { prop1 } = React.useContext(MyContext);
  return <>{prop1}</>;
});

const Root = ({ prop1, prop2 }) => {
  const [count, setCount] = React.useState(0);

  // 리렌더링을 유발하는 일부 로직
  React.useEffect(() => {
    setCount(1);
  }, []);

  return (
    <MyContext.Provider value={{ prop1, prop2 }}>
      <Child />
    </MyContext.Provider>
  );
};
```

이 예시에서, `prop1`과 `prop2`가 변경되지 않았지만, MyContext의 `value`가 새로운 객체이므로 `prop1`이 변경되지 않았더라도 하위 컴포넌트가 리렌더링됩니다. 따라서 우리는 Context의 `value`를 Memo 처리할 필요가 있습니다.

```tsx
// pseudocode
const context = React.useMemo(() => ({ prop1, prop2 }), [prop1, prop2]);

return (
  <MyContext.Provider value={context}>
    <Child />
  </MyContext.Provider>
);
```

참고: 이 경우를 방지하기 위해 eslint [규칙](https://github.com/jsx-eslint/eslint-plugin-react/blob/3256c92ca1b3bc7ec3461a89c278c797e7dc18cb/docs/rules/jsx-no-constructed-context-values.md)을 설정할 수 있습니다.

#### 분할 Context

또한, 위의 예시를 참고하세요. `prop1`과 `prop2`를 모두 Context에 넣으면 비록 `prop1`이 변경되지 않더라도, `prop2`가 변경되면 하위 컴포넌트가 리렌더링됩니다. 따라서 기능에 따라 Context를 여러 개로 분할하여 영향을 받는 범위를 줄일 수 있습니다.

```tsx
// pseudocode
const MyContext1 = React.createContext<{ prop1: string }>();
const MyContext2 = React.createContext<{ prop2: string }>();

// Child
const { prop1 } = React.useContext(MyContext1);

// Root
<MyContext1.Provider value={context1}>
  <MyContext2.Provider value={context2}>
    <Child />
  </MyContext2.Provider>
</MyContext1.Provider>;
```

`rc-table`에서 렌더링 성능을 최적화하기 위해 Context를 여러 개로 분리했습니다:

- BodyContext
- ExpandedRowContext
- HoverContext
- PerfContext
- ResizeContext
- StickyContext
- TableContext

#### useContextSelector

Redux를 사용해본 적이 있다면, 소비해야 할 데이터가 변경될 때만 리렌더링하는 `useSelector`에 대해 익숙할 것입니다. React에서도 이와 관련된 RFC([#118](https://github.com/reactjs/rfcs/pull/118))([#119](https://github.com/reactjs/rfcs/pull/119))가 있으며, 향후 React 18에서도 구현될 예정입니다.

![React 18](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-UFKR7TTSv0AAAAAAAAAAAAADrJ8AQ/original)

API가 공식적으로 출시되기 전에, 많은 타사 라이브러리들이 이를 구현했습니다(물론 Redux를 직접 사용할 수도 있습니다). `useContextSelector`를 통해 더이상 기능별로 Context를 분리하는 문제를 고민할 필요가 없으며, 이는 개발자의 정신적 부담을 줄여줍니다.

```tsx
// pseudocode
const Child = React.memo(() => {
  const prop1 = useContextSelector(MyContext, (context) => context.prop1);
  return <>{prop1}</>;
});
```

### 클로저 문제

다양한 방법으로 최적화를 한 후에도 우리는 여전히 직면해야 할 문제가 있습니다. 만약 일부 렌더링이 외부 render 방식을 통해 이루어져야 하고, 그 방식이 클로저를 사용해야 한다면, `React.memo`는 이를 인식할 수 없습니다.

```tsx
// pseudocode
import React from 'react';

const MyComponent = React.memo(({ valueRender }: { valueRender: () => React.ReactElement }) =>
  valueRender(),
);

const App = () => {
  const countRef = React.useRef(0);
  const [, forceUpdate] = React.useState({});

  React.useEffect(() => {
    countRef.current += 1;
    forceUpdate({});
  }, []);

  // 실제로, 클래스형 컴포넌트에서 이 문제가 주로 `this.state`를 통해 발생합니다
  const valueRender = React.useCallback(() => countRef.current, []);

  return <MyComponent valueRender={valueRender} />;
};
```

클로저의 존재로 인해 `render` 메서드를 호출하기 전에 컴포넌트의 최종 형태가 변경되었는지 여부를 확인할 수 없습니다. 이것은 antd v4 초기 버전에 memo를 사용해 Table을 최적화한 이유이며, 시간이 지나면서 일부 최적화를 제거한 이유입니다. (실제로 Table에는 여전히 이 문제가 발생하는 몇 가지 상황이 남아 해결이 필요합니다).

Table이 `shouldCellUpdate` 방법을 제공한다는 점을 고려하여, 우리는 향후 Table의 렌더링 로직을 조정할 계획입니다. 부모 노드가 렌더링될 때는 Table이 완전히 리렌더링되지만, Table 내부에서 업데이트가 발생할 때 (예: 가로 스크롤 위치 동기화)는 캐시를 활용하여 렌더링을 건너뛰도록 할 예정입니다.

### 마지막

antd의 Table 최적화는 여전히 진행 중이며, 우리는 React의 새로운 기능과 커뮤니티의 새로운 아이디어를 지속적으로 주시할 것입니다. 아이디어가 있으시면 GitHub에서 논의하는 것을 환영합니다. 또한, 자체 개발한 컴포넌트에 대한 제안으로, 최적화가 완료될 때마다 해당하는 테스트 케이스를 작성하고, 향후 회고를 위해 issue 출처를 기록할 것을 권장합니다. 이상입니다.
