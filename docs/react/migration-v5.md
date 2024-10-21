---
group:
  title: Migration
  order: 2
order: 0
title: V4 to V5
---

이 문서는 antd `4.x` 버전에서 antd `5.x` 버전으로 업그레이드하는 데 도움이 됩니다. `3.x` 이하 버전을 사용하고 계시다면 이전 [업그레이드 문서](https://4x.ant.design/docs/react/migration-v4)를 참고하여 4.x로 변경하시기 바랍니다.

## 업그레이드 준비

1. 먼저 최신 버전인 4.x로 업그레이드 하신 후, 콘솔 경고 메시지에 따라 관련 API를 제거/수정하시기 바랍니다.

## v5에서 호환되지 않는 변경 사항

### 디자인 사양

- 기본 둥근 모서리 조정: `2px`에서 `2px` `4px` `6px` 및 `8px`의 4개 radius 레이어로 변경되었습니다. 예를 들어 기본 버튼의 반경은 `2px`에서 `6px`로 수정됩니다.
- 주요 색상 조정: `#1890ff`에서 `#1677ff`로 변경되었습니다.
- 전역 shadow 최적화: 공통 구성 요소(예: Card 등) 및 팝업 구성 요소(예: Dropdown)에 사용되는 shadow가 3개 레이어에서 2개 레이어로 조정되었습니다.
- 와이어프레임 사용량의 전반적인 감소

### 기술 조정

- 동적 테마를 더 효과적으로 지원하려면 less를 제거하고 CSS-in-JS를 채택하세요. 하단 레이어에서는 [@ant-design/cssinjs](https://github.com/ant-design/cssinjs)를 솔루션으로 사용합니다.
  - less 파일이 모두 제거되고 less 변수가 더 이상 export되지 않습니다.
  - CSS 파일은 더 이상 패키지에 포함되지 않습니다. CSS-in-JS는 요청 시 import를 지원하므로 기존 `antd/dist/antd.css`도 폐기되었습니다. 일부 기본 스타일을 재설정해야 하는 경우 `antd/dist/reset.css`를 import하세요.
  - 구성 요소의 스타일을 재설정해야 하지만 `antd/dist/reset.css`를 도입하여 전역 스타일을 오염시키고 싶지 않은 경우, 기본 요소에 antd 사양 스타일이 없는 문제를 해결하기 위해 가장 바깥쪽 레이어인 [App](/components/app)을 사용해 볼 수 있습니다.
- css 변수와 그 위에 구축된 동적 테마를 제거합니다.
- LocaleProvider는 4.x에서 더 이상 사용되지 않으며(deprecated)(대신 `<ConfigProvider locale />` 사용) 5.x에서는 관련 폴더 `antd/es/locale-provider` 및 `antd/lib/locale-provider`를 제거했습니다.
- 내장된 Moment.js를 Dayjs로 교체하세요. 자세한 내용: [custom date library 사용](/docs/react/use-custom-date-library/).
- `babel-plugin-import`는 더 이상 지원되지 않습니다. CSS-in-JS 자체에는 요청 시 가져오기 기능이 있으며 더 이상 플러그인 지원이 필요하지 않습니다. Umi 사용자는 관련 구성을 제거할 수 있습니다.

  ```diff
  // config/config.ts
  export default {
    antd: {
  -   import: true,
    },
  };
  ```

### 호환성

- 더 이상 IE 브라우저를 지원하지 않습니다.

#### 컴포넌트 API 조정

- 컴포넌트 팝업 박스의 classname API가 `popupClassName`으로 통일되고, `dropdownClassName` 및 기타 유사한 API가 대체됩니다.

  - AutoComplete
  - Cascader
  - Select
  - TreeSelect
  - TimePicker
  - DatePicker
  - Mentions

  ```diff
    import { Select } from 'antd';

    const App: React.FC = () => (
      <Select
  -     dropdownClassName="my-select-popup"
  +     popupClassName="my-select-popup"
      />
    );

    export default App;
  ```

- 컴포넌트 팝업의 제어되는 visible API가 `open`으로 통일되고, `visible` 및 기타 유사한 API가 대체됩니다.

  - Drawer `visible`이 `open`으로 변경되었습니다.
  - Modal `visible`이 `open`으로 변경되었습니다.
  - Dropdown `visible`이 `open`으로 변경되었습니다.
  - Tooltip `visible`이 `open`으로 변경되었습니다.
  - Tag `visible`이 삭제되었습니다.
  - Slider `tooltip` 관련 API가 `tooltip` 속성으로 통합되었습니다.
  - Table `filterDropdownVisible`이 `filterDropdownOpen`으로 변경되었습니다.

  ```diff
    import { Modal, Tag, Table, Slider } from 'antd';

    const App: React.FC = () => {
      const [visible, setVisible] = useState(true);

      return (
        <>
  -       <Modal visible={visible}>content</Modal>
  +       <Modal open={visible}>content</Modal>

  -       <Tag visible={visible}>tag</Tag>
  +       {visible && <Tag>tag</Tag>}

          <Table
            data={[]}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
  -             filterDropdownVisible: visible,
  +             filterDropdownOpen: visible,
              }
            ]}
          />

  -       <Slider tooltipVisible={visible} />
  +       <Slider tooltip={{ open: visible }} />
        </>
      );
    }

    export default App;
  ```

- `getPopupContainer`: 모든 `getPopupContainer`는 고유한 div를 반환하도록 보장됩니다. 이 메서드는 React 18 concurrent 모드에서 반복적으로 호출됩니다.
- 업로드 목록 구조가 변경됩니다. [#34528](https://github.com/ant-design/ant-design/pull/34528)
- 알림
  - 정적 메서드는 더 이상 `open`에서 `prefixCls` `maxCount` `top` `bottom` `getContainer`를 동적으로 설정할 수 없습니다. 알림 정적 메서드에는 이제 인스턴스가 하나만 있습니다. 다른 구성이 필요한 경우 `useNotification`을 사용하세요.
  - `close`는 메시지와 일치하도록 `destroy`로 이름이 변경되었습니다.
- Drawer `style` & `className`은 Drawer panel 노드로 마이그레이션되고 원래 속성은 `rootClassName` 및 `rootStyle`로 대체됩니다.
- 4.x에서 더 이상 사용되지 않는(deprecated) `message.warn`이 완전히 제거되었습니다. 대신 `message.warning`을 사용하십시오.

#### Component 리팩토링 및 제거

- `locale-provider` 디렉터리를 제거합니다. `LocaleProvider`는 v4에서 제거되었습니다. 대신 `ConfigProvider`를 사용하세요.
- Comment component를 `@ant-design/compatible`로 이동합니다.
- PageHeader component를 `@ant-design/pro-components`로 이동합니다.

  ```diff
  - import { PageHeader, Comment } from 'antd';
  + import { Comment } from '@ant-design/compatible';
  + import { PageHeader } from '@ant-design/pro-components';

    const App: React.FC = () => (
      <>
        <PageHeader />
        <Comment />
      </>
    );

    export default App;
  ```

- BackTop은 `5.0.0`에서 더 이상 사용되지 않으며(deprecated) FloatButton에 병합됩니다.

  ```diff
  - import { BackTop } from 'antd';
  + import { FloatButton } from 'antd';

    const App: React.FC = () => (
      <div>
  -     <BackTop />
  +     <FloatButton.BackTop />
      </div>
    );

    export default App;
  ```

## 업그레이드 시작

git을 사용하여 코드를 저장하고 최신 버전을 설치하세요:

```bash
npm install --save antd@5.x
```

If you want to use v4 deprecated component like `Comment` or `PageHeader`. You can install `@ant-design/compatible` and `@ant-design/pro-components` for compatible:

```bash
npm install --save @ant-design/compatible@v5-compatible-v4
npm install --save @ant-design/pro-components
```

수정을 위해 위 목록과 비교하여 코드를 하나씩 수동으로 확인할 수 있습니다. 또한 v5로 빠르게 업그레이드할 수 있도록 codemod cli 도구 [@ant-design/codemod-v5](https://github.com/ant-design/codemod-v5)도 제공합니다.

codemod cli를 실행하기 전에 로컬 코드 변경 사항을 제출하세요.

```shell
# Run directly through npx
npx -p @ant-design/codemod-v5 antd5-codemod src

# Or run directly through pnpm
pnpm --package=@ant-design/codemod-v5 dlx antd5-codemod src
```

<video autoplay="" loop="" style="width: 100%; max-height: 600px; object-fit: contain;">
  <source src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/file/A*Sjy5ToW6ow0AAAAAAAAAAAAADrJ8AQ" type="video/webm">
  <source src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/file/A*hTDYQJ2HFTYAAAAAAAAAAAAADrJ8AQ" type="video/mp4">
</video>

> codemod가 모든 시나리오를 다룰 수는 없으므로 호환되지 않는 변경 사항을 하나씩 확인하는 것이 좋습니다.

### less 마이그레이션

antd less 변수를 사용하는 경우 compatible 패키지를 사용하여 이를 v4 less 변수로 변환하고 less-loader를 사용하여 주입할 수 있습니다:

```js
const { theme } = require('antd/lib');
const { convertLegacyToken, defaultTheme } = require('@ant-design/compatible/lib');

const { defaultAlgorithm, defaultSeed } = theme;

const mapV5Token = defaultAlgorithm(defaultSeed);
const v5Vars = convertLegacyToken(mapV5Token);
const mapV4Token = theme.getDesignToken(defaultTheme);
const v4Vars = convertLegacyToken(mapV4Token);

// Webpack Config
module.exports = {
  // ... other config
  loader: 'less-loader',
  options: {
    lessOptions: {
      modifyVars: v5Vars, // or v4Vars
    },
  },
};
```

그런 다음 less 파일에서 antd less 참조를 제거합니다:

```diff
// 귀하의 less file
--  @import (reference) '~antd/es/style/themes/index';
또는
--  @import '~antd/es/style/some-other-less-file-ref';
```

### babel-plugin-import 제거

package.json에서 `babel-plugin-import`를 제거하고 `.babelrc`를 수정합니다:

```diff
"plugins": [
- ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "antd"],
]
```

Umi 사용자는 config를 통해 비활성화할 수 있습니다:

```diff
// config/config.ts or .umirc
export default {
  antd: {
-   import: true,
+   import: false,
  },
};
```

### Day.js locale 교체

moment.js locale을 day.js locale로 바꿉니다:

```diff
-   import moment from 'moment';
+   import dayjs from 'dayjs';
-   import 'moment/locale/zh-cn';
+   import 'dayjs/locale/zh-cn';

-   moment.locale('zh-cn');
+   dayjs.locale('zh-cn');
```

🚨 day.js 플러그인 시스템에 주의를 기울여야 합니다. 원래 moment.js에 있던 기능을 day.js에서 사용할 수 없는 경우에는 [day.js 플러그인 문서](https://day.js.org/docs/en/plugin/plugin)를 참고하시기 바랍니다.

day.js로 교체하고 싶지 않다면 `@ant-design/moment-webpack-plugin`을 사용하여 moment.js를 유지할 수 있습니다.

```bash
npm install --save-dev @ant-design/moment-webpack-plugin
```

```javascript
// webpack-config.js
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

### v4 테마로 전환

업그레이드 후 스타일이 변경되는 것을 원하지 않는 경우, v4 스타일을 복원할 수 있는 `@ant-design/compatible`에 v4 테마를 제공합니다.

````diff

```sandpack
const sandpackConfig = {
  dependencies: {
    '@ant-design/compatible': 'v5-compatible-v4',
  },
};

import {
  defaultTheme,   // Default theme
  darkTheme,      // Dark theme
} from '@ant-design/compatible';
import { ConfigProvider, Button, Radio, Space } from 'antd';

export default () => (
  <ConfigProvider theme={defaultTheme}>
    <Space direction="vertical">
      <Button type="primary">Button</Button>
      <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </Space>
  </ConfigProvider>
);
````

### 레거시 브라우저 지원

Ant Design v5는 CSS-in-JS 해시 우선순위를 줄이기 위해 `:where` css selector를 사용합니다. 이 기능을 취소하려면 `@ant-design/cssinjs` `StyleProvider`를 사용할 수 있습니다. [호환 조정](/docs/react/customize-theme#compatible-adjustment)을 참조하세요.

## 여러 버전이 공존합니다

여러 버전이 공존하는 것은 권장하지 않습니다. 그러면 애플리케이션이 더 복잡해집니다(예: 스타일 재정의, ConfigProvider 재사용 안 됨 등). 페이지 수준 개발에는 [qiankun](https://qiankun.umijs.org/)과 같은 마이크로 애플리케이션을 사용하는 것이 좋습니다.

### alias를 통해 v5 설치

```bash
$ npm install --save antd-v5@npm:antd@5
# or
$ yarn add antd-v5@npm:antd@5
# or
$ pnpm add antd-v5@npm:antd@5
```

package.json은 다음과 같습니다:

```json
{
  "antd": "4.x",
  "antd-v5": "npm:antd@5"
}
```

이제 프로젝트의 antd는 여전히 v4이고 antd-v5는 v5입니다.

```tsx
import React from 'react';
import { Button as Button4 } from 'antd'; // v4
import { Button as Button5 } from 'antd-v5'; // v5

export default () => (
  <>
    <Button4 />
    <Button5 />
  </>
);
```

그런 다음 스타일 충돌을 방지하려면 ConfigProvider의 `prefixCls`를 구성하세요:

```tsx
import React from 'react';
import { ConfigProvider as ConfigProvider5 } from 'antd-v5';

export default () => (
  <ConfigProvider5 prefixCls="ant5">
    <MyApp />
  </ConfigProvider5>
);
```

## 문제 발생

업그레이드 중에 문제가 발생하면 [GitHub issues](https://new-issue.ant.design/)로 이동하여 의견을 보내주세요. 저희가 가능한 빠른 시일 내에 답변하여 해당 문서를 개선하도록 하겠습니다.
