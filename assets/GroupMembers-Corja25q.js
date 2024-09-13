import{_ as g,r as p,d as x,o as a,c,f as t,w as m,g as y,F as d,h as _,a as S,t as l,p as b,i as k,b as w}from"./index-Dode05HM.js";import{_ as E}from"./user-B9KGWejP.js";import{H as I,G as C}from"./GoTop-DJmBssGU.js";const o=r=>(b("data-v-22fefcc2"),r=r(),k(),r),j={class:"container"},F={class:"nav"},V=o(()=>t("li",{class:"nav-li-header"},[t("a",null,"课题组成员")],-1)),B={class:"nav-li"},D=o(()=>t("div",{style:{float:"right",opacity:"0.4"}},"> ",-1)),N={class:"nav-li"},$=o(()=>t("div",{style:{float:"right",opacity:"0.4"}},">",-1)),A={class:"nav-li"},G=o(()=>t("div",{style:{float:"right",opacity:"0.4"}},"> ",-1)),z={class:"span9"},H={class:"wrapper"},O=o(()=>t("div",{class:"header"},[t("span",{id:"Mentor"},"导师介绍"),t("hr",{class:"hr-title"})],-1)),P={class:"item-Mentor"},T=S('<img class="userimg" src="'+E+'" alt="" data-v-22fefcc2><p class="item-Mentor1" data-v-22fefcc2>周新宇，男，1987年生，博士，江西师范大学副教授（自2021年1月起为校聘教授），博士生导师，江西修水人，现任计算机信息工程学院人工智能系主任。 2014年毕业于武汉大学计算机软件与理论专业获工学博士学位，2008年和2011年毕业于江西理工大学计算机科学与技术专业分别获工学学士和硕士学位。 目前主要从事智能优化算法设计及应用方面的研究，主持了国家自然科学基金项目3项、江西省自然科学基金项目3项、国家重点实验室开放基金项目1项、江西省教育厅科技计划项目1项； 以第一作者和通讯作者发表了论文近40篇，含中国计算机学会CCF推荐的期刊和会议论文20余篇，1篇中文期刊论文被评为“领跑者5000——中国精品科技期刊顶尖学术论文”，2篇中文期刊论文被评为“三高论文”、2篇英文会议论文获“最佳论文奖”； 担任了多个权威期刊和会议的审稿人，如：Information Sciences、计算机学报、自动化学报、IEEE CEC等。指导研究生多次获批江西省研究生创新基金项目、荣获研究生国家奖学金，发表了相关的高水平学术论文等。 </p><br data-v-22fefcc2><div class="email" data-v-22fefcc2>邮箱：<span style="color:#80A4F3;" data-v-22fefcc2>xyzhou@jxnu.edu.cn</span> 或 <span style="color:#80A4F3;" data-v-22fefcc2>xyzhou@whu.edu.cn</span></div><div class="Mentor-header" data-v-22fefcc2><div data-v-22fefcc2>教育和工作经历</div></div><div class="item-Mentor" data-v-22fefcc2><ul data-v-22fefcc2><li data-v-22fefcc2>2021.01-至今，江西师范大学，校聘教授</li><li data-v-22fefcc2>2019.12-2020.12， <a class="Mentor-a" href="https://www.surrey.ac.uk/" data-v-22fefcc2>University of Surrey</a>，国家公派访问学者，导师：<a class="Mentor-a" href="https://www.surrey.ac.uk/people/yaochu-jin" data-v-22fefcc2>Yaochu Jin</a> 教授</li><li data-v-22fefcc2>2017.12-至今，江西师范大学，副教授</li><li data-v-22fefcc2>2014.07-2017.11，江西师范大学，讲师</li><li data-v-22fefcc2>2011.09-2014.06，武汉大学，博士</li><li data-v-22fefcc2>2008.09-2011.06，江西理工大学，硕士</li><li data-v-22fefcc2>2004.09-2008.06，江西理工大学，学士</li></ul></div><div class="Mentor-header" data-v-22fefcc2><div data-v-22fefcc2>学术服务</div></div>',7),J={class:"item-Mentor"},L={class:"wrapper"},U=o(()=>t("div",{class:"header"},[t("span",{id:"now"},"在校组员"),t("hr",{class:"hr-title"})],-1)),Y={class:"item"},q=["id"],K={class:"content"},Q={class:"student"},R=["src"],W={class:"studentname"},X=o(()=>t("br",null,null,-1)),Z={class:"wrapper"},tt=o(()=>t("div",{class:"header"},[t("span",{id:"pass"},"已毕业组员"),t("hr",{class:"hr-title"})],-1)),st={class:"item"},et=["id"],at={class:"content"},ct={class:"student"},ot=["src"],nt={class:"studentname"},it={class:"studentplace"},lt=o(()=>t("br",null,null,-1)),dt={__name:"MenbersMain",setup(r){const v=p({}),u=p([]),h=p([]);async function M(i){try{return await(await fetch(i)).json()}catch(e){return console.error("Error fetching data:",e),{}}}x(async()=>{const i=await M("studentinfo.json");v.value=i,h.value=Object.keys(i).sort((s,n)=>n-s).map(s=>({year:s,students:v.value[s]}));const e=await M("others.json");u.value=e});const f=i=>{let e=document.getElementById(i);e&&e.scrollIntoView()};return(i,e)=>(a(),c("div",j,[t("ul",F,[V,t("li",B,[t("a",{onClick:e[0]||(e[0]=m(s=>f("Mentor"),["prevent"]))},[y("导师介绍"),D])]),t("li",N,[t("a",{onClick:e[1]||(e[1]=m(s=>f("now"),["prevent"]))},[y(" 在校组员"),$])]),t("li",A,[t("a",{style:{"border-radius":"0 0  15px 15px"},onClick:e[2]||(e[2]=m(s=>f("pass"),["prevent"]))},[y("已毕业组员"),G])])]),t("div",z,[t("div",H,[O,t("div",P,[T,t("div",J,[t("ul",null,[(a(!0),c(d,null,_(u.value.AcademicServices,s=>(a(),c("li",null,l(s.content),1))),256))])])])]),t("div",L,[U,t("div",Y,[(a(!0),c(d,null,_(h.value.slice(0,3),s=>(a(),c("div",null,[t("li",{class:"grade",id:s.year},l(s.year),9,q),t("div",K,[(a(!0),c(d,null,_(s.students,n=>(a(),c("div",Q,[t("img",{src:n.photo,alt:"Student Photo"},null,8,R),t("div",W,l(n.name),1),X]))),256))])]))),256))])]),t("div",Z,[tt,t("div",st,[(a(!0),c(d,null,_(h.value.slice(3),s=>(a(),c("div",null,[t("li",{class:"grade",id:s.year},l(s.year),9,et),t("div",at,[(a(!0),c(d,null,_(s.students,n=>(a(),c("div",ct,[t("img",{src:n.photo,alt:"Student Photo"},null,8,ot),t("div",nt,l(n.name),1),t("div",it,l(n.workplace),1),lt]))),256))])]))),256))])])])]))}},rt=g(dt,[["__scopeId","data-v-22fefcc2"]]),ht={__name:"GroupMembers",setup(r){return(v,u)=>(a(),c(d,null,[w(I),w(rt),w(C)],64))}};export{ht as default};
