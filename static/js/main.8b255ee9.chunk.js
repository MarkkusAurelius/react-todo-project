(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__72vMB",checkbox:"TodoItem_checkbox__1fgbD",textInput:"TodoItem_textInput__1mfGu","input-submit":"TodoItem_input-submit__19rCG"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),i=n(24),a=n.n(i),s=n(22),r=n(11),l=n(9),d=n(1),u=function(){return Object(d.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(d.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},j=n(15),b=n(16),h=function(e){var t=Object(c.useState)({title:""}),n=Object(l.a)(t,2),o=n[0],i=n[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(d.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){i(Object(r.a)(Object(r.a)({},o),{},Object(j.a)({},e.target.name,e.target.value)))}}),Object(d.jsx)("button",{className:"input-submit",children:Object(d.jsx)(b.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},p=n(17),x=n.n(p),O=n(0),m=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],a=e.todo,s=a.completed,r=a.id,u=a.title,j={},h={};return o?j.display="none":h.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(d.jsxs)("li",{className:x.a.item,children:[Object(d.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(d.jsx)("input",{type:"checkbox",className:x.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(d.jsx)(O.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"#ff0000"},className:"submit-iconn"},children:Object(d.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(d.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})})}),Object(d.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:u})]}),Object(d.jsx)("input",{type:"text",style:h,className:x.a.textInput,value:u,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},f=function(e){return Object(d.jsx)("ul",{children:e.todos.map((function(t){return Object(d.jsx)(m,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},g=n(41),y=n(3),v=n(8),N=function(){console.log(Object(y.f)());var e=Object(y.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(d.jsxs)("div",{className:"main__content",children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)("p",{children:c})]})},_=function(){var e=Object(y.g)(),t=e.url,n=e.path;return console.log(Object(y.g)()),Object(d.jsxs)("div",{className:"about__content",children:[Object(d.jsxs)("ul",{className:"about__list",children:[Object(d.jsx)("li",{children:Object(d.jsx)(v.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(d.jsx)("li",{children:Object(d.jsx)(v.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(d.jsx)(y.a,{path:"".concat(n,"/:slug"),children:Object(d.jsx)(N,{})})]})},k=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"No match for this page"})})},w=n(26),T=n(27),S=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(d.jsxs)("nav",{className:"navBar",children:[Object(d.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(d.jsx)(w.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(d.jsx)(T.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})})," ",Object(d.jsxs)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[" ",[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsxs)(v.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:[" ",e.text," "]})," "]},e.id)}))," "]})," "]})},C=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(y.a,{exact:!0,path:"/",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"inner",children:[Object(d.jsx)(u,{}),Object(d.jsx)(h,{addTodoProps:function(e){var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(s.a)(n),[t]))}}),Object(d.jsx)(f,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(s.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(d.jsx)(y.a,{path:"/about",children:Object(d.jsx)(_,{})}),Object(d.jsx)(y.a,{path:"*",children:Object(d.jsx)(k,{})})]})]})};n(38);a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(v.a,{children:Object(d.jsx)(C,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8b255ee9.chunk.js.map