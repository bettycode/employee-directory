(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),s=c(13),a=c.n(s),l=c(3);var i=function(e){var t=e.handleSearchButton,c=e.input,r=e.handleSearchInput,s={container:{background:"purple",color:"white"},search:{paddingTop:"10px"}};return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid",style:s.container,children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"display-4",children:"User Directory"}),Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",style:s.search,children:[Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",id:"Search",value:c,onChange:r}),Object(n.jsx)("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",onClick:t,children:"Search"})]})]})})};var o=function(e){var t={table:{background:"purple",color:"white"},tables:{padding:"10px"},padding:{paddingLeft:"3rem"}};return Object(n.jsxs)("table",{className:"table table-striped",style:t.tables,children:[Object(n.jsx)("thead",{style:t.table,children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",style:t.padding,children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Picture"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"State"})]})}),Object(n.jsx)("tbody",{children:e.employees.map((function(e,c){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{style:t.padding,children:c+1}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture.medium})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.location.state})]},e.login.uuid)}))})]})},d=c(14),j=c.n(d),u=function(){return j.a.get("https://randomuser.me/api/?results=50")};var h=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),d=Object(l.a)(a,2),j=d[0],h=d[1],b=Object(r.useState)([]),p=Object(l.a)(b,2),m=p[0],O=(p[1],Object(r.useState)("")),x=Object(l.a)(O,2),f=x[0],y=x[1];return Object(r.useEffect)((function(){u().then((function(e){s(e.data.results),h(e.data.results),console.log(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(i,{handleSearchInput:function(e){var t=e.target.value;y(t);var c=j.filter((function(e){return e.name.first.toLowerCase().includes(t.toLowerCase())}));s(c)},handleSearchButton:function(e){e.preventDefault(),console.log("clicked")},input:f}),Object(n.jsx)("div",{className:"container-fluid",style:{paddingLeft:0,paddingRight:0},children:Object(n.jsx)(o,{num:m+1,employees:c,picture:c.picture,name:c.name,email:c.email,phone:c.phone,dob:c.location})})]})};var b=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(h,{})})};c(38);a.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0ed90262.chunk.js.map