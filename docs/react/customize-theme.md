---
group:
  title: 고급기능
  order: 1
order: 0
title: 테마 커스터마이징
---

비즈니스에서의 UI 다양성 또는 primary 색상, border radius, border color 등을 포함한 브랜드 요구사항을 만족시키기 위해 Ant Design은 디자인 토큰을 커스터마이징 할수 있습니다.

5.0버전에서 테마를 커스터마이징하는 새로운 방법을 제공하고 있습니다. 4.x버전의 less와 CSS 변수와 다르게, CSS-in-JS로 테마 능력은 강화되었고, 다음이 포함되었지만 이에 국한되지 않습니다:

1. 동적으로 테마 변경；
2. 여러개의 테마；
3. 일부 컴포넌트에서의 테마 변수 커스터마이징；
4. ...

## 기본적 사용법

5.0버전에서 우리는 테마에 영향을 미치는 가장 작은 엘리먼트를 **디자인 토큰**이라고 부릅니다. 디자인토큰을 수정하여, 다양한 테마나 컴포넌트를 나타낼 수 있습니다. `ConfigProvider`에 `theme`를 전달하여 테마를 커스터마이징 할 수 있습니다. V5로 마이그레이션 한 후에는 V5테마가 기본적으로 적용될 것입니다.

<!-- prettier-ignore -->
:::warning
`ConfigProvider`는 `message.xxx`, `Modal.xxx`, `notification.xxx`,와 같은 정적 메서드에 영향을 미치지 않을 것입니다. 이 메서드들에서 antd가 리액트 속성인 `ReactDOM.render`를 통해 동적으로 생성할 것이기 때문입니다. 이러한 컨텍스트는 현재 코드의 컨텍스트와 동일하지 않으므로 컨텍스트 정보를 얻을 수 없습니다.

<!-- prettier-ignore -->
컨텍스트 정보가 필요하다면 (ConfigProvider에 의해 구성된 컨텐트와 같은 것),  `Modal.useModal`메서드를 사용하여 모달 속성과 컨텍스트홀더 노드를 리턴 할 수 있습니다. 컨텍스트를 얻고자 하는 곳에 삽입하거나, 모달을 사용하는 것의 문제를 단순화 하기 위해 [앱 컴포넌트](/components/app)를 사용하거나, 수동으로 컨텍스트 홀더를 주입해야할 수도 있습니다.
:::

### 디자인토큰 커스터마이징 하기

`theme`의 프로퍼티 `token`을 수정함으로써 디자인 토큰을 전역으로 수정할 수 있습니다. 일부 토큰은 다른 토큰에 영향을 미칠 것입니다. 이러한 토큰을 시드 토큰(Seed Token)이라고 일컫습니다.

```sandpack
const sandpackConfig = {
  autorun: true,
};

import { Button, ConfigProvider, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // 시드 토큰 (Seed Token)
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // 별칭(Alias) 토큰 (Alias Token)
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
);

export default App;
```

### 현재 알고리즘 사용하기

다양한 스타일의 테마는 `algorithm`을 수정함으로써 빠르개 생성될 수 있습니다. Ant Design 5.0은 세가지의 프리셋 알고리즘을 기본적으로 제공합니다:

- 기본 알고리즘(default algorithm) `theme.defaultAlgorithm`
- 다크 알고리즘(dark algorithm) `theme.darkAlgorithm`
- 소형 알고리즘(compact algorithm) `theme.compactAlgorithm`

ConfigProvider에서 `theme`의 `algorithm` 프로퍼티를 수정함으로써 알고리즘을 변경할 수 있습니다.

```sandpack
const sandpackConfig = {
  dark: true,
};

import React from 'react';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      // 1. 다크 알고리즘 사용
      algorithm: theme.darkAlgorithm,

      // 2. 다크 알고리즘과 소형 알고리즘 합성하기
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Space>
      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>
    </Space>
  </ConfigProvider>
);

export default App;
```

### 컴포넌트 토큰 커스터마이징

