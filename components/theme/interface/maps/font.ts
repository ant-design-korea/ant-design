export interface FontMapToken {
  // Font Size
  /**
   * @desc 작은 글꼴 크기
   */
  fontSizeSM: number;
  /**
   * @desc 标准字体大小
   * @descEN Standard font size
   */
  fontSize: number;
  /**
   * @desc 대형 글꼴 크기
   */
  fontSizeLG: number;
  /**
   * @desc 超大号字体大小
   * @descEN Super large font size
   */
  fontSizeXL: number;

  /**
   * @nameZH 一级标题字号
   * @nameEN Font size of heading level 1
   * @desc H1 标签所使用的字号
   * @descEN Font size of h1 tag.
   * @default 38
   */
  fontSizeHeading1: number;
  /**
   * @nameZH 二级标题字号
   * @nameEN Font size of heading level 2
   * @desc h2 标签所使用的字号
   * @descEN Font size of h2 tag.
   * @default 30
   */
  fontSizeHeading2: number;
  /**
   * @nameZH 三级标题字号
   * @nameEN Font size of heading level 3
   * @desc h3 标签使用的字号
   * @descEN Font size of h3 tag.
   * @default 24
   */
  fontSizeHeading3: number;
  /**
   * @nameZH 四级标题字号
   * @nameEN Font size of heading level 4
   * @desc h4 标签使用的字号
   * @descEN Font size of h4 tag.
   * @default 20
   */
  fontSizeHeading4: number;
  /**
   * @nameZH 五级标题字号
   * @nameEN Font size of heading level 5
   * @desc h5 标签使用的字号
   * @descEN Font size of h5 tag.
   * @default 16
   */
  fontSizeHeading5: number;

  // LineHeight
  /**
   * @desc 텍스트의 선 높이
   */
  lineHeight: number;
  /**
   * @desc 大型文本行高
   * @descEN Line height of large text.
   */
  lineHeightLG: number;
  /**
   * @desc 小型文本行高
   * @descEN Line height of small text.
   */
  lineHeightSM: number;

  // TextHeight
  /**
   * Round of fontSize * lineHeight
   * @internal
   */
  fontHeight: number;
  /**
   * Round of fontSizeSM * lineHeightSM
   * @internal
   */
  fontHeightSM: number;
  /**
   * Round of fontSizeLG * lineHeightLG
   * @internal
   */
  fontHeightLG: number;

  /**
   * @nameZH 一级标题行高
   * @nameEN Line height of heading level 1
   * @desc H1 标签所使用的行高
   * @descEN Line height of h1 tag.
   * @default 1.4
   */
  lineHeightHeading1: number;
  /**
   * @nameZH 二级标题行高
   * @nameEN Line height of heading level 2
   * @desc h2 标签所使用的行高
   * @descEN Line height of h2 tag.
   * @default 1.35
   */
  lineHeightHeading2: number;
  /**
   * @nameZH 三级标题行高
   * @nameEN Line height of heading level 3
   * @desc h3 标签所使用的行高
   * @descEN Line height of h3 tag.
   * @default 1.3
   */
  lineHeightHeading3: number;
  /**
   * @nameZH 四级标题行高
   * @nameEN Line height of heading level 4
   * @desc h4 标签所使用的行高
   * @descEN Line height of h4 tag.
   * @default 1.25
   */
  lineHeightHeading4: number;
  /**
   * @nameZH 五级标题行高
   * @nameEN Line height of heading level 5
   * @desc h5 标签所使用的行高
   * @descEN Line height of h5 tag.
   * @default 1.2
   */
  lineHeightHeading5: number;
}
