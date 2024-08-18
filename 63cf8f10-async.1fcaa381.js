(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["63cf8f10"],{"63cf8f10":function(a,e,o){"use strict";o.d(e,"__esModule",{value:!0}),o.d(e,"texts",{enumerable:!0,get:function(){return t;}}),o("889c0abc");let t=[{value:"When you need to mention someone or something.",paraId:0,tocIndex:0},{value:"After version 5.1.0, we provide a simpler usage ",paraId:1},{value:"<Mentions options={[...]} />",paraId:1},{value:" with better performance and potential of writing simpler code style in your applications.\nMeanwhile, we deprecated the old usage in browser console, we will remove it in antd 6.0.",paraId:1},{value:"// works when >=5.1.0, recommended \u2705\nconst options = [{ value: 'sample', label: 'sample' }];\nreturn <Mentions options={options} />;\n\n// works when <5.1.0, deprecated when >=5.1.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F\nreturn (\n  <Mentions onChange={onChange}>\n    <Mentions.Option value=\"sample\">Sample</Mentions.Option>\n  </Mentions>\n);\n",paraId:2},{value:"Common props ref\uFF1A",paraId:3,tocIndex:15},{value:"Common props",paraId:4,tocIndex:15},{value:"Property",paraId:5,tocIndex:16},{value:"Description",paraId:5,tocIndex:16},{value:"Type",paraId:5,tocIndex:16},{value:"Default",paraId:5,tocIndex:16},{value:"Version",paraId:5,tocIndex:16},{value:"allowClear",paraId:5,tocIndex:16},{value:"If allow to remove mentions content with clear icon",paraId:5,tocIndex:16},{value:"boolean | { clearIcon?: ReactNode }",paraId:5,tocIndex:16},{value:"false",paraId:5,tocIndex:16},{value:"5.13.0",paraId:5,tocIndex:16},{value:"autoFocus",paraId:5,tocIndex:16},{value:"Auto get focus when component mounted",paraId:5,tocIndex:16},{value:"boolean",paraId:5,tocIndex:16},{value:"false",paraId:5,tocIndex:16},{value:"autoSize",paraId:5,tocIndex:16},{value:"Textarea height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }",paraId:5,tocIndex:16},{value:"boolean | object",paraId:5,tocIndex:16},{value:"false",paraId:5,tocIndex:16},{value:"defaultValue",paraId:5,tocIndex:16},{value:"Default value",paraId:5,tocIndex:16},{value:"string",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"filterOption",paraId:5,tocIndex:16},{value:"Customize filter option logic",paraId:5,tocIndex:16},{value:"false | (input: string, option: OptionProps) => boolean",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"getPopupContainer",paraId:5,tocIndex:16},{value:"Set the mount HTML node for suggestions",paraId:5,tocIndex:16},{value:"() => HTMLElement",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"notFoundContent",paraId:5,tocIndex:16},{value:"Set mentions content when not match",paraId:5,tocIndex:16},{value:"ReactNode",paraId:5,tocIndex:16},{value:"Not Found",paraId:5,tocIndex:16},{value:"placement",paraId:5,tocIndex:16},{value:"Set popup placement",paraId:5,tocIndex:16},{value:"top",paraId:5,tocIndex:16},{value:" | ",paraId:5,tocIndex:16},{value:"bottom",paraId:5,tocIndex:16},{value:"bottom",paraId:5,tocIndex:16},{value:"prefix",paraId:5,tocIndex:16},{value:"Set trigger prefix keyword",paraId:5,tocIndex:16},{value:"string | string[]",paraId:5,tocIndex:16},{value:"@",paraId:5,tocIndex:16},{value:"split",paraId:5,tocIndex:16},{value:"Set split string before and after selected mention",paraId:5,tocIndex:16},{value:"string",paraId:5,tocIndex:16},{value:" ",paraId:5,tocIndex:16},{value:"status",paraId:5,tocIndex:16},{value:"Set validation status",paraId:5,tocIndex:16},{value:"'error' | 'warning' | 'success' | 'validating'",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"4.19.0",paraId:5,tocIndex:16},{value:"validateSearch",paraId:5,tocIndex:16},{value:"Customize trigger search logic",paraId:5,tocIndex:16},{value:"(text: string, props: MentionsProps) => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"value",paraId:5,tocIndex:16},{value:"Set value of mentions",paraId:5,tocIndex:16},{value:"string",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"variant",paraId:5,tocIndex:16},{value:"Variants of Input",paraId:5,tocIndex:16},{value:"outlined",paraId:5,tocIndex:16},{value:" | ",paraId:5,tocIndex:16},{value:"borderless",paraId:5,tocIndex:16},{value:" | ",paraId:5,tocIndex:16},{value:"filled",paraId:5,tocIndex:16},{value:"outlined",paraId:5,tocIndex:16},{value:"5.13.0",paraId:5,tocIndex:16},{value:"onBlur",paraId:5,tocIndex:16},{value:"Trigger when mentions lose focus",paraId:5,tocIndex:16},{value:"() => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"onChange",paraId:5,tocIndex:16},{value:"Trigger when value changed",paraId:5,tocIndex:16},{value:"(text: string) => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"onClear",paraId:5,tocIndex:16},{value:"Callback when click the clear button",paraId:5,tocIndex:16},{value:"() => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"5.20.0",paraId:5,tocIndex:16},{value:"onFocus",paraId:5,tocIndex:16},{value:"Trigger when mentions get focus",paraId:5,tocIndex:16},{value:"() => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"onResize",paraId:5,tocIndex:16},{value:"The callback function that is triggered when textarea resize",paraId:5,tocIndex:16},{value:"function({ width, height })",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"onSearch",paraId:5,tocIndex:16},{value:"Trigger when prefix hit",paraId:5,tocIndex:16},{value:"(text: string, prefix: string) => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"onSelect",paraId:5,tocIndex:16},{value:"Trigger when user select the option",paraId:5,tocIndex:16},{value:"(option: OptionProps, prefix: string) => void",paraId:5,tocIndex:16},{value:"-",paraId:5,tocIndex:16},{value:"options",paraId:5,tocIndex:16},{value:"Option Configuration",paraId:5,tocIndex:16},{value:"Options",paraId:6,tocIndex:16},{value:"[]",paraId:5,tocIndex:16},{value:"5.1.0",paraId:5,tocIndex:16},{value:"Name",paraId:7,tocIndex:17},{value:"Description",paraId:7,tocIndex:17},{value:"blur()",paraId:7,tocIndex:17},{value:"Remove focus",paraId:7,tocIndex:17},{value:"focus()",paraId:7,tocIndex:17},{value:"Get focus",paraId:7,tocIndex:17},{value:"Property",paraId:8,tocIndex:18},{value:"Description",paraId:8,tocIndex:18},{value:"Type",paraId:8,tocIndex:18},{value:"Default",paraId:8,tocIndex:18},{value:"label",paraId:8,tocIndex:18},{value:"Title of the option",paraId:8,tocIndex:18},{value:"React.ReactNode",paraId:8,tocIndex:18},{value:"-",paraId:8,tocIndex:18},{value:"key",paraId:8,tocIndex:18},{value:"The key value of the option",paraId:8,tocIndex:18},{value:"string",paraId:8,tocIndex:18},{value:"-",paraId:8,tocIndex:18},{value:"disabled",paraId:8,tocIndex:18},{value:"Optional",paraId:8,tocIndex:18},{value:"boolean",paraId:8,tocIndex:18},{value:"-",paraId:8,tocIndex:18},{value:"className",paraId:8,tocIndex:18},{value:"className",paraId:8,tocIndex:18},{value:"string",paraId:8,tocIndex:18},{value:"-",paraId:8,tocIndex:18},{value:"style",paraId:8,tocIndex:18},{value:"The style of the option",paraId:8,tocIndex:18},{value:"React.CSSProperties",paraId:8,tocIndex:18},{value:"-",paraId:8,tocIndex:18}];}}]);
//# sourceMappingURL=63cf8f10-async.1fcaa381.js.map