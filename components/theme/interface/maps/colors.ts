export interface ColorNeutralMapToken {
  /**
   * @internal
   */
  colorTextBase: string;

  /**
   * @internal
   */
  colorBgBase: string;

  // ----------   Text   ---------- //

  /**
   * @nameKR 텍스트 색상
   * @desc W3C 표준을 준수하는 기본 텍스트 색상으로, 이 색상은 가장 어두운 중립적인 색상이기도 합니다.
   */
  colorText: string;

  /**
   * @nameZH 二级文本色
   * @nameEN Secondary Text Color
   * @desc 作为第二梯度的文本色，一般用在不那么需要强化文本颜色的场景，例如 Label 文本、Menu 的文本选中态等场景。
   * @descEN The second level of text color is generally used in scenarios where text color is not emphasized, such as label text, menu text selection state, etc.
   */
  colorTextSecondary: string;

  /**
   * @nameZH 三级文本色
   * @desc 第三级文本色一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景。
   * @descEN The third level of text color is generally used for descriptive text, such as form supplementary explanation text, list descriptive text, etc.
   */
  colorTextTertiary: string;

  /**
   * @nameZH 四级文本色
   * @desc 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。
   * @descEN The fourth level of text color is the lightest text color, such as form input prompt text, disabled color text, etc.
   */
  colorTextQuaternary: string;

  // ----------   Border   ---------- //

  /**
   * @nameZH 一级边框色
   * @nameEN Default Border Color
   * @desc 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。
   * @descEN Default border color, used to separate different elements, such as: form separator, card separator, etc.
   */
  colorBorder: string;

  /**
   * @nameZH 二级边框色
   * @nameEN Secondary Border Color
   * @desc 比默认使用的边框色要浅一级，此颜色和 colorSplit 的颜色一致。使用的是实色。
   * @descEN Slightly lighter than the default border color, this color is the same as `colorSplit`. Solid color is used.
   */
  colorBorderSecondary: string;

  // ----------   Fill   ---------- //

  /**
   * @nameZH 一级填充色
   * @desc 最深的填充色，用于拉开与二、三级填充色的区分度，目前只用在 Slider 的 hover 效果。
   * @descEN The darkest fill color is used to distinguish between the second and third level of fill color, and is currently only used in the hover effect of Slider.
   */
  colorFill: string;

  /**
   * @nameZH 二级填充色
   * @desc 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。
   * @descEN The second level of fill color can outline the shape of the element more clearly, such as Rate, Skeleton, etc. It can also be used as the Hover state of the third level of fill color, such as Table, etc.
   */
  colorFillSecondary: string;

  /**
   * @nameZH 三级填充色
   * @desc 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。
   * @descEN The third level of fill color is used to outline the shape of the element, such as Slider, Segmented, etc. If there is no emphasis requirement, it is recommended to use the third level of fill color as the default fill color.
   */
  colorFillTertiary: string;

  /**
   * @nameZH 四级填充色
   * @desc 最弱一级的填充色，适用于不易引起注意的色块，例如斑马纹、区分边界的色块等。
   * @descEN The weakest level of fill color is suitable for color blocks that are not easy to attract attention, such as zebra stripes, color blocks that distinguish boundaries, etc.
   */
  colorFillQuaternary: string;

  // ----------   Surface   ---------- //

  /**
   * @nameZH 布局背景色
   * @nameEN Layout Background Color
   * @desc 该色用于页面整体布局的背景色，只有需要在页面中处于 B1 的视觉层级时才会使用该 token，其他用法都是错误的
   * @descEN This color is used for the background color of the overall layout of the page. This token will only be used when it is necessary to be at the B1 visual level in the page. Other usages are wrong.
   */
  colorBgLayout: string;

  /**
   * @nameKR 컨테이너 배경 색강
   * @desc  컨테이너 배경 색상, 예: 기본 버튼, 입력 상자, 등. `colorBgElevated`와 혼동을 주의하세요.
   */
  colorBgContainer: string;

  /**
   * @nameZH 浮层容器背景色
   * @desc 팝업 레이어의 컨테이너 배경색으로, 다크 모드에서 이 토큰의 색상 값은 `colorBgContainer`보다 약간 밝습니다. 예 : modal, pop-up, menu 등
   */
  colorBgElevated: string;

  /**
   * @nameZH 引起注意的背景色
   * @desc 该色用于引起用户强烈关注注意的背景色，目前只用在 Tooltip 的背景色上。
   * @descEN This color is used to draw the user's strong attention to the background color, and is currently only used in the background color of Tooltip.
   */
  colorBgSpotlight: string;
  /**
   * @nameZH 毛玻璃容器背景色
   * @nameEN Frosted glass container background color
   * @desc 控制毛玻璃容器的背景色，通常为透明色。
   * @descEN Control the background color of frosted glass container, usually transparent.
   */
  colorBgBlur: string;

  // ----------   Solid   ---------- //

  /**
   * @desc 实心的背景颜色，目前只用在默认实心按钮背景色上。
   * @descEN Solid background color, currently only used for the default solid button background color.
   */
  colorBgSolid: string;
  /**
   * @desc 实心的背景颜色激活态，目前只用在默认实心按钮的 active 效果。
   * @descEN Solid background color active state, currently only used in the active effect of the default solid button.
   */
  colorBgSolidActive: string;
  /**
   * @desc 实心的背景颜色悬浮态，目前只用在默认实心按钮的 hover 效果。
   * @descEN Solid background color hover state, currently only used in the hover effect of the default solid button.
   */
  colorBgSolidHover: string;
}

