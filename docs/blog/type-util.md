---
title: Type Util
date: 2024-01-11
author: zombieJ
---

TypeScript의 타입 정의는 매우 강력한 도구입니다. 이는 많은 문제를 해결하고 개발자들이 실행 시 발생하는 번거로운 디버깅을 피할 수 있도록 미리 타입 오류를 찾아줍니다. antd에서는 컴포넌트의 기본 정의를 내보내는데, 이는 다음과 같은 코드에서 볼 수 있습니다:

```tsx
import React from 'react';
import { Table, type TableColumnsType } from 'antd';

const columns: TableColumnsType = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];

export default () => <Table columns={columns} />;
```

이러한 타입 정의는 대부분의 상황에서 충분하지만, 때로는 더 세밀한 타입 정의가 필요할 수 있습니다. antd는 이러한 모든 것을 내보내지는 않기 때문에, 과거에는 TypeScript의 타입 유추를 활용하여 직접 확장하는 것을 권장했습니다:

```tsx
import type { SelectProps } from 'antd';

type SelectOption<T> = NonNullable<SelectProps<T>['options']>[number];
```

TypeScript에 익숙한 개발자에게는 어렵지 않은 작업이지만, 초보자들에게는 다소 어려울 수 있습니다. 이러한 문제를 해결하기 위해 antd는 개발자들이 타입을 쉽게 추출할 수 있도록 도와주는 유틸리티 타입 라이브러리를 만들었습니다.

### Type Util

antd는 현재 다음과 같은 3가지 유틸리티 타입을 제공합니다:

- `GetProps<ComponentType>`
- `GetProp<ComponentTypeOrComponentPropsType, PropName>`
- `GetRef<ComponentType>`

앞의 두 타입은 컴포넌트의 props 타입을 쉽게 추출하도록 도와주고, 마지막 타입은 컴포넌트의 ref 타입을 추출하는 데 사용됩니다. 다음 예시를 통해 이러한 타입의 사용법을 이해할 수 있습니다:

#### GetProps를 통한 속성 정의 가져오기

antd의 일부 자식 컴포넌트는 정의가 내보내지지 않을 수 있습니다. `GetProps`를 사용하여 직접 가져올 수 있습니다.

```tsx
import type { Checkbox, GetProps } from 'antd';

type CheckboxGroupType = GetProps<typeof Checkbox.Group>;
```

#### GetProp을 통한 속성 타입 가져오기

컴포넌트의 속성 타입은 `GetProp`을 통해 가져올 수 있습니다. 이 타입은 이미 `NonNullable`로 감싸져 있기 때문에 null 값에 대한 처리를 고려할 필요가 없습니다:

```tsx
import type { GetProp, Select, SelectProps } from 'antd';

// 둘 다 동일하게 작동합니다
type SelectOptionType1 = GetProp<SelectProps, 'options'>[number];
type SelectOptionType2 = GetProp<typeof Select, 'options'>[number];
```

#### GetRef를 통한 ref 타입 가져오기

`GetRef`를 사용하면 컴포넌트의 ref 타입을 HTMLElement 또는 특정 정의인지 기억할 필요 없이 간편하게 가져올 수 있습니다. 그냥 사용하면 됩니다:

```tsx
import React, { forwardRef } from 'react';
import type { GetRef, Select } from 'antd';

type SelectRefType = GetRef<typeof Select>; // BaseSelectRef

const Div = forwardRef<HTMLDivElement>((_, ref) => <div ref={ref} />);
type DomRefType = GetRef<typeof Div>; // HTMLDivElement
```

### 마무리

우리가 제공한 타입 유틸리티가 도움이 되길 바랍니다. 더 좋은 아이디어가 있다면 GitHub에 issue나 PR을 제출해주세요.
