import React from 'react';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    input: '输入框元素',
    prefix: '前缀的包裹元素',
    suffix: '后缀的包裹元素',
    count: '文字计数元素',
  },
  en: {
    input: 'input element',
    prefix: 'prefix element',
    suffix: 'suffix element',
    count: 'count element',
  },
  ko: {
    input: '입력 요소',
    prefix: '접두사 요소',
    suffix: '접미사 요소',
    count: '카운트 요소',
  },
};

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      semantics={[
        { name: 'input', desc: locale.input, version: '5.4.0' },
        { name: 'prefix', desc: locale.prefix, version: '5.4.0' },
        { name: 'suffix', desc: locale.suffix, version: '5.4.0' },
        { name: 'count', desc: locale.count, version: '5.4.0' },
      ]}
    >
      <Input
        showCount
        prefix={<UserOutlined />}
        suffix={<EditOutlined />}
        defaultValue="Hello, Ant Design"
      />
    </SemanticPreview>
  );
};

export default App;
