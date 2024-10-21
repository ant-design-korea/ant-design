import type { ColorPalettes, LegacyColorPalettes } from '../presetColors';
import type { SeedToken } from '../seeds';
import type { ColorMapToken } from './colors';
import type { FontMapToken } from './font';
import type { HeightMapToken, SizeMapToken } from './size';
import type { StyleMapToken } from './style';

export * from './colors';
export * from './font';
export * from './size';
export * from './style';

export interface CommonMapToken extends StyleMapToken {
  // Motion
  /**
   * @desc 动效播放速度，快速。用于小型元素动画交互
   * @descEN Motion speed, fast speed. Used for small element animation interaction.
   */
  motionDurationFast: string;
  /**
   * @desc 애니메이션 재생 속도는 중간 속도로, 중간 크기의 요소 애니메이션 상호작용에 사용됩니다.
   * @descEN Motion speed, medium speed. Used for medium element animation interaction.
   */
  motionDurationMid: string;
  /**
   * @desc 애니메이션 재생 속도는 느린 속도로, 대형 요소(예: 패널)의 애니메이션 상호작용에 사용됩니다.
   * @descEN Motion speed, slow speed. Used for large element animation interaction.
   */
  motionDurationSlow: string;
}

// ======================================================================
// ==                         Map Token                         ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface MapToken
  extends SeedToken,
    ColorPalettes,
    LegacyColorPalettes,
    ColorMapToken,
    SizeMapToken,
    HeightMapToken,
    StyleMapToken,
    FontMapToken,
    CommonMapToken {}
