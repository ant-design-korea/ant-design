import React from 'react';
import classNames from 'classnames';

import Palette from './Palette';

const colors = [
  {
    name: 'red',
    english: 'Dust Red',
    chinese: '황혼',
    description: '투지,열정',
  },
  {
    name: 'volcano',
    english: 'Volcano',
    chinese: '화산',
    description: '눈에 띄는, 강렬한',
  },
  {
    name: 'orange',
    english: 'Sunset Orange',
    chinese: '일몰',
    description: '따뜻함, 즐거움',
  },
  {
    name: 'gold',
    english: 'Calendula Gold',
    chinese: '마리골드',
    description: '활력, 긍정',
  },
  {
    name: 'yellow',
    english: 'Sunrise Yellow',
    chinese: '일출',
    description: '탄생, 햇빛',
  },
  {
    name: 'lime',
    english: 'Lime',
    chinese: '라임',
    description: '자연, 생명력',
  },
  {
    name: 'green',
    english: 'Polar Green',
    chinese: '오로라 그린',
    description: '건강, 혁신',
  },
  {
    name: 'cyan',
    english: 'Cyan',
    chinese: '청명',
    description: '희망, 강인함',
  },
  {
    name: 'blue',
    english: 'Daybreak Blue',
    chinese: '새벽',
    description: '포용, 기술, 포용',
  },
  {
    name: 'geekblue',
    english: 'Geek Blue',
    chinese: '깊은 바다',
    description: '탐구, 연구',
  },
  {
    name: 'purple',
    english: 'Golden Purple',
    chinese: '황금 보라',
    description: '우아함, 로맨틱함',
  },
  {
    name: 'magenta',
    english: 'Magenta',
    chinese: '프렌치 마젠타',
    description: '밝음, 감성',
  },
];

const ColorPalettes: React.FC<{ dark?: boolean }> = (props) => {
  const { dark } = props;
  return (
    <div className={classNames('color-palettes', { 'color-palettes-dark': dark })}>
      {colors.map((color) => (
        <Palette key={color.name} color={color} dark={dark} showTitle />
      ))}
    </div>
  );
};

export default ColorPalettes;
