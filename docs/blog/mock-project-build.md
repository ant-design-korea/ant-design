---
title: 의존성 문제 해결
date: 2023-04-13
author: zombieJ
zhihu_url: https://zhuanlan.zhihu.com/p/639266509
yuque_url: https://www.yuque.com/ant-design/ant-design/yi1lz5dg3iygwbed
juejin_url: https://juejin.cn/post/7322296529783128101
---

대형 컴포넌트 라이브러리인 Ant Design은 내부 의존성이 매우 복잡합니다. antd 자체에는 변경이 없더라도, 내부 의존성 업데이트로 인해 개발 시 빌드 실패가 발생하기도 합니다. 예를 들어, 최근에 제가 실수로 일으킨 [경로의 대소문자 에러](https://github.com/ant-design/ant-design/issues/41236)로 인해 리눅스 환경에서 빌드가 실패하는 문제가 있었습니다.

자체적으로 관리하는 의존성의 경우 패키지의 문제를 파악하는 것은 비교적 쉽지만, 서드파티 의존성의 경우 즉시 문제를 발견하기 어려울 때가 많습니다. 사용자 피드백이 들어오면 몇 시간이 지난 후일 수 있고, 그동안 수백 개의 패키지 중에서 찾아내는 것이 꽤 어려워집니다. 이러한 문제 해결 경험을 바탕으로 노하우를 공유하고자 하며, 문제를 더 빨리 해결하기 위해 추가로 한 작업들도 소개하려고 합니다.

### 정보 수집

저희는 GitHub Issue에 [템플릿 사이트](https://new-issue.ant.design/)를 추가하여, 개발자가 이슈를 제출할 때 다음과 같은 폼에 가능한 한 관련 정보를 모두 작성하도록 했습니다:

![Issue Helper](https://user-images.githubusercontent.com/5378891/231633510-2e7c7819-12c2-4153-b3c8-4d5576116a08.png)

antd 버전, React 버전, 운영체제, 브라우저 버전 등의 정보를 수집하여 대부분의 에러를 재현하고, 최대한 문제의 범위를 좁힐 수 있습니다. 이는 일반적인 문제인지, 특정 시스템에서만 발생하는 문제인지 판단하는 도움을 줍니다. 일단 여기서는 컴포넌트 구현 버그가 아닌 의존성 문제에 대해서만 이야기하겠습니다.

### 범위 정의

이슈가 발견된 시점을 기준으로 GitHub의 commit CI를 통해 시간 범위를 추적할 수 있습니다:

![Commit List](https://user-images.githubusercontent.com/5378891/231635576-88a84f55-11d9-403c-bece-98d55bf5b893.png)

그리고 이슈 설명을 통해 대략적으로 어떤 패키지와 관련 있는지를 파악합니다(예를 들어, [#41236](https://github.com/ant-design/ant-design/issues/41236)은 `@rc-component/trigger`에서 발생, [#15930](https://github.com/ant-design/ant-design/issues/15930)은 `@types/react`에서 발생). 이후 npm을 통해 관련 패키지의 버전 배포 상태를 확인합니다:

![Publish Time](https://user-images.githubusercontent.com/5378891/231636272-e423301a-f8df-407e-8d4e-a49e219631e4.png)

관련 업데이트를 확인한 후, 이전 버전을 설치하여 빌드가 성공하는지 비교합니다. 하나씩 확인하여 문제가 발생한 버전을 찾으면, 해당 GitHub에 이슈를 올리고(이미 해당하는 이슈가 있다면 +1 추가) 패치 버전을 배포하여 해당 버전을 일시적으로 잠급니다. 이후 다음 업데이트가 완료되면 버전 잠금을 해제합니다.

### 정기 빌드 설정

위에서 설명한 해결 방식은 어느 정도 지연이 발생할 수 있습니다. 저희는 정기적으로 빌드를 통해 추가적인 작업을 줄이고 문제를 더 빨리 발견하고자 합니다. 이를 위해 [create-next-app-antd](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-inline-style) 프로젝트를 기반으로 사용합니다(이렇게 하면 템플릿 프로젝트에 문제가 발생하더라도 미리 발견할 수 있습니다). 30분마다 실행되는 `mock-project-build.yml` CI를 실행하여 [create-next-app-antd](https://github.com/ant-design/create-next-app-antd) 레포지토리를 주기적으로 pull해서 빌드합니다:

```yml
on:
  workflow_dispatch:
  schedule:
    - cron: '*/30 * * * *'
```

`--depth=1` 옵션을 사용하여 마지막 커밋만 가져오고, `yarn`으로 의존성을 설치한 후 해당 `yarn.lock` 파일을 생성합니다. 이후 `yarn build`를 실행하여 프로젝트 빌드 과정을 완전히 시뮬레이션합니다.

빌드가 성공할 때마다 CI는 현재 `yarn.lock` 파일을 캐시합니다. 이후 빌드가 실패한 경우 두 파일을 쉽게 비교하여 의존성 변화를 확인할 수 있습니다. `actions/cache`가 동일한 캐시 키를 허용하지 않지만, `restore-keys`로 최근 캐시를 가져올 수 있어 매우 편리합니다:

```yml
- uses: actions/cache@v4
  with:
    path: ~tmpProj/yarn.lock
    key: primes-${{ runner.os }}-${{ github.run_id }}
    restore-keys: mock-proj-lock-file
```

그 후 빌드 실패 이벤트를 모니터링하고 `yarn.lock` 파일을 비교하여 변경된 의존성을 빠르게 찾아낼 수 있습니다.

```yml
- name: 🎨 Diff Report
  if: ${{ failure() }}
  run: npx diff-yarn-lock --source=~tmpProj/yarn.lock --target=~tmpProj/yarn.lock.failed
```

![Diff](https://user-images.githubusercontent.com/5378891/226313045-83895072-57c1-4135-80cf-16eeecae8c18.png)

![Build List](https://user-images.githubusercontent.com/5378891/231641305-88ec5d5e-6879-458a-8660-9d9828b97fd9.png)

빌드 실패 시, 저희는 IM 푸시 프로토콜을 통해 개발자 그룹에 메시지를 보내서 문제를 즉시 확인할 수 있도록 합니다. 전체 스크립트는 [여기](https://github.com/ant-design/ant-design/blob/da83561f9cb57b0eb03d18543d96393689f799be/.github/workflows/mock-project-build.yml)에서 확인할 수 있습니다.

### 마치며

저희는 유지보수 과정에서 발생하는 문제들을 지속적으로 최적화하고 있습니다. 사용 중에 좋은 아이디어나 제안이 있다면 언제든지 이슈나 논의를 남겨주시기 바랍니다. 감사합니다.
