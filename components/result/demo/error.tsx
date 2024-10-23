import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const App: React.FC = () => (
  <Result
    status="error"
    title="제출 실패"
    subTitle="다음 정보를 확인하고 수정한 후 다시 제출해 주세요."
    extra={[
      <Button type="primary" key="console">
        콘솔로 이동
      </Button>,
      <Button key="buy">다시 구매하기</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          제출한 내용에 다음 오류가 있습니다:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> 계정이 동결되었습니다.{' '}
        <a>즉시 해제하기 &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> 계정이 아직 신청 자격이
        없습니다. <a>신청 자격 얻기 &gt;</a>
      </Paragraph>
    </div>
  </Result>
);

export default App;
