import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    title="작업이 완료되었습니다"
    extra={
      <Button type="primary" key="console">
        콘솔로 이동
      </Button>
    }
  />
);

export default App;
