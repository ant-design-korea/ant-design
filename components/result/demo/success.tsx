import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="success"
    title="클라우드 서버 ECS 구매에 성공했습니다!"
    subTitle="주문 번호: 2017182818828182881 클라우드 서버 설정에는 1-5분이 소요됩니다. 잠시만 기다려 주세요."
    extra={[
      <Button type="primary" key="console">
        콘솔로 이동
      </Button>,
      <Button key="buy">다시 구매하기</Button>,
    ]}
  />
);

export default App;
