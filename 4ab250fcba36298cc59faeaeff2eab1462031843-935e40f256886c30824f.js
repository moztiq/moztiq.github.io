/*! For license information please see 4ab250fcba36298cc59faeaeff2eab1462031843-935e40f256886c30824f.js.LICENSE.txt */
(self.webpackChunkmoztiq_github_io=self.webpackChunkmoztiq_github_io||[]).push([[162],{8502:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(394);const i=o.default.div.withConfig({displayName:"PostDetailTop__Title",componentId:"sc-1gdliq4-0"})(["width:100%;height:70px;min-height:70px;color:",";background-color:",";font-size:1.5rem;font-weight:bold;letter-spacing:5px;display:flex;justify-content:flex-end;align-items:center;padding-right:35px;"],(e=>e.theme.colors.light),(e=>e.theme.colors.primary));function a(e){let{children:t}=e;return r.createElement(i,null,t)}const l=o.default.div.withConfig({displayName:"ContentContainer__Content",componentId:"sc-a8p2hq-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;background-color:",";overflow-y:scroll;overflow-x:hidden;"],(e=>e.theme.colors.background)),u=o.default.div.withConfig({displayName:"ContentContainer__PostDetailBottom",componentId:"sc-a8p2hq-1"})(["width:100%;height:50px;min-height:50px;"]);function s(e){let{title:t,children:n}=e;return r.createElement(l,null,r.createElement(a,null,t),n,r.createElement(u,null))}},4803:function(e,t,n){var r,o;e.exports=(r=n(381),o=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(3)()},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r,o,i,a,l;a=this,l=function(e){var t=!1,n=!1,r=!1,o=!1,i="escape years months weeks days hours minutes seconds milliseconds general".split(" "),a=[{type:"seconds",targets:[{type:"minutes",value:60},{type:"hours",value:3600},{type:"days",value:86400},{type:"weeks",value:604800},{type:"months",value:2678400},{type:"years",value:31536e3}]},{type:"minutes",targets:[{type:"hours",value:60},{type:"days",value:1440},{type:"weeks",value:10080},{type:"months",value:44640},{type:"years",value:525600}]},{type:"hours",targets:[{type:"days",value:24},{type:"weeks",value:168},{type:"months",value:744},{type:"years",value:8760}]},{type:"days",targets:[{type:"weeks",value:7},{type:"months",value:31},{type:"years",value:365}]},{type:"months",targets:[{type:"years",value:12}]}];function l(e,t){return!(t.length>e.length)&&-1!==e.indexOf(t)}function u(e){for(var t="";e;)t+="0",e-=1;return t}function s(e,t){var n=e+"+"+v(D(t).sort(),(function(e){return e+":"+t[e]})).join(",");return s.cache[n]||(s.cache[n]=Intl.NumberFormat(e,t)),s.cache[n]}function c(e,t,i){var a,l,f,m=t.useToLocaleString,p=t.useGrouping,g=p&&t.grouping.slice(),h=t.maximumSignificantDigits,d=t.minimumIntegerDigits||1,y=t.fractionDigits||0,v=t.groupingSeparator,b=t.decimalSeparator;if(m&&i){var w,S={minimumIntegerDigits:d,useGrouping:p};return y&&(S.maximumFractionDigits=y,S.minimumFractionDigits=y),h&&e>0&&(S.maximumSignificantDigits=h),r?(o||((w=O({},t)).useGrouping=!1,w.decimalSeparator=".",e=parseFloat(c(e,w),10)),s(i,S).format(e)):(n||((w=O({},t)).useGrouping=!1,w.decimalSeparator=".",e=parseFloat(c(e,w),10)),e.toLocaleString(i,S))}var _=(h?e.toPrecision(h+1):e.toFixed(y+1)).split("e");f=_[1]||"",l=(_=_[0].split("."))[1]||"";var x=(a=_[0]||"").length,T=l.length,D=x+T,V=a+l;(h&&D===h+1||!h&&T===y+1)&&((V=function(e){for(var t=e.split("").reverse(),n=0,r=!0;r&&n<t.length;)n?"9"===t[n]?t[n]="0":(t[n]=(parseInt(t[n],10)+1).toString(),r=!1):(parseInt(t[n],10)<5&&(r=!1),t[n]="0"),n+=1;return r&&t.push("1"),t.reverse().join("")}(V)).length===D+1&&(x+=1),T&&(V=V.slice(0,-1)),a=V.slice(0,x),l=V.slice(x)),h&&(l=l.replace(/0*$/,""));var j=parseInt(f,10);j>0?l.length<=j?(a+=l+=u(j-l.length),l=""):(a+=l.slice(0,j),l=l.slice(j)):j<0&&(l=u(Math.abs(j)-a.length)+a+l,a="0"),h||((l=l.slice(0,y)).length<y&&(l+=u(y-l.length)),a.length<d&&(a=u(d-a.length)+a));var k,P="";if(p)for(_=a;_.length;)g.length&&(k=g.shift()),P&&(P=v+P),P=_.slice(-k)+P,_=_.slice(0,-k);else P=a;return l&&(P=P+b+l),P}function f(e,t){return e.label.length>t.label.length?-1:e.label.length<t.label.length?1:0}function m(e,t){var n=[];return y(D(t),(function(r){if("_durationLabels"===r.slice(0,15)){var o=r.slice(15).toLowerCase();y(D(t[r]),(function(i){i.slice(0,1)===e&&n.push({type:o,key:i,label:t[r][i]})}))}})),n}s.cache={};var p={durationLabelsStandard:{S:"millisecond",SS:"milliseconds",s:"second",ss:"seconds",m:"minute",mm:"minutes",h:"hour",hh:"hours",d:"day",dd:"days",w:"week",ww:"weeks",M:"month",MM:"months",y:"year",yy:"years"},durationLabelsShort:{S:"msec",SS:"msecs",s:"sec",ss:"secs",m:"min",mm:"mins",h:"hr",hh:"hrs",d:"dy",dd:"dys",w:"wk",ww:"wks",M:"mo",MM:"mos",y:"yr",yy:"yrs"},durationTimeTemplates:{HMS:"h:mm:ss",HM:"h:mm",MS:"m:ss"},durationLabelTypes:[{type:"standard",string:"__"},{type:"short",string:"_"}],durationPluralKey:function(e,t,n){return 1===t&&null===n?e:e+e}};function g(e){return"[object Array]"===Object.prototype.toString.call(e)}function h(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(e,t){var n,r=0,o=e&&e.length||0;for("function"!=typeof t&&(n=t,t=function(e){return e===n});r<o;){if(t(e[r]))return e[r];r+=1}}function y(e,t){var n=0,r=e.length;if(e&&r)for(;n<r;){if(!1===t(e[n],n))return;n+=1}}function v(e,t){var n=0,r=e.length,o=[];if(!e||!r)return o;for(;n<r;)o[n]=t(e[n],n),n+=1;return o}function b(e,t){return v(e,(function(e){return e[t]}))}function w(e){var t=[];return y(e,(function(e){e&&t.push(e)})),t}function S(e){var t=[];return y(e,(function(e){d(t,e)||t.push(e)})),t}function _(e,t){var n=[];return y(e,(function(e){y(t,(function(t){e===t&&n.push(e)}))})),S(n)}function x(e,t){var n=[];return y(e,(function(r,o){if(!t(r))return n=e.slice(o),!1})),n}function T(e,t){return x(e.slice().reverse(),t).reverse()}function O(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function D(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function V(e,t){var n=0,r=e.length;if(!e||!r)return!1;for(;n<r;){if(!0===t(e[n],n))return!0;n+=1}return!1}function j(e){var t=[];return y(e,(function(e){t=t.concat(e)})),t}function k(e){return"3.6"===e(3.55,"en",{useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1})}function P(e){var t=!0;return!!((t=(t=(t=t&&"1"===e(1,"en",{minimumIntegerDigits:1}))&&"01"===e(1,"en",{minimumIntegerDigits:2}))&&"001"===e(1,"en",{minimumIntegerDigits:3}))&&(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumFractionDigits:0,minimumFractionDigits:0}))&&"100.0"===e(99.99,"en",{maximumFractionDigits:1,minimumFractionDigits:1}))&&"99.99"===e(99.99,"en",{maximumFractionDigits:2,minimumFractionDigits:2}))&&"99.990"===e(99.99,"en",{maximumFractionDigits:3,minimumFractionDigits:3}))&&(t=(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumSignificantDigits:1}))&&"100"===e(99.99,"en",{maximumSignificantDigits:2}))&&"100"===e(99.99,"en",{maximumSignificantDigits:3}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:4}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:5}))&&(t=(t=t&&"1,000"===e(1e3,"en",{useGrouping:!0}))&&"1000"===e(1e3,"en",{useGrouping:!1})))}function M(){var e,t=[].slice.call(arguments),n={};if(y(t,(function(t,r){if(!r){if(!g(t))throw"Expected array as the first argument to durationsFormat.";e=t}"string"!=typeof t&&"function"!=typeof t?"number"!=typeof t?h(t)&&O(n,t):n.precision=t:n.template=t})),!e||!e.length)return[];n.returnMomentTypes=!0;var r=v(e,(function(e){return e.format(n)})),o=_(i,S(b(j(r),"type"))),a=n.largest;return a&&(o=o.slice(0,a)),n.returnMomentTypes=!1,n.outputTypes=o,v(e,(function(e){return e.format(n)}))}function E(){var n=[].slice.call(arguments),o=O({},this.format.defaults),u=this.asMilliseconds(),s=this.asMonths();"function"==typeof this.isValid&&!1===this.isValid()&&(u=0,s=0);var j=u<0,k=e.duration(Math.abs(u),"milliseconds"),P=e.duration(Math.abs(s),"months");y(n,(function(e){"string"!=typeof e&&"function"!=typeof e?"number"!=typeof e?h(e)&&O(o,e):o.precision=e:o.template=e}));var M={years:"y",months:"M",weeks:"w",days:"d",hours:"h",minutes:"m",seconds:"s",milliseconds:"S"},E={escape:/\[(.+?)\]/,years:/\*?[Yy]+/,months:/\*?M+/,weeks:/\*?[Ww]+/,days:/\*?[Dd]+/,hours:/\*?[Hh]+/,minutes:/\*?m+/,seconds:/\*?s+/,milliseconds:/\*?S+/,general:/.+?/};o.types=i;var L=function(e){return d(i,(function(t){return E[t].test(e)}))},F=new RegExp(v(i,(function(e){return E[e].source})).join("|"),"g");o.duration=this;var I="function"==typeof o.template?o.template.apply(o):o.template,C=o.outputTypes,N=o.returnMomentTypes,R=o.largest,G=[];C||(g(o.stopTrim)&&(o.stopTrim=o.stopTrim.join("")),o.stopTrim&&y(o.stopTrim.match(F),(function(e){var t=L(e);"escape"!==t&&"general"!==t&&G.push(t)})));var z=e.localeData();z||(z={}),y(D(p),(function(e){"function"!=typeof p[e]?z["_"+e]||(z["_"+e]=p[e]):z[e]||(z[e]=p[e])})),y(D(z._durationTimeTemplates),(function(e){I=I.replace("_"+e+"_",z._durationTimeTemplates[e])}));var q=o.userLocale||e.locale(),U=o.useLeftUnits,H=o.usePlural,W=o.precision,B=o.forceLength,$=o.useGrouping,A=o.trunc,K=o.useSignificantDigits&&W>0,Y=K?o.precision:0,Z=Y,J=o.minValue,Q=!1,X=o.maxValue,ee=!1,te=o.useToLocaleString,ne=o.groupingSeparator,re=o.decimalSeparator,oe=o.grouping;te=te&&(t||r);var ie=o.trim;g(ie)&&(ie=ie.join(" ")),null===ie&&(R||X||K)&&(ie="all"),null!==ie&&!0!==ie&&"left"!==ie&&"right"!==ie||(ie="large"),!1===ie&&(ie="");var ae=function(e){return e.test(ie)},le=/small/,ue=/both/,se=/mid/,ce=/^all|[^sm]all/,fe=/final/,me=R>0||V([/large/,ue,ce],ae),pe=V([le,ue,ce],ae),ge=V([se,ce],ae),he=V([fe,ce],ae),de=v(I.match(F),(function(e,t){var n=L(e);return"*"===e.slice(0,1)&&(e=e.slice(1),"escape"!==n&&"general"!==n&&G.push(n)),{index:t,length:e.length,text:"",token:"escape"===n?e.replace(E.escape,"$1"):e,type:"escape"===n||"general"===n?null:n}})),ye={index:0,length:0,token:"",text:"",type:null},ve=[];U&&de.reverse(),y(de,(function(e){if(e.type)return(ye.type||ye.text)&&ve.push(ye),void(ye=e);U?ye.text=e.token+ye.text:ye.text+=e.token})),(ye.type||ye.text)&&ve.push(ye),U&&ve.reverse();var be=_(i,S(w(b(ve,"type"))));if(!be.length)return b(ve,"text").join("");be=v(be,(function(e,t){var n,r=t+1===be.length,i=!t;n="years"===e||"months"===e?P.as(e):k.as(e);var a=Math.floor(n),l=n-a,u=d(ve,(function(t){return e===t.type}));return i&&X&&n>X&&(ee=!0),r&&J&&Math.abs(o.duration.as(e))<J&&(Q=!0),i&&null===B&&u.length>1&&(B=!0),k.subtract(a,e),P.subtract(a,e),{rawValue:n,wholeValue:a,decimalValue:r?l:0,isSmallest:r,isLargest:i,type:e,tokenLength:u.length}}));var we=A?Math.floor:Math.round,Se=function(e,t){var n=Math.pow(10,t);return we(e*n)/n},_e=!1,xe=!1,Te=function(e,t){var n={useGrouping:$,groupingSeparator:ne,decimalSeparator:re,grouping:oe,useToLocaleString:te};return K&&(Y<=0?(e.rawValue=0,e.wholeValue=0,e.decimalValue=0):(n.maximumSignificantDigits=Y,e.significantDigits=Y)),ee&&!xe&&(e.isLargest?(e.wholeValue=X,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),Q&&!xe&&(e.isSmallest?(e.wholeValue=J,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),e.isSmallest||e.significantDigits&&e.significantDigits-e.wholeValue.toString().length<=0?W<0?e.value=Se(e.wholeValue,W):0===W?e.value=we(e.wholeValue+e.decimalValue):K?(e.value=A?Se(e.rawValue,Y-e.wholeValue.toString().length):e.rawValue,e.wholeValue&&(Y-=e.wholeValue.toString().length)):(n.fractionDigits=W,e.value=A?e.wholeValue+Se(e.decimalValue,W):e.wholeValue+e.decimalValue):K&&e.wholeValue?(e.value=Math.round(Se(e.wholeValue,e.significantDigits-e.wholeValue.toString().length)),Y-=e.wholeValue.toString().length):e.value=e.wholeValue,e.tokenLength>1&&(B||_e)&&(n.minimumIntegerDigits=e.tokenLength,xe&&n.maximumSignificantDigits<e.tokenLength&&delete n.maximumSignificantDigits),!_e&&(e.value>0||""===ie||d(G,e.type)||d(C,e.type))&&(_e=!0),e.formattedValue=c(e.value,n,q),n.useGrouping=!1,n.decimalSeparator=".",e.formattedValueEn=c(e.value,n,"en"),2===e.tokenLength&&"milliseconds"===e.type&&(e.formattedValueMS=c(e.value,{minimumIntegerDigits:3,useGrouping:!1},"en").slice(0,2)),e};if((be=w(be=v(be,Te))).length>1){var Oe=function(e){return d(be,(function(t){return t.type===e}))},De=function(e){var t=Oe(e.type);t&&y(e.targets,(function(e){var n=Oe(e.type);n&&parseInt(t.formattedValueEn,10)===e.value&&(t.rawValue=0,t.wholeValue=0,t.decimalValue=0,n.rawValue+=1,n.wholeValue+=1,n.decimalValue=0,n.formattedValueEn=n.wholeValue.toString(),xe=!0)}))};y(a,De)}return xe&&(_e=!1,Y=Z,be=w(be=v(be,Te))),!C||ee&&!o.trim?(me&&(be=x(be,(function(e){return!e.isSmallest&&!e.wholeValue&&!d(G,e.type)}))),R&&be.length&&(be=be.slice(0,R)),pe&&be.length>1&&(be=T(be,(function(e){return!e.wholeValue&&!d(G,e.type)&&!e.isLargest}))),ge&&(be=w(be=v(be,(function(e,t){return t>0&&t<be.length-1&&!e.wholeValue?null:e})))),!he||1!==be.length||be[0].wholeValue||!A&&be[0].isSmallest&&be[0].rawValue<J||(be=[])):be=w(be=v(be,(function(e){return d(C,(function(t){return e.type===t}))?e:null}))),N?be:(y(ve,(function(e){var t=M[e.type],n=d(be,(function(t){return t.type===e.type}));if(t&&n){var r=n.formattedValueEn.split(".");r[0]=parseInt(r[0],10),r[1]?r[1]=parseFloat("0."+r[1],10):r[1]=null;var o=z.durationPluralKey(t,r[0],r[1]),i=m(t,z),a=!1,u={};y(z._durationLabelTypes,(function(t){var n=d(i,(function(e){return e.type===t.type&&e.key===o}));n&&(u[n.type]=n.label,l(e.text,t.string)&&(e.text=e.text.replace(t.string,n.label),a=!0))})),H&&!a&&(i.sort(f),y(i,(function(t){return u[t.type]===t.label?!l(e.text,t.label)&&void 0:l(e.text,t.label)?(e.text=e.text.replace(t.label,u[t.type]),!1):void 0})))}})),(ve=v(ve,(function(e){if(!e.type)return e.text;var t=d(be,(function(t){return t.type===e.type}));if(!t)return"";var n="";return U&&(n+=e.text),(j&&ee||!j&&Q)&&(n+="< ",ee=!1,Q=!1),(j&&Q||!j&&ee)&&(n+="> ",ee=!1,Q=!1),j&&(t.value>0||""===ie||d(G,t.type)||d(C,t.type))&&(n+="-",j=!1),"milliseconds"===e.type&&t.formattedValueMS?n+=t.formattedValueMS:n+=t.formattedValue,U||(n+=e.text),n}))).join("").replace(/(,| |:|\.)*$/,"").replace(/^(,| |:|\.)*/,""))}function L(){var e=this.duration,t=function(t){return e._data[t]},n=d(this.types,t),r=function(e,t){for(var n=e.length;n-=1;)if(t(e[n]))return e[n]}(this.types,t);switch(n){case"milliseconds":return"S __";case"seconds":case"minutes":return"*_MS_";case"hours":return"_HMS_";case"days":if(n===r)return"d __";case"weeks":return n===r?"w __":(null===this.trim&&(this.trim="both"),"w __, d __, h __");case"months":if(n===r)return"M __";case"years":return n===r?"y __":(null===this.trim&&(this.trim="both"),"y __, M __, d __");default:return null===this.trim&&(this.trim="both"),"y __, d __, h __, m __, s __"}}function F(e){if(!e)throw"Moment Duration Format init cannot find moment instance.";e.duration.format=M,e.duration.fn.format=E,e.duration.fn.format.defaults={trim:null,stopTrim:null,largest:null,maxValue:null,minValue:null,precision:0,trunc:!1,forceLength:null,userLocale:null,usePlural:!0,useLeftUnits:!1,useGrouping:!0,useSignificantDigits:!1,template:L,useToLocaleString:!0,groupingSeparator:",",decimalSeparator:".",grouping:[3]},e.updateLocale("en",p)}var I=function(e,t,n){return e.toLocaleString(t,n)};t=function(){try{(0).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()&&P(I),n=t&&k(I);var C=function(e,t,n){if("undefined"!=typeof window&&window&&window.Intl&&window.Intl.NumberFormat)return window.Intl.NumberFormat(t,n).format(e)};return r=P(C),o=r&&k(C),F(e),F},o=[n(1)],void 0===(i="function"==typeof(r=l)?r.apply(t,o):r)||(e.exports=i),a&&(a.momentDurationFormatSetup=a.moment?l(a.moment):l)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n(2),o=n.n(r),i=n(0),a=n.n(i),l=n(1),u=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(5);var w=[a.a.string,a.a.number,a.a.array,a.a.object],S=[a.a.string,a.a.array],_=[a.a.object,a.a.bool],x=[a.a.string,a.a.bool],T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(n,e);var t=h(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),b(y(r=t.call(this,e)),"setTimer",(function(){var e=r.props.interval;r.clearTimer(),n.pooledTimer||0===e||(r.timer=setInterval((function(){r.update(r.props)}),e))})),b(y(r),"getTitle",(function(){var e=r.props.titleFormat,t=n.getDatetime(r.props),o=e||n.globalFormat;return t.format(o)})),b(y(r),"clearTimer",(function(){!n.pooledTimer&&r.timer&&(clearInterval(r.timer),r.timer=null),n.pooledTimer&&!r.timer&&n.removePooledElement(y(r))})),n.globalMoment||(n.globalMoment=u.a),r.state={content:""},r.timer=null,r}return p(n,null,[{key:"startPooledTimer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4;n.clearPooledTimer(),n.pooledTimer=setInterval((function(){n.pooledElements.forEach((function(e){0!==e.props.interval&&e.update()}))}),e)}},{key:"clearPooledTimer",value:function(){n.pooledTimer&&(clearInterval(n.pooledTimer),n.pooledTimer=null,n.pooledElements=[])}},{key:"pushPooledElement",value:function(e){e instanceof n?-1===n.pooledElements.indexOf(e)&&n.pooledElements.push(e):console.error("Element not an instance of Moment.")}},{key:"removePooledElement",value:function(e){var t=n.pooledElements.indexOf(e);-1!==t&&n.pooledElements.splice(t,1)}},{key:"getDatetime",value:function(e){var t=e.utc,r=e.unix,o=e.date,i=e.locale,a=e.parse,l=e.tz,u=e.local;o=o||e.children,a=a||n.globalParse,u=u||n.globalLocal,l=l||n.globalTimezone,i=n.globalLocale?n.globalLocale:i||n.globalMoment.locale();var s=null;return s=t?n.globalMoment.utc(o,a,i):r?n.globalMoment(1e3*o,a,i):n.globalMoment(o,a,i),l?s=s.tz(l):u&&(s=s.local()),s}},{key:"getContent",value:function(e){var t=e.fromNow,r=e.fromNowDuring,o=e.from,i=e.add,a=e.subtract,l=e.toNow,s=e.to,c=e.ago,f=e.calendar,m=e.diff,p=e.duration,g=e.durationFromNow,h=e.unit,d=e.decimal,y=e.trim,v=e.format;v=v||n.globalFormat;var b=n.getDatetime(e);i&&b.add(i),a&&b.subtract(a);var w=Boolean(r)&&-b.diff(u()())<r,S="";return S=!v||w||g||p?o?b.from(o,c):t||w?b.fromNow(c):s?b.to(s,c):l?b.toNow(c):f?b.calendar(null,f):m?b.diff(m,h,d):p?b.diff(p):g?u()().diff(b):b.toString():b.format(v),(p||g)&&(S=(S=u.a.duration(S)).format(v,{trim:y})),(n.globalFilter||e.filter)(S)}}]),p(n,[{key:"componentDidMount",value:function(){this.setTimer(),n.pooledTimer&&n.pushPooledElement(this)}},{key:"componentDidUpdate",value:function(e){var t=this.props.interval;e.interval!==t&&this.setTimer()}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"update",value:function(e){var t=e||this.props,r=t.onChange,o=n.getContent(t);this.setState({content:o},(function(){r(o)}))}},{key:"render",value:function(){var e,t,r,i,a=this.props,l=a.withTitle,u=a.element,s=f(a,["withTitle","element"]),m=this.state.content,p=(e=s,t=n.propTypes,r=Object.keys(t),i=Object.assign({},e),Object.keys(i).filter((function(e){return-1!==r.indexOf(e)})).forEach((function(e){return delete i[e]})),i);return l&&(p.title=this.getTitle()),o.a.createElement(u||n.globalElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({dateTime:n.getDatetime(this.props)},p),m)}}],[{key:"getDerivedStateFromProps",value:function(e){return{content:n.getContent(e)}}}]),n}(o.a.Component);b(T,"propTypes",{element:a.a.any,date:a.a.oneOfType(w),parse:a.a.oneOfType(S),format:a.a.string,add:a.a.object,subtract:a.a.object,ago:a.a.bool,fromNow:a.a.bool,fromNowDuring:a.a.number,from:a.a.oneOfType(w),toNow:a.a.bool,to:a.a.oneOfType(w),calendar:a.a.oneOfType(_),unix:a.a.bool,utc:a.a.bool,local:a.a.bool,tz:a.a.string,withTitle:a.a.bool,titleFormat:a.a.string,locale:a.a.string,interval:a.a.number,diff:a.a.oneOfType(w),duration:a.a.oneOfType(w),durationFromNow:a.a.bool,trim:a.a.oneOfType(x),unit:a.a.string,decimal:a.a.bool,filter:a.a.func,onChange:a.a.func}),b(T,"defaultProps",{element:null,fromNow:!1,toNow:!1,calendar:!1,ago:!1,unix:!1,utc:!1,local:!1,unit:null,withTitle:!1,trim:!1,decimal:!1,titleFormat:"",interval:6e4,filter:function(e){return e},onChange:function(){}}),b(T,"globalMoment",null),b(T,"globalLocale",null),b(T,"globalLocal",null),b(T,"globalFormat",null),b(T,"globalParse",null),b(T,"globalFilter",null),b(T,"globalElement","time"),b(T,"globalTimezone",null),b(T,"pooledElements",[]),b(T,"pooledTimer",null)}]))}}]);
//# sourceMappingURL=4ab250fcba36298cc59faeaeff2eab1462031843-935e40f256886c30824f.js.map