/**
 * 品牌色梯度变量
 */
interface ColorPrimaryMapToken {
  /**
   * @nameZH 品牌主色
   * @nameEN Primary color of the brand
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一，用于产品的主色调、主按钮、主图标、主文本等
   * @descEN The brand color is one of the most intuitive visual elements that reflects product characteristics and communication concepts, and is used for the main color tone, main buttons, main icons, main text, etc. of the product.
   */
  colorPrimary: string; // 6

  /**
   * @nameZH 主色浅色背景色
   * @nameEN Light background color of primary color
   * @desc 主色浅色背景颜色，一般用于视觉层级较弱的选中状态。
   * @descEN Light background color of primary color, usually used for weak visual level selection state.
   */
  colorPrimaryBg: string; // 1

  /**
   * @nameZH 主色浅色背景悬浮态
   * @nameEN Hover state of light background color of primary color
   * @desc 与主色浅色背景颜色相对应的悬浮态颜色。
   * @descEN The hover state color corresponding to the light background color of the primary color.
   */
  colorPrimaryBgHover: string; // 2

  /**
   * @nameKR 기본 색상의 테두리 색상
   * @desc Slider와 같은 컴포넌트의 획에 사용되는 주 색상 그라데이션 아래의 획 색상입니다.
   */
  colorPrimaryBorder: string; // 3

  /**
   * @nameZH 主色描边色悬浮态
   * @nameEN Hover state of border color of primary color
   * @desc 主色梯度下的描边用色的悬浮态，Slider 、Button 等组件的描边 Hover 时会使用。
   * @descEN The hover state of the stroke color under the main color gradient, which will be used when the stroke Hover of components such as Slider and Button.
   */
  colorPrimaryBorderHover: string; // 4

  /**
   * @nameZH 主色悬浮态
   * @nameEN Hover state of primary color
   * @desc 主色梯度下的悬浮态。
   * @descEN Hover state under the main color gradient.
   */
  colorPrimaryHover: string; // 5

  /**
   * @nameZH 主色激活态
   * @nameEN Active state of primary color
   * @desc 主色梯度下的深色激活态。
   * @descEN Dark active state under the main color gradient.
   */
  colorPrimaryActive: string; // 7

  /**
   * @nameZH 主色文本悬浮态
   * @nameEN Hover state of text color of primary color
   * @desc 主色梯度下的文本悬浮态。
   * @descEN Hover state of text color under the main color gradient.
   */
  colorPrimaryTextHover: string; // 8

