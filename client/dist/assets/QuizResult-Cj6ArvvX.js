import{V as p,r as o,u as c,j as s}from"./index-BBXadzZ0.js";import{c as l,a as f}from"./QuizResultTemplate-DpLRTH25.js";import"./Box.styled-DN2A2xhE.js";import"./Card.styled-BRygyNW9.js";import"./Title.styled-d_6YcK5y.js";import d from"./NotFound-D7zb3Fab.js";import"./Box-D0Xa-Rvs.js";import"./SectionContainer-CGhBODQp.js";import"./Header-Ciq_Nrm5.js";import"./Modal-3Qb9nTYM.js";import"./Alert-BufmXSUj.js";import"./CircularGauge-COGIBE8Y.js";import"./icon_arrow_right_small-ZUMzZ4ew.js";function y({}){const{state:e}=p(),[i,r]=o.useState([]),t=e,[a,u]=c(f.quizSolve);if(!(t!=null&&t.length))return s.jsx(d,{});o.useEffect(()=>{n()},[t]);const n=async()=>{const m=await u(t);r(m.data)};return s.jsx(l,{resultData:i,isLoading:a})}export{y as default};
