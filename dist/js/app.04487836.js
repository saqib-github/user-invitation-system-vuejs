(function(e){function n(n){for(var o,r,u=n[0],i=n[1],l=n[2],f=0,s=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==c[u]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-c2559c6c":"23d82310","chunk-ce9f2468":"786c92d5","chunk-eecd84be":"0a8e5534","chunk-dd338226":"5018846d","chunk-f8609130":"6867d266",about:"35fab2dd","chunk-959ba950":"99bebba7","chunk-1cf55a25":"b05b8dc2"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-c2559c6c":1,"chunk-ce9f2468":1,"chunk-f8609130":1,about:1,"chunk-959ba950":1,"chunk-1cf55a25":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({about:"about"}[e]||e)+"."+{"chunk-c2559c6c":"705e671b","chunk-ce9f2468":"0c32286b","chunk-eecd84be":"31d6cfe0","chunk-dd338226":"31d6cfe0","chunk-f8609130":"487f8d50",about:"01cf6fd8","chunk-959ba950":"e8e2e38d","chunk-1cf55a25":"013978cd"}[e]+".css",c=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===o||f===c))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===o||f===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),t(a)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,t[1](s)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view")],1)},c=[],a={name:"",components:{}},u=a,i=t("2877"),l=t("6544"),f=t.n(l),s=t("7496"),d=Object(i["a"])(u,r,c,!1,null,"c412d300",null),h=d.exports;f()(d,{VApp:s["a"]});t("d3b7"),t("3ca3"),t("ddb0");var p=t("8c4f");o["a"].use(p["a"]);var b=[{path:"/",name:"Dashboard",beforeEnter:function(e,n,t){console.log("token",o["a"].localStorage.get("token")),o["a"].localStorage.get("token")?(console.log("get"),t()):(console.log("not"),t({name:"LoginPage"}))},component:function(){return Promise.all([t.e("chunk-c2559c6c"),t.e("chunk-f8609130"),t.e("chunk-eecd84be"),t.e("chunk-1cf55a25")]).then(t.bind(null,"7277"))},children:[{path:"/inviteuser",name:"InviteUser",beforeEnter:function(e,n,t){console.log("token",o["a"].localStorage.get("token")),o["a"].localStorage.get("token")?(console.log("get"),t()):(console.log("not"),t({name:"LoginPage"}))},component:function(){return Promise.all([t.e("chunk-c2559c6c"),t.e("chunk-ce9f2468"),t.e("chunk-f8609130"),t.e("about")]).then(t.bind(null,"bc59"))}}]},{path:"/login",name:"LoginPage",component:function(){return Promise.all([t.e("chunk-c2559c6c"),t.e("chunk-ce9f2468"),t.e("chunk-f8609130"),t.e("chunk-959ba950")]).then(t.bind(null,"48ca"))}},{path:"/signup/:token?",name:"SignUpPage",component:function(){return Promise.all([t.e("chunk-c2559c6c"),t.e("chunk-ce9f2468"),t.e("chunk-eecd84be"),t.e("chunk-dd338226")]).then(t.bind(null,"d024"))}}],g=new p["a"]({mode:"history",base:"/",routes:b}),k=g,m=t("2f62"),v={getToken:function(e){return e.token}},y={setToken:function(e,n){e.token=n}},w={setToken:function(e,n){e.commit("setToken",n)}};o["a"].use(m["a"]);var P=new m["a"].Store({state:function(){return{token:null}},getters:v,mutations:y,actions:w}),S=t("f309");o["a"].use(S["a"]);var O=new S["a"]({}),j=t("ead5"),E=t.n(j),T=t("5b7e"),_=t.n(T);o["a"].use(E.a,{name:"localStorage",bind:!0}),new o["a"]({component:{Spinner:_.a}}),o["a"].config.productionTip=!1,new o["a"]({router:k,store:P,vuetify:O,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.04487836.js.map