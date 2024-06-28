"use strict";var t=require("commander"),e=require("chalk"),r=require("express"),n=require("@ovometajs/utils"),o=require("http-proxy-middleware");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})),e.default=t,Object.freeze(e)}var c=i(e),u=i(r);function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=Object.create((e&&e.prototype instanceof m?e:m).prototype),a=new N(n||[]);return o(i,"_invoke",{value:_(t,r,a)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",v="suspendedYield",d="executing",y="completed",g={};function m(){}function w(){}function b(){}var x={};s(x,a,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(G([])));E&&E!==r&&n.call(E,a)&&(x=E);var k=b.prototype=m.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?y:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(k),s(k,u,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}var h=console.log,p=function(){var t=l(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h("hello ".concat(c.default.bold.red(e),", it's happy to meet you!"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function v(){return d.apply(this,arguments)}function d(){return d=l(f().mark((function t(){var e,r,i,c,s,h,p,v,d,y,g,m=arguments;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=void 0===(r=(e=m.length>0&&void 0!==m[0]?m[0]:{}).apiTarget)?"https://www.zhihu.com/api":r,s=void 0===(c=e.staticTarget)?"https://www.zhihu.com/static":c,p=void 0===(h=e.root)?process.cwd():h,v=u.default(),d=o.createProxyMiddleware({target:i,changeOrigin:!0}),y=o.createProxyMiddleware({target:s,changeOrigin:!0}),t.next=6,Promise.resolve().then((function(){return a(require("vite"))}));case 6:return t.next=8,t.sent.createServer({base:"/mock/",root:p,logLevel:"info",server:{middlewareMode:!0,watch:{usePolling:!0,interval:100},hmr:{}},appType:"custom"});case 8:return v.use((g=t.sent).middlewares),v.use("*",function(){var t=l(f().mark((function t(e,r,n){var o;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(o=e.originalUrl)||!/^\/api/.test(o||"")){t.next=5;break}return n(),t.abrupt("return");case 5:r.status(200).set({"Content-Type":"text/html"}).end("Hello World!"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0 instanceof Error&&(g&&g.ssrFixStacktrace(t.t0),r.status(500).end(t.t0.stack));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r,n){return t.apply(this,arguments)}}()),n.getMockData("mock").forEach((function(t){v.use("/api".concat(t.apiPath),(function(e,r){r.status(200).send(JSON.parse(t.jsonStr))}))})),v.use("/api",d),v.use("/static",y),t.abrupt("return",{app:v,vite:g});case 16:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}var y=new t.Command;y.name("ovo-cli").description("ovo cli tools").version("0.0.4"),function(t){t.command("hello").description("hello commander").argument("<string>","console name").action(p)}(y),function(t){var e=function(){var e=l(f().mark((function e(r,n){var o,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.opts(),i=o.port||6173,v({apiTarget:r,staticTarget:n}).then((function(t){return t.app.listen(i,(function(){console.log(c.default.green.underline("http://localhost:".concat(i)))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.option("-p, --port <port>","mock port"),t.command("mock").description("start a mock manage").arguments("[apiTarget] [staticTarget]").action(e)}(y),y.parse(process.argv);
//# sourceMappingURL=index.js.map
