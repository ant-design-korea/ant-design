---
group:
  title: 기본 사용법
order: 1
title: create-react-app과 함께 사용하는 법
---

[create-react-app](https://create-react-app.dev/)은 가장 훌륭한 React 개발 도구 중 하나입니다. 이 글에서는 `create-react-app`을 사용해 `TypeScript` 프로젝트를 생성하고, antd를 소개해볼 것입니다.

> 가장 최신의 안정적인 버전인 TypeScript (`>=5.0.0`)을 기반으로 `antd`를 빌드하므로, 프로젝트 의존성이 이 버전과 맞는지 꼭 확인해주세요.

## 설치 및 초기화

시작하기 전에, [yarn](https://github.com/yarnpkg/yarn/), [pnpm](https://pnpm.io/) 또는 [bun](https://bun.sh/)를 설치해야할 수 있습니다.

<InstallDependencies npm='$ npx create-react-app antd-demo --template typescript' yarn='$ yarn create react-app antd-demo --template typescript' pnpm='$ pnpm create react-app antd-demo --template typescript' bun='$ bun create react-app antd-demo --template typescript'></InstallDependencies>

도구가 환경과 의존성들을 자동으로 생성하고 초기화할 것입니다. 이 과정에서 네트워크 에러가 발생한다면 프록시 환경을 구성하거나 다른 npm 레지스트리를 사용해보세요.

그럼 프로젝트 안으로 가서 실행해보겠습니다.

```bash
$ cd antd-demo
$ npm run start
```

브라우저에서 http://localhost:3000/를 엽니다. 페이지에 `Welcome to React`라는 헤더가 렌더링됩니다.

## antd 가져오기

아래는 기본 디렉토리 구조입니다.

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

이제 yarn, npm 또는 pnpm을 사용하여 `antd`를 설치합니다.

<InstallDependencies npm='$ npm install antd --save' yarn='$ yarn add antd' pnpm='$ pnpm install antd --save' bun='$ bun add antd'></InstallDependencies>

`src/App.js`를 수정하여 `antd`에서 Button 컴포넌트를 가져옵니다.

```tsx
import React from 'react';
import { Button } from 'antd';

const App: React.FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

좋습니다, 이제 페이지에 파란색 프라이머리 버튼이 표시되는 것을 확인할 수 있습니다. 다음으로 `antd`의 어떤 컴포넌트든지 골라 애플리케이션을 개발해 보세요. `create-react-app`의 다른 워크플로우에 대해서는 [사용자 가이드](https://create-react-app.dev/docs/getting-started)에서 확인할 수 있습니다.

### 테마 커스터마이즈

[테마 커스터마이즈 문서](/docs/react/customize-theme)를 참고하세요. ConfigProvider로 테마를 수정할 수 있습니다:

```tsx
import React from 'react';
import { ConfigProvider } from 'antd';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <MyApp />
  </ConfigProvider>
);

export default App;
```

`antd`는 Typescript로 작성되어 있으며 완전한 정의를 제공합니다. 속성 제안과 타입 검사를 즐겨보세요.

![](https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png)

> `@types/antd`를 설치하지 마세요.

이제 antd 컴포넌트를 성공적으로 실행하고 있습니다. 자신만의 애플리케이션을 만들어보세요!
