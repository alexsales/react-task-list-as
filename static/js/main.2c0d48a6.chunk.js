(this["webpackJsonpmqbiz-tasks-as"]=this["webpackJsonpmqbiz-tasks-as"]||[]).push([[0],[,,,function(e,t,a){e.exports={Modal:"Modal_Modal__3YE2S",modalContainer:"Modal_modalContainer__2zbg_"}},,,function(e,t,a){e.exports={TaskList:"TaskList_TaskList__25TKG"}},function(e,t,a){},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),c=a.n(r),l=(a(13),a(1)),o=a(3),u=a.n(o),s=a(2),m=Object(n.createContext)({taskList:[[],[],[]],isModalOpen:!1,addTask:function(){},toggleModal:function(){},displayPriority:"high"}),d=function(e){var t=sessionStorage.getItem("taskList"),a=[[],[],[]];t&&(a=JSON.parse(t));var r=Object(n.useState)(a),c=Object(l.a)(r,2),o=c[0],u=c[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),b=f[0],p=f[1],k=Object(n.useState)("high"),E=Object(l.a)(k,2),g=E[0],h=E[1],v=function(e){u((function(t){var a=Object(s.a)(t);switch(e.priority){case"high":a[0]=[].concat(Object(s.a)(a[0]),[e.newTask]);break;case"medium":case"default":a[1]=[].concat(Object(s.a)(a[1]),[e.newTask]);break;case"low":a[2]=[].concat(Object(s.a)(a[2]),[e.newTask]);break;default:return a}return sessionStorage.setItem("taskList",JSON.stringify(a)),a}))},O=function(e,t){u((function(a){var n=Object(s.a)(a);switch(t){case"high":n[0]=Object(s.a)(n[0]),n[0]=n[0].slice(0,e).concat(n[0].slice(e+1,n[0].length));break;case"medium":n[1]=Object(s.a)(n[1]),n[1]=n[1].slice(0,e).concat(n[1].slice(e+1,n[1].length));break;case"low":n[2]=Object(s.a)(n[2]),n[2]=n[2].slice(0,e).concat(n[2].slice(e+1,n[2].length));break;default:return n}return sessionStorage.setItem("taskList",JSON.stringify(n)),n}))};return i.a.createElement(m.Provider,{value:{taskList:o,isModalOpen:b,addTask:v,toggleModal:function(){return p(!b)},displayPriority:g,changeSortOrder:function(e){return h(e)},editTask:function(e,t,a,n){u((function(i){O(t,n),v({newTask:e,priority:a})}))},deleteTask:O}},e.children)},f=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)("default"),s=Object(l.a)(o,2),d=s[0],f=s[1],b=Object(n.useContext)(m),p=i.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),e.submit({newTask:r,priority:d}),b.toggleModal()}},"Submit");return e.priority&&(p=i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(t){t.preventDefault(),"default"!==d?b.editTask(r,e.indx,d,e.priority):b.editTask(r,e.indx,e.priority,e.priority)}},"Save"),i.a.createElement("button",{onClick:function(t){t.preventDefault(),e.cancel(!1)}},"Cancel"))),i.a.createElement("div",{className:u.a.Modal},i.a.createElement("div",{className:u.a.modalContainer},i.a.createElement("div",null,i.a.createElement("input",{type:"text",id:"task",name:"task",value:r,onChange:function(e){return c(e.target.value)},placeholder:"Task Name"}),i.a.createElement("select",{value:d,onChange:function(e){f(e.target.value)}},i.a.createElement("option",{value:"default"},"Select Priority"),i.a.createElement("option",{value:"low"},"Low"),i.a.createElement("option",{value:"medium"},"Medium"),i.a.createElement("option",{value:"high"},"High")),p),i.a.createElement("div",null,"(default priority: medium)")))},b=function(e){var t=Object(n.useContext)(m);return i.a.createElement("label",null,"Sort by:",i.a.createElement("select",{value:t.displayPriority,onChange:function(e){t.changeSortOrder(e.target.value)}},i.a.createElement("option",{value:"low"},"Lowest First"),i.a.createElement("option",{value:"mediumHighLow"},"Medium > High > Low"),i.a.createElement("option",{value:"mediumLowHigh"},"Medium > Low > High"),i.a.createElement("option",{value:"high"},"Highest First")))},p=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(n.useContext)(m),u=i.a.createElement("form",null,i.a.createElement("button",{onClick:function(e){e.preventDefault(),c(!0)}},"edit"),i.a.createElement("button",{onClick:function(t){t.preventDefault(),o.deleteTask(e.indx,e.priority)}},"delete"));return r&&(u=i.a.createElement("form",null,i.a.createElement(f,{indx:e.indx,priority:e.priority,showModal:r,cancel:function(e){return c(e)}}))),i.a.createElement(i.a.Fragment,null,u)},k=a(6),E=a.n(k),g=function(e){var t=Object(n.useContext)(m),a=t.displayPriority,r=t.taskList[0].map((function(e,t){return i.a.createElement("li",{key:"high"+t},e,i.a.createElement(p,{name:e,indx:t,priority:"high"}))})),c=t.taskList[1].map((function(e,t){return i.a.createElement("li",{key:"medium"+t},e,i.a.createElement(p,{name:e,indx:t,priority:"medium"}))})),l=t.taskList[2].map((function(e,t){return i.a.createElement("li",{key:"low"+t},e,i.a.createElement(p,{name:e,indx:t,priority:"low"}))})),o=[];switch(a){case"mediumHighLow":o=c.concat(r).concat(l);break;case"mediumLowHigh":o=c.concat(l).concat(r);break;case"low":o=l.concat(c).concat(r);break;default:o=r.concat(c).concat(l)}return i.a.createElement("div",{className:E.a.TaskList},i.a.createElement(b,null),i.a.createElement("ul",null,o),i.a.createElement("button",{onClick:t.toggleModal},"Add New Task"))},h=function(e){var t=Object(n.useContext)(m),a=t.isModalOpen?i.a.createElement(f,{submit:function(e){t.addTask(e)}}):"";return i.a.createElement("div",null,a,i.a.createElement(g,null))},v=a(7),O=a.n(v);var y=function(){return i.a.createElement("div",{className:O.a.App},i.a.createElement(h,null))};c.a.render(i.a.createElement(d,null,i.a.createElement(y,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.2c0d48a6.chunk.js.map