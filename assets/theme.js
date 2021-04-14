
window.themeInfo = {name: "Testament"};

(function vendorLazySizes() {
  /*! lazysizes - v4.0.1 */
  !function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=125,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&d.ricTimeout?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d&&m?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});

  /*! lazysizes Bgset - v4.0.1 */
  !function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,g=/\(|\)|'/,h={contain:1,cover:1},i=function(a){var b=c.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},j=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!h[b]&&h[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},k=function(a,c,g){var h=b.createElement("picture"),i=c.getAttribute(lazySizesConfig.sizesAttr),j=c.getAttribute("data-ratio"),k=c.getAttribute("data-optimumx");c._lazybgset&&c._lazybgset.parentNode==c&&c.removeChild(c._lazybgset),Object.defineProperty(g,"_lazybgset",{value:c,writable:!0}),Object.defineProperty(c,"_lazybgset",{value:h,writable:!0}),a=a.replace(d," ").split(e),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=a.length||i||(i="auto"),a.forEach(function(a){var c=b.createElement("source");i&&"auto"!=i&&c.setAttribute("sizes",i),a.match(f)&&(c.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&c.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(c)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),c.removeAttribute(lazySizesConfig.sizesAttr),c.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),c.appendChild(h)},l=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;e&&(d.style.backgroundImage="url("+(g.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,k(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&l({target:e})})}))}),b.addEventListener("load",l,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=j(b);h[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=i(a.target._lazybgset))})}});

  /*! lazysizes rias - v4.0.1 */
  !function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,d=function(){},e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:d,widthmap:{},ratio:!1};i=c&&c.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in e)b in j||(j[b]=e[b])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,o,p,q,s,t,u,x;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(q)){if(d=h(b),e=g(b,d),t=n.test(e.prefix)||n.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,o=l.length;o>m;m++)(t||n.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||n.test(d)?(f(d,e,b),u=!0):u&&(x=[],x.srcset=[],x.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:x,writable:!0})),u&&(v?b.removeAttribute(i.srcAttr):"auto"!=q&&(s={width:parseInt(q,10)},w({target:b,detail:s})))}}},!0);var w=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",j):void(("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width),e&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))))}};return v?j=function(){}:addEventListener("lazybeforesizes",j),j}()});

})();
(function vendorCookies() {
  !function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});
})();
(function vendorPhotoSwipe() {
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&g<8&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(i<4.4&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;n<4;n++){c=m[n];for(var o=0;o<3;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma=function(){return{x:0,y:0}},na=ma(),oa=ma(),pa=ma(),qa={},ra=0,sa={},ta=ma(),ua=0,va=!0,wa=[],xa={},ya=!1,za=function(a,b){e.extend(f,b.publicMethods),wa.push(a)},Aa=function(a){var b=ac();return a>b-1?a-b:a<0?b+a:a},Ba={},Ca=function(a,b){return Ba[a]||(Ba[a]=[]),Ba[a].push(b)},Da=function(a){var b=Ba[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Ea=function(){return(new Date).getTime()},Fa=function(a){ja=a,f.bg.style.opacity=a*i.bgOpacity},Ga=function(a,b,c,d,e){(!ya||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ha=function(a){ea&&(a&&(s>f.currItem.fitRatio?ya||(mc(f.currItem,!1,!0),ya=!0):ya&&(mc(f.currItem),ya=!1)),Ga(ea,pa.x,pa.y,s))},Ia=function(a){a.container&&Ga(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ja=function(a,b){b[E]=u+a+"px, 0px"+v},Ka=function(a,b){if(!i.loop&&b){var c=m+(ta.x*ra-a)/ta.x,d=Math.round(a-tb.x);(c<0&&d>0||c>=ac()-1&&d<0)&&(a=tb.x+d*i.mainScrollEndFriction)}tb.x=a,Ja(a,n)},La=function(a,b){var c=ub[a]-sa[a];return oa[a]+na[a]+c-c*(b/t)},Ma=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Na=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Oa=null,Pa=function(){Oa&&(e.unbind(document,"mousemove",Pa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Da("mouseUsed")),Oa=setTimeout(function(){Oa=null},100)},Qa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Pa),e.bind(window,"resize scroll orientationchange",f),Da("bindEvents")},Ra=function(){e.unbind(window,"resize scroll orientationchange",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Pa),N.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),clearTimeout(O),Da("unbindEvents")},Sa=function(a,b){var c=ic(f.currItem,qa,a);return b&&(da=c),c},Ta=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ua=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Va=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=La(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]&&(c[a]=b.max[a],!0))},Wa=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ja=function(a,b){b.left=a+"px"},Ia=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ha=function(){if(ea){var a=ea,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pa.x+"px",a.top=pa.y+"px"}}},Xa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Ya=function(a){a&&(Y||X||fa||T)&&(a.preventDefault(),a.stopPropagation())},Za=function(){f.setScrollOffset(0,e.getScrollY())},$a={},_a=0,ab=function(a){$a[a]&&($a[a].raf&&I($a[a].raf),_a--,delete $a[a])},bb=function(a){$a[a]&&ab(a),$a[a]||(_a++,$a[a]={})},cb=function(){for(var a in $a)$a.hasOwnProperty(a)&&ab(a)},db=function(a,b,c,d,e,f,g){var h,i=Ea();bb(a);var j=function(){if($a[a]){if(h=Ea()-i,h>=d)return ab(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),$a[a].raf=H(j)}};j()},eb={shout:Da,listen:Ca,viewportSize:qa,options:i,isMainScrollAnimating:function(){return fa},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return aa},setScrollOffset:function(a,b){sa.x=a,M=sa.y=b,Da("updateScrollOffset",sa)},applyZoomPan:function(a,b,c,d){pa.x=b,pa.y=c,s=a,Ha(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Wa(),r={resize:f.updateSize,orientationchange:function(){clearTimeout(O),O=setTimeout(function(){qa.x!==f.scrollWrap.clientWidth&&f.updateSize()},500)},scroll:Za,keydown:Xa,click:Ya};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<wa.length;c++)f["init"+wa[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Da("firstUpdate"),m=m||i.index||0,(isNaN(m)||m<0||m>=ac())&&(m=0),f.currItem=_b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(va=!1),a.setAttribute("aria-hidden","false"),i.modal&&(va?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Da("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ua=null,c=0;c<h;c++)Ja((c+o)*ta.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ca("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Qa()}),f.setContent(y[1],m),f.updateCurrItem(),Da("afterInit"),va||(w=setInterval(function(){_a||V||aa||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Da("close"),Ra(),cc(f.currItem,null,!0,f.destroy))},destroy:function(){Da("destroy"),Xb&&clearTimeout(Xb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),zb(),cb(),Ba=null},panTo:function(a,b,c){c||(a>da.min.x?a=da.min.x:a<da.max.x&&(a=da.max.x),b>da.min.y?b=da.min.y:b<da.max.y&&(b=da.max.y)),pa.x=a,pa.y=b,Ha()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=Aa(a);var b=a-m;ua=b,m=a,f.currItem=_b(m),ra-=b,Ka(ta.x*ra),cb(),fa=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Da("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];ea=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else ea=null;da=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pa.x=da.center.x,pa.y=da.center.y,a&&Da("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;a<h;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ua){var b,c=Math.abs(ua);if(!(a&&c<2)){f.currItem=_b(m),ya=!1,Da("beforeChange",ua),c>=h&&(o+=ua+(ua>0?-h:h),c=h);for(var d=0;d<c;d++)ua>0?(b=y.shift(),y[h-1]=b,o++,Ja((o+2)*ta.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ja(o*ta.x,b.el.style),f.setContent(b,m+c-d-1-1));if(ea&&1===Math.abs(ua)){var e=_b(z);e.initialZoomLevel!==s&&(ic(e,qa),mc(e),Ia(e))}ua=0,f.updateCurrZoomItem(),z=m,Da("afterChange")}}},updateSize:function(b){if(!va&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&xa.x===window.innerWidth&&xa.y===window.innerHeight)return;xa.x=window.innerWidth,xa.y=window.innerHeight,a.style.height=xa.y+"px"}if(qa.x=f.scrollWrap.clientWidth,qa.y=f.scrollWrap.clientHeight,Za(),ta.x=qa.x+Math.round(qa.x*i.spacing),ta.y=qa.y,Ka(ta.x*ra),Da("beforeResize"),void 0!==o){for(var d,g,j,k=0;k<h;k++)d=y[k],Ja((k+o)*ta.x,d.el.style),j=m+k-1,i.loop&&ac()>2&&(j=Aa(j)),g=_b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):d.index===-1&&j>=0&&f.setContent(d,j),g&&g.container&&(ic(g,qa),mc(g),Ia(g));x=!1}t=s=f.currItem.initialZoomLevel,da=f.currItem.bounds,da&&(pa.x=da.center.x,pa.y=da.center.y,Ha(!0)),Da("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,ub.x=Math.abs(b.x)-pa.x,ub.y=Math.abs(b.y)-pa.y,Ma(oa,pa));var g=Sa(a,!1),h={};Va("x",g,h,a),Va("y",g,h,a);var i=s,j={x:pa.x,y:pa.y};Na(h);var k=function(b){1===b?(s=a,pa.x=h.x,pa.y=h.y):(s=(a-i)*b+i,pa.x=(h.x-j.x)*b+j.x,pa.y=(h.y-j.y)*b+j.y),f&&f(b),Ha(1===b)};c?db("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},fb=30,gb=10,hb={},ib={},jb={},kb={},lb={},mb=[],nb={},ob=[],pb={},qb=0,rb=ma(),sb=0,tb=ma(),ub=ma(),vb=ma(),wb=function(a,b){return a.x===b.x&&a.y===b.y},xb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},yb=function(a,b){return pb.x=Math.abs(a.x-b.x),pb.y=Math.abs(a.y-b.y),Math.sqrt(pb.x*pb.x+pb.y*pb.y)},zb=function(){Z&&(I(Z),Z=null)},Ab=function(){V&&(Z=H(Ab),Qb())},Bb=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Cb=function(a,b){return!(!a||a===document)&&(!(a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(b(a)?a:Cb(a.parentNode,b)))},Db={},Eb=function(a,b){return Db.prevent=!Cb(a.target,i.isClickableElement),Da("preventDragEvent",a,b,Db),Db.prevent},Fb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Gb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Hb=function(a,b,c){if(a-Q>50){var d=ob.length>2?ob.shift():{};d.x=b,d.y=c,ob.push(d),Q=a}},Ib=function(){var a=pa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qa.y/2))},Jb={},Kb={},Lb=[],Mb=function(a){for(;Lb.length>0;)Lb.pop();return F?(la=0,mb.forEach(function(a){0===la?Lb[0]=a:1===la&&(Lb[1]=a),la++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Lb[0]=Fb(a.touches[0],Jb),a.touches.length>1&&(Lb[1]=Fb(a.touches[1],Kb))):(Jb.x=a.pageX,Jb.y=a.pageY,Jb.id="",Lb[0]=Jb),Lb},Nb=function(a,b){var c,d,e,g,h=0,j=pa[a]+b[a],k=b[a]>0,l=tb.x+b.x,m=tb.x-nb.x;return c=j>da.min[a]||j<da.max[a]?i.panEndFriction:1,j=pa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(ea?"h"!==ga||"x"!==a||X||(k?(j>da.min[a]&&(c=i.panEndFriction,h=da.min[a]-j,d=da.min[a]-oa[a]),(d<=0||m<0)&&ac()>1?(g=l,m<0&&l>nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j)):(j<da.max[a]&&(c=i.panEndFriction,h=j-da.max[a],d=oa[a]-da.max[a]),(d<=0||m>0)&&ac()>1?(g=l,m>0&&l<nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j))):g=l,"x"!==a)?void(fa||$||s>f.currItem.fitRatio&&(pa[a]+=b[a]*c)):(void 0!==g&&(Ka(g,!0),$=g!==nb.x),da.min.x!==da.max.x&&(void 0!==e?pa.x=e:$||(pa.x+=b.x*c)),void 0!==g)},Ob=function(a){if(!("mousedown"===a.type&&a.button>0)){if($b)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Eb(a,!0)&&a.preventDefault(),Da("pointerDown"),F){var b=e.arraySearch(mb,a.pointerId,"id");b<0&&(b=mb.length),mb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Mb(a),d=c.length;_=null,cb(),V&&1!==d||(V=ha=!0,e.bind(window,p,f),S=ka=ia=T=$=Y=W=X=!1,ga=null,Da("firstTouchStart",c),Ma(oa,pa),na.x=na.y=0,Ma(kb,c[0]),Ma(lb,kb),nb.x=ta.x*ra,ob=[{x:kb.x,y:kb.y}],Q=P=Ea(),Sa(s,!0),zb(),Ab()),!aa&&d>1&&!fa&&!$&&(t=s,X=!1,aa=W=!0,na.y=na.x=0,Ma(oa,pa),Ma(hb,c[0]),Ma(ib,c[1]),Gb(hb,ib,vb),ub.x=Math.abs(vb.x)-pa.x,ub.y=Math.abs(vb.y)-pa.y,ba=ca=yb(hb,ib))}}},Pb=function(a){if(a.preventDefault(),F){var b=e.arraySearch(mb,a.pointerId,"id");if(b>-1){var c=mb[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Mb(a);if(ga||Y||aa)_=d;else if(tb.x!==ta.x*ra)ga="h";else{var f=Math.abs(d[0].x-kb.x)-Math.abs(d[0].y-kb.y);Math.abs(f)>=gb&&(ga=f>0?"h":"v",_=d)}}},Qb=function(){if(_){var a=_.length;if(0!==a)if(Ma(hb,_[0]),jb.x=hb.x-kb.x,jb.y=hb.y-kb.y,aa&&a>1){if(kb.x=hb.x,kb.y=hb.y,!jb.x&&!jb.y&&wb(_[1],ib))return;Ma(ib,_[1]),X||(X=!0,Da("zoomGestureStarted"));var b=yb(hb,ib),c=Vb(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ka=!0);var d=1,e=Ta(),g=Ua();if(c<e)if(i.pinchToClose&&!ka&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Fa(j),Da("onPinchClose",j),ia=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);d<0&&(d=0),ba=b,Gb(hb,ib,rb),na.x+=rb.x-vb.x,na.y+=rb.y-vb.y,Ma(vb,rb),pa.x=La("x",c),pa.y=La("y",c),S=c>s,s=c,Ha()}else{if(!ga)return;if(ha&&(ha=!1,Math.abs(jb.x)>=gb&&(jb.x-=_[0].x-lb.x),Math.abs(jb.y)>=gb&&(jb.y-=_[0].y-lb.y)),kb.x=hb.x,kb.y=hb.y,0===jb.x&&0===jb.y)return;if("v"===ga&&i.closeOnVerticalDrag&&!Bb()){na.y+=jb.y,pa.y+=jb.y;var k=Ib();return T=!0,Da("onVerticalDrag",k),Fa(k),void Ha()}Hb(Ea(),hb.x,hb.y),Y=!0,da=f.currItem.bounds;var l=Nb("x",jb);l||(Nb("y",jb),Na(pa),Ha())}}},Rb=function(a){if(N.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Da("pointerUp"),Eb(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(mb,a.pointerId,"id");if(c>-1)if(b=mb.splice(c,1)[0],navigator.msPointerEnabled){var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}else b.type=a.pointerType||"mouse"}var g,h=Mb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return _=null,!0;1===j&&Ma(lb,h[0]),0!==j||ga||fa||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Da("touchRelease",a,b));var k=-1;if(0===j&&(V=!1,e.unbind(window,p,f),zb(),aa?k=0:sb!==-1&&(k=Ea()-sb)),sb=1===j?Ea():-1,g=k!==-1&&k<150?"zoom":"swipe",aa&&j<2&&(aa=!1,1===j&&(g="zoomPointerUp"),Da("zoomGestureEnded")),_=null,Y||X||fa||T)if(cb(),R||(R=Sb()),R.calculateSwipeSpeed("x"),T){var l=Ib();if(l<i.verticalDragRange)f.close();else{var m=pa.y,n=ja;db("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pa.y=(f.currItem.initialPosition.y-m)*a+m,Fa((1-n)*a+n),Ha()}),Da("onVerticalDrag",1)}}else{if(($||fa)&&0===j){var o=Ub(g,R);if(o)return;g="zoomPointerUp"}if(!fa)return"swipe"!==g?void Wb():void(!$&&s>f.currItem.fitRatio&&Tb(R))}},Sb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){ob.length>1?(a=Ea()-Q+50,b=ob[ob.length-2][d]):(a=Ea()-P,b=lb[d]),c.lastFlickOffset[d]=kb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pa[a]>da.min[a]?c.backAnimDestination[a]=da.min[a]:pa[a]<da.max[a]&&(c.backAnimDestination[a]=da.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,db("bounceZoomPan"+a,pa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pa[a]=b,Ha()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pa[a]+=c.distanceOffset[a])},panAnimLoop:function(){if($a.zoomPan&&($a.zoomPan.raf=H(c.panAnimLoop),c.now=Ea(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ha(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05))return pa.x=Math.round(pa.x),pa.y=Math.round(pa.y),Ha(),void ab("zoomPan")}};return c},Tb=function(a){return a.calculateSwipeSpeed("y"),da=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(bb("zoomPan"),a.lastNow=Ea(),void a.panAnimLoop())},Ub=function(a,b){var c;fa||(qb=m);var d;if("swipe"===a){var g=kb.x-lb.x,h=b.lastFlickDist.x<10;g>fb&&(h||b.lastFlickOffset.x>20)?d=-1:g<-fb&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,m<0?(m=i.loop?ac()-1:0,j=!0):m>=ac()&&(m=i.loop?0:ac()-1,j=!0),j&&!i.loop||(ua+=d,ra-=d,c=!0));var k,l=ta.x*ra,n=Math.abs(l-tb.x);return c||l>tb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,qb===m&&(c=!1),fa=!0,Da("mainScrollAnimStart"),db("mainScroll",tb.x,l,k,e.easing.cubic.out,Ka,function(){cb(),fa=!1,qb=-1,(c||qb!==m)&&f.updateCurrItem(),Da("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Vb=function(a){return 1/ca*a*t},Wb=function(){var a=s,b=Ta(),c=Ua();s<b?a=b:s>c&&(a=c);var d,g=1,h=ja;return ia&&!S&&!ka&&s<b?(f.close(),!0):(ia&&(d=function(a){Fa((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};za("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.msPointerEnabled?a("MSPointer","Down","Move","Up","Cancel"):a("pointer","down","move","up","cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Ob,r[B]=Pb,r[C]=Rb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Xb,Yb,Zb,$b,_b,ac,bc,cc=function(b,c,d,g){Xb&&clearTimeout(Xb),$b=!0,Zb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){ab("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Fa(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Da("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),$b=!1};if(!j||!h||void 0===h.x)return Da("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),a.style.opacity=d?0:1,Fa(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pa.x=h.x,pa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ha()),bb("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Xb=setTimeout(function(){if(Da("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pa.x,y:pa.y},l=s,m=ja,n=function(b){1===b?(s=f,pa.x=h.x,pa.y=h.y-M):(s=(f-l)*b+l,pa.x=(h.x-i.x)*b+i.x,pa.y=(h.y-M-i.y)*b+i.y),Ha(),g?a.style.opacity=1-b:Fa(m-b*m)};c?db("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Xb=setTimeout(k,j+20))}else s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),Fa(1),g?a.style.opacity=1:Fa(1),Xb=setTimeout(k,j+20)},d?25:90)};n()},dc={},ec=[],fc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Yb.length}},gc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},hc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((dc.x-b)/2),d.center.y=Math.round((dc.y-c)/2)+a.vGap.top,d.max.x=b>dc.x?Math.round(dc.x-b):d.center.x,d.max.y=c>dc.y?Math.round(dc.y-c)+a.vGap.top:d.center.y,d.min.x=b>dc.x?0:d.center.x,d.min.y=c>dc.y?a.vGap.top:d.center.y},ic=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Da("parseVerticalMargin",a)),dc.x=b.x,dc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=dc.x/a.w,f=dc.y/a.h;a.fitRatio=e<f?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=gc())}if(!c)return;return hc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=gc(),a.initialPosition=a.bounds.center,a.bounds},jc=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,mc(b,d,b===f.currItem&&ya),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},kc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},lc=function(a,b){if(a.src&&a.loadError&&a.container)return b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0},mc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},nc=function(){if(ec.length){for(var a,b=0;b<ec.length;b++)a=ec[b],a.holder.index===a.index&&jc(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);ec=[]}};za("Controller",{publicMethods:{lazyLoadItem:function(a){a=Aa(a);var b=_b(a);b&&(!b.loaded&&!b.loading||x)&&(Da("gettingData",a,b),b.src&&kc(b))},initController:function(){e.extend(i,fc,!0),f.items=Yb=c,_b=f.getItemAt,ac=i.getNumItemsFn,bc=i.loop,ac()<3&&(i.loop=!1),Ca("beforeChange",function(a){var b,c=i.preload,d=null===a||a>=0,e=Math.min(c[0],ac()),g=Math.min(c[1],ac());for(b=1;b<=(d?g:e);b++)f.lazyLoadItem(m+b);for(b=1;b<=(d?e:g);b++)f.lazyLoadItem(m-b)}),Ca("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ca("mainScrollAnimComplete",nc),Ca("initialZoomInEnd",nc),Ca("destroy",function(){for(var a,b=0;b<Yb.length;b++)a=Yb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);ec=null})},getItemAt:function(a){return a>=0&&(void 0!==Yb[a]&&Yb[a])},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=Aa(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Da("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),lc(g),ic(g,qa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,mc(g,d),jc(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(lc(c,!0))return c.loadComplete=c.img=null,ic(c,qa),Ia(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!$b&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(fa||$b)?ec.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):jc(b,c,h,c.img,fa||$b,!0)}c.loadComplete=null,c.img=null,Da("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),mc(g,l),h.appendChild(l),g.placeholder=l}g.loading||kc(g),f.allowProgressiveImg()&&(!Zb&&N.transform?ec.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):jc(b,g,h,g.img,!0,!0))}Zb||b!==m?Ia(g):(ea=h.style,cc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var oc,pc={},qc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};za("Tap",{publicMethods:{initTap:function(){Ca("firstTouchStart",f.onTapStart),Ca("touchRelease",f.onTapRelease),Ca("destroy",function(){pc={},oc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(oc),oc=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!_a){var c=b;if(oc&&(clearTimeout(oc),oc=null,xb(c,pc)))return void Da("doubleTap",c);if("mouse"===b.type)return void qc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void qc(a,b);Ma(pc,c),oc=setTimeout(function(){qc(a,b),oc=null},300)}}}});var rc;za("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ca("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){rc={};var c="wheel mousewheel DOMMouseScroll";Ca("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ca("unbindEvents",function(){rc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),s<1?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ca("resize",g),Ca("afterChange",g),Ca("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ca("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||_a||V?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),rc.x=0,"deltaX"in a)1===a.deltaMode?(rc.x=18*a.deltaX,rc.y=18*a.deltaY):(rc.x=a.deltaX,rc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(rc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?rc.y=-.16*a.wheelDeltaY:rc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;rc.y=a.detail}Sa(s,!0);var b=pa.x-rc.x,c=pa.y-rc.y;(i.modal||b<=da.min.x&&b>=da.max.x&&c<=da.min.y&&c>=da.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:qa.x/2+sa.x,y:qa.y/2+sa.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec={history:!0,galleryUID:1},Fc=function(){return Cc.hash.substring(1)},Gc=function(){sc&&clearTimeout(sc),uc&&clearTimeout(uc)},Hc=function(){var a=Fc(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Yb.length;c++)if(Yb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Ic=function(){if(uc&&clearTimeout(uc),_a||V)return void(uc=setTimeout(Ic,500));vc?clearTimeout(tc):vc=!0;var a=m+1,b=_b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=yc+"&gid="+i.galleryUID+"&pid="+a;zc||Cc.hash.indexOf(c)===-1&&(Bc=!0);var d=Cc.href.split("#")[0]+"#"+c;Dc?"#"+c!==window.location.hash&&history[zc?"replaceState":"pushState"]("",document.title,d):zc?Cc.replace(d):Cc.hash=c,zc=!0,tc=setTimeout(function(){vc=!1},60)};za("History",{publicMethods:{initHistory:function(){if(e.extend(i,Ec,!0),i.history){Cc=window.location,Bc=!1,Ac=!1,zc=!1,yc=Fc(),Dc="pushState"in history,yc.indexOf("gid=")>-1&&(yc=yc.split("&gid=")[0],yc=yc.split("?gid=")[0]),Ca("afterChange",f.updateURL),Ca("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){xc=!0,Ac||(Bc?history.back():yc?Cc.hash=yc:Dc?history.pushState("",document.title,Cc.pathname+Cc.search):Cc.hash=""),Gc()};Ca("unbindEvents",function(){l&&a()}),Ca("destroy",function(){xc||a()}),Ca("firstUpdate",function(){m=Hc().pid});var b=yc.indexOf("pid=");b>-1&&(yc=yc.substring(0,b),"&"===yc.slice(-1)&&(yc=yc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Fc()===yc?(Ac=!0,void f.close()):void(vc||(wc=!0,f.goTo(Hc().pid),wc=!1))},updateURL:function(){Gc(),wc||(zc?sc=setTimeout(Ic,800):Ic())}}}),e.extend(f,eb)};return a});

/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
})();
(function vendorFlickity() {
    /*!
   * Flickity PACKAGED v2.2.1
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2019 Metafizzy
   */

  !function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

  /**
   * Flickity fade v1.0.0
   * Fade between Flickity slides
   */

  /* jshint browser: true, undef: true, unused: true */

  ( function( window, factory ) {
    // universal module definition
    /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'flickity/js/index',
        'fizzy-ui-utils/utils',
      ], factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('flickity'),
        require('fizzy-ui-utils')
      );
    } else {
      // browser global
      factory(
        window.Flickity,
        window.fizzyUIUtils
      );
    }

  }( this, function factory( Flickity, utils ) {

    // ---- Slide ---- //

    var Slide = Flickity.Slide;

    var slideUpdateTarget = Slide.prototype.updateTarget;
    Slide.prototype.updateTarget = function() {
      slideUpdateTarget.apply( this, arguments );
      if ( !this.parent.options.fade ) {
        return;
      }
      // position cells at selected target
      var slideTargetX = this.target - this.x;
      var firstCellX = this.cells[0].x;
      this.cells.forEach( function( cell ) {
        var targetX = cell.x - firstCellX - slideTargetX;
        cell.renderPosition( targetX );
      });
    };

    Slide.prototype.setOpacity = function( alpha ) {
      this.cells.forEach( function( cell ) {
        cell.element.style.opacity = alpha;
      });
    };

    // ---- Flickity ---- //

    var proto = Flickity.prototype;

    Flickity.createMethods.push('_createFade');

    proto._createFade = function() {
      this.fadeIndex = this.selectedIndex;
      this.prevSelectedIndex = this.selectedIndex;
      this.on( 'select', this.onSelectFade );
      this.on( 'dragEnd', this.onDragEndFade );
      this.on( 'settle', this.onSettleFade );
      this.on( 'activate', this.onActivateFade );
      this.on( 'deactivate', this.onDeactivateFade );
    };

    var updateSlides = proto.updateSlides;
    proto.updateSlides = function() {
      updateSlides.apply( this, arguments );
      if ( !this.options.fade ) {
        return;
      }
      // set initial opacity
      this.slides.forEach( function( slide, i ) {
        var alpha = i == this.selectedIndex ? 1 : 0;
        slide.setOpacity( alpha );
      }, this );
    };

    /* ---- events ---- */

    proto.onSelectFade = function() {
      // in case of resize, keep fadeIndex within current count
      this.fadeIndex = Math.min( this.prevSelectedIndex, this.slides.length - 1 );
      this.prevSelectedIndex = this.selectedIndex;
    };

    proto.onSettleFade = function() {
      delete this.didDragEnd;
      if ( !this.options.fade ) {
        return;
      }
      // set full and 0 opacity on selected & faded slides
      this.selectedSlide.setOpacity( 1 );
      var fadedSlide = this.slides[ this.fadeIndex ];
      if ( fadedSlide && this.fadeIndex != this.selectedIndex ) {
        this.slides[ this.fadeIndex ].setOpacity( 0 );
      }
    };

    proto.onDragEndFade = function() {
      // set flag
      this.didDragEnd = true;
    };

    proto.onActivateFade = function() {
      if ( this.options.fade ) {
        this.element.classList.add('is-fade');
      }
    };

    proto.onDeactivateFade = function() {
      if ( !this.options.fade ) {
        return;
      }
      this.element.classList.remove('is-fade');
      // reset opacity
      this.slides.forEach( function( slide ) {
        slide.setOpacity('');
      });
    };

    /* ---- position & fading ---- */

    var positionSlider = proto.positionSlider;
    proto.positionSlider = function() {
      if ( !this.options.fade ) {
        positionSlider.apply( this, arguments );
        return;
      }

      this.fadeSlides();
      this.dispatchScrollEvent();
    };

    var positionSliderAtSelected = proto.positionSliderAtSelected;
    proto.positionSliderAtSelected = function() {
      if ( this.options.fade ) {
        // position fade slider at origin
        this.setTranslateX( 0 );
      }
      positionSliderAtSelected.apply( this, arguments );
    };

    proto.fadeSlides = function() {
      if ( this.slides.length < 2 ) {
        return;
      }
      // get slides to fade-in & fade-out
      var indexes = this.getFadeIndexes();
      var fadeSlideA = this.slides[ indexes.a ];
      var fadeSlideB = this.slides[ indexes.b ];
      var distance = this.wrapDifference( fadeSlideA.target, fadeSlideB.target );
      var progress = this.wrapDifference( fadeSlideA.target, -this.x );
      progress = progress / distance;

      fadeSlideA.setOpacity( 1 - progress );
      fadeSlideB.setOpacity( progress );

      // hide previous slide
      var fadeHideIndex = indexes.a;
      if ( this.isDragging ) {
        fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
      }
      var isNewHideIndex = this.fadeHideIndex != undefined &&
        this.fadeHideIndex != fadeHideIndex &&
        this.fadeHideIndex != indexes.a &&
        this.fadeHideIndex != indexes.b;
      if ( isNewHideIndex ) {
        // new fadeHideSlide set, hide previous
        this.slides[ this.fadeHideIndex ].setOpacity( 0 );
      }
      this.fadeHideIndex = fadeHideIndex;
    };

    proto.getFadeIndexes = function() {
      if ( !this.isDragging && !this.didDragEnd ) {
        return {
          a: this.fadeIndex,
          b: this.selectedIndex,
        };
      }
      if ( this.options.wrapAround ) {
        return this.getFadeDragWrapIndexes();
      } else {
        return this.getFadeDragLimitIndexes();
      }
    };

    proto.getFadeDragWrapIndexes = function() {
      var distances = this.slides.map( function( slide, i ) {
        return this.getSlideDistance( -this.x, i );
      }, this );
      var absDistances = distances.map( function( distance ) {
        return Math.abs( distance );
      });
      var minDistance = Math.min.apply( Math, absDistances );
      var closestIndex = absDistances.indexOf( minDistance );
      var distance = distances[ closestIndex ];
      var len = this.slides.length;

      var delta = distance >= 0 ? 1 : -1;
      return {
        a: closestIndex,
        b: utils.modulo( closestIndex + delta, len ),
      };
    };

    proto.getFadeDragLimitIndexes = function() {
      // calculate closest previous slide
      var dragIndex = 0;
      for ( var i=0; i < this.slides.length - 1; i++ ) {
        var slide = this.slides[i];
        if ( -this.x < slide.target ) {
          break;
        }
        dragIndex = i;
      }
      return {
        a: dragIndex,
        b: dragIndex + 1,
      };
    };

    proto.wrapDifference = function( a, b ) {
      var diff = b - a;

      if ( !this.options.wrapAround ) {
        return diff;
      }

      var diffPlus = diff + this.slideableWidth;
      var diffMinus = diff - this.slideableWidth;
      if ( Math.abs( diffPlus ) < Math.abs( diff ) ) {
        diff = diffPlus;
      }
      if ( Math.abs( diffMinus ) < Math.abs( diff ) ) {
        diff = diffMinus;
      }
      return diff;
    };

    // ---- wrapAround ---- //

    var _getWrapShiftCells = proto._getWrapShiftCells;
    proto._getWrapShiftCells = function() {
      if ( !this.options.fade ) {
        _getWrapShiftCells.apply( this, arguments );
      }
    };

    var shiftWrapCells = proto.shiftWrapCells;
    proto.shiftWrapCells = function() {
      if ( !this.options.fade ) {
        shiftWrapCells.apply( this, arguments );
      }
    };

    return Flickity;

  }));

  /*!
   * Flickity sync v2.0.0
   * enable sync for Flickity
   */

 /*jshint browser: true, undef: true, unused: true, strict: true*/
  ( function( window, factory ) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'flickity/js/index',
        'fizzy-ui-utils/utils'
      ], factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('flickity'),
        require('fizzy-ui-utils')
      );
    } else {
      // browser global
      window.Flickity = factory(
        window.Flickity,
        window.fizzyUIUtils
      );
    }

  }( window, function factory( Flickity, utils ) {

  'use strict';

    // -------------------------- sync prototype -------------------------- //

    // Flickity.defaults.sync = false;

    Flickity.createMethods.push('_createSync');

    Flickity.prototype._createSync = function() {
      this.syncers = {};
      var syncOption = this.options.sync;

      this.on( 'destroy', this.unsyncAll );

      if ( !syncOption ) {
        return;
      }
      // HACK do async, give time for other flickity to be initalized
      var _this = this;
      setTimeout( function initSyncCompanion() {
        _this.sync( syncOption );
      });
    };

    /**
     * sync
     * @param {Element} or {String} elem
     */
    Flickity.prototype.sync = function( elem ) {
      elem = utils.getQueryElement( elem );
      var companion = Flickity.data( elem );
      if ( !companion ) {
        return;
      }
      // two hearts, that beat as one
      this._syncCompanion( companion );
      companion._syncCompanion( this );
    };

    /**
     * @param {Flickity} companion
     */
    Flickity.prototype._syncCompanion = function( companion ) {
      var _this = this;
      function syncListener() {
        var index = _this.selectedIndex;
        // do not select if already selected, prevent infinite loop
        if ( companion.selectedIndex != index ) {
          companion.select( index );
        }
      }
      this.on( 'select', syncListener );
      // keep track of all synced flickities
      // hold on to listener to unsync
      this.syncers[ companion.guid ] = {
        flickity: companion,
        listener: syncListener
      };
    };

    /**
     * unsync
     * @param {Element} or {String} elem
     */
    Flickity.prototype.unsync = function( elem ) {
      elem = utils.getQueryElement( elem );
      var companion = Flickity.data( elem );
      this._unsync( companion );
    };

    /**
     * @param {Flickity} companion
     */
    Flickity.prototype._unsync = function( companion ) {
      if ( !companion ) {
        return;
      }
      // I love you but I've chosen darkness
      this._unsyncCompanion( companion );
      companion._unsyncCompanion( this );
    };

    /**
     * @param {Flickity} companion
     */
    Flickity.prototype._unsyncCompanion = function( companion ) {
      var id = companion.guid;
      var syncer = this.syncers[ id ];
      this.off( 'select', syncer.listener );
      delete this.syncers[ id ];
    };

    Flickity.prototype.unsyncAll = function() {
      for ( var id in this.syncers ) {
        var syncer = this.syncers[ id ];
        this._unsync( syncer.flickity );
      }
    };

    // -----  ----- //

    return Flickity;

    }));
  !function(e,t){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):t(e.Flickity,e.fizzyUIUtils)}(this,function(e,h){var t=e.Slide,a=t.prototype.updateTarget;t.prototype.updateTarget=function(){var i,s;a.apply(this,arguments),this.parent.options.fade&&(i=this.target-this.x,s=this.cells[0].x,this.cells.forEach(function(e){var t=e.x-s-i;e.renderPosition(t)}))},t.prototype.setOpacity=function(t){this.cells.forEach(function(e){e.element.style.opacity=t})};var i=e.prototype;e.createMethods.push("_createFade"),i._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var s=i.updateSlides;i.updateSlides=function(){s.apply(this,arguments),this.options.fade&&this.slides.forEach(function(e,t){var i=t==this.selectedIndex?1:0;e.setOpacity(i)},this)},i.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},i.onSettleFade=function(){delete this.didDragEnd,this.options.fade&&(this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!=this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0))},i.onDragEndFade=function(){this.didDragEnd=!0},i.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},i.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(e){e.setOpacity("")}))};var n=i.positionSlider;i.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):n.apply(this,arguments)};var d=i.positionSliderAtSelected;i.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),d.apply(this,arguments)},i.fadeSlides=function(){var e,t,i,s,a,n;this.slides.length<2||(e=this.getFadeIndexes(),t=this.slides[e.a],i=this.slides[e.b],s=this.wrapDifference(t.target,i.target),a=this.wrapDifference(t.target,-this.x),a/=s,t.setOpacity(1-a),i.setOpacity(a),n=e.a,this.isDragging&&(n=.5<a?e.a:e.b),null!=this.fadeHideIndex&&this.fadeHideIndex!=n&&this.fadeHideIndex!=e.a&&this.fadeHideIndex!=e.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=n)},i.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},i.getFadeDragWrapIndexes=function(){var e=this.slides.map(function(e,t){return this.getSlideDistance(-this.x,t)},this),t=e.map(function(e){return Math.abs(e)}),i=Math.min.apply(Math,t),s=t.indexOf(i),a=e[s],n=this.slides.length,d=0<=a?1:-1;return{a:s,b:h.modulo(s+d,n)}},i.getFadeDragLimitIndexes=function(){for(var e=0,t=0;t<this.slides.length-1;t++){var i=this.slides[t];if(-this.x<i.target)break;e=t}return{a:e,b:e+1}},i.wrapDifference=function(e,t){var i=t-e;if(!this.options.wrapAround)return i;var s=i+this.slideableWidth,a=i-this.slideableWidth;return Math.abs(s)<Math.abs(i)&&(i=s),Math.abs(a)<Math.abs(i)&&(i=a),i};var o=i._getWrapShiftCells;i._getWrapShiftCells=function(){this.options.fade||o.apply(this,arguments)};var r=i.shiftWrapCells;return i.shiftWrapCells=function(){this.options.fade||r.apply(this,arguments)},e});

})();
(function vendorLodash() {
  // lodash.core.min.js

  /**
   * @license
   * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
   * Build: `lodash core -o ./dist/lodash.core.js`
   */
  ;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
  }function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
  u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
  }return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
  f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
  var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
  !r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
  return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
  })){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
  var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
  return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
  for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
  }function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
  var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
  thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
  return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
  n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
  n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
  return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
  }),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
  r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
  return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
  t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
  a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);

})();

