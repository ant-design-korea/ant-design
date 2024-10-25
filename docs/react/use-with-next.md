---
group:
  title: 기본 사용법
order: 3
title: Next.js에서 사용하기
tag: Updated
---

[Next.js](https://nextjs.org/)는 현재 세계에서 가장 인기 있는 서버사이드렌더링 리액트 프레임워크입니다. 이 글에서는 Next.js로 생성된 프로젝트에서 `antd`컴포넌트를 사용하는 방법을 알아보겠습니다.

## 설치 및 초기화

시작하기 전에 [yarn](https://github.com/yarnpkg/yarn/), [pnpm](https://pnpm.io/) 또는 [bun](https://bun.sh/)을 설치해야 할 수도 있습니다.

<InstallDependencies npm='$ npx create-next-app antd-demo' yarn='$ yarn create next-app antd-demo' pnpm='$ pnpm create next-app antd-demo' bun='$ bun create next-app antd-demo'></InstallDependencies>

이 도구는 환경과 종속성을 자동으로 생성하고 초기화합니다. 프록시 설정을 구성하거나 네트워크 오류가 발생하는 경우 다른 npm 레지스트리를 사용해 보세요.

초기화가 완료되면 프로젝트에 들어가서 시작합니다.

```bash
$ cd antd-demo
$ npm run dev
```

이제 브라우저에서 http://localhost:3000/ 을 방문하고 NEXT 로고가 보이면 성공입니다.

## antd 불러오기

이제 yarn, npm, pnpm, 또는 bun을 사용하여 antd를 설치하고 불러오겠습니다.

<InstallDependencies npm='$ npm install antd --save' yarn='$ yarn add antd' pnpm='$ pnpm install antd --save' bun='$ bun add antd'></InstallDependencies>

src/app/page.tsx 파일을 수정하여 antd의 버튼 컴포넌트를 불러옵니다.

```tsx
import React from 'react';
import { Button } from 'antd';

const Home = () => (
  <div className="App">
    <Button type="primary">버튼</Button>
  </div>
);

export default Home;
```

이제 페이지에서 antd의 파란색 버튼 컴포넌트를 볼 수 있습니다. 이후에는 다른 컴포넌트들을 선택하여 애플리케이션을 개발할 수 있습니다. 더 자세한 개발 프로세스는 Next.js 공식 문서를 참고하세요. 첫 화면에서는 antd 컴포넌트의 스타일이 적용되지 않는다는 것을 발견할 수 있습니다. 이제 Next.js의 방식에 맞는 SSR 스타일 처리 방식을 선택해야 합니다.

## App Router에서 사용하기 <Badge>Updated</Badge>

Next.js에서 App Router를 사용하고 antd를 컴포넌트 라이브러리로 사용하는 경우, antd 컴포넌트 라이브러리가 Next.js 애플리케이션에서 더 잘 동작하도록 하고, 사용자 경험을 개선하기 위해 아래 방법을 사용하여 antd 첫 화면 스타일을 필요한 경우에만 추출해 HTML에 삽입하여 페이지 깜박임 문제를 방지할 수 있습니다.

1. `@ant-design/nextjs-registry` 설치

<InstallDependencies npm='$ npm install @ant-design/nextjs-registry --save' yarn='$ yarn add @ant-design/nextjs-registry' pnpm='$ pnpm install @ant-design/nextjs-registry --save' bun='$ bun add @ant-design/nextjs-registry'></InstallDependencies>

2. `app/layout.tsx`에 다음과 같이 사용합니다.

```tsx
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
```

<!-- prettier-ignore -->
:::warning
Next.js의 App Router는 현재 <Select.Option />, <Typography.Text /> 등과 같이 `.`으로 불러오는 하위 컴포넌트를 직접 사용하는 것을 지원하지 않으므로, 경로에서 해당 하위 컴포넌트를 불러오는 방식으로 변경해야 합니다.
:::

더 자세한 내용은[with-nextjs-app-router-inline-style](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-app-router-inline-style)에서 확인할 수 있습니다。

## Pages Router에서 사용하기

Next.js에서 Pages Router를 사용하고 antd를 페이지 컴포넌트 라이브러리로 사용하는 경우, 첫 화면 스타일을 추출해 HTML에 삽입하여 페이지 깜박임을 방지하는 방법을 사용합니다.

1. `@ant-design/cssinjs` 설치

> Notes for developers
>
> 설치 시 `antd`의 `node_modules`에 있는 `@ant-design/cssinjs` 버전과 동일하게 맞춰야 합니다. 그렇지 않으면 여러 개의 React 인스턴스가 발생해 ctx를 제대로 읽지 못할 수 있습니다. (npm ls @ant-design/cssinjs 명령으로 로컬 버전을 확인할 수 있습니다.)
>
> <img width="514" alt="image" src="https://github.com/ant-design/ant-design/assets/49217418/aad6e9e2-62cc-4c89-a0b6-38c592e3c648">

<InstallDependencies npm='$ npm install @ant-design/cssinjs --save' yarn='$ yarn add @ant-design/cssinjs' pnpm='$ pnpm install @ant-design/cssinjs --save' bun='$ bun add @ant-design/cssinjs'></InstallDependencies>

2. `pages/_document.tsx`파일 수정

```tsx
import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default MyDocument;
```

3. 사용자 정의 테마 지원

```ts
// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
};

export default theme;
```

4. `pages/_app.tsx`파일 수정

```tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import theme from './theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
```

5. page 컴포넌트에서 antd 사용

```tsx
import React from 'react';
import { Button } from 'antd';

const Home = () => (
  <div className="App">
    <Button type="primary">버튼</Button>
  </div>
);

export default Home;
```

더 자세한 내용은[with-nextjs-inline-style](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-inline-style)에서 확인할 수 있습니다.
