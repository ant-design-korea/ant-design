import type { CSSProperties } from 'react';

import { AggregationColor } from '../../color-picker/color';
import { isBright } from '../../color-picker/components/ColorPresets';
import type { FullToken, GenStyleFn, GetDefaultToken } from '../../theme/internal';
import { getLineHeight, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 글꼴 굵기
   * @descEN Font weight of text
   */
  fontWeight: CSSProperties['fontWeight'];
  /**
   * @desc 기본 버튼의 그림자
   * @descEN Shadow of default button
   */
  defaultShadow: string;
  /**
   * @desc primary 버튼의 그림자
   * @descEN Shadow of primary button
   */
  primaryShadow: string;
  /**
   * @desc danger 버튼의 그림자
   * @descEN Shadow of danger button
   */
  dangerShadow: string;
  /**
   * @desc primary 버튼의 글자 색상
   * @descEN Text color of primary button
   */
  primaryColor: string;
  /**
   * @desc 기본 버튼의 글자 색상
   * @descEN Text color of default button
   */
  defaultColor: string;
  /**
   * @desc 기본 버튼의 배경 색상
   * @descEN Background color of default button
   */
  defaultBg: string;
  /**
   * @desc 기본 버튼의 테두리 색상
   * @descEN Border color of default button
   */
  defaultBorderColor: string;
  /**
   * @desc danger 버튼의 글씨 색상
   * @descEN Text color of danger button
   */
  dangerColor: string;
  /**
   * @desc 기본 버튼에 hover 했을 때 배경 색상
   * @descEN Background color of default button when hover
   */
  defaultHoverBg: string;
  /**
   * @desc 기본 버튼에 hover 했을 때 글자 색상
   * @descEN Text color of default button when hover
   */
  defaultHoverColor: string;
  /**
   * @desc 기본 버튼에 hover 했을 때 테두리 색상
   * @descEN Border color of default button
   */
  defaultHoverBorderColor: string;
  /**
   * @desc 활성 상태일 때 기본 버튼의 배경 색상
   * @descEN Background color of default button when active
   */
  defaultActiveBg: string;
  /**
   * @desc 활성 상태일 때 기본 버튼의 글자 색상
   * @descEN Text color of default button when active
   */
  defaultActiveColor: string;
  /**
   * @desc 활성 상태일 때 기본 버튼의 테두리 색상
   * @descEN Border color of default button when active
   */
  defaultActiveBorderColor: string;
  /**
   * @desc 비활성화 상태 버튼의 테두리 색상
   * @descEN Border color of disabled button
   */
  borderColorDisabled: string;
  /**
   * @desc 기본적인 ghost 버튼의 글자 색상
   * @descEN Text color of default ghost button
   */
  defaultGhostColor: string;
  /**
   * @desc 기본적인 ghost 버튼의 배경 색상
   * @descEN Background color of ghost button
   */
  ghostBg: string;
  /**
   * @desc 기본적인 ghost 버튼의 테두리 색상
   * @descEN Border color of default ghost button
   */
  defaultGhostBorderColor: string;
  /**
   * @desc solid 버튼의 기본 글자 색상
   * @descEN Default text color for solid buttons
   */
  solidTextColor: string;
  /** textTextColor
   * @desc 글씨 버튼의 기본 글씨 색상
   * @descEN Default text color for text buttons
   */
  textTextColor: string;
  /** textTextHoverColor
   * @desc 글씨 버튼에 hover했을 때 기본 텍스트 색상
   * @descEN Default text color for text buttons on hover
   */
  textTextHoverColor: string;
  /** textTextActiveColor
   * @desc 활성 상태의 텍스트 버튼 기본 텍스트 색상
   * @descEN 	Default text color for text buttons on active
   */
  textTextActiveColor: string;
  /** paddingInline
   * @desc 버튼의 수평 패딩
   * @descEN Horizontal padding of button
   */
  paddingInline: CSSProperties['paddingInline'];
  /** paddingInlineLG
   * @desc large 버튼의 수평 패딩
   * @descEN 	Horizontal padding of large button
   */
  paddingInlineLG: CSSProperties['paddingInline'];
  /** paddingInlineSM
   * @desc small 버튼의 수평 패딩
   * @descEN 	Horizontal padding of small button
   */
  paddingInlineSM: CSSProperties['paddingInline'];
  /** paddingBlock
   * @desc 버튼의 수직 패딩
   * @descEN Vertical padding of button
   */
  paddingBlock: CSSProperties['paddingBlock'];
  /** paddingBlockLG
   * @desc large 버튼의 수직 패딩
   * @descEN Vertical padding of large button
   */
  paddingBlockLG: CSSProperties['paddingBlock'];
  /** paddingBlockSM
   * @desc small 버튼의 수직 패딩
   * @descEN 	Vertical padding of small button
   */
  paddingBlockSM: CSSProperties['paddingBlock'];
  /**
   * @desc 아이콘만 포함된 버튼의 아이콘 크기
   * @descEN 	Icon size of button which only contains icon
   */
  onlyIconSize: number;
  /**
   * @desc 아이콘만 포함된 large 버튼의 아이콘 크기
   * @descEN Icon size of large button which only contains icon
   */
  onlyIconSizeLG: number;
  /**
   * @desc 아이콘만 포함된 small 버튼의 아이콘 크기
   * @descEN Icon size of small button which only contains icon
   */
  onlyIconSizeSM: number;
  /**
   * @desc 버튼 그룹의 테두리 색상
   * @descEN Border color of button group
   */
  groupBorderColor: string;
  /**
   * @desc 링크 버튼에 hover 했을 때 배경 색상
   * @descEN Background color of link button when hover
   */
  linkHoverBg: string;
  /**
   * @desc 글씨 버튼에 hover 했을 때 배경 색상
   * @descEN Background color of text button when hover
   */
  textHoverBg: string;
  /**
   * @desc 버튼 내용의 글꼴 크기
   * @descEN Font size of button content
   */
  contentFontSize: number;
  /**
   * @desc large 버튼 내용의 글꼴 크기
   * @descEN Font size of large button content
   */
  contentFontSizeLG: number;
  /**
   * @desc small 버튼 내용의 글꼴 크기
   * @descEN Font size of small button content
   */
  contentFontSizeSM: number;
  /**
   * @desc 버튼 내용의 줄 높이
   * @descEN Line height of button content
   */
  contentLineHeight: number;
  /**
   * @desc large 버튼 내용의 줄 높이
   * @descEN Line height of large button content
   */
  contentLineHeightLG: number;
  /**
   * @desc small 버튼 내용의 줄 높이
   * @descEN Line height of small button content
   */
  contentLineHeightSM: number;
}