/*============================================================================
 Underground Functions
==============================================================================*/
window.WAU = window.WAU || {};

WAU.Slideout = (function () {

	/*
	 * Elements
	 */
	var wrapper = undefined;

	/*
	 * @description - Makes sure that the ESC Key works to close the menus.
	 */
	document.addEventListener('keyup', function (event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeActiveSlideout();
		}
	});

	document.addEventListener('click', function (event) {
		if (event.target === document.querySelector(".js-slideout-overlay")) {
			closeActiveSlideout();
		}
	});

	/*
	 * @description - Closes the currently active slide.
	 */
	function closeActiveSlideout() {
			// Find the open slideout.
			const activeSlideout = document.querySelector('.slideout--active');
			const activeSlideoutName = activeSlideout.getAttribute('data-wau-slideout');
			const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + activeSlideoutName + '"]');
			const direction = opener.getAttribute('data-slideout-direction');
			close(direction, opener);
	}

	/*
	 * @description - Checks if the slideout is currently open or not.
	 * @return Boolean
	 */
	function isOpen() {
		wrapper = document.querySelector(".js-slideout-toggle-wrapper");
		return wrapper.classList.contains("slideout-left--open") || wrapper.classList.contains("slideout-right--open");
	}

	/*
	 * @description - Open a specific slideout in a specific direction.
	 * @param direction:String - the drction to open the slideout in.
	 * @param targetSlideoutEl:Node - The slideout element that will be opened.
	 */
	function open(direction, targetSlideoutEl, opener) {
		wrapper.classList.add("slideout-" + direction + "--open");
		wrapper.classList.remove("slideout-" + direction + "--closed");
		targetSlideoutEl.classList.add('slideout--active');

		opener.setAttribute("aria-expanded", "true");

		if (document.activeElement === opener) {
			theme.a11yHelpers.focusOnElement(targetSlideoutEl);
		}

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);

    // Set tabindex so it will tab slideout
    targetSlideoutEl.querySelectorAll('*').forEach((item, i) => {
      item.setAttribute('tabIndex', '0');
    });

    wrapper.style.overflow = 'hidden';
    wrapper.style.position = 'fixed';
    wrapper.style.top = `-${scrollPosition}px`;
    wrapper.style.width = '100%';
	}

	/*
	 * @description - Closes all slideouts. Puts a11y focus back on the original opener.
	 * @param opener:Node - the opener element.
	 */
	function close(direction, openerEl) {
		const activeOpenSlideouts = document.querySelectorAll('.slideout--active');
		const openers = document.querySelectorAll(".js-slideout-open");
		const closers = document.querySelectorAll(".js-slideout-close");

		// Close the slideout.
		wrapper.classList.remove("slideout-" + direction + "--open");
		wrapper.classList.add("slideout-" + direction + "--closed");

		// Close all active drawers. This is incase there is more than 1 slide on a direction.
		activeOpenSlideouts.forEach(function (activeSlideoutDrawer) {
			activeSlideoutDrawer.classList.remove('slideout--active');

      // Set tabindex so it skips hidden slideout
      activeSlideoutDrawer.querySelectorAll('*').forEach((item, i) => {
        item.setAttribute('tabIndex', '-1');
      });
		});

		// Makes sure aria-expanded false is added to all the open and close buttons.
		openers.forEach(function (opener) {
			opener.setAttribute('aria-expanded', 'false');
		});

		closers.forEach(function (closer) {
			closer.setAttribute('aria-expanded', 'false');
		});

		openerEl.focus();

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);

    wrapper.style.removeProperty('overflow');
    wrapper.style.removeProperty('position');
    wrapper.style.removeProperty('top');
    wrapper.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
	}

	/*
	 * @description - Closes a specific slideout given the name in data-wau-slideout attribute
	 * @return void
	 */
	function closeByName(name) {
		const closer = document.querySelector('[data-wau-slideout-target="' + name + '"]');
		const direction = closer.getAttribute('data-slideout-direction');
		const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + name + '"]');
		close(direction, opener);
	}

	/*
	 * @description - Opens a specific slideout given the name in data-wau-slideout attribute
	 * @return void
	 */
	function openByName(name) {
		const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]')
		const direction = opener.getAttribute('data-slideout-direction');
		const targetSlideoutEl = document.querySelector('[data-wau-slideout="' + name + '"]');
		open(direction, targetSlideoutEl, opener);
	}

	/*
	 * @description - Creates a new aside element to be used as a slideout.
	 * @param direction:String - the direction that the slideout will open in. "left" or "right"
	 * @param name:String - An explicit name to refer to the slideout by on a trigger.
	 * @param wrapperEl:Node - An element that can be explicitly passed in as the wrapper element.
	 */
	function createSlideoutEl(direction, name, wrapperEl) {
		const aside = document.createElement('aside');
		const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]');

		const generatedId = "slideout-" + name;

		wrapperEl = wrapperEl || wrapper;

		aside.classList.add('slideout');
		aside.classList.add('slideout__drawer-' + direction);
		aside.setAttribute('data-wau-slideout', name);
		aside.setAttribute('id', generatedId); // setting an id here so that we can set the aria-controls attribute on the opener.

		opener.setAttribute('aria-controls', generatedId);
		wrapperEl.appendChild(aside);

		return aside;
	}

	/*
	 * @description - Initializes the plugin by adding all of the appropriate event listeners.
	 */
	function init(name) {

		if (typeof name === "undefined") {
			console.log("The Slideout must have an associated name.");
			return;
		}

		wrapper = document.querySelector('.js-slideout-toggle-wrapper');

		const slideoutClosers = document.querySelectorAll('.js-slideout-close'),
					slideoutOpener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + name + '"]'),
					slideoutDirection = slideoutOpener.getAttribute('data-slideout-direction');

		let slideoutTargetEl = undefined;

		if (slideoutOpener) {
			slideoutTargetEl = document.querySelector(`aside[data-wau-slideout=${name}]`);
		}

		if (!slideoutTargetEl) {
			slideoutTargetEl = createSlideoutEl(direction);
		}

    // Set slideout tabindex no tabbing when closed
    slideoutTargetEl.querySelectorAll('*').forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
    });

		slideoutOpener.addEventListener('click', function () {
			open(slideoutDirection, slideoutTargetEl, slideoutOpener);
		});

		slideoutClosers.forEach(function (slideoutCloser) {
			const slideoutCloseDirection = slideoutCloser.getAttribute('data-slideout-direction');

			slideoutCloser.addEventListener('click', function () {
				close(slideoutCloseDirection, slideoutOpener);
			});
		});

	}

	const privateFunctions = {
		openByName,
		closeByName,
		createSlideoutEl
	};

	let returnObj = {};

	returnObj.init = init;

	/*
	 * @description - Gives WAU.Slideout external access to the internal functions for use in Shopify Events.
	 */
	Object.keys(privateFunctions).forEach(function (pf) {
		returnObj['_' + pf] = privateFunctions[pf];
	});

	return returnObj;

}());

