import React, { Suspense, useEffect } from 'react';
import { App, Button, Skeleton } from 'antd';
import { enUS } from 'antd-token-previewer';
import type { ThemeConfig } from 'antd/es/config-provider/context';
import { Helmet } from 'dumi';

const ThemeEditor = React.lazy(() => import('antd-token-previewer/lib/ThemeEditor'));

const locales = {
  cn: {
    title: '主题编辑器',
    save: '保存',
    edit: '编辑',
    export: '导出',
    editModelTitle: '编辑主题配置',
    editJsonContentTypeError: '主题 JSON 格式错误',
    editSuccessfully: '编辑成功',
    saveSuccessfully: '保存成功',
    initialEditor: '正在初始化编辑器...',
  },
  en: {
    title: 'Theme Editor',
    save: 'Save',
    edit: 'Edit',
    export: 'Export',
    editModelTitle: 'edit Theme Config',
    editJsonContentTypeError: 'The theme of the JSON format is incorrect',
    editSuccessfully: 'Edited successfully',
    saveSuccessfully: 'Saved successfully',
    initialEditor: 'Initializing Editor...',
  },
  ko: {
    title: '테마 편집기',
    save: '저장',
    edit: '편집',
    export: '내보내기',
    editModelTitle: '테마 구성 편집',
    editJsonContentTypeError: 'JSON 형식의 테마가 잘못되었습니다',
    editSuccessfully: '성공적으로 편집되었습니다',
    saveSuccessfully: '성공적으로 저장되었습니다',
    initialEditor: '편집기 초기화 중...',
  },
};

const ANT_DESIGN_V5_THEME_EDITOR_THEME = 'ant-design-v5-theme-editor-theme';

const CustomTheme: React.FC = () => {
  const { message } = App.useApp();
  const locale = locales.ko;

  const [theme, setTheme] = React.useState<ThemeConfig>({});

  useEffect(() => {
    const storedConfig = localStorage.getItem(ANT_DESIGN_V5_THEME_EDITOR_THEME);
    if (storedConfig) {
      const themeConfig = JSON.parse(storedConfig);
      setTheme(themeConfig);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(ANT_DESIGN_V5_THEME_EDITOR_THEME, JSON.stringify(theme));
    message.success(locale.saveSuccessfully);
  };

  return (
    <div>
      <Helmet>
        <title>{`${locale.title} - Ant Design`}</title>
        <meta property="og:title" content={`${locale.title} - Ant Design`} />
      </Helmet>
      <Suspense fallback={<Skeleton style={{ margin: 24 }} />}>
        <ThemeEditor
          advanced
          hideAdvancedSwitcher
          theme={{ name: 'Custom Theme', key: 'test', config: theme }}
          style={{ height: 'calc(100vh - 64px)' }}
          onThemeChange={(newTheme) => {
            setTheme(newTheme.config);
          }}
          locale={enUS}
          actions={
            <Button type="primary" onClick={handleSave}>
              {locale.save}
            </Button>
          }
        />
      </Suspense>
    </div>
  );
};

export default CustomTheme;
