import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="죄송합니다. 이 페이지에 접근할 수 있는 권한이 없습니다."
    extra={<Button type="primary">홈으로 돌아가기</Button>}
  />
);

export default App;
