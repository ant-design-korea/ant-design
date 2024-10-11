---
title: 안녕, GitHub Actions
date: 2023-06-06
author: Wxh16144
zhihu_url: https://zhuanlan.zhihu.com/p/639266855
---

안녕하세요, 저는 [Wxh16144](https://github.com/Wxh16144)입니다. Ant Design의 컴포넌트 라이브러리를 학습하고 커뮤니티에 기여하면서 개발 효율과 코드 품질을 향상 시킬 수 있는 몇 가지 도구를 발견했습니다. 이를 통해 여러분이 Ant Design을 더 잘 이해하고, 이러한 기술들을 자신의 프로젝트에 적용하는 데 도움이 되기를 바랍니다.

# 서론

Ant Design은 오픈 소스로 GitHub에서 호스팅되어 전 세계 개발자들과 소통하고 협업하기에 용이합니다. 또한 개발자들이 issue와 PR을 제출할 수 있도록 지원합니다. [GitHub Actions](https://github.com/features/actions)와 CI/CD 기능을 활용하면 코드 저장소를 효과적으로 관리하고 테스트, 배포 등의 작업을 자동화할 수 있습니다. 이 글에서는 Actions가 제공하는 기능에 대해 자세히 알아보겠습니다.

## GitHub Actions란 무엇인가요?

GitHub Actions는 소프트웨어 개발 워크플로를 자동화하는 플랫폼입니다. 개발자는 `.github/workflows` 디렉토리에 YAML 형식의 파일을 추가하여 자신의 워크플로를 쉽게 사용자 정의하고 구성할 수 있습니다. 이를 통해 CI(지속적 통합)를 구현할 수 있습니다. [GitHub Actions를 이해](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)하면 워크플로 내의 다양한 개념들을 파악할 수 있습니다.

- **Event(이벤트)**: 워크플로 실행을 발생시키는 요소로, 예를 들어 누군가 issue를 생성하거나, PR을 만들거나, 브랜치에 코드를 푸시할 때 발생합니다.
- **Job(작업)**: 워크플로는 기본적으로 병렬로 실행되는 하나 이상의 **Job**으로 구성됩니다. 그러나 **Job**을 순차적으로 실행하도록 설정할 수도 있습니다. 각 **Job**은 여러 단계를 포함할 수 있습니다.
- **Step(단계)**: 특정 작업을 수행하는 단위입니다. 각 **Step**는 별도의 프로세스로 실행되며, 하나의 **Step**는 하나 이상의 명령어나 쉘 스크립트로 구성될 수 있습니다.

아래의 GitHub 공식 문서에서 제공하는 이미지를 보면 **Event**, **Job** 그리고 **Step**간의 관계를 더욱 직관적으로 이해할 수 있습니다:

![overview-actions-simple](https://docs.github.com/assets/cb-25535/mw-1000/images/help/actions/overview-actions-simple.webp)

# 사용 방법

위에서 설명한 내용을 바탕으로, Ant Design의 모든 워크플로는 [`.github/workflows`](https://github.com/ant-design/ant-design/tree/master/.github/workflows) 디렉토리에서 관리된다는 것을 알 수 있습니다.

Ant Design의 CI는 다음과 같은 영역을 다룹니다:

- **커뮤니티 관리:** GitHub Actions를 이용하여 issue와 PR에 대한 품질 검사를 수행하고, 댓글과 레이블을 통해 협업 효율성을 높입니다.
- **코드 품질:** ESLint와 Prettier를 사용하여 코드 스타일을 일관되게 유지하고 코드 품질을 향상시킵니다.
- **테스트:** Jest와 testing-library를 사용하여 단위 테스트와 스냅샷 테스트를 수행하여 코드의 정확성과 안정성을 보장합니다.
- **빌드:** ES5와 ES6 모듈 형식의 파일을 빌드하여 다양한 환경에서 라이브러리를 사용할 수 있도록 합니다.
- **배포:** [dumi](https://d.umijs.org/)를 이용하여 문서를 자동으로 생성하고 GitHub Pages에 게시합니다.

## Issue

Issue는 GitHub 플랫폼의 기능으로, 커뮤니티 피드백과 문제들을 수집하는 중앙 집중식 정보 허브 역할을 합니다. `Collaborator`는 레이블, 마일스톤, 담당자를 추가하여 작업과 프로젝트를 더 효율적으로 관리할 수 있습니다.

### Issue의 품질 보장

Issue에 충분한 정보가 포함되어 있어야 Ant Design 팀에서 issue를 분석하고 우선순위를 정할 수 있습니다. 이를 위해 이슈 생성 프로세스를 도움을 주는 [issue 도우미](http://new-issue.ant.design)를 제공하고, GitHub Actions를 이용해 생성된 issue를 검사합니다. Issue 도우미의 기준을 충족하지 못하는 issue는 [Invalid](https://github.com/ant-design/ant-design/issues?q=label%3AInvalid) 레이블이 부여되고 자동으로 닫히며, issue를 작성자에게 올바른 질문 방법을 알려주는 댓글이 달립니다. 예를 들어 이렇게 됩니다:

![invalid-issue-preview](https://user-images.githubusercontent.com/32004925/231660945-509cf97c-43eb-4a1c-acd2-81eeedfe4a73.png)

하지만 issue 도우미를 사용하더라도, 때로는 제공된 정보가 부족하여 문제를 해결하기 어려운 경우가 있습니다. 이러한 경우에는 팀원들이 수동으로 issue에 [🤔 Need Reproduce](https://github.com/ant-design/ant-design/issues?q=label%3A%22%F0%9F%A4%94+Need+Reproduce%22+), [needs-more-info](https://github.com/ant-design/ant-design/issues?q=label%3A%22%F0%9F%A4%94+Need+Reproduce%22+) 또는 [help wanted](https://github.com/ant-design/ant-design/issues?q=label%3A%22help+wanted%22+) 등의 레이블을 추가하여 issue 작성자에게 더 자세한 정보를 요청합니다. 이와 관련된 다양한 레이블이 어떤 댓글 답변 Job를 실행 하는 지에 대한 기록은 [issue-labeled.yml](https://github.com/ant-design/ant-design/blob/da83561f9cb57b0eb03d18543d96393689f799be/.github/workflows/issue-labeled.yml) 파일에 있습니다:

![need-reproduce-auto-comment-preview](https://user-images.githubusercontent.com/32004925/231673201-c7376eeb-010b-46d0-a7d0-4c115d58f58c.png)

![help-wanted-auto-comment-preview](https://user-images.githubusercontent.com/32004925/231673404-60b248cd-823f-4d31-8fff-d95b02b35fee.png)

### 일반적인 Issue FAQ

자주 발생하는 issue에 대해서는 팀이 상세한 답변을 제공하여 개발자가 문제를 더 빠르게 해결할 수 있도록 돕습니다. 예를 들어, 문제 제목에 `웹사이트`, `다운`, `접속 불가`, `IE` 등의 키워드가 포함된 경우, [issue-open-check.yml#L43-L94](https://github.com/ant-design/ant-design/blob/da83561f9cb57b0eb03d18543d96393689f799be/.github/workflows/issue-open-check.yml#L43-L94) Job은 정의된 표준 답변이 달리고 해당 issue를 자동으로 닫습니다.

### 정기적인 Issue 정리

GitHub Actions의 예약 작업을 사용하여 issue를 관리하고 닫는 과정을 자동화하면 처리되지 않은 issue가 과도하게 쌓이는 것을 효과적으로 방지할 수 있습니다.

- [issue-close-require.yml](https://github.com/ant-design/ant-design/blob/01a475af6d8ff4943fe4c91d04582120bf9b3a84/.github/workflows/issue-close-require.yml): `🤔 Need Reproduce` 또는 `needs-more-info` 태그가 달린 issue를 정해진 시간에 확인합니다. 만약 이 태그들이 3일 이내에 제거되지 않으면, 자동으로 댓글이 달리고 issue가 닫힙니다.
- [issue-check-inactive.yml](https://github.com/ant-design/ant-design/blob/01a475af6d8ff4943fe4c91d04582120bf9b3a84/.github/workflows/issue-check-inactive.yml): 최근 30일 동안 활동이 없는 issue를 15일마다 확인하여 `Inactive` 레이블을 추가하지만, issue는 닫지 않습니다. issue가 수정되거나 새로운 댓글이 달리면 `Inactive`와 `needs-more-info` 레이블이 자동으로 제거됩니다.

![inactive-issue-preview](https://user-images.githubusercontent.com/32004925/234459079-db813907-503d-4405-801d-38e133c85996.png)

## Pull Request

Ant Design 팀은 커뮤니티의 Pull Request (PR) 참여를 적극 장려합니다. PR을 제출하기 전에 [《기여자 개발 및 유지보수 가이드》](./contributor-development-maintenance-guide) 문서를 읽고, PR 제출 시 지켜야 할 규칙을 확인해야 합니다. 품질과 원활한 소통을 위해 몇 가지 규칙을 준수해야 합니다. 또한, GitHub Action을 활용하여 PR에 대한 요구 사항과 검토를 진행하여 코드 품질을 유지하고 프로젝트의 장기적인 안정성을 확보합니다.

### PR 사전 테스트

PR을 생성하면 PR 템플릿을 통해 설명 내용이 자동으로 생성되며, 이 중에는 업데이트 로그 항목도 포함되고, 해당 항목은 개발자가 작성해야 합니다. [pr-open-check.yml](https://github.com/ant-design/ant-design/blob/3d627eb475e32daf3a47731140685124d568a495/.github/workflows/pr-open-check.yml) Job은 이를 확인하며, 만약 작성되지 않았다면 CI가 댓글로 이를 알립니다. 다음과 같이 표시됩니다:

![pr-non-changelog-comment-preview](https://user-images.githubusercontent.com/32004925/231672871-32689c30-1e0a-40fc-9237-9b9b4312f15c.png)

또한, PR에 언급된 issue에 `🎱 Collaborate PR only` 레이블이 붙어 있을 경우, PR은 자동으로 닫히며 댓글로 알림이 전송됩니다.

`verify-files-modify.yml` 작업(Job)은 PR에서 변경된 파일을 검사하여 특정 디렉토리(예: ./github/, scripts/) 또는 파일(예: CHANGELOG.md)이 포함되어 있는 경우 커뮤니티 기여를 거부하고 PR을 자동으로 닫으며 핵심 멤버에게 할당합니다.

[verify-files-modify.yml](https://github.com/ant-design/ant-design/blob/3d627eb475/.github/workflows/verify-files-modify.yml) Job은 PR에서 변경된 파일을 검사하여 특정 디렉토리(예: `./github/`, `scripts/`) 또는 파일(예: `CHANGELOG.md`)이 포함되어 있는 경우 커뮤니티 기여를 거부하고 PR을 자동으로 닫은 후 핵심 멤버에게 할당합니다.

### 코드 스타일 검사

[Lint](https://github.com/ant-design/ant-design/blob/dedbdfddafc0134219e391473c109c14766f413d/.github/workflows/test.yml#L52-L75) Job에서는 항상 모든 개발자가 제출한 코드에 대해 lint 검사를 진행합니다.

![eslint-ci-preview](https://user-images.githubusercontent.com/32004925/234477805-5cf3cf89-6654-4329-882d-47b35964f6fc.png)

### PR 배포 미리보기

PR이 생성될 때마다 GitHub Action를 통해 자동으로 해당 PR을 빌드하고 배포를 시도합니다. 이를 통해 문서가 정상적으로 동작하는지 확인할 수 있을 뿐만 아니라, PR이 문서 또는 컴포넌트 데모에 어떤 영향을 미치는지도 미리볼 수 있습니다. PR 배포는 여러 Job으로 나뉘며, 구체적인 과정은 다음과 같습니다:

- 먼저 [preview-start.yml](https://github.com/ant-design/ant-design/blob/c6a7dbc09e709a8905aaa6c073593a1fed6bea14/.github/workflows/preview-start.yml) Job이 실행되어 PR에 자리 표시용 댓글을 남기고, 개발자에게 미리보기 빌드가 진행 중임을 알립니다. 자주 보게 되는 "Preview Preparing..." 메시지가 바로 이것입니다.

![preview-preparing..](https://user-images.githubusercontent.com/32004925/231686636-eef933e6-2678-4e49-9552-babc50687644.png)

- 동시에 [preview-build.yml](https://github.com/ant-design/ant-design/blob/b7d1d7cdbd888a1d73b3a3bf87bf4977e9b9bf91/.github/workflows/preview-build.yml#L52-L77) Job은 사이트의 빌드를 수행합니다.

- 마지막으로, [preview-deploy.yml](https://github.com/ant-design/ant-design/blob/c6a7dbc09e709a8905aaa6c073593a1fed6bea14/.github/workflows/preview-deploy.yml) Job은 `preview-build.yml`이 완료될 때까지 기다린 후 해당 작업을 수행합니다. 빌드가 성공하면 [Surge](https://surge.sh/)를 사용해 배포되며, 배포 주소는 `https://preview-{PR-id}-ant-design.surge.sh` 형식으로 생성됩니다. 이후, 이전에 댓글에 있는 자리 표시 이미지가 빌드 성공 이미지로 변경되며 (이미지를 클릭하면 해당 주소로 이동), 반대로 빌드 실패인 경우에는 실패 이미지를 표시합니다.

### 기타 검토

- [size-limit.yml](https://github.com/ant-design/ant-design/blob/5dfce5443744271f778313c23eb8ec3a5af481f8/.github/workflows/size-limit.ym) Job은 PR의 추가된 파일의 크기를 검사합니다.
- 최근 인기 있는 ChatGPT를 팀에서는 GitHub Action에 추가하여 AI가 먼저 코드를 검토하도록 하였습니다. 구체적인 Job은 [chatgpt-cr.yml](https://github.com/ant-design/ant-design/blob/f7fd474cf8792ea01d03461d407c0edc11828a1c/.github/workflows/chatgpt-cr.yml) 파일에서 확인할 수 있습니다.

## 단위 테스트

단위 테스트는 컴포넌트 라이브러리의 품질을 보장하는 가장 중요한 요소 중 하나입니다. 코드가 푸시될 때마다, 개발자가 생성한 PR이나 메인 브랜치 업데이트를 포함하여 자동화된 테스트를 수행하는 CI가 실행됩니다.

### 빌드 테스트

팀은 코드가 업데이트될 때마다 빌드 및 패키지된 결과물이 생성되기를 원했습니다. Ant Design은 test.yml 파일에 [Dist Job](https://github.com/ant-design/ant-design/blob/master/.github/workflows/test.yml#L104-L138)과 [Compile Job](https://github.com/ant-design/ant-design/blob/40fb753349c4f2be314c91dbb7e6f1a960097c19/.github/workflows/test.yml#L254-L288)을 추가하여 저장소가 올바르게 빌드되고 패키지될 수 있도록 보장하고 있습니다.

### 기능 테스트

모두가 알다시피, 매번 테스트 관련 Job이 실행될 때 최대 30개까지 이루어집니다.

팀은 단위 테스트에 매우 신중하며, 주요 React 버전(일반적으로 16, 17, 18번 버전)에서 실행되는 상황을 고려해야 합니다. 메인 브랜치가 업데이트되면 프로젝트 빌드 결과물(일반적으로 `dist`, `es`, `lib`)이 세 가지 React 버전에서 어떻게 동작되는지도 확인해야 합니다. 현재 Ant Design의 모든 컴포넌트에는 4,000개 이상의 테스트 케이스가 있는 것으로 알려져 있습니다. 테스트 효율성을 더욱 높이기 위해 분산 테스트 환경도 구축했습니다.

이러한 모든 기능은 GitHub Action의 [Job 매트릭스 전략](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) 덕분에 가능하며, 이를 통해 여러 Jobs를 한 번에 구성하여 테스트 작업을 실행할 수 있습니다. [Normal test](https://github.com/ant-design/ant-design/blob/40fb753349c4f2be314c91dbb7e6f1a960097c19/.github/workflows/test.yml#L141-L223)와 [Module test](https://github.com/ant-design/ant-design/blob/40fb753349c4f2be314c91dbb7e6f1a960097c19/.github/workflows/test.yml#L294-L357)는 Ant Design이 매트릭스 전략을 사용하여 테스트하는 Jobs입니다.

## 웹사이트 배포

여기서 설명하는 배포와 빌드 과정은 앞서 언급한 PR 미리보기 배포와 빌드 과정과 매우 유사하지만, 빌드 결과물을 배포하는 위치가 다르다는 점이 특징입니다.

### 공식 웹사이트 배포

[https://ant.design](https://ant.design) 공식 웹사이트는 GitHub에서 무료로 제공하는 [GitHub Pages](https://pages.github.com/) 기능을 사용합니다. Actions의 [Deploy to GitHub Pages](https://github.com/ant-design/ant-design/blob/dedbdfddafc0134219e391473c109c14766f413d/.github/workflows/site-deploy.yml#L73-L78) Job을 이용해 빌드된 문서 결과물을 직접 [gh-pages](https://github.com/ant-design/ant-design/tree/gh-pages) 브랜치에 푸시합니다.

### 독립형 버전

작업(Job)은 매번 새로운 버전이 출시될 때마다 사이트를 Surge에 배포하며, URL 규칙은 https://ant-design-{major}-{minor}-{patch}.surge.sh입니다. 각 버전 커밋에는 해당 URL이 댓글로 남겨집니다:

모두가 알고 있듯이 [https://ant.design](https://ant.design/) 공식 웹사이트는 항상 최신 버전을 유지하지만, 가끔 특정 버전의 문서를 확인해야 할 필요가 있습니다. [Deploy to Surge](https://github.com/ant-design/ant-design/blob/5aad29d937baeba43ca8acde7f86450e9aec99f1/.github/workflows/site-deploy.yml#L80-L90) Job은 새로운 버전이 출시될 때마다 사이트를 Surge에 배포하며, URL 형식은 `https://ant-design-{major}-{minor}-{patch}.surge.sh` 입니다. 이 URL은 각 릴리스 커밋에 댓글로 남겨집니다:

![versions-preview](https://user-images.githubusercontent.com/32004925/234485713-4e93154c-d5a4-4cad-87b0-e76667ff237f.png)

## 기타

위에서 Ant Design이 CI/CD를 활용하여 수행하는 핵심 내용의 대부분을 설명했습니다. 하지만 실제로는 자세히 소개되지 않은 Job들이 몇 가지 더 있습니다. 여기서 추가적으로 설명해 드리겠습니다.

### IM 알림 통합

개발자와 커뮤니티 구성원이 관련 정보를 가능한 한 빨리 알 수 있도록 IM 통합이 Action에서 제공하는 이벤트를 사용하여 구현되었습니다:

- [issue-notice](https://github.com/ant-design/ant-design/blob/master/.github/workflows/issue-open-check.yml#L96-L105)와 [discussion-notice](https://github.com/ant-design/ant-design/blob/dedbdfddafc0134219e391473c109c14766f413d/.github/workflows/disscustion-open-check.yml#L16-L25) Job는 issue나 Discussion이 생성될 때마다 DingTalk 커뮤니티 그룹에 알림을 보냅니다.

- [release-helper.yml](https://github.com/ant-design/ant-design/blob/dedbdfddaf/.github/workflows/release-helper.yml) CI 파일은 antd가 버전을 출시하고 Release를 생성할 때마다 업데이트 로그를 DingTalk 커뮤니티 그룹에 게시합니다.

- 여기에서 언급되지 않은 다른 Job들도 여러분이 탐색하고 발견하기를 기다리고 있습니다...

## 개인 프로젝트에 적용하기

앞서 Ant Design이 GitHub Action을 활용하는 여러 시나리오를 소개했습니다. 이제 이를 자신의 프로젝트에 적용하여 생산성을 높여보는 것은 어떨까요? 간단한 데모를 통해 이를 보여드리겠습니다.

### 프로젝트 생성

`pnpm create vite@latest my-react-app --template react-ts` 명령어를 통해 Vite와 React를 사용하는 새로운 프로젝트를 생성합니다.

### CI 워크플로 구성

프로젝트의 루트 디렉터리에 있는 `.github/workflows` 폴더에 `ci.yml`이라는 새 파일을 만들고 다음과 같은 코드를 추가합니다:

```yml
name: CI

# Event를 master 브랜치의 pull request 이벤트와 push 이벤트로 설정합니다.
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

permissions:
  contents: write

jobs:
  CI:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code (코드 체크아웃)
        uses: actions/checkout@v4

      - name: Setup Node.js (Node.js 설정)
        uses: oven-sh/setup-bun@v2
        with:
          node-version: 16

      - name: Install pnpm (pnpm 설치)
        uses: pnpm/action-setup@v2
        with:
          version: 7.0.0

      - name: Install dependencies (의존성 설치)
        run: pnpm install

      - name: lint (Lint 검사)
        run: pnpm run lint

      # 템플릿에는 테스트 케이스가 포함되어 있지 않습니다. 테스트 케이스를 사용해야 하는 경우 주석을 해제할 수 있습니다.
      # - name: Test (테스트)
      #   run: pnpm run test

      - name: Build (빌드)
        run: pnpm run build

      - name: Upload build artifacts (빌드 결과물 업로드)
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: ./dist

      - name: Deploy to GitHub Pages (GitHub Pages에 배포)
        uses: peaceiris/actions-gh-pages@v3
        # master 브랜치의 push 이벤트가 발생할 때만 배포합니다.
        if: github.ref == 'refs/heads/master'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

위의 워크플로에는 CI 작업이 포함되어 있으며, `master` 브랜치에 푸시할 때 CI가 실행 된 후 `lint`, `build`, 및 `deploy`를 순차적으로 진행됩니다. 과정은 아래와 같습니다:

![test-CI-preview](https://user-images.githubusercontent.com/32004925/234609284-ec7b40f5-a221-4c8b-9093-ce68a1a545bb.png)

### 캐시 추가

의존성 설치 속도를 더욱 최적화하기 위해, pnpm 캐시를 추가할 수 있습니다. 그런 다음 이전 단계의 검증을 위해 Pull Request를 생성합니다:

```yml
# ...
- name: create pnpm-lock.yaml (pnpm-lock.yaml 생성)
  run: pnpm install --frozen-lockfile --ignore-scripts

- name: Get pnpm store directory (pnpm 저장소 디렉토리 가져오기)
  id: pnpm-cache
  shell: bash
  run: |
    echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

- name: Setup pnpm cache (pnpm 캐시 설정)
  uses: actions/cache@v4
  with:
    path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
    key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-store-

# ...
```

생성된 PR이 CI Job을 올바르게 실행하였고, 우리의 pnpm 저장소가 캐시되었습니다. 이제부터는 CI가 실행될 때마다 `pnpm-lock.yaml` 파일의 내용에 따라 캐시를 직접 읽을지를 결정하게 됩니다.

![pr-CI-preview](https://user-images.githubusercontent.com/32004925/234617748-8bc4f0fd-b29a-4b01-b416-1c16eed03acb.png)

![restore-cache](https://user-images.githubusercontent.com/32004925/234621854-dbfc565c-26e0-4e48-862d-8dde8ab22627.png)

위의 `Setup pnpm cache` 단계에서 7일 동안 접근하지 않은 캐시 항목은 삭제됩니다. 저장할 수 있는 캐시 수에는 제한이 없지만, 저장소의 모든 캐시 총 크기는 10GB로 제한됩니다. 더 많은 내용은 [작업 흐름을 빠르게 하기 위해 의존성 캐싱](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)을 읽어보시기 바랍니다.

![cache-pnpm-store](https://user-images.githubusercontent.com/32004925/234618808-46137b0d-27a0-4b01-b1a6-6e4931f6d388.png)

## 마무리

이 글이 Ant Design에 대한 더 깊은 이해에 도움이 되었기를 바랍니다. [Ant Design 토론](https://github.com/ant-design/ant-design/discussions)에서 토론에 참여하고 프로젝트에 기여해 주시기 바랍니다.