export interface ButtonToken extends FullToken<'Button'> {
  /**
   * @desc 按钮横向内边距
   * @descEN Horizontal padding of button
   */
  buttonPaddingHorizontal: CSSProperties['paddingInline'];
  /**
   * @desc 按钮纵向内边距
   * @descEN Vertical padding of button
   */
  buttonPaddingVertical: CSSProperties['paddingBlock'];
  /**
   * @desc 按钮纵向内边距
   * @descEN Icon size of button which only contains icon
   */
  buttonIconOnlyFontSize: number;
}

export const prepareToken: (token: Parameters<GenStyleFn<'Button'>>[0]) => ButtonToken = (
  token,
) => {
  const { paddingInline, onlyIconSize, paddingBlock } = token;

  const buttonToken = mergeToken<ButtonToken>(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: paddingBlock,
    buttonIconOnlyFontSize: onlyIconSize,
  });

  return buttonToken;
};

export const prepareComponentToken: GetDefaultToken<'Button'> = (token) => {
  const contentFontSize = token.contentFontSize ?? token.fontSize;
  const contentFontSizeSM = token.contentFontSizeSM ?? token.fontSize;
  const contentFontSizeLG = token.contentFontSizeLG ?? token.fontSizeLG;
  const contentLineHeight = token.contentLineHeight ?? getLineHeight(contentFontSize);
  const contentLineHeightSM = token.contentLineHeightSM ?? getLineHeight(contentFontSizeSM);
  const contentLineHeightLG = token.contentLineHeightLG ?? getLineHeight(contentFontSizeLG);
  const solidTextColor = isBright(new AggregationColor(token.colorBgSolid), '#fff')
    ? '#000'
    : '#fff';

  return {
    fontWeight: 400,
    defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
    primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
    dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
    primaryColor: token.colorTextLightSolid,
    dangerColor: token.colorTextLightSolid,
    borderColorDisabled: token.colorBorder,
    defaultGhostColor: token.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: token.colorBgContainer,
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineSM: 8 - token.lineWidth,
    onlyIconSize: token.fontSizeLG,
    onlyIconSizeSM: token.fontSizeLG - 2,
    onlyIconSizeLG: token.fontSizeLG + 2,
    groupBorderColor: token.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textTextColor: token.colorText,
    textTextHoverColor: token.colorText,
    textTextActiveColor: token.colorText,
    textHoverBg: token.colorBgTextHover,
    defaultColor: token.colorText,
    defaultBg: token.colorBgContainer,
    defaultBorderColor: token.colorBorder,
    defaultBorderColorDisabled: token.colorBorder,
    defaultHoverBg: token.colorBgContainer,
    defaultHoverColor: token.colorPrimaryHover,
    defaultHoverBorderColor: token.colorPrimaryHover,
    defaultActiveBg: token.colorBgContainer,
    defaultActiveColor: token.colorPrimaryActive,
    defaultActiveBorderColor: token.colorPrimaryActive,
    solidTextColor,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max(
      (token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth,
      0,
    ),
    paddingBlockSM: Math.max(
      (token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth,
      0,
    ),
    paddingBlockLG: Math.max(
      (token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth,
      0,
    ),
  };
};
