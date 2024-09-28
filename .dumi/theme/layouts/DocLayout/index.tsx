import classNames from 'classnames';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import ConfigProvider from 'antd/es/config-provider';
import enUS from 'antd/es/locale/en_US';
import koKR from 'antd/es/locale/ko_KR';
import zhCN from 'antd/es/locale/zh_CN';
import { Helmet, useOutlet, useSiteData } from 'dumi';

import useLocale from '../../../hooks/useLocale';
import useLocation from '../../../hooks/useLocation';
import GlobalStyles from '../../common/GlobalStyles';
import Header from '../../slots/Header';
import SiteContext from '../../slots/SiteContext';

import '../../static/style';

import IndexLayout from '../IndexLayout';
import ResourceLayout from '../ResourceLayout';
import SidebarLayout from '../SidebarLayout';

const locales = {
  cn: {
    title: 'Ant Design - 一套企业级 UI 设计语言和 React 组件库',
    description: '基于 Ant Design 设计体系的 React UI 组件库，用于研发企业级中后台产品。',
  },
  en: {
    title: "Ant Design - The world's second most popular React UI framework",
    description:
      'An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises',
  },
  ko: {
    title: 'Ant Design - 세계에서 두 번째로 인기 있는 React UI 프레임워크',
    description:
      '고품질의 React 컴포넌트를 갖춘 기업급 UI 디자인 언어 및 React UI 라이브러리, 기업을 위한 최고의 React UI 라이브러리 중 하나',
  },
};

const getLocaleConfig = (lang: 'cn' | 'en' | 'ko') => {
  switch (lang) {
    case 'cn':
      return zhCN;
    case 'ko':
      return koKR;
    default:
      return enUS;
  }
};

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [locale, lang] = useLocale(locales);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { direction } = useContext(SiteContext);
  const { loading } = useSiteData();

  useLayoutEffect(() => {
    if (lang === 'cn') {
      dayjs.locale('zh-cn');
    } else if (lang === 'ko') {
      dayjs.locale('ko');
    } else {
      dayjs.locale('en');
    }
  }, []);

  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    timerRef.current = setTimeout(() => {
      nprogressHiddenStyle?.remove();
    }, 0);
    return () => clearTimeout(timerRef.current);
  }, []);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) {
      document.getElementById(decodeURIComponent(id))?.scrollIntoView();
    }
  }, [loading, hash]);

  useEffect(() => {
    if (typeof (window as any).ga !== 'undefined') {
      (window as any).ga('send', 'pageview', pathname + search);
    }
  }, [location]);

  const content = React.useMemo<React.ReactNode>(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return (
        <IndexLayout title={locale.title} desc={locale.description}>
          {outlet}
        </IndexLayout>
      );
    }
    if (pathname.startsWith('/docs/resource')) {
      return <ResourceLayout>{outlet}</ResourceLayout>;
    }
    if (pathname.startsWith('/theme-editor')) {
      return outlet;
    }
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang === 'cn' ? 'zh-CN' : lang}
          data-direction={direction}
          className={classNames({ rtl: direction === 'rtl' })}
        />
        <link
          sizes="144x144"
          href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
        />
        <meta property="og:description" content={locale.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
        />
      </Helmet>
      <ConfigProvider direction={direction} locale={getLocaleConfig(lang)}>
        <GlobalStyles />
        <Header />
        {content}
      </ConfigProvider>
    </>
  );
};

export default DocLayout;
