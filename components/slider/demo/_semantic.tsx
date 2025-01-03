import React from 'react';
import { Slider } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';

const locales = {
  cn: {
    track: '范围选择下，点和点之间单个选取条',
    tracks: '范围选择下，整个范围选取条',
    rail: '背景条元素',
    handle: '抓取点元素',
  },
  en: {
    track: 'The selection bar between points and points under the range selection',
    tracks: 'The entire range selection bar under the range selection',
    rail: 'Background rail element',
    handle: 'Grab handle element',
  },
  ko: {
    track: '범위 선택 아래 점과 점 사이의 선택 막대',
    tracks: '범위 선택 아래 범위 전체 선택 막대',
    rail: '배경 레일 요소',
    handle: '잡기 핸들 요소',
  },
};

const App: React.FC = () => {
  const locale = locales.ko;
  return (
    <SemanticPreview
      semantics={[
        { name: 'track', desc: locale.track, version: '5.10.0' },
        { name: 'tracks', desc: locale.tracks, version: '5.10.0' },
        { name: 'rail', desc: locale.rail, version: '5.10.0' },
        { name: 'handle', desc: locale.handle, version: '5.10.0' },
      ]}
    >
      <Slider range defaultValue={[20, 30, 50]} style={{ width: '100%' }} />
    </SemanticPreview>
  );
};

export default App;
