import type { CSSProperties } from 'react';
import type { FullToken, GetDefaultToken } from 'antd/es/theme/internal';

export interface MultipleSelectorToken {
  /**
   * @desc 다중 선택 태그의 배경색
   * @descEN Background color of multiple tag
   */
  multipleItemBg: string;
  /**
   * @desc 다중 선택 태그의 테두리 색상
   * @descEN Border color of multiple tag
   */
  multipleItemBorderColor: string;
  /**
   * @desc 다중 선택 태그의 높이
   * @descEN Height of multiple tag
   */
  multipleItemHeight: number;
  /**
   * @desc 작은 크기의 다중 선택 태그의 높이
   * @descEN Height of multiple tag with small size
   */
  multipleItemHeightSM: number;
  /**
   * @desc 큰 크기의 다중 선택 태그의 높이
   * @descEN Height of multiple tag with large size
   */
  multipleItemHeightLG: number;
  /**
   * @desc 비활성화된 경우 다중 선택기의 배경색
   * @descEN Background color of multiple selector when disabled
   */
  multipleSelectorBgDisabled: string;
  /**
   * @desc 비활성화된 경우 다중 선택 태그의 텍스트 색상
   * @descEN Text color of multiple tag when disabled
   */
  multipleItemColorDisabled: string;
  /**
   * @desc 비활성화된 경우 다중 선택 태그의 테두리 색상
   * @descEN Border color of multiple tag when disabled
   */
  multipleItemBorderColorDisabled: string;
  /**
   * @internal
   */
}

export interface ComponentToken extends MultipleSelectorToken {
  /**
   * @desc 드롭다운의 z-index
   * @descEN z-index of dropdown
   */
  zIndexPopup: number;
  /**
   * @desc 옵션이 선택된 경우 텍스트 색상
   * @descEN Text color when option is selected
   */
  optionSelectedColor: string;
  /**
   * @desc 옵션이 선택된 경우 글꼴 두께
   * @descEN Font weight when option is selected
   */
  optionSelectedFontWeight: CSSProperties['fontWeight'];
  /**
   * @desc 옵션이 선택된 경우 배경색
   * @descEN Background color when option is selected
   */
  optionSelectedBg: string;
  /**
   * @desc   옵션이 활성화된 경우 배경색
   * @descEN Background color when option is active
   */
  optionActiveBg: string;
  /**
   * @desc 옵션의 패딩
   * @descEN Padding of option
   */
  optionPadding: CSSProperties['padding'];
  /**
   * @desc 옵션의 글꼴 크기
   * @descEN Font size of option
   */
  optionFontSize: number;
  /**
   * @desc 옵션의 줄 높이
   * @descEN Line height of option
   */
  optionLineHeight: CSSProperties['lineHeight'];
  /**
   * @desc 옵션의 높이
   * @descEN Height of option
   */
  optionHeight: number;
  /**
   * @desc 선택기의 배경색
   * @descEN Background color of selector
   */
  selectorBg: string;
  /**
   * @desc 지우기 버튼의 배경색
   * @descEN Background color of clear button
   */
  clearBg: string;
  /**
   * @desc 큰 크기의 단일 선택된 항목의 높이
   * @descEN Height of single selected item with large size
   */
  singleItemHeightLG: number;
  /**
   * @desc 화살표의 인라인 끝 패딩
   * @descEN Inline end padding of arrow
   */
  showArrowPaddingInlineEnd: number;
  /**
   * @desc 悬浮态边框色
   * @descEN Hover border color
   */
  hoverBorderColor: string;
  /**
   * @desc 激活态边框色
   * @descEN Active border color
   */
  activeBorderColor: string;
  /**
   * @desc 激活态 outline 颜色
   * @descEN Active outline color
   */
  activeOutlineColor: string;
}

export interface SelectorToken {
  inputPaddingHorizontalBase: number | string;
  multipleSelectItemHeight: number;
  selectHeight: number;
}

export interface SelectToken extends FullToken<'Select'>, SelectorToken {
  rootPrefixCls: string;

  /** @private Used for internal calculation */
  INTERNAL_FIXED_ITEM_MARGIN: number;
}

export const prepareComponentToken: GetDefaultToken<'Select'> = (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,

    controlHeight,
    controlHeightSM,
    controlHeightLG,

    paddingXXS,

    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,

    colorBgContainerDisabled,
    colorTextDisabled,

    colorPrimaryHover,
    colorPrimary,
    controlOutline,
  } = token;

  // Item height default use `controlHeight - 2 * paddingXXS`,
  // but some case `paddingXXS=0`.
  // Let's fallback it.
  const dblPaddingXXS = paddingXXS * 2;
  const dblLineWidth = lineWidth * 2;

  const multipleItemHeight = Math.min(controlHeight - dblPaddingXXS, controlHeight - dblLineWidth);
  const multipleItemHeightSM = Math.min(
    controlHeightSM - dblPaddingXXS,
    controlHeightSM - dblLineWidth,
  );
  const multipleItemHeightLG = Math.min(
    controlHeightLG - dblPaddingXXS,
    controlHeightLG - dblLineWidth,
  );

  // FIXED_ITEM_MARGIN is a hardcode calculation since calc not support rounding
  const INTERNAL_FIXED_ITEM_MARGIN = Math.floor(paddingXXS / 2);

  return {
    INTERNAL_FIXED_ITEM_MARGIN,

    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: 'transparent',
    multipleItemHeight,
    multipleItemHeightSM,
    multipleItemHeightLG,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: 'transparent',
    showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25),
    hoverBorderColor: colorPrimaryHover,
    activeBorderColor: colorPrimary,
    activeOutlineColor: controlOutline,
  };
};
