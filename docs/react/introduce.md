---
order: 0
title: React의 Ant Design
---

Ant Design 명세에 따라, 우리는 풍부하고 인터렉티브한 사용자 인터페이스를 만들기 위해 고품질 컴포넌트와 데모 세트를 포함한 React UI 라이브러리 `antd`(<a href="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*ChCdRJ0w8SUAAAAAAAAAAAAADgCCAQ" target="_blank">🔊 발음</a>)를 개발했습니다.

<div class="pic-plus">
  <img width="150" draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <span>+</span>
  <img width="160" draggable="false" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
</div>

---

## ✨ 기능

- 🌈 웹 애플리케이션을 위해 설계된 엔터프라이즈급 UI.
- 📦 즉시 사용 가능한 고품질 React 컴포넌트 세트.
- 🛡 예측가능한 정적 타입을 갖춘 TypeSCript로 개발.
- ⚙️ 디자인 리소스와 개발 도구 전체 패키지.
- 🌍 수십 개 언어에 대한 국제화 지원.
- 🎨 세부 사항까지 강력한 테마 커스터마이징 지원.

## 환경 지원

- 최신 브라우저
- 서버 사이드 렌더링
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | 최신 2개 버전 | 최신 2개 버전 | 최신 2개 버전 | 최신 2개 버전 | 최신 2개 버전 |

