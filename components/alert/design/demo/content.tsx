import React from 'react';
import { Alert, Flex } from 'antd';

const Demo = () => (
  <Flex gap="middle" vertical style={{ maxWidth: 600 }}>
    <Alert message="안녕하세요! 전문 버전을 이용해주셔서 감사합니다. 귀하의 필요에 따라 비즈니스 모듈을 추가할 수 있습니다." />
    <Alert
      message="도움말 정보"
      description="안녕하세요. 고객님의 좋은 신용도를 인정하여, 3개월간 제품 회원 자격을 무료로 드립니다. 회원 특권 및 다양한 이벤트에 대한 자세한 내용은 홈페이지 메인 화면의 회원 전용 공간에서 확인하실 수 있습니다."
    />
  </Flex>
);

export default Demo;
