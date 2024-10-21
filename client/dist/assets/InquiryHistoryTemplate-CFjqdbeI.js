import{a as d,V as w,y,j as t,a0 as L,aO as B,i as s,f as c,X as j,u as T,r as m,aP as h,d as P}from"./index-BBXadzZ0.js";import{I}from"./tab-CpR-np10.js";import"./Box.styled-DN2A2xhE.js";import{V as S}from"./VisualBox-D9aPQ8lm.js";import{W as _}from"./WindowInfinityScrollContainer-81HpgYqX.js";import{N as v}from"./NonData-DJp1MxrL.js";import{S as D}from"./SectionContainer-CGhBODQp.js";import{H as A}from"./Header-Ciq_Nrm5.js";const C=({searchBoardMasterCd:e="master-000000",pageIndex:r,pageUnit:a})=>d.get(`/api/board/article?searchBoardMasterCd=${e}&pageUnit=${a}&pageIndex=${r}`),k=({articleCd:e})=>d.get(`/api/board/article/${e}`),E=({articleNm:e,articleContent:r})=>d.post("/api/board/article",{articleNm:e,articleContent:r}),N=({articleCd:e,articleNm:r,articleContent:a})=>d.put("/api/board/article",{articleCd:e,articleNm:r,articleContent:a}),M=({articleCd:e})=>d.put("/api/board/article",{articleCd:e});function R({tabs:e=[]}){const{pathname:r}=w(),{goToPage:a}=y();return t.jsx("div",{style:{borderBottom:"1px solid #EAEAEA"},children:t.jsx(L,{children:e.map((n,l)=>t.jsx(B,{onClick:()=>a(n.url),active:n.url===r,children:n.label},l))})})}const $={boardList:async e=>{console.log(e,"data");try{const r=await C(e);return s(r.data).result}catch(r){const{response:a}=r;throw console.error("findPassword failed:",r),s(a.data),r}},boardListDetail:async e=>{try{const r=await k(e);return s(r.data).result.data}catch(r){const{response:a}=r;throw console.error("findPassword failed:",r),s(a.data),r}},boardCreate:async e=>{try{const r=await E(e);return s(r.data)}catch(r){const{response:a}=r;throw console.error("findPassword failed:",r),s(a.data),r}},boardUpdate:async e=>{try{const r=await N(e);return s(r.data).result.data}catch(r){const{response:a}=r;throw console.error("findPassword failed:",r),s(a.data),r}},boardRemove:async e=>{try{const r=await M(e);return s(r.data).result.data}catch(r){const{response:a}=r;throw console.error("findPassword failed:",r),s(a.data),r}}},J=c("textarea")`
  font-size: ${({size:e})=>j(e)};
  height: 30rem;
  color: #111111;
  width: 100%;
  max-width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #dadada;
  &::placeholder {
    color: #d8d8d8;
  }
  &:read-only,
  &:disabled {
    background-color: #fafafa;
  }
`,H="/assets/inquiry_image-8QF-cOGW.png";function K({}){const[e,r]=T($.boardList),[a,n]=m.useState([]),[l,x]=m.useState({});m.useEffect(()=>{g()},[]);const g=async()=>{if(!e)try{const o=await r(h),{data:i,pagination:p}=o;console.log(o),n(i),x(p)}catch(o){console.error(o)}},b=async()=>{const{currentPageNo:o,lastPageNo:i}=l;if(o>=i||e)return;const p=o+1,f=await setFetchProductList({...h,pageIndex:p});n(u=>[...u,...f.data]),x(u=>({...u,...f.pagination}))};return t.jsxs(_,{loadMore:b,isLoading:e,children:[t.jsx(A,{backButton:!0,title:"문의하기",subMenu:!1}),t.jsx(R,{tabs:I}),t.jsx(P,{children:t.jsxs(D,{children:[t.jsx(S,{image:H,style:{paddingTop:"3rem",paddingBottom:"3rem"},children:t.jsx("b",{children:"문의사항"})}),a.length?a.map((o,i)=>t.jsxs(U,{children:[t.jsx(q,{children:o.articleNm}),t.jsx(F,{children:o.createDt})]},i)):t.jsx(v,{children:"문의내역이 없습니다."})]})})]})}const U=c("div")`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eaeaea;
`,q=c("p")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=c("span")`
  display: block;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #999999;
`;export{$ as B,K as I,R as L,J as S};
