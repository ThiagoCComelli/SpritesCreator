(this.webpackJsonpspritescreator=this.webpackJsonpspritescreator||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),i=n(9),r=n.n(i),s=n(11),o=n(3),l=n(4),u=n(8),d=n(10);n(17);var j=function(e){var t={minWidth:90*e.width/e.height,backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"miniatureIcons",children:[Object(c.jsx)(u.b,{className:"miniIcons",onClick:function(){e.changeEdit([e.image,e.id])},size:20}),Object(c.jsx)(d.a,{style:{color:"".concat(e.mask?"green":"black")},className:"miniIcons",size:20}),Object(c.jsx)(u.a,{className:"miniIcons",onClick:function(){e.deleteMiniature([e.image,e.id])},size:20})]}),Object(c.jsx)("div",{onClick:function(){e.changeBackground([e.image,e.id])},className:"miniature ".concat(e.mask?"miniatureMask":"null"),style:t,children:Object(c.jsx)("label",{children:e.id})})]})};n(18);var b=function(){window.addEventListener("keyup",(function(e){68===e.keyCode&&0!==p.actualSize&&console.log(p)}));var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),u=Object(l.a)(r,2),d=u[0],b=u[1],h=Object(a.useState)({color:"#000000",lineCap:"round",lineWidth:5}),O=Object(l.a)(h,2),v=O[0],m=O[1],g=Object(a.useState)({actualMask:null,actualSize:0}),f=Object(l.a)(g,2),p=f[0],x=f[1],k=Object(a.useRef)(null),y=Object(a.useRef)(null),C=0;Object(a.useEffect)((function(){var e=k.current,t=e.getContext("2d");e.width=document.getElementById("canvas").clientWidth,e.height=document.getElementById("canvas").clientHeight,e.style.width="100%",e.style.height="100%",t.lineJoin="round",t.lineCap=v.lineCap,t.strokeStyle=v.color,t.lineWidth=v.lineWidth,y.current=t}),[]),Object(a.useEffect)((function(){y.current.strokeStyle=v.color,y.current.lineCap=v.lineCap,y.current.lineWidth=v.lineWidth}),[v]);var I=function(e){var t=Object(l.a)(e,2),n=t[0],c=(t[1],n);n===p.actualMask?(document.getElementById("canvas").style.backgroundImage="none",c=null):document.getElementById("canvas").style.backgroundImage="url(".concat(n,")"),x(Object(o.a)(Object(o.a)({},p),{},{actualMask:c}))},w=function(e){var t=Object(l.a)(e,2),n=t[0],c=t[1];document.getElementById("canvas").style.backgroundImage="none",x(Object(o.a)(Object(o.a)({},p),{},{actualMask:null})),B([n,c]);var a=new Image;a.src=n,y.current.drawImage(a,0,0)},B=function(e){var t=Object(l.a)(e,2),c=t[0];t[1];i(n.filter((function(e){return e!==c}))),x(Object(o.a)(Object(o.a)({},p),{},{actualSize:p.actualSize-1})),c===p.actualMask&&(document.getElementById("canvas").style.backgroundImage="none")};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"canvasDiv",id:"canvas",children:Object(c.jsx)("canvas",{onMouseDown:function(e){var t=e.nativeEvent,n=t.offsetX,c=t.offsetY;y.current.beginPath(),y.current.moveTo(n,c),b(!0)},onMouseUp:function(){y.current.closePath(),b(!1)},onMouseMove:function(e){var t=e.nativeEvent;if(d){var n=t.offsetX,c=t.offsetY;y.current.lineTo(n,c),y.current.stroke()}},ref:k})}),Object(c.jsx)("div",{className:"canvasOptions",children:n.map((function(e){return C++,Object(c.jsx)(j,{mask:p.actualMask===e,changeEdit:w,deleteMiniature:B,changeBackground:I,id:C,image:e,width:k.current.width,height:k.current.height},C)}))}),Object(c.jsxs)("div",{className:"canvasOptions",children:[Object(c.jsxs)("div",{className:"canvasColorPicker canvasOptionsBox",children:[Object(c.jsx)("input",{id:"colorInput",type:"color",onChange:function(e){m(Object(o.a)(Object(o.a)({},v),{},{color:e.target.value}))}}),Object(c.jsx)("strong",{onClick:function(){navigator.clipboard.writeText(v.color),alert("Color copied: ".concat(v.color))},children:v.color})]}),Object(c.jsxs)("div",{className:"canvasStrokePicker canvasOptionsBox",children:[Object(c.jsx)("label",{htmlFor:"lineCap",children:"LineCap:"}),Object(c.jsxs)("select",{name:"lineCap",id:"lineCap",defaultValue:"round",onChange:function(e){m(Object(o.a)(Object(o.a)({},v),{},{lineCap:e.target.value}))},children:[Object(c.jsx)("option",{value:"butt",children:"Butt"}),Object(c.jsx)("option",{value:"square",children:"Square"}),Object(c.jsx)("option",{value:"round",children:"Round"})]})]}),Object(c.jsxs)("div",{className:"canvasLineWidth canvasOptionsBox",children:[Object(c.jsx)("label",{children:"Line Width:"}),Object(c.jsx)("input",{type:"number",defaultValue:"5",min:"1",onChange:function(e){m(Object(o.a)(Object(o.a)({},v),{},{lineWidth:e.target.value}))}})]}),Object(c.jsx)("div",{className:"canvasNewLayer canvasOptionsBox",children:Object(c.jsx)("button",{onClick:function(){var e=k.current.toDataURL();i((function(t){return[].concat(Object(s.a)(t),[e])})),x(Object(o.a)(Object(o.a)({},p),{},{actualMask:e,actualSize:p.actualSize+1})),document.getElementById("canvas").style.backgroundImage="url(".concat(e,")"),y.current.clearRect(0,0,k.current.width,k.current.height)},children:"New Layer"})}),Object(c.jsx)("div",{className:"canvasClear canvasOptionsBox",children:Object(c.jsx)("button",{onClick:function(){y.current.clearRect(0,0,k.current.width,k.current.height)},children:"Clear"})}),Object(c.jsx)("div",{className:"canvasReset canvasOptionsBox",children:Object(c.jsx)("button",{onClick:function(){i([]),document.getElementById("canvas").style.backgroundImage="none",y.current.clearRect(0,0,k.current.width,k.current.height)},children:"Reset"})})]})]})};n(19);r.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ce9a2a97.chunk.js.map