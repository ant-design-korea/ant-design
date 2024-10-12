---
title: Component-level CSS-in-JS
date: 2022-11-25
author: MadCcc
zhihu_url: https://zhuanlan.zhihu.com/p/606291980
yuque_url: https://www.yuque.com/ant-design/ant-design/iv21twb9368r0goc
juejin_url: https://juejin.cn/post/7322352551088635931
---

2022년 11월 18일, Ant Design 5.0 정식 버전을 출시하면서, Ant Design만의 독특한 CSS-in-JS 솔루션도 함께 공개되었습니다. 이 솔루션을 통해 Ant Design은 다른 CSS-in-JS 라이브러리들보다 더 높은 성능을 얻은 대신 애플리케이션에서 자유롭게 사용할 수 있는 유연성을 일부 포기하게 되었습니다. 우리는 이것을 "component level" CSS-in-JS 솔루션이라 부릅니다. <a name="W668Z"></a>

## CSS-in-JS의 딜레마

CSS-in-JS에서는 해시를 사용하여 스타일 태그가 삽입되었는지 확인합니다. 보통 해시를 계산하는 방법은 완전한 CSS를 해시 값으로 변환하는 것입니다. 예를 들어, emotion에서 페이지의 요소를 확인해보면 아래와 같은 스타일 태그를 볼 수 있습니다. 이 스타일 태그에 대응하는 해시 값은 매번 다릅니다:<br />![image.png](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*X5tDQ5VIpcoAAAAAAAAAAAAADrJ8AQ/original)<br />이로 인해 CSS-in-JS에 대한 오랜 비판 중 하나인 문제를 발견할 수 있습니다. 코드를 작성할 때 우리가 쓰는 것은 최종 CSS가 아니기 때문에, 매번 CSS를 직렬화한 후 해시를 다시 계산해야 합니다. 만약 페이지나 컴포넌트에 매우 복잡하거나 많은 CSS-in-JS 코드가 있고, 스타일이 컴포넌트의 props에 따라 변동된다면, 이 성능 문제는 무시할 수 없게 됩니다.<br />이 문제를 해결하기 위해 각 CSS-in-JS 라이브러리는 나름의 대응 방식을 제공합니다. 이제 Ant Design의 해결책을 살펴봅시다. <a name="Wd3XQ"></a>

## 해시

사실 문제는 CSS를 직렬화하는 과정에 있습니다. 직렬화 횟수를 줄이기 위해 캐싱을 사용한다면 어떨까요? 애플리케이션 레벨의 CSS-in-JS에서는 적절한 캐시 키를 찾기가 어렵지만, 컴포넌트 라이브러리에서는 최종 스타일이 비교적 안정적입니다. <br />v4 버전과 이전 버전에서 결정된 스타일 구조에 따르면, 동일한 테마 변수와 동일한 버전에서는 각 컴포넌트의 스타일이 변하지 않습니다. 반대로, 테마 변수가 수정되거나 Ant Design의 버전이 변경될 경우 스타일이 변경될 수 있습니다. <br />이로부터 매우 간단한 해시 계산 방법을 도출할 수 있습니다:<br />![image.png](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XuVYRJ_27Q0AAAAAAAAAAAAADrJ8AQ/original)<br />우리는 모든 Ant Design 컴포넌트에 **동일한** **해시**를 적용할 것입니다.이렇게 하면 Ant Design 컴포넌트를 사용할 때, 현재 버전과 테마 변수에 대해서만 해시 계산을 하게 됩니다. 버전은 `package.json`에서 얻을 수 있고, 테마 변수는 context에서 바로 얻을 수 있기 때문에, CSS를 무겁게 직렬화하지 않고도 안정적인 해시 값을 얻을 수 있어 성능 소모를 크게 줄일 수 있습니다. <a name="GxLK1"></a>

## 컴포넌트 캐싱

위의 방식으로 우리는 "component level" CSS-in-JS의 첫 번째 단계를 밟았지만, 이것만으로는 충분하지 않습니다. "component level"이기 때문에 우리는 컴포넌트를 다시 최적화할 수 있습니다.<br />Ant Design에서 하나의 컴포넌트 스타일은 보통 완전한 스타일입니다. 즉, 이 컴포넌트가 어떤 변형을 갖든, 해당 스타일은 모두 컴포넌트 스타일에 포함되어 있습니다. 이를 통해 또 다른 결론을 도출할 수 있습니다: Ant Design 컴포넌트의 props는 컴포넌트 스타일에 영향을 미치지 않습니다. <br />이는 매우 중요한 점입니다. 애플리케이션 레벨 CSS-in-JS 솔루션에서는 props가 컴포넌트 스타일에 영향을 미칠 수 있기 때문에, 렌더링 단계에서 스타일을 다시 생성하는 것은 피할 수 없습니다. 이 문제는 아무리 최적화해도 무시할 수 없습니다. 하지만 우리가 "component level" 솔루션을 채택했기 때문에 이 문제는 쉽게 해결될 수 있습니다:컴포넌트 스타일을 캐싱하면 됩니다.<br />![image.png](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yZMNSYVtxnAAAAAAAAAAAAAADrJ8AQ/original)<br />해시 값이 동일한 경우, 해당 컴포넌트가 몇 번 사용되고, 렌더링되든, 스타일은 항상 처음 마운트될 때 한 번만 생성되며, 그 이후로는 캐시된 스타일을 사용하게 됩니다.이것이 "component level" CSS-in-JS 솔루션의 두 번째 장점입니다. <a name="DUbKx"></a>

## 성능 비교

Ant Design 5.0 출시 당시, 우리는 간단한 성능 테스트를 진행했습니다. 여기서는 이에 대해 추가 설명을 하겠습니다:<br />![image.png](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*upmYSqZ5FwsAAAAAAAAAAAAADrJ8AQ/original)<br />위의 성능 비교는 매우 길고 변하지 않는 스타일을 생성하여 세 가지 라이브러리의 기본 사용 성능을 테스트한 것입니다. Ant Design의 "component level" 사용 시나리오에서 @ant-design/cssinjs가 첫 번째 렌더링과 두 번째 렌더링 모두 성능상의 이점이 있음을 확인할 수 있습니다. styled 라이브러리는 안정적인 스타일을 처리할 때 최적화가 되어 있어, 두 번째 렌더링 성능이 좋지만, props가 스타일 계산에 참여할 때는 여전히 emotion처럼 재계산의 영향을 받습니다. <a name="JOmkZ"></a>

## 한계

위 비교에서 Ant Design이 항상 styled와 emotion보다 우수하다고 할 수는 없습니다. 하지만 component-level 사용 시나리오에서는 성능상의 이점을 얻기 위한 최적화를 진행했습니다. 반대로, "component level"이라는 한계 때문에 Ant Design의 CSS-in-JS 솔루션은 일상적인 애플리케이션 구축에는 적합하지 않습니다.<br />특수한 해시 계산 방법과 컴포넌트 캐싱 때문에, Ant Design의 CSS-in-JS 솔루션을 적용할 때는 개발자가 직접 안정적인 해시와 고유한 컴포넌트 이름을 제공해야 합니다. 애플리케이션에서는 css module과 같은 자동 해시 기능이 더 필요하고, 애플리케이션의 많은 컴포넌트를 캐싱하려면 추가적인 관리 비용이 들며, 문제가 발생하면 해결하기 어렵습니다. 그래서 우리는 "component level" CSS-in-JS 솔루션을 컴포넌트 라이브러리에 사용하는 것을 더 추천합니다.
