import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="좋아요, 모든 작업이 완료되었습니다!"
    extra={<Button type="primary">다음</Button>}
  />
);

export default App;
