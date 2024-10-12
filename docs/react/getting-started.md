---
group:
  title: 기본 사용법
  order: 0
order: 0
title: 시작하기
---

Ant Design React는 프로그래머들에게 **좋은 개발 경험**을 제공하기 위해 전념하고 있습니다. 시작에 앞서, learn [React](https://react.dev) 를 먼저 배우는 것을 추천드리며, [Node.js](https://nodejs.org/) 버전 16 혹은 이상을 올바르게 설치하고 구성하는 것을 권장합니다.

공식적 가이드는 HTML, CSS, Javascript, React에 대해 중급정도의 학습 지식을 가지고 있는 걸로 가정합니다. 만약 프론트엔드나 React를 시작하는 단계라면 첫 단계로서 UI 프레임워크를 사용하는 것은 좋은 방법이 아닐 수 있습니다.

마지막으로, 만약 로컬 개발환경에서 일하고 있다면, [Use with create-react-app](/docs/react/use-with-create-react-app)을 참조해주세요.

---

## 당신의 첫번째 예시

다음은 간단한 Ant Design React의 사용을 보여줄 간단한 Ant Design 컴포넌트 온라인 codesandbox 데모입니다.

```sandpack
const sandpackConfig = {
  autorun: true,
};

import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';

const App = () => (
  <div style={{ padding: '0 24px' }}>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </div>
);

export default App;
```

아래 단계를 따라 직접 Ant Design을 사용해보세요:

### 1. codesandbox 만들기

https://u.ant.design/codesandbox-repro를 방문하여 codesandbox를 만드세요 -- 새로운 인스턴스 생성을 위한 저장 버튼 누르기도 잊지 마세요.

### 2. antd 컴포넌트 사용 및 수정하기

`index.js`의 내용을 다음 코드로 교체하세요. 보시다시피,antd 컴포넌트와 React컴포넌트와 다른점이 없습니다.

만약 이미 [create-react-app로 사용하기](/docs/react/use-with-create-react-app)를 따라 이미 설정을 마쳤다면, 다음과 같이 `/src/index.js`내용을 교체하세요.

```jsx
import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import { createRoot } from 'react-dom/client';

import './index.css';

const App = () => {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value) => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      {contextHolder}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
```

### 3. 더 많은 컴포넌트 탐색하기

컴포넌트 페이지의 사이드 메뉴에서 [Alert](/components/alert) 컴포넌트와 같은 컴포넌트 목록을 볼 수 있습니다. 컴포넌트 페이지와 API 문서에는 다양한 예제들도 함께 제공되어있습니다.

첫 번째 예제에서 "편집기에서 열기" 아이콘을 클릭하면 소스 코드가 포함된 편집기가 열립니다. 이제 codesandbox에 `Alert` 컴포넌트를 다음과 같이 가져올 수 있습니다:

```diff
- import { DatePicker, message } from 'antd';
+ import { DatePicker, message, Alert } from 'antd';
```

이제 `render`함수 내부에 다음 jsx를 추가하세요.

```diff
  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 20 }}>
-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
+   <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
  </div>
```

날짜를 선택하면 오른쪽 미리보기 영역에서 그 효과를 확인할 수 있습니다:

<img width="420" src="https://gw.alipayobjects.com/zos/antfincdn/JrXptUm1Nz/6b50edc4-3a3c-4b2a-843e-f9f0af2c4667.png" alt="codesandbox screenshot" />

좋아요! 이제좋습니다! 이제 antd 컴포넌트 사용의 기본을 알게 되었으니, codesandbox에서 더 많은 컴포넌트를 자유롭게 탐험해 보세요. ant design에 대한 버그를 보고할 때도, 재현 가능한 데모를 제공하기 위해 codesandbox를 사용하는 것을 강력히 권장합니다.

### 4. Next Steps

실제 프로젝트 개발 중에는 `컴파일/빌드/배포/린트/디버깅/` 배포로 구성된 개발 워크 플로우를 필요로 할 가능성이 높습니다. 아래의 문서를 읽거나 아래 제공된 스캐폴드 및 예제를 사용할 수 있습니다.

- [Ant Design Pro](https://pro.ant.design/)
- [create-next-app](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-inline-style)
- [Scaffold Market](https://scaffold.ant.design/)에서 더 많은 스캐폴드 확인

## Jest로 테스트하기

`create-react-app`을 시용한다면 대신 [여기](/docs/react/use-with-create-react-app)의 지침을 따르세요.

Jest는 `esm`모듈을 지원하지 않으나, Ant Design은 이를 사용합니다. Ant Design 애플리케이션을 Jest로 사용하기 위해선 아래의 Jest 구성에 다음을 추가해야 합니다:

```json
"transform": { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" }
```

## 필요에 따라 Import하기

`antd`는 ES 모듈의 트리쉐이킹을 지원하므로, `import { Button } from 'antd';`를 사용하면 사용하지 않은 js 코드가 제거됩니다.

## 워크플로우 커스터마이징

만약 워크 플로우를 커스터마이징 하려면 [webpack](https://webpack.js.org) 또는 [vite](https://vitejs.dev/)를 사용하여 빌드하고 디버깅할것을 추천합니다. React생테계에서 다양한[보일러플레이트](https://github.com/enaqx/awesome-react#react-tools)를 시도해볼 수 있습니다.

antd와 이미 통합된 [스캐폴드](https://scaffold.ant.design/)도 있으므로 이것들 중 하나로 시작해보고 기여할 수도 있습니다.
