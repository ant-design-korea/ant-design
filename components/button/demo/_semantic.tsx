import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';

const locales = {
  cn: {
    icon: '图标元素',
  },
  en: {
    icon: 'Icon element',
  },
  ko: {
    icon: '아이콘 요소',
  },
};

const App: React.FC = () => {
  const locale = locales.ko;
  return (
    <SemanticPreview semantics={[{ name: 'icon', desc: locale.icon, version: '5.5.0' }]}>
      <Button type="primary" icon={<AntDesignOutlined />}>
        Ant Design
      </Button>
    </SemanticPreview>
  );
};

export default App;
