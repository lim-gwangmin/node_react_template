import{j as n,a9 as Ue,aa as $e,a as X,i as R,a2 as B,f as h,ab as We,ac as Ge,b as L,ad as ge,r as x,T as Z,c as Ae,N as Xe,ae as Ce,y as J,af as Ze,E as Oe,n as Le,B as me,v as ye,ag as Je,ah as ke,ai as Ke,u as et,aj as tt,d as Ie,g as rt,e as ve,ak as nt}from"./index-BBXadzZ0.js";import{B as M}from"./Box-D0Xa-Rvs.js";import"./Box.styled-DN2A2xhE.js";import{S as ne}from"./SectionContainer-CGhBODQp.js";import{S as ot,C as it,c as at}from"./Card.styled-BRygyNW9.js";import"./Title.styled-d_6YcK5y.js";import{H as Re}from"./Header-Ciq_Nrm5.js";import{M as Be}from"./Modal-3Qb9nTYM.js";import{A as st}from"./Alert-BufmXSUj.js";import Ne from"./NotFound-D7zb3Fab.js";import{C as lt}from"./CircularGauge-COGIBE8Y.js";function ct(){return n.jsx(Ue,{children:n.jsx($e,{visible:!0,color:"#FF881B",ariaLabel:"three-circles-loading"})})}const ut=()=>X.get("/api/game/quiz/category"),dt=t=>X.get(`/api/game/quiz/user?quizCategoryCd=${t}`),ft=t=>{const e=encodeURIComponent(JSON.stringify(t));return X.post("/api/game/quiz/grading",{answerList:e})},ht=t=>{const e=encodeURIComponent(JSON.stringify(t));return X.post("/api/log/solve/user",{solveList:e})},pt={quizCategory:async()=>{try{const t=await ut(),e=R(t),{result:r}=e.data;return r.data}catch(t){const{response:e}=t;throw console.error("quizCategory failed:",t),R(e.data),t}},quizList:async t=>{try{const e=await dt(t),r=R(e),{data:o}=r;return o.result}catch(e){const{response:r}=e;throw R(r.data),console.error("quizList failed:",e),e}},quizResults:async t=>{try{const e=await ft(t),r=R(e),{data:o}=r;return o.result}catch(e){const{response:r}=e;throw R(r.data),console.error("quizList failed:",e),e}},quizSolve:async t=>{try{const e=await ht(t),r=R(e),{data:o}=r;return o.result}catch(e){const{response:r}=e;throw R(r.data),console.error("quizList failed:",e),e}}},De=B.createContext(void 0);function gt({children:t,value:e}){return n.jsx(De.Provider,{value:e,children:t})}function k(){const t=B.useContext(De);if(t===void 0)throw new Error("QuizContext는 QuizProvider 사용하여야 합니다.");return t}function mt(){const{isCaptionModal:t,handleCaptionModal:e,thisQuizData:r}=k();B.useEffect(()=>{o()},[t]);const o=()=>{if(t){document.body.style.overflow="hidden";return}document.body.style.overflow="auto"};return n.jsx(Be,{isOpen:t,isClose:e,children:n.jsx("p",{style:{whiteSpace:"pre-wrap",color:"#2E3233",lineHeight:1.4,fontSize:"1.6rem",fontWeight:500},children:r.newsContent})})}const yt="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M45.9654%2057.8748C34.438%2063.4465%2021.3394%2056.7384%2016.1304%2045.9736C10.556%2034.4483%2017.2654%2021.3518%2028.037%2016.1461C40.4022%2010.1658%2053.6589%2018.0839%2058.5048%2029.6775C61.5633%2041.3073%2057.2177%2052.4345%2045.9654%2057.8748ZM72.3152%2025.7763C72.2564%2025.5892%2072.1857%2025.414%2072.1167%2025.2375C72.0246%2024.8092%2071.9034%2024.375%2071.7281%2023.9324C64.5077%205.69316%2044.6094%20-4.19368%2025.7646%201.70527C6.33936%207.78541%20-4.35613%2028.9599%201.68656%2048.2434C7.77204%2067.6631%2028.9461%2078.3531%2048.2371%2072.3151C67.6624%2066.2338%2078.3531%2045.0599%2072.3152%2025.7763Z'%20fill='%23FFCD1B'/%3e%3c/svg%3e",vt="data:image/svg+xml,%3csvg%20width='74'%20height='74'%20viewBox='0%200%2074%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.4243%2037.2329C54.4443%2030.5199%2061.4643%2023.807%2068.4843%2017.0947C75.3145%2010.5642%2066.2869%20-1.21118%2059.3695%205.4041C51.9905%2012.4607%2044.6104%2019.5167%2037.2315%2026.5732C30.5185%2019.5533%2023.8055%2012.5339%2017.0932%205.51336C10.5627%20-1.31678%20-1.21343%207.70889%205.4025%2014.6275C12.4591%2022.0076%2019.5158%2029.3865%2026.5718%2036.7659C19.5518%2043.4789%2012.5318%2050.1918%205.51115%2056.9048C-1.31903%2063.4352%207.70853%2075.2106%2014.626%2068.5953C22.0055%2061.5388%2029.385%2054.4822%2036.7652%2047.4256C43.4775%2054.4456%2050.1905%2061.4655%2056.9035%2068.4861C63.4328%2075.3162%2075.2089%2066.2899%2068.5942%2059.3719C61.5369%2051.9918%2054.4809%2044.6124%2047.4243%2037.2329Z'%20fill='%23FF3600'/%3e%3c/svg%3e",xt=h("input")`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  padding: 1rem;
  width: 100%;
  letter-spacing: 0.3rem;
  height: 5.8rem;
  border: 1px solid #c8c8c8;
  border-radius: 0.6rem;
  border-top: none;
  border-right: 0;
  border-left: 0;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &::placeholder {
    font-weight: 500;
  }
  &[readonly] {
    background-color: #f8f8f8;
  }
`;function wt({value:t,onInput:e,onBlur:r,maxLength:o,readOnly:i}){return n.jsx(xt,{type:"text",value:t,onInput:e,onBlur:r,maxLength:o,readOnly:i})}function bt({onClick:t}){return n.jsx(Ct,{type:"button",onClick:t,children:"자막보기"})}const Ct=h("button")`
  color: #707070;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.7rem 1rem;
  border-radius: 6rem;
  background-color: #fff3bf;
  text-align: center;
`,Pt=h("div")`
  text-align: center;
  margin-bottom: 1.5rem;
`,jt=h("div")`
position: relative;
display:inline-block;
text-align:center;
color:#fff;
background-color: #FF881B;
padding: 0.5rem 1.5rem;
border-radius: 3rem;
font-size: 1.2rem;
font-weight: 700;
 &:after {
   border-top: 6px solid #FF881B;
   border-left: 5px solid transparent;
   border-right: 5px solid transparent;
   border-bottom: 0px solid transparent;
   content: "";
   position: absolute;
   top: 100%;
   left: 50%;
   transform:translateX(-50%);
`;function St({children:t}){return n.jsx(Pt,{children:n.jsx(jt,{children:t})})}const _t="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3333%205.5L8.24996%2015.5833L3.66663%2011'%20stroke='%23C8C8C8'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Et="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3333%205.5L8.24996%2015.5833L3.66663%2011'%20stroke='%235486F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",zt=h("button")`
  display: block;
  width: 100%;
  position: relative;
  padding: 1.2rem 3rem 1.2rem 1.4rem;
  border-radius: 1rem;
  background-color: #fff;
  font-size: 1.4rem;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  color: ${({isSelected:t})=>t?"#000000":"#767676"};
  font-weight: ${({isSelected:t})=>t?700:400};
  border-color: ${({isSelected:t})=>t?"#5486F9":"#C8C8C8"};
  background-color: ${({isSelected:t,disabled:e})=>e?t?"#EFF6FF":"#E1E1E1":t?"#EFF6FF":"#fff"};
  ~ button {
    margin-top: 1rem;
  }
