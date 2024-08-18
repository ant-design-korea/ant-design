(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ece3f8d0"],{ece3f8d0:function(e,a,o){"use strict";o.d(a,"__esModule",{value:!0}),o.d(a,"texts",{enumerable:!0,get:function(){return d;}}),o("183953a3");let d=[{value:"To provide feedback such as success, warning, error etc.",paraId:0,tocIndex:0},{value:"A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.",paraId:0,tocIndex:0},{value:"Common props ref\uFF1A",paraId:1,tocIndex:12},{value:"Common props",paraId:2,tocIndex:12},{value:"This component provides some static methods, with usage and arguments as following:",paraId:3,tocIndex:12},{value:"message.success(content, [duration], onClose)",paraId:4,tocIndex:12},{value:"message.error(content, [duration], onClose)",paraId:4,tocIndex:12},{value:"message.info(content, [duration], onClose)",paraId:4,tocIndex:12},{value:"message.warning(content, [duration], onClose)",paraId:4,tocIndex:12},{value:"message.loading(content, [duration], onClose)",paraId:4,tocIndex:12},{value:"Argument",paraId:5,tocIndex:12},{value:"Description",paraId:5,tocIndex:12},{value:"Type",paraId:5,tocIndex:12},{value:"Default",paraId:5,tocIndex:12},{value:"content",paraId:5,tocIndex:12},{value:"The content of the message",paraId:5,tocIndex:12},{value:"ReactNode | config",paraId:5,tocIndex:12},{value:"-",paraId:5,tocIndex:12},{value:"duration",paraId:5,tocIndex:12},{value:"Time(seconds) before auto-dismiss, don't dismiss if set to 0",paraId:5,tocIndex:12},{value:"number",paraId:5,tocIndex:12},{value:"1.5",paraId:5,tocIndex:12},{value:"onClose",paraId:5,tocIndex:12},{value:"Specify a function that will be called when the message is closed",paraId:5,tocIndex:12},{value:"function",paraId:5,tocIndex:12},{value:"-",paraId:5,tocIndex:12},{value:"afterClose",paraId:6,tocIndex:12},{value:" can be called in thenable interface:",paraId:6,tocIndex:12},{value:"message[level](content, [duration]).then(afterClose)",paraId:7,tocIndex:12},{value:"message[level](content, [duration], onClose).then(afterClose)",paraId:7,tocIndex:12},{value:"where ",paraId:8,tocIndex:12},{value:"level",paraId:8,tocIndex:12},{value:" refers one static methods of ",paraId:8,tocIndex:12},{value:"message",paraId:8,tocIndex:12},{value:". The result of ",paraId:8,tocIndex:12},{value:"then",paraId:8,tocIndex:12},{value:" method will be a Promise.",paraId:8,tocIndex:12},{value:"Supports passing parameters wrapped in an object:",paraId:9,tocIndex:12},{value:"message.open(config)",paraId:10,tocIndex:12},{value:"message.success(config)",paraId:10,tocIndex:12},{value:"message.error(config)",paraId:10,tocIndex:12},{value:"message.info(config)",paraId:10,tocIndex:12},{value:"message.warning(config)",paraId:10,tocIndex:12},{value:"message.loading(config)",paraId:10,tocIndex:12},{value:"The properties of config are as follows:",paraId:11,tocIndex:12},{value:"Property",paraId:12,tocIndex:12},{value:"Description",paraId:12,tocIndex:12},{value:"Type",paraId:12,tocIndex:12},{value:"Default",paraId:12,tocIndex:12},{value:"className",paraId:12,tocIndex:12},{value:"Customized CSS class",paraId:12,tocIndex:12},{value:"string",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"content",paraId:12,tocIndex:12},{value:"The content of the message",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"duration",paraId:12,tocIndex:12},{value:"Time(seconds) before auto-dismiss, don't dismiss if set to 0",paraId:12,tocIndex:12},{value:"number",paraId:12,tocIndex:12},{value:"3",paraId:12,tocIndex:12},{value:"icon",paraId:12,tocIndex:12},{value:"Customized Icon",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"key",paraId:12,tocIndex:12},{value:"The unique identifier of the Message",paraId:12,tocIndex:12},{value:"string | number",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"style",paraId:12,tocIndex:12},{value:"Customized inline style",paraId:12,tocIndex:12},{value:"CSSProperties",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"onClick",paraId:12,tocIndex:12},{value:"Specify a function that will be called when the message is clicked",paraId:12,tocIndex:12},{value:"function",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"onClose",paraId:12,tocIndex:12},{value:"Specify a function that will be called when the message is closed",paraId:12,tocIndex:12},{value:"function",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"Methods for global configuration and destruction are also provided:",paraId:13,tocIndex:13},{value:"message.config(options)",paraId:14,tocIndex:13},{value:"message.destroy()",paraId:14,tocIndex:13},{value:"use ",paraId:15,tocIndex:13},{value:"message.destroy(key)",paraId:15,tocIndex:13},{value:" to remove a message\u3002",paraId:15,tocIndex:13},{value:"When you use ",paraId:16,tocIndex:14},{value:"ConfigProvider",paraId:16,tocIndex:14},{value:" for global configuration, the system will automatically start RTL mode by default.(4.3.0+)",paraId:16,tocIndex:14},{value:"When you want to use it alone, you can start the RTL mode through the following settings.",paraId:17,tocIndex:14},{value:"message.config({\n  top: 100,\n  duration: 2,\n  maxCount: 3,\n  rtl: true,\n  prefixCls: 'my-message',\n});\n",paraId:18,tocIndex:14},{value:"Argument",paraId:19,tocIndex:14},{value:"Description",paraId:19,tocIndex:14},{value:"Type",paraId:19,tocIndex:14},{value:"Default",paraId:19,tocIndex:14},{value:"Version",paraId:19,tocIndex:14},{value:"duration",paraId:19,tocIndex:14},{value:"Time before auto-dismiss, in seconds",paraId:19,tocIndex:14},{value:"number",paraId:19,tocIndex:14},{value:"3",paraId:19,tocIndex:14},{value:"getContainer",paraId:19,tocIndex:14},{value:"Return the mount node for Message, but still display at fullScreen",paraId:19,tocIndex:14},{value:"() => HTMLElement",paraId:19,tocIndex:14},{value:"() => document.body",paraId:19,tocIndex:14},{value:"maxCount",paraId:19,tocIndex:14},{value:"Max message show, drop oldest if exceed limit",paraId:19,tocIndex:14},{value:"number",paraId:19,tocIndex:14},{value:"-",paraId:19,tocIndex:14},{value:"prefixCls",paraId:19,tocIndex:14},{value:"The prefix className of message node",paraId:19,tocIndex:14},{value:"string",paraId:19,tocIndex:14},{value:"ant-message",paraId:19,tocIndex:14},{value:"4.5.0",paraId:19,tocIndex:14},{value:"rtl",paraId:19,tocIndex:14},{value:"Whether to enable RTL mode",paraId:19,tocIndex:14},{value:"boolean",paraId:19,tocIndex:14},{value:"false",paraId:19,tocIndex:14},{value:"top",paraId:19,tocIndex:14},{value:"Distance from top",paraId:19,tocIndex:14},{value:"number",paraId:19,tocIndex:14},{value:"8",paraId:19,tocIndex:14},{value:"locale/prefixCls/theme",paraId:20},{value:"antd will dynamic create React instance by ",paraId:21,tocIndex:17},{value:"ReactDOM.render",paraId:21,tocIndex:17},{value:" when call message methods. Whose context is different with origin code located context.",paraId:21,tocIndex:17},{value:"When you need context info (like ConfigProvider context), you can use ",paraId:22,tocIndex:17},{value:"message.useMessage",paraId:22,tocIndex:17},{value:" to get ",paraId:22,tocIndex:17},{value:"api",paraId:22,tocIndex:17},{value:" instance and ",paraId:22,tocIndex:17},{value:"contextHolder",paraId:22,tocIndex:17},{value:" node. And put it in your children:",paraId:22,tocIndex:17},{value:'const [api, contextHolder] = message.useMessage();\n\nreturn (\n  <Context1.Provider value="Ant">\n    {/* contextHolder is inside Context1 which means api will get value of Context1 */}\n    {contextHolder}\n    <Context2.Provider value="Design">\n      {/* contextHolder is outside Context2 which means api will **not** get value of Context2 */}\n    </Context2.Provider>\n  </Context1.Provider>\n);\n',paraId:23,tocIndex:17},{value:"Note:",paraId:24,tocIndex:17},{value:" You must insert ",paraId:24,tocIndex:17},{value:"contextHolder",paraId:24,tocIndex:17},{value:" into your children with hooks. You can use origin method if you do not need context connection.",paraId:24,tocIndex:17},{value:"App Package Component",paraId:25,tocIndex:17},{value:" can be used to simplify the problem of ",paraId:26,tocIndex:17},{value:"useMessage",paraId:26,tocIndex:17},{value:" and other methods that need to manually implant contextHolder.",paraId:26,tocIndex:17},{value:"You can config with ",paraId:27,tocIndex:18},{value:"ConfigProvider.config",paraId:28,tocIndex:18}];}}]);
//# sourceMappingURL=ece3f8d0-async.fa9d857f.js.map