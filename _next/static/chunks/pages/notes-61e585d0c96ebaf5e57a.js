_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"8oxB":function(t,n){var e,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&b())}function b(){if(!s){var t=c(p);s=!0;for(var n=f.length;n;){for(a=f,f=[];++l<n;)a&&a[l].run();l=-1,n=f.length}a=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function y(){}o.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];f.push(new h(t,n)),1!==f.length||s||c(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("a3WO");function o(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},Ff2n:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("zLVn");function o(t,n){if(null==t)return{};var e,o,i=Object(r.a)(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)e=u[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},KQm4:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("a3WO");var o=e("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},TSYQ:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var c in r)e.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},sWcX:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return f}));var r=e("QpBz"),o=e.n(r),i=e("q1tI"),u=e.n(i),c=e("nOHt"),a=u.a.createElement,f=!0;n.default=function(t){var n=t.latestNid,e=Object(c.useRouter)();return Object(i.useEffect)((function(){o.a.info("\u6b63\u5728\u8df3\u5f80\u81f3\u6700\u65b0, \u8bf7\u7b49\u5f85"),e.replace("/notes/[id]","/notes/".concat(n),{shallow:!0})}),[]),a("main",null)}},vCc3:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes",function(){return e("sWcX")}])},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},zLVn:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,"a",(function(){return r}))}},[["vCc3",0,2,1,8]]]);