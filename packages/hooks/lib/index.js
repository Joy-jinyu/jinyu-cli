"use strict";var r=require("react");exports.useCallbackRef=function(e){var t=r.useRef(e);return r.useLayoutEffect((function(){t.current=e})),r.useCallback((function(){for(var r,e=arguments.length,u=new Array(e),n=0;n<e;n++)u[n]=arguments[n];return null===(r=t.current)||void 0===r?void 0:r.call.apply(r,[t].concat(u))}),[])};
//# sourceMappingURL=index.js.map
