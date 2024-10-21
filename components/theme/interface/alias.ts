import type * as React from 'react';

import type { MapToken } from './maps';

// ======================================================================
// ==                           Alias Token                            ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface AliasToken extends MapToken {
  // Background
  /**
   * @nameZH 内容区域背景色（悬停）
   * @nameEN Background color of content area (hover)
   * @desc 控制内容区域背景色在鼠标悬停时的样式。
   * @descEN Control the style of background color of content area when mouse hovers over it.
   */
  colorFillContentHover: string;
  /**
   * @nameZH 替代背景色
   * @nameEN Alternative background color
   * @desc 控制元素替代背景色。
   * @descEN Control the alternative background color of element.
   */
  colorFillAlter: string;
  /**
   * @nameZH 内容区域背景色
   * @nameEN Background color of content area
   * @desc 控制内容区域的背景色。
   * @descEN Control the background color of content area.
   */
  colorFillContent: string;
  /**
   * @nameZH 容器禁用态下的背景色
   * @nameEN Disabled container background color
   * @desc 비활성화된 컨테이너 배경색
   * @descEN Control the background color of container in disabled state.
   */
  colorBgContainerDisabled: string;
  /**
   * @nameZH 文本悬停态背景色
   * @nameEN Text hover background color
   * @desc 控制文本在悬停状态下的背景色。
   * @descEN Control the background color of text in hover state.
   */
  colorBgTextHover: string;
  /**
   * @nameZH 文本激活态背景色
   * @nameEN Text active background color
   * @desc 控制文本在激活状态下的背景色。
   * @descEN Control the background color of text in active state.
   */
  colorBgTextActive: string;

  // Border
  /**
   * @nameKR 배경 테두리 색상
   * @desc 요소의 배경 테두리 색상을 제어합니다.
   */
  colorBorderBg: string;
  /**

   * @nameZH 分割线颜色
   * @nameEN Separator Color
   * @nameKR 구분선 색상
   * @desc 구분선의 색상으로 사용되며, 이 색상은 colorBorderSecondary와 동일하지만 투명도가 있습니다.
   * @descEN Used as the color of separator, this color is the same as colorBorderSecondary but with transparency.
   */
  colorSplit: string;

  // Text
  /**
   * @nameZH 占位文本颜色
   * @nameEN Placeholder Text Color
   * @nameKR 비활성화된 글자 색상
   * @desc 비활성화 상태에서의 글자 색상을 제어하다
   * @descEN Control the color of placeholder text.
   */
  colorTextPlaceholder: string;
  /**
   * @nameKR 비활성화된 글자 색상
   * @desc 비활성화 상태에서의 글자 색상을 제어하다。
   */
  colorTextDisabled: string;
  /**
   * @nameZH 标题字体颜色
   * @nameEN Heading Text Color
   * @desc 控制标题字体颜色。
   * @descEN Control the font color of heading.
   */
  colorTextHeading: string;
  /**
   * @nameZH 文本标签字体颜色
   * @nameEN Text label font color
   * @desc 控制文本标签字体颜色。
   * @descEN Control the font color of text label.
   */
  colorTextLabel: string;
  /**
   * @nameZH 文本描述字体颜色
   * @nameEN Text description font color
   * @nameKR 텍스트 설명 글꼴 색상
   * @desc 텍스트 설명의 글꼴 색상을 제어합니다.
   * @descEN Control the font color of text description.
   */
  colorTextDescription: string;
  /**
   * @nameKR 고정된 글꼴 하이라이트 색상
   * @desc Primary Button 컴포넌트의 텍스트와 같이 배경색으로 텍스트의 하이라이트 색상을 제어합니다.
   */
  colorTextLightSolid: string;

  /**
  /**
   * @nameZH 弱操作图标颜色
   * @nameEN Weak action icon color
   * @desc 약한 조작 아이콘의 색상을 제어합니다. 예: allowClear 또는 Alert 닫기 버튼.
   * @descEN Weak action. Such as `allowClear` or Alert close button
   */
  colorIcon: string;

  /**  */
  /**
   * @nameZH 弱操作图标悬浮态颜色
   * @nameEN Weak action icon hover color
   * @desc 약한 조작 아이콘의 호버 상태에서 색상을 제어합니다. 예: allowClear 또는 Alert 닫기 버튼.
   * @descEN Weak action hover color. Such as `allowClear` or Alert close button
   */
  colorIconHover: string;

  /**
   * @nameZH 高亮颜色
   * @nameEN Highlight color
   * @desc 控制页面元素高亮时的颜色。
   * @descEN Control the color of page element when highlighted.
   */
  colorHighlight: string;

  /**
   * @nameZH 输入组件的 Outline 颜色
   * @nameEN Input component outline color
   * @desc 입력 컴포넌트의 외곽선 색상을 제어합니다.
   * @descEN Control the outline color of input component.
   */
  controlOutline: string;

  /**
   * @nameZH 警告状态下的 Outline 颜色
   * @nameEN Warning outline color
   * @desc 입력 컴포넌트 경고 상태에서 외곽선 색상을 제어합니다
   * @descEN Control the outline color of input component in warning state.
   */
  colorWarningOutline: string;

  /**
   * @nameZH 错误状态下的 Outline 颜色
   * @nameEN Error outline color
   * @desc 입력 컴포넌트 오류 상태에서 외곽선 색상을 제어합니다.
   * @descEN Control the outline color of input component in error state.
   */
  colorErrorOutline: string;

  // Font
  /**
   * @nameZH 选择器、级联选择器等中的操作图标字体大小
   * @nameEN Operation icon font size in Select, Cascader, etc.
   * @nameKR Select, Cascader 등에서의 작업 아이콘 글꼴 크기
   * @desc Select, Cascader 등에서 작업 아이콘의 글꼴 크기를 제어합니다. 일반적으로 fontSizeSM과 동일합니다.
   * @descEN Control the font size of operation icon in Select, Cascader, etc. Normally same as fontSizeSM.
   */
  fontSizeIcon: number;

  /**
   * @nameZH 标题类组件（如 h1、h2、h3）或选中项的字体粗细
   * @nameEN Font weight for heading components (such as h1, h2, h3) or selected item
   * @desc 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细。
   * @descEN Control the font weight of heading components (such as h1, h2, h3) or selected item.
   */
  fontWeightStrong: number;

  // Control

  /**
   * @nameZH 输入组件的外轮廓线宽度
   * @nameEN Input component outline width
   * @desc 입력 컴포넌트의 외곽선 너비를 제어합니다.
   * @descEN Control the outline width of input component.
   */
  controlOutlineWidth: number;

  /**
   * @nameKR 마우스를 올릴 때 제어 컴포넌트 요소의 배경색
   * @desc 마우스를 올릴 때 제어 컴포넌트 요소의 배경색을 제어합니다.
   */
  controlItemBgHover: string; // Note. It also is a color

  /**
   * @nameKR 활성화 시 제어 컴포넌트 요소의 배경색
   * @desc 활성화 시 제어 컴포넌트 요소의 배경색을 제어합니다.
   */
  controlItemBgActive: string; // Note. It also is a color

  /**
   * @nameKR 마우스를 올리고 활성화할 때 제어 컴포넌트 요소의 배경색
   * @desc 마우스를 올리고 활성화할 때 제어 컴포넌트 요소의 배경색을 제어합니다.
   */
  controlItemBgActiveHover: string; // Note. It also is a color

  /**
   * @nameZH 控制组件的交互大小
   * @nameEN Interactive size of control component
   * @desc 控制组件的交互大小。
   * @descEN Control the interactive size of control component.
   */
  controlInteractiveSize: number;

  /**
   * @nameZH 控制组件项在禁用状态下的激活背景颜色
   * @nameEN Background color of control component item when active and disabled
   * @desc 控制组件项在禁用状态下的激活背景颜色。
   * @descEN Control the background color of control component item when active and disabled.
   */
  controlItemBgActiveDisabled: string; // Note. It also is a color

  // Line
  /**
   * @nameEN 선 너비(포커스 상태)
   * @desc 컴포넌트가 포커스 상태에 있을 때 선의 너비를 제어합니다.
   */
  lineWidthFocus: number;

  // Padding
  /**
   * @nameKR 아주 매우 작은 안쪽 여백
   * @desc 요소의 아주 매우 작은 안쪽 여백을 제어합니다.
   */
  paddingXXS: number;
  /**
   * @nameKR 매우 작은 안쪽 여백
   * @desc 요소의 매우 작은 안쪽 여백을 제어합니다.
   */
  paddingXS: number;
  /**
   * @nameZH 小内间距
   * @nameEN Small padding
   * @desc 요소의 작은 내부 여백을 제어합니다.
   * @descEN Control the small padding of the element.
   */
  paddingSM: number;
  /**
   * @nameKR 안쪽 여백
   * @desc 요소의 안쪽 여백을 제어합니다.
   */
  padding: number;
  /**
   * @nameZH 中等内间距
   * @nameEN Medium padding
   * @desc 控制元素的中等内间距。
   * @descEN Control the medium padding of the element.
   */
  paddingMD: number;
  /**
   * @nameZH 大内间距
   * @nameEN Large padding
   * @desc 控制元素的大内间距。
   * @descEN Control the large padding of the element.
   */
  paddingLG: number;
  /**
   * @nameZH 特大内间距
   * @nameEN Extra large padding
   * @desc 控制元素的特大内间距。
   * @descEN Control the extra large padding of the element.
   */
  paddingXL: number;

  // Padding Content
  /**
   * @nameZH 内容水平内间距（LG）
   * @nameEN Content horizontal padding (LG)
   * @desc 控制内容元素水平内间距，适用于大屏幕设备。
   * @descEN Control the horizontal padding of content element, suitable for large screen devices.
   */
  paddingContentHorizontalLG: number;
  /**
   * @nameZH 内容水平内间距
   * @nameEN Content horizontal padding
   * @desc 控制内容元素水平内间距。
   * @descEN Control the horizontal padding of content element.
   */
  paddingContentHorizontal: number;
  /**
   * @nameZH 内容水平内间距（SM）
   * @nameEN Content horizontal padding (SM)
   * @desc 控制内容元素水平内间距，适用于小屏幕设备。
   * @descEN Control the horizontal padding of content element, suitable for small screen devices.
   */
  paddingContentHorizontalSM: number;
  /**
   * @nameZH 内容垂直内间距（LG）
   * @nameEN Content vertical padding (LG)
   * @desc 控制内容元素垂直内间距，适用于大屏幕设备。
   * @descEN Control the vertical padding of content element, suitable for large screen devices.
   */
  paddingContentVerticalLG: number;
  /**
   * @nameZH 内容垂直内间距
   * @nameEN Content vertical padding
   * @desc 控制内容元素垂直内间距。
   * @descEN Control the vertical padding of content element.
   */
  paddingContentVertical: number;
  /**
   * @nameZH 内容垂直内间距（SM）
   * @nameEN Content vertical padding (SM)
   * @desc 控制内容元素垂直内间距，适用于小屏幕设备。
   * @descEN Control the vertical padding of content element, suitable for small screen devices.
   */
  paddingContentVerticalSM: number;

  // Margin
  /**
   * @nameKR 여백 XXS
   * @desc 요소의 여백을 가장 작은 크기로 제어합니다.
   */
  marginXXS: number;
  /**
   * @nameKR 여백 XS
   * @desc 요소의 여백을 작은 크기로 제어합니다.
   */
  marginXS: number;
  /**
   * @nameZH 外边距 SM
   * @nameEN Margin SM
   * @desc 控制元素外边距，中小尺寸。
   * @descEN Control the margin of an element, with a medium-small size.
   */
  marginSM: number;
  /**
   * @nameZH 外边距
   * @nameEN Margin
   * @desc 控制元素外边距，中等尺寸。
   * @descEN Control the margin of an element, with a medium size.
   */
  margin: number;
  /**
   * @nameZH 外边距 MD
   * @nameEN Margin MD
   * @desc 控制元素外边距，中大尺寸。
   * @descEN Control the margin of an element, with a medium-large size.
   */
  marginMD: number;
  /**
   * @nameZH 外边距 LG
   * @nameEN Margin LG
   * @desc 控制元素外边距，大尺寸。
   * @descEN Control the margin of an element, with a large size.
   */
  marginLG: number;
  /**
   * @nameZH 外边距 XL
   * @nameEN Margin XL
   * @desc 控制元素外边距，超大尺寸。
   * @descEN Control the margin of an element, with an extra-large size.
   */
  marginXL: number;
  /**
   * @nameZH 外边距 XXL
   * @nameEN Margin XXL
   * @desc 控制元素外边距，最大尺寸。
   * @descEN Control the margin of an element, with the largest size.
   */
  marginXXL: number;

  // =============== Legacy: should be remove ===============
  /**
   * @nameZH 加载状态透明度
   * @nameEN Loading opacity
   * @desc 控制加载状态的透明度。
   * @descEN Control the opacity of the loading state.
   */
  opacityLoading: number;

  /**
   * @nameZH 一级阴影
   * @nameEN Box shadow
   * @desc 控制元素阴影样式。
   * @descEN Control the box shadow style of an element.
   */
  boxShadow: string;
  /**
   * @nameZH 二级阴影
   * @nameEN Secondary box shadow
   * @nameKR 보조 상자 그림자
   * @desc 요소의 보조 상자 그림자 스타일을 제어합니다.
   * @descEN Control the secondary box shadow style of an element.
   */
  boxShadowSecondary: string;
  /**
   * @nameZH 三级阴影
   * @nameEN Tertiary box shadow
   * @desc 控制元素三级盒子阴影样式。
   * @descEN Control the tertiary box shadow style of an element.
   */
  boxShadowTertiary: string;

  /**
   * @nameZH 链接文本装饰
   * @nameEN Link text decoration
   * @desc 控制链接文本的装饰样式。
   * @descEN Control the text decoration style of a link.
   */
  linkDecoration: React.CSSProperties['textDecoration'];
  /**
   * @nameZH 链接鼠标悬浮时文本装饰
   * @nameEN Link text decoration on mouse hover
   * @desc 控制链接鼠标悬浮时文本的装饰样式。
   * @descEN Control the text decoration style of a link on mouse hover.
   */
  linkHoverDecoration: React.CSSProperties['textDecoration'];
  /**
   * @nameZH 链接聚焦时文本装饰
   * @nameEN Link text decoration on focus
   * @desc 控制链接聚焦时文本的装饰样式。
   * @descEN Control the text decoration style of a link on focus.
   */
  linkFocusDecoration: React.CSSProperties['textDecoration'];

  /**
   * @nameZH 控制水平内间距
   * @nameKR 가로 안쪽 여백 제어
   * @nameEN Control horizontal padding
   * @desc   요소의 가로 안쪽 여백을 제어합니다.
   * @descEN Control the horizontal padding of an element.
   */
  controlPaddingHorizontal: number;
  /**
   * @nameZH 控制中小尺寸水平内间距
   * @nameEN Control horizontal padding with a small-medium size
   * @desc SM 크기 요소의 수평 패딩을 제어합니다.
   * @descEN Control the horizontal padding of an element with a small-medium size.
   */
  controlPaddingHorizontalSM: number;

  // Media queries breakpoints
  /**
   * @nameZH 屏幕宽度（像素） - 超小屏幕
   * @nameEN Screen width (pixels) - Extra small screens
   * @desc 控制超小屏幕的屏幕宽度。
   * @descEN Control the screen width of extra small screens.
   */
  screenXS: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超小屏幕最小值
   * @nameEN Screen width (pixels) - Extra small screens minimum value
   * @desc 控制超小屏幕的最小宽度。
   * @descEN Control the minimum width of extra small screens.
   */
  screenXSMin: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超小屏幕最大值
   * @nameEN Screen width (pixels) - Extra small screens maximum value
   * @desc 控制超小屏幕的最大宽度。
   * @descEN Control the maximum width of extra small screens.
   */
  screenXSMax: number;
  /**
   * @nameZH 屏幕宽度（像素） - 小屏幕
   * @nameEN Screen width (pixels) - Small screens
   * @desc 控制小屏幕的屏幕宽度。
   * @descEN Control the screen width of small screens.
   */
  screenSM: number;
  /**
   * @nameZH 屏幕宽度（像素） - 小屏幕最小值
   * @nameEN Screen width (pixels) - Small screens minimum value
   * @desc 控制小屏幕的最小宽度。
   * @descEN Control the minimum width of small screens.
   */
  screenSMMin: number;
  /**
   * @nameZH 屏幕宽度（像素） - 小屏幕最大值
   * @nameEN Screen width (pixels) - Small screens maximum value
   * @desc 控制小屏幕的最大宽度。
   * @descEN Control the maximum width of small screens.
   */
  screenSMMax: number;
  /**
   * @nameZH 屏幕宽度（像素） - 中等屏幕
   * @nameEN Screen width (pixels) - Medium screens
   * @desc 控制中等屏幕的屏幕宽度。
   * @descEN Control the screen width of medium screens.
   */
  screenMD: number;
  /**
   * @nameZH 屏幕宽度（像素） - 中等屏幕最小值
   * @nameEN Screen width (pixels) - Medium screens minimum value
   * @desc 控制中等屏幕的最小宽度。
   * @descEN Control the minimum width of medium screens.
   */
  screenMDMin: number;
  /**
   * @nameZH 屏幕宽度（像素） - 中等屏幕最大值
   * @nameEN Screen width (pixels) - Medium screens maximum value
   * @desc 控制中等屏幕的最大宽度。
   * @descEN Control the maximum width of medium screens.
   */
  screenMDMax: number;
  /**
   * @nameZH 屏幕宽度（像素） - 大屏幕
   * @nameEN Screen width (pixels) - Large screens
   * @desc 控制大屏幕的屏幕宽度。
   * @descEN Control the screen width of large screens.
   */
  screenLG: number;
  /**
   * @nameZH 屏幕宽度（像素） - 大屏幕最小值
   * @nameEN Screen width (pixels) - Large screens minimum value
   * @desc 控制大屏幕的最小宽度。
   * @descEN Control the minimum width of large screens.
   */
  screenLGMin: number;
  /**
   * @nameZH 屏幕宽度（像素） - 大屏幕最大值
   * @nameEN Screen width (pixels) - Large screens maximum value
   * @desc 控制大屏幕的最大宽度。
   * @descEN Control the maximum width of large screens.
   */
  screenLGMax: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超大屏幕
   * @nameEN Screen width (pixels) - Extra large screens
   * @desc 控制超大屏幕的屏幕宽度。
   * @descEN Control the screen width of extra large screens.
   */
  screenXL: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超大屏幕最小值
   * @nameEN Screen width (pixels) - Extra large screens minimum value
   * @desc 控制超大屏幕的最小宽度。
   * @descEN Control the minimum width of extra large screens.
   */
  screenXLMin: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超大屏幕最大值
   * @nameEN Screen width (pixels) - Extra large screens maximum value
   * @desc 控制超大屏幕的最大宽度。
   * @descEN Control the maximum width of extra large screens.
   */
  screenXLMax: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超超大屏幕
   * @nameEN Screen width (pixels) - Extra extra large screens
   * @desc 控制超超大屏幕的屏幕宽度。
   * @descEN Control the screen width of extra extra large screens.
   */
  screenXXL: number;
  /**
   * @nameZH 屏幕宽度（像素） - 超超大屏幕最小值
   * @nameEN Screen width (pixels) - Extra extra large screens minimum value
   * @desc 控制超超大屏幕的最小宽度。
   * @descEN Control the minimum width of extra extra large screens.
   */
  screenXXLMin: number;

  /**
   * @deprecated
   * Used for DefaultButton, Switch which has default outline
   * @desc 默认样式的 Outline 颜色
   * @descEN Default style outline color.
   */
  controlTmpOutline: string;

  // FIXME: component box-shadow, should be removed
  /** @internal */
  boxShadowPopoverArrow: string;
  /** @internal */
  boxShadowCard: string;
  /** @internal */
  boxShadowDrawerRight: string;
  /** @internal */
  boxShadowDrawerLeft: string;
  /** @internal */
  boxShadowDrawerUp: string;
  /** @internal */
  boxShadowDrawerDown: string;
  /** @internal */
  boxShadowTabsOverflowLeft: string;
  /** @internal */
  boxShadowTabsOverflowRight: string;
  /** @internal */
  boxShadowTabsOverflowTop: string;
  /** @internal */
  boxShadowTabsOverflowBottom: string;
}