WAU.Modal = (function () {

	/*
	 * Elements
	 */
	var wrapper = undefined;

	/*
	 * @description - Makes sure that the ESC Key works to close the menus.
	 */
	document.addEventListener('keyup', function (event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeActiveModal();
		}
	});

	document.addEventListener('click', function (event) {
		if (event.target === document.querySelector(".js-modal-overlay")) {
			closeActiveModal();
		}
	});

	/*
	 * @description - Closes the currently active modal.
	 */
	function closeActiveModal() {
			// Find the open modal.
			const activeModal = document.querySelector('.modal--active');
			const activeModalName = activeModal.getAttribute('data-wau-modal');
			const opener = document.querySelector('.js-modal-open[data-wau-modal-target="' + activeModalName + '"]');
			close(opener);
	}

	/*
	 * @description - Checks if the modal is currently open or not.
	 * @return Boolean
	 */
	function isOpen() {
		wrapper = document.querySelector(".js-modal-toggle-wrapper");
		return wrapper.classList.contains("modal--open");
	}

	/*
	 * @description - Open a specific modal.
	 * @param targetSlideoutEl:Node - The modal element that will be opened.
	 */
	function open(targetModalEl, opener) {
		wrapper.classList.add("modal--open");
		wrapper.classList.remove("modal--closed");
		targetModalEl.classList.add('modal--active');

		opener.setAttribute("aria-expanded", "true");

		if (document.activeElement === opener) {
			theme.a11yHelpers.focusOnElement(targetModalEl);
		}

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
    let padding = theme.Helpers.getScrollbarWidth();

    wrapper.style.overflow = 'hidden';
    wrapper.style.position = 'fixed';
    wrapper.style.paddingRight = padding + 'px';
    wrapper.style.top = `-${scrollPosition}px`;
    wrapper.style.width = '100%';
	}

	/*
	 * @description - Closes all modals. Puts a11y focus back on the original opener.
	 * @param opener:Node - the opener element.
	 */
	function close(openerEl) {
		const activeOpenModals = document.querySelectorAll('.modal--active');
		const openers = document.querySelectorAll(".js-modal-open");
		const closers = document.querySelectorAll(".js-modal-close");

    // Remove content if quickview
    if (openerEl.getAttribute("aria-controls") == 'modal-quickview') {
      document.querySelector('.js-quickview-content').innerHTML = '';
    }

		// Close the Modal.
		wrapper.classList.remove("modal--open");
		wrapper.classList.add("modal--closed");

		// Close all active modals. This is incase there is more than 1..
		activeOpenModals.forEach(function (activeModalDrawer) {
			activeModalDrawer.classList.remove('modal--active');
		});

		// Makes sure aria-expanded false is added to all the open and close buttons.
		openers.forEach(function (opener) {
			opener.setAttribute('aria-expanded', 'false');
		});

		closers.forEach(function (closer) {
			closer.setAttribute('aria-expanded', 'false');
		});

		openerEl.focus();

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);

    wrapper.style.removeProperty('overflow');
    wrapper.style.removeProperty('position');
    wrapper.style.removeProperty('padding-right');
    wrapper.style.removeProperty('top');
    wrapper.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
	}

	/*
	 * @description - Closes a specific modal given the name in data-wau-slideout attribute
	 * @return void
	 */
	function closeByName(name) {
		const closer = document.querySelector('[data-wau-modal-target="' + name + '"]');
		const opener = document.querySelector('.js-modal-open[data-wau-modal-target="' + name + '"]');
		close(opener);
	}

	/*
	 * @description - Opens a specific modal given the name in data-wau-slideout attribute
	 * @return void
	 */
	function openByName(name) {
		const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
		const targetModalEl = document.querySelector('[data-wau-modal="' + name + '"]');

		open(targetModalEl, opener);
	}

  /*
   * @description - Creates a new close button inside created modal.
   * @param name:String - An explicit name to refer to the modal by on a trigger.
   */
  function createCloser(name) {
    const closeDiv = document.createElement('div');
    const button = document.createElement('button');
    const icon = document.createElement('div');

    closeDiv.classList.add('slideout__trigger--close');
		closeDiv.classList.add('slideout__trigger-'+ name +'__wrapper');
    closeDiv.classList.add('slideout__trigger-general-modal__wrapper');

    button.classList.add('slideout__trigger-'+ name);
    button.classList.add('slideout__trigger-general-modal');
    button.classList.add('js-modal-close');
    button.setAttribute('aria-controls', 'modal-'+ name);
    button.setAttribute('aria-label', 'Close modal');
    icon.classList.add('icn-close');
    button.appendChild(icon);

    closeDiv.appendChild(button);

    return closeDiv;
  }

	/*
	 * @description - Creates a new div element to be used as a modal.
	 * @param name:String - An explicit name to refer to the modal by on a trigger.
	 * @param wrapperEl:Node - An element that can be explicitly passed in as the wrapper element.
	 */
	function createModalEl(name, wrapperEl) {
		const div = document.createElement('div');
    const innerDiv = document.createElement('div');
    const innerContentDiv = document.createElement('div');
		const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
    const content = document.querySelector('[data-wau-modal-content="' + name + '"]');
		const generatedId = "modal-" + name;

		wrapperEl = wrapperEl || wrapper;

    // Create outer wrapper
		div.classList.add('modal');
		div.classList.add('modal__container');
		div.setAttribute('data-wau-modal', name);
		div.setAttribute('id', generatedId); // setting an id here so that we can set the aria-controls attribute on the opener.

    // Create inner wrapper and move content to it
    innerDiv.classList.add('modal__inner-wrapper');
    innerDiv.classList.add('modal__general-modal__wrapper');
    innerContentDiv.innerHTML = content.innerHTML;
    innerContentDiv.classList.add('modal__inner-content-container');

    // Add close button to Inner
    let closeDiv = createCloser(name);
    innerDiv.prepend(closeDiv);

    // Add inner wrapper to outer wrapper
    div.appendChild(innerDiv);
    innerDiv.appendChild(innerContentDiv);

		opener.setAttribute('aria-controls', generatedId);
		wrapperEl.appendChild(div);

		return div;
	}

	/*
	 * @description - Initializes the plugin by adding all of the appropriate event listeners.
	 */
	function init(name) {

		if (typeof name === "undefined") {
			console.log("The Modal must have an associated name.");
			return;
		}

		wrapper = document.querySelector('.js-modal-toggle-wrapper');

		const modalOpener = document.querySelector('.js-modal-open[data-wau-modal-target="' + name + '"]');

		let modalTargetEl = undefined;

		if (modalOpener) {
			modalTargetEl = document.querySelector(`div[data-wau-modal=${name}]`);
		}

		if (!modalTargetEl) {
			modalTargetEl = createModalEl(name, wrapper);
		}

		modalOpener.addEventListener('click', function () {
			open(modalTargetEl, modalOpener);
		});

    const modalClosers = document.querySelectorAll('.js-modal-close');

		modalClosers.forEach(function (modalCloser) {
			modalCloser.addEventListener('click', function () {
				close(modalCloser);
			});
		});

	}

	const privateFunctions = {
		openByName,
		closeByName,
		createModalEl
	};

	let returnObj = {};

	returnObj.init = init;

	/*
	 * @description - Gives WAU.Slideout external access to the internal functions for use in Shopify Events.
	 */
	Object.keys(privateFunctions).forEach(function (pf) {
		returnObj['_' + pf] = privateFunctions[pf];
	});

	return returnObj;

}());

WAU.Accordion = (function () {

  const classes = {
    show: "is-active",
    open: "js-accordion-is-open",
    mobileNavAccordion: "js-accordion-mobile-nav"
  };

  const selectors = {
    accordion: ".js-accordion",
    accordionItem: '.c-accordion__item',
    accordionLink: ".js-accordion-link",
    accordionHeader: ".js-accordion-header",
    accordionPanel: ".c-accordion__panel"
  };

  const publicAPIs = {};

  /*
   * @description strips class period
   */
  const stripClassPeriod = function(className) {
    if (!className) return;
    return className.split('.')[1];
  }

  /*
   * @description returns class naem
   */
  publicAPIs.getConfigClass = function (className) {
    if (!className) return;
    if (classes[className] && classes[className] != '') {
      return classes[className];
    } else {
      return false;
    }
  };

  /*
   * @description Hides an accordion item
   */
  publicAPIs.hide = function (target) {

    target.setAttribute("aria-expanded", "false");

    const panel = document.querySelector(
      `#${target.getAttribute("aria-controls")}`
    );

    panel.setAttribute("hidden", "");

    panel.classList.remove(classes.show);

    // 350 matches the CSS transition timing
    setTimeout(function(){
      panel.style.display = "none";
    }, 350);
  };


  /*
   * @description Shows an accordion item
   */
  publicAPIs.show = function (target, allowMultiple) {

    const panel = document.querySelector(
      `#${target.getAttribute("aria-controls")}`
    );

    const parentElement = target.closest(panel.getAttribute("data-parent"));

    const allowMultipleFlag = allowMultiple || parentElement
      .hasAttribute("data-accordion-allow-multiple") ? true : false;

    const isMobileNav = parentElement.classList.contains(classes.mobileNavAccordion);

    if (!allowMultipleFlag && panel.hasAttribute("data-parent")) {

      let childSelector = '';

      if (isMobileNav) {
        childSelector = ':scope > li > [aria-expanded="true"]';
      } else {
        childSelector = ':scope > [aria-expanded="true"]';
      }

      if (!childSelector) {
        return;
      }

      const activePanels = target
        .closest(panel.getAttribute("data-parent"))
        .querySelectorAll(
        childSelector
      );

      if (!activePanels) {
        return;
      }

      activePanels.forEach(function (element) {
        publicAPIs.hide(element);
      });
    }

    target.setAttribute("aria-expanded", "true");

    panel.removeAttribute("hidden");

    panel.style.display = "block";

    setTimeout(function(){
      panel.classList.add(classes.show);
    }, 10);

  };

  /*
   * @description Toggle showing and hiding an accordion item
   */
  publicAPIs.toggle = function (target, allowMultiple) {

    if (target.getAttribute("aria-expanded") == "true") {
      publicAPIs.hide(target);
      return;
    } else {
      publicAPIs.show(target, allowMultiple);
    }
  };

  /*
   * @description Initialize function
   */
  publicAPIs.init = function () {

    // Hide add accordion panels
    document.querySelectorAll(`[data-toggle="accordion"]:not(.${classes.open})`).forEach(function(element, index) {
      publicAPIs.hide(element);
    });

    // Add keyboard accessibility events
    document.addEventListener('keydown', function(event) {
      let target = event.target;
      const key = event.code.toString();
      const disablePageScroll = false;
      const pageScrollOptions = disablePageScroll ? {preventScroll: true} : {preventScroll: false};
      const isDropDownArrow = target.classList.contains('dropdown-arrow');

      if (target.classList.contains(stripClassPeriod(selectors.accordionHeader)) ||
          target.classList.contains(stripClassPeriod(selectors.accordionLink)) ||
          isDropDownArrow ) {

        if (key == 'ArrowUp' || key == 'ArrowDown') {

          const isMobile = target.closest(selectors.accordion).classList.contains(classes.mobileNavAccordion) ? true : false;

          const accordionSelector = isMobile ? `:scope > li > ${selectors.accordionLink}` : `:scope > ${selectors.accordionHeader}`;

          const accordions = target.closest(selectors.accordion).querySelectorAll(accordionSelector);

          if (isMobile && isDropDownArrow) {
            target.previousElementSibling.focus(pageScrollOptions);
            return;
          }

          let indexPlace;
          accordions.forEach(function(element, index) {
            if (element == target) {
              indexPlace = index;
            }
          });

          const direction = key == 'PageDown' || key == 'ArrowDown' ? 1 : -1;
          const length = accordions.length;
          const newIndex = (indexPlace + length + direction) % length;

          accordions[newIndex].focus(pageScrollOptions);
        }
      }
    });

    document.addEventListener("click", function (event) {

      const target = event.target.matches('[data-toggle="accordion"]') ? event.target : event.target.closest('[data-toggle="accordion"]');

      if (!target) {
        return false;
      }

      publicAPIs.toggle(target);
    });
  };

  return publicAPIs;

})();

/*============================================================================
 Theme Functions
==============================================================================*/
window.theme = window.theme || {};

theme.a11yHelpers = (function () {

	let alreadySetUpKeyEvents = false;

	/*
	 * @description - Sets up the aria-expanded property to true and false on hover.
	 */
	function setUpAriaExpansion() {
		const ariaExpandEls = document.querySelectorAll('.js-aria-expand');

		ariaExpandEls.forEach(function (ariaExpandEl) {
			ariaExpandEl.addEventListener('mouseover', function (event) {
				ariaExpandEl.setAttribute('aria-expanded', 'true');
		});

			ariaExpandEl.addEventListener('mouseout', function (event) {
				ariaExpandEl.setAttribute('aria-expanded', 'false');
			});
		});
	}

	/*
	 * @description - Takes a parent element and focuses on the next focusable element inside of there.
	 */
	function focusOnElement(parent) {
		var focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';

		const elementToFocusOn = parent.querySelector(focussableElements);

		if (elementToFocusOn) {
			elementToFocusOn.focus();
		}

	}

	function findFocusableElement(parent, element, direction) {
		const focusableElementSelectors = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
		const focusableElements = parent.querySelectorAll(focusableElementSelectors);
		const numOfFocusableElements = focusableElements.length;

		var elementIndex = 0;

		for (let i = 0; i < focusableElements.length; i += 1) {
			let currentElement = focusableElements[i];

			if (currentElement === element) {
				elementIndex = i;
			}
		}

		if (direction === 'next') {
			if (elementIndex === (numOfFocusableElements - 1)) {
				return focusableElements[0];
			} else {
				return focusableElements[elementIndex + 1];
			}
		}

		if (direction === 'prev') {
			if (elementIndex === 0) {
				return focusableElements[numOfFocusableElements - 1];
			} else {
				return focusableElements[elementIndex - 1];
			}
		}
	}

	/*
	 * @description - Takes a parent and a dom node and returns the next element that is focusable that is not the current element.
	 * @param parent:DOMNode
	 * @param element:DOMNode
	 * @return DOMNode
	 */
	function findNextFocusableElement(parent, element) {
		return findFocusableElement(parent, element, 'next');
	}

	function findPreviousFocusableElement(parent, element) {
		return findFocusableElement(parent, element, 'prev');
	}

			/*
	 * @description - Enables accessible keyboard navigation throughout the navigation menus.
	 */
	function setUpAccessibleNavigationMenus() {

		function closeDropdownMenus() {
			const activeMenuItems = document.querySelectorAll('.navigation__menuitem--active');
			activeMenuItems.forEach(function (activeMenuItem) {
				activeMenuItem.classList.remove('navigation__menuitem--active');
				activeMenuItem.setAttribute('aria-expanded', 'false');
			});
		}

		function closeNestedDropdownMenus() {
			//remove the class that makes the dropdown show... the active class
			const nestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown");

			nestedDropdowns.forEach(function (nestedDropdown) {
				nestedDropdown.classList.remove("dropdown__menuitem--active");
				nestedDropdown.setAttribute('aria-expanded', 'false');
			});

		}

		function addEdgeToDropdown(dropdown) {
			setTimeout(function () {
				if (theme.DOMHelpers.isElementPastEdge(dropdown)) {
					dropdown.classList.add("dropdown--edge");
				} else {
					dropdown.classList.remove("dropdown--edge");
				}
			}, 0);
		}

		if (!alreadySetUpKeyEvents) {
			document.addEventListener('keyup', function (event) {
				if (event.key === 'Escape') {
					const openNestedDropdownMenus = document.querySelectorAll(".dropdown__menuitem--active"),
								openDropdownMenus = document.querySelectorAll(".navigation__menuitem--active");

					event.preventDefault();

					if (openNestedDropdownMenus.length >= 1) {
						closeNestedDropdownMenus();
						return;
					}

					if (openDropdownMenus.length >= 1) {
						closeDropdownMenus();
						return;
					}

				}
			});
		}

		if (!alreadySetUpKeyEvents) {
			document.addEventListener('keydown', function (event) {
				if (event.key === 'Enter') {

					if (document.activeElement.classList.contains("js-open-dropdown-on-key") || document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown")) {
						event.stopPropagation();
						event.preventDefault();
					}

					if (document.activeElement.parentNode.classList.contains("navigation__menuitem--active")) {
						closeDropdownMenus();
						return;
					}

					if (document.activeElement.parentNode.classList.contains("dropdown__menuitem--active")) {
						closeNestedDropdownMenus();
						return;
					}

					if (document.activeElement.classList.contains("js-open-dropdown-on-key")) {
						document.activeElement.parentNode.classList.add("navigation__menuitem--active"); // Show the menu by adding the appropriate class.
						return;
					}

					if (document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown")) {
						document.activeElement.parentNode.classList.add("dropdown__menuitem--active");
						addEdgeToDropdown(document.activeElement.parentNode);
						return;
					}

				}
			});
		}

		alreadySetUpKeyEvents = true;

	}

	return {
		setUpAriaExpansion: setUpAriaExpansion,
		setUpAccessibleNavigationMenus: setUpAccessibleNavigationMenus,
		focusOnElement: focusOnElement
	}

}());

theme.DOMHelpers = (function () {

	/*
	 * @description - Determines if an element is off screen or not.
	 * @param element:<Node> - A DOMNode
	 * @return Boolean
	 */
	function isElementPastEdge(element) {
		const bounding = element.getBoundingClientRect(),
					l = bounding.left,
					w = bounding.width,
					docH = document.documentElement.clientHeight,
					docW = document.documentElement.clientWidth;

		return (l + w >= docW);
	}

	return {
		isElementPastEdge: isElementPastEdge
	};

}());

