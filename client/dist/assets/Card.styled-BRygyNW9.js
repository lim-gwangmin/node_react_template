import{j as r,f as i}from"./index-BBXadzZ0.js";import{i as n}from"./icon_arrow_right_small-ZUMzZ4ew.js";import{b as o,c}from"./Title.styled-d_6YcK5y.js";const l="data:image/svg+xml,%3csvg%20width='10'%20height='16'%20viewBox='0%200%2010%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.867616%2014.0973L2.20262%2015.4248L9.62012%207.9998L2.19512%200.574806L0.867615%201.90231L6.96512%207.99981L0.867616%2014.0973V14.0973Z'%20fill='%23858585'/%3e%3c/svg%3e";function d({to:e,children:t}){return r.jsx(r.Fragment,{children:e?r.jsx(o,{to:e,children:t}):r.jsx(c,{children:t})})}function h({to:e="",icon:t=!0,iconSize:a="small",children:s}){return r.jsx("div",{children:r.jsxs(d,{to:e,children:[r.jsx("div",{children:s}),t&&r.jsx("img",{src:a==="small"?n:l,alt:"화살표 아이콘"})]})})}const p=i("div")`
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"1rem"};
  border-radius: 1.2rem;
  background-color: ${({bgColor:e})=>e};
`,f=i("div")`
  position: relative;
  background-color: ${({barColor:e})=>e};
  width: ${({value:e})=>e}%;
  height: 100%;
  border-radius: 1.2rem;
  transition: width 1s ease-in-out;

  > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
`;function w(e,t){return t===0?0:e/t*100}function x(e,t){if(t===0)return 0;const a=e/t*100;return Math.floor(a)}const v=i("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11rem;
  margin: 2rem 0;
`;i("img")`
  width: ${({size:e})=>e||"6rem"};
  height: ${({size:e})=>e||"6rem"};
  border-radius: 100%;
  background-color: #ffcd1b;
`;i("img")`
  width: ${({size:e})=>e||"2rem"};
  height: ${({size:e})=>e||"2rem"};
`;export{v as C,h as S,l as a,p as b,w as c,f as d,x as g};
