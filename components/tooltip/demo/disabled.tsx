import React, { useState } from 'react';
import { Button, Space, Tooltip } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Space>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>
      <Tooltip title={disabled ? '' : 'prompt text'}>
        <span>Tooltip은 마우스를 올리면 표시됩니다.</span>
      </Tooltip>
    </Space>
  );
};

export default App;
