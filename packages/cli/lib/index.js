"use strict";var t=require("commander"),r=require("chalk"),e=require("express"),n=require("@ovometajs/utils"),o=require("http-proxy-middleware");function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function c(){c=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=Object.create((r&&r.prototype instanceof m?r:m).prototype),a=new N(n||[]);return o(i,"_invoke",{value:_(t,e,a)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",v="suspendedYield",d="executing",y="completed",g={};function m(){}function w(){}function x(){}var b={};l(b,a,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(G([])));E&&E!==e&&n.call(E,a)&&(b=E);var k=x.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?y:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function T(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,T(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return w.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},O(j.prototype),l(j.prototype,u,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(k),l(k,s,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var u=console.log,s=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u("hello ".concat(r.bold.red(e),", it's happy to meet you!"));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();function l(){return h.apply(this,arguments)}function h(){return h=a(c().mark((function t(){var r,i,u,s,l,h,f,p,v,d,y,g=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=void 0===(i=(r=g.length>0&&void 0!==g[0]?g[0]:{}).apiTarget)?"https://www.zhihu.com/api":i,l=void 0===(s=r.staticTarget)?"https://www.zhihu.com/static":s,f=void 0===(h=r.root)?process.cwd():h,p=e(),v=o.createProxyMiddleware({target:u,changeOrigin:!0}),d=o.createProxyMiddleware({target:l,changeOrigin:!0}),t.next=6,import("vite");case 6:return t.next=8,t.sent.createServer({base:"/mock/",root:f,logLevel:"info",server:{middlewareMode:!0,watch:{usePolling:!0,interval:100},hmr:{}},appType:"custom"});case 8:return p.use((y=t.sent).middlewares),p.use("*",function(){var t=a(c().mark((function t(r,e,n){var o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(o=r.originalUrl)||!/^\/api/.test(o||"")){t.next=5;break}return n(),t.abrupt("return");case 5:e.status(200).set({"Content-Type":"text/html"}).end("Hello World!"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0 instanceof Error&&(y&&y.ssrFixStacktrace(t.t0),e.status(500).end(t.t0.stack));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r,e,n){return t.apply(this,arguments)}}()),n.getMockData("mock").forEach((function(t){p.use("/api".concat(t.apiPath),(function(r,e){e.status(200).send(JSON.parse(t.jsonStr))}))})),p.use("/api",v),p.use("/static",d),t.abrupt("return",{app:p,vite:y});case 16:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}var f=new t.Command;f.name("ovo-cli").description("ovo cli tools").version("0.0.4"),function(t){t.command("hello").description("hello commander").argument("<string>","console name").action(s)}(f),function(t){var e=function(){var e=a(c().mark((function e(n,o){var i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.opts(),a=i.port||6173,l({apiTarget:n,staticTarget:o}).then((function(t){return t.app.listen(a,(function(){console.log(r.green.underline("http://localhost:".concat(a)))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.option("-p, --port <port>","mock port"),t.command("mock").description("start a mock manage").arguments("[apiTarget] [staticTarget]").action(e)}(f),f.parse(process.argv);
//# sourceMappingURL=index.js.map
