!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("search-field"),t=document.querySelector(".list-countries");var n,r,o,i=4;r=listOfCountries.length,o=0,listOfCountries.forEach((function(e,c){c%Math.ceil(r/i)==0&&(n="list-".concat(o),t.innerHTML+="<ul id='".concat(n,"'></ul>"),o++),document.getElementById("".concat(n)).innerHTML+="<li onclick=\"fetchData('".concat(e.name,'\')" id="').concat(e.name,'">\n                ').concat(e.name,"\n            </li>")})),t.addEventListener("click",(function(){e.value="",t.classList.toggle("hide")})),e.addEventListener("input",(function(){t.classList.remove("hide")})),e.addEventListener("input",(function(){var t=e.value.toUpperCase();listOfCountries.forEach((function(e){e.name.toUpperCase().startsWith(t)?document.getElementById(e.name).classList.remove("hide"):document.getElementById(e.name).classList.add("hide")}))}))}))}]);
//# sourceMappingURL=main.js.map