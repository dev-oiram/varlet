import{A as k}from"./index.75c0eaba.js";import{I as S}from"./index.e6af7bd9.js";import{A as R}from"./AppType.14d8c70c.js";import{R as w}from"./index.20a388b7.js";import{S as A}from"./index.70f5edaf.js";import{M as x}from"./index.68bdb9ed.js";import{B as b}from"./index.b0f58bbc.js";import{C as B}from"./index.88213fcd.js";import{u as z,a as F,_ as N,b as I,c as U,w as V}from"./en-US.f7db19e4.js";import{_ as Y}from"./elevation.357f91b7.js";import{r as D,d as i,e as M,o as m,c as g,h as e,w as o,F as C,S as O,U as G,l,t as n,a as T,j as q,i as H,k as J}from"./vendor.cfbfc887.js";import"./index.4f8cd6be.js";import"./zIndex.a6f89f9c.js";import"./components.190b2d1b.js";import"./lock.301c02b4.js";var K={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},P={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:j,use:Q,pack:d,packs:vt,merge:kt}=z(),W=a=>{U(a),Q(a)};F("zh-CN",N);F("en-US",I);j("zh-CN",K);j("en-US",P);const X={name:"AppBarExample",directives:{Ripple:w},components:{[k.name]:k,[S.name]:S,[x.name]:x,[b.name]:b,[B.name]:B,AppType:R},setup(){const a=D(!1),r=D([]),_=()=>{A({content:d.value.search,position:"top"})},t=()=>{A({content:d.value.goBack,position:"top"})},h=()=>{r.value=[{label:d.value.options1,value:"menu1"},{label:d.value.options2,value:"menu2"}],a.value=!0};return V(v=>{W(v),a.value=!1}),{offsetY:a,menuList:r,pack:d,searchData:_,goBack:t,changeOffset:h}}},Z=a=>(O("data-v-a35a7244"),a=a(),G(),a),$={class:"menu-list"},tt=Z(()=>T("div",{class:"space"},null,-1));function et(a,r,_,t,h,v){const s=i("app-type"),c=i("var-app-bar"),u=i("var-icon"),f=i("var-button"),y=i("var-cell"),L=i("var-menu"),E=M("ripple");return m(),g(C,null,[e(s,null,{default:o(()=>[l(n(t.pack.basicAppBar),1)]),_:1}),e(c,{title:t.pack.title},null,8,["title"]),e(s,null,{default:o(()=>[l(n(t.pack.customStyle),1)]),_:1}),e(c,{title:t.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),e(s,null,{default:o(()=>[l(n(t.pack.addSlotsAtTitle),1)]),_:1}),e(c,null,{default:o(()=>[l(n(t.pack.addTheTitleFromTheSlot),1)]),_:1}),e(s,null,{default:o(()=>[l(n(t.pack.addLeftSlot),1)]),_:1}),e(c,{title:t.pack.title,"title-position":"center"},{left:o(()=>[e(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:t.goBack},{default:o(()=>[e(u,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),e(s,null,{default:o(()=>[l(n(t.pack.addRightSlot),1)]),_:1}),e(c,{title:t.pack.title},{right:o(()=>[e(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:t.searchData},{default:o(()=>[e(u,{name:"magnify",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),e(s,null,{default:o(()=>[l(n(t.pack.addLeftAndRightSlot),1)]),_:1}),e(c,{title:t.pack.title},{left:o(()=>[e(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:t.goBack},{default:o(()=>[e(u,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),right:o(()=>[e(L,{"offset-y":38,"offset-x":-45,show:t.offsetY,"onUpdate:show":r[0]||(r[0]=p=>t.offsetY=p)},{menu:o(()=>[T("div",$,[(m(!0),g(C,null,q(t.menuList,p=>H((m(),J(y,{class:"menu-cell",key:p.value},{default:o(()=>[l(n(p.label),1)]),_:2},1536)),[[E]])),128))])]),default:o(()=>[e(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:t.changeOffset},{default:o(()=>[e(u,{name:"menu",size:24})]),_:1},8,["onClick"])]),_:1},8,["show"])]),_:1},8,["title"]),tt],64)}var St=Y(X,[["render",et],["__scopeId","data-v-a35a7244"]]);export{St as default};
