import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="죄송합니다. 방문하신 페이지를 찾을 수 없습니다."
    extra={<Button type="primary">홈으로 돌아가기</Button>}
  />
);

export default App;
