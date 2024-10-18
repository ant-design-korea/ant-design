import React from 'react';
import { Tooltip } from 'antd';

const App: React.FC = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip은 숨겨지면 제거됩니다.</span>
  </Tooltip>
);

export default App;
