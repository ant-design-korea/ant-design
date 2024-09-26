---
group:
  title: 고급기능
order: 2
title: 서버 사이드 렌더링
---

서버 사이드 렌더링 스타일에는 두가지 옵션이 있습니다. 각각에는 장단점이 존재합니다:

- **인라인 모드**: 추가 스타일 파일을 렌더링 중에 요청할 필요가 없습니다. 이 모드는 추가 네트워크 요청을 줄이는 것이 장점입니다. 단점은 HTML용량이 증가하고 첫 화면 렌더링의 속도에 영향을 미칠 수 있습니다. 관련 논의: [#39891](https://github.com/ant-design/ant-design/issues/39891)

- **전체 내보내기(Whole export)**: antd 컴포넌트는 미리 생성된 css파일로 스타일링 되어 페이지에 포함됩니다. 이 모드는 어떤 페이지를 열 때도 동일한 css파일 세트가 전통적인 css방식 처럼 캐시되어 재사용할 수 있다는 장점이 있습니다. 단점은 여러개의 테마가 한 페이지에 있는 경우, 추가적인 스타일 생성이 필요할 수 있다는 것입니다.

## 인라인 스타일

스타일 추출을 위해 `@ant-design/cssinjs`를 사용하세요:

```tsx
import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { renderToString } from 'react-dom/server';

const App = () => {
  // SSR 렌더링
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const html = renderToString(
    <StyleProvider cache={cache}>
      <MyApp />
    </StyleProvider>,
  );

  // 캐시에서 스타일 가져오기
  const styleText = extractStyle(cache);

  // 스타일 혼합시키기
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${styleText}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
};

export default App;
```

## 전체 내보내기(Whole export)

css파일에 스타일 파일을 첨부하고 싶다면 아래의 방식을 시도해보세요:

1. 디펜던시 설치

```bash
npm install ts-node tslib cross-env --save-dev
```

2. `tsconfig.node.json`파일 추가

```json
{
  "compilerOptions": {
    "strictNullChecks": true,
    "module": "NodeNext",
    "jsx": "react",
    "esModuleInterop": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

3. `scripts/genAntdCss.tsx`파일 추가

```tsx
// scripts/genAntdCss.tsx
import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';

const outputPath = './public/antd.min.css';

const css = extractStyle();

fs.writeFileSync(outputPath, css);
```

혼합된 테마나 커스텀 테마를 사용하고 싶다면 아래의 스크립트를 사용할 수 있습니다:

```tsx
import fs from 'fs';
import React from 'react';
import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';

const outputPath = './public/antd.min.css';

const testGreenColor = '#008000';
const testRedColor = '#ff0000';

const css = extractStyle((node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: testGreenColor,
        },
      }}
    >
      {node}
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: testGreenColor,
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: testRedColor,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
));

fs.writeFileSync(outputPath, css);
```

개발 명령어를 시작하기 전이나 컴파일링 이전에 이 스크립트를 실행하는 선택을 할 수 있습니다. 이 스크립트를 실행하면 현재 프로젝트의 명시된 폴더(예: public)에 완전한 antd.min.css파일이 직접적으로 생성됩니다. Next.js 예제 （[예제](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-inline-style)）：

```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "predev": "ts-node --project ./tsconfig.node.json ./scripts/genAntdCss.tsx",
    "prebuild": "cross-env NODE_ENV=production ts-node --project ./tsconfig.node.json ./scripts/genAntdCss.tsx"
  }
}
```

그리고 `pages/_app.tsx`파일에 이 파일을 임포트 하면 됩니다:

```tsx
import { StyleProvider } from '@ant-design/cssinjs';
import type { AppProps } from 'next/app';

import '../public/antd.min.css'; // 이 라인을 추가하세요
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider hashPriority="high">
      <Component {...pageProps} />
    </StyleProvider>
  );
}
```

### 커스텀 테마

프로젝트에 커스텀 테마를 사용하고 있다면, 다음 방식으로 적용해보세요:

```tsx
import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';

const cssText = extractStyle((node) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'red',
      },
    }}
  >
    {node}
  </ConfigProvider>
));
```

### 혼합 테마

프로젝트에 혼합 테마를 사용하고 있다면, 다음 방식으로 적용해보세요:

```tsx
import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';

const cssText = extractStyle((node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: 'green ',
        },
      }}
    >
      {node}
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'blue',
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: 'red ',
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
));
```

static-style-extract에 대해 더 알고 싶다면, [static-style-extract](https://github.com/ant-design/static-style-extract)을 참고해주세요.

## 필요에 따른 추출

```tsx
// scripts/genAntdCss.tsx
import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { extractStyle } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/lib/Cache';

export type DoExtraStyleOptions = {
  cache: Entity;
  dir?: string;
  baseFileName?: string;
};
export function doExtraStyle({
  cache,
  dir = 'antd-output',
  baseFileName = 'antd.min',
}: DoExtraStyleOptions) {
  const baseDir = path.resolve(__dirname, '../../static/css');

  const outputCssPath = path.join(baseDir, dir);

  if (!fs.existsSync(outputCssPath)) {
    fs.mkdirSync(outputCssPath, { recursive: true });
  }

  const css = extractStyle(cache, true);
  if (!css) return '';

  const md5 = createHash('md5');
  const hash = md5.update(css).digest('hex');
  const fileName = `${baseFileName}.${hash.substring(0, 8)}.css`;
  const fullpath = path.join(outputCssPath, fileName);

  const res = `_next/static/css/${dir}/${fileName}`;

  if (fs.existsSync(fullpath)) return res;

  fs.writeFileSync(fullpath, css);

  return res;
}
```

위의 `_document.tsx`의 도구를 사용하여 필요에 따른 export를 하세요

```tsx
// _document.tsx
import { createCache, StyleProvider } from '@ant-design/cssinjs';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { doExtraStyle } from '../scripts/genAntdCss';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    let fileName = '';
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
    // 1.1 사용된 스타일 추출
    fileName = doExtraStyle({
      cache,
    });
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* 1.2 css 주입 */}
          {fileName && <link rel="stylesheet" href={`/${fileName}`} />}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

데모는 여기서 볼 수 있습니다:[필요에 따른 css파일 익스포트하기 데모](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-generate-css-on-demand)
