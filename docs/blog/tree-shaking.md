---
title: Bundle Size Optimization
date: 2023-06-25
author: zombieJ
juejin_url: https://juejin.cn/post/7248424501813674021
---

현대의 JS 애플리케이션에서는 모듈식 패키징 도구를 통해 사용되지 않는 일부 모듈 코드를 자동으로 제거할 수 있습니다. 이 과정을 [트리 쉐이킹(Tree Shaking)](https://developer.mozilla.org/ko/docs/Glossary/Tree_shaking)이라고 합니다. 그러나 이 과정에 익숙해지면, 실제로는 그렇게 완벽하지 않다는 것을 알게 될 것입니다. 우리는 여전히 최적의 번들 사이즈 최적화 효과를 얻기 위해서 추가적인 작업이 필요합니다. 오늘은 ConfigProvider가 트리 쉐이킹을 실패하게 만드는 문제에 대해 이야기해 보겠습니다.

### ConfigProvider 그리고 rc-field-form

일상적인 유지보수 과정에서, 우리는 ConfigProvider를 사용할 때 번들 사이즈가 증가하는 문제를 발견했습니다:

- https://github.com/ant-design/ant-design/issues/41607
- https://github.com/ant-design/ant-design/issues/43019
- https://github.com/ant-design/ant-design/issues/42499

커뮤니티도 피드백을 주는 과정에서 잘못 패키징된 `rc-field-form` 패키지를 발견했습니다. 여기서는 이슈에서 제시된 이미지를 그대로 차용하겠습니다:

<img alt="bundle size" src="https://user-images.githubusercontent.com/44499686/239506452-11161494-76d3-4e80-a53f-57b097008cac.png" />

ConfigProvider는 전역 설정 기능을 제공하며, 여기에는 Form 컴포넌트의 검증 정보에 대한 사용자 정의 템플릿 설정도 포함됩니다:

```tsx
<ConfigProvider form={{ validateMessages }} />
```

<img width="501" alt="Customize" src="https://github.com/ant-design/ant-design/assets/5378891/40081170-af57-44f9-9088-c5cc55e65802">

이 기능은 폼 검증에 의존하므로, 하위의 `rc-field-form`에서 제공하는 FormProvider로 구현됩니다. antd에서는 이 기능이 자체 로컬화된 `validateMessages`와 결합됩니다:

```tsx
// 샘플 코드로, 실제 코드가 아닙니다
import { FormProvider } from 'rc-field-form';

const ConfigProvider = ({ validateMessages, children }) => {
  const mergedValidateMessages = React.useMemo(
    () => merge(antdDefaultValidateMessages, validateMessages),
    [validateMessages],
  );

  return (
    <FormProvider validateMessages={mergedValidateMessages}>
      <SomeOtherProvider>{children}</SomeOtherProvider>
    </FormProvider>
  );
};
```

그러나 FormProvider 자체는 `rc-field-form`의 FormContext를 캡슐화하고 있어서, FormProvider를 도입하면 `rc-field-form`의 더 많은 내용이 패키징됩니다:

<img height="300" alt="Deps" src="https://github.com/ant-design/ant-design/assets/5378891/938e2375-e143-4c93-bfc9-207039361479">

You may think, can we optimize it? If `validateMessages` is not configured, we will not call this FormProvider?

여기서 '최적화를 할 수 있을까? 만약 `validateMessages`가 설정되지 않았다면 이 FormProvider를 호출하지 않는 게 좋지 않을까?'라고 생각할 수 있습니다.

```tsx
// 샘플 코드로, 실제 코드가 아닙니다
import { FormProvider } from 'rc-field-form';

const ConfigProvider = ({ validateMessages, children }) => {
  let node = children;

  if (validateMessages) {
    node = <FormProvider validateMessages={merge(...)}>{node}</FormProvider>;
  }

  return node;
};
```

안타깝게도, 이것은 불가능합니다. 트리 쉐이킹은 정적 컴파일 과정이고, `validateMessages`는 런타임 설정입니다. 때문에 패키징 과정에서 `validateMessages`의 존재 여부를 알 수 없으므로, 이러한 최적화를 달성할 수 없습니다.

### 의존성 분해

우리는 `rc-field-form`의 의존성을 조정하여 FormProvider를 분리할 수 있습니다. 하지만 분명히, 우리는 타사 라이브러리의 조정에 의존해서는 안 됩니다(비록 `rc-field-form`도 우리가 유지보수하고 있지만). 우리는 근본적으로 문제를 해결해야 하며, ConfigProvider가 더 이상 FormProvider에 의존하지 않도록 해야 합니다. 구현은 매우 간단합니다. 이 기능이 `rc-field-form`에 특화된 것이므로, 우리는 직접 하나의 Context를 추출하여 ConfigProvider가 FormProvider를 인식하지 않도록 만들면 됩니다:

```tsx
// 샘플 코드로, 실제 코드가 아닙니다
import { ValidateMessageContext } from '../form/context.ts';

const ConfigProvider = ({ validateMessages, children }) => {
  const mergedValidateMessages = ...

  return (
    // 프록시 컨텍스트만 사용
    <ValidateMessageContext value={mergedValidateMessages}>
      <SomeOtherProvider>{children}</SomeOtherProvider>
    </ValidateMessageContext>
  );
};
```

Form도 프록시 Context를 사용합니다:

```tsx
// 샘플 코드로, 실제 코드가 아닙니다
import Form, { FormProvider } from 'rc-field-form';

import { ValidateMessageContext } from './context';

export default (props) => {
  const validateMessages = React.useContext(ValidateMessageContext);

  return (
    <FormProvider validateMessages={validateMessages}>
      <Form {...props} />
    </FormProvider>
  );
};
```

의존성은 이렇게 바뀌어, 의존성 분리가 이루어집니다:

<img height="400" alt="New Deps" src="https://github.com/ant-design/ant-design/assets/5378891/4fde4332-1110-43a7-9a0e-aef806da59ef">

### 결론

트리 쉐이킹은 번들 사이즈를 최적화하는 자동화된 방법을 제공하지만, 우리는 몇 가지 세부 사항에 주의해야 합니다. 그렇지 않으면 의도치 않게 일부 의존성이 잘못 포함될 수 있습니다. 이상입니다.
