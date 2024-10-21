export interface StyleMapToken {
  /**
   * @nameZH 线宽
   * @nameEN Line Width
   * @desc 描边类组件的默认线宽，如 Button、Input、Select 等输入类控件。
   * @descEN The default line width of the outline class components, such as Button, Input, Select, etc.
   * @default 1
   */
  lineWidthBold: number;

  /**
   * @nameZH XS号圆角
   * @nameEN XS Border Radius
   * @desc XS 크기의 모서리, 예를 들어 Segmented, Arrow 등의 내부 모서리를 가진 컴포넌트에서 사용하는 작은 모서리.
   * @descEN XS size border radius, used in some small border radius components, such as Segmented, Arrow and other components with small border radius.
   * @default 2
   */
  borderRadiusXS: number;
  /**
   * @nameZH SM号圆角
   * @nameEN SM Border Radius
   * @desc SM 크기의 모서리, 예를 들어 Button, Input, Select 등의 입력형 컨트롤이 small 사이즈일 때 사용하는 모서리.
   * @descEN SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size
   * @default 4
   */
  borderRadiusSM: number;
  /**
   * @nameZH LG号圆角
   * @nameEN LG Border Radius
   * @desc LG 크기의 모서리, 예를 들어 Card, Modal 등 일부 큰 모서리 스타일의 컴포넌트에 사용됩니다.
   * @descEN LG size border radius, used in some large border radius components, such as Card, Modal and other components.
   * @default 8
   */
  borderRadiusLG: number;
  /**
   * @nameZH 外部圆角
   * @nameEN Outer Border Radius
   * @default 4
   * @desc 外部圆角
   * @descEN Outer border radius
   */
  borderRadiusOuter: number;
}
