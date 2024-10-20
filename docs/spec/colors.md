---
group:
  title: 전체 스타일
  order: 1
order: 0
title: 색상
---

Ant Design은 색상 체계를 '시스템 레벨 색상 체계'와 '제품 레벨 색상 체계'로 나누어 해석합니다.

시스템 레벨 색상 체계는 주로 Ant Financial의 디자인에서 기본 색상 팔레트, 중성 색상 팔레트, 데이터 시각화 색상 팔레트를 정의합니다. 제품 레벨 색상 체계는 특정 디자인 과정에서 시스템 색상을 기반으로 색상의 요구와 기능에 따라 제품의 톤을 정의합니다.

---

## 색상 모델

Ant Design의 디자인 팀은 HSB 색상 모델로 디자인하는 것을 선호했습니다. 이를 통해 HSB 모델은 디자이너가 색상을 조정할 때 명확한 심리적 기대를 가질 수 있게 하며, 팀 내에서의 색상 조정 소통을 원할하게 합니다.

## 시스템 레벨 색상 체계

Ant Design의 시스템 레벨 색상 체계는 ‘자연스러운’ 디자인 언어에서 비롯됩니다. 디자이너는 자연의 풍경을 추상적으로 포착하고 이를 Ant Financial의 기술적 유전자와 결합하여 독창적인 12가지 색상을 형성했습니다. 이후 많은 관찰을 통해 자연광 아래에서 다양한 색상의 변화하는 패턴을 포착하고, 미술에 대한 아이디어 스케치를 통해 12가지 색상을 도출했습니다. 중성 색상표는 가독성, 미적 감각, 사용성을 균형 있게 고려하여 정의되었습니다.

### 기본 색상 팔레트

Ant Design의 기본 색상표는 12가지 기본 색상과 파생 색상을 포함하여 총 120가지 색상입니다. 이러한 색상은 기본적으로 중간 및 백엔드 디자인의 색상 요구를 충족할 수 있습니다.

<ColorPalettes></ColorPalettes>

Ant Design의 색상 색상표는 더욱 확장될 수도 있습니다.디자이너와 프로그래머들이 신중하게 조정하여, 색상의 자연 변화를 결합한 색상 생성 도구를 고안했습니다. 추가 색상 디자인이 필요할 때, 디자이너는 특정 규칙에 따라 기본 색상을 정의하면 자동으로 파생 색상을 포함한 전체 번위의 색상을 얻을 수 있습니다.

### 중성 색상 팔레트

중성 색상은 검정, 흰색, 회색을 포함하며, Ant Design의 중-백엔드 웹 디자인에서 많이 사용됩니다. 적절한 중성 색상 선택은 페이지의 정보에 명확한 우선순위를 부여하고, 읽기 경험을 향상시킬 수 있습니다. Ant Design의 중성 색상 팔레트는 흰색에서 검정까지 총 13가지 색상을 포함합니다.

<Palette direction="horizontal"></Palette>

### 데이터 시각화 색상 팔레트

데이터 시각화 색상표는 기본 색상표와 중성 색상표를 기반으로 하며, AntV의 "효과적이고, 명확하며, 정확하고, 아름다운" 원칙을 따릅니다. [View Palette](https://antv.vision/en/docs/specification/language/palette)

### 색상 팔레트 생성 도구

위의 색상표가 요구를 충족하지 못할 경우, 아래에서 주 색상을 선택하면 Ant Design의 색상 생성 알고리즘이 색상표를 생성합니다.

<ColorPaletteTool></ColorPaletteTool>

### 프로그래밍 사용법

개발자를 위한 JavaScript 사용법을 제공합니다.

```bash
npm install @ant-design/colors
```

```js
import { blue } from '@ant-design/colors';

console.log(blue); // ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']
console.log(blue.primary); // '#1677FF'
```

더 많은 사용 방법: [@ant-design/colors](https://www.npmjs.com/package/@ant-design/colors)

---

## 제품 레벨 색상 체계

### 브랜드 색상

<ImagePreview>
<img class="preview-img no-padding" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ">
</ImagePreview>

브랜드 색상은 제품의 특성을 나타내고 아이디어 컨셉을 전달하는 데 사용되는 가장 직관적인 시각적 요소 중 하나입니다. 색상을 선택할 때는 브랜드 색상이 사용자 인터페이스에서 어떻게 사용되는지에 대한 시나리오 범위를 명확히 하는 것이 중요합니다. 기본 색상표에서 주 색상을 선택할 때, 색상표의 밝은 색상부터 어두운 색상까지 6번째 색상을 주 색상으로 선택하는 것이 좋습니다. Ant Design의 브랜드 색상은 기본 색상표의 파란색에서 나왔으며, 그 Hex 값은 `#1677ff`입니다. 응용 프로그램 시나리오에는 주요 동작 지점, 작동 상태, 중요한 정보 강조 표시, 그래픽 및 기타 시나리오가 포함됩니다.

### 기능성 색상

<ImagePreview>
<img class="preview-img no-padding" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QY4JRa92gHQAAAAAAAAAAABkARQnAQ">
</ImagePreview>

기능성 색상은 성공, 오류, 실패, 알림, 링크 등과 같은 명확한 메시지와 상태를 나타냅니다. 기능성 색상 선택 시 사용자의 기본적인 색상 이해를 따라야 합니다. 제품 시스템 내에서 기능성 색상은 최대한 일관되게 유지되어야 하며, 너무 많은 사용자 정의로 인해 사용자의 인지 경험을 방해하지 않도록 해야 합니다. 구체적인 색상표는 오른쪽에서 확인할 수 있습니다.

### 중성 색상

<ImagePreview>
  <TokenCompare tokenNames="colorTextHeading|colorText|colorTextSecondary|colorTextDisabled|colorBorder|colorSplit|colorBgLayout"></TokenCompare>
</ImagePreview>

Ant Design의 중성색은 인터페이스의 텍스트 부분에 주로 사용되며, 배경, 경계선, 구분선 등의 장면에서도 매우 일반적으로 사용됩니다. 중성 색상 정의는 어두운 배경과 밝은 배경 간의 차이를 고려해야 하며, 이를 WCAG 2.0 표준과 결합해야 합니다. Ant Design의 중성 색상은 투명도를 기반으로 정의되며, 구체적인 색상표는 오른쪽에서 확인할 수 있습니다.

---

## 기업 제품 디자인에서의 색상 적용

Ant Financial의 중간 및 백엔드 디자인에서는 색상에 대한 태도가 제한되어 있습니다. 색상은 정보 전달, 작업 지침 및 상호작용 피드백 목적에 기반하여 더 많이 사용됩니다. 이러한 원칙들 위에서 업무 효율성을 저해하지 않고, 정보의 명확한 전달에 영향을 미치지 않는다는 원칙을 바탕으로 합리적인 색상 선택이 핵심입니다. 물론 이 아이디어는 일러스트레이션과 디스플레이 페이지에서 적절하게 분리될 수 있습니다.
