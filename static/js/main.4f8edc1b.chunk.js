(this["webpackJsonpreact-credit-card"]=this["webpackJsonpreact-credit-card"]||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),s=(n(12),n(3)),i=n(7),j=(n(17),n(1)),o=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),o=u[0],l=u[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),p=b[0],m=b[1],h=Object(a.useState)(""),O=Object(s.a)(h,2),x=O[0],f=O[1],v=Object(a.useState)(""),g=Object(s.a)(v,2),C=g[0],y=g[1],N=Object(a.useState)(""),S=Object(s.a)(N,2),D=S[0],E=S[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"card",children:Object(j.jsx)(i.a,{cvc:n,expiry:o,focused:p,name:x,number:C})}),Object(j.jsxs)("form",{action:"",method:"GET",children:[Object(j.jsx)("span",{children:"Card Number"}),Object(j.jsx)("input",{type:"tel",name:"number",placeholder:"Card Number",value:C,maxLength:"16",pattern:"[0-9]{13,16}",onChange:function(e){return y(e.target.value)},onFocus:function(e){return m(e.target.name)}}),Object(j.jsx)("span",{children:"Card Name"}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:x,pattern:"^[a-zA-Z ]*$",onChange:function(e){return f(e.target.value)},onFocus:function(e){return m(e.target.name)}}),Object(j.jsx)("span",{children:"Expiration Date"}),Object(j.jsx)("input",{type:"tel",name:"expiry",placeholder:"MM/YY",maxLength:"5",pattern:"\\d\\d/\\d\\d",value:o,onChange:function(e){return l(e.target.value)},onFocus:function(e){return m(e.target.name)}}),Object(j.jsx)("span",{children:"CVV"}),Object(j.jsx)("input",{type:"tel",name:"cvc",placeholder:"cvv",value:n,maxLength:"4",pattern:"[0-9]{3,4}",onChange:function(e){return r(e.target.value)},onFocus:function(e){return m(e.target.name)}}),Object(j.jsx)("input",{className:"submit",type:"submit",onClick:function(e){var t=function(e){return Object(j.jsxs)("i",{className:"fas fa-exclamation-circle",children:["\xa0",e]})};C.length<13?(e.preventDefault(),E(t("Card number must be 13 characters or more"))):""===x?(e.preventDefault(),E(t("Enter the full name as printed on the credit card"))):""===o?(e.preventDefault(),E(t("Expiry date is required"))):n.length<3&&(e.preventDefault(),E(t("Card security code must be 3 numbers or more")))}}),Object(j.jsx)("span",{className:"error",children:D})]})]})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(o,{})})};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4f8edc1b.chunk.js.map