import React, { Suspense } from 'react';
import { ConfigProvider, theme } from 'antd';
import { createStyles, css } from 'antd-style';

import useDark from '../../hooks/useDark';
import useLocale from '../../hooks/useLocale';
import BannerRecommends from './components/BannerRecommends';
import Group from './components/Group';
import PreviewBanner from './components/PreviewBanner';

const ComponentsList = React.lazy(() => import('./components/ComponentsList'));
const DesignFramework = React.lazy(() => import('./components/DesignFramework'));
const Theme = React.lazy(() => import('./components/Theme'));

const useStyle = createStyles(() => ({
  image: css`
    position: absolute;
    inset-inline-start: 0;
    top: -50px;
    height: 160px;
  `,
}));

const locales = {
  cn: {
    assetsTitle: '组件丰富，选用自如',
    assetsDesc: '大量实用组件满足你的需求，灵活定制与拓展',
    designTitle: '设计语言与研发框架',
    designDesc: '配套生态，让你快速搭建网站应用',
  },
  en: {
    assetsTitle: 'Rich components',
    assetsDesc: 'Practical components to meet your needs, flexible customization and expansion',
    designTitle: 'Design and framework',
    designDesc: 'Supporting ecology, allowing you to quickly build website applications',
  },
  ko: {
    assetsTitle: '풍부한 컴포넌트',
    assetsDesc: '귀하의 요구 사항을 충족하는 실용적인 컴포넌트, 유연한 사용자 정의 및 확장',
    designTitle: '디자인 및 프레임워크',
    designDesc: '지원 생태계, 웹 사이트 응용 프로그램을 빠르게 구축할 수 있도록',
  },
};

const Homepage: React.FC = () => {
  const [locale] = useLocale(locales);
  const { styles } = useStyle();
  const { token } = theme.useToken();

  const isRootDark = useDark();

  return (
    <section>
      <PreviewBanner>
        <BannerRecommends />
      </PreviewBanner>

      <div>
        {/* 定制主题 */}
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
          }}
        >
          <Suspense fallback={null}>
            <Theme />
          </Suspense>
        </ConfigProvider>

        {/* 组件列表 */}
        <Group
          background={token.colorBgElevated}
          collapse
          title={locale.assetsTitle}
          description={locale.assetsDesc}
          id="design"
        >
          <Suspense fallback={null}>
            <ComponentsList />
          </Suspense>
        </Group>

        {/* 设计语言 */}
        <Group
          title={locale.designTitle}
          description={locale.designDesc}
          background={isRootDark ? '#393F4A' : '#F5F8FF'}
          decoration={
            <img
              draggable={false}
              className={styles.image}
              src="https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg"
              alt="bg"
            />
          }
        >
          <Suspense fallback={null}>
            <DesignFramework />
          </Suspense>
        </Group>
      </div>
    </section>
  );
};

export default Homepage;
