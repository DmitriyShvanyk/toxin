!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function e(t){var n=t.domElemCollapse,o=t.domElemBtn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domElemCollapse=document.querySelector(n),this.domElemBtn=document.querySelector(o),this.toggle=this.toggle.bind(this),this.close=this.close.bind(this),this.domElemBtn.addEventListener("click",this.toggle)}var t,n,r;return t=e,(n=[{key:"toggle",value:function(){this.domElemCollapse.classList.toggle("navbar__collapse--open"),this.domElemBtn.classList.toggle("navbar__hamburger--open")}},{key:"close",value:function(){this.domElemCollapse.classList.remove("navbar__collapse--open"),this.domElemBtn.classList.remove("navbar__hamburger--open")}}])&&o(t.prototype,n),r&&o(t,r),e}())({domElemCollapse:".navbar__collapse",domElemBtn:".navbar__hamburger"});var r=document.querySelector(".footer__years");r.textContent="".concat((new Date).getFullYear())}]);