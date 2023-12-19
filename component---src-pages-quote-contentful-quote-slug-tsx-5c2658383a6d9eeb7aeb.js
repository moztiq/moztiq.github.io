"use strict";(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[45],{6700:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),r=n(394);const i=r.default.div.withConfig({displayName:"ContentContainerTop__TopWrapper",componentId:"sc-g5vy1s-0"})(["width:100%;height:70px;min-height:70px;color:",";background-color:",";display:flex;justify-content:flex-end;align-items:center;z-index:5;border-bottom:1px solid ",";"],(e=>e.theme.colors.textPrimary),(e=>e.theme.colors.gray100),(e=>e.theme.colors.gray200)),a=r.default.h1.withConfig({displayName:"ContentContainerTop__Title",componentId:"sc-g5vy1s-1"})(["font-size:1.1rem;letter-spacing:1px;padding-right:35px;"]);function l(e){let{children:t}=e;return o.createElement(i,null,o.createElement(a,null,t))}const c=r.default.div.withConfig({displayName:"ContentContainer__ContentContainerWrapper",componentId:"sc-a8p2hq-0"})(["width:100%;background-color:",";overflow-y:scroll;overflow-x:hidden;scroll-behavior:smooth;@media screen and (max-width:768px){position:absolute;}"],(e=>e.theme.colors.background));function s(e){let{title:t,children:n}=e;return o.createElement(c,null,o.createElement(l,null,t),n)}},6792:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294);function r(){const e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"moztiq/moztiq-comments","data-repo-id":"R_kgDOK7WVWw","data-category":"Comments","data-category-id":"DIC_kwDOK7WVW84Cb2oW","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"0","data-emit-metadata":"0","data-input-position":"top","data-theme":"preferred_color_scheme","data-lang":"ko","data-loading":"lazy",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,o]=e;t.setAttribute(n,o)})),e.current&&e.current.appendChild(t)}),[]),o.createElement("div",{id:"gisqus",ref:e})}},690:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return W}});var o=n(7294),r=n(6553),i=n(3904),a=n(5785),l=n(394),c=n(7527),s=n(8868);function u(){const e=(0,o.useRef)(!1);return(0,s.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var d=n(5618);var p=n(240),m=n(6681);class f extends o.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:t}){const n=(0,o.useId)(),r=(0,o.useRef)(null),i=(0,o.useRef)({width:0,height:0,top:0,left:0});return(0,o.useInsertionEffect)((()=>{const{width:e,height:o,top:a,left:l}=i.current;if(t||!r.current||!e||!o)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${o}px !important;\n            top: ${a}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[t]),o.createElement(f,{isPresent:t,childRef:r,sizeRef:i},o.cloneElement(e,{ref:r}))}const g=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:l})=>{const c=(0,m.h)(y),s=(0,o.useId)(),u=(0,o.useMemo)((()=>({id:s,initial:t,isPresent:n,custom:i,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;r&&r()},register:e=>(c.set(e,!1),()=>c.delete(e))})),a?void 0:[n]);return(0,o.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[n]),o.useEffect((()=>{!n&&!c.size&&r&&r()}),[n]),"popLayout"===l&&(e=o.createElement(h,{isPresent:n},e)),o.createElement(p.O.Provider,{value:u},e)};function y(){return new Map}var x=n(5364);var w=n(5487);const E=e=>e.key||"";const v=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:a=!0,mode:l="sync"})=>{(0,w.k)(!i,"Replace exitBeforeEnter with mode='wait'");const c=(0,o.useContext)(x.p).forceRender||function(){const e=u(),[t,n]=(0,o.useState)(0),r=(0,o.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,o.useCallback)((()=>d.Wi.postRender(r)),[r]),t]}()[0],p=u(),m=function(e){const t=[];return o.Children.forEach(e,(e=>{(0,o.isValidElement)(e)&&t.push(e)})),t}(e);let f=m;const h=(0,o.useRef)(new Map).current,y=(0,o.useRef)(f),v=(0,o.useRef)(new Map).current,C=(0,o.useRef)(!0);var _;if((0,s.L)((()=>{C.current=!1,function(e,t){e.forEach((e=>{const n=E(e);t.set(n,e)}))}(m,v),y.current=f})),_=()=>{C.current=!0,v.clear(),h.clear()},(0,o.useEffect)((()=>()=>_()),[]),C.current)return o.createElement(o.Fragment,null,f.map((e=>o.createElement(g,{key:E(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:l},e))));f=[...f];const b=y.current.map(E),k=m.map(E),q=b.length;for(let o=0;o<q;o++){const e=b[o];-1!==k.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(f=[]),h.forEach(((e,n)=>{if(-1!==k.indexOf(n))return;const i=v.get(n);if(!i)return;const s=b.indexOf(n);let u=e;if(!u){const e=()=>{h.delete(n);const e=Array.from(v.keys()).filter((e=>!k.includes(e)));if(e.forEach((e=>v.delete(e))),y.current=m.filter((t=>{const o=E(t);return o===n||e.includes(o)})),!h.size){if(!1===p.current)return;c(),r&&r()}};u=o.createElement(g,{key:E(i),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:a,mode:l},i),h.set(n,u)}f.splice(s,0,u)})),f=f.map((e=>{const t=e.key;return h.has(t)?e:o.createElement(g,{key:E(e),isPresent:!0,presenceAffectsLayout:a,mode:l},e)})),o.createElement(o.Fragment,null,h.size?f:f.map((e=>(0,o.cloneElement)(e))))};var C=n(6792);const _=l.default.div.withConfig({displayName:"QuoteDetail__DetailWrapper",componentId:"sc-1nqwpq4-0"})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:",";margin:100px 0;"],(e=>e.theme.colors.gray100)),b=l.default.div.withConfig({displayName:"QuoteDetail__QuoteDetailWrapper",componentId:"sc-1nqwpq4-1"})(["padding:50px;width:60%;min-height:20%;background-color:",";border-radius:1rem;position:relative;box-shadow:0 2px 5px 0 rgba(0,0,0,0.15);border-top:5px solid ",";@media screen and (max-width:768px){width:75%;padding:25px;}"],(e=>e.theme.colors.white),(e=>{switch(e.category){case"poem":return"tomato";case"quote":return"#1c98e7";case"essay":return"#54b71c";default:return"gray"}})),k=l.default.div.withConfig({displayName:"QuoteDetail__GisqusWrapper",componentId:"sc-1nqwpq4-2"})(["margin-top:70px;width:60%;@media screen and (max-width:768px){width:75%;}"]),q=l.default.div.withConfig({displayName:"QuoteDetail__ContentWrapper",componentId:"sc-1nqwpq4-3"})(["display:flex;flex-direction:column;font-family:'Pretendard',serif;"]),R=(l.default.div.withConfig({displayName:"QuoteDetail__Category",componentId:"sc-1nqwpq4-4"})(["display:flex;justify-content:center;align-items:center;position:absolute;width:90px;height:40px;border-radius:5px;top:-10px;left:10px;background-color:",";color:",";"],(e=>{switch(e.category){case"poem":return"tomato";case"quote":return"#1c98e7";case"essay":return"#54b71c";default:return"gray"}}),(e=>e.theme.colors.white)),l.default.div.withConfig({displayName:"QuoteDetail__Title",componentId:"sc-1nqwpq4-5"})(["text-align:center;font-size:1.5rem;color:",";"],(e=>e.theme.colors.gray800))),I=l.default.div.withConfig({displayName:"QuoteDetail__LongContent",componentId:"sc-1nqwpq4-6"})(["display:inline-block;margin-top:",";font-size:1.2rem;line-height:2;"],(e=>e.title?"50px":"20px")),z=l.default.div.withConfig({displayName:"QuoteDetail__Author",componentId:"sc-1nqwpq4-7"})(["display:flex;justify-content:flex-end;margin-top:50px;font-size:1.1rem;color:",";"],(e=>e.theme.colors.gray500));(0,l.default)(c.E.div).withConfig({displayName:"QuoteDetail__Blink",componentId:"sc-1nqwpq4-8"})(["display:inline-block;height:1.25rem;width:1px;transform:translateY(0.25rem);background-color:",";"],(e=>e.theme.colors.gray800));function D(e){var t;const{data:n}=e,r=null==n||null===(t=n.content)||void 0===t?void 0:t.childMarkdownRemark.html.split("\n").map((e=>e)).join("<br/>").split(/(<[^>]+>)/g).reduce(((e,t)=>/(<[^>]+>)/g.test(t)?[].concat((0,a.Z)(e),[t]):e.concat(t.split(""))),[]),{0:i,1:l}=(0,o.useState)([]);return(0,o.useEffect)((()=>{const e=setTimeout((()=>{if(i.length==r.length)return;const e=null==r?void 0:r.slice(0,i.length+1);l(e)}),100);return i.length==r.length&&e&&clearTimeout(e),()=>clearTimeout(e)}),[i,r]),o.createElement(o.Fragment,null,o.createElement(_,null,o.createElement(b,{category:n.category,title:n.title},o.createElement(q,null,n.title&&o.createElement(R,null,n.title),o.createElement(I,{title:n.title},o.createElement(v,null,o.createElement(c.E.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},dangerouslySetInnerHTML:{__html:i.join("")||""}}))),o.createElement(z,null,"- ",n.author))),o.createElement(k,null,o.createElement(C.Z,null))))}var P=n(6700),Q=n(3214);function W(e){let{data:t}=e;const n=t.contentfulQuote;return o.createElement(r.Z,null,o.createElement(P.Z,{title:(0,Q.N)(Q.W.QUOTE)},n&&o.createElement(D,{data:n})))}const N=e=>{var t,n;let{data:r}=e;const a=r.contentfulQuote;return o.createElement(i.Z,{title:(null==a?void 0:a.title)||"QUOTE",description:(null==a||null===(t=a.content)||void 0===t||null===(n=t.childMarkdownRemark)||void 0===n?void 0:n.excerpt)||"",url:`/quote/${null==a?void 0:a.slug}`})}}}]);
//# sourceMappingURL=component---src-pages-quote-contentful-quote-slug-tsx-5c2658383a6d9eeb7aeb.js.map