  /**
   * @nameZH 主色文本
   * @nameEN Text color of primary color
   * @desc 主色梯度下的文本颜色。
   * @descEN Text color under the main color gradient.
   */
  colorPrimaryText: string; // 9

  /**
   * @nameZH 主色文本激活态
   * @nameEN Active state of text color of primary color
   * @desc 主色梯度下的文本激活态。
   * @descEN Active state of text color under the main color gradient.
   */
  colorPrimaryTextActive: string; // 10
}

interface ColorSuccessMapToken {
  /**
   * @nameKR 성공 색상의 밝은 배경 색상
   * @desc 성공 색상의 밝은 배경 색상으로, Tag와 Alert의 성공 상태 배경 색상에 사용됩니다.
   */
  colorSuccessBg: string; // 1

  /**
   * @nameZH 成功色的浅色背景色悬浮态
   * @nameEN Hover State Color of Light Success Background
   * @desc 成功色浅色背景颜色，一般用于视觉层级较弱的选中状态，不过 antd 目前没有使用到该 token
   * @descEN Light background color of success color, but antd does not use this token currently
   */
  colorSuccessBgHover: string; // 2

  /**
   * @nameKR 성공 색상의 테두리 색상
   * @desc 성공 색상의 테두리 색상으로, Tag와 Alert의 성공 상태 테두리 색상에 사용됩니다.
   */
  colorSuccessBorder: string; // 3

  /**
   * @nameZH 成功色的描边色悬浮态
   * @nameEN Hover State Color of Success Border
   * @desc 成功色的描边色悬浮态
   * @descEN Hover state color of success color border
   */
  colorSuccessBorderHover: string; // 4

  /**
   * @nameZH 成功色的深色悬浮态
   * @nameEN Hover State Color of Dark Success
   * @desc 成功色的深色悬浮态
   * @descEN Hover state color of dark success color
   */
  colorSuccessHover: string; // 5

  /**
   * @nameZH 成功色
   * @nameEN Success Color
   * @desc 默认的成功色，如 Result、Progress 等组件中都有使用该颜色
   * @descEN Default success color, used in components such as Result and Progress
   */
  colorSuccess: string; // 6

  /**
   * @nameZH 成功色的深色激活态
   * @nameEN Active State Color of Dark Success
   * @desc 成功色的深色激活态
   * @descEN Active state color of dark success color
   */
  colorSuccessActive: string; // 7

  /**
   * @nameZH 成功色的文本悬浮态
   * @nameEN Hover State Color of Success Text
   * @desc 成功色的文本悬浮态
   * @descEN Hover state color of success color text
   */
  colorSuccessTextHover: string; // 8

  /**
   * @nameZH 成功色的文本默认态
   * @nameEN Default State Color of Success Text
   * @desc 成功色的文本默认态
   * @descEN Default state color of success color text
   */
  colorSuccessText: string; // 9

  /**
   * @nameZH 成功色的文本激活态
   * @nameEN Active State Color of Success Text
   * @desc 成功色的文本激活态
   * @descEN Active state color of success color text
   */
  colorSuccessTextActive: string; // 10
}

interface ColorWarningMapToken {
  /**
   * @nameKR 경고 배경 색상
   * @desc 경고 상태의 배경 색상입니다.
   */
  colorWarningBg: string; // 1

  /**
   * @nameZH 警戒色的浅色背景色悬浮态
   * @nameEN Warning background color hover state
   * @desc 警戒色的浅色背景色悬浮态
   * @descEN The hover state background color of the warning state.
   */
  colorWarningBgHover: string; // 2

  /**
   * @nameKR 경고 테두리 색상
   * @desc 경고 상태의 테두리 색상입니다.
   */
  colorWarningBorder: string; // 3

  /**
   * @nameZH 警戒色的描边色悬浮态
   * @nameEN Warning border color hover state
   * @desc 警戒色的描边色悬浮态
   * @descEN The hover state border color of the warning state.
   */
  colorWarningBorderHover: string; // 4

