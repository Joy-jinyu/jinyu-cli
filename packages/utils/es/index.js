import r from"glob";import t from"path";import n from"fs";function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++)e[n]=r[n];return e}function o(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(r)).next,0===t);else for(;!(u=(e=a.call(n)).done)&&(l.push(e.value),l.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,t)||function(r,t){if(r){if("string"==typeof r)return e(r,t);var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=function(e){return r.sync(t.resolve(process.cwd(),e,"**/*.json")).map((function(r){return{apiPath:o(r.split(e),2)[1].replace(/.json/,""),jsonStr:n.readFileSync(r).toString()}}))};export{a as getMockData};
//# sourceMappingURL=index.js.map
