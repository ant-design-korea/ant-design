(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["beb52982"],{beb52982:function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return t;}}),n("6946bf69");let t=[{value:"\u5728\u7F51\u9875\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u65F6\u5E38\u4F1A\u9047\u5230\u5F39\u51FA\u5143\u7D20\u7684\u9700\u6C42\uFF0C\u6BD4\u5982 Select \u7684\u4E0B\u62C9\u6846\u3001\u6216\u8005\u662F Modal \u7EC4\u4EF6\u3002\u76F4\u63A5\u5C06\u5176\u6E32\u67D3\u5230\u5F53\u524D\u8282\u70B9\u4E0B\u65F6\uFF0C\u53EF\u80FD\u4F1A\u88AB\u7236\u8282\u70B9\u7684 ",paraId:0},{value:"overflow: hidden",paraId:0},{value:" \u88C1\u526A\u6389\uFF1A",paraId:0},{value:"\u56E0\u800C\u5728 Ant Design \u4E2D\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u5C06\u5176\u6E32\u67D3\u5230 ",paraId:1},{value:"body",paraId:1},{value:" \u4E0B\uFF0C\u4F46\u662F\u8FD9\u53C8\u4F1A\u5E26\u6765\u65B0\u7684\u95EE\u9898\u3002\u7531\u4E8E\u4E0D\u5728\u540C\u4E00\u4E2A\u5BB9\u5668\u4E0B\uFF0C\u5F53\u7528\u6237\u6EDA\u52A8\u5C4F\u5E55\u65F6\u4F1A\u53D1\u73B0\u5F39\u51FA\u5C42\u5E76\u672A\u8DDF\u968F\u6EDA\u52A8\uFF1A",paraId:1},{value:"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86 ",paraId:2},{value:"getContainer",paraId:2},{value:" \u5C5E\u6027\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6E32\u67D3\u7684\u5BB9\u5668\u3002",paraId:2},{value:"getContainer",paraId:2},{value:" \u65B9\u6CD5\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\u8C03\u7528\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BB9\u5668\u8282\u70B9\uFF0C\u7EC4\u4EF6\u4F1A\u901A\u8FC7 ",paraId:2},{value:"createPortal",paraId:2},{value:" \u6E32\u67D3\u5230\u8FD9\u4E2A\u8282\u70B9\u4E0B\u3002",paraId:2},{value:"// Fake Code. Just for Demo\nconst PopupWrapper = () => {\n  const eleRef = React.useRef<HTMLDivElement>(null);\n\n  React.useEffect(() => {\n    // It's much complex with timing in real world. You can view the source for more detail:\n    // https://github.com/react-component/portal/blob/master/src/Portal.tsx\n    const container: HTMLElement = getContainer(eleRef.current);\n\n    // ...\n  }, []);\n\n  return (\n    <div ref={eleRef}>\n      {...}\n    </div>\n  );\n}\n",paraId:3},{value:"// Fake Code. Just for Demo\nconst defaultGetContainer = () => {\n  const div = document.createElement('div');\n  document.body.appendChild(div);\n  return div;\n};\n\nconst SomeComponent = ({ getContainer = defaultGetContainer }) => (\n  <PopupWrapper getContainer={getContainer} />\n);\n",paraId:4},{value:"\u6211\u4EEC\u6682\u65F6\u4E0D\u5173\u6CE8 ",paraId:5},{value:"getContainer",paraId:5},{value:" \u9700\u8981\u52A8\u6001\u5207\u6362\u6302\u8F7D\u8282\u70B9\u7684\u9700\u6C42\uFF08\u5176\u5B9E\u5728\u8FC7\u53BB\u5F88\u957F\u65F6\u95F4\u5B83\u7684\u786E\u4E5F\u65E0\u6CD5\u5207\u6362\uFF09\uFF0C\u4EC5\u4EC5\u4ECE React 18 \u770B\uFF0C\u5B83\u9047\u5230\u4E86\u4E00\u4E9B\u95EE\u9898\u3002",paraId:5},{value:"React 18 \u4E2D\uFF0Ceffect \u53EF\u80FD\u4F1A\u591A\u6B21\u89E6\u53D1\u3002\u4E3A\u4E86\u9632\u6B62\u4E0D\u7ECF\u610F\u95F4\u7834\u574F\u5F00\u53D1\u8005\u7684\u884C\u4E3A\uFF0C\u5728 ",paraId:6,tocIndex:0},{value:"StrictMode",paraId:6,tocIndex:0},{value:" \u4E0B\u5B83\u4E5F\u505A\u4E86\u76F8\u5E94\u7684\u8C03\u6574\uFF1A",paraId:6,tocIndex:0},{value:"React mounts the component.\n",paraId:7,tocIndex:0},{value:"Layout effects are created.",paraId:8,tocIndex:0},{value:"Effect effects are created.",paraId:8,tocIndex:0},{value:"React simulates effects being destroyed on a mounted component.\n",paraId:7,tocIndex:0},{value:"Layout effects are destroyed.",paraId:9,tocIndex:0},{value:"Effects are destroyed.",paraId:9,tocIndex:0},{value:"React simulates effects being re-created on a mounted component.\n",paraId:7,tocIndex:0},{value:"Layout effects are created",paraId:10,tocIndex:0},{value:"Effect setup code runs",paraId:10,tocIndex:0},{value:"\u7B80\u5355\u7406\u89E3\u5C31\u662F StrictMode \u4E0B\uFF0C\u5373\u4FBF\u4F60\u7684 deps \u91CC\u662F\u7A7A\u5BF9\u8C61\uFF0Ceffect \u4ECD\u7136\u4F1A\u591A\u6B21\u89E6\u53D1\u3002\u5728\u5207\u6362\u4E3A React 18 StrictMode \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u5728 HTML \u4E2D\u4F1A\u6210\u5BF9\u51FA\u73B0\u6302\u8F7D\u8282\u70B9\uFF0C\u540C\u65F6\u524D\u4E00\u4E2A\u662F\u7A7A\u7684\uFF1A",paraId:11,tocIndex:0},{value:'<body>\n  <div id="root">...</div>\n\n  <!-- Empty -->\n  <div className="sample-holder"></div>\n\n  <!-- Real in use -->\n  <div className="sample-holder">\n    <div className="ant-component-wrapper">...</div>\n  </div>\n</body>\n',paraId:12,tocIndex:0},{value:"\u56E0\u800C\u6211\u4EEC\u8C03\u6574\u4E86\u8C03\u7528\u5B9E\u73B0\uFF0C\u9ED8\u8BA4\u7684 ",paraId:13,tocIndex:0},{value:"getContainer",paraId:13,tocIndex:0},{value:" \u4E5F\u901A\u8FC7 state \u8FDB\u884C\u7BA1\u7406\uFF0C\u786E\u4FDD\u5728 StrictMode \u4E0B\u4F1A\u6E05\u7406\u524D\u4E00\u4E2A effect \u751F\u6210\u7684\u8282\u70B9\uFF1A",paraId:13,tocIndex:0},{value:"// Fake Code. Just for Demo\nconst SomeComponent = ({ getContainer }) => {\n  const [myContainer, setMyContainer] = React.useState<HTMLElement | null>(null);\n\n  React.useEffect(() => {\n    if (getContainer) {\n      setMyContainer(getContainer());\n      return;\n    }\n\n    const div = document.createElement('div');\n    document.body.appendChild(div);\n    setMyContainer(div);\n\n    return () => {\n      document.body.removeChild(div);\n    };\n  }, [getContainer]);\n\n  return <PopupWrapper getContainer={() => myContainer} />;\n};\n",paraId:14,tocIndex:0},{value:"\u5C06 ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" \u653E\u5165 effect \u7BA1\u7406\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u7B26\u5408 React \u751F\u547D\u5468\u671F\u7684\u65B9\u5F0F\u53BB\u7BA1\u7406\u8282\u70B9\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u5728 ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" \u53D8\u5316\u65F6\u8FDB\u884C\u6E05\u7406\u3002\u4ECE\u800C\u652F\u6301\u52A8\u6001\u6539\u53D8 ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" \u7684\u573A\u666F\uFF08\u867D\u7136\u6211\u4E2A\u4EBA\u6BD4\u8F83\u6000\u7591\u8FD9\u79CD\u4F7F\u7528\u573A\u666F\u7684\u666E\u904D\u6027\uFF09\u3002",paraId:15,tocIndex:0},{value:"\u7531\u4E8E\u4FEE\u590D\u4E86 ",paraId:16,tocIndex:1},{value:"getContainer",paraId:16,tocIndex:1},{value:" \u4E0D\u652F\u6301\u52A8\u6001\u6539\u53D8\u7684\u95EE\u9898\uFF0C\u5B83\u4E5F\u5F15\u5165\u4E86\u4E00\u4E2A\u6F5C\u5728\u7684 breaking change\u3002\u5F00\u53D1\u8005\u5982\u679C\u81EA\u5B9A\u4E49 ",paraId:16,tocIndex:1},{value:"getContainer",paraId:16,tocIndex:1},{value:" \u6BCF\u6B21\u90FD\u662F\u521B\u5EFA\u65B0\u7684 DOM \u8282\u70B9\u65F6\uFF0C\u5B83\u5C31\u4F1A\u56E0\u4E3A effect \u4E0D\u65AD\u6267\u884C\uFF0C\u5BFC\u81F4\u8282\u70B9\u4E0D\u65AD\u521B\u5EFA\u800C\u6B7B\u5FAA\u73AF\u3002\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u8FD9\u79CD\u65B9\u5F0F\u5E76\u4E14\u9047\u5230\u4E86\u95EE\u9898\uFF0C\u9700\u8981\u6CE8\u610F\u68C0\u67E5\u3002",paraId:16,tocIndex:1}];}}]);
//# sourceMappingURL=beb52982-async.56efe298.js.map