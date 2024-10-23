import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="warning"
    title="작업에 문제가 발생했습니다."
    extra={
      <Button type="primary" key="console">
        콘솔로 이동
      </Button>
    }
  />
);

export default App;
