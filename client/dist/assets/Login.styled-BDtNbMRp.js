import{y as d,r as C,z as B,j as e,d as m,q as T,A as k,s as o,t as c,B as a,v as s,b as t,_ as F,f as l}from"./index-BBXadzZ0.js";import{c as h}from"./icon_result-C77dOc0Z.js";import{A as v}from"./Alert-BufmXSUj.js";import{S as x}from"./SectionContainer-CGhBODQp.js";import{H as g}from"./Header-Ciq_Nrm5.js";import{r as A}from"./replace-BG-69Hno.js";function q({userCd:r}){const{initialValues:n,schema:i}=F,{goToLogin:u}=d(),[p,j]=C.useState(!1),{openModal:f}=B(),y=b=>{const{resultCode:w,resultMessage:S}=b;if(w!=200){f({text:S});return}j(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{backButton:!0,title:"아이디/비밀번호 찾기",subMenu:!1}),e.jsxs(m,{children:[e.jsxs(x,{maxWidth:500,paddingTop:40,children:[e.jsxs(P,{children:[e.jsx("b",{children:"새로운 비밀번호를 설정해주세요."}),e.jsxs("p",{children:["발송된 임시 비밀번호 입력 후 신규 비밀번호 설정이 가능합니다. ",e.jsx("br",{}),"비밀번호는 8~20자 이내의 영문, 숫자, 특수문자 조합으로 작성해주세요."]})]}),e.jsxs(T,{initialValues:{...n,userCd:r},schema:i,request:k.changePassword,setData:y,children:[e.jsx(o,{children:e.jsx(c,{type:"password",title:"신규 비밀번호",name:"userNewPw",placeholder:"신규 비밀번호"})}),e.jsx(o,{children:e.jsx(c,{type:"password",title:"신규 비밀번호 확인",name:"userNewPwConfirm",placeholder:"신규 비밀번호 확인"})}),e.jsx(a,{children:e.jsx(s,{type:"submit",children:"비밀번호 변경"})}),e.jsx(t,{size:12,color:"#888888",align:"center",style:{marginTop:"3rem",lineHeight:1.4},children:"※ 비밀번호 변경이 불가한 경우 담당부서 연락처 (042-636-0001)를 통해 문의해 주시기 바랍니다."})]})]}),e.jsxs(v,{isOpen:p,max:300,style:{textAlign:"center"},children:[e.jsx("img",{src:h,alt:"회원가입 완료"}),e.jsx(t,{align:"center",size:24,weight:500,style:{margin:"2rem 0 1rem"},children:"비밀번호 변경 완료"}),e.jsx(t,{align:"center",weight:400,color:"#9B9798",children:"로그인 화면으로 이동합니다."}),e.jsx(a,{children:e.jsx(s,{onClick:u,children:"이동"})})]})]})]})}const P=l("div")`
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: #fff6f7;
  margin-bottom: 3rem;
  > b {
    display: block;
    color: #ff6681;
  }
  > p {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.35;
  }
`;function E({userId:r}){const{goToLogin:n,goToFindPassword:i}=d();return e.jsxs(e.Fragment,{children:[e.jsx(g,{backButton:!0,title:"아이디/비밀번호 찾기",subMenu:!1}),e.jsx(m,{mode:"center",children:e.jsx(x,{maxWidth:500,children:e.jsxs(o,{children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("img",{src:h,alt:"",style:{width:"6rem"}}),e.jsx(t,{align:"center",style:{margin:"2rem 0"},children:"입력하신 정보와 일치하는 아이디입니다."})]}),e.jsx(z,{children:A(r)}),e.jsxs(a,{flow:"column",children:[e.jsx(s,{theme:"revers",onClick:n,children:"로그인"}),e.jsx(s,{onClick:i,children:"비밀번호 찾기"})]})]})})})]})}const z=l("div")`
  padding: 2.5rem 1rem;
  background-color: #f9fafc;
  border-radius: 1.2rem;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 800;
`,V={marginTop:"4rem",marginBottom:"2rem",gap:"2rem"},W={height:"7.6rem"},D={marginTop:"7rem"},O=l("ul")`
  display: flex;
  margin-top: 2.3rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  > li { 
   font-size: 1.3rem;
   color:#000;
   font-weight: 500;
   &:first-of-type { 
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 0.65rem;
      top: 50%;
      transform: translateY(-50%);
      right: -1.5rem;
      background-color: #9e9e9e;
    }
  }
`;export{W as B,q as C,V as F,O as S,D as a,E as b};