IE 브라우저를 위해서는 폴리필이 필요합니다. 이를 위해 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)를 사용하는 것을 권장합니다. 만약 [umi](http://umijs.org/)를 사용하고 있다면, `targets` 설정을 구성할 수 있습니다.

> `antd@2.0` 이후로 IE8 지원이 중단되었습니다. `antd@4.0` 이후로 React 15 및 IE9/10 지원이 중단되었습니다. `antd@5.0` 이후로 IE 지원이 중단되었습니다.

## 버전

- 안정화 버전: [![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)

새로운 버전 알림을 받으려면 이 피드를 구독하세요: https://github.com/ant-design/ant-design/releases.atom

## 설치

### npm 또는 yarn, pnpm, bun 사용

**설치를 위해 [npm](https://www.npmjs.com/), [yarn](https://github.com/yarnpkg/yarn/), [pnpm](https://pnpm.io/) 또는 [bun](https://bun.sh/) 사용을 권장합니다**, 이것은 개발을 쉽게 해줄 뿐 아니라, Javascript 패키지와 툴의 풍부한 생태계를 활용할 수 있게 해줍니다.

<InstallDependencies npm='$ npm install antd --save' yarn='$ yarn add antd' pnpm='$ pnpm install antd --save' bun='$ bun add antd'></InstallDependencies>

네트워크 환경이 좋지 않다면, [cnpm](https://github.com/cnpm/cnpm)과 같은 다른 레지스트리와 도구를 사용해볼 수 있습니다.

### 브라우저에서의 Import

브라우저에 `script`와 `link` 태그를 추가하고 전역 변수 `antd`를 사용합니다.

우리는 `antd.js`, `antd.min.js`, `reset.css`를 antd의 npm 패키지의 [dist](https://unpkg.com/browse/antd@5.0.0/dist/) 폴더에 제공합니다. 또한 이 파일들을 [![CDNJS](https://img.shields.io/cdnjs/v/antd.svg?style=flat-square)](https://cdnjs.com/libraries/antd), [![](https://data.jsdelivr.com/v1/package/npm/antd/badge)](https://www.jsdelivr.com/package/npm/antd) 또는 [unpkg](https://unpkg.com/antd/dist)에서 직접 다운로드할 수도 있습니다.

> **전체 파일을 로드하는 것은 권장되지 않습니다** 이는 애플리케이션을 무겁게 만들고, 버그 수정 및 업데이트를 어렵게 합니다. Antd는 [webpack](https://webpack.github.io/)과 같은 빌드 툴과 함께 사용되도록 만들어졌습니다. 이는 사용 중인 antd의 부분만 쉽게 import 하도록 도와줍니다.

> 참고: `antd.js`를 사용하기 전에 `react`、`react-dom`、`dayjs`를 import 하세요.

## 사용법

```jsx
import React from 'react';
import { DatePicker } from 'antd';

const App = () => {
  return <DatePicker />;
};

export default App;
```

### 모듈화된 antd 사용

`antd`는 기본으로 ES 모듈 트리 셰이킹을 지원합니다.

### TypeScript

`antd`는 내장된 TypeScript 정의를 제공하므로, `@types/antd`를 설치하지 마세요.

## 링크

- [홈페이지](/)
- [China Mirrors](https://github.com/ant-design/ant-design/issues/25661)
- [컴포넌트](/components/overview)
- [Ant Design 프로](https://pro.ant.design/)
- [Ant Design 프로 컴포넌트](https://procomponents.ant.design/)
- [Ant Design Charts](https://charts.ant.design)
- [Change Log](/changelog)
- [rc-components](https://react-component.github.io/)
- [Mobile Components](https://mobile.ant.design)
- [Mini Program Components](https://mini.ant.design)
- [Ant Design Icons](https://github.com/ant-design/ant-design-icons)
- [Ant Design Colors](https://github.com/ant-design/ant-design-colors)
- [랜딩 페이지](https://landing.ant.design)
- [Motion](https://motion.ant.design)
- [Scaffold Market](https://scaffold.ant.design)
- [개발자 지침](https://github.com/ant-design/ant-design/wiki/Development)
- [버전 릴리즈 노트](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [FAQ](/docs/react/faq)
- [버그 리포트를 위한 CodeSandbox 템플릿](https://u.ant.design/codesandbox-repro)
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
- [테마 커스터마이즈](/docs/react/customize-theme)
- [콜라보레이터에 지원하는 법](https://github.com/ant-design/ant-design/wiki/Collaborators#how-to-apply-for-being-a-collaborator)

## React가 아닌 컴포넌트

React는 antd의 디자인 언어를 구현한 컴포넌트 라이브러리를 캡슐화하는 데 사용됩니다. 우리는 커뮤니티가 그들의 선택으로 [다른 프론트엔드 프레임워크](/docs/spec/introduce#front-end-implementation)에서 우리의 디자인 시스템을 구현하는 것을 환영합니다.

## antd를 사용하는 기업

Ant Design은 국내외에서 엔터프라이즈급의 웹사이트를 구축하는데 널리 사용됩니다. 레퍼런스 데이터는 wappalyzer를 참조할 수 있습니다. 귀사나 당신의 제품이 Ant Design을 사용하고 있다면, [여기](https://github.com/ant-design/ant-design/issues/477)에서 알려주세요!

## 기여

먼저 [CONTRIBUTING.md](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md)를 읽어주세요.

antd가 개선되도록 돕고 싶다면, [Pull Request](https://github.com/ant-design/ant-design/pulls)를 만들어주세요. 버그와 이슈를 편하게 [여기](http://new-issue.ant.design/)에 리포트해주세요.

> 이슈를 올리는 게 처음이라면, 이슈를 올리기 전에 [_똑똑하게 질문하는 법_](http://www.catb.org/~esr/faqs/smart-questions.html), [오픈 소스 커뮤니티에서 질문하는 법](https://github.com/seajs/seajs/issues/545)과 [효과적으로 버그 리포트하는 법](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html)를 먼저 읽어주길 바랍니다. 잘 작성된 버그 리포트는 우리가 당신을 도울 수 있게 해줍니다!

## 도움이 필요하신가요?

antd를 사용하는 방법에 대한 질문들은, `Q&A` 태그나 [<img alt="Stack Overflow" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66" width="140" />](http://stackoverflow.com/questions/tagged/antd) `antd` 태그를 사용해 [GitHub Discussions](https://github.com/ant-design/ant-design/discussions)에 남겨주세요.

항상 그랬듯이, 우리는 숙련된 사용자들이 `antd`가 익숙하지 않은 사용자들을 돕는 것을 권장합니다.
