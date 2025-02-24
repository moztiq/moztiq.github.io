"use strict";(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[779],{199:function(e,t,n){n.d(t,{A:function(){return v}});var o=n(6540),i=n(7581),a=n(3300),l=n.n(a),r=n(5404),s=n(4794),d=n(7294),c=n(8732);const p=(0,i.default)(c.P.li).withConfig({displayName:"PostCard__Post",componentId:"sc-15ontas-0"})(["padding:3rem;margin-top:40px;background-color:",";box-shadow:0 0 0 1px rgba(23,23,23,0.05);border-radius:0.3rem;transition:all 0.2s;@media screen and (max-width:430px){padding:1.5rem;}&:hover{box-shadow:0 1px 5px 0 rgba(0,0,0,0.15);}"],(e=>e.theme.colors.white)),m=i.default.h1.withConfig({displayName:"PostCard__Title",componentId:"sc-15ontas-1"})(["margin-bottom:20px;font-size:1.5rem;font-weight:600;color:#484848;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:5px 0;@media screen and (max-width:768px){font-size:1.3rem;}@media screen and (max-width:430px){font-size:1.1rem;}"]),u=i.default.div.withConfig({displayName:"PostCard__PublishDateLine",componentId:"sc-15ontas-2"})(["height:15px;border-bottom:1px solid gainsboro;position:relative;display:flex;justify-content:center;"]),f=i.default.div.withConfig({displayName:"PostCard__PublishDate",componentId:"sc-15ontas-3"})(["font-size:0.8rem;font-weight:bold;letter-spacing:1.5px;width:150px;height:30px;color:",";background-color:",";position:absolute;display:flex;justify-content:center;align-items:center;"],(e=>e.theme.colors.accentColor),(e=>e.theme.colors.white)),g=i.default.div.withConfig({displayName:"PostCard__ContentWrapper",componentId:"sc-15ontas-4"})(["display:flex;align-items:center;margin-top:50px;"]),x=i.default.div.withConfig({displayName:"PostCard__HeaderImage",componentId:"sc-15ontas-5"})(["width:225px;min-width:225px;margin-right:20px;height:180px;background-image:url(",");background-size:cover;border-radius:8px;border:1px solid ",";@media screen and (max-width:1024px){width:125px;min-width:125px;margin-right:10px;}"],(e=>e.url),(e=>e.theme.colors.gray200)),h=i.default.div.withConfig({displayName:"PostCard__ContentTextWrapper",componentId:"sc-15ontas-6"})(["display:flex;flex-direction:column;"]),w=i.default.p.withConfig({displayName:"PostCard__ContentText",componentId:"sc-15ontas-7"})(["font-size:0.95rem;color:#484848;line-height:1.7;text-decoration:none;overflow:hidden;text-overflow:ellipsis;width:100%;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;text-align:justify;overflow-wrap:anywhere;"]),C=i.default.ul.withConfig({displayName:"PostCard__TagList",componentId:"sc-15ontas-8"})(["margin-top:10px;display:flex;flex-wrap:wrap;row-gap:3px;"]),y=i.default.li.withConfig({displayName:"PostCard__Tag",componentId:"sc-15ontas-9"})(["padding:5px 10px;margin-right:10px;font-size:0.9rem;border-radius:5px;color:",";background-color:",";@media screen and (max-width:768px){font-size:0.7rem;margin-right:5px;}"],(e=>e.theme.colors.gray600),(e=>e.theme.colors.gray100));function _(e){var t,n;let{post:i}=e;return o.createElement(s.Link,{to:`/post/${i.slug}`},o.createElement(p,Object.assign({},d.d6,d.yP),o.createElement(m,null,i.title),o.createElement(u,null,o.createElement(f,null,o.createElement(l(),{format:"MMM D, YYYY"},i.releaseDate))),o.createElement(g,null,(null===(t=i.headerImage)||void 0===t?void 0:t.url)&&o.createElement(x,{url:(null===(n=i.headerImage)||void 0===n?void 0:n.url)||""}),o.createElement(h,null,o.createElement(w,null,(0,r.X)(i.contents.childMarkdownRemark.html)),o.createElement(C,null,i.tag.map(((e,t)=>o.createElement(y,{key:t},"#",e))))))))}const b=i.default.div.withConfig({displayName:"PostList__PostListContainer",componentId:"sc-1ru19fs-0"})(["display:flex;justify-content:center;"]),E=i.default.ul.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1ru19fs-1"})(["width:75%;a{text-decoration:none;}padding-bottom:50px;@media screen and (max-width:768px){width:95%;}"]);function v(e){let{posts:t}=e;return o.createElement(b,null,o.createElement(E,null,t&&t.map((e=>o.createElement(_,{key:e.slug,post:e})))))}},2777:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return p}});var o=n(6540),i=n(5037),a=n(199),l=n(8693),r=n(8818),s=n(2581),d=n(4009),c=n(982);function p(e){let{data:t}=e;const n=t.allContentfulMoztiqBlog.nodes;return o.createElement(i.A,null,o.createElement(l.A,{title:(0,s._x)(s.b7.BOOK)},o.createElement(d.A,{icon:o.createElement(c.g,{icon:(0,s.DN)(s.b7.BOOK)}),title:`<span>BOOK</span> ${(0,s._x)(s.b7.BOOK)}`,description:(0,s.ke)(s.b7.BOOK)}),o.createElement(a.A,{posts:n})))}const m=()=>o.createElement(r.A,{title:(0,s._x)(s.b7.BOOK),description:(0,s.ke)(s.b7.BOOK),url:"/book"})},4009:function(e,t,n){n.d(t,{A:function(){return p}});var o=n(6540),i=n(7581);const a=i.default.div.withConfig({displayName:"ContentExplain__TopBackground",componentId:"sc-a5welc-0"})(["display:flex;justify-content:center;height:200px;background-color:",";background-size:cover;@media screen and (max-width:1024px){margin-top:60px;}"],(e=>e.theme.colors.gray200)),l=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainWrapper",componentId:"sc-a5welc-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;position:relative;"]),r=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainTitleWrapper",componentId:"sc-a5welc-2"})(["display:flex;align-items:center;position:relative;"]),s=i.default.div.withConfig({displayName:"ContentExplain__IconWrapper",componentId:"sc-a5welc-3"})(["position:absolute;top:0;left:-40px;font-size:1.3rem;color:",";"],(e=>e.theme.colors.accentColor)),d=i.default.span.withConfig({displayName:"ContentExplain__ContentExplainTitle",componentId:"sc-a5welc-4"})(["font-size:1.3rem;color:",";letter-spacing:1px;span{color:",";font-weight:bold;font-size:2.5rem;}span.accent{margin:0 20px;color:",";font-size:28px;}@media screen and (max-width:430px){font-size:1.1rem;span{font-size:1.8rem;}}"],(e=>e.theme.colors.gray500),(e=>e.theme.colors.gray800),(e=>e.theme.colors.accentColor)),c=i.default.div.withConfig({displayName:"ContentExplain__ContentExplainDescription",componentId:"sc-a5welc-5"})(["margin-top:20px;font-size:1rem;color:",";line-height:1.5;"],(e=>e.theme.colors.gray500));function p(e){return o.createElement(a,null,o.createElement(l,null,o.createElement(r,null,o.createElement(s,null,e.icon),o.createElement(d,{dangerouslySetInnerHTML:{__html:e.title}})),o.createElement(c,null,e.description)))}}}]);
//# sourceMappingURL=component---src-pages-book-index-tsx-d01951675d7448b7abad.js.map