theme.Helpers = (function() {
  var touchDevice = false;
  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function animateCSS(element, animation, prefix = 'animate__') {
    return new Promise(function(resolve, reject) {

      const animationName = `${prefix}${animation}`;
      // const node = document.querySelector(element);
      const node = element;

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
  }

  function Toggle(id) {
    var element = document.getElementById(id);
    if ( element.classList.contains('animate-hide') ) {
      element.classList.remove("animate-hide", "fadeOut");
      element.classList.add("animate-show", "fadeIn");
      element.style.visibility = "visible";
    } else {
	  element.classList.remove("animate-show", "fadeIn");
      element.classList.add("animate-hide", "fadeOut");
      element.style.visibility = "hidden";
    }
  }

  function toggleClass(id, className) {
    var element = document.getElementById(id);
    if (!element) return false;
    if ( element.classList.contains(className) ) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  function Accordion(container, tlink, submenu) {

    let accorContent = container.querySelector(submenu);

    if ( !container.querySelector(tlink) ) return false;

    container.querySelector(tlink).addEventListener('click', function(event) {
      event.preventDefault();

      // Toggle class on label and update a11y
      if ( this.classList.contains('closed') ) {
        this.classList.remove('closed');
        this.parentElement.classList.remove('closed');
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.classList.add('closed');
        this.parentElement.classList.add('closed');
        this.setAttribute('aria-expanded', 'false');
      }

      // Show content
      if ( accorContent.classList.contains('closed') ) {
        accorContent.classList.remove("closed");
        accorContent.style.display = "block";
      } else {
        accorContent.classList.add("closed");
        accorContent.style.display = "none";
      }

    });
  }

  function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

  }

  function smoothScrollTo(endX, endY, duration) {
     let startX = window.scrollX || window.pageXOffset,
     startY = window.scrollY || window.pageYOffset,
     distanceX = endX - startX,
     distanceY = endY - startY,
     startTime = new Date().getTime();
     // Easing function
     let easeInOutQuart = function(time, from, distance, duration) {
         if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
         return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
     };
     let timer = window.setInterval(function() {
         let time = new Date().getTime() - startTime,
         newX = easeInOutQuart(time, startX, distanceX, duration),
         newY = easeInOutQuart(time, startY, distanceY, duration);
         if (time >= duration) {
             window.clearInterval(timer);
         }
         window.scrollTo(newX, newY);
     }, 1000 / 60); // 60 fps
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
    debounce: debounce,
    animateCSS: animateCSS,
    Toggle: Toggle,
    toggleClass: toggleClass,
    Accordion: Accordion,
    fadeOut: fadeOut,
    fadeIn: fadeIn,
    getScrollbarWidth: getScrollbarWidth,
    smoothScrollTo: smoothScrollTo
  };
})();

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  document.addEventListener(
    'shopify:section:load',
    this._onSectionLoad.bind(this)
  );
  document.addEventListener(
    'shopify:section:unload',
    this._onSectionUnload.bind(this)
  );
  document.addEventListener(
    'shopify:section:select',
    this._onSelect.bind(this)
  );
  document.addEventListener(
    'shopify:section:deselect',
    this._onDeselect.bind(this)
  );
  document.addEventListener(
    'shopify:block:select',
    this._onBlockSelect.bind(this)
  );
  document.addEventListener(
    'shopify:block:deselect',
    this._onBlockDeselect.bind(this)
  );
};

theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var id = container.getAttribute('data-section-id');
    var type = container.getAttribute('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = document.querySelector(
      '[data-section-id="' + evt.detail.sectionId + '"]'
    );

    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    document.querySelectorAll('[data-section-type="' + type + '"]').forEach(
      function(container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

theme.Disclosure = (function() {
  var selectors = {
    disclosureForm: '[data-disclosure-form]',
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure(disclosure) {
    this.container = disclosure;
    this._cacheSelectors();
    this._setupListeners();
  }

  Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        disclosureForm: this.container.closest(selectors.disclosureForm),
        disclosureList: this.container.querySelector(selectors.disclosureList),
        disclosureToggle: this.container.querySelector(
          selectors.disclosureToggle
        ),
        disclosureInput: this.container.querySelector(
          selectors.disclosureInput
        ),
        disclosureOptions: this.container.querySelectorAll(
          selectors.disclosureOptions
        )
      };
    },

    _setupListeners: function() {
      this.eventHandlers = this._setupEventHandlers();

      this.cache.disclosureToggle.addEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.addEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.addEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.addEventListener('click', this.eventHandlers.onBodyClick);
    },

    _setupEventHandlers: function() {
      return {
        connectOptions: this._connectOptions.bind(this),
        toggleList: this._toggleList.bind(this),
        onBodyClick: this._onBodyClick.bind(this),
        onDisclosureKeyUp: this._onDisclosureKeyUp.bind(this),
        onDisclosureListFocusOut: this._onDisclosureListFocusOut.bind(this),
        onDisclosureToggleFocusOut: this._onDisclosureToggleFocusOut.bind(this)
      };
    },

    _connectOptions: function(event) {
      event.preventDefault();

      this._submitForm(event.currentTarget.dataset.value);
    },

    _onDisclosureToggleFocusOut: function(event) {
      var disclosureLostFocus =
        this.container.contains(event.relatedTarget) === false;

      if (disclosureLostFocus) {
        this._hideList();
      }
    },

    _onDisclosureListFocusOut: function(event) {
      var childInFocus = event.currentTarget.contains(event.relatedTarget);

      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !childInFocus) {
        this._hideList();
      }
    },

    _onDisclosureKeyUp: function(event) {
      if (event.which !== 27) return;
      this._hideList();
      this.cache.disclosureToggle.focus();
    },

    _onBodyClick: function(event) {
      var isOption = this.container.contains(event.target);
      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !isOption) {
        this._hideList();
      }
    },

    _submitForm: function(value) {
      this.cache.disclosureInput.value = value;
      this.cache.disclosureForm.submit();
    },

    _hideList: function() {
      this.cache.disclosureList.classList.remove(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', false);
    },

    _toggleList: function() {
      var ariaExpanded =
        this.cache.disclosureToggle.getAttribute('aria-expanded') === 'true';
      this.cache.disclosureList.classList.toggle(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', !ariaExpanded);
    },

    destroy: function() {
      this.cache.disclosureToggle.removeEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.removeEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.removeEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.removeEventListener(
        'click',
        this.eventHandlers.onBodyClick
      );
    }
  });

  return Disclosure;
})();

/*============================================================================
 Other Functions
==============================================================================*/

document.addEventListener('DOMContentLoaded', (event) => {

  /* Initialize Accordions */
  WAU.Accordion.init();

  (function initModals() {
    if (document.querySelector('[data-wau-modal-content="contact-form"]')) {
      WAU.Modal.init("contact-form");
    }

    if (document.querySelector('[data-wau-modal-content="create-customer"]')) {
      WAU.Modal.init("create-customer");
    }

    if (document.querySelector('[data-wau-modal-content="recover-password"]')) {
      WAU.Modal.init("recover-password");
    }

    if (document.querySelector('[data-wau-modal-content="new-address"]')) {
      WAU.Modal.init("new-address");
    }

    var modals = document.querySelectorAll('[data-wau-modal-content]');
    if (!modals) return false;
    modals.forEach((item, i) => {
      var contentType = item.dataset.wauModalContent;
      if (contentType.includes("edit-address")) {
    	WAU.Modal.init(item.dataset.wauModalContent);
      }
    });
  })();

  (function scrollUp(){
    var target = document.querySelector("footer");

    var scrollToTopBtn = document.querySelector(".scrollup")
    var rootElement = document.documentElement

    function callback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrollToTopBtn.classList.add("showBtn")
        } else {
          scrollToTopBtn.classList.remove("showBtn")
        }
      });
    }

    function scrollToTop() {
      theme.Helpers.smoothScrollTo(0, 0, 500);
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);

    let observer = new IntersectionObserver(callback);
    observer.observe(target);
  })();

  (function iframeWrappers() {
    var el = document.querySelector('.rte > iframe');
    if ( !el ) {
      return false;
    }

    var wrapper = document.createElement('div');
        wrapper.className = "video-wrapper";

    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  })();

});

/*============================================================================
 Shopify Functions
==============================================================================*/
Shopify.theme.cart = (function (exports) {
  'use strict';

  function getDefaultRequestConfig() {
    return JSON.parse(
      JSON.stringify({
        credentials: 'same-origin',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;'
        }
      })
    );
  }

  function fetchJSON(url, config) {
    return fetch(url, config).then(function(response) {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    });
  }

  function cart() {
    return fetchJSON('/cart.js', getDefaultRequestConfig());
  }

  function cartAdd(id, quantity, properties) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify({
      id: id,
      quantity: quantity,
      properties: properties
    });

    return fetchJSON('/cart/add.js', config);
  }

  function cartAddFromForm(formData) {
    var config = getDefaultRequestConfig();
    delete config.headers['Content-Type'];

    config.method = 'POST';
    config.body = formData;

    return fetchJSON('/cart/add.js', config);
  }

  function cartChange(line, options) {
    var config = getDefaultRequestConfig();

    options = options || {};

    config.method = 'POST';
    config.body = JSON.stringify({
      line: line,
      quantity: options.quantity,
      properties: options.properties
    });

    return fetchJSON('/cart/change.js', config);
  }

  function cartClear() {
    var config = getDefaultRequestConfig();
    config.method = 'POST';

    return fetchJSON('/cart/clear.js', config);
  }

  function cartUpdate(body) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify(body);

    return fetchJSON('/cart/update.js', config);
  }

  function cartShippingRates() {
    return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());
  }

  function key(key) {
    if (typeof key !== 'string' || key.split(':').length !== 2) {
      throw new TypeError(
        'Theme Cart: Provided key value is not a string with the format xxx:xxx'
      );
    }
  }

  function quantity(quantity) {
    if (typeof quantity !== 'number' || isNaN(quantity)) {
      throw new TypeError(
        'Theme Cart: An object which specifies a quantity or properties value is required'
      );
    }
  }

  function id(id) {
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Theme Cart: Variant ID must be a number');
    }
  }

  function properties(properties) {
    if (typeof properties !== 'object') {
      throw new TypeError('Theme Cart: Properties must be an object');
    }
  }

  function form(form) {
    if (!(form instanceof HTMLFormElement)) {
      throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');
    }
  }

  function options(options) {
    if (typeof options !== 'object') {
      throw new TypeError('Theme Cart: Options must be an object');
    }

    if (
      typeof options.quantity === 'undefined' &&
      typeof options.properties === 'undefined'
    ) {
      throw new Error(
        'Theme Cart: You muse define a value for quantity or properties'
      );
    }

    if (typeof options.quantity !== 'undefined') {
      quantity(options.quantity);
    }

    if (typeof options.properties !== 'undefined') {
      properties(options.properties);
    }
  }

  /**
   * Cart Template Script
   * ------------------------------------------------------------------------------
   * A file that contains scripts highly couple code to the Cart template.
   *
   * @namespace cart
   */

  /**
   * Returns the state object of the cart
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getState() {
    return cart().then(function(cart) {
      Events.trigger("cart:ready", cart)
    });
  }

  /**
   * Returns the object of the cart
   * @returns {Promise} Resolves with the object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getCart() {
    return cart().then(function(cart) {
      return cart;
    });
  }

  /**
   * Returns the index of the cart line item
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the index number of the line item
   */
  function getItemIndex(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var index = -1;

      state.items.forEach(function(item, i) {
        index = item.key === key$$1 ? i + 1 : index;
      });

      if (index === -1) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }

      return index;
    });
  }

  /**
   * Fetches the line item object
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function getItem(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var lineItem = null;

      state.items.forEach(function(item) {
        lineItem = item.key === key$$1 ? item : lineItem;
      });

      if (lineItem === null) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }
      return lineItem;
    });
  }

  /**
   * Add a new line item to the cart
   * @param {number} id The variant's unique ID
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItem(id$$1, options$$1) {
    options$$1 = options$$1 || {};

    id(id$$1);

    return cartAdd(id$$1, options$$1.quantity, options$$1.properties);
  }

  /**
   * Add a new line item to the cart from a product form
   * @param {object} form DOM element which is equal to the <form> node
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItemFromForm(form$$1) {
    form(form$$1);

    var formData = new FormData(form$$1);
    id(parseInt(formData.get('id'), 10));

    return cartAddFromForm(formData);
  }

  /**
   * Changes the quantity and/or properties of an existing line item.
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function updateItem(key$$1, options$$1) {
    key(key$$1);
    options(options$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, options$$1);
    });
  }

  /**
   * Removes a line item from the cart
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function removeItem(key$$1) {
    key(key$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, { quantity: 0 });
    });
  }

  /**
   * Sets all quantities of all line items in the cart to zero. This does not remove cart attributes nor the cart note.
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function clearItems() {
    return cartClear().then(function() {
      Events.trigger("cart:clear");
    });
  }

  /**
   * Gets all cart attributes
   * @returns {Promise} Resolves with the cart attributes object
   */
  function getAttributes() {
    return cart().then(function(state) {
      return state.attributes;
    });
  }

  /**
   * Sets all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function updateAttributes(attributes) {
    return cartUpdate({ attributes: attributes });
  }

  /**
   * Clears all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function clearAttributes() {
    return getAttributes().then(function(attributes) {
      for (var key$$1 in attributes) {
        attributes[key$$1] = '';
      }
      return updateAttributes(attributes);
    });
  }

  /**
   * Gets cart note
   * @returns {Promise} Resolves with the cart note string
   */
  function getNote() {
    return cart().then(function(state) {
      return state.note;
    });
  }

  /**
   * Sets cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function updateNote(note) {
    return cartUpdate({ note: note });
  }

  /**
   * Clears cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function clearNote() {
    return cartUpdate({ note: '' });
  }

  /**
   * Get estimated shipping rates.
   * @returns {Promise} Resolves with response of /cart/shipping_rates.json (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-shipping-rates)
   */
  function getShippingRates() {
    return cartShippingRates();
  }

  exports.getState = getState;
  exports.getCart = getCart;
  exports.getItemIndex = getItemIndex;
  exports.getItem = getItem;
  exports.addItem = addItem;
  exports.addItemFromForm = addItemFromForm;
  exports.updateItem = updateItem;
  exports.removeItem = removeItem;
  exports.clearItems = clearItems;
  exports.getAttributes = getAttributes;
  exports.updateAttributes = updateAttributes;
  exports.clearAttributes = clearAttributes;
  exports.getNote = getNote;
  exports.updateNote = updateNote;
  exports.clearNote = clearNote;
  exports.getShippingRates = getShippingRates;

  return exports;

}({}));

Shopify.theme.ajaxCart = {
  init: function init() {
    let config = document.getElementById('cart-config');
    if ( !config ) return false;
    config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      cartTrigger: '.js-mini-cart-trigger',
      cartPageLoader: '.ajax-cart__page-wrapper .js-mini-cart-loader',
      addToCart: '.js-ajax-submit'
    };

    // Init carts
    this.initializeAjaxCart(config);

    // Init cart type
    if (config.cart_action == 'drawer') {
      WAU.Slideout.init("ajax-cart");
    } else if (config.cart_action == 'modal_cart')  {
      WAU.Modal.init("ajax-cart");
    }

    // Override add to cart form
    document.querySelectorAll(selectors.addToCart).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');
        Shopify.theme.ajaxCart.addToCart(addToCartForm, config, false);

        return false;
      });
    });

    // Update cart page on load
    if (document.querySelector('body').classList.contains('template-cart')) {
      Shopify.theme.cart.getCart().then(Cart => {
        Shopify.theme.ajaxCart.updateView(config, Cart);

        // Remove page loader
        setTimeout(function(){
          theme.Helpers.fadeOut(document.querySelector(selectors.cartPageLoader));
        }, 800);

      });
    }

    // On cart trigger click
    let cartTrigger = document.querySelector(selectors.cartTrigger);
    if ( !cartTrigger ) return false;
    document.querySelector(selectors.cartTrigger).addEventListener('click', function (e) {
      e.preventDefault();

      // Open drawer
      Shopify.theme.cart.getCart().then(Cart => {

        Shopify.theme.ajaxCart.updateView(config, Cart);

        if (config.cart_action == 'drawer') {
          Shopify.theme.ajaxCart.showDrawer(config);
        } else if (config.cart_action == 'modal_cart')  {
          Shopify.theme.ajaxCart.showModal(config);
        } else {
          window.location.href = config.cart_url;
        }

      });

      return false;
    });
  },
  cartEvents: function cartEvents(config) {
    var selectors = {
      cartDrawerRemove: '.js-cart-remove',
      cartDrawerQtyDecrease: '[data-ajax-qty-decrease]',
      cartDrawerQtyIncrease: '[data-ajax-qty-increase]',
      cartNote: '.js-cart-note'
    };

    // Cart Events
    document.querySelectorAll(selectors.cartDrawerRemove).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemKey = this.dataset.itemKey;

        Shopify.theme.ajaxCart.removeFromCart(itemKey, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyDecrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemId = this.dataset.ajaxQtyDecrease;
        Shopify.theme.ajaxCart.adjustQty(-1, itemId, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyIncrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemId = this.dataset.ajaxQtyIncrease;
        Shopify.theme.ajaxCart.adjustQty(+1, itemId, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartNote).forEach((element, i) => {

      element.addEventListener('blur', (event) => {
        let note = element.value;
        Shopify.theme.cart.updateNote(note).then(state => {
          Shopify.theme.ajaxCart.updateView(config, state);
        });
      });

    });

    // Reinit shipping calc
    if ( config.show_calculator ) {
      setTimeout(function(){
        Shopify.theme.shippingCalculator.init();
      }, 1000);
    }

    // Restart Payment buttons
    if (Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }
  },
  showDrawer: function showDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._openByName("ajax-cart");

    // Remove drawer loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideDrawer: function hideDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._closeByName("ajax-cart");

    // Show drawer loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  showModal: function showModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._openByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideModal: function hideModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._closeByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  removeFromCart: function removeFromCart(itemKey, config, callback) {
    Shopify.theme.cart.removeItem(itemKey).then(state => {
      Shopify.theme.ajaxCart.updateView(config, state);
    });
  },
  adjustQty: function adjustQty(value, itemId, config) {

    var selectors = {
      lineItem: '.item_' + itemId,
      updatesItem: '.updates_' + itemId
    };

    // Update Line Item
    document.querySelectorAll(selectors.lineItem).forEach((element, i) => {
      elementInput = element.querySelector(selectors.updatesItem),
      key = elementInput.dataset.itemKey,
      max = elementInput.dataset.limit,
      quantity = parseInt(elementInput.value) + parseInt(value);

      // Check limit to prevent over adding
      if ( max != '' && quantity > max ) {
        let cartNote = document.createElement("div");
            cartNote.classList.add('mini-cart__cart-note');
            cartNote.innerHTML = '<p><b>' + config.cart_error + '</b>&nbsp;&nbsp;' + config.update_qty_error + '</p>';

        let adjacentElement = element.querySelector('.js-item-quantity');
        let parentElement = adjacentElement.parentNode;

        parentElement.appendChild(cartNote, adjacentElement);

        setTimeout(function() {
          theme.Helpers.fadeOut(cartNote);
          parentElement.removeChild(cartNote);
        }, 2500);

        return false;
      }

      // Check new qty to prevent going lower than 1
      if (quantity === 0 ) return false;

      // Set new quantity
      elementInput.value = quantity;

      // Adjust cart object
      setTimeout(function() {
        Shopify.theme.cart.updateItem(key, { quantity }).then(state => {
          Shopify.theme.ajaxCart.updateView(config, state);
        });
      }, 250);

    });
  },
  addToCart: function addToCart(addToCartForm, config, isQuickview) {
    var selectors = {
      addToCart: '.js-ajax-submit',
      cartAddedMsg: '.js-added-msg'
    }

    let context;

    if ( isQuickview ) {
      context = document.querySelector('.js-quickview-content');
    } else {
      context = document;
    }

    // Disable add to cart button temporarily]
    context.querySelector(selectors.addToCart).value = config.adding_to_cart;
    context.querySelector(selectors.addToCart).classList.add('disabled');
    context.querySelector(selectors.addToCart).getAttribute('disabled', 'disabled');

    Shopify.theme.cart.addItemFromForm(addToCartForm).then(item => {
      // Re-enable add to cart button
      document.querySelector(selectors.addToCart).value = config.added_to_cart;
      document.querySelector(selectors.addToCart).classList.remove('disabled');
      document.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

      setTimeout(function(){
        document.querySelector(selectors.addToCart).value = config.add_to_cart;
      }, 3000);

      Shopify.theme.cart.getCart().then(Cart => {

        if ( isQuickview ) {
          Shopify.theme.quickview.hideModal();
        }

        if (config.cart_action == 'drawer' && config.cart_added_event == 'mini_cart') {
          Shopify.theme.ajaxCart.showDrawer(config);
        } else if (config.cart_action == 'modal_cart' && config.cart_added_event == 'mini_cart' )  {
          Shopify.theme.ajaxCart.showModal(config);
        } else if ( config.cart_added_event == 'product_page' ) {
          theme.Helpers.fadeIn(document.querySelector(selectors.cartAddedMsg));

          setTimeout(function(){
            theme.Helpers.fadeOut(document.querySelector(selectors.cartAddedMsg));
          }, 3000);
        } else {
          window.location.href = config.cart_url;
        }

        Shopify.theme.ajaxCart.updateView(config, Cart);
      });
    }).catch(error => {
      if (error.status == 422) {

        // Show error msg
        theme.Helpers.fadeIn(context.querySelector('.js-error-msg'));

        // Re-enable add to cart button
        context.querySelector(selectors.addToCart).value = config.add_to_cart;
        context.querySelector(selectors.addToCart).classList.remove('disabled');
        context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

        setTimeout(function(){
          theme.Helpers.fadeOut(context.querySelector('.js-error-msg'));
        }, 3000);
      } else {
        console.log(error)
      }
    });
  },
  getAjaxCart: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const responseOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }
    let options = responseOptions;

    return html;
  },
  initializeAjaxCart: function initializeAjaxCart(config) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      // Replace cart content
      document.querySelectorAll('.js-ajax-cart-content').forEach((item, i) => {
        item.innerHTML = html.content;
      });

    }).then(response => {
      // Init shipping calc
      if ( config.show_calculator ) {
        setTimeout(function(){
          Shopify.theme.shippingCalculator.init();
        }, 1000);
      }
    }).catch(error => {
      console.log(error)
    });
  },
  updateView: function updateView(config, Cart) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      var selectors = {
        cartContent: '.js-ajax-cart-content',
        cartEmpty: '.js-cart-empty',
        cartForm: '.js-cart-form',
        cartAccordion: '.js-cart-accordion',
        cartCount: '.js-cart-count'
      };

      if (Cart.item_count === 0) {
        // Hide form
        document.querySelectorAll(selectors.cartForm).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Show empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.remove('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = '0';
        });
      } else {
        // Hide empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = Cart.item_count;
        });
        // Replace cart page and drawer content
        document.querySelectorAll(selectors.cartContent).forEach((item, i) => {
          item.innerHTML = html.content;
        });
        // Reload accordions
        document.querySelectorAll(selectors.cartAccordion).forEach((item, i) => {
          theme.Helpers.Accordion(item, '.tlink.has_sub_menu a', '.accordion-content.sub');
          theme.Helpers.Accordion(item, '.tlink2.has_sub_menu a', '.accordion-content2.sub');
        });

        // Reload events
        Shopify.theme.ajaxCart.cartEvents(config);
      }

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.shippingCalculator = {
  init: function init() {
    var config = document.getElementById('cart-config');
    if ( !config ) return false;
    var config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      container: '.js-shipping-calc-wrapper',
      submitButton: '.js-shipping-calc-submit',
      addressZip: '.js-shipping-calc-address-zip',
      addressCountry: '.js-shipping-calc-address-country',
      addressProvince: '.js-shipping-calc-address-province',
      addressProvinceLabel: '.js-shipping-calc-address-province-label',
      response: '.js-shipping-calc-response'
    }

    let calculators = document.querySelectorAll(selectors.container);

    calculators.forEach((element, i) => {
      element.classList.add("shipping-calculator-" + i)
    });

    let container = document.querySelector('.shipping-calculator-0');

    // Initialize observer on shipping address.
    new Shopify.CountryProvinceSelector('address_country', 'address_province', {
      hideElement: 'address_province_container'
    } );

    // Updating province label.
    var countriesSelect = container.querySelector(selectors.addressCountry);
    var addressProvinceLabelEl = container.querySelector(selectors.addressProvinceLabel);

    if (typeof Countries !== 'undefined') {
      Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      countriesSelect.change(function() {
        Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      });
    }

    // When any of the calculator buttons is clicked, get rates.
    let button = container.querySelector(selectors.submitButton);

    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Disabling all buttons.
      Shopify.theme.shippingCalculator.disableButtons(config, container);

      // Hiding response.
      container.querySelector(selectors.response).style.display = 'none';

      // Reading shipping address for submission.
      let shippingAddress = {};
      shippingAddress.zip = container.querySelector(selectors.addressZip).value || '';
      shippingAddress.country = container.querySelector(selectors.addressCountry).value || '';
      shippingAddress.province = container.querySelector(selectors.addressProvince).value || '';

      Shopify.theme.shippingCalculator.getRates(config, shippingAddress, container);
    });
  },
  enableButtons: function enableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).removeAttribute('disabled');
    container.querySelector(selectors.submitButton).classList.remove('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_submit;
  },
  disableButtons: function disableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).setAttribute('disabled', 'disabled');
    container.querySelector(selectors.submitButton).classList.add('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_calculating;
  },
  getRates: function getRates(config, shipping_address, container) {

    let url = '/cart/shipping_rates.json?shipping_address%5Bzip%5D=' + shipping_address.zip + '&shipping_address%5Bcountry%5D=' + shipping_address.country + '&shipping_address%5Bprovince%5D=' + shipping_address.province;

    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => {
      if ( !response.shipping_rates ) {
        Shopify.theme.shippingCalculator.onError(response, config, container);
      } else {
        let rates = response.shipping_rates;
        Shopify.theme.shippingCalculator.onRatesUpdate(rates, shipping_address, config, container);
      }
    }).catch(error => {
      Shopify.theme.shippingCalculator.onError(error, config, container);
    });

  },
  onError: function onError(error, config, container) {

    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    let feedback = config.calculator_error + ' ' + Object.keys(error)[0] + ' ' + Object.values(error)[0];

    // Update calculator.
    Shopify.theme.shippingCalculator.render( { rates: [], errorFeedback: feedback, success: false }, container, config );

    container.querySelector('.js-shipping-calc-rates').style.display = "none";
    container.querySelector('.js-shipping-calc-response').style.display = "block";
  },
  onRatesUpdate: function onRatesUpdate(rates, shipping_address, config, container) {
    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    // Formatting shipping address.
    var readable_address = '';
    if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
    if (shipping_address.province) readable_address += shipping_address.province + ', ';
    readable_address += shipping_address.country;

    if ( !rates ) return false;

    // Format rates for moneyFormat
    rates.forEach((rate, i) => {
      rate.price = Shopify.theme.shippingCalculator.formatRate(rate.price, config);
    });

    // Show rates and feedback.
    Shopify.theme.shippingCalculator.render( { rates: rates, address: readable_address, success:true }, container, config );

  },
  formatRate: function formatRate(ratePrice, config) {

    let formatDollarsToCents = function(value) {
        value = (value + '').replace(/[^\d.-]/g, '');
        if (value && value.includes('.')) {
            value = value.substring(0, value.indexOf('.') + 3);
        }
        return value ? Math.round(parseFloat(value) * 100) : 0;
    }
    let cents = formatDollarsToCents(ratePrice);

    return Shopify.formatMoney(cents, config.money_format);
  },
  render: function render(response, container, config) {
    let rateFeedback = document.querySelector('.js-shipping-calc-rates-feedback'),
        rateList = document.querySelector('.js-shipping-calc-rates');

    // Empty feedback
    rateFeedback.innerHTML = '';

    // Update feedback
    if (response.rates.length > 1) {
      rateFeedback.innerHTML = config.shipping_multi_rate_one + response.rates.length + config.shipping_multi_rate_two + response.address + config.shipping_multi_rate_three + response.rates[0].price;
    } else if (response.rates.length === 1){
      rateFeedback.innerHTML = config.shipping_single_rate + response.address;
    } else {
      rateFeedback.innerHTML = config.shipping_no_destination;
    }

    // Empty rates
    rateList.innerHTML = '';

    // Update rates
    response.rates.forEach((rate, i) => {
      const rateLI = document.createElement('li');
      rateLI.classList.add('shipping-calc__rate');
      rateLI.innerHTML = rate.name + ' at ' + rate.price;
      rateList.appendChild(rateLI)
    });

    container.querySelector('.js-shipping-calc-rates').style.display = "block";
    document.querySelector('.js-shipping-calc-response').style.display = "block";
  }
}

