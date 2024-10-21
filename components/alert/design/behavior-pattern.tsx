import React from 'react';

import BehaviorMap from '../../../.dumi/theme/common/BehaviorMap';

const BehaviorPattern: React.FC = () => (
  <BehaviorMap
    data={{
      id: '200000004',
      label: '페이지/모듈 내에서 주의해야 할 알림을 이해하다',
      children: [
        {
          id: '500000061',
          label: '알림 정보를 이해하다',
          targetType: 'mvp',
          children: [
            {
              id: '707000085',
              label: '알림 내용을 이해하다',
              link: 'alert-index-tab-design-demo-content',
            },
            {
              id: '707000086',
              label: '알림 유형을 이해하다',
              link: 'alert-index-tab-design-demo-type',
            },
          ],
        },
        {
          id: '200000005',
          label: '알림에 대한 작업 수행',
          targetType: 'extension',
          link: 'alert-index-tab-design-demo-action',
        },
      ],
    }}
  />
);

export default BehaviorPattern;