디자인토큰에 추가적으로 각 컴포넌트는 컴포넌트 스타일 커스터마이징 호환성을 가지기 위해 자신의 컴포넌트 토큰 또한 가지고 있습니다. 그리고 각각의 컴포넌트는 다른 컴포넌트에 영향을 미치지 않습니다. 이와 비슷하게 컴포넌트의 디자인토큰은 다음 방식으로 재정의 될 수 있습니다.

<!-- prettier-ignore -->
:::info{title=Algorithm of Component Token}
기본적으로 모든 컴포넌트 토큰은 오직 글로벌 토큰만 재정의 할 수 있으며 시드 토큰에 기반해서 파생되지 않습니다.

<!-- prettier-ignore -->
`>= 5.8.0` 버전에서, 컴포넌트 토큰은  알고리즘을 활성화 하거나 혹은 알고리즘을 전달할 수 있도록  해주는 `algorithm` 프로퍼티를 지원합니다.

:::

```sandpack
import React from 'react';
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';

const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
            algorithm: true, // 알고리즘 활성화
          },
          Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // 알고리즘 활성화
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>Enable algorithm: </div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
    <Divider />
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
          },
          Input: {
            colorPrimary: '#eb2f96',
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>Disable algorithm: </div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
  </>
);

export default App;
```

### 모션 비활성화

antd는 기업레벨(enterprise-level)페이지를 더욱 디테일하게 만들기 위해 빌트인 인터렉션 애니메이션을 가지고 있습니다. 일부 극단적인 시나리오에서 페이지 인터렉션 퍼포먼스에 영향을 줄 수 있습니다. 만약 애니메이션을 끄고 싶다면 `token`의 `motion`속성을 `false`로 설정하세요:

```sandpack
import React from 'react';
import { Checkbox, Col, ConfigProvider, Flex, Radio, Row, Switch } from 'antd';

const App: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const timerRef = React.useRef<ReturnType<typeof setInterval>>();
  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setChecked((prev) => !prev);
    }, 500);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const nodes = (
    <Flex gap="small">
      <Checkbox checked={checked}>Checkbox</Checkbox>
      <Radio checked={checked}>Radio</Radio>
      <Switch checked={checked} />
    </Flex>
  );

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>{nodes}</Col>
      <Col span={24}>
        <ConfigProvider theme={{ token: { motion: false } }}>{nodes}</ConfigProvider>
      </Col>
    </Row>
  );
};

export default App;
```

## 고급 기능

### 동적으로 테마 바꾸기

v5에서 동적으로 테마를 변경하는 것은 유저에게 매우 간단합니다. 어떤 추가 구성없이도 어느 때에나`ConfigProvider`에 `theme`프로퍼티를 동적으로 테마를 변경할 수 있습니다.

```sandpack
import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const [primary, setPrimary] = React.useState('#1677ff');

  return (
    <>
      <ColorPicker showText value={primary} onChange={(color) => setPrimary(color.toHexString())} />
      <Divider />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primary,
          },
        }}
      >
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  );
}

export default App;
```

### 중첩 테마

`ConfigProvider`를 중첩하여 페이지의 일부분을 지역테마로 적용할 수 있습니다. 변경되지 않은 자식 테마 디자인토큰은 부모 테마에서 상속될 것입니다.

```sandpack
import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
      },
    }}
  >
    <Space>
      <Button type="primary">Theme 1</Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <Button type="primary">Theme 2</Button>
      </ConfigProvider>
    </Space>
  </ConfigProvider>
);

export default App;
```

### 디자인 토큰 사용하기

현재 테마의 디자인 토큰을 사용하고 싶다면 디자인 토큰을 얻기 위한 `useToken`훅을 제공합니다.

```sandpack
import React from 'react';
import { Button, theme } from 'antd';

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorPrimaryBg,
        padding: token.padding,
        borderRadius: token.borderRadius,
        color: token.colorPrimaryText,
        fontSize: token.fontSize,
      }}
    >
      Consume Design Token
    </div>
  );
};

export default App;
```