Shopify.theme.quickview = {
  init: function init() {

    var selectors = {
      quickviewButton: '.js-quickview-trigger'
    }

    // Init on click event for buttons
    document.querySelectorAll(selectors.quickviewButton).forEach((button, i) => {

      button.addEventListener('click', function(event) {
        event.preventDefault();

        // Init modal
        WAU.Modal.init("quickview");

        // Get template
        let productUrl = this.dataset.productUrl;
        Shopify.theme.quickview.getTemplate(productUrl);
      });
    });

  },
  formatTemplate: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }

    return html;
  },
  showModal: function showModal() {

    WAU.Modal._openByName("quickview");
  },
  hideModal: function hideModal() {

    document.querySelector('.js-quickview-content').innerHTML = '';

    WAU.Modal._closeByName("quickview");
  },
  getTemplate: function getTemplate(productUrl) {
    let data, url;
    url = productUrl;

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.quickview.formatTemplate(response);

      // Replace modal content
      document.querySelector('.js-quickview-content').innerHTML = html.content;

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger quickview event
      theme.Product(context);

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Load Payment Buttons
      if (context.dataset.paymentButton == 'true' && Shopify.PaymentButton) {
        Shopify.PaymentButton.init()
      }
    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger event for add to cart
      context.querySelector('.js-ajax-submit').addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');

        let cartConfig = document.getElementById('cart-config');
        if ( !cartConfig ) return false;
        cartConfig = JSON.parse(cartConfig.innerHTML || '{}');

        Shopify.theme.ajaxCart.addToCart(addToCartForm, cartConfig, true);

        return false;
      });
    }).then(response => {

      // Show modal
      Shopify.theme.quickview.showModal();

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.quickview.init();
Shopify.theme.ajaxCart.init();

// Reinit cart on section events
document.addEventListener('shopify:section:select', function(event){
  Shopify.theme.quickview.init();
  Shopify.theme.ajaxCart.init();
});

/*======================================================
  Slideshow Section
========================================================*/
theme.Slideshow = (function() {
  function Slideshow(container) {

    const slideshows = document.querySelectorAll('.js-slideshow');

    slideshows.forEach(Slideshow => {
      const flktyData = Slideshow.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
        new Flickity(Slideshow, flktyOptions);
    });

  }

  return Slideshow;
})();

theme.Slideshow.prototype = _.assignIn({}, theme.Slideshow.prototype, {

  onLoad: function(event) {
    const Slideshow = event.target.closest('.js-slideshow');
    const flktyData = Slideshow.getAttribute('data-flickity');
    const flktyOptions = JSON.parse(flktyData);
        new Flickity('.js-slideshow', flktyOptions);
  },

  onBlockSelect: function(event) {
   const Slideshow = event.target.closest('.js-slideshow');
   const flkty = Flickity.data( Slideshow );
   const Slide = event.target.getAttribute("data-slider-index");
   flkty.select( Slide );
   flkty.pausePlayer();
  },

  onBlockDeselect: function() {
    const Slideshow = event.target.closest('.js-slideshow');
    const flkty = Flickity.data( Slideshow );
    flkty.unpausePlayer();
  }
});

/*======================================================
  Featured Collection Section
========================================================*/
theme.FeaturedProducts = (function() {
  function FeaturedProducts(container) {

  var Carousels = document.querySelectorAll('.featured__collection-carousel');
  if ( !Carousels ) {
    return false;
  }
  Carousels.forEach(Carousel => {
    const flktyData = Carousel.getAttribute('data-flickity');
    const flktyOptions = JSON.parse(flktyData);
        new Flickity(Carousel, flktyOptions);
  });

     var ProductColorSwatches = (function() {

       let returnObj = {};

       function removeActiveClass(element) {
        if (!element) {
          return;
        }
        element.closest('.js-product-listing').querySelectorAll('.js-collection-swatch').forEach(function(element,index) {
          if (element.classList.contains('js-is-active')) {
            element.classList.remove('js-is-active');
          }
        });
       }

       function setDuration(container, duration) {
         container.querySelectorAll('.js-product-image').forEach(function(element, index) {
           element.style.animationDuration = `${duration}ms`;
         });
       }

       function init(container, duration = 200, name = '.js-collection-swatch') {
         if (!container) {
           console.log('ProductColorSwatches requires a container and selector');
           return;
         }
         if (name == undefined || name == '' || name == null) {
           name = '.js-collection-swatch';
         }
         setDuration(container, duration);
         const swatches = container.querySelectorAll(name);
         swatches.forEach(function(element, index) {
           element.addEventListener('mouseover', function() {
             const swatchImage = element.getAttribute('data-href');
             if (!swatchImage) return false;
             if (element.classList.contains('js-is-active')) {
              return;
             }
             removeActiveClass(element);
             element.classList.add('js-is-active');
             theme.Helpers.animateCSS(element.closest('.js-product-listing').querySelector('.js-product-image'), 'fadeOut', '').then(function() {
             element.closest('.js-product-listing').querySelector('.js-product-image img').setAttribute('srcset', swatchImage);
             }).then(function() {
              theme.Helpers.animateCSS(element.closest('.js-product-listing').querySelector('.js-product-image'), 'fadeIn', '')
            });
           });
         });
       };

       returnObj.init = init;

       return returnObj;

     })();

     ProductColorSwatches.init(container, 200);

     document.addEventListener('shopify:section:unload', function(event){

       var Carousel = event.target.closest('.featured__collection-carousel');
       if ( !Carousel ) {
         return false;
       }
       const flkty = Flickity.data(Carousel);
       flkty.destroy()
     });

     document.addEventListener('shopify:section:load', function(event){
       var Carousel = event.target.closest('.js-carousel');
       if ( !Carousel ) {
         return false;
       }
       const flktyData = Carousel.getAttribute('data-flickity');
       const flktyOptions = JSON.parse(flktyData);
           new Flickity('.js-carousel', flktyOptions);
     });

  }

  FeaturedProducts.prototype = _.assignIn({}, FeaturedProducts.prototype, {});

  return FeaturedProducts;
})();

/*============================================================================
  Product Modules
==============================================================================*/

var Events = new EventEmitter3();
Events.trigger = Events.emit; // trigger alias

var mobile = window.matchMedia('(max-width: 740px)');
var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
var device = window.matchMedia('(max-width: 980px)');
var desktop = window.matchMedia('(min-width: 980px)');

theme.ProductForm = function (context, sectionId, events, Product) {
    var formConfig = context.querySelector('#AddToCartForm');
    var config = JSON.parse(formConfig.dataset.productForm || '{}');

    (function quantity() {
      var element = context.querySelector("[name=quantity]");

      events.on("quantitycontrol:click", change);

      function change(value) {
        var quantity = parseInt(element.value) + value;

        if ( quantity < 1 ) {
          return false;
        }

        element.value = quantity;
      }
    })();

    (function quantity_controls() {
      Control(".quantity-control-up", 1);
      Control(".quantity-control-down", -1);

      function Control(selector, value) {
        var element = context.querySelector(selector);

        if ( !element ) {
          return false;
        }

        element.addEventListener("click", function (event) {
          event.preventDefault();
          events.trigger("quantitycontrol:click", value);
        });
      }
    })();

    if ( context.querySelector('[data-store-availability-container]') ) {
      Events.trigger("storeavailability:variant", Product.variants[0].id, Product.title);
    }

    if ( config.quickview ) {
      var prodSelector = "qv-product-select-" + Product.id;
    } else {
      var prodSelector = sectionId + "-product-select-" + Product.id;
    }

    if ( Product.variants.length == '1' ) return false;

    new Shopify.OptionSelectors(prodSelector, {
      product: Product,
      onVariantSelected: function(variant, selector) {
        if ( !variant ) {
          events.trigger("variantunavailable");
          Events.trigger("storeavailability:unavailable");
          return;
        }

        if ( context.querySelector('[data-store-availability-container]') ) {
          Events.trigger("storeavailability:variant", Product.variants[0].id, Product.title);
        }

        events.trigger("variantchange", variant);
        events.trigger("variantchange:option1:" + variant.option1);
        events.trigger("variantchange:option2:" + variant.option2);
        events.trigger("variantchange:option3:" + variant.option3);


        if ( context.querySelector('[data-store-availability-container]') ) {
          Events.trigger("storeavailability:variant", variant.id, Product.title);
        }

        if ( variant.featured_media ) {
          Events.trigger("variantchange:image", variant.featured_media.id, context);
        }
      },
      enableHistoryState: config.enable_history
    });

    (function single_option_selectors() {
      var elements = context.querySelectorAll(".single-option-selector");

      elements.forEach(Selector);

      function Selector(element, index) {
        var option_position = index + 1;

        events.on("swatch:change:" + option_position, change);

        function change(value) {
          element.value = value;

          element.dispatchEvent(
            new CustomEvent('change', {
              bubbles: true,
              cancelable: true
            })
          );
        }
      }
    })();

    (function swatches() {
       var elements = context.querySelectorAll("[type=radio]");
       var states = {
         sold_out: function (element) {
           element.parentElement.classList.add("soldout");
         },
         available: function (element) {
           element.parentElement.classList.remove("soldout");
         }
       };

       events.on("variantunavailable", set_unavailable);

       elements.forEach(Swatch);

       function set_unavailable() {
         var selected = {};
         var selected_elements = document.querySelectorAll("[type=radio]:checked");

         selected_elements.forEach(function (element) {
           var option = "option" + element.getAttribute("data-position");
           var value = element.value;
           selected[option] = value;
         });
         elements.forEach(function (element) {
           var available = false;
           var current_option = "option" + element.getAttribute("data-position");
           var current_value = element.value;
           var other_options = ["option1", "option2", "option3"].filter(function (option) {
             return selected[option] && option != current_option;
           });
           Product.variants.forEach(function (variant) {
             if ( !variant.available ) {
               return;
             }
             if ( variant[current_option] != current_value ) {
               return;
             }
             if ( variant[other_options[0]] == selected[other_options[0]] && variant[other_options[1]] == selected[other_options[1]] ) {
               available = true;
               return;
             }
           });
           if ( available ) {
             states.available(element);
           } else {
             states.sold_out(element);
           }
         });
       }
       function Swatch(element) {
         var option_position = element.getAttribute("data-position");
         var current_option = "option" + option_position;
         var other_options = ["option1", "option2", "option3"].filter(function (option) {
           return option != current_option;
         });
         element.addEventListener("change", function (event) {
           var selectedLabel = context.querySelector('#selected-option-' + option_position);
           selectedLabel.innerHTML = element.value;
           events.trigger("swatch:change:" + option_position, element.value);
         });
         events.on("variantchange:option" + option_position + ":" + element.value, select);
         events.on("variantchange", set_availability);
         function select() {
           element.checked = true;
         }
         function set_availability(current_variant) {
           var available = false;
           Product.variants.forEach(function (variant) {
             if ( !variant.available ) {
               return;
             }
             if ( variant[current_option] != element.value ) {
               return;
             }
             if ( variant[other_options[0]] != current_variant[other_options[0]] ) {
               return;
             }
             if ( variant[other_options[1]] != current_variant[other_options[1]] ) {
               return;
             }
             available = true;
           });
           if ( available ) {
             states.available(element);
           } else {
             states.sold_out(element);
           }
         }
       }
     })();

    (function price() {
      var element = context.querySelector(".price__regular .price-item--regular");

      events.on("variantchange", function (variant) {
        var price = money(variant.price);
        element.innerHTML = price;

        events.on("variantunavailable", function (variant) {
          price = config.unavailable;
          element.innerHTML = price;
        });
      });
    })();

    (function price_classes() {
      var element = context.querySelector("[data-price]");

      events.on("variantchange", function (variant) {
        if ( variant.available && variant.compare_at_price > variant.price ) {
          element.classList.add('price--on-sale');
          element.classList.remove('price--sold-out');
        } else if ( !variant.available && variant.compare_at_price > variant.price ) {
          element.classList.add('price--sold-out');
          element.classList.add('price--on-sale');
        } else if ( !variant.available ) {
          element.classList.add('price--sold-out');
          element.classList.remove('price--on-sale');
        } else {
          element.classList.remove('price--on-sale');
          element.classList.remove('price--sold-out');
        }

        if (variant.unit_price_measurement) {
          element.classList.add('price--unit-available');
        } else {
          element.classList.remove('price--unit-available');
        }
      });

    })();

    (function unit_price() {
        var element = context.querySelector("[data-unit-price]");
        var wrapper = context.querySelector(".price__unit");

        if ( !element ) {
          return false;
        }

        events.on("variantchange", function (variant) {
          var unitPrice = "";

          if (variant.unit_price) {
            unitPrice =
              Shopify.formatMoney(variant.unit_price, config.money_format); +
              ' ' +
              config.unit_price_separator +
              ' ' +
              getBaseUnit(variant);

              wrapper.style.display = "flex";
          } else {
            wrapper.style.display = "none";
          }

          element.innerHTML = unitPrice;
        });
      })();

    (function compare_price() {
      var saleEl = context.querySelector(".price__sale .price-item--sale");
      var regEl = context.querySelector(".price__sale .price-item--regular");

      if ( !saleEl ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        var salePrice = "",
            regPrice = "";

        if ( variant.compare_at_price > variant.price ) {
          regPrice = money(variant.compare_at_price);
          salePrice = money(variant.price);
        }

        saleEl.innerHTML = salePrice;
        regEl.innerHTML = regPrice;
      });
    })();

    (function sku() {
      var element = context.querySelector(".variant_sku");

      if ( !element ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        var variant_sku = variant.sku;
        element.innerHTML = variant_sku;
      });
      events.on("variantunavailable", function (variant) {
        var variant_sku = config.unavailable;
        element.innerHTML = variant_sku;
      });

    })();

    (function add_to_cart() {
      var element = context.querySelector(".add");

      events.on("variantchange", function (variant) {
        var text = config.button;
        var disabled = false;

        if ( !variant.available ) {
          text = config.sold_out;
          disabled = true;
        }

        element.value = text;
        element.disabled = disabled;
      });

      events.on("variantunavailable", function () {
        element.value = config.unavailable;
        element.disabled = true;
      });
    })();

    (function smart_payment_buttons() {
      var element = context.querySelector(".shopify-payment-button");

      if ( !element ) {
        return false;
      }

      events.on("variantchange", function (variant) {
        if ( !variant.available ) {
           element.style.display = 'none';
         } else {
           element.style.display = 'block';
         }
      });
    })();

    function money(cents) {
      return Shopify.formatMoney(cents, config.money_format);
    }

    function getBaseUnit(variant) {
     return variant.unit_price_measurement.reference_value === 1
       ? variant.unit_price_measurement.reference_unit
       : variant.unit_price_measurement.reference_value +
           variant.unit_price_measurement.reference_unit;
   }

}

