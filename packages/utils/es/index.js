import r from"glob";import t from"path";import n from"fs";function e(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(r)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=i.call(n)).done)&&(l.push(e.value),l.length!==t);u=!0);}catch(f){c=!0,o=f}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return o(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var i=function(o){return r.sync(t.resolve(process.cwd(),o,"**/*.json")).map((function(r){return{apiPath:e(r.split(o),2)[1].replace(/.json/,""),jsonStr:n.readFileSync(r).toString()}}))};export{i as getMockData};
//# sourceMappingURL=index.js.map
