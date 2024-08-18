(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5e8bfec2"],{"5e8bfec2":function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return o;}}),d("12c95c59");let o=[{value:"Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.",paraId:0,tocIndex:0},{value:"When you need to upload one or more files.",paraId:1,tocIndex:0},{value:"When you need to show the process of uploading.",paraId:1,tocIndex:0},{value:"When you need to upload files by dragging and dropping.",paraId:1,tocIndex:0},{value:"Common props ref\uFF1A",paraId:2,tocIndex:24},{value:"Common props",paraId:3,tocIndex:24},{value:"Property",paraId:4,tocIndex:24},{value:"Description",paraId:4,tocIndex:24},{value:"Type",paraId:4,tocIndex:24},{value:"Default",paraId:4,tocIndex:24},{value:"Version",paraId:4,tocIndex:24},{value:"accept",paraId:4,tocIndex:24},{value:"File types that can be accepted. See ",paraId:4,tocIndex:24},{value:"input accept Attribute",paraId:4,tocIndex:24},{value:"string",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"action",paraId:4,tocIndex:24},{value:"Uploading URL",paraId:4,tocIndex:24},{value:"string | (file) => Promise<string>",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"beforeUpload",paraId:4,tocIndex:24},{value:"Hook function which will be executed before uploading. Uploading will be stopped with ",paraId:4,tocIndex:24},{value:"false",paraId:4,tocIndex:24},{value:" or a rejected Promise returned. When returned value is ",paraId:4,tocIndex:24},{value:"Upload.LIST_IGNORE",paraId:4,tocIndex:24},{value:", the list of files that have been uploaded will ignore it. ",paraId:4,tocIndex:24},{value:"Warning\uFF1Athis function is not supported in IE9",paraId:4,tocIndex:24},{value:"(file, fileList) => boolean | Promise<File> | ",paraId:4,tocIndex:24},{value:"Upload.LIST_IGNORE",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"customRequest",paraId:4,tocIndex:24},{value:"Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest",paraId:4,tocIndex:24},{value:"function",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"data",paraId:4,tocIndex:24},{value:"Uploading extra params or function which can return uploading extra params",paraId:4,tocIndex:24},{value:"object | (file) => object | Promise<object>",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"defaultFileList",paraId:4,tocIndex:24},{value:"Default list of files that have been uploaded",paraId:4,tocIndex:24},{value:"object[]",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"directory",paraId:4,tocIndex:24},{value:"Support upload whole directory (",paraId:4,tocIndex:24},{value:"caniuse",paraId:4,tocIndex:24},{value:")",paraId:4,tocIndex:24},{value:"boolean",paraId:4,tocIndex:24},{value:"false",paraId:4,tocIndex:24},{value:"disabled",paraId:4,tocIndex:24},{value:"Disable upload button",paraId:4,tocIndex:24},{value:"boolean",paraId:4,tocIndex:24},{value:"false",paraId:4,tocIndex:24},{value:"When customizing Upload children, please pass the disabled attribute to the child node at the same time to ensure the disabled rendering effect is consistent.",paraId:4,tocIndex:24},{value:"fileList",paraId:4,tocIndex:24},{value:"List of files that have been uploaded (controlled). Here is a common issue ",paraId:4,tocIndex:24},{value:"#2423",paraId:4,tocIndex:24},{value:" when using it",paraId:4,tocIndex:24},{value:"UploadFile",paraId:5,tocIndex:24},{value:"[]",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"headers",paraId:4,tocIndex:24},{value:"Set request headers, valid above IE10",paraId:4,tocIndex:24},{value:"object",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"iconRender",paraId:4,tocIndex:24},{value:"Custom show icon",paraId:4,tocIndex:24},{value:"(file: UploadFile, listType?: UploadListType) => ReactNode",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"isImageUrl",paraId:4,tocIndex:24},{value:"Customize if render <img /> in thumbnail",paraId:4,tocIndex:24},{value:"(file: UploadFile) => boolean",paraId:4,tocIndex:24},{value:"(inside implementation)",paraId:4,tocIndex:24},{value:"itemRender",paraId:4,tocIndex:24},{value:"Custom item of uploadList",paraId:4,tocIndex:24},{value:"(originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"4.16.0",paraId:4,tocIndex:24},{value:"listType",paraId:4,tocIndex:24},{value:"Built-in stylesheets, support for four types: ",paraId:4,tocIndex:24},{value:"text",paraId:4,tocIndex:24},{value:", ",paraId:4,tocIndex:24},{value:"picture",paraId:4,tocIndex:24},{value:", ",paraId:4,tocIndex:24},{value:"picture-card",paraId:4,tocIndex:24},{value:" or ",paraId:4,tocIndex:24},{value:"picture-circle",paraId:4,tocIndex:24},{value:"string",paraId:4,tocIndex:24},{value:"text",paraId:4,tocIndex:24},{value:"picture-circle",paraId:4,tocIndex:24},{value:"(5.2.0+)",paraId:4,tocIndex:24},{value:"maxCount",paraId:4,tocIndex:24},{value:"Limit the number of uploaded files. Will replace current one when ",paraId:4,tocIndex:24},{value:"maxCount",paraId:4,tocIndex:24},{value:" is ",paraId:4,tocIndex:24},{value:"1",paraId:4,tocIndex:24},{value:"number",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"4.10.0",paraId:4,tocIndex:24},{value:"method",paraId:4,tocIndex:24},{value:"The http method of upload request",paraId:4,tocIndex:24},{value:"string",paraId:4,tocIndex:24},{value:"post",paraId:4,tocIndex:24},{value:"multiple",paraId:4,tocIndex:24},{value:"Whether to support selected multiple files. ",paraId:4,tocIndex:24},{value:"IE10+",paraId:4,tocIndex:24},{value:" supported. You can select multiple files with CTRL holding down while multiple is set to be true",paraId:4,tocIndex:24},{value:"boolean",paraId:4,tocIndex:24},{value:"false",paraId:4,tocIndex:24},{value:"name",paraId:4,tocIndex:24},{value:"The name of uploading file",paraId:4,tocIndex:24},{value:"string",paraId:4,tocIndex:24},{value:"file",paraId:4,tocIndex:24},{value:"openFileDialogOnClick",paraId:4,tocIndex:24},{value:"Click open file dialog",paraId:4,tocIndex:24},{value:"boolean",paraId:4,tocIndex:24},{value:"true",paraId:4,tocIndex:24},{value:"previewFile",paraId:4,tocIndex:24},{value:"Customize preview file logic",paraId:4,tocIndex:24},{value:"(file: File | Blob) => Promise<dataURL: string>",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"progress",paraId:4,tocIndex:24},{value:"Custom progress bar",paraId:4,tocIndex:24},{value:"ProgressProps",paraId:6,tocIndex:24},{value:" (support ",paraId:4,tocIndex:24},{value:'type="line"',paraId:4,tocIndex:24},{value:" only)",paraId:4,tocIndex:24},{value:"{ strokeWidth: 2, showInfo: false }",paraId:4,tocIndex:24},{value:"4.3.0",paraId:4,tocIndex:24},{value:"showUploadList",paraId:4,tocIndex:24},{value:"Whether to show default upload list, could be an object to specify ",paraId:4,tocIndex:24},{value:"extra",paraId:4,tocIndex:24},{value:"(5.20.0+), ",paraId:4,tocIndex:24},{value:"showPreviewIcon",paraId:4,tocIndex:24},{value:", ",paraId:4,tocIndex:24},{value:"showRemoveIcon",paraId:4,tocIndex:24},{value:", ",paraId:4,tocIndex:24},{value:"showDownloadIcon",paraId:4,tocIndex:24},{value:", ",paraId:4,tocIndex:24},{value:"removeIcon",paraId:4,tocIndex:24},{value:" and ",paraId:4,tocIndex:24},{value:"downloadIcon",paraId:4,tocIndex:24},{value:" individually",paraId:4,tocIndex:24},{value:"boolean | { extra?: ReactNode | (file: UploadFile) => ReactNode, showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean, previewIcon?: ReactNode | (file: UploadFile) => ReactNode, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, downloadIcon?: ReactNode | (file: UploadFile) => ReactNode }",paraId:4,tocIndex:24},{value:"true",paraId:4,tocIndex:24},{value:"extra",paraId:4,tocIndex:24},{value:": 5.20.0",paraId:4,tocIndex:24},{value:"withCredentials",paraId:4,tocIndex:24},{value:"The ajax upload with cookie sent",paraId:4,tocIndex:24},{value:"boolean",paraId:4,tocIndex:24},{value:"false",paraId:4,tocIndex:24},{value:"onChange",paraId:4,tocIndex:24},{value:"A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see ",paraId:4,tocIndex:24},{value:"onChange",paraId:7,tocIndex:24},{value:"function",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"onDrop",paraId:4,tocIndex:24},{value:"A callback function executed when files are dragged and dropped into the upload area",paraId:4,tocIndex:24},{value:"(event: React.DragEvent) => void",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"4.16.0",paraId:4,tocIndex:24},{value:"onDownload",paraId:4,tocIndex:24},{value:"Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB",paraId:4,tocIndex:24},{value:"function(file): void",paraId:4,tocIndex:24},{value:"(Jump to new TAB)",paraId:4,tocIndex:24},{value:"onPreview",paraId:4,tocIndex:24},{value:"A callback function, will be executed when the file link or preview icon is clicked",paraId:4,tocIndex:24},{value:"function(file)",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"onRemove",paraId:4,tocIndex:24},{value:"A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject",paraId:4,tocIndex:24},{value:"function(file): boolean | Promise",paraId:4,tocIndex:24},{value:"-",paraId:4,tocIndex:24},{value:"Extends File with additional props.",paraId:8,tocIndex:25},{value:"Property",paraId:9,tocIndex:25},{value:"Description",paraId:9,tocIndex:25},{value:"Type",paraId:9,tocIndex:25},{value:"Default",paraId:9,tocIndex:25},{value:"Version",paraId:9,tocIndex:25},{value:"crossOrigin",paraId:9,tocIndex:25},{value:"CORS settings attributes",paraId:9,tocIndex:25},{value:"'anonymous'",paraId:9,tocIndex:25},{value:" | ",paraId:9,tocIndex:25},{value:"'use-credentials'",paraId:9,tocIndex:25},{value:" | ",paraId:9,tocIndex:25},{value:"''",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"4.20.0",paraId:9,tocIndex:25},{value:"name",paraId:9,tocIndex:25},{value:"File name",paraId:9,tocIndex:25},{value:"string",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"percent",paraId:9,tocIndex:25},{value:"Upload progress percent",paraId:9,tocIndex:25},{value:"number",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"status",paraId:9,tocIndex:25},{value:"Upload status. Show different style when configured",paraId:9,tocIndex:25},{value:"error",paraId:9,tocIndex:25},{value:" | ",paraId:9,tocIndex:25},{value:"done",paraId:9,tocIndex:25},{value:" | ",paraId:9,tocIndex:25},{value:"uploading",paraId:9,tocIndex:25},{value:" | ",paraId:9,tocIndex:25},{value:"removed",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"thumbUrl",paraId:9,tocIndex:25},{value:"Thumb image url",paraId:9,tocIndex:25},{value:"string",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"uid",paraId:9,tocIndex:25},{value:"unique id. Will auto-generate when not provided",paraId:9,tocIndex:25},{value:"string",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"url",paraId:9,tocIndex:25},{value:"Download url",paraId:9,tocIndex:25},{value:"string",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"-",paraId:9,tocIndex:25},{value:"\u{1F4A1} The function will be called when uploading is in progress, completed, or failed.",paraId:10,tocIndex:26},{value:"When uploading state change, it returns:",paraId:11,tocIndex:26},{value:"{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}\n",paraId:12,tocIndex:26},{value:"file",paraId:13,tocIndex:26},{value:" File object for the current operation.",paraId:13,tocIndex:26},{value:"{\n   uid: 'uid',      // unique identifier, negative is recommended, to prevent interference with internally generated id\n   name: 'xx.png',   // file name\n   status: 'done' | 'uploading' | 'error' | 'removed', // Intercepted file by beforeUpload doesn't have a status field.\n   response: '{\"status\": \"success\"}', // response from server\n   linkProps: '{\"download\": \"image\"}', // additional HTML props of file link\n   xhr: 'XMLHttpRequest{ ... }', // XMLHttpRequest Header\n}\n",paraId:14,tocIndex:26},{value:"fileList",paraId:15,tocIndex:26},{value:" current list of files",paraId:15,tocIndex:26},{value:"event",paraId:16,tocIndex:26},{value:" response from the server, including uploading progress, supported by advanced browsers.",paraId:16,tocIndex:26},{value:"You can consult ",paraId:17,tocIndex:29},{value:"jQuery-File-Upload",paraId:17,tocIndex:29},{value:" about how to implement server side upload interface.",paraId:17,tocIndex:29},{value:"There is a mock example of ",paraId:17,tocIndex:29},{value:"express",paraId:17,tocIndex:29},{value:" in rc-upload.",paraId:17,tocIndex:29},{value:"Please set property ",paraId:18,tocIndex:30},{value:"url",paraId:18,tocIndex:30},{value:" of each item in ",paraId:18,tocIndex:30},{value:"fileList",paraId:18,tocIndex:30},{value:" to control the content of the link.",paraId:18,tocIndex:30},{value:"customRequest",paraId:19},{value:"See ",paraId:20,tocIndex:31},{value:"https://github.com/react-component/upload#customrequest",paraId:20,tocIndex:31},{value:".",paraId:20,tocIndex:31},{value:"fileList",paraId:19},{value:"onChange",paraId:19},{value:"status",paraId:19},{value:"onChange",paraId:21,tocIndex:32},{value:" will only trigger when the file is in the list, it will ignore any events removed from the list. Please note that there does exist a bug which makes an event still trigger even when the file is not in the list before ",paraId:21,tocIndex:32},{value:"4.13.0",paraId:21,tocIndex:32},{value:".",paraId:21,tocIndex:32},{value:"onChange",paraId:19},{value:"For compatible case, we return File object when ",paraId:22,tocIndex:33},{value:"beforeUpload",paraId:22,tocIndex:33},{value:" return ",paraId:22,tocIndex:33},{value:"false",paraId:22,tocIndex:33},{value:". It will merge to ",paraId:22,tocIndex:33},{value:"{ originFileObj: File }",paraId:22,tocIndex:33},{value:" in the next major version. Current version is compatible to get origin file by ",paraId:22,tocIndex:33},{value:"info.file.originFileObj",paraId:22,tocIndex:33},{value:". You can change this before a major release.",paraId:22,tocIndex:33},{value:"Chrome update will also break native upload. Please restart Chrome to finish the upload job.",paraId:23,tocIndex:34},{value:"Ref:",paraId:24,tocIndex:34},{value:"#48007",paraId:25,tocIndex:34},{value:"#32672",paraId:25,tocIndex:34},{value:"#32913",paraId:25,tocIndex:34},{value:"#33988",paraId:25,tocIndex:34},{value:"Inside the upload component, we use the ",paraId:26,tocIndex:35},{value:"directory",paraId:26,tocIndex:35},{value:" and ",paraId:26,tocIndex:35},{value:"webkitdirectory",paraId:26,tocIndex:35},{value:" properties to control only directories can be selected. However, in Safari's implementation it doesn't seem to work. See ",paraId:26,tocIndex:35},{value:"here",paraId:26,tocIndex:35},{value:". Please try passing an additional ",paraId:26,tocIndex:35},{value:"accept",paraId:26,tocIndex:35},{value:" attribute that cannot match any files. For example:",paraId:26,tocIndex:35},{value:"accept: `.${'n'.repeat(100)}`;\n",paraId:27,tocIndex:35}];}}]);
//# sourceMappingURL=5e8bfec2-async.612bdc68.js.map