theme.ProductGallery = (function () {
  function init(context, sectionId, events, Product) {
    let config = JSON.parse(context.querySelector('.js-product-gallery').dataset.galleryConfig || '{}'),
        main = context.querySelector('.js-carousel-main'),
        carouselNav = context.querySelector('.js-thumb-carousel-nav');

    if ( !main ) return false;

    this.mainSlider(main, carouselNav, config, context);

    if ( config.thumbPosition == 'bottom' && config.thumbSlider == true ) this.thumbSlider(carouselNav, main, context);

    if ( config.clickToEnlarge ) theme.ProductGallery.enlargePhoto(context);
  }

  function mainSlider(main, carouselNav, config, context) {
    let initialEl = main.querySelector("[data-image-id='" + context.dataset.initialVariant + "']"),
        initialIndex;

    if ( initialEl ) {
      initialIndex = initialEl.dataset.slideIndex;
    } else {
      initialIndex = 0;
    }

    var flkty = new Flickity( main, {
      // options
      fade: true,
      wrapAround: true,
      cellAlign: 'left',
      draggable: true,
      contain: true,
      pageDots: false,
      prevNextButtons: config.mainSlider,
      autoPlay: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      adaptiveHeight: false,
      imagesLoaded: true,
      initialIndex: initialIndex,
      on: {
        ready: function() {
          let id = this.selectedElement.dataset.imageId;

          /* Fade in */
          context.querySelector('.js-product-gallery').style.visibility = "visible";
        },
        change: function() {
          /* Set focus control on change */
          theme.ProductGallery.removeFocus(context);
          theme.ProductGallery.addFocus(this.selectedElement, context);

          /* Set media */
          theme.ProductGallery.setActiveThumbnail(this.selectedElement.dataset.imageId, this.selectedElement, context);
          theme.ProductGallery.switchMedia(this.selectedElement.dataset.imageId, context);

          /* Allow model drag */
          if ( this.selectedElement.classList.contains('model-slide') ) {
            if ( this.isDraggable ) {
              /* Turn off drag for model usage */
              this.options.draggable = !this.options.draggable;
              this.updateDraggable();
            }
          }
        }
      }
    });

    theme.ProductGallery.galleryEvents(flkty, context);

    if ( carouselNav ) theme.ProductGallery.thumbnails(flkty, carouselNav, config, context);
  }

  function thumbSlider(wrapper, main, context) {
    var flktyThumbs = new Flickity( wrapper, {
      // options
      asNavFor: main,
      wrapAround: false,
      groupCells: true,
      cellAlign: 'left',
      draggable: false,
      contain: true,
      imagesLoaded: true,
      pageDots: false,
      autoPlay: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      accessibility: false
    });
  }

  function thumbnails(flkty, carouselNav, config, context) {
    if ( !carouselNav ) return false;

    let thumbs = carouselNav.querySelectorAll('.js-thumb-item');

    if ( !thumbs ) return false;

    /* on thumbnail click and key enter */
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', function(event){
        event.preventDefault();

        let index = this.dataset.slideIndex,
            el = carouselNav.querySelectorAll('.js-thumb-item')[index],
            mediaId = this.dataset.imageId;

        /* Update classes & aria */
        theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
        theme.ProductGallery.switchMedia(mediaId, context);

        /* move thumb slider to position */
        theme.ProductGallery.setThumbPos(this, carouselNav);

        /* change slide */
        flkty.select( index );

      });

      thumb.addEventListener('keypress', function(event){
        event.preventDefault();

        if(event.which == 13){ //Enter key pressed

          let index = this.dataset.slideIndex,
              el = carouselNav.querySelectorAll('.js-thumb-item')[index],
              mediaId = this.dataset.imageId;

          /* Update classes & aria */
          theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
          theme.ProductGallery.switchMedia(mediaId, context);

          /* move thumb slider to position */
          theme.ProductGallery.setThumbPos(this, carouselNav);

          /* change slide */
          flkty.select( index );

        }
      });
    });

    /* adjust thumbnail sizes */
    if (config.thumbPosition != 'bottom') {
      theme.ProductGallery.setThumbSizes(carouselNav, config, context);
    }
  }

  function setThumbSizes(carouselNav, config, context) {
    let wrapper = context.querySelector('.js-thumb-vertical-wrapper'),
      wrapperWidth = wrapper.offsetWidth,
      thumbsShown = config.thumbsShown || 4;

    carouselNav.querySelectorAll('.js-thumb-item').forEach((item, i) => {
      item.style.maxWidth = wrapperWidth + 'px';
    });

    carouselNav.querySelectorAll('.js-thumb-item-img').forEach((item, i) => {
      item.style.width = wrapperWidth + 20 + 'px';
      item.style.height = wrapperWidth + 20 + 'px';
    });

    let thumbHeight = carouselNav.querySelectorAll('.js-thumb-item-img')[0].offsetWidth,
        wrapperHeight = (parseInt(thumbHeight) * parseInt(thumbsShown)) + 40;

    wrapper.querySelector('.js-thumb-carousel-nav').style.maxHeight = wrapperHeight + 'px';
  }

  function setThumbPos(selected, carouselNav) {

    carouselNav.scrollTo({
      top: selected.offsetTop - 20,
      left: 0,
      behavior: 'smooth'
    });
  }

  function galleryEvents(flkty, context) {

    /* On Variant Change and Initial Load */
    Events.on('variantchange:image', function(id, context){

      if ( id === null ) return false;

      /* Select new image in flickity */
      let main = context.querySelector('.js-carousel-main'),
          el = main.querySelector("[data-image-id='" + id + "']"),
          index = el.dataset.slideIndex;

      theme.ProductGallery.setActiveThumbnail(id, el, context);
      theme.ProductGallery.switchMedia(id, context);

      flkty.select( index );

    });
  }

  function removeFocus(context) {
    let main;

    if ( context ) {
      main = context;
    } else {
      main = context.querySelector('.js-carousel-main');
    }

    /* Set all elements to no tab */
    context.querySelectorAll('.js-carousel-main *').forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.blur();
    });

    let buttonContents = context.querySelectorAll('.flickity-button *');
    buttonContents.forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.classList.add('js-hide-focus')
    });

    if (main.classList.contains('.flickity-enabled')) {
      main.setAttribute('tabIndex', '-1');
      main.classList.add('js-hide-focus');
    }

  }

  function addFocus(current, context) {
    /* Set current element to tab */
    if ( current.classList.contains('image-slide') ) {
      current.querySelector('img').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('video-slide') ) {
      current.querySelectorAll('.plyr__controls *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    } else if ( current.classList.contains('external_video-slide') ) {
      current.querySelector('iframe').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('model-slide') ) {
      current.querySelectorAll('.shopify-model-viewer-ui__controls-area *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    }
  }

  function enlargePhoto(context) {

    let buttons = context.querySelectorAll('a.zoom_btn');

    if ( !buttons ) return false;
    buttons.forEach((button, i) => {
      button.addEventListener('click', function (event) {
    	event.preventDefault();
      var btn = event.target,
          index = btn.getAttribute('data-index'),
          index = parseInt(index,10);
      openPhotoSwipe(index);
      });
    });

    var openPhotoSwipe = function(index) {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      let images = context.querySelectorAll('#slider .slides.carousel-main .image-slide');

      if ( images.length < 2 ) {
        var arrows = false;
      } else {
        var arrows = true;
      }

      let items = [];
      images.forEach((image, i) => {
        let imageTag = image.querySelector('.product__image');

        let item = {
          src: imageTag.getAttribute('data-zoom-src'),
          w: imageTag.getAttribute('data-width'),
          h: imageTag.getAttribute('data-height')
        }
        items.push(item);
      });

      var options = {
        index: index,
        arrowEl: arrows,
        captionEl: false,
        closeOnScroll: false,
        counterEl: false,
        history: false,
        fullscreenEl: false,
        preloaderEl: false,
        shareEl: false,
        tapToClose: false,
        getThumbBoundsFn: function(index) {
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var thumbnail = context.querySelector('.product__image');
          var rect = thumbnail.getBoundingClientRect();
          return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
        }
      };

      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();

      gallery.listen('afterChange', function() {
        var flkty = Flickity.data('.slides.carousel-main')
        var newIndex = gallery.getCurrentIndex();
        flkty.select (newIndex);
      });

    };
  }

  function switchMedia(mediaId, context) {
    let main = context.querySelector('.js-carousel-main'),
        currentMedia = main.querySelector('[data-product-single-media-wrapper]:not(.inactive)'),
        newMedia = main.querySelector('[data-product-single-media-wrapper]' + "[data-thumbnail-id='product-template-" + mediaId +"']"),
        otherMedia = main.querySelectorAll('[data-product-single-media-wrapper]' + ":not([data-thumbnail-id='product-template-" + mediaId + "'])");

    currentMedia.dispatchEvent(
      new CustomEvent('mediaHidden', {
        bubbles: true,
        cancelable: true
      })
    );

    newMedia.classList.add('active-slide');
    newMedia.classList.remove('inactive');
    newMedia.dispatchEvent(
      new CustomEvent('mediaVisible', {
        bubbles: true,
        cancelable: true
      })
    );

    otherMedia.forEach(
      function(el) {
        el.classList.add('inactive');
        el.classList.remove('active-slide');
      }.bind(this)
    );
  }

  function setActiveThumbnail(mediaId, el, context) {

    let main = context.querySelector('.js-carousel-main'),
        carouselNav = context.querySelector('.js-thumb-carousel-nav');

    if (typeof mediaId === 'undefined') {
      mediaId = main.querySelector('[data-product-single-media-wrapper]:not(.hide)').dataset.mediaId;
    }

    /* remove selected class from all */
    carouselNav.querySelectorAll('.js-thumb-item').forEach((item, i) => {
      item.classList.remove('is-nav-selected');
      item.classList.remove('active-slide');
      item.removeAttribute('aria-current');
    });

    /* add selected class */
    let thumbActive = context.querySelector(".js-thumb-item[data-image-id='" + mediaId + "']");

    thumbActive.classList.add('is-nav-selected');
    thumbActive.classList.add('active-slide');
    thumbActive.setAttribute('aria-current', true);
  }

  return {
    init: init,
    mainSlider: mainSlider,
    thumbSlider: thumbSlider,
    thumbnails: thumbnails,
    setThumbPos: setThumbPos,
    setThumbSizes: setThumbSizes,
    galleryEvents: galleryEvents,
    removeFocus: removeFocus,
    addFocus: addFocus,
    enlargePhoto: enlargePhoto,
    switchMedia: switchMedia,
    setActiveThumbnail: setActiveThumbnail
  };

})();

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.Video.loadVideos();
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}

theme.ProductVideo = (function(context, sectionId) {
  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer) {
      return;
    }

    var videoElement = videoContainer.querySelector('iframe, video');

    if (!videoElement) {
      return;
    }

    var mediaId = videoContainer.getAttribute('data-media-id');

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        theme.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function setupYouTubeVideos() {
    if (!window.YT.Player) return;

    loadVideos(hosts.youtube);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );

    var enableLooping = productMediaWrapper.getAttribute(
      'data-' + attributes.enableVideoLooping
    );

    switch (video.host) {
      case hosts.html5:
        // eslint-disable-next-line no-undef
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping },
          muted: true,
          hideControlsOnPause: true,
          tooltips: { controls: false, seek: true }
        });
        video.player.on('ready', event => {
          video.container.querySelector('.plyr--full-ui').setAttribute('tabindex', '-1');
          video.container.querySelectorAll('.plyr--full-ui *').forEach((item, i) => {
            item.setAttribute('tabindex', '-1');
          });

        });
        video.player.on('play', event => {
          video.container.querySelectorAll('.plyr__controls *').forEach((item, i) => {
            item.setAttribute("tabIndex", "0");
          });
        });
        break;
      case hosts.youtube:
      var videoId = productMediaWrapper.getAttribute(
        'data-' + attributes.videoId
      );

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            },
            onReady: function(event) {
              video.player.mute();
            }
          }
        });
        break;
    }

    var pauseVideo = function() {
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }

      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    };

    productMediaWrapper.addEventListener('mediaHidden', pauseVideo);
    productMediaWrapper.addEventListener('xrLaunch', pauseVideo);

    productMediaWrapper.addEventListener('mediaHidden xrLaunch', function() {

      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }
      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }

    });

    productMediaWrapper.addEventListener('mediaVisible', function() {

      if (theme.Helpers.isTouch()) return;

      if (!video.player) return;

      if (video.host === hosts.html5) {
        if (desktop.matches) {
          video.player.play();
        }
      }

      if (video.host === hosts.youtube && video.player.playVideo) {
        if (desktop.matches) {
          video.player.playVideo();
        }
      }
    });

  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }

    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };

})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
     modelJsonSections[sectionId] = {
       loaded: false
     };

     modelViewerContainers.forEach(function(modelViewerContainer, index) {
       var mediaId = modelViewerContainer.getAttribute('data-media-id');
       var modelViewerElement = modelViewerContainer.querySelector(
         'model-viewer'
       );
       var modelId = modelViewerElement.getAttribute('data-model-id');

       if (index === 0) {
         var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
         var xrButton = mediaGroup.querySelector(selectors.xrButton);
         xrButtons[sectionId] = {
           element: xrButton,
           defaultId: modelId
         };
       }

       models[mediaId] = {
         modelId: modelId,
         sectionId: sectionId,
         container: modelViewerContainer,
         element: modelViewerElement
       };
     });

     window.Shopify.loadFeatures([
       {
         name: 'shopify-xr',
         version: '1.0',
         onLoad: setupShopifyXr
       },
       {
         name: 'model-viewer-ui',
         version: '1.0',
         onLoad: setupModelViewerUi
       }
     ]);
     theme.LibraryLoader.load('modelViewerUiStyles');
   }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
     document.addEventListener('shopify_xr_initialized', function() {
       setupShopifyXr();
     });
     return;
    }

    for (var sectionId in modelJsonSections) {
     if (modelJsonSections.hasOwnProperty(sectionId)) {
       var modelSection = modelJsonSections[sectionId];

       if (modelSection.loaded) continue;
       var modelJson = document.querySelector('#ModelJson-' + sectionId);

       window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
       modelSection.loaded = true;
     }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          var config = {
              controls: [
              'zoom-in',
              'zoom-out',
              'fullscreen',
            ],
            focusOnPlay: false
          };

          model.modelViewerUi = new Shopify.ModelViewerUI(model.element, config);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    model.container.addEventListener('mediaVisible', function() {
      xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
      if (theme.Helpers.isTouch()) return;
      model.modelViewerUi.play();
    });

    model.container.addEventListener('mediaHidden', function() {
      xrButton.element.setAttribute(
        'data-shopify-model3d-id',
        xrButton.defaultId
      );
      model.modelViewerUi.pause();
    });

    model.container.addEventListener('xrLaunch', function() {
      model.modelViewerUi.pause();
    });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.ProductAccordion = function(context, events) {
  (function Accordion() {

    document.addEventListener('shopify:block:select', function(event){

     // Dont' run on the mobile navigation
     if (event.target.classList.contains(WAU.Accordion.getConfigClass('mobileNavAccordion'))) {
      return;
     }

     WAU.Accordion.show(event.target, true);

    });

    document.addEventListener('shopify:block:deselect', function(event){

      // Dont' run on the mobile navigation
      if (event.target.classList.contains(WAU.Accordion.getConfigClass('mobileNavAccordion'))) {
        return;
      }


      // Don't hide if it has the "open by default" setting enabled
      if (!event.target.classList.contains(WAU.Accordion.getConfigClass('open'))) {
        WAU.Accordion.hide(event.target, true);
      }
    });
  })();

}

theme.Product = (function () {
  function Product(context) {

    var events = new EventEmitter3();
        events.trigger = events.emit; // alias

    var productJson = context.querySelector('.product-json');

    if ( !productJson ) {
     return false;
    }

    var Product = productJson.innerHTML,
        Product = JSON.parse(Product || '{}');

    var sectionId = context.dataset.sectionId;

    if ( context.querySelector("[data-product-gallery]") ) {
      theme.ProductGallery.init(context, sectionId, events, Product);
    }

    if ( context.querySelector("[data-product-form]") ) {
      theme.ProductForm(context, sectionId, events, Product);
    }

    /* Product media */
    let modelViewerElements = context.querySelectorAll('[data-product-media-type-model]');
    this.ajaxEnabled = context.dataset.ajaxEnabled;

    context.querySelectorAll("[data-product-media-type-video]").forEach(function (context, sectionId) {
      theme.ProductVideo.init(context, sectionId);
    });

    if ( context.querySelector('.c-accordion--product') ) {
      theme.ProductAccordion(context, events);
    }

    theme.ProductModel.init(modelViewerElements, sectionId);

    var self = this;

  }

  return Product;
})();

theme.StoreAvailability = (function() {

  Events.on("storeavailability:variant", function(id, title) {
    updateContent(id, title)
  });

  function updateContent(id, title) {
    const container = document.querySelector('[data-store-availability-container]');
    const variantSectionUrl =
      '/variants/' + id + '/?section_id=store-availability';
    container.innerHTML = '';

    fetch(variantSectionUrl)
    .then(function(response) {
      return response.text();
    })
    .then(function(storeAvailabilityHTML) {
      if (storeAvailabilityHTML.trim() === '') {
        return;
      }
      container.innerHTML = storeAvailabilityHTML;
      container.innerHTML = container.firstElementChild.innerHTML;
      container.style.opacity = 1;

      // Show or hide container if variant unavailable
      container.querySelector('.store-availability-container').classList.remove('fadeOut');
      container.querySelector('.store-availability-container').style.display = "block";

      Events.on("storeavailability:unavailable", function() {
        container.querySelector('.store-availability-container').classList.add('fadeOut')
        container.querySelector('.store-availability-container').style.display = "none";
      });

      // If no active pickup locations hide container and stop function
      if ( document.querySelector('[data-pick-up-available="false"]') ) {
        container.style.display = "none";
        return false;
      }

      // Move modal code to slideout
      const source = document.getElementById("StoreAvailabilityModal");

			// create the slideout el, assign it a name, and then add
			const slideoutContainer = document.querySelector(".js-slideout-toggle-wrapper");
      const slideoutAside = document.getElementById('slideout-store-availability');

      if ( slideoutAside ) {
        slideoutAside.innerHTML = "";
        slideoutAside.appendChild(source);
      } else {
        const newSlideout = WAU.Slideout._createSlideoutEl("right", "store-availability", slideoutContainer);
        newSlideout.appendChild(source);
      }

			WAU.Slideout.init("store-availability");

      // Update product title
      const storeAvailabilityModalProductTitle = document.querySelector('[data-store-availability-modal-product-title]');
      storeAvailabilityModalProductTitle.textContent = title;

    });
  }
})();

theme.ProductRecommendations = (function (context) {
  function ProductRecommendations(container) {

    var loadProductRecommendationsIntoSection = function() {
      // Look for an element with class 'product-recommendations'
      var productRecommendationsSection = document.querySelector(".page-width");
      var recommended_url = productRecommendationsSection.dataset.baseUrl;

      if (productRecommendationsSection === null) { return; }
      // Read product id from data attribute
      var productId = productRecommendationsSection.dataset.productId;

      // Build request URL
      var requestUrl = recommended_url + '?section_id=product-recommendations&limit=12&product_id=' + productId;

      // Create request and submit it using Ajax
      var request = new XMLHttpRequest();
      request.open("GET", requestUrl);
      request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
          var container = document.createElement("div");
          container.innerHTML = request.response;
          if (!container.querySelector(".product-recommendations")) return false;
          productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
        }
      };
      request.send();
    };
    document.addEventListener("shopify:section:load", function(event) {
      if (event.detail.sectionId === "product-recommendations") {
        loadProductRecommendationsIntoSection();
      }
    });
    // Fetching the recommendations on page load
    loadProductRecommendationsIntoSection();

  }

  return ProductRecommendations;
})();

/*============================================================================
  Map Section
==============================================================================*/
theme.Maps = (function() {

  var google_api_loaded = false;

  function Map(container) {

    var events = new EventEmitter3();
    events.trigger = events.emit; // alias

    window.gm_authFailure = function () {
      google_api_loaded = false;

      if ( Shopify.designMode ) {
        events.trigger("gmauthfailure:themeeditor");
      } else {
        events.trigger("gmauthfailure");
      }
    };

    var config = container.querySelector("[data-map-config]").innerHTML,
        config = JSON.parse(config);

    if ( !config.api_key ) {
      return false;
    }

    (function section_container() {
      var element = container;

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error() {
        element.classList.add("map-section-load-error");
      }
    })();

    (function background_image() {
      var element = container.querySelector("[data-bg-image]");

      events.on("gmauthfailure", show);

      function show() {
        element.classList.add("show-image");
      }
    })();

    (function overlay() {
      var element = container.querySelector("[data-map-overlay]");

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error(message) {
        message = message || config.auth_error;
        element.innerHTML = '<div class="map-section-error errors text-center">' + message + '</div>';
      }
    })();

    (function map() {
      var element = container.querySelector("[data-map]");

      events.on("ready", geolocate);

      function geolocate() {

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: config.address }, function(results, status) {

          if ( status == google.maps.GeocoderStatus.OK ) {
            render(results);
          } else {
            error(status);
          }
        });
      }

      function render(results) {
        element.innerHTML = "";

        var map = new google.maps.Map(element, {
          zoom: config.zoom,
          center: results[0].geometry.location,
          draggable: false,
          clickableIcons: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          styles: config.styles,
          disableDefaultUI: true
        });

        var center = map.getCenter();

        new google.maps.Marker({
          map: map,
          position: center
        });

        google.maps.event.addDomListener(window, "resize", function() {
          theme.Helpers.debounce(function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
          }, 250);
        });

        document.addEventListener('shopify:section:unload', function() {
          google.maps.event.clearListeners(map, "resize");
        });
      }

      function error(status) {
        var message = config.address_error;

        switch (status) {
          case 'ZERO_RESULTS':
            message = config.address_no_results;
            break;
          case 'OVER_QUERY_LIMIT':
            message = config.address_query_limit;
            break;
          case 'REQUEST_DENIED':
            message = config.auth_error;
            break;
        }

        if ( Shopify.designMode ) {
          events.trigger("map:error", message);
        }
      }
    })();

    if ( google_api_loaded ) {
      events.trigger("ready");
    } else {
      const getScript = url => new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.async = true

        script.onerror = reject

        script.onload = script.onreadystatechange = function() {
          const loadState = this.readyState

          if (loadState && loadState !== 'loaded' && loadState !== 'complete') return

          script.onload = script.onreadystatechange = null

          resolve()
        }

        document.head.appendChild(script)
      })

      getScript("https://maps.googleapis.com/maps/api/js?key=" + config.api_key)
      .then(() => {
        google_api_loaded = true;
        events.trigger("ready");
      })
      .catch(() => {
        events.trigger("map:error", 'Could not load map with API key. Check billing with Google.');
        console.error('Could not load script with api given')
      })
    }
  }

  Map.prototype = _.assignIn({}, Map.prototype, {});

  return Map;
})();