`,Tt=h("img")`
  position: absolute;
  right: 1.5rem;
  top: 0.8rem;
`;function Ft({answer:t,option:e,onClick:r,isSelected:o,disabled:i}){return n.jsxs(zt,{onClick:()=>r(t),isSelected:o,disabled:i,children:[e,n.jsx(Tt,{src:o?Et:_t,alt:"check"})]})}const At="/assets/hint_image-BFAR6Tu4.svg",Ot=h("button")``;function Lt(){const{thisQuizData:t,handleHintModal:e}=k();return n.jsx(n.Fragment,{children:t.hintFl==="1"&&t.hint?n.jsx(Ot,{onClick:e,children:n.jsx("img",{src:At,alt:"힌트"})}):n.jsx("div",{style:{opacity:0}})})}const kt=h("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 3.7rem;
  border-radius: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({isSelected:t,answerType:e})=>t?e?"#5486F9":"#FF0000":"#C8C8C8"};
  background-color: ${({isSelected:t,answerType:e,disabled:r})=>r?t?e?"#EFF6FF":"#FFE6E6":"#E1E1E1":t?e?"#EFF6FF":"#FFE6E6":"#fff"};
`;function Pe({answerType:t,isSelected:e,handleSelectAnswer:r,disabled:o,children:i}){return n.jsx(kt,{type:"button",answerType:t,isSelected:e,disabled:o,onClick:r,children:i})}const It=h("div")`
  display: flex;
  align-itmes: center;
  gap: 0.25rem;
  justify-content: center;
  margin: 1.5rem 2.5rem 2.5rem 2.5rem;
  font-size: 1.8rem;
  font-weight: 500;
`;function Rt({currentPage:t=0,totalPage:e=0}){return n.jsxs(It,{children:[t,"/",e]})}const Bt="/assets/quiz_timer-BwGstBUG.svg",Nt="/assets/quiz_timer_limit-BttuDorL.svg",Dt=We`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`,Mt=h("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qt=h("div")`
  width: 100%;
  height: 1.2rem;
  background: #e1e1e1;
  border-radius: 1rem;
  overflow: hidden;
`,qt=h("div")`
  height: 100%;
  width: ${({gaue:t})=>`${t}%`};
  background: ${({timer:t})=>t?"#FF3600":"#5486F9"};
  transition: width 0.5s ease-in-out;
`,Vt=h("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  gap: 2rem;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`,Yt=h("p")`
  font-size: 1.4rem;
  color: ${({timer:t})=>t?"#FF3600":"#5486F9"};
`,Ht=h("div")`
  display: flex;
  align-items: end;
  gap: 1rem;
`,Ut=h("img")`
  width: 3.6rem;
  height: 3.2rem;
  ${({isTimeCritical:t})=>t&&Ge`
      animation: ${Dt} 0.2s ease-in-out infinite;
    `}
`;function $t(){const{timeLeft:t,initialTime:e,gaugeWidth:r}=k(),o=t<=e*1/3;return n.jsxs(Mt,{children:[n.jsxs(Vt,{children:[n.jsx(L,{size:14,weight:500,children:"제한시간"}),n.jsxs(Ht,{children:[n.jsx(Ut,{src:o?Nt:Bt,alt:"타이머",isTimeCritical:o}),n.jsx(Yt,{timer:o,children:t})]})]}),n.jsx(Qt,{children:n.jsx(qt,{gaue:r,timer:o})})]})}var Me={exports:{}},Wt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gt=Wt,Xt=Gt;function Qe(){}function qe(){}qe.resetWarningCache=Qe;var Zt=function(){function t(o,i,a,u,f,d){if(d!==Xt){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:qe,resetWarningCache:Qe};return r.PropTypes=r,r};Me.exports=Zt();var Jt=Me.exports;const b=ge(Jt);var Kt=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,i,a;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(r).length)return!1;for(i=o;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=o;i--!==0;){var u=a[i];if(!t(e[u],r[u]))return!1}return!0}return e!==e&&r!==r};const er=ge(Kt);var oe={exports:{}},Ve;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/Ve=function(){var t={},e={};return t.on=function(r,o){var i={name:r,handler:o};return e[r]=e[r]||[],e[r].unshift(i),i},t.off=function(r){var o=e[r.name].indexOf(r);o!==-1&&e[r.name].splice(o,1)},t.trigger=function(r,o){var i=e[r],a;if(i)for(a=i.length;a--;)i[a].handler(o)},t};var tr=Ve,ie={exports:{}},rr=function(e,r,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async="async"in r?!!r.async:!0,a.src=e,r.attrs&&nr(a,r.attrs),r.text&&(a.text=""+r.text);var u="onload"in a?je:or;u(a,o),a.onload||je(a,o),i.appendChild(a)};function nr(t,e){for(var r in e)t.setAttribute(r,e[r])}function je(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function or(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=rr,o=i(r);function i(a){return a&&a.__esModule?a:{default:a}}e.default=function(a){var u=new Promise(function(f){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){f(window.YT);return}else{var d=window.location.protocol==="http:"?"http:":"https:";(0,o.default)(d+"//www.youtube.com/iframe_api",function(l){l&&a.trigger("error",l)})}var s=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){s&&s(),f(window.YT)}});return u},t.exports=e.default})(ie,ie.exports);var ir=ie.exports,ae={exports:{}},se={exports:{}},le={exports:{}},V=1e3,Y=V*60,H=Y*60,U=H*24,ar=U*365.25,sr=function(t,e){e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return lr(t);if(r==="number"&&isNaN(t)===!1)return e.long?ur(t):cr(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function lr(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),o=(e[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return r*ar;case"days":case"day":case"d":return r*U;case"hours":case"hour":case"hrs":case"hr":case"h":return r*H;case"minutes":case"minute":case"mins":case"min":case"m":return r*Y;case"seconds":case"second":case"secs":case"sec":case"s":return r*V;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function cr(t){return t>=U?Math.round(t/U)+"d":t>=H?Math.round(t/H)+"h":t>=Y?Math.round(t/Y)+"m":t>=V?Math.round(t/V)+"s":t+"ms"}function ur(t){return W(t,U,"day")||W(t,H,"hour")||W(t,Y,"minute")||W(t,V,"second")||t+" ms"}function W(t,e,r){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}(function(t,e){e=t.exports=i.debug=i.default=i,e.coerce=d,e.disable=u,e.enable=a,e.enabled=f,e.humanize=sr,e.names=[],e.skips=[],e.formatters={};var r;function o(s){var l=0,c;for(c in s)l=(l<<5)-l+s.charCodeAt(c),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function i(s){function l(){if(l.enabled){var c=l,g=+new Date,m=g-(r||g);c.diff=m,c.prev=r,c.curr=g,r=g;for(var p=new Array(arguments.length),C=0;C<p.length;C++)p[C]=arguments[C];p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var w=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(P,S){if(P==="%%")return P;w++;var _=e.formatters[S];if(typeof _=="function"){var A=p[w];P=_.call(c,A),p.splice(w,1),w--}return P}),e.formatArgs.call(c,p);var j=l.log||e.log||console.log.bind(console);j.apply(c,p)}}return l.namespace=s,l.enabled=e.enabled(s),l.useColors=e.useColors(),l.color=o(s),typeof e.init=="function"&&e.init(l),l}function a(s){e.save(s),e.names=[],e.skips=[];for(var l=(typeof s=="string"?s:"").split(/[\s,]+/),c=l.length,g=0;g<c;g++)l[g]&&(s=l[g].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.substr(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function u(){e.enable("")}function f(s){var l,c;for(l=0,c=e.skips.length;l<c;l++)if(e.skips[l].test(s))return!1;for(l=0,c=e.names.length;l<c;l++)if(e.names[l].test(s))return!0;return!1}function d(s){return s instanceof Error?s.stack||s.message:s}})(le,le.exports);var dr=le.exports;(function(t,e){var r={};e=t.exports=dr,e.log=a,e.formatArgs=i,e.save=u,e.load=f,e.useColors=o,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:d(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function o(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(s){try{return JSON.stringify(s)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(s){var l=this.useColors;if(s[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+s[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var c="color: "+this.color;s.splice(1,0,c,"color: inherit");var g=0,m=0;s[0].replace(/%[a-zA-Z%]/g,function(p){p!=="%%"&&(g++,p==="%c"&&(m=g))}),s.splice(m,0,c)}}function a(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(s){try{s==null?e.storage.removeItem("debug"):e.storage.debug=s}catch{}}function f(){var s;try{s=e.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s=r.DEBUG),s}e.enable(f());function d(){try{return window.localStorage}catch{}}})(se,se.exports);var fr=se.exports,ce={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(ce,ce.exports);var hr=ce.exports,ue={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(ue,ue.exports);var pr=ue.exports,de={exports:{}},fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(fe,fe.exports);var gr=fe.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=gr,o=i(r);function i(a){return a&&a.__esModule?a:{default:a}}e.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(de,de.exports);var mr=de.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=fr,o=l(r),i=hr,a=l(i),u=pr,f=l(u),d=mr,s=l(d);function l(m){return m&&m.__esModule?m:{default:m}}var c=(0,o.default)("youtube-player"),g={};g.proxyEvents=function(m){var p={},C=function(O){var z="on"+O.slice(0,1).toUpperCase()+O.slice(1);p[z]=function(v){c('event "%s"',z,v),m.trigger(O,v)}},w=!0,j=!1,P=void 0;try{for(var S=f.default[Symbol.iterator](),_;!(w=(_=S.next()).done);w=!0){var A=_.value;C(A)}}catch(I){j=!0,P=I}finally{try{!w&&S.return&&S.return()}finally{if(j)throw P}}return p},g.promisifyPlayer=function(m){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C={},w=function(z){p&&s.default[z]?C[z]=function(){for(var v=arguments.length,F=Array(v),y=0;y<v;y++)F[y]=arguments[y];return m.then(function(E){var T=s.default[z],N=E.getPlayerState(),D=E[z].apply(E,F);return T.stateChangeRequired||Array.isArray(T.acceptableStates)&&T.acceptableStates.indexOf(N)===-1?new Promise(function($){var ee=function we(){var He=E.getPlayerState(),be=void 0;typeof T.timeout=="number"&&(be=setTimeout(function(){E.removeEventListener("onStateChange",we),$()},T.timeout)),Array.isArray(T.acceptableStates)&&T.acceptableStates.indexOf(He)!==-1&&(E.removeEventListener("onStateChange",we),clearTimeout(be),$())};E.addEventListener("onStateChange",ee)}).then(function(){return D}):D})}:C[z]=function(){for(var v=arguments.length,F=Array(v),y=0;y<v;y++)F[y]=arguments[y];return m.then(function(E){return E[z].apply(E,F)})}},j=!0,P=!1,S=void 0;try{for(var _=a.default[Symbol.iterator](),A;!(j=(A=_.next()).done);j=!0){var I=A.value;w(I)}}catch(O){P=!0,S=O}finally{try{!j&&_.return&&_.return()}finally{if(P)throw S}}return C},e.default=g,t.exports=e.default})(ae,ae.exports);var yr=ae.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},o=tr,i=s(o),a=ir,u=s(a),f=yr,d=s(f);function s(c){return c&&c.__esModule?c:{default:c}}var l=void 0;e.default=function(c){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=(0,i.default)();if(l||(l=(0,u.default)(p)),g.events)throw new Error("Event handlers cannot be overwritten.");if(typeof c=="string"&&!document.getElementById(c))throw new Error('Element "'+c+'" does not exist.');g.events=d.default.proxyEvents(p);var C=new Promise(function(j){if((typeof c>"u"?"undefined":r(c))==="object"&&c.playVideo instanceof Function){var P=c;j(P)}else l.then(function(S){var _=new S.Player(c,g);return p.on("ready",function(){j(_)}),null})}),w=d.default.promisifyPlayer(C,m);return w.on=p.on,w.off=p.off,w},t.exports=e.default})(oe,oe.exports);var vr=oe.exports;const xr=ge(vr);var wr=Object.defineProperty,br=Object.defineProperties,Cr=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Pr=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,_e=(t,e,r)=>e in t?wr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,he=(t,e)=>{for(var r in e||(e={}))Pr.call(e,r)&&_e(t,r,e[r]);if(Se)for(var r of Se(e))jr.call(e,r)&&_e(t,r,e[r]);return t},pe=(t,e)=>br(t,Cr(e)),Sr=(t,e,r)=>new Promise((o,i)=>{var a=d=>{try{f(r.next(d))}catch(s){i(s)}},u=d=>{try{f(r.throw(d))}catch(s){i(s)}},f=d=>d.done?o(d.value):Promise.resolve(d.value).then(a,u);f((r=r.apply(t,e)).next())});function _r(t,e){var r,o;if(t.videoId!==e.videoId)return!0;const i=((r=t.opts)==null?void 0:r.playerVars)||{},a=((o=e.opts)==null?void 0:o.playerVars)||{};return i.start!==a.start||i.end!==a.end}function Ee(t={}){return pe(he({},t),{height:0,width:0,playerVars:pe(he({},t.playerVars),{autoplay:0,start:0,end:0})})}function Er(t,e){return t.videoId!==e.videoId||!er(Ee(t.opts),Ee(e.opts))}function zr(t,e){var r,o,i,a;return t.id!==e.id||t.className!==e.className||((r=t.opts)==null?void 0:r.width)!==((o=e.opts)==null?void 0:o.width)||((i=t.opts)==null?void 0:i.height)!==((a=e.opts)==null?void 0:a.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var Tr={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Fr={videoId:b.string,id:b.string,className:b.string,iframeClassName:b.string,style:b.object,title:b.string,loading:b.oneOf(["lazy","eager"]),opts:b.objectOf(b.any),onReady:b.func,onError:b.func,onPlay:b.func,onPause:b.func,onEnd:b.func,onStateChange:b.func,onPlaybackRateChange:b.func,onPlaybackQualityChange:b.func},G=class extends B.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var r,o;return(o=(r=this.props).onReady)==null?void 0:o.call(r,e)},this.onPlayerError=e=>{var r,o;return(o=(r=this.props).onError)==null?void 0:o.call(r,e)},this.onPlayerStateChange=e=>{var r,o,i,a,u,f,d,s;switch((o=(r=this.props).onStateChange)==null||o.call(r,e),e.data){case G.PlayerState.ENDED:(a=(i=this.props).onEnd)==null||a.call(i,e);break;case G.PlayerState.PLAYING:(f=(u=this.props).onPlay)==null||f.call(u,e);break;case G.PlayerState.PAUSED:(s=(d=this.props).onPause)==null||s.call(d,e);break}},this.onPlayerPlaybackRateChange=e=>{var r,o;return(o=(r=this.props).onPlaybackRateChange)==null?void 0:o.call(r,e)},this.onPlayerPlaybackQualityChange=e=>{var r,o;return(o=(r=this.props).onPlaybackQualityChange)==null?void 0:o.call(r,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=pe(he({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=xr(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,r,o,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let a=!1;const u={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(a=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(u.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(u.endSeconds=this.props.opts.playerVars.end)),a){(o=this.internalPlayer)==null||o.loadVideoById(u);return}(i=this.internalPlayer)==null||i.cueVideoById(u)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return Sr(this,null,function*(){zr(t,this.props)&&this.updatePlayer(),Er(t,this.props)&&(yield this.resetPlayer()),_r(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return B.createElement("div",{className:this.props.className,style:this.props.style},B.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},K=G;K.propTypes=Fr;K.defaultProps=Tr;K.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Ar=K;const Or=h("div")`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2.5rem auto 3rem;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;function xe({videoId:t,...e}){const{handleEndedYouTube:r}=k(),[o,i]=x.useState(!0),a=()=>{i(!1)};return n.jsxs(Or,{...e,children:[o&&n.jsx(ct,{}),n.jsx(Ar,{videoId:t,opts:{height:"300",width:"100%",playerVars:{autoplay:1,controls:1,showinfo:0,modestbranding:1}},onReady:a,onStateChange:r})]})}const Lr=h("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;function kr(){const{timeEnded:t,thisQuizData:e,handleChandeAnswer:r}=k(),{quiz:o,quizCd:i}=e,[a,u]=x.useState(null);x.useEffect(()=>{f()},[i]);const f=()=>{r({quiz:o,quizCd:i,answer:null})},d=s=>{u(s),r({quiz:o,quizCd:i,answer:s})};return n.jsxs(Lr,{children:[n.jsx(Pe,{answerType:!0,isSelected:a==="O",handleSelectAnswer:()=>!t&&d("O"),disabled:t,children:n.jsx("img",{src:yt,alt:"O"})}),n.jsx(Pe,{answerType:!1,isSelected:a==="X",handleSelectAnswer:()=>!t&&d("X"),disabled:t,children:n.jsx("img",{src:vt,alt:"X"})})]})}const Ir=h("div")`
  display: flex;
  gap: 0.6rem;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
`,Rr=h("div")`
  border: 1px solid #ffcc9d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.65rem;
  font-size: 2.65rem;
  color: #000;
  font-weight: 600;
  text-align: center;
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 0 0 5px 0px rgba(255, 136, 27, 0.3);
`,Br=({hint:t})=>{const e=t.split("").filter(r=>r!==" ");return n.jsx(Ir,{children:e.map((r,o)=>n.jsx(Rr,{children:r},o))})},Nr=({hint:t})=>n.jsx(L,{size:14,align:"center",color:"#707070",style:{lineHeight:1.4},children:t}),Dr=({hint:t})=>n.jsx(L,{size:14,align:"center",color:"#707070",style:{lineHeight:1.4},children:t});function Mr({initialTime:t,onTimeUp:e,play:r}){return n.jsx(M,{children:n.jsx($t,{initialTime:t,onTimeUp:e,play:r})})}function Qr({percentage:t=0,correctCount:e=0,incorrectCount:r=0}){return n.jsxs(M,{shadow:!0,children:[n.jsx(ot,{icon:!1,children:n.jsx(Z,{size:20,color:"#9B9798",children:"결과"})}),n.jsx(it,{children:n.jsx(lt,{value:t,maxValue:100,strokeWidth:12,size:160,color:"#ff5722"})}),n.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",marginTop:"5rem"},children:[n.jsxs(M,{bgColor:"#FFF9DB",style:{flex:1},children:[n.jsx(L,{weight:500,color:"#9B9798",align:"center",style:{marginBottom:"0.6rem"},children:"내가 맞춘 정답"}),n.jsxs(L,{size:20,weight:600,color:"#FF881B",align:"center",children:[e,"개"]})]}),n.jsxs(M,{bgColor:"#FFF9DB",style:{flex:1},children:[n.jsx(L,{weight:500,color:"#9B9798",align:"center",style:{marginBottom:"0.6rem"},children:"내가 틀린 오답"}),n.jsxs(L,{size:20,weight:600,color:"#000000",align:"center",children:[r,"개"]})]})]})]})}const qr=h("span")`
  display: inline-block;
  text-align: center;
  background-color: #ff881b;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`,Vr=h("p")`
  font-weight: 600;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({rightFl:t})=>t===1?"#5486F9":"#FF4646"};
  background-color: ${({rightFl:t})=>t===1?"#EFF6FF":"#FFEAEA"};
  text-align: left;
`,Yr=h("p")`
  font-weight: 600;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: #f5f5f5;
  background-color: #ededef;
  text-align: left;
`;function Hr({resultData:t}){return n.jsx(n.Fragment,{children:t&&t.map((e,r)=>n.jsxs(M,{style:{border:"1px solid #EDEDEF",marginTop:"1rem"},children:[n.jsxs(qr,{children:[r+1,"번 문제"]}),n.jsx(L,{size:15,color:"2E3233",weight:600,style:{lineHeight:1.3},children:e.quiz}),n.jsxs(Vr,{rightFl:e.rightFl,children:[e.rightFl===1?"정":"오","답 : ",e.answer]}),e.rightFl===0&&n.jsxs(Yr,{rightFl:1,children:["정답 : ",e.rightAnswer]})]},r))})}function Ur({options:t}){const{timeEnded:e,thisQuizData:r,handleChandeAnswer:o}=k(),{quiz:i,quizCd:a}=r,[u,f]=x.useState(null);x.useEffect(()=>{d()},[a]);const d=()=>{o({quiz:i,quizCd:a,answer:null})},s=l=>{f(l),o({quiz:i,quizCd:a,answer:String(l)})};return n.jsx(n.Fragment,{children:t.map((l,c)=>n.jsx(Ft,{answer:c+1,option:l,onClick:!e&&s,isSelected:u===c+1,disabled:e},c))})}const $r=h("div")`
  max-width: 40rem;
  margin: 0 auto;
`;function Wr({answerLetterNo:t=1}){const{timeEnded:e,thisQuizData:r,handleChandeAnswer:o}=k(),{quiz:i,quizCd:a}=r,[u,f]=x.useState("");x.useEffect(()=>{d()},[a]);const d=()=>{o({quiz:i,quizCd:a,answer:null})},s=()=>{o({quiz:i,quizCd:a,answer:u})},l=c=>{let g=c.target.value;g=g.replace(/[^\wㄱ-ㅎㅏ-ㅣ가-힣]/g,""),g.length>t&&(g=g.slice(0,t));const m=g.trim();f(m)};return n.jsxs($r,{children:[n.jsx(L,{size:12,weight:600,color:"#C2C0C1",children:"빈칸에 정답을 입력해주세요."}),n.jsx(wt,{value:u,onInput:l,onBlur:s,maxLength:t,readOnly:e}),n.jsxs(L,{size:12,weight:600,color:"#9B9798",children:[u.length,"/",t,"자"]})]})}const Gr=t=>{const r={ox:Br,multiple:Nr,short:Dr}[t==null?void 0:t.quizTy];return r?n.jsx(r,{hint:t.hint?t.hint:""}):null};function Xr(){const{thisQuizData:t,isHintModal:e,handleHintModal:r}=k(),o=Gr(t);B.useEffect(()=>{i()},[e]);const i=()=>{if(e){document.body.style.overflow="hidden";return}document.body.style.overflow="auto"};return n.jsxs(Be,{isOpen:e,isClose:r,children:[n.jsxs(Z,{size:20,style:{textAlign:"center",lineHeight:1.4,marginTop:"-2rem",marginBottom:"2rem"},children:["문제가 어려우시죠? ",n.jsx("br",{}),"벌꿀이가 ",n.jsx(Ae,{children:"힌트"})," 드릴게요!"]}),o]})}const Zr=h("div")`
  position: relative;
  display: flex;
  background-color: #fff9db;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,Jr=h(Xe)`
  cursor: pointer;
  max-width: 100%;
  width: 30rem;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  height: 5.2rem;
  color: #fff;
  justify-content: center;
  background-color: ${Ce.color.primary[400]};
  border-width: 1px;
  border-style: solid;
  border-color: ${Ce.color.primary[400]};
  border-radius: 0.6rem;
  transision: all 0.3s;
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`,Kr=h("img")`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -4rem;
`,en=h("div")`
  width: 16rem;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  // 텍스트 스타일링
  span {
    font-size: 14px;
    font-weight: bold;
  }
  &:nth-of-type(2n) {
  }
  // 육각형 테두리
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: inherit; // 육각형 모양에 맞춘 테두리
    z-index: -1;
  }
`,tn=h("button")`
  width: 100%;
  height: calc(100% - 9rem);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`,rn=h("div")`
  display: flex;
  flex-flow: wrap;
  //   grid-template-columns: repeat(4, 1fr); // 기본적으로 한 줄에 4개의 육각형
  //   height: 100vh;
  //   width: 100vw;

  gap: 0.7rem; // 간격을 그리드 간격으로 설정
  width: 116rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`,Q={marginTop:"-4rem"},te={...Q,marginTop:"-4rem",marginLeft:"-16.3rem"};function nn(){const{goBack:t}=J();return n.jsx(Zr,{children:n.jsxs("div",{style:{margin:"auto",textAlign:"center"},children:[n.jsx("img",{src:Ze,alt:"벌 모양",style:{width:"20rem"}}),n.jsx("p",{style:{fontSize:"2.3rem",fontWeight:500,marginTop:"2.5rem"},children:"퀴즈가 없습니다."}),n.jsx("div",{style:{marginTop:"4rem"},children:n.jsx(Jr,{onClick:t,children:"뒤로가기"})})]})})}function on({newsLink:t}){const{endedYouTube:e}=k();return n.jsxs(n.Fragment,{children:[n.jsx(xe,{videoId:t}),e&&n.jsx("div",{style:{display:"flex",gap:"2rem",justifyContent:"center"},children:n.jsx(kr,{})})]})}const Ye="/assets/category_image01-DX8bJXJe.png",an="/assets/category_image02-CSpUepK1.png",sn="/assets/category_image03-B7Mty3bQ.png",ln="/assets/category_image04-BQYQxmor.png",cn="/assets/category_image05-Bn4n440Y.png",un="/assets/category_image06-DTGaYhjC.png",dn="/assets/category_image07-D-6O32vP.png",fn="/assets/category_image08-D3WXpzMH.png",ze=["#FFE893","#FFCD1B","#FFE073","#FFDE55","#FFC84D"],hn=[Ye,an,sn,ln,cn,un,dn,fn],q=new Array(6).fill({});function re(t,e){return q.map((r,o)=>e[o]?{...t[e[o]],image:hn[e[o]]}:r)}function Rn({quizCategoryList:t=[],onHandleQuizList:e}){const r=q.map((f,d)=>d===3?{...t[0],image:Ye}:f),o=re(t,{3:1,4:2}),i=re(t,{2:3,3:4,4:5}),a=re(t,{3:6,4:7}),u=(f,d)=>n.jsx(rn,{style:d,children:f.map((s,l)=>n.jsx(en,{style:{backgroundColor:ze[Math.floor(Math.random()*ze.length)]},children:n.jsxs(tn,{onClick:()=>s.quizCategoryCd&&e(s.quizCategoryCd),style:{flexFlow:"column"},children:[n.jsx("img",{src:s.image,alt:""}),n.jsx("p",{style:{marginTop:"1rem"},children:s.quizCategoryNm})]})},l))});return n.jsxs(n.Fragment,{children:[u(q,Q),u(q,te),u(r,Q),u(o,te),u(i,Q),u(a,te),u(q,Q)]})}function pn(t,e){const{goToPage:r}=J(),{page:o}=Oe(),a=Number(o)===t;return{onHandleNextPage:()=>{e(),r(Le.QUIZ_GAME(Number(o)+1).path)},submitPage:a}}const gn="/assets/coin-BzTkdVQM.svg";function mn({isOpen:t=!1,insertPoint:e=0,solveList:r=[]}){const{goToPage:o}=J();return n.jsx(n.Fragment,{children:n.jsxs(st,{isOpen:t,style:{overflow:"visible",paddingTop:"5rem"},children:[n.jsx(Kr,{src:gn,alt:"코인"}),n.jsxs(Z,{size:20,weight:600,children:["퀴즈풀이 완료! ",n.jsx("br",{}),"리터러시 ",n.jsxs(Ae,{children:[e,"P"]})," 포인트 적립"]}),n.jsxs(L,{size:14,style:{marginTop:"2rem",textAlign:"center"},color:"#707070",children:["미디어리터러시와 한 걸음 더 친해졌어요! ",n.jsx("br",{}),"이제 결과를 확인하러 가볼까요?"]}),n.jsx(me,{children:n.jsx(ye,{onClick:()=>o(Le[Je].path,r),children:"결과 확인하기"})})]})})}function yn({newsLink:t}){const{endedYouTube:e,thisQuizData:r}=k();return n.jsxs(n.Fragment,{children:[n.jsx(xe,{videoId:t}),e&&n.jsx(Ur,{options:r.multipleChoiceList})]})}function vn({newsLink:t}){const{endedYouTube:e,thisQuizData:r}=k();return n.jsxs(n.Fragment,{children:[n.jsx(xe,{videoId:t}),e&&n.jsx(Wr,{answerLetterNo:r.answerLetterNo})]})}const xn=ke({key:"quizListState",default:[]});ke({key:"quizResultState",default:[]});const wn=h("p")`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  white-space: pre-wrap;
  color: #000;
`,Bn=h("div")`
  background-color: #fff0ab;
  height: 100dvh;
  display: flex;
  flex-flow: column;
  overflow: auto;
  align-items: center;
  justify-content: center;
`,Nn=h("button")`
  position: fixed;
  right: 2rem;
  top: 3rem;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  box-shadow: 0 0 3px 3px rgba(142, 142, 142, 0.25);
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`;function bn(){const[t,e]=x.useState(!1),r=Ke();x.useEffect(()=>{const o=a=>{t&&(a.preventDefault(),a.returnValue="")},i=a=>{t?r(1):window.confirm("현재 페이지에서 나가시겠습니까?")?(e(!1),r("/")):(e(!0),r(1))};return window.addEventListener("popstate",i),window.addEventListener("beforeunload",o),()=>{window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",o)}},[t])}function Cn({initialTime:t=30,quizList:e=[]}){const[r,o]=x.useState([]),[i,a]=x.useState(t),[u,f]=x.useState(100),[d,s]=x.useState(!1),[l,c]=x.useState(!1),[g,m]=x.useState(!1),[p,C]=x.useState(!1),[w,j]=x.useState(!1),P=()=>{s(!1),c(!1),a(t),f(100),m(!1)},S=()=>{s(!0)},_=v=>{v.data===window.YT.PlayerState.ENDED&&c(!0)},A=v=>{m(v)},I=()=>{C(!p)},O=()=>{j(!w)},z=({quiz:v,quizCd:F,answer:y})=>{(y||y===!1)&&m(!0);const E=r.findIndex(T=>T.quizCd===F);if(E!==-1){const T=r.map((N,D)=>D===E?{...N,answer:y}:N);o(T)}else o([...r,{quiz:v,quizCd:F,answer:y}])};return x.useEffect(()=>{let v;return l&&i>0&&(v=setInterval(()=>{a(F=>{const y=F-1;return f(y/t*100),y<=0&&(clearInterval(v),S()),y})},1e3)),()=>clearInterval(v)},[l,i,t]),{timeLeft:i,gaugeWidth:u,initialTime:t,timeEnded:d,endedYouTube:l,handleTimeUp:S,handleEndedYouTube:_,isCompleted:g,isCaptionModal:p,isHintModal:w,answerList:r,quizList:e,handleCaptionModal:I,handleHintModal:O,handleChandeAnswer:z,handleComplated:A,handleReset:P}}const Te=ve.secondary[100],Pn=t=>{const r={ox:on,multiple:yn,short:vn}[t==null?void 0:t.quizTy];return r?n.jsx(r,{...t}):n.jsx(Ne,{})};function Dn({}){const[t,e]=x.useState({isOpen:!1,insertPoint:0,solveList:[]}),[r,o]=x.useState({}),{quizResults:i}=pt,[a,u]=et(i),{timeOut:f=30,quizList:d=[]}=tt(xn),{page:s=1}=Oe(),l=d==null?void 0:d.length;if(B.useEffect(()=>{o(d[s-1])},[s]),bn(),s===void 0||!r)return n.jsx(Ne,{});const c=Pn(r),{timeLeft:g,gaugeWidth:m,timeEnded:p,endedYouTube:C,handleTimeUp:w,isHintModal:j,handleHintModal:P,isCaptionModal:S,handleEndedYouTube:_,answerList:A,handleChandeAnswer:I,handleCaptionModal:O,isCompleted:z,handleComplated:v,initialTime:F,handleReset:y}=Cn({initialTime:f,quizList:r}),{onHandleNextPage:E,submitPage:T}=pn(l,y),N=async()=>{const D=await u(A),{insertPoint:$,solveList:ee}=D;e({isOpen:!0,insertPoint:$,solveList:ee})};return n.jsx(n.Fragment,{children:d.length?n.jsxs(n.Fragment,{children:[n.jsxs(gt,{value:{timeLeft:g,gaugeWidth:m,timeEnded:p,endedYouTube:C,isCaptionModal:S,handleTimeUp:w,isHintModal:j,handleHintModal:P,handleCaptionModal:O,handleEndedYouTube:_,answerList:A,handleChandeAnswer:I,isCompleted:z,handleComplated:v,initialTime:F,handleReset:y,thisQuizData:r},children:[n.jsx(Re,{bgColor:Te,subMenu:!1}),n.jsxs(Ie,{bg:Te,children:[n.jsxs(ne,{children:[n.jsx(Rt,{currentPage:s,totalPage:l}),n.jsx(Mr,{}),n.jsxs(M,{paddingTop:20,paddingBt:30,style:{marginTop:"1rem"},children:[n.jsx(St,{children:r.quizCategoryNm}),n.jsx(wn,{children:r.quiz}),c,n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"1rem",alignItems:"center",marginTop:"2.5rem"},children:[n.jsx(Lt,{}),n.jsx(bt,{onClick:O})]})]}),n.jsx(me,{children:n.jsx(ye,{disabled:!(z||p),onClick:T?N:E,children:T?"제출":"NEXT"})})]}),n.jsx(Xr,{}),n.jsx(mt,{})]})]}),n.jsx(mn,{isOpen:t.isOpen,insertPoint:t.insertPoint,solveList:t.solveList}),a&&n.jsx(rt,{})]}):n.jsx(nn,{})})}const Fe=ve.secondary[300],jn=ve.tertiary[50];function Mn({resultData:t=[],isLoading:e=!1}){const{goToHome:r}=J(),o=t.length,i=t.filter(f=>f.rightFl===1).length,a=t.filter(f=>f.rightFl===0).length,u=at(i,o);return n.jsxs(n.Fragment,{children:[n.jsx(Re,{bgColor:Fe}),n.jsxs(Ie,{bg:jn,children:[n.jsx(ne,{bg:Fe,children:n.jsx(Qr,{percentage:u,correctCount:i,incorrectCount:a})}),n.jsxs(ne,{children:[n.jsxs(Z,{size:20,style:{marginBottom:"2rem"},children:["결과 확인하기",n.jsxs("span",{style:{fontSize:"1.4rem",color:"#707070",fontWeight:400,paddingLeft:"0.5rem"},children:[o,"문제"]})]}),e?n.jsx("div",{style:{textAlign:"center",padding:"15% 0"},children:n.jsx(nt,{})}):n.jsx(Hr,{resultData:t}),n.jsx(me,{children:n.jsx(ye,{onClick:r,children:"돌아가기"})})]})]})]})}export{Nn as B,Bn as H,Rn as Q,pt as a,Dn as b,Mn as c,xn as q};
