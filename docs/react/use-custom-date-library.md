---
group:
  title: 고급기능
order: 4
title: 커스텀 날짜 라이브러리 사용하기
---

기본적으로 Ant Design은 시간과 날짜를 다루기 위해 [Day.js](https://day.js.org)를 사용하고 있습니다.  
Day.js는 동일한 API를 사용하는 Moment.js를 대체하는 불변적인 date-time 라이브러리입니다.

다른날짜 라이브러리를 사용하고싶다면 (**Ant design은 현재 다음 라이브러리를 지원합니다. [moment](http://momentjs.com/), [date-fns](https://date-fns.org), [luxon](https://moment.github.io/luxon/)**). 우리는 커스터마이징하는 두가지 방법을 제공합니다:

## Custom component

첫 번째 방법은 Picker 컴포넌트를 만드는걸 도와주는 `generatePicker` (또는 `generateCalendar`)를 사용하는 것입니다.

첫째로, `create-react-app`로 antd 데모를 초기화 합니다. First, we initialize an antd demo with `create-react-app`. [create-react-app 사용법](/docs/react/use-with-create-react-app)을 참조하거나, 다음에서 직접 시작할 수 있습니다.[antd 초기화](https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6)

### DatePicker.tsx

Create `src/components/DatePicker.tsx`.

예시:

```tsx
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);

export default MyDatePicker;
```

### TimePicker.tsx

Create `src/components/TimePicker.tsx`.

예시:

```tsx
import * as React from 'react';
import type { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import type { Moment } from 'moment';

import DatePicker from './DatePicker';

export interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;
```

### Calendar.tsx

Create `src/components/Calendar.tsx`.

예시:

```tsx
import { Calendar } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/es/generate/moment';

const MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);

export default MyCalendar;
```

### 커스텀 컴포넌트 Export하기

Create `src/components/index.tsx`.

예시:

```tsx
export { default as Calendar } from './Calendar';
export { default as DatePicker } from './DatePicker';
export { default as TimePicker } from './TimePicker';
```

### 커스텀 컴포넌트 사용하기

Modify `src/App.tsx`,import `moment` and custom component.

```diff
- import { DatePicker, Calendar } from 'antd';
- import format from 'dayjs';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'moment';
```

## antd-moment-webpack-plugin

또한 다른 구현도 제공하고 있는데, `@ant-design/moment-webpack-plugin`으로 구현하며, 기존 코드를 전혀 변경하지 않고 `moment`를 `Day.js`로 직접 대체하는 것입니다. 자세한 내용은 [@ant-design/moment-webpack-plugin](https://github.com/ant-design/antd-moment-webpack-plugin)에서 확인할 수 있습니다.

```js
// webpack-config.js
const AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

## date-fns 사용하기

[date-fns](https://date-fns.org/)는 현재 `dayjs`와 유사한 커스텀 컴포넌트 메소드를 제공합니다. 다른점은 사용되는 매개변수 타입이 다르다는 것입니다. 이 지원은 antd 4.5.0 버전 이상에서 제공됩니다.

예시:

### DatePicker.tsx

`src/components/DatePicker.tsx`를 생성하세요.

다음과 같이 코드를 작성하세요:

```tsx
import { DatePicker } from 'antd';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default MyDatePicker;
```

## Use luxon

`antd 5.4.0` 부터, `dayjs`대신 [luxon](https://moment.github.io/luxon/)를 사용할 수 있으며, 동일한 기능을 지원합니다. 그러나 동작의 다른 점을 소개하고 있습니다. 아래에서 설명하겠습니다.

### 구현 Implementation

`src/components/DatePicker.tsx` 파일을 생성하고, 다음과 같이 luxon에 기반한 피커를 만드세요:

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const MyDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);

export default MyDatePicker;
```

### dayjs와의 주요 차이점

luxon 사용자들은 luxon이 지역화를 위한 사용자 정의 구현을 제공하지 않는다는 점을 잘 알고 있어야 합니다. 대신, 브라우저의 기본 [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)에 의존합니다.

이로 인해 다른 날짜 라이브러리와의 포맷에 몇 가지 차이점이 생겼습니다. 오늘부터 주요 차이점은 다음과 같습니다:

- locale에 관계없이 요일은 항상 월요일입니다.
- 요일 번호는 때때로 다릅니다(ISO 주 규칙을 사용하여 결정).
- 사용자 정의 locale의 경우 짧은 요일 형식이 다를 수 있습니다(2자 대신 3자로 표시될 수 있음).
- 선택한 주 레이블 형식이 약간 다릅니다(예: “2021-1st” 대신 “2021-01”).

luxon 설정을 조정하여 이러한 기본 luxon 동작을 사용자 정의할 수 있습니다:

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const customLuxonConfig = {
  ...luxonGenerateConfig,
  getWeekFirstDay(locale) {
    // 여기에 사용자 정의 구현을 작성하세요
  },
};

const MyDatePicker = DatePicker.generatePicker<DateTime>(customLuxonConfig);

export default MyDatePicker;
```

이러한 사용자 정의를 수행하면 결과적으로 DatePicker의 동작이 예상치 못한 방식으로 변경될 수 있으므로 반드시 예외 상황에 대해 테스트해야 합니다.