/*======================================================
  Collection Page
========================================================*/
theme.Collection = (function() {
  function Collection(container) {

    (function tagFilters(container) {
      const tagFilters = document.querySelectorAll(".filter [data-tag]");
      const tagFiltersLists = document.querySelectorAll(".filter");

      const getCollectionHandle = function() {
        const urlPathArray = window.location.pathname.split('/');
        const collection = urlPathArray[urlPathArray.indexOf('collections') + 1];
        if (collection && collection != '') {
          return collection;
        } else {
          console.log('Error, no collection URL');
          return false;
        }
      }

      const collectionHandle = getCollectionHandle();

      // Check that tag filters exist
      if (tagFilters.length > 0) {
        tagFilters.forEach(tagFilter => {
          tagFilter.addEventListener('click', event => {
            event.preventDefault();
            let parentFilterList = event.target.closest('ul');
            let childTags = parentFilterList.querySelectorAll('[data-tag]');

            childTags.forEach(childTag => {
              if (childTag == event.target) {
                childTag.classList.toggle('current');
              } else {
                childTag.classList.remove('current');
              }
            });

            let newTags = [];

            tagFiltersLists.forEach(tagFiltersList => {
              let childTags = tagFiltersList.querySelectorAll('[data-tag]');
              childTags.forEach(childTag => {
                if (childTag.classList.contains('current')) {
                  newTags.push(childTag.dataset.tag);
                }
              });
            });

            if (newTags.length) {
              let query = newTags.join('+');
              if (window.location.search) {
                window.location.href = `/collections/${collectionHandle}/` + query + window.location.search;
              } else {
                window.location.href = `/collections/${collectionHandle}/` + query;
              }
            } else {
              window.location.href = container.dataset.collectionLink;
            }
          });
        });
      }
    })();

    (function mobileSidebar() {
       const sidebarToggle = document.querySelector('.js-sidebar-toggle');
       if (!sidebarToggle) return false;
       sidebarToggle.addEventListener('click', function(event){
         theme.Helpers.toggleClass("sidebar", "open");
         event.preventDefault()
       });
       document.addEventListener('shopify:section:load', function(event){
        const sidebarToggle = document.querySelector('.js-sidebar-toggle');
        if (!sidebarToggle) return false;
        sidebarToggle.addEventListener('click', function(event){
          theme.Helpers.toggleClass("sidebar", "open");
          event.preventDefault()
        });
       });
     })();

    (function sortBy() {
      var element = document.querySelector("#sort-by");

      if ( !element ) {
        return false;
      }

      // Save existing sort parameters
      Shopify.queryParams = {};
      if(location.search.length) {
        for(var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
            if (aKeyValue.length > 1) {
                Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
            }
        }
      }

      // Add existing sort parameters to current URL
      var sortByEl = document.querySelector('#sort-by');

      if (!sortByEl) {
        return;
      }

      sortByEl.addEventListener('change', function(e) {
        var value = e.currentTarget.value;
        Shopify.queryParams.sort_by = value;
        location.search = new URLSearchParams(Shopify.queryParams).toString();
      });
    })();

     var ProductColorSwatches = (function() {

       let returnObj = {};

       function removeActiveClass(element) {
        if (!element) {
          return;
        }
        element.closest('.js-product-listing').querySelectorAll('.js-collection-swatch').forEach(function(element,index) {
          if (element.classList.contains('js-is-active')) {
            element.classList.remove('js-is-active');
          }
        });
       }

       function setDuration(container, duration) {
         container.querySelectorAll('.js-product-image').forEach(function(element, index) {
           element.style.animationDuration = `${duration}ms`;
         });
       }

       function init(container, duration = 200, name = '.js-collection-swatch') {
         if (!container) {
           console.log('ProductColorSwatches requires a container and selector');
           return;
         }
         if (name == undefined || name == '' || name == null) {
           name = '.js-collection-swatch';
         }
         setDuration(container, duration);
         const swatches = container.querySelectorAll(name);
         swatches.forEach(function(element, index) {
           element.addEventListener('mouseover', function() {
             const swatchImage = element.getAttribute('data-href');
             if (!swatchImage) return false;
             if (element.classList.contains('js-is-active')) {
              return;
             }
             removeActiveClass(element);
             element.classList.add('js-is-active');
             theme.Helpers.animateCSS(element.closest('.js-product-listing').querySelector('.js-product-image'), 'fadeOut', '').then(function() {
             element.closest('.js-product-listing').querySelector('.js-product-image img').setAttribute('srcset', swatchImage);
             }).then(function() {
              theme.Helpers.animateCSS(element.closest('.js-product-listing').querySelector('.js-product-image'), 'fadeIn', '')
            });
           });
         });
       };

       returnObj.init = init;

       return returnObj;

     })();

     ProductColorSwatches.init(container, 200);
  }
  Collection.prototype = _.assignIn({}, Collection.prototype, {});

  return Collection;
})();

/*======================================================
  Header Section
========================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.Header = (function() {

	function addSpacingForMobileNav(headerWrapper, headerHeight) {
		// set the margin-top for mobile to make up for the fixed header
		const isMobileWidth = window.matchMedia("(max-width: 980px)");

		if (isMobileWidth.matches) {
			headerWrapper.style.marginTop = headerHeight + "px";
		} else {
			headerWrapper.style.removeProperty("margin-top");
		}
	}

  function Header(container) {
		const header = document.querySelector(".js-header"),
					navigation = document.querySelector(".js-navigation"),
					menuItemsWithNestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown"),
          doubleTapToGoItems = document.querySelectorAll(".js-doubletap-to-go"),
					headerWrapper = document.querySelector(".js-header-wrapper");

		let amountToScroll = Math.max(header.clientHeight, navigation.clientHeight) - Math.min(header.clientHeight, navigation.clientHeight); // Only calculate this number once on load and make sure it's positive.
		const stickyClass = navigation.getAttribute('data-sticky-class');

		function makeNavigationSticky() {
			if (window.pageYOffset > amountToScroll) {
				navigation.classList.add(stickyClass);
			} else {
				navigation.classList.remove(stickyClass);
			}
		}

    document.addEventListener('scroll', function (event) {
      makeNavigationSticky();
    });

		document.addEventListener('resize', function (event) {
			addSpacingForMobileNav(headerWrapper, header.querySelector("header").clientHeight);
		});

		makeNavigationSticky();
		addSpacingForMobileNav(headerWrapper, header.querySelector("header").clientHeight);
		theme.a11yHelpers.setUpAriaExpansion();
		theme.a11yHelpers.setUpAccessibleNavigationMenus();

		// This is to make sure the header / sticky updates in the theme editor when the editor changes from mobile to desktop.
		const resizeObserver = new ResizeObserver(entries => {
			addSpacingForMobileNav(headerWrapper, header.querySelector("header").clientHeight);
			amountToScroll = Math.max(header.clientHeight, navigation.clientHeight) - Math.min(header.clientHeight, navigation.clientHeight); // recalculate this number because dimensions have changed.
		});

		resizeObserver.observe(header.querySelector("header"));

		/*
		 * Making sure that nested dropdowns are properly placed in the correct place if they're offscreen.
		 */
		menuItemsWithNestedDropdowns.forEach(function (menuItem) {
			menuItem.addEventListener('mouseenter', function (event) {

				const nestedDropdown = menuItem.querySelector(".js-dropdown-nested");

				if (nestedDropdown) {
					if (theme.DOMHelpers.isElementPastEdge(nestedDropdown)) {
						nestedDropdown.classList.add("dropdown--edge");
					}
				}

			});
		});

    // Double Tap To Go on Tablets
    function closeMenu(activeClass) {
      document
        .querySelectorAll(`[data-active-class="${activeClass}"]`)
        .forEach(function (activeMenu) {
          activeMenu.classList.remove(activeClass);
        });
    }
    doubleTapToGoItems.forEach(function (doubleTapItem) {
      let preventClick = false,
        prevEventTarget = undefined;

      const activeClass = doubleTapItem.getAttribute("data-active-class");

      Events.on("device:touchstart", function() {
        preventClick = true;
      });

      doubleTapItem.addEventListener("click", function (event) {
        if (preventClick) {
          event.preventDefault();
        }
      });

      doubleTapItem.addEventListener("touchstart", function (event) {
        event.target.setAttribute("aria-expanded", "false");
        closeMenu(activeClass);

        if (prevEventTarget === event.target) {
          preventClick = false;
        } else {
          event.target.classList.toggle(activeClass);
          event.target.setAttribute("aria-expanded", "true");
        }

        prevEventTarget = event.target;
      });
    });

    /* lang and currency disclosure */
    this.container = container;
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.localeDisclosure) {
      this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
    }

    if (this.cache.currencyDisclosure) {
      this.currencyDisclosure = new theme.Disclosure(this.cache.currencyDisclosure);
    }
  }
  Header.prototype = _.assignIn({}, Header.prototype, {
    cacheSelectors: function() {
      this.cache = {
        localeDisclosure: this.container.querySelector(selectors.disclosureLocale),
        currencyDisclosure: this.container.querySelector(selectors.disclosureCurrency)
      };
    },
    onUnload: function() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    },
    onBlockSelect: function() {
			addSpacingForMobileNav(document.querySelector(".js-header-wrapper"), document.querySelector(".js-header > header").clientHeight);
    },
		onSelect: function() {
			WAU.Slideout.init("mobile-navigation");
    },
		onLoad: function () {
			addSpacingForMobileNav(document.querySelector(".js-header-wrapper"), document.querySelector(".js-header > header").clientHeight);
		}
  });

  (function headerSearch() {
    const searchBoxTrigger = document.querySelector('.js-search-trigger');
    if (!searchBoxTrigger) return false;
    searchBoxTrigger.addEventListener('click', function(event){
      event.stopPropagation();
      theme.Helpers.Toggle('searchbox');
    });
    document.addEventListener('shopify:section:load', function(event){
      const searchBoxTrigger = document.querySelector('.js-search-trigger');
      if (!searchBoxTrigger) return false;
      searchBoxTrigger.addEventListener('click', function(event){
        event.stopPropagation();
        theme.Helpers.Toggle('searchbox');
      });
    });
  })();

  return Header;

})();

/*======================================================
  MobileNav Section
========================================================*/
theme.mobileNav = (function() {

  function mobileNav(container) {
    var sectionId = container.getAttribute('data-section-id');

		WAU.Slideout.init("mobile-navigation");

  }

  mobileNav.prototype = _.assignIn({}, mobileNav.prototype, {
    onSelect: function() {
			WAU.Slideout._openByName("mobile-navigation");
    },
    onDeselect: function() {
			WAU.Slideout._closeByName("mobile-navigation");
    },
    onBlockSelect: function() {
			WAU.Slideout._openByName("mobile-navigation");
    }
  });

  return mobileNav;

})();

/*======================================================
  Password Page Section
========================================================*/
theme.Password = (function() {
  function Password(container) {

    window.addEventListener('DOMContentLoaded', (event) => {
			const passwordError = document.querySelector('.errors');

      if (passwordError) {
				WAU.Slideout._openByName("password");
      } else {
				return false;
			}

    });

		WAU.Slideout.init("password");

    window.addEventListener('shopify:section:select', (event) => {
      WAU.Slideout.init("password");
    });
  }

  Password.prototype = _.assignIn({}, Password.prototype, {});
  return Password;
})();

/*============================================================================
  Custom Page Modules
==============================================================================*/
theme.CustomPageSlideshow = function (context, events) {

  (function page_slideshow() {

      const Slideshow = document.querySelector('.js-slideshow');

      if ( !Slideshow ) {
        return false;
      }

      const flktyData = Slideshow.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity('.js-slideshow', flktyOptions);

      document.addEventListener('shopify:section:unload', function(event){
        const Slideshow = document.querySelector('.js-slideshow');
        if ( !Slideshow ) {
          return false;
        }
        const flkty = Flickity.data( Slideshow );
        flkty.destroy();
      });

      document.addEventListener('shopify:section:load', function(event){
        const Slideshow = document.querySelector('.js-slideshow');
        const flktyData = Slideshow.getAttribute('data-flickity');
        const flktyOptions = JSON.parse(flktyData);
            new Flickity('.js-slideshow', flktyOptions);
      });

      document.addEventListener('shopify:block:select', function(event){
       const Slideshow = document.querySelector('.js-slideshow');
       if ( !Slideshow ) {
         return false;
       }
       const flkty = Flickity.data( Slideshow );
       const Slide = event.target.getAttribute("data-slider-index");
       flkty.select( Slide );
       flkty.pausePlayer();
      });

      document.addEventListener('shopify:block:deselect', function(event){
        const Slideshow = document.querySelector('.js-slideshow');
        if ( !Slideshow ) {
          return false;
        }
        const flkty = Flickity.data( Slideshow );
        flkty.unpausePlayer();
      });

  })();
}

theme.CustomPageCollection = function (context, events) {
  (function Carousel() {

    const Carousel = document.querySelector('.js-carousel');
    if ( !Carousel ) {
      return false;
    }
    const flktyData = Carousel.getAttribute('data-flickity');
    const flktyOptions = JSON.parse(flktyData);
        new Flickity('.js-carousel', flktyOptions);

    document.addEventListener('shopify:section:unload', function(event){
      const Carousel = document.querySelector('.js-carousel');
      if ( !Carousel ) {
        return false;
      }
      const flkty = Flickity.data(Carousel);
      flkty.destroy()
    });

    document.addEventListener('shopify:section:load', function(event){
      const Carousel = document.querySelector('.js-carousel');
      if ( !Carousel ) {
        return false;
      }
      const flktyData = Carousel.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity('.js-carousel', flktyOptions);
    });

  })();
}

theme.CustomPageAccordion = function(context, events) {

  (function Accordion() {

    document.addEventListener('shopify:block:select', function(event){

     const target = event.target;

     // Dont' run on the mobile navigation
     if (target.classList.contains('c-accordion--mobile-nav')) {
      return;
     }

     const accordionToggles = target.querySelectorAll('[data-toggle="accordion"]');

     accordionToggles.forEach(function(accordionToggle, index) {
      WAU.Accordion.show(accordionToggle, true);
     });

    });

    document.addEventListener('shopify:block:deselect', function(event){

      const target = event.target;

      // Dont' run on the mobile navigation
       if (target.classList.contains('c-accordion--mobile-nav')) {
        return;
       }

       const accordionToggles = target.querySelectorAll('[data-toggle="accordion"]');

       accordionToggles.forEach(function(accordionToggle, index) {
        WAU.Accordion.hide(accordionToggle);
       });
    });
  })();
}

theme.CustomPage = (function () {
  function CustomPage(container) {
    var events = new EventEmitter3();
    events.trigger = events.emit; // alias

    theme.CustomPageSlideshow();
    theme.CustomPageCollection(events);
    theme.CustomPageAccordion(events);

  }

  CustomPage.prototype = _.assignIn({}, CustomPage.prototype, {});

  return CustomPage;
})();

