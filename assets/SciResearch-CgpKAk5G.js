import{H as M,G as x}from"./GoTop-ClMYkwX0.js";import{_ as H,r as C,d as I,e as w,o as r,c as l,f as t,w as h,g as i,F as d,h as v,u as S,t as c,p as T,i as j,b as y}from"./index-DAhLUWlJ.js";const n=a=>(T("data-v-c62352b6"),a=a(),j(),a),L={class:"container"},P={class:"nav"},$=n(()=>t("li",{class:"nav-li-header"},[t("a",null," 研究成果 ")],-1)),B={class:"nav-li"},D=n(()=>t("div",{style:{float:"right",opacity:"0.4"}},">",-1)),E={class:"nav-li"},J=n(()=>t("div",{style:{float:"right",opacity:"0.4"}},">",-1)),R={class:"nav-li"},V=n(()=>t("div",{style:{float:"right",opacity:"0.4"}},">",-1)),N={class:"nav-li"},F=n(()=>t("div",{style:{float:"right",opacity:"0.4"}},">",-1)),G={class:"span9"},A={class:"wrapper"},O=n(()=>t("div",{class:"header"},[t("span",{id:"SciResearch"},"科研项目情况"),t("hr",{class:"hr-title"})],-1)),q={class:"item"},z={class:"wrapper"},K=n(()=>t("div",{class:"header"},[t("span",{id:"honor"},"获奖情况"),t("hr",{class:"hr-title"})],-1)),Q={class:"item"},U={class:"wrapper"},W=n(()=>t("div",{class:"header"},[t("span",{id:"Journal papers"},"期刊论文"),t("hr",{class:"hr-title"})],-1)),X={class:"item"},Y={class:"Journalpapers"},Z=["innerHTML"],tt=["href"],st=n(()=>t("br",null,null,-1)),et=n(()=>t("br",null,null,-1)),ot={class:"wrapper"},nt=n(()=>t("div",{class:"header"},[t("span",{id:"Conference papers"},"会议论文"),t("hr",{class:"hr-title"})],-1)),rt={class:"item"},lt={class:"Conferencepapers"},it=["innerHTML"],ct=["href"],at=n(()=>t("br",null,null,-1)),dt=n(()=>t("br",null,null,-1)),ut={__name:"ScienceMain",setup(a){let p=C([]),f=C([]),m=C([]);async function g(s){try{return await(await fetch(s)).json()}catch(e){return console.error("Error fetching data:",e),{}}}const u=s=>{let e=s.replace(/\，/g,",");return e=e.replace(/\。/g,"."),e};I(async()=>{const s=await g("userinfo.json");p.value=s.Journalpapers||[],f.value=s.Conferencepapers||[];const e=await g("others.json");m.value=e});const b=w(()=>p.value.map(s=>({...s,author:u(s.Cauthor||s.author),title:s.Ctitle||s.title,source:u(s.Csource||s.source),url:s.url,description:s.Cdescription||s.description}))),k=w(()=>f.value.map(s=>({...s,author:u(s.Cauthor||s.author),title:s.Ctitle||s.title,source:u(s.Csource||s.source),url:s.url,description:s.Cdescription||s.description}))),_=s=>{let e=document.getElementById(s);e&&e.scrollIntoView()};return(s,e)=>(r(),l("div",L,[t("ul",P,[$,t("li",B,[t("a",{onClick:e[0]||(e[0]=h(o=>_("SciResearch"),["prevent"]))},[i("科研项目情况"),D])]),t("li",E,[t("a",{onClick:e[1]||(e[1]=h(o=>_("honor"),["prevent"]))},[i("获奖情况"),J])]),t("li",R,[t("a",{onClick:e[2]||(e[2]=h(o=>_("Journal papers"),["prevent"]))},[i("期刊论文"),V])]),t("li",N,[t("a",{style:{"border-radius":"0 0  15px 15px"},onClick:e[3]||(e[3]=h(o=>_("Conference papers"),["prevent"]))},[i("会议论文"),F])])]),t("div",G,[t("div",A,[O,t("div",q,[t("ul",null,[(r(!0),l(d,null,v(S(m).SciResProjcts,o=>(r(),l("li",null,c(o.content),1))),256))])])]),t("div",z,[K,t("div",Q,[t("ul",null,[(r(!0),l(d,null,v(S(m).Awards,o=>(r(),l("li",null,c(o.content),1))),256))])])]),t("div",U,[W,t("div",X,[t("ul",null,[t("div",Y,[(r(!0),l(d,null,v(b.value,o=>(r(),l("li",null,[t("span",{innerHTML:o.author},null,8,Z),i(". "),t("a",{href:o.url,target:"_blank"},c(o.title),9,tt),i(". "+c(o.source)+" "+c(o.description)+" ",1),st,et]))),256))])])])]),t("div",ot,[nt,t("div",rt,[t("ul",null,[t("div",lt,[(r(!0),l(d,null,v(k.value,o=>(r(),l("li",null,[t("span",{innerHTML:o.author},null,8,it),i(". "),t("a",{href:o.url,target:"_blank"},c(o.title),9,ct),i(". "+c(o.source)+" "+c(o.description)+" ",1),at,dt]))),256))])])])])])]))}},_t=H(ut,[["__scopeId","data-v-c62352b6"]]),pt={__name:"SciResearch",setup(a){return(p,f)=>(r(),l(d,null,[y(M),y(_t),y(x)],64))}};export{pt as default};
