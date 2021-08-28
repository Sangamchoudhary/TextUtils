(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),l=n.n(s),r=(n(10),n(2)),o=(n(11),n(4),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),"Dark Mode"]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{id:"my-box",rows:"7",value:c,onChange:function(e){s(e.target.value)},className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"#1d1a1d",color:"light"===e.mode?"black":"white"}})}),Object(o.jsx)("button",{disabled:0===c.length,onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to Uppercase","success")},className:"btn btn-info mx-1 my-1",children:"UpperCase \u2b06"}),Object(o.jsx)("button",{disabled:0===c.length,onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to Lowercase","success")},className:"btn btn-info mx-1 my-1",children:"LowerCase \u2b07"}),Object(o.jsx)("button",{disabled:0===c.length,onClick:function(){s(""),e.showAlert("Text has been cleared","danger")},className:"btn btn-danger mx-1 my-1",children:"Clear \u274c"}),Object(o.jsx)("button",{disabled:0===c.length,onClick:function(){var t=document.getElementById("my-box");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Text has been copied","info")},className:"btn btn-success mx-1 my-2",children:"Copy \ud83d\udcdd"}),Object(o.jsx)("button",{disabled:0===c.length,onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces has been removed","info")},className:"btn btn-success mx-1",children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:"Text Summary"}),Object(o.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," ","Words , ",c.length," Characters , ",c.split(".").length-1," ","Sentence"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," ","Minutes read"]}),Object(o.jsx)("p",{}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":"," ",e.alert.msg]})})}i.defaultProps={title:"title here"};var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#1f1f1f",m("Dark mode has been enbled","success")):(c("light"),document.body.style.backgroundColor="white",m("Light mode has been enbled","success"))}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{heading:"Enter text to analyze",mode:n,showAlert:m})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.c562db23.chunk.js.map