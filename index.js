// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,g,m;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||a.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),g="get"in l,m="set"in l,f&&(g||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return g&&o&&o.call(t,e,l.get),m&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return g&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,s=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"",b=m()?function(t){var e,r,n,o,i;if(null==t)return p.call(t);r=t[y],i=y,e=null!=(o=t)&&s.call(o,i);try{t[y]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[y]=r:delete t[y],n}:function(t){return p.call(t)},v=Number,d=v.prototype.toString,h=m();function _(t){return"object"==typeof t&&(t instanceof v||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function w(t){return f(t)||_(t)}c(w,"isPrimitive",f),c(w,"isObject",_);var j=Number.POSITIVE_INFINITY,S=v.NEGATIVE_INFINITY,O=Math.floor;function T(t){return t<j&&t>S&&O(e=t)===e;var e}function E(t){return f(t)&&T(t)}function P(t){return _(t)&&T(t.valueOf())}function I(t){return E(t)||P(t)}function V(t){return E(t)&&t>=0}function N(t){return P(t)&&t.valueOf()>=0}function x(t){return V(t)||N(t)}function F(t){return"string"==typeof t}c(I,"isPrimitive",E),c(I,"isObject",P),c(x,"isPrimitive",V),c(x,"isObject",N);var A=String.prototype.valueOf,G=m();function R(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function k(t){return F(t)||R(t)}c(k,"isPrimitive",F),c(k,"isObject",R);var M=9007199254740991;function Y(t,e){var r,n;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!V(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===t.length||0===e)return"";if(t.length*e>M)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(r="",n=e;1==(1&n)&&(r+=t),0!=(n>>>=1);)t+=t;return r}var B=Math.ceil;return function(t){var e;return e=function(t){var e,r,n="";for(e=16;t>0&&e;)n=(r=t/2)===(t=O(r))?"0"+n:"1"+n,e-=1;return n}(t),e=function(t,e,r){var n,o;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!V(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(arguments.length>2){if(!F(o=r))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+o+"`.");if(0===o.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else o=" ";if(e>M)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(e-t.length)/o.length)<=0?t:Y(o,n=B(n))+t}(e,16,"0"),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).toBinaryString=e();
//# sourceMappingURL=index.js.map
