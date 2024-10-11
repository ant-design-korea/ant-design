import type { PresetColorType } from './presetColors';

// ======================================================================
// ==                            Seed Token                            ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface SeedToken extends PresetColorType {
  //  ----------   Color   ---------- //

  /**
   * @nameZH 品牌主色
   * @nameEN Brand Color
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义
   * @descEN Brand color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
   */
  colorPrimary: string;

  /**
   * @nameKR 성공 컬러
   * @desc 작업 성공을 나타내는 토큰 시퀀스에 사용됩니다. Result, Progress 등과 같은 컴포넌트에서 이 그라데이션 변수를 사용합니다.
   */
  colorSuccess: string;

  /**
   * @nameKR 경고 색상
   * @desc 작업 경고를 나타내는 토큰 시퀀스입니다. Notification, Alert 등과 같은 경고 클래스 컴포넌트나 Input과 같은 입력 클래스 컴포넌트에서 이 그라데이션 변수를 사용합니다.
   */
  colorWarning: string;

  /**
   * @nameKR 에러 컬러
   * @desc 오류 버튼, 오류 결과 구성 요소 등 작업 실패의 시각적 요소를 나타내는 데 사용됩니다.
   */
  colorError: string;

  /**
   * @nameKR 정보 색상
   * @desc Alert, Tag, Progress 등과 같은 컴포넌트에서 사용하는 토큰 시퀀스의 작업 정보를 나타내는 데 사용됩니다. 해당 그룹의 그라데이션 변수가 사용됩니다.
   */
  colorInfo: string;

  /**
   * @nameZH 基础文本色
   * @nameEN Seed Text Color
   * @desc 用于派生文本色梯度的基础变量，v5 中我们添加了一层文本色的派生算法可以产出梯度明确的文本色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the text color gradient. In v5, we added a layer of text color derivation algorithm to produce gradient variables of text color gradient. But please do not use this Seed Token directly in the code!
   */
  colorTextBase: string;

  /**
   * @nameZH 基础背景色
   * @nameEN Seed Background Color
   * @desc 用于派生背景色梯度的基础变量，v5 中我们添加了一层背景色的派生算法可以产出梯度明确的背景色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the background color gradient. In v5, we added a layer of background color derivation algorithm to produce map token of background color. But PLEASE DO NOT USE this Seed Token directly in the code!
   */
  colorBgBase: string;

  /**
   * @nameZH 超链接颜色
   * @nameEN Hyperlink color
   * @desc 控制超链接的颜色。
   * @descEN Control the color of hyperlink.
   */
  colorLink: string;

  //  ----------   Font   ---------- //

  /**
   * @nameKR 기본 텍스트의 글꼴
   * @desc Ant Design의 글꼴 패밀리는 시스템의 기본 인터페이스 글꼴을 우선적으로 사용하며, 다양한 플랫폼과 브라우저에서 글꼴의 가독성을 유지하기 위해 화면 표시에 적합한 대체 글꼴 라이브러리를 제공합니다. 이는 친숙하고 안정적이며 전문적인 특성을 반영합니다.
   */
  fontFamily: string;

  /**
   * @nameZH 代码字体
   * @nameEN Font family for code text
   * @desc 代码字体，用于 Typography 内的 code、pre 和 kbd 类型的元素
   * @descEN Code font, used for code, pre and kbd elements in Typography
   */
  fontFamilyCode: string;

  /**
   * @nameKR 기본 폰트 크기
   * @desc 디자인 시스템에서 가장 널리 사용되는 글꼴 크기로, 텍스트 그라데이션도 이 글꼴 크기를 기반으로 파생됩니다.
   * @default 14
   */
  fontSize: number;

  //  ----------   Line   ---------- //

  /**
   * @nameKR 기본 선 너비
   * @desc 컴포넌트의 테두리, 구분선 등의 두너를 제어하는 데 사용됩니다.
   */
  lineWidth: number;

  /**
   * @nameKR 라인 스타일
   * @desc 컴포넌트의 테두리, 구분선 등의 스타일을 제어하는 데 사용되며, 기본값은 실선입니다.
   */
  lineType: string;

  //  ----------   BorderRadius   ---------- //

  /**
   * @nameZH 基础圆角
   * @nameEN Base Border Radius
   * @descEN Border radius of base components
   * @desc 基础组件的圆角大小，例如按钮、输入框、卡片等
   */
  borderRadius: number;

  //  ----------   Size   ---------- //

  /**
   * @nameZH 尺寸变化单位
   * @nameEN Size Change Unit
   * @desc 用于控制组件尺寸的变化单位，在 Ant Design 中我们的基础单位为 4 ，便于更加细致地控制尺寸梯度
   * @descEN The unit of size change, in Ant Design, our base unit is 4, which is more fine-grained control of the size step
   * @default 4
   */
  sizeUnit: number;

  /**
   * @nameZH 尺寸步长
   * @nameEN Size Base Step
   * @desc 用于控制组件尺寸的基础步长，尺寸步长结合尺寸变化单位，就可以派生各种尺寸梯度。通过调整步长即可得到不同的布局模式，例如 V5 紧凑模式下的尺寸步长为 2
   * @descEN The base step of size change, the size step combined with the size change unit, can derive various size steps. By adjusting the step, you can get different layout modes, such as the size step of the compact mode of V5 is 2
   * @default 4
   */
  sizeStep: number;

  /**
   * @nameZH 组件箭头尺寸
   * @desc 组件箭头的尺寸
   * @descEN The size of the component arrow
   */
  sizePopupArrow: number;

  /**
   * @nameZH 基础高度
   * @nameEN Base Control Height
   * @desc Ant Design 中按钮和输入框等基础控件的高度
   * @descEN The height of the basic controls such as buttons and input boxes in Ant Design
   * @default 32
   */
  controlHeight: number;

  //  ----------   zIndex   ---------- //

  /**
   * @nameZH 基础 zIndex
   * @nameEN Base zIndex
   * @desc 所有组件的基础 Z 轴值，用于一些悬浮类的组件的可以基于该值 Z 轴控制层级，例如 BackTop、 Affix 等
   * @descEN The base Z axis value of all components, which can be used to control the level of some floating components based on the Z axis value, such as BackTop, Affix, etc.
   *
   * @default 0
   */
  zIndexBase: number;

  /**
   * @nameZH 浮层基础 zIndex
   * @nameEN popup base zIndex
   * @desc 浮层类组件的基础 Z 轴值，用于一些悬浮类的组件的可以基于该值 Z 轴控制层级，例如 FloatButton、 Affix、Modal 等
   * @descEN Base zIndex of component like FloatButton, Affix which can be cover by large popup
   * @default 1000
   */
  zIndexPopupBase: number;

  //  ----------   Opacity   ---------- //

  /**
   * @nameZH 图片不透明度
   * @nameEN Define default Image opacity. Useful when in dark-like theme
   * @desc 控制图片不透明度
   * @descEN Control image opacity
   */
  opacityImage: number;

  //  ----------   motion   ---------- //
  // TODO: 缺一个懂 motion 的人来收敛 Motion 相关的 Token

  /**
   * @nameZH 动画时长变化单位
   * @nameEN Animation Duration Unit
   * @desc 用于控制动画时长的变化单位
   * @descEN The unit of animation duration change
   * @default 100ms
   */
  motionUnit: number;

  /**
   * @nameZH 动画基础时长。
   * @nameEN Animation Base Duration.
   */
  motionBase: number;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutCirc: string;

  /**
   * @desc 기본 동작 곡선입니다.
   */
  motionEaseInOutCirc: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInOut: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutBack: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInBack: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInQuint: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutQuint: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOut: string;

  //  ----------   Style   ---------- //

  /**
   * @nameZH 线框风格
   * @nameEN Wireframe Style
   * @desc 用于将组件的视觉效果变为线框化，如果需要使用 V4 的效果，需要开启配置项
   * @descEN Used to change the visual effect of the component to wireframe, if you need to use the V4 effect, you need to enable the configuration item
   * @default false
   */
  wireframe: boolean;

  /**
   * @nameZH 动画风格
   * @nameEN Motion Style
   * @desc 用于配置动画效果，为 `false` 时则关闭动画
   * @descEN Used to configure the motion effect, when it is `false`, the motion is turned off
   * @default true
   */
  motion: boolean;
}