  /**
   * @nameZH 警戒色的深色悬浮态
   * @nameEN Warning hover color
   * @desc 警戒色的深色悬浮态
   * @descEN The hover state of the warning color.
   */
  colorWarningHover: string; // 5

  /**
   * @nameZH 警戒色
   * @nameEN Warning color
   * @desc 最常用的警戒色，例如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该颜色
   * @descEN The most commonly used warning color, used for warning components such as Notification, Alert, or input components.
   */
  colorWarning: string; // 6

  /**
   * @nameZH 警戒色的深色激活态
   * @nameEN Warning active color
   * @desc 警戒色的深色激活态
   * @descEN The active state of the warning color.
   */
  colorWarningActive: string; // 7

  /**
   * @nameZH 警戒色的文本悬浮态
   * @nameEN Warning text hover state
   * @desc 警戒色的文本悬浮态
   * @descEN The hover state of the text in the warning color.
   */
  colorWarningTextHover: string; // 8

  /**
   * @nameZH 警戒色的文本默认态
   * @nameEN Warning text default state
   * @desc 警戒色的文本默认态
   * @descEN The default state of the text in the warning color.
   */
  colorWarningText: string; // 9

  /**
   * @nameZH 警戒色的文本激活态
   * @nameEN Warning text active state
   * @desc 警戒色的文本激活态
   * @descEN The active state of the text in the warning color.
   */
  colorWarningTextActive: string; // 10
}

interface ColorInfoMapToken {
  /**
   * @nameKR 정보 색상의 밝은 배경 색상
   * @desc 정보 색상의 밝은 배경 색상입니다.
   */
  colorInfoBg: string; // 1

  /**
   * @nameZH 信息色的浅色背景色悬浮态
   * @nameEN Hover state of light background color of information color
   * @desc 信息色的浅色背景色悬浮态。
   * @descEN Hover state of light background color of information color.
   */
  colorInfoBgHover: string; // 2

  /**
   * @nameKR 정보 색상의 테두리 색상
   * @desc 정보 색상의 테두리 색상입니다.
   */
  colorInfoBorder: string; // 3

  /**
   * @nameZH 信息色的描边色悬浮态
   * @nameEN Hover state of border color of information color
   * @desc 信息色的描边色悬浮态。
   * @descEN Hover state of border color of information color.
   */
  colorInfoBorderHover: string; // 4

  /**
   * @nameZH 信息色的深色悬浮态
   * @nameEN Hover state of dark color of information color
   * @desc 信息色的深色悬浮态。
   * @descEN Hover state of dark color of information color.
   */
  colorInfoHover: string; // 5

  /**
   * @nameZH 信息色
   * @nameEN Information color
   * @desc 信息色。
   * @descEN Information color.
   */
  colorInfo: string; // 6

  /**
   * @nameZH 信息色的深色激活态
   * @nameEN Active state of dark color of information color
   * @desc 信息色的深色激活态。
   * @descEN Active state of dark color of information color.
   */
  colorInfoActive: string; // 7

  /**
   * @nameZH 信息色的文本悬浮态
   * @nameEN Hover state of text color of information color
   * @desc 信息色的文本悬浮态。
   * @descEN Hover state of text color of information color.
   */
  colorInfoTextHover: string; // 8

  /**
   * @nameZH 信息色的文本默认态
   * @nameEN Default state of text color of information color
   * @desc 信息色的文本默认态。
   * @descEN Default state of text color of information color.
   */
  colorInfoText: string; // 9

  /**
   * @nameZH 信息色的文本激活态
   * @nameEN Active state of text color of information color
   * @desc 信息色的文本激活态。
   * @descEN Active state of text color of information color.
   */
  colorInfoTextActive: string; // 10
}

interface ColorErrorMapToken {
  /**
   * @nameKR 오류 배경색
   * @desc 오류 상태의 배경색 입니다.
   */
  colorErrorBg: string; // 1

  /**
   * @nameZH 错误色的浅色背景色悬浮态
   * @nameEN Error background color hover state
   * @desc 错误色的浅色背景色悬浮态
   * @descEN The hover state background color of the error state.
   */
  colorErrorBgHover: string; // 2

