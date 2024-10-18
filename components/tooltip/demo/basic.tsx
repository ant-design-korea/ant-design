import React from 'react';
import { Tooltip } from 'antd';

const App: React.FC = () => (
  <Tooltip title="prompt text">
    <span>Tooltip은 마우스를 올리면 표시됩니다.</span>
  </Tooltip>
);

export default App;
