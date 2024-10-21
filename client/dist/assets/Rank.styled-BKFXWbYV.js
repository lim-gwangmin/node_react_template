import{r as s,j as r,aH as h,aI as y,aJ as x,f as t,b as p,ae as k,af as S,e as u}from"./index-BBXadzZ0.js";import{b as v,d as w}from"./Card.styled-BRygyNW9.js";import{B as T}from"./Box-D0Xa-Rvs.js";import"./Box.styled-DN2A2xhE.js";const P={userCd:"",userNm:"",accruedPoint:0,levelUpPoint:0,solveRightNo:0,solveNo:0,allStampNo:0,stampNo:0,schoolCd:"",schoolNm:"",email:"",quizPointDay:0,etcPointDay:0,point:0,accruedPoint:0,level:1,grade:1};function I({onClick:e,tabList:m=[],...l}){const[a,n]=s.useState(0),[c,g]=s.useState({left:0,width:0}),d=s.useRef([]),f=(o,i)=>{n(o),e(i)};return s.useEffect(()=>{if(d.current[a]){const{offsetLeft:o,offsetWidth:i}=d.current[a];g({left:o,width:i})}},[a]),r.jsxs(h,{...l,children:[m.map((o,i)=>r.jsx(y,{active:a===i,onClick:()=>f(i,o.key),ref:b=>d.current[i]=b,children:o.label},i)),r.jsx(x,{left:c.left,width:c.width})]})}const E=t("div")`
  font-size: 1.2rem;
  color: #000;
`,N=t("b")`
  font-size: 2.4rem;
  font-weight: 600;
`;function U({width:e,height:m,bgColor:l="#fff",barColor:a="#FFCD1B",value:n=0,icon:c=null,...g}){const[d,f]=s.useState(0);return s.useEffect(()=>{const o=setTimeout(()=>{f(n)},100);return()=>clearTimeout(o)},[n]),r.jsx(v,{bgColor:l,...g,children:r.jsx(w,{barColor:a,value:d,children:c&&r.jsx("img",{src:c,alt:"게이지 아이콘"})})})}function A({userAgeCd:e,userName:m,schoolName:l,grade:a,image:n}){return r.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[r.jsx(j,{src:n,alt:"User Thumbnail"}),r.jsxs("div",{children:[r.jsx(p,{size:17,weight:"bold",children:m}),e!=="n"&&r.jsxs(p,{size:12,color:"#666",children:[l," ",a,"학년"]})]})]})}const j=t("img")`
  width: ${({size:e})=>e||"6rem"};
  height: ${({size:e})=>e||"6rem"};
  border-radius: 100%;
  background-color: #ffcd1b;
`,{color:R}=k,G=t(T)`
  margin-top: 2rem;
  text-align: right;
`,D=t("div")`
  display: flex;
  justify-content: space-between;
  alignitems: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`,H=t("span")`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  margin-top: 2rem;
  background-color: ${R.secondary[600]};
`,L=t("div")`
  flex-flow: wrap;
  margin-top: 1.5rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  > div {
    flex: 16rem 1 0;
  }
`,W=t("div")`
  text-align: center;
  flex: 0 1 21.9rem;
`,F=t("div")`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.5rem 0.7rem;
  margin-top: ${({rank:e})=>e===1?"-3.5rem":"-2.5rem"};
  padding-top: ${({rank:e})=>e===1?"5rem":"4rem"};
  padding-bottom: ${({rank:e})=>e===1?1.5:(4-e)*2}rem;
`,V=t("div")`
  position: relative;
  width: ${({rank:e})=>e===1?"7rem":"5rem"};
  height: ${({rank:e})=>e===1?"7rem":"5rem"};
  border-radius: 100%;
  padding: 0.5rem;
  background-image: url(${S});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${u.secondary[600]};
  z-index: 2;
  margin: 0 auto;
`,_=t("img")`
  display: block;
  margin: 1.2rem auto;
`,q=t("p")`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${u.primary[400]};
  margin-bottom: 0.5rem;
`,J=t("b")`
  font-weight: 700;
  font-size: 1.6rem;
  word-break: break-all;
`;t("p")`
  color: #505050;
  font-size: 1.2rem;
  margin-top: ${({rank:e})=>e===2?"4.3rem":e===3?"2.2rem":"0"};
`;const M=t("div")`
  display: flex;
  gap: 1.2rem;
  align-items: end;
  justify-content: center;
`,K=t("div")`
  flex: 1 0 32.3334%;
  text-align: center;
`,O=t("span")`
  display: inline-block;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({image:e})=>e});
  background-color: #ffcd1b;
`,Q=t("div")`
  display: block;
  position: relative;
  background: linear-gradient(90deg, #ffb509 0%, #ffec99 100%);
  border-radius: 0.4rem;
  min-height: 3.4rem;
  padding-top: ${({rank:e})=>{if(e===1)return 9;if(e===2)return 5}}rem;
  &::before {
    content: '${({rank:e})=>e}';
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    color: #505050;
    position: absolute;
    width: 100%;
    bottom: 0.6rem;
    text-align: center;
  }
`;export{U as G,K as R,E as S,I as T,P as U,N as a,L as b,G as c,R as d,D as e,H as f,W as g,V as h,F as i,q as j,J as k,_ as l,M as m,O as n,Q as o,A as p};
