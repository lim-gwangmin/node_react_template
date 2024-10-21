import{f as e,N as o}from"./index-BBXadzZ0.js";const r=e("div")`
  display: inline-block;
  position: relative;
`,s=e("input")`
  opacity: 0;
  width: 0;
  height: 0;
`,a=e("label")`
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 1.5rem;
  background-color: ${t=>t.isActive?"#FF881B":"#ccc"};
  border-radius: 50px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: ${t=>t.isActive?"2.3rem":"0.3rem"};
    top: 0.2rem;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`,i=`
padding: 1.35rem 0;
display: flex;
align-items: center;
justify-content: space-between;
gap: 2rem;
border-bottom: 1px solid #eaeaea;
`,c=e("li")`
  ${i}
`,l=e(o)`
  width: 100%;
  ${i}
`;export{s as H,a as S,r as T,c as a,l as b};
