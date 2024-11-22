import{_ as M,r as m,d as g,o as a,c as o,f as e,w as b,g as y,F as d,h as _,a as x,t as c,p as S,i as k,b as f}from"./index-B51mwNBa.js";import{_ as E}from"./user_2024-DNU2Sx5G.js";import{H as I,G as C}from"./GoTop-D58yyGml.js";const n=r=>(S("data-v-08e86be4"),r=r(),k(),r),j={class:"container"},F={class:"nav"},V=n(()=>e("li",{class:"nav-li-header"},[e("a",null,"课题组成员")],-1)),B={class:"nav-li"},D=n(()=>e("div",{style:{float:"right",opacity:"0.4"}},"> ",-1)),N={class:"nav-li"},$=n(()=>e("div",{style:{float:"right",opacity:"0.4"}},">",-1)),A={class:"nav-li"},G=n(()=>e("div",{style:{float:"right",opacity:"0.4"}},"> ",-1)),z={class:"span9"},H={class:"wrapper"},O=n(()=>e("div",{class:"header"},[e("span",{id:"Mentor"},"导师介绍"),e("hr",{class:"hr-title"})],-1)),P={class:"item-Mentor"},T=x('<img class="userimg" src="'+E+'" alt="" data-v-08e86be4><p class="item-Mentor1" data-v-08e86be4>周新宇，男，1987年生，博士，江西师范大学副教授（自2021年1月起为校聘教授），博士生导师，江西修水人，现任计算机信息工程学院人工智能系主任。2014年毕业于武汉大学计算机软件与理论专业获工学博士学位，2008年和2011年毕业于江西理工大学计算机科学与技术专业分别获工学学士和硕士学位。目前主要从事智能优化算法设计及应用方面的研究，主持了国家自然科学基金项目3项、江西省自然科学基金项目3项、国家重点实验室开放基金项目1项、江西省教育厅科技计划项目1项。以第一作者和通讯作者发表了论文近40篇，含中国计算机学会CCF推荐的期刊和会议论文20余篇，1篇中文期刊论文被评为“领跑者5000——中国精品科技期刊顶尖学术论文”，2篇中文期刊论文被评为“三高论文”、2篇英文会议论文获“最佳论文奖”。担任了多个权威期刊和会议的审稿人，如 Information Sciences、计算机学报、自动化学报、IEEE CEC 等。指导研究生多次获批江西省研究生创新基金项目、荣获研究生国家奖学金，发表了相关的高水平学术论文等。 </p><br data-v-08e86be4><div class="email" data-v-08e86be4>邮箱：<span style="color:#80A4F3;" data-v-08e86be4>xyzhou@jxnu.edu.cn</span> 或 <span style="color:#80A4F3;" data-v-08e86be4>xyzhou@whu.edu.cn</span></div><div class="Mentor-header" data-v-08e86be4><div data-v-08e86be4>教育和工作经历</div></div><div class="item-Mentor" data-v-08e86be4><ul data-v-08e86be4><li data-v-08e86be4>2021.01-至今，江西师范大学，校聘教授</li><li data-v-08e86be4>2019.12-2020.12， <a class="Mentor-a" href="https://www.surrey.ac.uk/" data-v-08e86be4>University of Surrey</a>，国家公派访问学者，导师：<a class="Mentor-a" href="https://www.surrey.ac.uk/people/yaochu-jin" data-v-08e86be4>Yaochu Jin</a> 教授</li><li data-v-08e86be4>2017.12-至今，江西师范大学，副教授</li><li data-v-08e86be4>2014.07-2017.11，江西师范大学，讲师</li><li data-v-08e86be4>2011.09-2014.06，武汉大学，博士</li><li data-v-08e86be4>2008.09-2011.06，江西理工大学，硕士</li><li data-v-08e86be4>2004.09-2008.06，江西理工大学，学士</li></ul></div><div class="Mentor-header" data-v-08e86be4><div data-v-08e86be4>学术服务</div></div>',7),J={class:"item-Mentor"},L={class:"wrapper"},U=n(()=>e("div",{class:"header"},[e("span",{id:"now"},"在校成员"),e("hr",{class:"hr-title"})],-1)),Y={class:"item"},q=["id"],K={class:"content"},Q={class:"student"},R=["src"],W={class:"studentname"},X=n(()=>e("br",null,null,-1)),Z={class:"wrapper"},ee=n(()=>e("div",{class:"header"},[e("span",{id:"pass"},"已毕业成员"),e("hr",{class:"hr-title"})],-1)),te={class:"item"},se=["id"],ae={class:"content"},oe={class:"student"},ne=["src"],ie={class:"studentname"},le={class:"studentplace"},ce=n(()=>e("br",null,null,-1)),de={__name:"MenbersMain",setup(r){const v=m({}),u=m([]),h=m([]);async function w(l){try{return await(await fetch(l)).json()}catch(s){return console.error("Error fetching data:",s),{}}}g(async()=>{const l=await w("studentinfo.json");v.value=l,h.value=Object.keys(l).sort((t,i)=>i-t).map(t=>({year:t,students:v.value[t]}));const s=await w("others.json");u.value=s});const p=l=>{let s=document.getElementById(l);s&&s.scrollIntoView()};return(l,s)=>(a(),o("div",j,[e("ul",F,[V,e("li",B,[e("a",{onClick:s[0]||(s[0]=b(t=>p("Mentor"),["prevent"]))},[y("导师介绍"),D])]),e("li",N,[e("a",{onClick:s[1]||(s[1]=b(t=>p("now"),["prevent"]))},[y(" 在校成员"),$])]),e("li",A,[e("a",{style:{"border-radius":"0 0  15px 15px"},onClick:s[2]||(s[2]=b(t=>p("pass"),["prevent"]))},[y("已毕业成员"),G])])]),e("div",z,[e("div",H,[O,e("div",P,[T,e("div",J,[e("ul",null,[(a(!0),o(d,null,_(u.value.AcademicServices,t=>(a(),o("li",null,c(t.content),1))),256))])])])]),e("div",L,[U,e("div",Y,[(a(!0),o(d,null,_(h.value.slice(0,3),t=>(a(),o("div",null,[e("li",{class:"grade",id:t.year},c(t.year),9,q),e("div",K,[(a(!0),o(d,null,_(t.students,i=>(a(),o("div",Q,[e("img",{src:i.photo,alt:"Student Photo"},null,8,R),e("div",W,c(i.name),1),X]))),256))])]))),256))])]),e("div",Z,[ee,e("div",te,[(a(!0),o(d,null,_(h.value.slice(3),t=>(a(),o("div",null,[e("li",{class:"grade",id:t.year},c(t.year),9,se),e("div",ae,[(a(!0),o(d,null,_(t.students,i=>(a(),o("div",oe,[e("img",{src:i.photo,alt:"Student Photo"},null,8,ne),e("div",ie,c(i.name),1),e("div",le,c(i.workplace),1),ce]))),256))])]))),256))])])])]))}},re=M(de,[["__scopeId","data-v-08e86be4"]]),he={__name:"GroupMembers",setup(r){return(v,u)=>(a(),o(d,null,[f(I),f(re),f(C)],64))}};export{he as default};
