import{i as e,a as o,d as n,c as t,w as r,b as i,o as s,e as a,s as l,f as d,g as c}from"../vendor.b690059d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const u={},p={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4,suspensible:!0};window.uni={},window.wx={};const m={},f=Object.assign;window.____43F4022____=!0,delete window.____43F4022____,window.__uniConfig=f({globalStyle:{backgroundColor:"#F8F8F8",navigationBar:{backgroundColor:"#F8F8F8",titleText:"uni-app",titleColor:"#000000"}},compilerVersion:"3.2.9"},{async:p,debug:!1,networkTimeout:{request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},sdkConfigs:{},qqMapKey:void 0,googleMapKey:void 0,nvue:{"flex-direction":"column"},locale:"",fallbackLocale:"",locales:Object.keys(m).reduce(((e,o)=>{const n=o.replace(/\.\/locale\/(uni-app.)?(.*).json/,"$2");return f(e[n]||(e[n]={}),m[o].default),e}),{}),router:{mode:"hash",base:"/"}}),window.__uniLayout=window.__uniLayout||{};const g=()=>{return e=()=>import("./pages-index-index.0f47f14d.js"),(o=["assets/pages-index-index.0f47f14d.js","assets/index.70d19536.css","vendor.b690059d.js"])&&0!==o.length?Promise.all(o.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const o=e.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const t=document.createElement("link");return t.rel=o?"stylesheet":"modulepreload",o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o?new Promise(((e,o)=>{t.addEventListener("load",e),t.addEventListener("error",o)})):void 0}))).then((()=>e())):e();var e,o},_=n(f({loader:g},{loadingComponent:e,errorComponent:o,delay:p.delay,timeout:p.timeout,suspensible:p.suspensible}));window.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{setup:()=>()=>{return e=_,s(),t(i,null,{page:r((()=>[a(e,{ref:"page"},null,512)])),_:1});var e}},loader:g,meta:{isQuit:!0,isEntry:!0,navigationBar:{titleText:"头像制作"}}}].map((e=>(e.meta.route=(e.alias||e.path).substr(1),e)));const y={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};l(y),c(y).use(d).mount("#app");
