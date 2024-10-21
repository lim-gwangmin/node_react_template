import{a as Y,j as e,e as y,N as j,n as v,R as K,b as g,T as b,aE as q,aF as J,f as o,ao as Q,X as e2,i as F,c as $,u as t2,r as f,aG as n2,d as A}from"./index-BBXadzZ0.js";import{B as p}from"./Box-D0Xa-Rvs.js";import"./Box.styled-DN2A2xhE.js";import{R as i2,n as s2,o as r2,G as o2,b as N,p as D,T as _,U as l2}from"./Rank.styled-BKFXWbYV.js";import{S as m}from"./SectionContainer-CGhBODQp.js";import"./Title.styled-d_6YcK5y.js";import{S as B,g as a2,a as c2}from"./Card.styled-BRygyNW9.js";import{B as d2}from"./ButtomPositionModal-Byo7j5tV.js";import{W as h2}from"./WindowInfinityScrollContainer-81HpgYqX.js";import{i as p2,H as C2}from"./Header-Ciq_Nrm5.js";import{P as g2,R as m2}from"./tab-CpR-np10.js";import{i as x2}from"./icon_arrow_next-8svfqn2K.js";const u2=({searchDt:t,searchPointTy:i,pageUnit:n,pageIndex:r})=>Y.get(`/api/log/point/user?searchPointTy=${i}&searchDt=${t}&pageUnit=${n}&pageIndex=${r}`),w="/assets/bee_image_x2-Dq5ULAxf.svg";function f2({rankDatas:t,isRankType:i}){[...t];const n=[t[1]?{...t[1],rank:2}:{rank:2,schoolNm:"-",userId:"-"},t[0]?{...t[0],rank:1}:{rank:1,schoolNm:"-",userId:"-"},t[2]?{...t[2],rank:3}:{rank:3,schoolNm:"-",userId:"-"}];return e.jsx(m,{children:e.jsx(p,{children:e.jsx("div",{style:{display:"flex",gap:"0.6rem",alignItems:"end"},children:n.map(r=>e.jsxs(i2,{children:[e.jsx(s2,{image:w}),e.jsx("p",{style:{fontWeight:600,margin:" 0.5rem 0 1rem",wordBreak:"break-all"},children:i?r.schoolNm:r.userId}),e.jsx(r2,{rank:r.rank})]},r.rank))})})})}const j2="data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%2036.417C25.5584%2036.417%2030.875%2031.1004%2030.875%2024.542C30.875%2017.9836%2025.5584%2012.667%2019%2012.667C12.4416%2012.667%207.125%2017.9836%207.125%2024.542C7.125%2031.1004%2012.4416%2036.417%2019%2036.417Z'%20fill='%23FFCD1B'/%3e%3cpath%20d='M20.1712%2019.7286L20.9312%2021.3119C21.0281%2021.5019%2021.1693%2021.6659%2021.343%2021.7899C21.5166%2021.9139%2021.7175%2021.9943%2021.9287%2022.0244L23.6387%2022.2777C23.8795%2022.3142%2024.1054%2022.4169%2024.2913%2022.5744C24.4771%2022.7319%2024.6155%2022.9379%2024.6911%2023.1694C24.7666%2023.401%2024.7763%2023.649%2024.7191%2023.8858C24.6619%2024.1225%2024.54%2024.3387%2024.367%2024.5102L23.1162%2025.7136C22.9672%2025.8628%2022.8563%2026.0458%2022.7929%2026.247C22.7295%2026.4482%2022.7155%2026.6616%2022.752%2026.8694L23.037%2028.5002C23.0822%2028.7419%2023.0579%2028.9914%2022.9669%2029.2197C22.8759%2029.4481%2022.7219%2029.6459%2022.5229%2029.7902C22.3239%2029.9345%2022.088%2030.0193%2021.8426%2030.0348C21.5973%2030.0503%2021.3526%2029.9958%2021.137%2029.8777L19.5537%2029.0702C19.3669%2028.9769%2019.1609%2028.9282%2018.952%2028.9282C18.7432%2028.9282%2018.5372%2028.9769%2018.3503%2029.0702L16.767%2029.8777C16.5548%2029.9706%2016.3216%2030.0049%2016.0916%2029.9773C15.8616%2029.9496%2015.6432%2029.8609%2015.459%2029.7203C15.2748%2029.5798%2015.1316%2029.3925%2015.0443%2029.178C14.9569%2028.9635%2014.9285%2028.7294%2014.962%2028.5002L15.247%2026.9169C15.2835%2026.7091%2015.2695%2026.4957%2015.2061%2026.2945C15.1427%2026.0933%2015.0318%2025.9103%2014.8828%2025.7611L13.632%2024.5577C13.4591%2024.3862%2013.3372%2024.17%2013.2799%2023.9333C13.2227%2023.6965%2013.2324%2023.4485%2013.308%2023.2169C13.3835%2022.9854%2013.5219%2022.7794%2013.7078%2022.6219C13.8936%2022.4644%2014.1195%2022.3617%2014.3603%2022.3252L16.0703%2022.0719C16.2816%2022.0418%2016.4825%2021.9614%2016.6561%2021.8374C16.8297%2021.7134%2016.9709%2021.5494%2017.0678%2021.3594L17.8278%2019.7761C17.9333%2019.5574%2018.0972%2019.3723%2018.3014%2019.2411C18.5057%2019.1099%2018.7423%2019.0379%2018.9849%2019.033C19.2276%2019.0281%2019.4669%2019.0905%2019.6763%2019.2132C19.8857%2019.336%2020.057%2019.5144%2020.1712%2019.7286Z'%20fill='white'/%3e%3cpath%20d='M31.6663%205.54183V9.50016C31.6681%2010.0205%2031.5669%2010.536%2031.3686%2011.0169C31.1702%2011.4979%2030.8786%2011.9349%2030.5105%2012.3027L28.6738%2014.076C26.0406%2011.6412%2022.5861%2010.2889%2018.9997%2010.2889C15.4133%2010.2889%2011.9588%2011.6412%209.32551%2014.076L7.48884%2012.2393C6.76087%2011.5121%206.34606%2010.5291%206.33301%209.50016V5.54183C6.33301%204.49201%206.75005%203.4852%207.49238%202.74287C8.23471%202.00053%209.24153%201.5835%2010.2913%201.5835H27.708C28.7578%201.5835%2029.7646%202.00053%2030.507%202.74287C31.2493%203.4852%2031.6663%204.49201%2031.6663%205.54183Z'%20fill='%23FFCD1B'/%3e%3c/svg%3e",v2="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34.8837%2016.0002L33.9837%2015.1668C33.7533%2014.9571%2033.5724%2014.6988%2033.4542%2014.4105C33.336%2014.1222%2033.2835%2013.8113%2033.3003%2013.5002V12.2835C33.3258%2011.5405%2033.1985%2010.8001%2032.9263%2010.1082C32.6541%209.4164%2032.2428%208.78777%2031.7178%208.26127C31.1929%207.73478%2030.5655%207.32162%2029.8745%207.04736C29.1834%206.7731%2028.4435%206.64359%2027.7003%206.66683H26.467C26.1554%206.68861%2025.8429%206.6383%2025.5539%206.51979C25.2648%206.40128%2025.007%206.21777%2024.8003%205.9835L23.967%205.0835C23.4626%204.53356%2022.8497%204.09413%2022.167%203.79292C21.4843%203.49172%2020.7466%203.33529%2020.0003%203.3335C19.244%203.33767%2018.4968%203.49825%2017.8055%203.80516C17.1143%204.11206%2016.494%204.55864%2015.9837%205.11683L15.167%206.01683C14.9596%206.25011%2014.7016%206.43294%2014.4127%206.55136C14.1239%206.66979%2013.8118%206.72068%2013.5003%206.70016L12.3003%206.66683C11.5478%206.63899%2010.7975%206.76506%2010.0954%207.03732C9.39323%207.30957%208.75407%207.72227%208.21701%208.25016C7.68982%208.78279%207.27964%209.41961%207.01274%2010.1199C6.74583%2010.8202%206.62808%2011.5684%206.66701%2012.3168V13.5335C6.68879%2013.8451%206.63847%2014.1576%206.51997%2014.4466C6.40146%2014.7357%206.21795%2014.9935%205.98367%2015.2002L5.08367%2016.0335C4.52739%2016.5426%204.08316%2017.1618%203.77923%2017.8519C3.47531%2018.542%203.31836%2019.2878%203.31836%2020.0418C3.31836%2020.7959%203.47531%2021.5417%203.77923%2022.2318C4.08316%2022.9218%204.52739%2023.5411%205.08367%2024.0502L5.98367%2024.8835C6.21896%2025.0893%206.40317%2025.347%206.52176%2025.6363C6.64035%2025.9255%206.69008%2026.2384%206.66701%2026.5502V27.7668C6.62767%2028.5232%206.74836%2029.2793%207.0212%2029.9858C7.29403%2030.6923%207.71287%2031.3333%208.25034%2031.8668C8.79034%2032.3736%209.42797%2032.7651%2010.1243%2033.0173C10.8206%2033.2694%2011.561%2033.377%2012.3003%2033.3335H13.517C13.8281%2033.3166%2014.1391%2033.3692%2014.4273%2033.4874C14.7156%2033.6056%2014.974%2033.7864%2015.1837%2034.0168L16.0003%2034.9168C16.5094%2035.4731%2017.1287%2035.9173%2017.8187%2036.2213C18.5088%2036.5252%2019.2546%2036.6821%2020.0087%2036.6821C20.7627%2036.6821%2021.5085%2036.5252%2022.1986%2036.2213C22.8887%2035.9173%2023.508%2035.4731%2024.017%2034.9168L24.8503%2034.0168C25.057%2033.7826%2025.3148%2033.599%2025.6039%2033.4805C25.8929%2033.362%2026.2054%2033.3117%2026.517%2033.3335H27.7503C28.5046%2033.3718%2029.2585%2033.2514%2029.9633%2032.9801C30.6682%2032.7089%2031.3083%2032.2928%2031.8423%2031.7588C32.3763%2031.2248%2032.7924%2030.5847%2033.0637%2029.8798C33.3349%2029.175%2033.4553%2028.4211%2033.417%2027.6668V26.4502C33.4025%2026.1393%2033.4561%2025.8291%2033.5741%2025.5412C33.6922%2025.2533%2033.8718%2024.9947%2034.1003%2024.7835L35.0003%2023.9668C35.5612%2023.4605%2036.0096%2022.8422%2036.3164%2022.1517C36.6233%2021.4612%2036.7819%2020.7141%2036.7819%2019.9585C36.7819%2019.2029%2036.6233%2018.4557%2036.3164%2017.7653C36.0096%2017.0748%2035.5612%2016.4565%2035.0003%2015.9502L34.8837%2016.0002ZM26.167%2017.8502L19.5003%2024.5168C19.1899%2024.8247%2018.7709%2024.9983%2018.3337%2025.0002C18.1143%2025.0014%2017.8969%2024.9594%2017.6938%2024.8764C17.4908%2024.7935%2017.3061%2024.6713%2017.1503%2024.5168L13.817%2021.1835C13.544%2020.8647%2013.4013%2020.4545%2013.4175%2020.0351C13.4337%2019.6156%2013.6076%2019.2177%2013.9044%2018.9209C14.2012%2018.6241%2014.5991%2018.4502%2015.0186%2018.434C15.438%2018.4178%2015.8482%2018.5605%2016.167%2018.8335L18.3337%2020.9835L23.817%2015.5002C24.1293%2015.1897%2024.5517%2015.0155%2024.992%2015.0155C25.4323%2015.0155%2025.8547%2015.1897%2026.167%2015.5002C26.4774%2015.8124%2026.6517%2016.2349%2026.6517%2016.6752C26.6517%2017.1155%2026.4774%2017.5379%2026.167%2017.8502Z'%20fill='%23FFCD1B'/%3e%3c/svg%3e",y2="data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.55%207.4752H24.05L19.825%203.2502C19.4875%202.9127%2018.9375%202.9127%2018.5875%203.2502C18.25%203.5877%2018.25%204.1377%2018.5875%204.4877L21.575%207.4752H9.425L12.4125%204.4877C12.75%204.1502%2012.75%203.6002%2012.4125%203.2502C12.075%202.9127%2011.525%202.9127%2011.175%203.2502L6.9625%207.4752H6.4625C5.3375%207.4752%203%207.4752%203%2010.6752C3%2011.8877%203.25%2012.6877%203.775%2013.2127C4.075%2013.5252%204.4375%2013.6877%204.825%2013.7752C5.1875%2013.8627%205.575%2013.8752%205.95%2013.8752H25.05C25.4375%2013.8752%2025.8%2013.8502%2026.15%2013.7752C27.2%2013.5252%2028%2012.7752%2028%2010.6752C28%207.4752%2025.6625%207.4752%2024.55%207.4752Z'%20fill='%23FFCD1B'/%3e%3cpath%20d='M24.3123%2015.5H6.58733C5.81233%2015.5%205.22483%2016.1875%205.34983%2016.95L6.39983%2023.375C6.74983%2025.525%207.68733%2028%2011.8498%2028H18.8623C23.0748%2028%2023.8248%2025.8875%2024.2748%2023.525L25.5373%2016.9875C25.6873%2016.2125%2025.0998%2015.5%2024.3123%2015.5ZM15.4998%2024.875C12.5748%2024.875%2010.1873%2022.4875%2010.1873%2019.5625C10.1873%2019.05%2010.6123%2018.625%2011.1248%2018.625C11.6373%2018.625%2012.0623%2019.05%2012.0623%2019.5625C12.0623%2021.4625%2013.5998%2023%2015.4998%2023C17.3998%2023%2018.9373%2021.4625%2018.9373%2019.5625C18.9373%2019.05%2019.3623%2018.625%2019.8748%2018.625C20.3873%2018.625%2020.8123%2019.05%2020.8123%2019.5625C20.8123%2022.4875%2018.4248%2024.875%2015.4998%2024.875Z'%20fill='%23FFCD1B'/%3e%3c/svg%3e",w2="data:image/svg+xml,%3csvg%20width='147'%20height='165'%20viewBox='0%200%20147%20165'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M94.0286%20164.686C125.094%20136.24%20166.045%20115.442%20135.746%2055.9754L114.867%2019.7612H31.478L10.6391%2055.9754C-19.6601%20115.442%2021.2515%20136.24%2052.3566%20164.686H94.0343H94.0286Z'%20fill='%23FFF3D5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M91.7921%20160C119.806%20134.483%20160.323%20113.343%20133%2060L113%2024H34.5L14.4997%2059C-12.823%20112.343%2026.1643%20134.483%2054.2137%20160H91.7972H91.7921Z'%20fill='url(%23paint0_linear_1225_2839)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M129.85%2045.7864L129.85%2045.7866C126.899%2048.8619%20122.722%2050.7868%20118.125%2050.7868H28.2607C23.6639%2050.7868%2019.487%2048.8619%2016.502%2045.7866L31.4785%2019.7607H73.1953H114.873H114.874L129.85%2045.7862L129.855%2045.7809C129.853%2045.7827%20129.852%2045.7846%20129.85%2045.7864Z'%20fill='%2356330D'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.1952%2019.7614H34.8485C29.4458%2019.7614%2025.042%2015.3023%2025.042%209.88072C25.042%204.45914%2029.4458%200%2034.8485%200H73.1952H111.496H111.502C116.905%200%20121.348%204.45914%20121.348%209.88072C121.348%2015.3023%20116.905%2019.7614%20111.502%2019.7614H111.496H73.1952Z'%20fill='%2356330D'/%3e%3cpath%20opacity='0.7'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.1953%2022.6093H116.712C117.977%2022.6093%20119.05%2021.5728%20119.05%2020.3029C119.05%2018.993%20117.977%2017.9565%20116.712%2017.9565H73.1953V22.6093Z'%20fill='%23FACF74'/%3e%3cpath%20opacity='0.4'%20d='M20.979%2059.3013C20.979%2059.3013%207.06579%2079.4909%2013.7634%20101.482C20.461%20123.474%2039.2612%20139.641%2058.338%20152.215C59.8661%20153.222%2062.4648%20142.4%2061.9042%20140.933C61.3435%20139.465%2040.7793%20116.504%2037.3809%2079.8116C35.5281%2059.7839%2020.9855%2059.2993%2020.9855%2059.2993L20.979%2059.3013Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M29.6402%2022.6093H116.713C117.978%2022.6093%20119.051%2021.5728%20119.051%2020.3029C119.051%2018.993%20117.978%2017.9565%20116.713%2017.9565H29.6402C28.3747%2017.9565%2027.3418%2018.993%2027.3418%2020.3029C27.3418%2021.5728%2028.3747%2022.6093%2029.6402%2022.6093Z'%20fill='%23FFBF38'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1225_2839'%20x1='73.6419'%20y1='24'%20x2='73.6419'%20y2='160'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FECB2E'/%3e%3cstop%20offset='1'%20stop-color='%23FDB10B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",L2="data:image/svg+xml,%3csvg%20width='147'%20height='165'%20viewBox='0%200%20147%20165'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M94.0286%20164.686C125.094%20136.24%20166.045%20115.442%20135.746%2055.9754L114.867%2019.7612H31.478L10.6391%2055.9754C-19.6601%20115.442%2021.2515%20136.24%2052.3566%20164.686H94.0343H94.0286Z'%20fill='%23FFF3D5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M129.85%2045.7864L129.85%2045.7866C126.899%2048.8619%20122.722%2050.7868%20118.125%2050.7868H28.2607C23.6639%2050.7868%2019.487%2048.8619%2016.502%2045.7866L31.4785%2019.7607H73.1953H114.873H114.874L129.85%2045.7862L129.855%2045.7809C129.853%2045.7827%20129.852%2045.7846%20129.85%2045.7864Z'%20fill='%2356330D'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.1952%2019.7614H34.8485C29.4458%2019.7614%2025.042%2015.3023%2025.042%209.88072C25.042%204.45914%2029.4458%200%2034.8485%200H73.1952H111.496H111.502C116.905%200%20121.348%204.45914%20121.348%209.88072C121.348%2015.3023%20116.905%2019.7614%20111.502%2019.7614H111.496H73.1952Z'%20fill='%2356330D'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.1953%2022.6093H116.712C117.977%2022.6093%20119.05%2021.5728%20119.05%2020.3029C119.05%2018.993%20117.977%2017.9565%20116.712%2017.9565H73.1953V22.6093Z'%20fill='%23FACF74'/%3e%3cpath%20opacity='0.4'%20d='M20.979%2059.3013C20.979%2059.3013%207.06579%2079.4909%2013.7634%20101.482C20.461%20123.474%2039.2612%20139.641%2058.338%20152.215C59.8661%20153.222%2062.4648%20142.4%2061.9042%20140.933C61.3435%20139.465%2040.7793%20116.504%2037.3809%2079.8116C35.5281%2059.7839%2020.9855%2059.2993%2020.9855%2059.2993L20.979%2059.3013Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M29.6402%2022.6093H116.713C117.978%2022.6093%20119.051%2021.5728%20119.051%2020.3029C119.051%2018.993%20117.978%2017.9565%20116.713%2017.9565H29.6402C28.3747%2017.9565%2027.3418%2018.993%2027.3418%2020.3029C27.3418%2021.5728%2028.3747%2022.6093%2029.6402%2022.6093Z'%20fill='%23FFBF38'/%3e%3c/svg%3e",t0=({userNm:t="",level:i=1,point:n=0,pointDay:r=0,limitPointDay:l=0})=>{const a=a2(r,l),h=a>=50?"4.1":"0";return e.jsxs(m,{bg:y.secondary[300],children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",flexFlow:"column",gap:"2rem",justifyContent:"space-between",flex:"0.6 0 16rem"},children:[e.jsxs("p",{style:b2,children:[t,"님 ",e.jsx("br",{}),"영상보고! 퀴즈풀고! ",e.jsx("br",{}),"포인트를 모아보세요."]}),e.jsxs("div",{children:[e.jsxs("span",{style:{position:"relative",left:`${a}%`,display:"inline-block",padding:"0.3rem 0.5rem",backgroundColor:"#2E3233",color:"#fff",borderRadius:"0.7rem",marginBottom:"1rem",fontSize:"1.2rem",fontWeight:500,transform:"translateX( -50% )",transition:"all 1s"},children:[r," / ",l]}),e.jsx(o2,{value:a,icon:null})]})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{style:{position:"absolute",width:"100%",left:0,top:0,height:0,height:`calc(${100-a}% + ${h}rem)`,overflow:"hidden",transition:"all .8s"},children:e.jsx("img",{src:L2,alt:""})}),e.jsx("img",{src:w2,alt:""})]})]}),e.jsxs("div",{style:{marginTop:"2.5rem"},children:[e.jsxs(N,{children:[e.jsx(p,{shadow:!0,children:e.jsx(j,{to:v[K].path,children:e.jsx(B,{children:e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("img",{src:j2,alt:""}),e.jsxs("div",{children:[e.jsx(g,{color:"#949494",weight:600,children:"현재레벨"}),e.jsxs(b,{size:20,children:["Lv. ",i]})]})]})})})}),e.jsx(p,{shadow:!0,children:e.jsx(j,{to:v[q].path,children:e.jsx(B,{children:e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("img",{src:v2,alt:""}),e.jsxs("div",{children:[e.jsx(g,{color:"#949494",weight:600,children:"포인트"}),e.jsxs(b,{size:20,children:[n,"P"]})]})]})})})})]}),e.jsx(N,{children:e.jsx(p,{shadow:!0,children:e.jsxs(j,{to:v[J].path,style:{display:"block",textAlign:"center"},children:[e.jsx("img",{src:y2,alt:"",style:{paddingRight:"2rem"}}),"포인트 상점 바로가기"]})})})]})]})};o("img")`
  width: ${({size:t})=>t||"2rem"};
  height: ${({size:t})=>t||"2rem"};
`;const b2={fontSize:"2rem",lineHeight:1.5},n0=({userInfo:t})=>e.jsx(m,{children:e.jsxs(H2,{children:[e.jsx(D,{userAgeCd:t.userAgeCd,userName:t.userNm,schoolName:t.schoolNm,grade:t.grade,image:t.userThumnail||w}),e.jsxs(P2,{to:v[Q].path,children:["회원정보",e.jsx(k2,{src:c2,alt:"Arrow Right"})]})]})}),H2=o("div")`
  padding 2rem 2.3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color:#fff;
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: 2rem;
`,k2=o("img")`
  margin-top: -2px;
`,P2=o(j)`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
  line-height: 1;
  gap: 1rem;
  color: #666;
  text-decoration: none;
`,T2=void 0;function i0({isOpen:t=!1,isClose:i,stampData:n={}}){const{imageLink:r,stampNm:l,stampDc:a}=n;return e.jsxs(d2,{isOpen:t,onClose:i,children:[e.jsx(F2,{image:T2+r}),e.jsx(b,{size:18,style:{marginBottom:"1rem",textAlign:"center"},children:l}),e.jsx(g,{size:14,color:"#9C9C9C",align:"center",children:a})]})}const F2=o("div")`
  background-image: url(${({image:t})=>t||null});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  background-color: #f5f5f6;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  margin: 0 auto 2rem;
`,s0=o("div")`
  margin-top: ${({top:t})=>e2(t)};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`,r0=o("div")`
  text-align: center;
  flex: 0 0 calc(20% - 1.6rem);

  @media (max-width: 430px) {
    flex: 0 0 calc(33.3334% - 1.4rem);
  }
`,o0=o("figure")`
  display: block;
  margin: 0 auto;
  width: 8.6rem;
  height: 8.6rem;
  background-color: #f5f5f6;
  border-radius: 1rem;
  padding: 1rem;
  background-position: center;
  background-size: 70%;
  background-image: url(${({image:t})=>t});
  background-repeat: no-repeat;
`,N2={pointList:async t=>{try{const i=await u2(t);return F(i.data).result}catch(i){const{response:n}=i;throw console.error("findPassword failed:",i),F(n.data),i}}};function B2(t){let i=parseInt(t.slice(0,4),10),n=parseInt(t.slice(4,6),10);return n-=1,n<1&&(n=12,i-=1),t=`${i}${String(n).padStart(2,"0")}`,t}function M2(t){let i=parseInt(t.slice(0,4),10),n=parseInt(t.slice(4,6),10);return n+=1,n>12&&(n=1,i+=1),t=`${i}${String(n).padStart(2,"0")}`,t}o("ul")``;const S2=o("li")`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-top: 1px solid #f1f1f1;
`,M=o("div")`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`,Z=o("div")`
  padding: 50% 2rem;
  text-align: center;
  color: #707070;
`,E=o("div")`
  position: relative;
  padding: 2.4rem 2rem;
  font-weight: 600;
  text-align: center;
`,O=`
position: absolute;   
top:50%;
transform:translateY(-50%);
padding: 1rem;
`,R2=o("button")`
  ${O}
  left:1rem;
`,I2=o("button")`
  ${O}
  right:1rem;
`,$2=o("li")`
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`,A2=o("div")`
  display: flex;
  align-items: center;
`,D2=o("p")`
  position: relative;
  padding-right: 2.5rem;
  padding-left: 0.5rem;
  margin-right: 2.5rem;
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: 2.3rem;
    background-color: #e3e3e3;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`,_2=o("span")`
  display: inline-block;
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({image:t})=>t});
  background-color: #ffcd1b;
`;function Z2({pointData:t,date:i="",handleChangePointHistoryType:n,handleChangePrevPointHistory:r,handleChangeNextPointHistory:l}){const a=s=>e.jsxs(e.Fragment,{children:[e.jsx($,{color:"#FFCD1B",weight:500,children:s>0?`+ ${s}`:s<0?`${s}`:"0"}),e.jsx(g,{size:14,color:"#707070",align:"center",children:s>=0?"적립":"사용"})]});function h(s){const c=s.slice(0,4),x=s.slice(4);return`${c}년 ${x}월`}return e.jsxs(m,{paddingTop:0,children:[e.jsx(_,{onClick:n,tabList:g2,style:{marginTop:0}}),e.jsxs(p,{paddingTop:0,paddingRt:0,paddingBt:0,paddingLf:0,children:[e.jsxs(E,{children:[e.jsx(R2,{type:"button",onClick:r,children:e.jsx("img",{src:p2,alt:"이전 달"})}),h(i),e.jsx(I2,{type:"button",onClick:l,children:e.jsx("img",{src:x2,alt:"다음 달"})})]}),t.length?e.jsx("ul",{children:t.map((s,c)=>e.jsxs(S2,{children:[e.jsxs(M,{children:[e.jsx(g,{weight:600,style:{lineHeight:1.3},children:s.pointDc}),e.jsx(g,{size:14,color:"#707070",children:s.createDt.split(" ")[0]})]}),e.jsx(M,{style:{textAlign:"center",flex:"0 0 5rem"},children:a(s.point)})]},c))}):e.jsx(Z,{children:"이용 내역이 없습니다."})]})]})}function E2({rankingData:t,isRankType:i,handleChangeRankHistory:n,pageIndex:r,pagination:l,handlePrevPage:a,handleNextPage:h}){return e.jsxs(m,{paddingTop:0,children:[e.jsx(_,{onClick:n,tabList:m2,style:{marginTop:0}}),e.jsxs(p,{children:[r!==l.totalPageCount&&e.jsxs(E,{children:[r-1>=l.firstPageNo&&e.jsx(PrevButton,{type:"button",onClick:a,children:e.jsx("img",{src:iconPrev,alt:"이전 페이지"})}),r+1<=l.lastPageNo&&e.jsx(NextButton,{type:"button",onClick:h,children:e.jsx("img",{src:iconNext,alt:"다음 페이지"})})]}),t.length?e.jsx("ul",{children:t.map((s,c)=>e.jsxs($2,{children:[e.jsxs(A2,{children:[e.jsx(D2,{children:c+1}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",wordBreak:"break-word"},children:[e.jsx(_2,{image:w}),i?s.schoolNm:s.userId]})]}),e.jsxs(g,{color:"#3C3C3C",weight:500,children:[e.jsx($,{color:"#FFCD1B",size:18,weight:600,children:s.pointScore}),"점"]})]},c))}):e.jsx(Z,{children:"랭킹 내역이 없습니다."})]})]})}const S=y.primary[700],R=y.secondary[600];function l0({userData:t={}}){const{userNm:i,schoolNm:n,grade:r,point:l,accruedPoint:a}={...l2,...t},[h,s]=t2(N2.pointList),[c,x]=f.useState(n2),[H,k]=f.useState({}),[z,P]=f.useState({});f.useEffect(()=>{U()},[c]);const U=f.useCallback(async()=>{if(!h)try{const d=await s({...c});P(d.data),k(d.pagination)}catch(d){console.error(d)}},[c]),V=(d="all")=>{x(C=>({...C,pageIndex:1,searchPointTy:d}))},G=()=>{const{searchDt:d}=c,C=B2(d);x(u=>({...u,pageIndex:1,searchDt:C}))},W=()=>{const{searchDt:d}=c,C=M2(d);x(u=>({...u,pageIndex:1,searchDt:C}))},X=async()=>{const{currentPageNo:d,lastPageNo:C}=H;if(console.log(d,"currentPageNo"),console.log(C,"lastPageNo"),d>=C||h)return;const u=H.currentPageNo+1,T=await s({...c,pageIndex:u});P(L=>[...L,...T.data]),k(L=>({...L,...T.pagination}))};return e.jsxs(h2,{loadMore:X,isLoading:h,children:[e.jsx(C2,{backButton:!0,title:"포인트",subMenu:!1,border:0,bgColor:S}),e.jsxs(A,{bg:S,children:[e.jsx(m,{children:e.jsxs(p,{children:[e.jsx(D,{userName:i,schoolName:n,grade:r,image:t.userThumnail||w}),e.jsxs(p,{bgColor:R,style:I,children:[e.jsx("p",{children:"보유 포인트"}),e.jsxs("p",{children:[e.jsx("b",{children:l})," P"]})]}),e.jsxs(p,{style:{...I,border:`1px solid ${R}`},children:[e.jsx("p",{children:"누적 포인트"}),e.jsxs("p",{children:[e.jsx("b",{children:a})," P"]})]})]})}),e.jsx(Z2,{pointData:z,date:c.searchDt,handleChangePointHistoryType:V,handleChangePrevPointHistory:G,handleChangeNextPointHistory:W})]})]})}const I={marginTop:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem"},O2=y.primary[700];function a0({rankingData:t=[],rankType:i=!1,handleChangeRankHistory:n,pageIndex:r,pagination:l,handlePrevPage:a,handleNextPage:h}){const s=i==="school";return e.jsxs(A,{bg:O2,children:[e.jsx(f2,{rankDatas:t,isRankType:s}),e.jsx(E2,{rankingData:t,isRankType:s,handleChangeRankHistory:n,pageIndex:r,pagination:l,handlePrevPage:a,handleNextPage:h})]})}export{n0 as P,a0 as R,i0 as S,t0 as a,l0 as b,s0 as c,r0 as d,o0 as e};