### 정적 소비 (예: 적게)

리액트 라이프 사이클 외부에서 토큰이 필요하다면, 정적 함수를 사용할 수 있습니다:

```jsx
import { theme } from 'antd';

const { getDesignToken } = theme;

const globalToken = getDesignToken();
```

ConfigProvider와 동일하게 `getDesignToken`은 `theme`로서 구성 객체를 받아들일 수 있습니다:

```tsx
import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { createRoot } from 'react-dom/client';

const { getDesignToken, useToken } = theme;

const config: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
  },
};

// 정적 함수
const globalToken = getDesignToken(config);

// 훅을 사용하여
const App = () => {
  const { token } = useToken();
  return null;
};

// 렌더링 예시
createRoot(document.getElementById('#app')).render(
  <ConfigProvider theme={config}>
    <App />
  </ConfigProvider>,
);
```

less와 같은 프리프로세스 스타일 프레임워크를 사용하고 싶다면, 주입을 위해 less-loader를 사용하세요:

```jsx
{
  loader: "less-loader",
  options: {
    lessOptions: {
      modifyVars: mapToken,
    },
  },
}
```

호환성 패키지는 v4 less변수로 변경을 위한 컨버트 함수를 제공합니다. 상세 내용이 필요하다면 [이것](/docs/react/migration-v5)을 읽어보세요

### 테마 에디터

유저가 테마 디버깅을 돕기 위해 도구를 제공하고 있습니다: [테마 에디터](/theme-editor)

테마 요구를 충족하기 위해 이 도구를 사용해 자유롭게 디자인 토큰을 수정할 수 있습니다.

## 디자인 토큰

이 세 가지 토큰 세트는 단순히 함께 그룹화된 것이 아니라 시드 토큰이 맵 토큰에서 파생되고, 맵 토큰이 별칭(Alias) 토큰에서 파생되는 3계층 파생 관계입니다. 대부분의 경우 시드 토큰을 사용하면 테마를 사용자 정의할 필요성을 충족할 수 있습니다. 대부분의 경우 시드 토큰은 테마 커스터마이징에 충분하지만, 더 높은 수준의 테마 커스터마이징이 필요한 경우 디자인 토큰의 라이프사이클을 이해해야 합니다.

디자인 토큰에서는 디자인 토큰을 시드토큰, 맵토큰, 별칭(Alias) 토큰으로 구분하여 보다 디자인 친화적인 3계층 구조를 제공합니다.이 세 가지 그룹의 토큰은 단순한 그룹화가 아니라, 시드 토큰은 맵 토큰에서 파생되고, 맵 토큰이 별칭(Alias) 토큰에서 파생되는 3계층 파생관계입니다. 대부분의 경우 시드 토큰을 사용하는 것은 커스텀 테마에서 충분합니다. 만약 더 높은 수준의 테마 커스터마이징이 필요하다면 antd의 디자인토큰 라이프 사이클을 이해해야 합니다.

### 디자인 토큰의 진화과정

![토큰](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ)

### 시드 토큰

시드 토큰은 모든 디자인 의도의 근원을 의미합니다. 예를들어, `colorPrimary`를 변경함으로써 테마 색상을 변경할 수 있으며, antd 내부 알고리즘은 자동으로 계산하며 시드 토큰에 따른 적합한 색상 시리즈를 적용할 것입니다:

```tsx
const theme = {
  token: {
    colorPrimary: '#1890ff',
  },
};
```

### 맵 토큰

맵토큰은 시드에서 파생된 그라데이션 변수입니다. `theme.algorithm`를 활용해 커스텀 맵토큰을 주입하는것이 좋습니다. 이것은 맵토큰과의 그라데이션 관계를 보장할 수 있습니다. 일부 맵토큰을 개별적으로 수정하기 위해 `theme.token`에 의해 재정의 될 수 있습니다.

```tsx
const theme = {
  token: {
    colorPrimaryBg: '#e6f7ff',
  },
};
```

