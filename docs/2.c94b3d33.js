/*! For license information please see 2.c94b3d33.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e,t,n){"use strict";var a,r=n(2),c=n(0),o=n.n(c),l=n(84),s=n(85),i=n(86);var u=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},d=c.useLayoutEffect,f=function(e){var t=Object(c.useRef)(e);return d((function(){t.current=e})),t},h="touchstart",m=["mousedown",h],v=function(e){if(e===h)return u()?{passive:!0}:void 0};var b=function(e,t){var n=f(t);Object(c.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return m.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){m.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])};function p({activeBasePath:e,activeBaseRegex:t,to:n,href:a,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:u,...d}){const f=Object(i.a)(n),h=Object(i.a)(e),m=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:u?m:a}:{isNavLink:!0,activeClassName:l,to:f,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(h)}:null},d),c)}function g({items:e,position:t,className:n,...a}){const s=o.a.useRef(null),i=o.a.useRef(null),[u,d]=Object(c.useState)(!1);function f(e){if(e){var t,n;const e=null==i||null===(t=i.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;e&&e.focus()}d(e)}b(s,(()=>f(!1)));const h=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:s,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(p,Object(r.a)({className:h(n)},a,{onClick:a.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!a.to||"Tab"===e.key)&&(e.preventDefault(),f(!0))}}),a.label),o.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...n},a)=>o.a.createElement("li",{key:a},o.a.createElement(p,Object(r.a)({onKeyDown:t=>{a===e.length-1&&"Tab"===t.key&&(t.preventDefault(),f(!1))},activeClassName:"dropdown__link--active",className:h(t,!0)},n))))))):o.a.createElement(p,Object(r.a)({className:h(n)},a))}function k({items:e,position:t,className:n,...a}){const c=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(n,!0)},a),a.label),o.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},n)=>o.a.createElement("li",{className:"menu__list-item",key:n},o.a.createElement(p,Object(r.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:a.onClick}))))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(n)},a)))}t.a=function({mobile:e=!1,...t}){const n=e?k:g;return o.a.createElement(n,t)}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=()=>null},104:function(e,t,n){"use strict";var a=n(0),r=n(89);var c=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},o=n(109);t.a=e=>{const[t,n]=Object(a.useState)(!0),[l,s]=Object(a.useState)(!1),[i,u]=Object(a.useState)(0),[d,f]=Object(a.useState)(0),h=Object(a.useCallback)((e=>{null!==e&&f(e.getBoundingClientRect().height)}),[]),m=Object(r.useLocation)(),[v,b]=c(m.hash);return Object(o.a)((({scrollY:t})=>{if(!e)return;if(0===t&&n(!0),t<d)return;if(l)return s(!1),n(!1),void u(t);const a=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&t>=i?n(!1):t+r<a&&n(!0),u(t)}),[i,d]),Object(a.useEffect)((()=>{e&&(n(!0),b(m.hash))}),[m]),Object(a.useEffect)((()=>{e&&v&&s(!0)}),[v]),{navbarRef:h,isNavbarVisible:t}}},106:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},107:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},108:function(e,t,n){"use strict";var a=n(0),r=n(107);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},109:function(e,t,n){"use strict";var a=n(0),r=n(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,r]=Object(a.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(a.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),n}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),l=f(n(114)),s=f(n(7)),i=f(n(115)),u=f(n(116)),d=n(117);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},114:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(2),r=n(0),c=n.n(r),o=n(102),l=n(93);function s({label:e,to:t,docsPluginId:n,...r}){const s=Object(l.useActiveVersion)(n),i=Object(l.useLatestVersion)(n),u=null!=s?s:i,d=null!=e?e:u.label,f=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return c.a.createElement(o.a,Object(a.a)({},r,{label:d,to:f}))}},122:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),r=n(0),c=n.n(r),o=n(102),l=n(93);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i({mobile:e,docsPluginId:t,...n}){var r;const i=Object(l.useActiveDocContext)(t),u=Object(l.useVersions)(t),d=Object(l.useLatestVersion)(t);const f=null!==(r=i.activeVersion)&&void 0!==r?r:d,h=e?"Versions":f.label,m=e?void 0:s(f).path;return c.a.createElement(o.a,Object(a.a)({},n,{mobile:e,label:h,to:m,items:function(){if(!(u.length<=1))return u.map((e=>{const t=(null==i?void 0:i.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==i?void 0:i.activeVersion)}}))}()}))}},87:function(e,t,n){"use strict";var a=n(0),r=n(106);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},90:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[n,c]=Object(a.useState)(t);return Object(a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){c(t())}}),[]),n}},92:function(e,t,n){"use strict";var a=n(83),r=n(87),c=n(86),o=n(88);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(a.a)(),{isDarkTheme:t}=Object(r.a)(),n=Object(c.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(o.a)(n)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:n,logoLinkProps:l,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},94:function(e,t,n){"use strict";var a=n(2),r=n(0),c=n.n(r),o=n(84),l=n(95),s=n(83),i=n(86),u=n(8);const d="light",f="dark",h=e=>e===f?f:d,m=()=>u.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):d,v=e=>{try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}};var b=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(s.a)(),[t,n]=Object(r.useState)(m),a=Object(r.useCallback)((()=>{n(d),v(d)}),[]),c=Object(r.useCallback)((()=>{n(f),v(f)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",h(t))}),[t]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(h(e))}catch(t){console.error(t)}}),[n]),Object(r.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?f:d)}))}),[]),{isDarkTheme:t===f,setLightTheme:a,setDarkTheme:c}},p=n(106);var g=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=b();return c.a.createElement(p.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};const k="docusaurus.tab.";var E=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(k)){e[n.substring(k.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};const y="docusaurus.announcement.dismiss",O="docusaurus.announcement.id";var j=()=>{const{announcementBar:e}=Object(s.a)().siteConfig.themeConfig,[t,n]=Object(r.useState)(!0),a=Object(r.useCallback)((()=>{localStorage.setItem(y,"true"),n(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem(O);"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;localStorage.setItem(O,t),r&&localStorage.setItem(y,"false"),(r||"false"===localStorage.getItem(y))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},w=n(107);var C=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=E(),{isAnnouncementBarClosed:a,closeAnnouncementBar:r}=j();return c.a.createElement(w.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:r}},e.children)},_=n(108),N=n(50),S=n.n(N);var T=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(s.a)(),{content:t,backgroundColor:n,textColor:a,isCloseable:r}=e,{isAnnouncementBarClosed:l,closeAnnouncementBar:i}=Object(_.a)();return!t||r&&l?null:c.a.createElement("div",{className:S.a.announcementBar,style:{backgroundColor:n,color:a},role:"banner"},c.a.createElement("div",{className:Object(o.a)(S.a.announcementBarContent,{[S.a.announcementBarCloseable]:r}),dangerouslySetInnerHTML:{__html:t}}),r?c.a.createElement("button",{type:"button",className:S.a.announcementBarClose,onClick:i,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=n(96),B=n(85),x=n(52),D=n.n(x);function I({to:e,href:t,label:n,prependBaseUrlToHref:r,...o}){const l=Object(i.a)(e),s=Object(i.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(B.a,Object(a.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?s:t}:{to:l},o),n)}const P=({url:e,alt:t})=>c.a.createElement("img",{className:"footer__logo",alt:t,src:e});var M=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:n={}}=t,{footer:a}=n,{copyright:r,links:l=[],logo:u={}}=a||{},d=Object(i.a)(u.src);return a?c.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},l&&l.length>0&&c.a.createElement("div",{className:"row footer__links"},l.map(((e,t)=>c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(I,e))))):null)))),(u||r)&&c.a.createElement("div",{className:"text--center"},u&&u.src&&c.a.createElement("div",{className:"margin-bottom--sm"},u.href?c.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:D.a.footerLogoLink},c.a.createElement(P,{alt:u.alt,url:d})):c.a.createElement(P,{alt:u.alt,url:d})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};n(53);function A({children:e}){return c.a.createElement(g,null,c.a.createElement(C,null,e))}t.a=function(e){const{siteConfig:t}=Object(s.a)(),{favicon:n,title:r,themeConfig:{image:u,metadatas:d},url:f,titleDelimiter:h}=t,{children:m,title:v,noFooter:b,description:p,image:g,keywords:k,permalink:E,wrapperClassName:y}=e,O=v?`${v} ${h} ${r}`:r,j=g||u,w=Object(i.a)(j,{absolute:!0}),C=Object(i.a)(n);return c.a.createElement(A,null,c.a.createElement(l.a,null,c.a.createElement("html",{lang:"en"}),O&&c.a.createElement("title",null,O),O&&c.a.createElement("meta",{property:"og:title",content:O}),n&&c.a.createElement("link",{rel:"shortcut icon",href:C}),p&&c.a.createElement("meta",{name:"description",content:p}),p&&c.a.createElement("meta",{property:"og:description",content:p}),k&&k.length&&c.a.createElement("meta",{name:"keywords",content:k.join(",")}),j&&c.a.createElement("meta",{property:"og:image",content:w}),j&&c.a.createElement("meta",{property:"twitter:image",content:w}),j&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),E&&c.a.createElement("meta",{property:"og:url",content:f+E}),E&&c.a.createElement("link",{rel:"canonical",href:f+E}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(l.a,null,d.map(((e,t)=>c.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))))),c.a.createElement(T,null),c.a.createElement(L.a,null),c.a.createElement("div",{className:Object(o.a)("main-wrapper",y)},m),!b&&c.a.createElement(M,null))}},97:function(e,t,n){"use strict";var a=n(2),r=n(0),c=n.n(r),o=n(113),l=n.n(o),s=n(83),i=n(84),u=n(51),d=n.n(u);const f=({icon:e,style:t})=>c.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.dark),style:t},e),h=({icon:e,style:t})=>c.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.light),style:t},e);t.a=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:o}}}},isClient:i}=Object(s.a)();return c.a.createElement(l.a,Object(a.a)({disabled:!i,icons:{checked:c.a.createElement(f,{icon:t,style:n}),unchecked:c.a.createElement(h,{icon:r,style:o})}},e))}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(102);const o={default:()=>c.a,docsVersion:()=>n(118).default,docsVersionDropdown:()=>n(122).default};function l({type:e,...t}){const n=((e="default")=>{const t=o[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(n,t)}}}]);