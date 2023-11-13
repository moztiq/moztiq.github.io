"use strict";(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[110],{2924:function(e,t,n){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var E=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));r(E);E.BLOCKS;var l=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));r(l);l.INLINES;var L=i((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));r(L);var a=i((function(e,t){var n,r=o&&o.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},i=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=i(L);t.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE,E.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],n[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],n[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],n),t.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([E.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,l.INLINES.HYPERLINK,l.INLINES.ENTRY_HYPERLINK,l.INLINES.ASSET_HYPERLINK,l.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[a.default.BOLD,a.default.CODE,a.default.ITALIC,a.default.UNDERLINE]}));r(a);a.V1_MARKS,a.V1_NODE_TYPES,a.TEXT_CONTAINERS,a.HEADINGS,a.CONTAINERS,a.VOID_BLOCKS,a.TABLE_BLOCKS,a.LIST_ITEM_BLOCKS,a.TOP_LEVEL_BLOCKS;var _=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));r(_);var S=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));r(S);var u=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));r(u);var O=i((function(e,t){function n(e,t){for(var n=0,o=Object.keys(e);n<o.length;n++){if(t===e[o[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(l.INLINES,e.nodeType)},t.isBlock=function(e){return n(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));r(O);O.isText,O.isBlock,O.isInline;var d=i((function(e,t){var n=o&&o.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=o&&o.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=o&&o.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},d=o&&o.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},c=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return E.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return l.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(L).default}}),i(a,t),i(_,t),i(S,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(u).default}});var B=d(O);t.helpers=B}));r(d);var c=d.helpers;d.EMPTY_DOCUMENT,d.MARKS,d.INLINES,d.BLOCKS;t.a=function e(t,n){return void 0===n&&(n=" "),t&&t.content?t.content.reduce((function(o,r,i){var E;if(c.isText(r))E=r.value;else if((c.isBlock(r)||c.isInline(r))&&!(E=e(r,n)).length)return o;var l=t.content[i+1];return o+E+(l&&c.isBlock(l)?n:"")}),""):""}},5819:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(7294),r=n(394),i=n(2924),E=n(4803),l=n.n(E),L=n(4160);const a=r.default.ul.withConfig({displayName:"PostList__BlogWrapper",componentId:"sc-1kvk4fr-0"})(["width:90%;overflow-y:auto;display:flex;justify-content:center;a{text-decoration:none;}"]),_=r.default.li.withConfig({displayName:"PostList__Post",componentId:"sc-1kvk4fr-1"})(["padding:30px;margin-top:40px;"]),S=r.default.h1.withConfig({displayName:"PostList__Title",componentId:"sc-1kvk4fr-2"})(["padding:25px 0;font-size:36px;font-weight:600;color:#484848;display:flex;justify-content:center;align-items:center;"]),u=r.default.div.withConfig({displayName:"PostList__PublishDateLine",componentId:"sc-1kvk4fr-3"})(["height:15px;border-bottom:1px solid gainsboro;position:relative;display:flex;justify-content:center;"]),O=r.default.div.withConfig({displayName:"PostList__PublishDate",componentId:"sc-1kvk4fr-4"})(["font-size:14px;font-weight:bold;width:150px;height:30px;color:tomato;background-color:antiquewhite;position:absolute;display:flex;justify-content:center;align-items:center;"]),d=r.default.div.withConfig({displayName:"PostList__ContentWrapper",componentId:"sc-1kvk4fr-5"})(["display:flex;margin-top:40px;"]),c=r.default.div.withConfig({displayName:"PostList__HeaderImage",componentId:"sc-1kvk4fr-6"})(["width:200px;min-width:200px;margin-right:20px;height:200px;background-image:url(",");background-size:cover;border-radius:10px;"],(e=>e.url)),B=r.default.p.withConfig({displayName:"PostList__ContentText",componentId:"sc-1kvk4fr-7"})(["font-size:17px;color:#484848;line-height:1.5;text-decoration:none;overflow:hidden;text-overflow:ellipsis;width:100%;display:-webkit-box;-webkit-line-clamp:8;-webkit-box-orient:vertical;text-align:justify;"]);function C(e){let{posts:t}=e;return o.createElement(a,null,t&&t.map(((e,t)=>o.createElement(L.rU,{to:`/post/${e.slug}`},o.createElement(_,{key:t},o.createElement(S,null,e.title),o.createElement(u,null,o.createElement(O,null,o.createElement(l(),{format:"MMM D, YYYY"},e.releaseDate))),o.createElement(d,null,o.createElement(c,{url:e.headerImage.url}),o.createElement(B,null,(0,i.a)(JSON.parse(e.content.raw)))))))))}},6743:function(e,t,n){n.r(t),n.d(t,{Head:function(){return a}});var o=n(7294),r=n(4160),i=n(3897),E=n(5819),l=n(5583),L=n(3904);t.default=()=>{const e=(0,r.K2)("2494864406").allContentfulMoztiqBlog.nodes;return o.createElement(i.Z,null,o.createElement(l.Z,{title:"BOOK"},o.createElement(E.Z,{posts:e})))};const a=()=>o.createElement(L.Z,{title:"Book"})}}]);
//# sourceMappingURL=component---src-pages-book-index-tsx-48e77bb16dd426f6c469.js.map