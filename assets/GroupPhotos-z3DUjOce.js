import{_ as u,r as h,d as v,j as f,o as e,c as a,f as s,k as m,F as i,h as w,t as y,p as D,i as g,b as n}from"./index-D7svCpwk.js";import{H as k,G as x}from"./GoTop-B4FZeBCu.js";const d=t=>(D("data-v-f2919c12"),t=t(),g(),t),I={class:"content"},S={class:"area"},j={class:"wrapper"},B=d(()=>s("div",{class:"header"},[s("span",null,"照片墙"),s("hr")],-1)),G={class:"item"},P=["src","alt"],E=d(()=>s("div",null,null,-1)),F={__name:"Photos",setup(t){const c=h([]);async function _(){try{const l=await(await fetch("photos.json")).json();c.value=l}catch(r){console.error("Error fetching data:",r)}}return v(async()=>{await _()}),(r,l)=>{const p=f("viewer");return e(),a(i,null,[s("div",I,[s("span",S,[s("div",j,[B,m((e(),a("div",G,[(e(!0),a(i,null,w(c.value,o=>(e(),a("span",{key:o.title},[s("img",{src:o.src,alt:o.title},null,8,P),s("p",null,y(o.title),1)]))),128))])),[[p]])])])]),E],64)}}},H=u(F,[["__scopeId","data-v-f2919c12"]]),b={__name:"GroupPhotos",setup(t){return(c,_)=>(e(),a(i,null,[n(k),n(H),n(x)],64))}};export{b as default};