theme.Video = (function() {
  var autoplayCheckComplete = false;
  var playOnClickChecked = false;
  var playOnClick = false;
  var youtubeLoaded = false;
  var videos = {};
  var videoPlayers = [];
  var videoOptions = {
    ratio: 16 / 9,
    scrollAnimationDuration: 400,
    playerVars: {
      // eslint-disable-next-line camelcase
      iv_load_policy: 3,
      modestbranding: 1,
      autoplay: 0,
      controls: 0,
      wmode: 'opaque',
      branding: 0,
      autohide: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerChange
    }
  };
  var classes = {
    playing: 'video-is-playing',
    paused: 'video-is-paused',
    loading: 'video-is-loading',
    loaded: 'video-is-loaded',
    backgroundVideoWrapper: 'video-background-wrapper',
    videoWithImage: 'video--image_with_play',
    backgroundVideo: 'video--background',
    userPaused: 'is-paused',
    supportsAutoplay: 'autoplay',
    supportsNoAutoplay: 'no-autoplay',
    wrapperMinHeight: 'video__section-wrapper--min-height'
  };

  var selectors = {
    section: '.video-section',
    videoWrapper: '.video__section-wrapper',
    playVideoBtn: '.video-control__play',
    closeVideoBtn: '.video-control__close-wrapper',
    pauseVideoBtn: '.video__pause',
    pauseVideoStop: '.video__pause-stop',
    pauseVideoResume: '.video__pause-resume',
    fallbackText: '.icon__fallback-text'
  };

  /**
   * Public functions
   */
  function init(video) {
    if (!video) return;

    videos[video.id] = {
      id: video.id,
      videoId: video.dataset.id,
      type: video.dataset.type,
      status:
        video.dataset.type === 'image_with_play' ? 'closed' : 'background', // closed, open, background
      video: video,
      videoWrapper: video.closest(selectors.videoWrapper),
      section: video.closest(selectors.section),
      controls: video.dataset.type === 'background' ? 0 : 1
    };

    if (!youtubeLoaded) {
      // This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    playOnClickCheck();
  }

  function customPlayVideo(playerId) {
    // Make sure we have carried out the playOnClick check first
    if (!playOnClickChecked && !playOnClick) {
      return;
    }

    if (playerId && typeof videoPlayers[playerId].playVideo === 'function') {
      privatePlayVideo(playerId);
    }
  }

  function pauseVideo(playerId) {
    if (
      videoPlayers[playerId] &&
      typeof videoPlayers[playerId].pauseVideo === 'function'
    ) {
      videoPlayers[playerId].pauseVideo();
    }
  }

  function loadVideos() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        createPlayer(key);
      }
    }
    initEvents();
    youtubeLoaded = true;
  }

  function editorLoadVideo(key) {
    if (!youtubeLoaded) {
      return;
    }
    createPlayer(key);
    initEvents();
  }

  /**
   * Private functions
   */

  function privatePlayVideo(id, clicked) {
    var videoData = videos[id];
    var player = videoPlayers[id];
    var videoWrapper = videoData.videoWrapper;

    if (playOnClick) {
      // playOnClick means we are probably on mobile (no autoplay).
      // setAsPlaying will show the iframe, requiring another click
      // to play the video.
      setAsPlaying(videoData);
    } else if (clicked || autoplayCheckComplete) {
      // Play if autoplay is available or clicked to play
      videoWrapper.classList.remove(classes.loading);
      setAsPlaying(videoData);
      player.playVideo();
      return;
    } else {
      player.playVideo();
    }
  }

  function setAutoplaySupport(supported) {
    var supportClass = supported
      ? classes.supportsAutoplay
      : classes.supportsNoAutoplay;
    document.documentElement.classList.remove(
      classes.supportsAutoplay,
      classes.supportsNoAutoplay
    );
    document.documentElement.classList.add(supportClass);

    if (!supported) {
      playOnClick = true;
    }
    autoplayCheckComplete = true;
  }

  function playOnClickCheck() {
    if (playOnClickChecked) {
      return;
    }

    if (isMobile()) {
      playOnClick = true;
    }
    if (playOnClick) {
      // No need to also do the autoplay check
      setAutoplaySupport(false);
    }
    playOnClickChecked = true;
  }

  // The API will call this function when each video player is ready
  function onPlayerReady(evt) {
    evt.target.setPlaybackQuality('hd1080');
    var videoData = getVideoOptions(evt);
    var videoTitle = evt.target.getVideoData().title;
    playOnClickCheck();

    // Prevent tabbing through YouTube player controls until visible
    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    sizeBackgroundVideos();
    setButtonLabels(videoData.videoWrapper, videoTitle);

    // Customize based on options from the video ID
    if (videoData.type === 'background') {
      evt.target.mute();
      privatePlayVideo(videoData.id);
    }

    videoData.videoWrapper.classList.add(classes.loaded);
  }

  function onPlayerChange(evt) {
    var videoData = getVideoOptions(evt);
    if (
      videoData.status === 'background' &&
      !isMobile() &&
      !autoplayCheckComplete &&
      (evt.data === YT.PlayerState.PLAYING ||
        evt.data === YT.PlayerState.BUFFERING)
    ) {
      setAutoplaySupport(true);
      autoplayCheckComplete = true;
      videoData.videoWrapper.classList.remove(classes.loading);
    }
    switch (evt.data) {
      case YT.PlayerState.ENDED:
        setAsFinished(videoData);
        break;
      case YT.PlayerState.PAUSED:
        // Seeking on a YouTube video also fires a PAUSED state change,
        // checking the state after a delay prevents us pausing the video when
        // the user is seeking instead of pausing
        setTimeout(function() {
          if (evt.target.getPlayerState() === YT.PlayerState.PAUSED) {
            setAsPaused(videoData);
          }
        }, 200);
        break;
    }
  }

  function setAsFinished(videoData) {
    switch (videoData.type) {
      case 'background':
        videoPlayers[videoData.id].seekTo(0);
        break;
      case 'image_with_play':
        closeVideo(videoData.id);
        toggleExpandVideo(videoData.id, false);
        break;
    }
  }

  function setAsPlaying(videoData) {
    var videoWrapper = videoData.videoWrapper;
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);

    videoWrapper.classList.remove(classes.loading);

    if (pauseButton.classList.contains(classes.userPaused)) {
      pauseButton.classList.remove(classes.userPaused);
    }

    // Do not change element visibility if it is a background video
    if (videoData.status === 'background') {
      return;
    }

    document.getElementById(videoData.id).setAttribute('tabindex', '0');

    if (videoData.type === 'image_with_play') {
      videoWrapper.classList.remove(classes.paused);
      videoWrapper.classList.add(classes.playing);
    }

    // Update focus to the close button so we stay within the video wrapper,
    // allowing time for the scroll animation
    setTimeout(function() {
      videoWrapper.querySelector(selectors.closeVideoBtn).focus();
    }, videoOptions.scrollAnimationDuration);
  }

  function setAsPaused(videoData) {
    var videoWrapper = videoData.videoWrapper;

    // YT's events fire after our click event. This status flag ensures
    // we don't interact with a closed or background video.
    if (videoData.type === 'image_with_play') {
      if (videoData.status === 'closed') {
        videoWrapper.classList.remove(classes.paused);
      } else {
        videoWrapper.classList.add(classes.paused);
      }
    }

    videoWrapper.classList.remove(classes.playing);
  }

  function closeVideo(playerId) {
    var videoData = videos[playerId];
    var videoWrapper = videoData.videoWrapper;

    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    videoData.status = 'closed';

    switch (videoData.type) {
      case 'image_with_play':
        videoPlayers[playerId].stopVideo();
        setAsPaused(videoData); // in case the video is already paused
        break;
      case 'background':
        videoPlayers[playerId].mute();
        setBackgroundVideo(playerId);
        break;
    }

    videoWrapper.classList.remove(classes.paused, classes.playing);
  }

  function getVideoOptions(evt) {
    var id = evt.target.getIframe().id;
    return videos[id];
  }

  function toggleExpandVideo(playerId, expand) {
    var video = videos[playerId];
    var elementTop =
      video.videoWrapper.getBoundingClientRect().top + window.pageYOffset;
    var playButton = video.videoWrapper.querySelector(selectors.playVideoBtn);
    var offset = 0;
    var newHeight = 0;

    if (isMobile()) {
      video.videoWrapper.parentElement.classList.toggle('video__section', !expand);
    }

    if (expand) {
      if (isMobile()) {
        newHeight = window.innerWidth / videoOptions.ratio;
      } else {
        newHeight = video.videoWrapper.offsetWidth / videoOptions.ratio;
      }
      offset = (window.innerHeight - newHeight) / 2;

      video.videoWrapper.style.height =
        video.videoWrapper.getBoundingClientRect().height + 'px';
      video.videoWrapper.classList.remove(classes.wrapperMinHeight);
      video.videoWrapper.style.height = newHeight + 'px';

      // Animate doesn't work in mobile editor, so we don't use it
      if (!(isMobile() && Shopify.designMode)) {
        var scrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo({ top: elementTop - offset });
        document.documentElement.style.scrollBehavior = scrollBehavior;
      }
    } else {
      if (isMobile()) {
        newHeight = video.videoWrapper.dataset.mobileHeight;
      } else {
        newHeight = video.videoWrapper.dataset.desktopHeight;
      }

      video.videoWrapper.style.height = newHeight + 'px';

      setTimeout(function() {
        video.videoWrapper.classList.add(classes.wrapperMinHeight);
      }, 600);
      // Set focus on play button, but don't scroll page
      var x = window.scrollX;
      var y = window.scrollY;
      playButton.focus();
      window.scrollTo(x, y);
    }
  }

  function togglePause(playerId) {
    var pauseButton = videos[playerId].videoWrapper.querySelector(
      selectors.pauseVideoBtn
    );
    var paused = pauseButton.classList.contains(classes.userPaused);
    if (paused) {
      pauseButton.classList.remove(classes.userPaused);
      customPlayVideo(playerId);
    } else {
      pauseButton.classList.add(classes.userPaused);
      pauseVideo(playerId);
    }
    pauseButton.setAttribute('aria-pressed', !paused);
  }

  function startVideoOnClick(playerId) {
    var video = videos[playerId];

    // add loading class to wrapper
    video.videoWrapper.classList.add(classes.loading);

    // Explicity set the video wrapper height (needed for height transition)
    video.videoWrapper.style.height = video.videoWrapper.offsetHeight + 'px';

    video.status = 'open';

    switch (video.type) {
      case 'image_with_play':
        privatePlayVideo(playerId, true);
        break;
      case 'background':
        unsetBackgroundVideo(playerId, video);
        videoPlayers[playerId].unMute();
        privatePlayVideo(playerId, true);
        break;
    }

    toggleExpandVideo(playerId, true);

    // esc to close video player
    document.addEventListener('keydown', handleVideoPlayerKeydown);
  }

  var handleVideoPlayerKeydown = function(evt) {
    var playerId = document.activeElement.dataset.controls;
    if (evt.keyCode !== slate.utils.keyboardKeys.ESCAPE || !playerId) {
      return;
    }

    closeVideo(playerId);
    toggleExpandVideo(playerId, false);
  };

  function sizeBackgroundVideos() {
    var backgroundVideos = document.querySelectorAll(
      '.' + classes.backgroundVideo
    );
    backgroundVideos.forEach(function(el) {
      sizeBackgroundVideo(el);
    });
  }

  function sizeBackgroundVideo(videoPlayer) {
    if (!youtubeLoaded) {
      return;
    }

    if (isMobile()) {
      videoPlayer.style.cssText = null;
    } else {
      var videoWrapper = videoPlayer.closest(selectors.videoWrapper);
      var videoWidth = videoWrapper.clientWidth;
      var playerWidth = videoPlayer.clientWidth;
      var desktopHeight = videoWrapper.dataset.desktopHeight;

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (videoWidth / videoOptions.ratio < desktopHeight) {
        playerWidth = Math.ceil(desktopHeight * videoOptions.ratio); // get new player width
        var styles =
          'width: ' +
          playerWidth +
          'px; height: ' +
          desktopHeight +
          'px; left: ' +
          (videoWidth - playerWidth) / 2 +
          'px; top: 0;';
        videoPlayer.style.cssText = styles;
      } else {
        // new video width < window width (gap to right)
        desktopHeight = Math.ceil(videoWidth / videoOptions.ratio); // get new player height
        var styles2 =
          'width: ' +
          videoWidth +
          'px; height: ' +
          desktopHeight +
          'px; top: ' +
          (desktopHeight - desktopHeight) / 2 +
          'px; left: 0;'; // player height is greater, offset top; reset left
        videoPlayer.style.cssText = styles2;
      }
      videoWrapper.classList.add(classes.loaded);
    }
  }

  function unsetBackgroundVideo(playerId) {
    // Switch the background video to a chrome-only player once played
    var player = document.getElementById(playerId);
    player.classList.remove(classes.backgroundVideo);
    player.classList.add(classes.videoWithImage);

    setTimeout(function() {
      document.getElementById(playerId).style.cssText = null;
    }, 600);

    videos[playerId].videoWrapper.classList.remove(
      classes.backgroundVideoWrapper
    );
    videos[playerId].videoWrapper.classList.add(classes.playing);

    videos[playerId].status = 'open';
  }

  function setBackgroundVideo(playerId) {
    var player = document.getElementById(playerId);
    player.classList.remove(classes.videoWithImage);
    player.classList.add(classes.backgroundVideo);

    videos[playerId].videoWrapper.classList.add(classes.backgroundVideoWrapper);

    videos[playerId].status = 'background';
    sizeBackgroundVideo(player);
  }

  function isMobile() {
    return window.innerWidth < 981;
  }

  var handleWindowResize = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;
    var key;
    var fullscreen = window.innerHeight === screen.height;
    sizeBackgroundVideos();

    if (isMobile()) {
      for (key in videos) {
        if (videos.hasOwnProperty(key)) {
          if (videos[key].videoWrapper.classList.contains(classes.playing)) {
            if (!fullscreen) {
              pauseVideo(key);
              setAsPaused(videos[key]);
            }
          }
          videos[key].videoWrapper.style.height =
            document.documentElement.clientWidth / videoOptions.ratio + 'px';
        }
      }
      setAutoplaySupport(false);
    } else {
      setAutoplaySupport(true);
      for (key in videos) {
        var videosWithImage = videos[key].videoWrapper.querySelectorAll(
          '.' + classes.videoWithImage
        );
        if (videosWithImage.length) {
          continue;
        }
        videoPlayers[key].playVideo();
        setAsPlaying(videos[key]);
      }
    }
  }, 200);

  var handleWindowScroll = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;

    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var videoWrapper = videos[key].videoWrapper;
        var condition =
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.75 <
            window.pageYOffset ||
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.25 >
            window.pageYOffset + window.innerHeight;

        // Close the video if more than 75% of it is scrolled out of view
        if (videoWrapper.classList.contains(classes.playing)) {
          if (!condition) return;
          closeVideo(key);
          toggleExpandVideo(key, false);
        }
      }
    }
  }, 50);

  function initEvents() {
    var playVideoBtns = document.querySelectorAll(selectors.playVideoBtn);
    var closeVideoBtns = document.querySelectorAll(selectors.closeVideoBtn);
    var pauseVideoBtns = document.querySelectorAll(selectors.pauseVideoBtn);

    playVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        startVideoOnClick(playerId);
      });
    });

    closeVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;

        evt.currentTarget.blur();
        closeVideo(playerId);
        toggleExpandVideo(playerId, false);
      });
    });

    pauseVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        togglePause(playerId);
      });
    });

    // Listen to resize to keep a background-size:cover-like layout
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleWindowScroll);
  }

  function createPlayer(key) {
    var args = Object.assign(videoOptions, videos[key]);

    args.playerVars.controls = args.controls;
    videoPlayers[key] = new YT.Player(key, args);
  }

  function removeEvents() {
    document.removeEventListener('keydown', handleVideoPlayerKeydown);
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('scroll', handleWindowScroll);
  }

  function setButtonLabels(videoWrapper, title) {
    var playButtons = videoWrapper.querySelectorAll(selectors.playVideoBtn);
    var closeButton = videoWrapper.querySelector(selectors.closeVideoBtn);
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);
    var closeButtonText = closeButton.querySelector(selectors.fallbackText);

    var pauseButtonStop = pauseButton.querySelector(selectors.pauseVideoStop);
    var pauseButtonStopText = pauseButtonStop.querySelector(
      selectors.fallbackText
    );

    var pauseButtonResume = pauseButton.querySelector(
      selectors.pauseVideoResume
    );
    var pauseButtonResumeText = pauseButtonResume.querySelector(
      selectors.fallbackText
    );

    // Insert the video title retrieved from YouTube into the instructional text
    // for each button
    playButtons.forEach(function(playButton) {
      var playButtonText = playButton.querySelector(selectors.fallbackText);
      playButtonText.textContent = playButtonText.textContent.replace(
        '[heading]',
        title
      );
    });
    closeButtonText.textContent = closeButtonText.textContent.replace(
      '[heading]',
      title
    );
    pauseButtonStopText.textContent = pauseButtonStopText.textContent.replace(
      '[heading]',
      title
    );
    pauseButtonResumeText.textContent = pauseButtonResumeText.textContent.replace(
      '[heading]',
      title
    );
  }

  return {
    init: init,
    editorLoadVideo: editorLoadVideo,
    loadVideos: loadVideos,
    playVideo: customPlayVideo,
    pauseVideo: pauseVideo,
    removeEvents: removeEvents
  };
})();

theme.VideoSection = (function() {
  function VideoSection(container) {
    container.querySelectorAll('.video').forEach(function(el) {
      theme.Video.init(el);
      theme.Video.editorLoadVideo(el.id);
    });
  }

  return VideoSection;
})();

theme.VideoSection.prototype = Object.assign({}, theme.VideoSection.prototype, {
  onUnload: function() {
    theme.Video.removeEvents();
  }
});

/*============================================================================
  Footer Section
==============================================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.Footer = (function() {
  function Footer(container) {
    this.container = container;
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.localeDisclosure) {
      this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
    }

    if (this.cache.currencyDisclosure) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.currencyDisclosure
      );
    }
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        localeDisclosure: this.container.querySelector(
          selectors.disclosureLocale
        ),
        currencyDisclosure: this.container.querySelector(
          selectors.disclosureCurrency
        )
      };
    },
    onUnload: function() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    }
  });

  return Footer;
})();

/*======================================================
  Mailing Popup
========================================================*/
theme.MailingPopup = (function() {

  const Popup = (function() {

    const defaults = {
      selectors: {
        popupContainer: ".newsletter__popup-container",
        popupOverlay: ".newsletter__popup-overlay",
        popupCloseButton: ".newsletter__popup-container-close"
      },
      classes: {
        visible: "is-visible",
      },
      viewportWidth: 740, // Viewport must be greater than this number to open
      overlay: true,      // Enabled overlay
      defaultFrequency: 5,  // Days
      defaultPopupDelay: 5000, // Milliseconds
      cookieSetName: "popupShown", // What cookie sets
      debug: false,
      escape: true, // Listen to escape button to close the pop up
      successMessage: false, // Show popup on success ?customer_posted=true
      fadeAnimation: false // Use fade functions from theme helpers
    };

    let lastFocus, popupTestMode, popupFrequency;
    const publicAPIs = {};

    /*
     * @description check URL query string. Determines if customer post success is true or not
     */
    const checkURLQueryString = () => {

      if (settings.debug) {
        console.log(`checkURLQueryString() ran`);
      }

      if (settings.successMessage) {
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('customer_posted') == 'true') {
          return true;
        }
      }
      return false;
    };

    /*
     * @description return the viewport width
     */
    const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth;

    /*
     * @description handle overlay click event to exit overlay
     */
    const handleOverlayEvent = (event) => {
      if (event.target === document.querySelector(`${settings.selectors.popupOverlay}.${settings.classes.visible}`)) {
          publicAPIs.close();
      }
    };

    /*
     * @description handle escape keyboard event
     */
    const handleEscapeKeyboardEvent = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        publicAPIs.close();
      }
    };

    /*
     * @description check if theme.Helper fade functions are available
     */
    const checkFadeSupport = () => typeof theme.Helpers.fadeIn === 'function' && typeof theme.Helpers.fadeOut === 'function';

    /*
     * @description checks to see if fadeAnimations option is enabled and supported
     */
    const useFadeAnimation = () => settings.fadeAnimation && checkFadeSupport();

    /*
     * @description handle close button event
     */
    const handleCloseButtonEvent = (event) => {
      publicAPIs.close(event);
    };

    /*
     * @description check if working in the theme editor
     */
    const themeEditorCheck = () => Shopify.designMode;

    /*
     * @description open the pop up
     */
    publicAPIs.open = () => {

      if (getViewportWidth() < settings.viewportWidth) {
        return;
      }

      if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.add(settings.classes.visible);

      if (document.querySelector(settings.selectors.popupContainer)) {
        if (useFadeAnimation()) {
          theme.Helpers.fadeIn(document.querySelector(settings.selectors.popupContainer));
        } else {
          document.querySelector(settings.selectors.popupContainer).style.display = "block";
        }
      }

      // Don't set cookie when inside the theme editor
      if (themeEditorCheck() !== true) {
        Cookies.set(settings.cookieSetName, 'yes', { expires: popupFrequency });
      }

      if (typeof theme.a11yHelpers.focusOnElement === 'function') {
        theme.a11yHelpers.focusOnElement(document.querySelector(settings.selectors.popupContainer));
      }
    };

    /*
     * @description close the pop up
     */
    publicAPIs.close = event => {

      if (document.querySelector(settings.selectors.popupContainer)) {
        if (useFadeAnimation()) {
          theme.Helpers.fadeOut(document.querySelector(settings.selectors.popupContainer));
        } else {
          document.querySelector(settings.selectors.popupContainer).style.display = "none";
        }
      }

      if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.remove(settings.classes.visible);

      // If there was an event passed in, prevent it from redirecting
      if (event) event.preventDefault();

      // If there is a lastFocus element then focus on it
      if (lastFocus) lastFocus.focus();
    };

    /*
     * @description initialize the pop up
     */
    publicAPIs.init = (options) => {

      settings = Object.assign({}, defaults, options);

      popupFrequency = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency') ? Number(document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency')) : settings.defaultFrequency;

      const popupDelayAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-delay');

      let popupDelay = (Number(popupDelayAttribute) != 0) ? Number(popupDelayAttribute) * 1000 : settings.defaultPopupDelay;

      const popupCloseEl = document.querySelector(settings.selectors.popupCloseButton);

      if (!popupCloseEl) {
        if (settings.debug) console.log('err. no popup close button');
      }

      const popupEnabledAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-enabled');

      const popupEnabled = popupEnabledAttribute == 'true' ? true : false;

      // Register events
      popupCloseEl.addEventListener('click', handleCloseButtonEvent)

      if (settings.escape) {
        document.addEventListener('keyup', handleEscapeKeyboardEvent);
      }

      if (settings.overlay) {
        document.addEventListener('click', handleOverlayEvent);
      }

      // Bail if working inside the theme editor
      if (themeEditorCheck() || !popupEnabled ) return;

      if (checkURLQueryString()) {
        popupDelay = 10;
      }

      setTimeout(function() {

        // if (themeEditorCheck() == true || checkURLQueryString() ) {
        if ( checkURLQueryString() ) {

          lastFocus = document.activeElement;

          publicAPIs.open();

        } else {

          const popUpShownCookie = Cookies.get(settings.cookieSetName);

          if (!popUpShownCookie) {
            lastFocus = document.activeElement;
            publicAPIs.open();
          }
        }
      }, popupDelay);
    };

    return publicAPIs;

  })();

  function MailingPopup(container) {
    // Initialize pop up
    Popup.init({
      selectors: {
        popupContainer: ".js-popup",
        popupOverlay: ".js-popup-overlay",
        popupCloseButton: ".js-popup-close",
      },
      overlay: false,
      successMessage: true,
      fadeAnimation: true
    });
  };

  // Interact with the theme editor
  MailingPopup.prototype = _.assignIn({}, MailingPopup.prototype, {
    onSelect: function() {
      Popup.open();
    },
    onDeselect: function() {
      Popup.close();
    }
  });

  return MailingPopup;
})();

/*============================================================================
  Global Events
==============================================================================*/
document.addEventListener('DOMContentLoaded', (event) => {
  var mobile = window.matchMedia('(max-width: 740px)');
  var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
  var device = window.matchMedia('(max-width: 980px)');
  var desktop = window.matchMedia('(min-width: 980px)');

  if ( mobile.matches ) {
    Events.trigger("mediaquery:mobile");
  }
  if ( tablet.matches ) {
    Events.trigger("mediaquery:tablet");
  }
  if ( device.matches ) {
    Events.trigger("mediaquery:device");
  }
  if (desktop.matches) {
    Events.trigger("mediaquery:desktop");
  }
  window.addEventListener("resize", function () {
    if ( mobile.matches ) {
      Events.trigger("mediaquery:mobile");
    }
    if ( tablet.matches ) {
      Events.trigger("mediaquery:tablet");
    }
    if ( device.matches ) {
      Events.trigger("mediaquery:device");
    }
    if ( desktop.matches ) {
      Events.trigger("mediaquery:desktop");
    }
  });

  window.addEventListener('touchstart', function onFirstTouch() {
    Events.trigger("device:touchstart");
    window.removeEventListener('touchstart', onFirstTouch, false);
  });

  document.addEventListener('shopify:section:select', function(event){
    console.log("Editor Events: Section Select");
    Events.trigger("editor:section:select", event);
  });
  document.addEventListener('shopify:section:deselect', function(event){
    console.log("Editor Events: Section Deselect");
    Events.trigger("editor:section:deselect", event);
  });
  document.addEventListener('shopify:section:load', function(event){
    console.log("Editor Events: Section Load");
    Events.trigger("editor:section:load", event);
  });
  document.addEventListener('shopify:section:unload', function(event){
    console.log("Editor Events: Section Unload");
    Events.trigger("editor:section:unload", event);
  });
  document.addEventListener('shopify:block:select', function(event){
    console.log("Editor Events: Block Select");
    Events.trigger("editor:block:select", event);
  });
  document.addEventListener('shopify:block:deselect', function(event){
    console.log("Editor Events: Block Deselect");
    Events.trigger("editor:block:deselect", event);
  });
  document.addEventListener('lazyloaded', function(e){
    Events.trigger("lazyLoad:complete");
  });
});

/*======================================================
  Register Sections
========================================================*/
document.addEventListener('DOMContentLoaded', (event) => {
  var sections = new theme.Sections();
  sections.register('homepage-products', theme.FeaturedProducts);
  sections.register('slideshow-section', theme.Slideshow);
  sections.register('product__section', theme.Product);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('store-availability', theme.StoreAvailability);
  sections.register('header-section', theme.Header);
  sections.register('collection-section', theme.Collection);
  sections.register('mobile-navigation', theme.mobileNav);
  sections.register('map', theme.Maps);
  sections.register('custom-page-section', theme.CustomPage);
  sections.register('video-section', theme.VideoSection);
  sections.register('password-page', theme.Password);
  sections.register('footer-section', theme.Footer);
  sections.register('mailing-popup', theme.MailingPopup);
});

/* Log Theme Version */
log = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(console);
    return Function.prototype.bind.apply(console.log, args);
}

log("Testament Version 7.5.5 by Underground", {bar: 1})();
