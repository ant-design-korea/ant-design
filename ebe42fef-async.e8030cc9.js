(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ebe42fef"],{ebe42fef:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"texts",{enumerable:!0,get:function(){return n;}}),a("8ea5d534");let n=[{value:"On November 18, 2022, we released Ant Design 5.0. At the same time, Ant Design's unique CSS-in-JS solution was brought into everyone's view. Through this solution, Ant Design achieves higher performance than other CSS-in-JS libraries, but at the cost of sacrificing its flexibility for free use in applications. So we call it a \"component-level\" CSS-in-JS solution. ",paraId:0},{value:"In CSS-in-JS, hash is used to confirm whether a style has been inserted. The way to calculate the hash is usually to convert a complete css into a hash value. For example, in emotion, we can see such a style tag by checking the elements on the page. The hash value corresponding to such a style tag is unique:",paraId:1,tocIndex:0},{value:"In this way, you can find a problem that CSS-in-JS has been criticized for a long time. What we write when coding is not the final css. So every time we need to serialize to get the css and calculate the hash again. If your page or component has a very complex or a large amount of CSS-in-JS code, and even the style will follow the component's props change, then this performance issue becomes non-negligible.",paraId:1,tocIndex:0},{value:"To solve this problem, each CSS-in-JS library will have its own way to deal with it. Let\u2019s take a look at Ant Design\u2019s solution. ",paraId:1,tocIndex:0},{value:"In fact, it is not difficult for us to find that the problem lies in the process of serializing css. How about reducing the times of serializing css by caching? For application-level CSS-in-JS, it is difficult for us to find a suitable key for cache. But if it is a component library, the final style is relatively stable. ",paraId:2,tocIndex:1},{value:"According to the style structure we determined from v4 and previous versions, the style of each component will not change under the same theme variable and the same version. Conversely, the style may change only if the theme variable is modified, or the version of antd is changed. ",paraId:2,tocIndex:1},{value:"From this we get a very simple way to calculate the hash:",paraId:2,tocIndex:1},{value:"We will apply the ",paraId:2,tocIndex:1},{value:"same",paraId:2,tocIndex:1},{value:" ",paraId:2,tocIndex:1},{value:"hash",paraId:2,tocIndex:1},{value:" to all antd components. In this way, when using the antd component, we only perform hash calculations on the current version and theme variables. Version can be obtained directly from ",paraId:2,tocIndex:1},{value:"package.json",paraId:2,tocIndex:1},{value:", and theme variables can be obtained directly from context. So we don't need to serialize css again and again to get a stable hash, and the performance is improved finally. ",paraId:2,tocIndex:1},{value:'In the above way, we have taken the first step of "component level" CSS-in-JS, but this is not enough. Since it is "component level", we can also optimize it again with components.',paraId:3,tocIndex:2},{value:"In Ant Design, the style of a component is usually complete. That is to say, no matter what variant the component has, its style exist in the whole component style. In this way, we can draw a conclusion again: the props of antd components will not affect the component style. ",paraId:3,tocIndex:2},{value:'This is very important. In the application-level CSS-in-JS solution, since props may affect the component style, it is inevitable that the component style will be regenerated during the rendering phase. No matter how to optimize this point, it cannot be ignored. Now that we have adopted a "component-level" solution, this problem can be easily solved: do style caching for components.',paraId:3,tocIndex:2},{value:'In the case of the same hash, no matter how many times the same component is used and rendered, the style will only be generated once at the first mount, and will hit the cache for the rest of the time. This is the second insurance for "component level" CSS-in-JS solutions. ',paraId:3,tocIndex:2},{value:"At the release of Ant Design 5.0, we simply made a benchmark, and here are some supplementary instructions:",paraId:4,tocIndex:3},{value:'The benchmark is based on generating a very long unchanging style to test the performance of basic usage of the three libraries. It can be seen that under the "component level" usage scenario of Ant Design, @ant-design/cssinjs has a performance advantage whether it is the first rendering or the second rendering. Since styled has certain optimizations when dealing with stable styles, the performance of secondary rendering in this benchmark is better, but it will still be affected by recalculation like emotion when props participate in style calculation. ',paraId:4,tocIndex:3},{value:'In the above comparison, it cannot be said that antd is definitely better than styled and emotion, but in the component-level usage scenarios, we have made corresponding optimizations to obtain performance advantages. Conversely, due to the limitation of "component level", antd\'s CSS-in-JS solution is not suitable for construction applications.',paraId:5,tocIndex:4},{value:'Due to the special hash calculation method and component cache, when applying antd\'s CSS-in-JS solution, developers must provide stable hash and unique component names by themselves. For applications, automatic hash capabilities such as css modules are more needed. At the same time, caching a large number of components in the application also requires additional management costs. Once an error occurs, it is difficult to troubleshoot. Therefore, we recommend using the "component-level" CSS-in-JS solution in component libraries.',paraId:5,tocIndex:4}];}}]);
//# sourceMappingURL=ebe42fef-async.e8030cc9.js.map