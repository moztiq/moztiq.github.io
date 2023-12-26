"use strict";(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[668],{6765:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),i=n(3133);const a=i.default.div.withConfig({displayName:"ContentExplain__TopBackground",componentId:"sc-a5welc-0"})(["display:flex;justify-content:center;height:200px;background-color:",";background-size:cover;"],(e=>e.theme.colors.gray200)),l=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainWrapper",componentId:"sc-a5welc-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;position:relative;"]),r=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainTitleWrapper",componentId:"sc-a5welc-2"})(["display:flex;align-items:center;"]),c=i.default.div.withConfig({displayName:"ContentExplain__IconWrapper",componentId:"sc-a5welc-3"})(["margin-right:30px;font-size:1.5rem;color:",";"],(e=>e.theme.colors.accentColor)),d=i.default.span.withConfig({displayName:"ContentExplain__ContentExplainTitle",componentId:"sc-a5welc-4"})(["font-size:1.5rem;color:",";letter-spacing:1px;span{color:",";font-weight:bold;font-size:40px;}span.accent{margin:0 20px;color:",";font-size:28px;}@media screen and (max-width:768px){font-size:18px;span{font-size:28px;}}"],(e=>e.theme.colors.gray500),(e=>e.theme.colors.gray800),(e=>e.theme.colors.accentColor)),p=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainDescription",componentId:"sc-a5welc-5"})(["margin-top:20px;font-size:1rem;color:",";line-height:1.5;"],(e=>e.theme.colors.gray500));function s(e){return o.createElement(a,null,o.createElement(l,null,o.createElement(r,null,o.createElement(c,null,e.icon),o.createElement(d,{dangerouslySetInnerHTML:{__html:e.title}})),o.createElement(p,null,e.description)))}},525:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return b}});var o=n(7294),i=n(9236),a=n(6700),l=n(3904),r=n(3133),c=n(3167),d=n(1883);const p=r.default.li.withConfig({displayName:"QuoteCard__Quote",componentId:"sc-4tz2e-0"})(["padding:3rem 2rem 2rem 2rem;margin-top:50px;background-color:",";box-shadow:0 0 0 1px rgba(23,23,23,0.05);border-radius:0.5rem;position:relative;transition:all 0.2s;@media screen and (max-width:430px){padding:2.5rem 1rem 1rem 1rem;}&:hover{box-shadow:0 2px 5px 0 rgba(0,0,0,0.15);}"],(e=>e.theme.colors.white)),s=r.default.div.withConfig({displayName:"QuoteCard__ContentWrapper",componentId:"sc-4tz2e-1"})(["display:flex;align-items:center;"]),m=r.default.div.withConfig({displayName:"QuoteCard__ContentTextWrapper",componentId:"sc-4tz2e-2"})(["display:flex;flex-direction:column;"]),u=r.default.div.withConfig({displayName:"QuoteCard__Category",componentId:"sc-4tz2e-3"})(["display:flex;justify-content:center;align-items:center;position:absolute;width:90px;height:40px;border-radius:5px;top:-10px;left:10px;background-color:",";color:",";"],(e=>{switch(e.category){case"poem":return"tomato";case"quote":return"#1c98e7";case"essay":return"#54b71c";default:return"gray"}}),(e=>e.theme.colors.white)),f=r.default.p.withConfig({displayName:"QuoteCard__ContentText",componentId:"sc-4tz2e-4"})(["font-size:0.95rem;color:",";line-height:1.7;text-decoration:none;overflow:hidden;text-overflow:ellipsis;width:100%;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-align:justify;overflow-wrap:anywhere;"],(e=>e.theme.colors.gray800)),g=r.default.span.withConfig({displayName:"QuoteCard__Title",componentId:"sc-4tz2e-5"})(["margin-top:20px;font-size:0.85rem;text-align:right;color:",";"],(e=>e.theme.colors.gray500));function h(e){let{quote:t}=e;return o.createElement(d.Link,{to:`/quote/${t.slug}`},o.createElement(p,null,o.createElement(u,{category:t.category},t.category.toUpperCase()),o.createElement(s,null,o.createElement(m,null,o.createElement(f,null,(0,c.o)(t.content.childMarkdownRemark.html)),o.createElement(g,null,"- ",t.author,t.title&&` / ${t.title}`)))))}const x=r.default.ul.withConfig({displayName:"QuoteList__QuoteListWrapper",componentId:"sc-1ejpu8m-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:30px;width:85%;a{text-decoration:none;}padding-bottom:50px;@media screen and (max-width:1024px){width:95%;grid-template-columns:repeat(2,1fr);grid-column-gap:20px;}@media screen and (max-width:430px){width:95%;grid-template-columns:1fr;}"]);function w(e){let{quotes:t}=e;return o.createElement(x,null,t&&t.map((e=>o.createElement(h,{key:e.slug,quote:e}))))}var y=n(3214),C=n(982),E=n(6765);const _=r.default.div.withConfig({displayName:"quote__QuoteListContainer",componentId:"sc-17dw6mb-0"})(["display:flex;justify-content:center;"]);function b(e){let{data:t}=e;const n=t.allContentfulQuote.nodes;return o.createElement(i.Z,null,o.createElement(a.Z,{title:(0,y.NZ)(y.WD.QUOTE)},o.createElement(E.Z,{icon:o.createElement(C.G,{icon:(0,y.UD)(y.WD.QUOTE)}),title:`<span>QUOTE</span> ${(0,y.NZ)(y.WD.QUOTE)}`,description:"때론 짧은 시 한편, 누군가의 한마디, 책 속의 짧은 글귀만으로 가슴이 벅찰 때가 있습니다. 그런 글을 찾아 모아두고 싶었어요."}),o.createElement(_,null,o.createElement(w,{quotes:n}))))}const v=()=>o.createElement(l.Z,{title:"QUOTE SECTION",description:"QUOTE SECTION",url:"/quote"})}}]);
//# sourceMappingURL=component---src-pages-quote-index-tsx-774a765167579289de4e.js.map