### 별칭(Alias) 토큰

별칭(Alias) 토큰은 일부 공통 컴포넌트, 기본적으로 맵 토큰 별칭 또는 특수 처리된 맵 토큰의 스타일을 일괄적으로 제어하는 데 사용됩니다.

```tsx
const theme = {
  token: {
    colorLink: '#1890ff',
  },
};
```

### 알고리즘

기본 알고리즘은 기본 색상의 그라디언트 색상 팔레트를 계산하는 것과 같은 것이나 기본 둥근 모서리에서의 둥근 모서리의 다양한 사이즈를 계산하는 것과 같은 맵 토큰 내에 시드 토큰을 확장하기 위해 사용됩니다. 알고리즘은 낱개 또는 어떤 혼합으로서 사용될 수 있습니다. 예를들어 다크와 소형 알고리즘은 다크와 소형 테마를 얻기 위해 합성될 수 있습니다.

```tsx
import { theme } from 'antd';

const { darkAlgorithm, compactAlgorithm } = theme;

const theme = {
  algorithm: [darkAlgorithm, compactAlgorithm],
};
```

## API

### 테마

| 속성 | 설명 | 타입 | 기본값 |
| --- | --- | --- | --- |
| 토큰 | 디자인 토큰 수정 | `AliasToken` | - |
| 상속 | 상위 ConfigProvider에 구성되어있는 테마 상속 | boolean | true |
| 알고리즘 | 테마 알고리즘 수정 | `(token: SeedToken) => MapToken` \| `((token: SeedToken) => MapToken)[]` | `defaultAlgorithm` |
| 컴포넌트 | 컴포넌트에 적용된 컴포넌트 토큰과 별칭(Alias)토큰 수정 | `ComponentsConfig` | - |
| css변수 | CSS변수 토글을 위해 [CSS 변수](/docs/react/css-variables#api)를 참조 | `boolean \| { prefix?: string; key?: string }` | false |
| 해시 | 컴포넌트 클래스 해시 값 [CSS Variables](/docs/react/css-variables#disable-hash) 참조 | boolean | true |

### 컴포넌트 구성

| 프로퍼티 | 설명 | 타입 | 기본값 |
| --- | --- | --- | --- |
| `Component` (antd의 `Button`과 같은 모든 컴포넌트 이름이 될 수 있음) | 컴포넌트 토큰 수정하기 혹은 별칭(Alias) 토큰 재정의 하기 | `ComponentToken & AliasToken & { algorithm: boolean \| (token: SeedToken) => MapToken` \| `((token: SeedToken) => MapToken)[]}` | - |

> 컴포넌트의 `algorithm`은 기본값이 `false`입니다. 이는 컴포넌트 토큰만 전역 토큰을 재정의 한다는 의미입니다. `true`로 설정되면, 알고리즘은 전역 알고리즘과 동일하게 작동 될 것입니다. 알고리즘 또는 알고리즘 배열을 전달할 수 있습니다. 이것은 전역 알고리즘을 재정의 합니다.

### 시드토큰

<TokenTable type="seed"></TokenTable>

### 맵토큰

> 모든 시드토큰 프로퍼티 상속

<TokenTable type="map"></TokenTable>

### 별칭(Alias)토큰

> 모든 시드토큰과 맵토큰 프로퍼티 상속

<TokenTable type="alias"></TokenTable>

## FAQ

### 왜 `undefined`에서 어떤 객체로 `theme`가 변경될때 혹은 어떤 객체에서 `theme`로 변경될 때 컴포넌트가 재 마운트 되나요?

ConfigProvider에서 `DesignTokenContext`을 통해 컨텍스트를 전달합니다. `theme` 가 `undefined`일 때, 프로바이더 계층은 설정되지 않습니다. 즉 React VirtualDOM 구조는 처음부터 변경되거나 존재하는 것에서 존재하지 않는것으로 변경되어 컴포넌트의 재 마운트를 야기합니다. 해결방법: `undefined`를 빈 객체 `{}`로 대체하세요.
