import{a as c,i,f as o,N as L,j as t,T as g,X as y,n as v,a4 as B,d as S,g as I,e as _}from"./index-BBXadzZ0.js";import"./Box.styled-DN2A2xhE.js";import{V as E}from"./VisualBox-D9aPQ8lm.js";import{W as D}from"./WindowInfinityScrollContainer-81HpgYqX.js";import{S as x}from"./SectionContainer-CGhBODQp.js";import{H as F}from"./Header-Ciq_Nrm5.js";import{f as C}from"./replace-BG-69Hno.js";const H={searchBrandCd:"",pageUnit:10,pageIndex:1},A=()=>c.get("/api/store/brand"),M=({searchBrandCd:e,pageUnit:r,pageIndex:n})=>c.get(`/api/store/product?searchBrandCd=${e}&pageUnit=${r}&pageIndex=${n}`),O=({productCd:e})=>c.get(`/api/store/product/${e}`),R=({productCd:e})=>c.post("/api/store/purchase",{productCd:e}),pe={brandList:async e=>{try{const r=await A(e);return i(r).data.result}catch(r){const{response:n}=r;throw console.error("quizCategory failed:",r),i(n.data),r}},productList:async e=>{try{const r=await M(e);return i(r).data.result}catch(r){const{response:n}=r;throw console.error("quizCategory failed:",r),i(n.data),r}},productDetail:async e=>{try{const r=await O(e);return i(r).data.result}catch(r){const{response:n}=r;throw console.error("quizCategory failed:",r),i(n.data),r}},purchase:async e=>{try{const r=await R(e);return i(r).data}catch(r){const{response:n}=r;throw console.error("quizCategory failed:",r),i(n.data),r}}},f="/assets/product_placehodler-D2_we05w.svg",P=`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
border-radius: 100%;
width: 7rem;
height: 7rem;
text-align: center;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;
text-align: center;
font-size: 1.8rem;
font-weight: 700;
color: #fff;
`,q=o("ul")`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  overflow-x: auto;
`,j=o("button")`
  flex: 0 0 7rem;
  font-size: 1.4rem;
  color: #000;
  font-weight: 500;
  text-align: center;
`,U=o("span")`
  ${P}
  background-color: #000;
`,W=o("span")`
  ${P}
  background-size: ${({image:e})=>e?"cover":"50%"};
  background-image: url(${({image:e})=>e||f});
  background-color: ${({image:e})=>e?"#000":"#FFEC99"};
`,V=o(L)`
  text-align: left;
  display: block;
  width: 100%;
`,X=o("li")`
  flex: 0 0 calc(20% - 1rem);
  @media (max-width: 950px) {
    flex: 0 0 calc(25% - 1rem);
  }
  @media (max-width: 767px) {
    flex: 0 0 calc(33.3334% - 1rem);
  }
  @media (max-width: 430px) {
    flex: 0 0 calc(50% - 1rem);
  }
`,K=o("figure")`
  display: block;
  width: 100%;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: ${({image:e})=>e?"contain":"auto"};
  background-position: center;
  background-image: url(${({image:e})=>e||f});
  background-color: ${({image:e})=>e?"#fff":"#FFEC99"};
  padding-bottom: 100%;
`,Y=o("figcaption")`
  margin-top: 2rem;
`,G=o("p")`
  font-size: 1.4rem;
  font-weight: 500;
  color: #000;
  word-break: break-all;
  line-height: 1.3;
`,J=o("span")`
  display: block;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #666;
`,Q=o("div")`
  padding: 20% 2rem;
  text-align: center;
  color: #666666;
`,ue=o("div")`
  display: flex;
  flex-flow: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({bg:e})=>e||"#fff"};
`,ge=o("figure")`
  display: block;
  width: 17rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: ${({image:e})=>e?"contain":"auto"};
  margin-bottom: 2rem;
  background-position: center;
  background-image: url(${({image:e})=>e||f});
  background-color: ${({image:e})=>e?"#fff":"#FFEC99"};
  padding-bottom: 100%;
`,xe=o("section")`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 4.5rem 2rem 2rem 2rem;
`,fe=o("div")`
  padding: 3rem 0;
  border-bottom: 1px dashed #d7d7d9;
  margin-bottom: 2rem;
  > .productTitle {
    font-size: 2.2rem;
    display: block;
    font-weight: 500;
  }
  > .productContent {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    margin: 0.5rem 0 0;
  }
`,he=o("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;function Z({brandList:e=[],onClick:r}){return t.jsxs(x,{children:[t.jsx(g,{size:16,weight:500,children:"인기 브랜드"}),t.jsxs(q,{children:[t.jsx("li",{children:t.jsxs(j,{onClick:()=>r({brandCd:"",brandNm:"전체"}),children:[t.jsx(U,{children:"ALL"}),"전체"]})}),e.map((n,a)=>t.jsx("li",{children:t.jsxs(j,{onClick:()=>r({brandCd:n.brandCd,brandNm:n.brandNm}),children:[t.jsx(W,{image:n.imageLink?n.imageLink:null}),n.brandNm]})},a))]})]})}const ee="/assets/coin_image-CrE0K6TX.svg",re=o("b")`
  margin-top: 2.4rem;
  position: relative;
  display: inline-block;
  font-size: ${({fontSize:e})=>e?y(e):"1.6rem"};
  font-weight: ${({fontWeight:e})=>e||800};
  margin-top: ${({top:e})=>e?y(e):0};
  color: ${({color:e})=>e||"#000"};
  padding-left: 3rem;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    background: url(${ee}) center / contain no-repeat;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;function te({fontSize:e,color:r,fontWeight:n,top:a,price:s}){const d=isNaN(Number(s))?0:s;return t.jsx(re,{fontSize:e,color:r,fontWeight:n,top:a,children:C(d)})}function ne({productList:e=[],productTarget:r}){const{brandNm:n}=r;return t.jsxs(x,{children:[t.jsx(g,{size:16,weight:500,children:n}),t.jsx("div",{style:{marginTop:"3rem"},children:e.length?t.jsx("ul",{style:{display:"flex",gap:"3rem 1.2rem",flexFlow:"wrap"},children:e.map((a,s)=>t.jsx(X,{children:t.jsxs(V,{to:v[B].path,state:a.productCd,children:[t.jsx(K,{image:a.imageLink?a.imageLink:null}),t.jsxs(Y,{children:[t.jsxs(G,{children:[a.brandNm," ",a.productNm]}),t.jsx(te,{fontSize:18,top:15,price:a.productPrice}),t.jsxs(J,{children:[C(a.buyNo),"명이 받아감"]})]})]})},s))}):t.jsx(Q,{children:"상품이 없습니다."})})]})}const oe="/assets/calendar_image-DBozEB7O.png",k=_.primary[700];function be({brandList:e,isBrandLoading:r,productList:n,productTarget:a,setProductTarget:s,setProductList:d,setProductPagination:$,setFetchProductList:N,productPagination:h,isProductLoading:b}){const T=({brandCd:l,brandNm:m})=>{s(p=>({...p,brandNm:m,brandCd:l}))},z=async()=>{const{currentPageNo:l,lastPageNo:m}=h;if(l>=m||b)return;const p=h.currentPageNo+1,w=await N({...H,searchBrandCd:a.brandCd,pageIndex:p});d(u=>[...u,...w.data]),$(u=>({...u,...w.pagination}))};return t.jsxs(D,{loadMore:z,isLoading:b,children:[t.jsx(F,{backButton:!0,title:"상점",subMenu:!1,border:0,bgColor:k}),t.jsxs(S,{bg:k,children:[t.jsxs(x,{children:[t.jsx(g,{size:20,weight:500,children:"구매"}),t.jsxs(E,{image:oe,style:{marginTop:"2rem"},children:["다함께 실천하는 ",t.jsx("br",{}),t.jsx("b",{children:"하루 한 번 미디어리터러시"})]})]}),t.jsx(Z,{brandList:e,onClick:T}),t.jsx(ne,{productTarget:a,productList:n})]}),r&&t.jsx(I,{})]})}export{xe as B,te as C,ue as H,H as P,be as S,pe as a,fe as b,he as c,ge as d};
