---
group: 전체 스타일
order: 3
title: 글꼴
---

폰트는 체계적인 인터페이스 디자인에서 가장 기본적인 구성 요소 중 하나입니다.

사용자는 텍스트를 통해 내용을 이해하고 작업을 완료합니다. 과학적인 폰트 시스템은 사용자의 읽기 경험과 작업 효율을 크게 향상시킬 수 있습니다. Ant Design 폰트 솔루션은 "동적 질서"라는 디자인 원칙에 기반하여, 자연 로그와 음율의 규칙을 결합한 뒤, 많은 Ant 중간 관리 시스템 제품을 통해 검증되었습니다. 이를 토대로 추천하는 시스템입니다. 중간 관리 시각 체계에서 폰트 시스템을 정의할 때, 아래 다섯 가지 측면에서 출발할 것을 권장합니다:

1. 폰트 패밀리
2. 기본 폰트
3. 폰트 크기와 줄 높이
4. 폰트 두께
5. 폰트 색상

---

## 폰트 패밀리

우수한 폰트 시스템의 첫 번째 단계는 적절한 폰트 패밀리를 선택하는 것입니다. Ant Design의 폰트 패밀리에서는 시스템 기본 인터페이스 폰트를 우선으로 사용하며, 동시에 다양한 플랫폼 및 브라우저에서 항상 우수한 가독성과 읽기 용이성을 유지할 수 있는 백업 폰트 라이브러리를 제공합니다. 이를 통해 사용자에게 친근하고, 안정적이며, 전문적인 특성을 제공합니다.

```css
@font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
```

> 참고：https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/ 및 http://markdotto.com/2018/02/07/github-system-fonts/

또한, 중간 관리 시스템에서는 숫자가 종종 세로로 비교 표시되어야 하므로, 숫자의 폰트를 `font-variant-numeric` 로 `tabular-nums;` 로 설정하여 고정 폭 폰트를 사용하도록 설정합니다. [tabular figures](https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures).

> 참고：https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790

## 기본 폰트

Ant Design의 기본 폰트는 컴퓨터 모니터의 읽기 거리(50cm)와 최적의 읽기 각도(0.3)에 따라, 기존 12pt에서 14pt로 업그레이드되었습니다. 이를 통해 대부분의 일반적인 모니터에서 사용자에게 최적의 읽기 효율을 제공합니다.

<div style="text-align:center;margin:40px 0;">
  <img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png">
</div>

## 폰트 크기와 줄 높이

폰트 크기와 줄 높이는 폰트 시스템의 동적 질서의 아름다움을 결정짓는 요소입니다. 폰트 크기란 규칙적으로 다른 크기의 폰트를 말합니다. 줄 높이는 폰트 바깥에 존재하는 보이지 않는 상자라고 이해할 수 있습니다.

<div style="text-align:center;margin:40px 0;">
  <img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/xpykKKFJQorFJltdXkie.png">
</div>

Ant Design은 5음계와 자연율에서 영감을 받아, 10개의 다른 크기의 폰트와 그에 대응하는 줄 높이를 정의했습니다.

<ImagePreview>
<img src="https://gw.alipayobjects.com/zos/rmsportal/iFjgfIBExksqCqGMwUlw.png" />
</ImagePreview>

Ant Design의 시각 체계에서는 기본 폰트를 14로 설정하며, 그에 대응하는 줄 높이는 22입니다. 나머지 폰트 크기는 상황에 따라 자유롭게 정의할 수 있으며, 시스템 디자인 내에서는 (디스플레이형 페이지 제외) 폰트 크기 선택을 3-5종으로 제한하여 절제된 원칙을 지키는 것이 좋습니다.

## 폰트 두께

폰트 두께 선택 역시 질서, 안정성, 절제의 원칙을 따릅니다. 대부분의 경우 regular(보통)와 medium(중간)의 두 가지 두께만 사용되며, 각각 코드 상에서 400과 500에 대응합니다. 영문 폰트를 굵게 표시할 경우 semibold(약간 굵은)의 두께를 사용하며, 이는 코드 상에서 600에 대응합니다.

<div class="font-samples">
	<div>
	  <img src="https://gw.alipayobjects.com/zos/rmsportal/orIVrEOZIpjMbqZGiXEi.png" />
	</div>
	<div>
  	<img src="https://gw.alipayobjects.com/zos/rmsportal/sasWhUzTGjlZKftukraH.png" />
	</div>
	<div>
  	<img src="https://gw.alipayobjects.com/zos/rmsportal/QqxifAZlISrSUwnlonyx.png" />
	</div>
</div>

<style>
.font-samples {
  display: flex;
}
</style>

## 폰트 색상

<ImagePreview>
  <TokenCompare tokenNames="colorTextHeading|colorText|colorTextSecondary|colorTextDisabled|colorBorder|colorSplit|colorBgLayout"></TokenCompare>
</ImagePreview>

텍스트 색상이 배경색과 너무 가까우면 읽기 어려워집니다. 접근성 디자인을 고려하여 WCAG 표준을 참고했으며, 본문 텍스트와 제목 및 배경 색상의 대비를 AAA 등급인 7:1 이상으로 유지했습니다.

## 제안

폰트 시스템의 구축은 "동적 질서의 아름다움"의 첫걸음입니다. 실제 디자인에서는 다음 세 가지 제안을 드립니다:

1. **체계적인 디자인 사고 확립:** 동일한 시스템의 UI 디자인에서 체계적인 디자인 사고를 먼저 확립하고, 주 폰트, 부 폰트, 보조 폰트, 제목 폰트, 디스플레이용 폰트 등의 카테고리를 통일된 방식으로 계획한 후, 구체적인 상황에 맞게 미세 조정하는 것이 좋습니다. 체계적인 디자인 사고는 폰트 적용의 일관성을 강화하고, 폰트 사용의 효율성을 높이며 불필요한 스타일 낭비를 줄일 수 있습니다.
2. **적을수록 좋다:** 시각적으로 최대한 적은 스타일로 디자인 목적을 달성하는 것이 좋습니다. 의미 없이 많은 폰트 크기, 색상, 폰트 두께를 사용해 시각적 강조나 대비를 주려는 것을 피해야 합니다.
3. **폰트를 음표처럼 활용해보라:** 차이를 크게 두어야 할 때, 폰트 크기 표에서 사이를 띄어 선택해보는 것도 좋은 방법입니다. 이는 폰트 크기 사이에 미묘한 리듬감을 만들어낼 수 있습니다.
