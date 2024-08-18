(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["390dabce"],{"390dabce":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("c3f31b05");let n=[{value:"Since ",paraId:0},{value:"5.12.0",paraId:0},{value:", Ant Design 5.x enabled CSS variables again. Unlike 4.x, this time we have integrated the capabilities of CSS-in-JS, and all Design Tokens have been included in the management scope of CSS variables.",paraId:0},{value:"Currently, the CSS variable mode has been globally enabled on the official website.",paraId:1},{value:"CSS variable mode brings two important improvements to Ant Design's styling capabilities:",paraId:2,tocIndex:0},{value:"The styles of the same component under different themes can be shared, reducing the total size of the styles",paraId:3,tocIndex:0},{value:"When switching themes, there is no need to re-serialize the styles, which improves the performance of theme switching",paraId:3,tocIndex:0},{value:"Therefore, if your application depends on Ant Design's theme capabilities, we strongly recommend that you enable the CSS variable mode.",paraId:4,tocIndex:0},{value:"To enable CSS variable mode, use the ",paraId:5,tocIndex:1},{value:"cssVar",paraId:5,tocIndex:1},{value:" configuration in the ",paraId:5,tocIndex:1},{value:"theme",paraId:5,tocIndex:1},{value:" property of ConfigProvider. This configuration will be inherited, so if you want to enable CSS variable mode globally, you only need to configure it in the root of your application.",paraId:5,tocIndex:1},{value:"CSS variable mode requires a unique key for each theme to ensure style isolation. In React 18, we use ",paraId:6},{value:"useId",paraId:6},{value:" to generate unique keys by default, so you don't have to worry about this issue in React 18. But in React 17 or 16, you need to manually set a unique key for each theme, otherwise the themes will be mixed up.",paraId:6},{value:"// React 18\n<ConfigProvider theme={{ cssVar: true }}>\n  <App />\n</ConfigProvider>\n\n// React 17 or 16\n<ConfigProvider theme={{ cssVar: { key: 'app' } }}>\n  <App />\n</ConfigProvider>\n",paraId:7},{value:"After enabling it, you can see that some specific values in the antd component styles have been replaced with CSS variables:",paraId:8},{value:"Hash is one of the features since Ant Design 5.0. Its function is to calculate a unique hash value for each theme, and use it in the class of the component to isolate the theme style.",paraId:9,tocIndex:3},{value:"However, after enabling CSS variables, the component styles of the same antd version will not change with the token \u2014\u2014 because we use CSS variables to fill in the dynamic parts of the styles. So if there is only one version of antd in your application, you can choose to disable hash to further reduce the total size of the styles:",paraId:10,tocIndex:3},{value:"<ConfigProvider theme={{ cssVar: true, hashed: false }}>\n  <App />\n</ConfigProvider>\n",paraId:11,tocIndex:3},{value:"By the way, we strongly recommend using ",paraId:12,tocIndex:3},{value:"extractStyle",paraId:12,tocIndex:3},{value:" to extract static styles, which will bring a certain amount of performance improvement to the application.",paraId:12,tocIndex:3},{value:"With CSS variable mode, the method of modifying the theme is the same as before, refer to ",paraId:13,tocIndex:4},{value:"Customize Theme",paraId:14,tocIndex:4},{value:".",paraId:13,tocIndex:4},{value:"cssVar",paraId:15,tocIndex:5},{value:" configuration:",paraId:15,tocIndex:5},{value:"Properties",paraId:16,tocIndex:5},{value:"Description",paraId:16,tocIndex:5},{value:"Type",paraId:16,tocIndex:5},{value:"Default",paraId:16,tocIndex:5},{value:"Version",paraId:16,tocIndex:5},{value:"prefix",paraId:16,tocIndex:5},{value:"Prefix of CSS Variables, same as ",paraId:16,tocIndex:5},{value:"prefixCls",paraId:16,tocIndex:5},{value:" of ConfigProvider by default",paraId:16,tocIndex:5},{value:"string",paraId:16,tocIndex:5},{value:"ant",paraId:16,tocIndex:5},{value:"5.12.0",paraId:16,tocIndex:5},{value:"key",paraId:16,tocIndex:5},{value:"The unique key of theme. Automatically set by ",paraId:16,tocIndex:5},{value:"useId",paraId:16,tocIndex:5},{value:" in React 18, but need to be set manually in React 17 or 16",paraId:16,tocIndex:5},{value:"string",paraId:16,tocIndex:5},{value:"useId",paraId:16,tocIndex:5},{value:" in React 18",paraId:16,tocIndex:5},{value:"5.12.0",paraId:16,tocIndex:5}];}}]);
//# sourceMappingURL=390dabce-async.d8d116ad.js.map