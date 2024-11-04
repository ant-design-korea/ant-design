---
group:
title: 기본 사용법
order: 2
title: Vite와 함께 사용하는 법
---

[Vite](https://vitejs.dev/) is one of the best React application development tools. Let's use `antd` within it. [Vite](https://vitejs.dev/)는 가장 훌륭한 React 애플리케이션 개발 도구 중 하나입니다. `antd`를 `vite`와 함께 사용해봅시다.

## Install and Initialization

## 설치 및 초기화

시작하기 전에, [yarn](https://github.com/yarnpkg/yarn/), [pnpm](https://pnpm.io/) 또는 [bun](https://bun.sh/)를 설치해야할 수 있습니다.

<InstallDependencies npm='$ npm create vite antd-demo' yarn='$ yarn create vite antd-demo' pnpm='$ pnpm create vite antd-demo' bun='$ bun create vite antd-demo'></InstallDependencies>

도구가 환경과 의존성들을 자동으로 생성하고 초기화할 것입니다. 이 과정에서 네트워크 에러가 발생한다면 프록시 환경을 구성하거나 다른 npm 레지스트리를 사용해보세요.

그럼 `antd-demo` 안으로 가서 의존성들을 설치 후 실행해보겠습니다.

```bash
$ cd antd-demo
$ npm install
$ npm run dev
```

Open the browser at http://localhost:5173/. It renders a header saying `Vite + React` on the page.

브라우저에서 http://localhost:5173/를 엽니다. 페이지에 `Vite + React`라는 헤더가 렌더링됩니다.

## antd 가져오기

아래는 기본 디렉토리 구조입니다.

```
├── public
│   └── vite.svg
├── src
│   └── assets
│       └── react.svg
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── main.js
│   └── logo.svg
├── index.html
├── package.json
└── vite.config.ts
```

이제 yarn, npm, pnpm 또는 bun을 사용하여 `antd`를 설치합니다.

<InstallDependencies npm='$ npm install antd --save' yarn='$ yarn add antd' pnpm='$ pnpm install antd --save' bun='$ bun add antd'></InstallDependencies>

`src/App.js`를 수정하여 `antd`에서 Button 컴포넌트를 가져옵니다.

```jsx
import React from 'react';
import { Button } from 'antd';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

좋습니다, 이제 페이지에 파란색 프라이머리 버튼이 표시되는 것을 확인할 수 있습니다. 다음으로 `antd`의 어떤 컴포넌트든지 골라 애플리케이션을 개발해 보세요. `Vite`의 다른 워크플로우에 대해서는 [사용자 가이드](https://vitejs.dev/)에서 확인할 수 있습니다.

이제 antd 컴포넌트를 성공적으로 실행하고 있습니다. 자신만의 애플리케이션을 만들어보세요!
