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
   * @nameKR XS 테두리 반경
   * @desc Segmented, Arrow 및 테두리 반경이 작은 다른 컴포넌트와 같이 테두리 반경이 작은 일부 컴포넌트에 사용되는 XS 크기 테두리 반경입니다.
   * @default 2
   */
  borderRadiusXS: number;
  /**
   * @nameKR SM 테두리 반경
   * @desc Button, Input, Select 및 작은 크기의 다른 입력 컴포넌트와 같이 작은 크기의 컴포넌트에 사용되는 SM 크기 테두리 반경입니다.
   * @default 4
   */
  borderRadiusSM: number;
  /**
   * @nameKR LG 테두리 반경
   * @desc Card, Modal 및 다른 컴포넌트와 같이 테두리 반경이 큰 일부 컴포넌트에 사용되는 LG 크기 테두리 반경입니다.
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
