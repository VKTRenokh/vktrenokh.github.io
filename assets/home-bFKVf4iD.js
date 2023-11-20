import{c as T,f as m,u as O,o as M,g as _,j as t,a as k,I as N,R as l,n as B,r as P,L as a,C as E,B as A}from"./index-J3BwIoOq.js";import{T as u,H as h,S as y}from"./section-o95gM5v8.js";var[R,b]=T({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),g=m(function(n,s){const r=O("List",n),{children:i,styleType:x="none",stylePosition:j,spacing:d,...c}=M(n),I=_(i),z=d?{["& > *:not(style) ~ *:not(style)"]:{mt:d}}:{};return t.jsx(R,{value:r,children:t.jsx(k.ul,{ref:s,listStyleType:x,listStylePosition:j,role:"list",__css:{...r.container,...z},...c,children:I})})});g.displayName="List";var W=m((e,n)=>{const{as:s,...r}=e;return t.jsx(g,{ref:n,as:"ol",styleType:"decimal",marginStart:"1em",...r})});W.displayName="OrderedList";var D=m(function(n,s){const{as:r,...i}=n;return t.jsx(g,{ref:s,as:"ul",styleType:"initial",marginStart:"1em",...i})});D.displayName="UnorderedList";var v=m(function(n,s){const r=b();return t.jsx(k.li,{ref:s,...n,__css:r.item})});v.displayName="ListItem";var C=m(function(n,s){const r=b();return t.jsx(N,{ref:s,role:"presentation",...n,__css:r.icon})});C.displayName="ListIcon";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=l.createContext&&l.createContext(w),o=function(){return o=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)},F=function(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]]);return s};function S(e){return e&&e.map(function(n,s){return l.createElement(n.tag,o({key:s},n.attr),S(n.child))})}function f(e){return function(n){return l.createElement(H,o({attr:o({},e.attr)},n),S(e.child))}}function H(e){var n=function(s){var r=e.attr,i=e.size,x=e.title,j=F(e,["attr","size","title"]),d=i||s.size||"1em",c;return s.className&&(c=s.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,r,j,{className:c,style:o(o({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),x&&l.createElement("title",null,x),e.children)};return L!==void 0?l.createElement(L.Consumer,null,function(s){return n(s)}):n(w)}function G(e){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"}}]})(e)}const U=({things:e})=>t.jsx(g,{spacing:3,children:e.map(n=>t.jsxs(v,{children:[t.jsx(C,{color:"grassTeal",as:G}),n]},n))}),p=B.span("font-weight: bold; margin-right: 1em; margin-bottom: 1em"),V=()=>{const[e,n]=P.useState("2010"),s=()=>{n(e==="2010"?"23 June 2010":"2010")};return t.jsxs(t.Fragment,{children:[t.jsxs(u,{children:[t.jsx(p,{style:{cursor:"pointer"},onClick:s,children:e}),"Born in Sevastopol, Crimea"]}),t.jsxs(u,{children:[t.jsx(p,{children:"2022"}),"Started ",t.jsx(a,{href:"https://rs.school/",children:"Rsschool"})," courses"]}),t.jsxs(u,{children:[t.jsx(p,{children:"2023"}),"Finished ",t.jsx(a,{href:"https://rs.school/",children:"Rsschool"})," courses"]})]})},Z=({icon:e,url:n,name:s})=>t.jsxs(v,{children:[t.jsx(C,{as:e}),t.jsx(a,{href:n,children:s})]}),K=({contacts:e})=>t.jsx(g,{spacing:3,children:e.map(n=>t.jsx(Z,{url:n.link,name:n.name,icon:n.icon},n.link))}),J=["Music","Coding","Chess","Plants","Keyboards","Neovim"];function Y(e){return f({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"}}]})(e)}function q(e){return f({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Q(e){return f({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"}}]})(e)}const X="https://github.com/vktrenokh",$="https://discordapp.com/users/882968599877287996",ee="https://t.me/vktrenokh",te=[{icon:Q,name:"Telegram",link:ee},{icon:Y,name:"Discord",link:$},{icon:q,name:"Github",link:X}],ie=()=>t.jsxs(E,{children:[t.jsxs(A,{mb:6,p:3,textAlign:"center",children:[t.jsx(h,{mt:100,mb:5,variant:"page-title",as:"h2",children:"Hello, i'm Victor Yenokh"}),t.jsx(u,{children:"Software engineer, Keyboard enthusiast"})]}),t.jsxs(y,{delay:"0.1",children:[t.jsx(h,{as:"h3",variant:"section-title",children:"Bio"}),t.jsx(V,{})]}),t.jsxs(y,{delay:"0.2",children:[t.jsx(h,{as:"h3",variant:"section-title",children:"I love"}),t.jsx(U,{things:J})]}),t.jsxs(y,{delay:"0.3",children:[t.jsx(h,{as:"h3",variant:"section-title",children:"About me"}),t.jsxs(u,{children:["Passionate about crafting web applications with precision using ",t.jsx(a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", ",t.jsx(a,{href:"https://vuejs.org",children:"Vue"}),", ",t.jsx(a,{href:"https://angular.dev",children:"Angular"}),", ",t.jsx(a,{href:"https://chakra-ui.com/",children:"Chakra ui"})," and ",t.jsx(a,{href:"https://taiga-ui.dev/",children:"taiga ui"}),". i love editing in ",t.jsx(a,{href:"https://neovim.io/",children:"neovim"}),". Currently living in Cyprus and enjoying its landscapes, i love going to hike, i want to build keyboards but have no money. i love orange cats. I use endeavour os linux with hyprland ",t.jsx("span",{title:"Window Manager",children:"WM"})]})]}),t.jsxs(y,{delay:"0.4",children:[t.jsx(h,{as:"h3",variant:"section-title",children:"Ways To Reach Me"}),t.jsx(K,{contacts:te})]})]});export{ie as Component};