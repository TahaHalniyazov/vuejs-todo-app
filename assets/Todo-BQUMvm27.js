import{_ as S,h as p,i as V,j as h,k,o as _,c as v,b as e,f as I,l as d,v as m,m as U,n as b,F as T,q as w,s as g,t as M,p as C,g as N}from"./index-BxkcSQu4.js";const l=i=>(C("data-v-59366b32"),i=i(),N(),i),A={class:"todo-app"},B={class:"greeting"},D={class:"title"},$={class:"create-todo"},F=l(()=>e("h4",null,"Что у вас в списке дел?",-1)),J=l(()=>e("h4",null,"Выберите категорию",-1)),O={class:"options"},j=l(()=>e("span",{class:"bubble business"},null,-1)),q=l(()=>e("div",null,"Работа",-1)),z=l(()=>e("span",{class:"bubble personal"},null,-1)),E=l(()=>e("div",null,"Личное",-1)),L=l(()=>e("input",{type:"submit",value:"Добавить задачу"},null,-1)),R={class:"todo-list"},G=l(()=>e("h3",null,"Список дел",-1)),H={class:"list",id:"todo-list"},K=["onUpdate:modelValue"],P={class:"todo-content"},Q=["onUpdate:modelValue"],W={class:"actions"},X=["onClick"],Y={__name:"Todo",setup(i){const n=p([]),u=p(""),c=p(""),a=p(null),y=V(()=>n.value.sort((s,o)=>s.createdAt-o.createdAt));h(u,s=>{localStorage.setItem("name",s)}),h(n,s=>{localStorage.setItem("todos",JSON.stringify(s))},{deep:!0});const f=()=>{c.value.trim()===""||a.value===null||n.value.push({content:c.value,category:a.value,done:!1,editable:!1,createdAt:new Date().getTime()})},x=s=>{n.value=n.value.filter(o=>o!==s)};return k(()=>{u.value=localStorage.getItem("name")||"",n.value=JSON.parse(localStorage.getItem("todos"))||[]}),(s,o)=>(_(),v("main",A,[e("section",B,[e("h2",D,[I(" Здравствуй, "),d(e("input",{type:"text",id:"name",placeholder:"введите имя","onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t)},null,512),[[m,u.value]])])]),e("section",$,[e("form",{id:"new-todo-form",onSubmit:U(f,["prevent"])},[F,d(e("input",{type:"text",name:"content",id:"content",placeholder:"например: сходить в кино","onUpdate:modelValue":o[1]||(o[1]=t=>c.value=t)},null,512),[[m,c.value]]),J,e("div",O,[e("label",null,[d(e("input",{type:"radio",name:"category",id:"category1",value:"business","onUpdate:modelValue":o[2]||(o[2]=t=>a.value=t)},null,512),[[b,a.value]]),j,q]),e("label",null,[d(e("input",{type:"radio",name:"category",id:"category2",value:"personal","onUpdate:modelValue":o[3]||(o[3]=t=>a.value=t)},null,512),[[b,a.value]]),z,E])]),L],32)]),e("section",R,[G,e("div",H,[(_(!0),v(T,null,w(y.value,t=>(_(),v("div",{key:t.id,class:g(`todo-item ${t.done&&"done"}`)},[e("label",null,[d(e("input",{type:"checkbox","onUpdate:modelValue":r=>t.done=r},null,8,K),[[M,t.done]]),e("span",{class:g(`bubble ${t.category=="business"?"business":"personal"}`)},null,2)]),e("div",P,[d(e("input",{type:"text","onUpdate:modelValue":r=>t.content=r},null,8,Q),[[m,t.content]])]),e("div",W,[e("button",{class:"delete",onClick:r=>x(t)},"Delete",8,X)])],2))),128))])])]))}},ee=S(Y,[["__scopeId","data-v-59366b32"]]);export{ee as default};
