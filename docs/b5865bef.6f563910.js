(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,i){},82:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return G})),i.d(t,"metadata",(function(){return Q})),i.d(t,"rightToc",(function(){return Z})),i.d(t,"default",(function(){return te}));var n=i(2),r=i(0),s=i.n(r),a=i(83);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function c(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return!e.classList.contains(t)&&e.classList.add(t)}))}function l(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return e.classList.contains(t)&&e.classList.remove(t)}))}function b(e,t,i,n){e.addEventListener(t,i,n)}function d(e,t,i){e.removeEventListener(t,i)}function u(e,t,i){return void 0===i&&(i=""),e.setAttribute(t,i),e}function p(e,t,i){return Object.keys(t).forEach((function(i){e.style[i]=t[i]})),i&&getComputedStyle(e),e}function m(e,t){if(t.lazyload){var i=t.lazyload,n={load:function(t){var n=e.env.element.$list[t];if(n){var r=[].slice.call(n.getElementsByClassName(i.elementClass)),s=[].slice.call(n.getElementsByClassName(i.preloaderClass));r.forEach((function(e){if(e.hasAttribute("data-src")){var t=e.getAttribute("data-src");c(e,[i.loadingClass]),l(e,[i.loadedClass]),e.src=t,e.onload=function(){return a(e)},e.onerror=function(){return a(e)}}}))}function a(e){e.removeAttribute("data-src"),c(e,[i.loadedClass]),l(e,[i.loadingClass]),e.onload=null,e.onerror=null,e.isLoaded=!0,r.every((function(e){return e.isLoaded}))&&s.forEach((function(e){e.parentElement.removeChild(e)}))}},loadRange:function(e,t){if(n.load(e),i.loadPrevNext&&t>=1)for(var r=1;r<=t;r++)n.load(e+r),n.load(e-r)}};e.on("before-init",(function(){t.lazyload=o({loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},t.lazyload)})),i.loadOnTransitionStart?e.on("before-slide",(function(e,t,r){n.loadRange(r,i.loadPrevNextAmount)})):e.on("after-slide",(function(e){n.loadRange(e,i.loadPrevNextAmount)})),e.on("after-destroy",(function(){e.lazyload&&delete e.lazyload}))}}function f(e,t){var i={$pageList:[],$pagination:null};e.on("before-init",(function(){t.pagination&&(t.pagination=Object.assign({clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},t.pagination))})),e.on("after-init",(function(){if(t.pagination){var n=t.pagination,r=n.bulletClass,s=n.bulletActiveClass,a=e.env.element.$list,o="string"==typeof t.pagination.el?document.body.querySelector(t.pagination.el):t.pagination.el,l=[],b=document.createDocumentFragment(),d=a.length-Math.ceil(t.slidesPerView)+1;t.excludeElements.push(o),i.$pagination=o,i.$pageList=l;for(var u=0;u<d;u++){var p=document.createElement("div");c(p,u===e.state.index?[r,s]:r),l.push(p),b.appendChild(p)}o.appendChild(b),t.pagination.clickable&&o.addEventListener("click",(function(t){e.slideTo(l.indexOf(t.target)),t.stopPropagation()}))}})),e.on("after-destroy",(function(){t.pagination&&(i.$pagination.innerHTML="",i.$pageList=[],i.$pagination=null)})),e.on("after-slide",(function(e){var n=t.pagination.bulletActiveClass;i.$pageList&&i.$pageList.forEach((function(t,i){i===e?c(t,n):l(t,n)}))}))}var g="ArrowUp",v="ArrowRight",h="ArrowDown",O="ArrowLeft";function w(e){if(!e)return!1;var t=getComputedStyle(e);return!("hidden"===t.visibility||"none"===t.display)&&(!e.parentElement||1!==e.parentElement.nodeType||w(e.parentElement))}function j(e){var t=w(e),i=e.getBoundingClientRect();return i.top>=0&&i.bottom<=window.innerHeight&&i.left>=0&&i.right<=window.innerWidth&&t}function y(e,t){if(t.keyboard){var i=t.keyboard,n={enable:function(){i.enabled=!0},disable:function(){i.enabled=!1},onKeyDown:function(n){var r=n.key;i.onlyInViewport&&!j(e.env.element.$el)||!i.enabled||(t.isHorizontal?r===O?e.slideTo(e.state.index-1):r===v&&e.slideTo(e.state.index+1):r===h?e.slideTo(e.state.index-1):r===g&&e.slideTo(e.state.index+1))}};e.on("before-init",(function(){t.keyboard=o({enabled:!0,onlyInViewport:!0},t.keyboard),e.keyboard=n,b(window,"keydown",n.onKeyDown)})),e.on("after-destroy",(function(){n&&(d(window,"keydown",n.onKeyDown),delete e.keyboard)}))}}var N={direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,freeMode:!1,mousewheel:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[],injections:{translate:function(e,t,i,n){p(t.element.$wrapper,{transition:e.isStart?"none":"transform ease "+n+"ms",transform:i.isHorizontal?"translate3d("+e.transforms+"px, 0, 0)":"translate3d(0, "+e.transforms+"px, 0)"})}}};var x="before-init",S="after-init",C="before-slide",z="scroll",E="after-slide",P="before-destroy",T="after-destroy";var D=180/Math.PI;function k(){var e=[];return{getDuration:function(){var t=e[0],i=e[e.length-1];return t?i.time-t.time:0},getOffset:function(){var t=e[0],i=e[e.length-1];return t?{x:i.x-t.x,y:i.y-t.y}:{x:0,y:0}},getLogs:function(){return e},vector:function(){return function(e,t){var i=e[t],n=e[t-1]||i,r={x:i.x-n.x,y:i.y-n.y},s=i.time-n.time,a=r.x/s,c=r.y/s;return o({},r,{angle:Math.atan2(Math.abs(r.y),Math.abs(r.x))*D,velocityX:a,velocityY:c})}(e,e.length-1)},clear:function(){e=[]},push:function(t){e.push(o({time:Date.now()},t))}}}function A(){return performance?performance.now():Date.now()}function M(){var e,t,i,n,r=(i=requestAnimationFrame||webkitRequestAnimationFrame||setTimeout,n=cancelAnimationFrame||webkitCancelAnimationFrame||clearTimeout,{run:function(n){e=void 0===e?A():e,t=i((function(){var t=A(),i=t-e;e=t,n(i)}))},stop:function(){e=void 0,n(t)}});return{run:function e(t){r.run((function(i){e(t),t(i)}))},stop:function(){r.stop()}}}function $(e,t){var i=e.tracker,n=t.initStatus;i.clear(),n()}function L(e,t,i,n){var r=e.touchable,s=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"],a=function(e,t,i,n){var r=n.initLayout,s=n.initStatus,a=n.render,o=n.scrollPixel,c=n.slideTo,l=n.getOffsetSteps,b=M();return{preheat:function(e,t){var n=i.tracker;b.stop(),n.clear(),n.push(e),r(t),s(t),i.isStart=!0,a()},move:function(t){var n=i.tracker,r=e.touchRatio,s=e.touchAngle,c=e.isHorizontal;if(i.isStart&&!i.isScrolling){n.push(t);var l=n.vector(),b=n.getOffset();if(b.x||b.y)if(c&&l.angle<s||!c&&90-l.angle<s||i.isTouching){var d=l[c?"x":"y"]*r;i.isTouching=!0,o(d),a()}else i.isScrolling=!0,n.clear()}},stop:function(){var r=i.index,s=i.tracker,d=t.measure;if(i.isStart)if(i.isStart=!1,e.freeMode){var u=s.vector()[e.isHorizontal?"velocityX":"velocityY"];b.run((function(e){var t=u*e;u*=.98,Math.abs(t)<.01?(b.stop(),$(i,n)):(o(t),a(0))}))}else{var p=s.getDuration(),m=s.getOffset()[e.isHorizontal?"x":"y"],f=Math.ceil(Math.abs(m)/d.boxSize),g=l(m);p>e.longSwipesMs?c(r+g*(m>0?-1:1)):c(m>0?r-f:r+f),$(i,n)}}}}(i,e,t,n),o=a.preheat,c=a.move,l=a.stop;function u(e){var t=r?e.changedTouches[0]:e;return{x:t.pageX,y:t.pageY}}function p(t){for(var n=0;n<i.excludeElements.length;n++)if(i.excludeElements[n].contains(t.target))return;var r,a,c,l,b=e.element.$wrapper;(i.touchStartPreventDefault&&-1===s.indexOf(t.target.nodeName)||i.touchStartForcePreventDefault)&&!i.passiveListeners&&t.preventDefault(),o(u(t),(r=b,a=i.isHorizontal,c=getComputedStyle(r).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat),l=[],16===c.length?l=c.slice(12,14):6===c.length&&(l=c.slice(4,6)),l[a?0:1]||0))}function m(e){i.touchMoveStopPropagation&&e.stopPropagation(),c(u(e)),t.isTouching&&e.preventDefault()}function f(){l()}return{attach:function(){var t=e.element.$el;r?(b(t,"touchstart",p,{passive:i.passiveListeners,capture:!1}),b(t,"touchmove",m),b(t,"touchend",f),b(t,"touchcancel",f)):(b(t,"mousedown",p),b(document,"mousemove",m),b(document,"mouseup",f))},detach:function(){var t=e.element.$el;d(t,"touchstart",p),d(t,"touchmove",m),d(t,"touchend",f),d(t,"touchcancel",f),d(t,"mousedown",p),d(document,"mousemove",m),d(document,"mouseup",f)}}}function I(e,t,i){var n=e.$list,r=t.viewSize,s=t.slideSize,a=t.boxSize,o=function(e){return e.loop?Math.ceil(e.slidesPerView):0}(i),c=o*a,l=-c+(i.centeredSlides?(r-s)/2:0);return{max:l,min:i.spaceBetween+(i.loop?s:r)+l-a*n.length,base:l,expand:o,buffer:c,minIndex:0,maxIndex:n.length-(i.centeredSlides||i.loop?1:Math.ceil(i.slidesPerView))}}function R(e,t){var i={};function n(e){var n=function(e,t){var i=t.$el,n=e.isHorizontal?i.offsetWidth:i.offsetHeight,r=(n-Math.ceil(e.slidesPerView-1)*e.spaceBetween)/e.slidesPerView;return{boxSize:r+e.spaceBetween,viewSize:n,slideSize:r}}(t,e),r=I(e,n,t),s=Boolean("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||window.DocumentTouch&&document instanceof DocumentTouch);Object.assign(i,{touchable:s,element:e,measure:n,limitation:r})}return i.update=n,n(e),i}var B="data-shallow-slider",H="data-slider";function F(e,t){function i(){e.element.$wrapper.querySelectorAll("["+B+"]").forEach((function(t){return e.element.$wrapper.removeChild(t)}))}function n(){e.element.$list.forEach((function(e,t){return u(e,H,t)})),i(),function(){if(t.loop){var i=e.element,n=e.limitation,r=i.$list,s=i.$wrapper,a=n.expand,o=r.slice(-a).map((function(e){return e.cloneNode(!0)})),c=r.slice(0,a).map((function(e){return e.cloneNode(!0)}));o.forEach((function(e,t){s.appendChild(u(c[t],B)),s.insertBefore(u(o[t],B),r[0])}))}}()}function r(){var i,n=e.element,r=e.measure,s=n.$wrapper,a={display:"flex",willChange:"transform",flexDirection:t.isHorizontal?"row":"column"},o=((i={})[t.isHorizontal?"width":"height"]=r.slideSize+"px",i[t.isHorizontal?"margin-right":"margin-bottom"]=t.spaceBetween+"px",i);p(s,a),s.querySelectorAll("[data-slider]").forEach((function(e){return p(e,o)}))}return{init:function(){n(),r()},render:function(i,n,r,s){var a=e.element.$wrapper,o=void 0===n?t.speed:n;t.injections.translate(i,e,t,o),i.isStart||function(i){var n=e.element.$wrapper,r=i.index;n.querySelectorAll("[data-slider]").forEach((function(e){var i=~~e.getAttribute(H);l(e,[t.slidePrevClass,t.slideNextClass,t.slideActiveClass]),i===r&&c(e,t.slideActiveClass),i===r-1&&c(e,t.slidePrevClass),i===r+1&&c(e,t.slideNextClass)}))}(i),s&&getComputedStyle(a).transform,r&&setTimeout(r,o)},destroy:function(){var n=e.element,r=n.$list,s=n.$wrapper,a=t.isHorizontal?"margin-right":"margin-bottom";["display","will-change","flex-direction"].forEach((function(e){s.style.removeProperty(e)})),r.forEach((function(e){return e.style.removeProperty(a)})),i()},updateSize:r}}function V(e,t,i){var n=e-i.max,r=e-i.min;return n>0?n:r<0?r:0}function q(e,t){var i="string"==typeof e?document.body.querySelector(e):e,n=i.querySelector("."+t.wrapperClass),r=[].slice.call(i.getElementsByClassName(t.slideClass));return{$el:i,$wrapper:n,$list:r}}var X=function e(t,i){var n,r=function(e){var t=o({},N,e);return o({},t,{isHorizontal:"horizontal"===t.direction})}(i),s=(n={},{on:function(e,t){n[e]?n[e].push(t):n[e]=[t]},off:function(e,t){if(n[e]){var i=n[e].indexOf(t);i>-1&&n[e].splice(i,1)}},emit:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];n[e]&&n[e].forEach((function(e){return e.apply(void 0,i)}))},clear:function(){n={}}}),a=R(q(t,r),r),c={tracker:k(),index:0,startTransform:0,isStart:!1,isScrolling:!1,isTouching:!1,transforms:0,progress:0},l=s.on,b=s.off,d=s.emit,u={on:l,off:b,env:a,state:c,options:r};(r.plugins||e.plugins||[]).forEach((function(e){return e(u,r)})),d(x,u);var p=F(a,r),m=function(e,t,i,n,r){function s(t){var n=e.measure;return Math.ceil(Math.abs(t)/n.boxSize-i.longSwipesRatio)}function a(e,i,r){n.render(t,e,i,r)}function c(n){var s,a=e.limitation,c=a.min,l=a.max,b=l-c+(i.loop?e.measure.boxSize:0),d=b+1;t.transforms=n,i.loop?(s=(l-n)%d/b,t.progress=s<0?1+s:s>1?s-1:s):(s=(l-n)/b,t.progress=s<0?0:s>1?1:s),r.emit(z,o({},t))}function l(n,o){var l=e.measure,b=e.limitation,d=b.maxIndex-b.minIndex+1,u=i.loop?(n%d+d)%d:n>b.maxIndex?b.maxIndex:n<b.minIndex?b.minIndex:n,p=-u*l.boxSize+b.base;if(t.index===u&&0!==s(p-t.transforms)&&i.loop){var m=V(t.transforms,0,b);c(m>0?b.min-l.boxSize+m:b.max+l.boxSize+m),a(0,void 0,!0)}r.emit(C,t.index,t,u),t.index=u,c(p),a(o,(function(){r.emit(E,u,t)}))}return{update:function(){l(t.index,0),n.updateSize()},render:a,transform:c,slideTo:l,scrollPixel:function(n){var r=t.transforms,s=e.measure,a=e.limitation,o=Number(n.toExponential().split("e")[1]),l=o<=0?Math.pow(10,-(o-1)):1,b=r;if(i.resistance&&!i.loop&&(n>0&&r>=a.max?n-=Math.pow(n*l,i.resistanceRatio)/l:n<0&&r<=a.min&&(n+=Math.pow(-n*l,i.resistanceRatio)/l)),b+=n,i.loop){var d=t.tracker.vector(),u=i.isHorizontal?d.velocityX:d.velocityY,p=V(r,0,a);p&&function(e,t,i,n){return e>0&&t>n.max||e<0&&t<n.min}(u,r,0,a)&&(b=p>0?a.min-s.boxSize+p:a.max+s.boxSize+p)}c(b)},initStatus:function(e){void 0===e&&(e=0),t.startTransform=e,t.isStart=!1,t.isScrolling=!1,t.isTouching=!1},initLayout:function(e){c(e)},getOffsetSteps:s}}(a,c,r,p,s),f=L(a,c,r,m);var g=m.slideTo;return Object.assign(u,{update:function(){p.destroy(),a.update(q(t,r)),p.init(),m.update()},destroy:function(){d(P,u),f.detach(),p.destroy(),s.clear(),d(T,u)},slideTo:g,updateSize:function(){a.update(q(t,r)),m.update()}}),p.init(),f.attach(),g(r.initialSlide,0),d(S,u),u};X.use=function(e){X.plugins=e};var K=X;i(124);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var _=r.createElement("g",null,r.createElement("path",{d:"M119.8.3L49 76.1h37l-21.3 53.4 70.8-75.8H98.3z",fill:"#ff0074"}));var W=function(e){var t=e.title,i=e.titleId,n=Y(e,["title","titleId"]);return r.createElement("svg",U({viewBox:"0 0 184.4 129.8","aria-labelledby":i},n),t?r.createElement("title",{id:i},t):null,_)};function J(e){const t=()=>e.demoID?s.a.createElement("a",{className:"edit-link",href:`https://stackblitz.com/edit/${e.demoID}?file=index.html`},s.a.createElement(W,{className:"edit-icon"}),"Edit in Stackblitz"):null,i=Object(r.createRef)();return Object(r.useEffect)((()=>{const t=K(i.current.children[0],{...e.option});return()=>t.destroy()})),s.a.createElement("div",{className:"demo-container"},s.a.createElement(t,null),s.a.createElement("div",{ref:i,className:"demo-block"},e.children))}console.log(f);const G={id:"demo",title:"Demos"},Q={unversionedId:"demo",id:"version-2.0.0-alpha/demo",isDocsHomePage:!1,title:"Demos",description:"import {",source:"@site/versioned_docs/version-2.0.0-alpha/demo.md",slug:"/demo",permalink:"/docs/demo",editUrl:"https://github.com/joe223/tiny-swiper/blob/dev_2.0/packages/website/docs/versioned_docs/version-2.0.0-alpha/demo.md",version:"2.0.0-alpha",sidebar:"version-2.0.0-alpha/someSidebar",previous:{title:"APIs",permalink:"/docs/api"},next:{title:"Changelog",permalink:"/docs/changelog"}},Z=[{value:"Basic",id:"basic",children:[{value:"Default Setup",id:"default-setup",children:[]},{value:"Loop mode",id:"loop-mode",children:[]},{value:"FreeMode",id:"freemode",children:[]},{value:"Vertical Slider",id:"vertical-slider",children:[]},{value:"Space Between Slides",id:"space-between-slides",children:[]},{value:"Speed Control",id:"speed-control",children:[]},{value:"Resistance Control",id:"resistance-control",children:[]}]},{value:"Plugins",id:"plugins",children:[{value:"Pagination",id:"pagination",children:[]},{value:"Lazyload",id:"lazyload",children:[]},{value:"Keyboard Control",id:"keyboard-control",children:[]}]}],ee={rightToc:Z};function te({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},ee,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"basic"},"Basic"),Object(a.b)("h3",{id:"default-setup"},"Default Setup"),Object(a.b)(J,{option:{},demoID:"tiny-swiper2-basic-demo",mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"loop-mode"},"Loop mode"),Object(a.b)(J,{option:{loop:!0},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"freemode"},"FreeMode"),Object(a.b)(J,{option:{freeMode:!0,loop:!0},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"vertical-slider"},"Vertical Slider"),Object(a.b)(J,{option:{direction:"vertical"},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"space-between-slides"},"Space Between Slides"),Object(a.b)(J,{option:{spaceBetween:100},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"speed-control"},"Speed Control"),Object(a.b)(J,{option:{speed:2e3},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h3",{id:"resistance-control"},"Resistance Control"),Object(a.b)("p",null,"With less resistanceRatio comes bigger resistance."),Object(a.b)(J,{option:{resistance:!1},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))))),Object(a.b)("h2",{id:"plugins"},"Plugins"),Object(a.b)("h3",{id:"pagination"},"Pagination"),Object(a.b)("p",null,"You need to implement CSS code yourself."),Object(a.b)(J,{option:{pagination:{el:".swiper-plugin-pagination",clickable:!0,bulletClass:"swiper-plugin-pagination__item",bulletActiveClass:"is-active"},plugins:[f]},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))),Object(a.b)("div",{className:"swiper-plugin-pagination"}))),Object(a.b)("h3",{id:"lazyload"},"Lazyload"),Object(a.b)(J,{option:{lazyload:{loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},plugins:[m]},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"}),Object(a.b)("div",{className:"swiper-lazy-preloader"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"}),Object(a.b)("div",{className:"swiper-lazy-preloader"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"}),Object(a.b)("div",{className:"swiper-lazy-preloader"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"}),Object(a.b)("div",{className:"swiper-lazy-preloader"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{className:"swiper-lazy","data-src":"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}),Object(a.b)("div",{className:"swiper-lazy-preloader"}))))),Object(a.b)("h3",{id:"keyboard-control"},"Keyboard Control"),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"up")," ",Object(a.b)("inlineCode",{parentName:"p"},"right")," ",Object(a.b)("inlineCode",{parentName:"p"},"down")," ",Object(a.b)("inlineCode",{parentName:"p"},"left")," keys to control swiper instance."),Object(a.b)("p",null,"Keys ",Object(a.b)("inlineCode",{parentName:"p"},"up")," and ",Object(a.b)("inlineCode",{parentName:"p"},"down")," work only when ",Object(a.b)("inlineCode",{parentName:"p"},"direction: vertical"),", so do ",Object(a.b)("inlineCode",{parentName:"p"},"right")," and ",Object(a.b)("inlineCode",{parentName:"p"},"left"),"."),Object(a.b)(J,{option:{keyboard:{enabled:!0},plugins:[y]},mdxType:"Demo"},Object(a.b)("div",{className:"swiper-container"},Object(a.b)("div",{className:"swiper-wrapper"},Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102231248-ba31ce00-3f28-11eb-953e-60001e810876.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102232334-eef25500-3f29-11eb-857b-fcb744045fe8.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230734-32e45a80-3f28-11eb-9d78-697b8049caea.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230550-f7e22700-3f27-11eb-8d81-687c02919745.png"})),Object(a.b)("div",{className:"swiper-slide"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/10026019/102230508-ed279200-3f27-11eb-9765-88fe733eeb8c.png"}))),Object(a.b)("div",{className:"swiper-plugin-pagination"}))))}te.isMDXComponent=!0},83:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m}));var n=i(0),r=i.n(n);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(i),p=n,m=d["".concat(a,".").concat(p)]||d[p]||u[p]||s;return i?r.a.createElement(m,o(o({ref:t},l),{},{components:i})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);