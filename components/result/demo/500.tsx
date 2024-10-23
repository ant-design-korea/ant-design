import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="죄송합니다. 알 수 없는 문제가 발생했습니다."
    extra={<Button type="primary">홈으로 돌아가기</Button>}
  />
);

export default App;
