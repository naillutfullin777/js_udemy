!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=37)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(25),i=r(14),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(11)("wks"),o=r(8),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(45),o=r(29);t.exports=function(t){return e(o(t))}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(10),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(13)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=r(16),i=r(6),u=r(8)("src"),c=r(41),f=(""+c).split("toString");r(10).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n){t.exports=!1},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(10),i=r(16),u=r(12),c=r(27),f=function(t,n,r){var a,s,l,p,y=t&f.F,v=t&f.G,h=t&f.S,b=t&f.P,g=t&f.B,d=v?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),O=m.prototype||(m.prototype={});for(a in v&&(r=n),r)l=((s=!y&&d&&void 0!==d[a])?d:r)[a],p=g&&s?c(l,e):b&&"function"==typeof l?c(Function.call,l):l,d&&u(d,a,l,t&f.U),m[a]!=l&&i(m,a,p),b&&O[a]!=l&&(O[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,r){var e=r(4),o=r(17);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(28),o=r(21);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(0),o=r(10),i=r(13),u=r(24),c=r(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){n.f=r(7)},function(t,n,r){t.exports=!r(3)&&!r(5)((function(){return 7!=Object.defineProperty(r(26)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(18);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(6),o=r(9),i=r(46)(!1),u=r(31)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(11)("keys"),o=r(8);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=r(51),i=r(21),u=r(31)("IE_PROTO"),c=function(){},f=function(){var t,n=r(26)("iframe"),e=i.length;for(n.style.display="none",r(52).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(28),o=r(21).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(22),o=r(17),i=r(9),u=r(14),c=r(6),f=r(25),a=Object.getOwnPropertyDescriptor;n.f=r(3)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}},function(t,n,r){"use strict";var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(38);new e.Slider(400,400,4).whoAmI(),console.log((0,e.button)())},function(t,n,r){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function s(t,n,r){return n&&a(t.prototype,n),r&&a(t,r),t}Object.defineProperty(n,"__esModule",{value:!0}),n.button=function(){return"button"},n.Slider=void 0,r(39),r(40),r(54),r(56),r(58),r(60);var l=function(){function t(n,r,e){f(this,t),this.width=n,this.height=r,this.count=e}return s(t,[{key:"nextSlide",value:function(){console.log("Moving forward")}},{key:"prevSlide",value:function(){console.log("Moving back")}},{key:"whoAmI",value:function(){console.log(this.width,this.height,this.count)}}]),t}();n.Slider=l;var p=new l(600,400,5),y=new l(500,300,4);p.whoAmI(),y.whoAmI(),new(function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}(e,t);var n,r=(n=e,function(){var t,r=c(n);if(u()){var e=c(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return i(this,t)});function e(t,n,o,i){var u;return f(this,e),(u=r.call(this,t,n,o)).auto=i,u}return s(e,[{key:"play",value:function(){console.log("This autoplay: ".concat(this.auto))}}]),e}(l))(300,400,4,!0).play()},function(t,n,r){r(23)("asyncIterator")},function(t,n,r){"use strict";var e=r(0),o=r(6),i=r(3),u=r(15),c=r(12),f=r(42).KEY,a=r(5),s=r(11),l=r(43),p=r(8),y=r(7),v=r(24),h=r(23),b=r(44),g=r(49),d=r(1),m=r(2),O=r(50),w=r(9),S=r(14),x=r(17),j=r(33),_=r(53),P=r(35),E=r(32),F=r(4),M=r(19),T=P.f,k=F.f,R=_.f,I=e.Symbol,N=e.JSON,A=N&&N.stringify,C=y("_hidden"),D=y("toPrimitive"),z={}.propertyIsEnumerable,W=s("symbol-registry"),J=s("symbols"),G=s("op-symbols"),K=Object.prototype,U="function"==typeof I&&!!E.f,B=e.QObject,Y=!B||!B.prototype||!B.prototype.findChild,L=i&&a((function(){return 7!=j(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=T(K,n);e&&delete K[n],k(t,n,r),e&&t!==K&&k(K,n,e)}:k,Q=function(t){var n=J[t]=j(I.prototype);return n._k=t,n},q=U&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},H=function(t,n,r){return t===K&&H(G,n,r),d(t),n=S(n,!0),d(r),o(J,n)?(r.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),r=j(r,{enumerable:x(0,!1)})):(o(t,C)||k(t,C,x(1,{})),t[C][n]=!0),L(t,n,r)):k(t,n,r)},V=function(t,n){d(t);for(var r,e=b(n=w(n)),o=0,i=e.length;i>o;)H(t,r=e[o++],n[r]);return t},X=function(t){var n=z.call(this,t=S(t,!0));return!(this===K&&o(J,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(J,t)||o(this,C)&&this[C][t])||n)},Z=function(t,n){if(t=w(t),n=S(n,!0),t!==K||!o(J,n)||o(G,n)){var r=T(t,n);return!r||!o(J,n)||o(t,C)&&t[C][n]||(r.enumerable=!0),r}},$=function(t){for(var n,r=R(w(t)),e=[],i=0;r.length>i;)o(J,n=r[i++])||n==C||n==f||e.push(n);return e},tt=function(t){for(var n,r=t===K,e=R(r?G:w(t)),i=[],u=0;e.length>u;)!o(J,n=e[u++])||r&&!o(K,n)||i.push(J[n]);return i};U||(c((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(r){this===K&&n.call(G,r),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),L(this,t,x(1,r))};return i&&Y&&L(K,t,{configurable:!0,set:n}),Q(t)}).prototype,"toString",(function(){return this._k})),P.f=Z,F.f=H,r(34).f=_.f=$,r(22).f=X,E.f=tt,i&&!r(13)&&c(K,"propertyIsEnumerable",X,!0),v.f=function(t){return Q(y(t))}),u(u.G+u.W+u.F*!U,{Symbol:I});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)y(nt[rt++]);for(var et=M(y.store),ot=0;et.length>ot;)h(et[ot++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=I(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),u(u.S+u.F*!U,"Object",{create:function(t,n){return void 0===n?j(t):V(j(t),n)},defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=a((function(){E.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return E.f(O(t))}}),N&&u(u.S+u.F*(!U||a((function(){var t=I();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){for(var n,r,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(r=n=e[1],(m(n)||void 0!==t)&&!q(t))return g(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!q(n))return n}),e[1]=n,A.apply(N,e)}}),I.prototype[D]||r(16)(I.prototype,D,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(11)("native-function-to-string",Function.toString)},function(t,n,r){var e=r(8)("meta"),o=r(2),i=r(6),u=r(4).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(5)((function(){return f(Object.preventExtensions({}))})),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,e)&&s(t),t}}},function(t,n,r){var e=r(4).f,o=r(6),i=r(7)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(19),o=r(32),i=r(22);t.exports=function(t){var n=e(t),r=o.f;if(r)for(var u,c=r(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,r){var e=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(9),o=r(47),i=r(48);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(30),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(30),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(20);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(29);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(4),o=r(1),i=r(19);t.exports=r(3)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(0).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(9),o=r(34).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(15);e(e.S,"Object",{setPrototypeOf:r(55).set})},function(t,n,r){var e=r(2),o=r(1),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(27)(Function.call,r(35).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},function(t,n,r){"use strict";r(57);var e=r(1),o=r(36),i=r(3),u=/./.toString,c=function(t){r(12)(RegExp.prototype,"toString",t,!0)};r(5)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&c((function(){return u.call(this)}))},function(t,n,r){r(3)&&"g"!=/./g.flags&&r(4).f(RegExp.prototype,"flags",{configurable:!0,get:r(36)})},function(t,n,r){"use strict";var e=r(59),o={};o[r(7)("toStringTag")]="z",o+""!="[object z]"&&r(12)(Object.prototype,"toString",(function(){return"[object "+e(this)+"]"}),!0)},function(t,n,r){var e=r(20),o=r(7)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(15),o=r(33),i=r(18),u=r(1),c=r(2),f=r(5),a=r(61),s=(r(0).Reflect||{}).construct,l=f((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),p=!f((function(){s((function(){}))}));e(e.S+e.F*(l||p),"Reflect",{construct:function(t,n){i(t),u(n);var r=arguments.length<3?t:i(arguments[2]);if(p&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(a.apply(t,e))}var f=r.prototype,y=o(c(f)?f:Object.prototype),v=Function.apply.call(t,y,n);return c(v)?v:y}})},function(t,n,r){"use strict";var e=r(18),o=r(2),i=r(62),u=[].slice,c={},f=function(t,n,r){if(!(n in c)){for(var e=[],o=0;o<n;o++)e[o]="a["+o+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?f(n,e.length,e):i(n,e,t)};return o(n.prototype)&&(c.prototype=n.prototype),c}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}}]);