"use strict";(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[300],{6700:function(e,t,o){o.d(t,{Z:function(){return d}});var n=o(7294),r=o(3133);const i=r.default.div.withConfig({displayName:"ContentContainerTop__TopWrapper",componentId:"sc-g5vy1s-0"})(["width:100%;height:70px;min-height:70px;color:",";background-color:",";display:flex;justify-content:flex-end;align-items:center;z-index:5;border-bottom:1px solid ",";"],(e=>e.theme.colors.textPrimary),(e=>e.theme.colors.gray100),(e=>e.theme.colors.gray200)),a=r.default.h1.withConfig({displayName:"ContentContainerTop__Title",componentId:"sc-g5vy1s-1"})(["font-size:1.1rem;font-weight:500;letter-spacing:1px;padding-right:35px;"]);function l(e){let{children:t}=e;return n.createElement(i,null,n.createElement(a,null,t))}const c=r.default.div.withConfig({displayName:"ContentContainer__ContentContainerWrapper",componentId:"sc-a8p2hq-0"})(["width:100%;background-color:",";overflow-y:scroll;overflow-x:hidden;scroll-behavior:smooth;@media screen and (max-width:768px){position:absolute;}"],(e=>e.theme.colors.background));function d(e){let{title:t,children:o}=e;return n.createElement(c,null,n.createElement(l,null,t),o)}},8556:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(7294);var r=function(e){const t=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const o=document.createElement("script");Object.entries(e).forEach((e=>{let[t,n]=e;o.setAttribute(t,n)})),t.current&&t.current.appendChild(o)}),[]),{containerRef:t}};function i(){const{containerRef:e}=r({src:"https://giscus.app/client.js","data-repo":"moztiq/moztiq-comments","data-repo-id":"R_kgDOK7WVWw","data-category":"Comments","data-category-id":"DIC_kwDOK7WVW84Cb2oW","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"0","data-emit-metadata":"0","data-input-position":"top","data-theme":"preferred_color_scheme","data-lang":"ko","data-loading":"lazy",crossorigin:"anonymous",async:"true"});return n.createElement("div",{id:"gisqus",ref:e})}},1068:function(e,t,o){o.r(t),o.d(t,{Head:function(){return q},default:function(){return P}});var n=o(7294),r=o(9236),i=o(6700),a=o(3904),l=o(3133);const c=l.default.div.withConfig({displayName:"Toc__TocWrapper",componentId:"sc-rwcuv2-0"})(["width:300px;min-width:300px;background-color:",";@media screen and (max-width:1024px){display:none;}"],(e=>e.theme.colors.background)),d=l.default.div.withConfig({displayName:"Toc__TableOfContents",componentId:"sc-rwcuv2-1"})(["width:70%;background-color:",";border:1px solid ",";border-radius:10px;padding:25px 25px 5px 25px;position:sticky;top:20px;text-transform:uppercase;letter-spacing:1px;margin:20px auto;"],(e=>e.theme.colors.white),(e=>e.theme.colors.gray200)),s=l.default.h2.withConfig({displayName:"Toc__TocTitle",componentId:"sc-rwcuv2-2"})(["color:",";font-size:15px;font-weight:500;margin-bottom:30px;"],(e=>e.theme.colors.gray800)),p=l.default.div.withConfig({displayName:"Toc__TocList",componentId:"sc-rwcuv2-3"})(["ul{color:",";margin:5px 0;overflow-y:scroll;}li{font-size:13px;padding:0 0 10px 0;margin-bottom:10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}a{text-decoration:none;color:",";padding-bottom:2px;border-bottom:1px dashed ",";}a.highlight{color:",";}"],(e=>e.theme.colors.gray800),(e=>e.theme.colors.gray500),(e=>e.theme.colors.gray200),(e=>e.theme.colors.black));function m(e){let{toc:t}=e;return n.createElement(c,{className:"toc"},n.createElement(d,null,n.createElement(s,null,"Table of Contents"),n.createElement(p,{dangerouslySetInnerHTML:{__html:t}})))}var u=o(4803),h=o.n(u),g=o(8556);const f=l.default.div.withConfig({displayName:"PostContent__PostDetailContentWrapper",componentId:"sc-13byr3c-0"})(["width:75%;@media screen and (max-width:430px){width:85%;}"]),x=l.default.h1.withConfig({displayName:"PostContent__Title",componentId:"sc-13byr3c-1"})(["margin:70px 0 50px 0;font-size:1.8rem;font-weight:600;color:#484848;display:flex;justify-content:center;align-items:center;@media screen and (max-width:768px){font-size:1.5rem;}@media screen and (max-width:430px){font-size:1.3rem;}"]),y=l.default.div.withConfig({displayName:"PostContent__PublishDateLine",componentId:"sc-13byr3c-2"})(["height:15px;border-bottom:1px solid gainsboro;position:relative;display:flex;justify-content:center;"]),b=l.default.div.withConfig({displayName:"PostContent__PublishDate",componentId:"sc-13byr3c-3"})(["font-size:0.8rem;font-weight:bold;letter-spacing:1px;width:150px;height:30px;color:",";background-color:",";position:absolute;display:flex;justify-content:center;align-items:center;"],(e=>e.theme.colors.accentColor),(e=>e.theme.colors.white)),w=l.default.div.withConfig({displayName:"PostContent__HeaderImage",componentId:"sc-13byr3c-4"})(["margin:50px auto;height:250px;background-image:url(",");background-size:cover;border-radius:10px;"],(e=>e.url)),v=l.default.ul.withConfig({displayName:"PostContent__TagList",componentId:"sc-13byr3c-5"})(["margin-top:80px;display:flex;align-items:center;"]),_=l.default.li.withConfig({displayName:"PostContent__Tag",componentId:"sc-13byr3c-6"})(["padding:5px 10px;margin-right:10px;font-size:0.9rem;border-radius:5px;color:",";background-color:",";"],(e=>e.theme.colors.gray600),(e=>e.theme.colors.gray100)),C=l.default.div.withConfig({displayName:"PostContent__LongContent",componentId:"sc-13byr3c-7"})(["font-size:1rem;line-height:1.3;text-align:justify;a{color:",";text-decoration:underline;}p{margin:15px 0;font-size:1.05rem;line-height:1.7;white-space:pre-wrap;code{font-size:0.9rem;background-color:#c05b4d;}}b,strong{font-weight:600;}ul,ol{color:",";background-color:",";border:1px solid ",";padding:10px 40px;margin:5px 0;border-radius:5px;}li{list-style-type:disc;margin:10px 0;}h3{color:",";font-size:1.4rem;font-weight:600;margin-top:40px;padding:5px 0;}pre{border-radius:5px;}code{font-size:13px;}img{max-width:100%;border-radius:5px;}blockquote{color:",";margin:30px 0;line-height:1.8;padding:5px 25px;background-color:",";border-radius:10px;border-top:2px solid ",";box-shadow:0 3px 3px 0 rgba(0,0,0,0.15);white-space:pre-wrap;p{margin:5px 0;}ul{padding:0 40px;margin:0;line-height:1.1;}li{margin:0;}}em{color:",";font-style:italic;}@media screen and (max-width:430px){h3{font-size:1.2rem;}}"],(e=>e.theme.colors.primary),(e=>e.theme.colors.gray800),(e=>e.theme.colors.gray50),(e=>e.theme.colors.gray300),(e=>e.theme.colors.gray800),(e=>e.theme.colors.gray800),(e=>e.theme.colors.gray50),(e=>e.theme.colors.primary),(e=>e.theme.colors.textPrimary)),E=l.default.div.withConfig({displayName:"PostContent__GisqusWrapper",componentId:"sc-13byr3c-8"})(["margin-top:70px;"]);function k(e){var t,o,r;let{post:i}=e;return(0,n.useEffect)((()=>{document.querySelectorAll("a").forEach((function(e){e.setAttribute("target","_blank")}))}),[]),n.createElement(f,null,n.createElement(x,null,null==i?void 0:i.title),n.createElement(y,null,n.createElement(b,null,n.createElement(h(),{format:"MMM D, YYYY"},(null==i?void 0:i.releaseDate)||new Date))),(null==i||null===(t=i.headerImage)||void 0===t?void 0:t.url)&&n.createElement(w,{url:null==i||null===(o=i.headerImage)||void 0===o?void 0:o.url}),n.createElement(C,{dangerouslySetInnerHTML:{__html:(null==i||null===(r=i.contents)||void 0===r?void 0:r.childMarkdownRemark.html)||""}}),n.createElement(v,null,null==i?void 0:i.tag.map(((e,t)=>n.createElement(_,{key:t},"#",e)))),n.createElement(E,null,n.createElement(g.Z,null)))}const I=l.default.div.withConfig({displayName:"PostDetail__DetailWrapper",componentId:"sc-5jwpop-0"})(["width:100%;display:flex;background-color:",";"],(e=>e.theme.colors.white)),z=l.default.div.withConfig({displayName:"PostDetail__PostDetailWrapper",componentId:"sc-5jwpop-1"})(["width:100%;display:flex;justify-content:center;padding-bottom:50px;border-right:1px solid ",";"],(e=>e.theme.colors.gray200));function N(e){var t,o;const{data:r}=e,i=(0,n.useRef)();return(0,n.useEffect)((()=>{var e;const t=new IntersectionObserver((e=>{var t;const o=e.filter((e=>e.isIntersecting&&e.intersectionRatio>=1));0!==o.length&&(null===(t=i.current)||void 0===t||t.querySelectorAll(".highlight").forEach((e=>e.classList.remove("highlight"))),o.forEach((e=>{var t,o;const n=null===(t=i.current)||void 0===t?void 0:t.querySelector(`.toc a[href='#${encodeURI(null!==(o=e.target.getAttribute("id"))&&void 0!==o?o:"")}']`);n&&n.classList.add("highlight")})))}),{threshold:[0,1]});return null===(e=i.current)||void 0===e||e.querySelectorAll("h2, h3").forEach((e=>{t.observe(e)})),()=>{t.disconnect()}}),[]),n.createElement(I,{ref:i},n.createElement(z,null,n.createElement(k,{post:r})),(null==r||null===(t=r.contents)||void 0===t?void 0:t.childMarkdownRemark.tableOfContents)&&n.createElement(m,{toc:null==r||null===(o=r.contents)||void 0===o?void 0:o.childMarkdownRemark.tableOfContents}))}var T=o(3214);function P(e){let{data:t}=e;const o=t.contentfulMoztiqBlog;return n.createElement(r.Z,null,n.createElement(i.Z,{title:(0,T.NZ)(null==o?void 0:o.category)},o&&n.createElement(N,{data:o})))}const q=e=>{var t,o,r;let{data:i}=e;const l=i.contentfulMoztiqBlog;return n.createElement(a.Z,{title:(null==l?void 0:l.title)||"",description:(null==l||null===(t=l.contents)||void 0===t||null===(o=t.childMarkdownRemark)||void 0===o?void 0:o.excerpt)||"",imageUrl:(null==l||null===(r=l.headerImage)||void 0===r?void 0:r.url)||"",url:`/post/${null==l?void 0:l.slug}`})}}}]);
//# sourceMappingURL=component---src-pages-post-contentful-moztiq-blog-slug-tsx-3eb5a72efdeb03c7724b.js.map