  /**
   * @nameZH 错误色的浅色填充背景色悬浮态
   * @nameEN Wrong color fill background color suspension state
   * @desc 错误色的浅色填充背景色悬浮态，目前只用在危险填充按钮的 hover 效果。
   * @descEN The wrong color fills the background color of the suspension state, which is currently only used in the hover effect of the dangerous filled button.
   */
  colorErrorBgFilledHover: string; // 2.5

  /**
   * @nameZH 错误色的浅色背景色激活态
   * @nameEN Error background color active state
   * @desc 错误色的浅色背景色激活态
   * @descEN The active state background color of the error state.
   */
  colorErrorBgActive: string; // 3

  /**
   * @nameKR 오류 테두리 색상
   * @desc 오류 상태의 테두리 색입니다
   */
  colorErrorBorder: string; // 3

  /**
   * @nameZH 错误色的描边色悬浮态
   * @nameEN Error border color hover state
   * @desc 错误色的描边色悬浮态
   * @descEN The hover state border color of the error state.
   */
  colorErrorBorderHover: string; // 4

  /**
   * @nameKR 오류의 Hover 색상
   * @desc 오류 색상의 Hover 상태입니다.
   */
  colorErrorHover: string; // 5

  /**
   * @nameZH 错误色
   * @nameEN Error color
   * @desc 错误色
   * @descEN The color of the error state.
   */
  colorError: string; // 6

  /**
   * @nameZH 错误色的深色激活态
   * @nameEN Error active color
   * @desc 错误色的深色激活态
   * @descEN The active state of the error color.
   */
  colorErrorActive: string; // 7

  /**
   * @nameZH 错误色的文本悬浮态
   * @nameEN Error text hover state
   * @desc 错误色的文本悬浮态
   * @descEN The hover state of the text in the error color.
   */
  colorErrorTextHover: string; // 8

  /**
   * @nameZH 错误色的文本默认态
   * @nameEN Error text default state
   * @desc 错误色的文本默认态
   * @descEN The default state of the text in the error color.
   */
  colorErrorText: string; // 9

  /**
   * @nameZH 错误色的文本激活态
   * @nameEN Error text active state
   * @desc 错误色的文本激活态
   * @descEN The active state of the text in the error color.
   */
  colorErrorTextActive: string; // 10
}

export interface ColorLinkMapToken {
  /**
   * @nameZH 超链接颜色
   * @nameEN Hyperlink color
   * @desc 控制超链接的颜色。
   * @descEN Control the color of hyperlink.
   */
  colorLink: string;
  /**
   * @nameZH 超链接悬浮颜色
   * @nameEN Hyperlink hover color
   * @desc 控制超链接悬浮时的颜色。
   * @descEN Control the color of hyperlink when hovering.
   */
  colorLinkHover: string;
  /**
   * @nameZH 超链接激活颜色
   * @nameEN Hyperlink active color
   * @desc 控制超链接被点击时的颜色。
   * @descEN Control the color of hyperlink when clicked.
   */
  colorLinkActive: string;
}

export interface ColorMapToken
  extends ColorNeutralMapToken,
    ColorPrimaryMapToken,
    ColorSuccessMapToken,
    ColorWarningMapToken,
    ColorErrorMapToken,
    ColorInfoMapToken,
    ColorLinkMapToken {
  /**
   * @nameZH 纯白色
   * @desc 不随主题变化的纯白色
   * @descEN Pure white color don't changed by theme
   * @default #FFFFFF
   */
  colorWhite: string;

  /**
   * @nameZH 浮层的背景蒙层颜色
   * @nameEN Background color of the mask
   * @desc 浮层的背景蒙层颜色，用于遮罩浮层下面的内容，Modal、Drawer 等组件的蒙层使用的是该 token
   * @descEN The background color of the mask, used to cover the content below the mask, Modal, Drawer and other components use this token
   */
  colorBgMask: string;

  /**
   * @nameZH 纯黑色
   * @desc 不随主题变化的纯黑色
   * @default #0000
   */
  // colorBlack: string;
}
