(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4415:function(e,r,n){Promise.resolve().then(n.bind(n,7801))},7801:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return page}});var l=n(5075),d=n(9563);let convertToDirectoryStructure=e=>{var r,n,l;let d={name:"App",type:"folder",contents:[]};for(let r=0;r<e.length;r++){let c=e[r].webkitRelativePath.split("/"),f=d;for(let e=0;e<c.length;e++){let r=c[e],d=e<c.length-1,m=null===(n=f.contents)||void 0===n?void 0:n.find(e=>e.name===r);m||(m={name:r},d?(m.type="folder",m.contents=[]):m.type="file",null===(l=f.contents)||void 0===l||l.push(m)),f=m}}return(null===(r=d.contents)||void 0===r?void 0:r[0])||{name:"",type:"folder"}},printDirectoryStructure=function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=!(arguments.length>3)||void 0===arguments[3]||arguments[3],d="";if("folder"===e.type){r?(e.name,d+=n+e.name+"\n"):d+=n+(l?"└─ ":"├─ ")+e.name+"\n";for(let r=0;r<e.contents.length;r++){let c=n+(l?"  ":"│   "),f=r===e.contents.length-1;d+=printDirectoryStructure(e.contents[r],!1,c,f)}}else d+=n+(l?"└─ ":"├─ ")+e.name+"\n";return d};var c=n(9777);n(563);var components_star=()=>(0,l.jsx)("a",{href:"https://github.com/AnsonZnl/dir-tree",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",children:(0,l.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[(0,l.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,l.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),(0,l.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})}),page=()=>{let[e,r]=(0,d.useState)(""),n=(0,d.useRef)(null);return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-100",children:[(0,l.jsx)(components_star,{}),(0,l.jsx)("div",{className:"h-[50px] flex",children:(0,l.jsx)("h2",{className:" items-center text-2xl text-slate-900",children:"目录树\uD83C\uDF32生成器"})}),(0,l.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-[900px] h-[80%]",children:[(0,l.jsxs)("div",{className:"h-[14%] flex justify-between p-1 min-w-[100px]",children:[(0,l.jsx)("button",{onClick:()=>{var e;null===(e=n.current)||void 0===e||e.click()},className:"w-[20%] mb-4 outline-dashed outline-2  text-sm",children:"选择文件夹生成目录树"}),(0,l.jsx)("input",{style:{display:"none"},type:"file",id:"folderInput",ref:n,webkitdirectory:"true",directory:"",multiple:!0,onChange:e=>{let n=e.target.files;if(!n||0===n.length){alert("请选择一个文件夹");return}let l=convertToDirectoryStructure(n),d=printDirectoryStructure(l,!0);r(d)}}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:"px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 user-select-none",onClick:()=>{let e=document.getElementById("result");e.select(),document.execCommand("copy"),c.toast.success("复制成功!")},children:"一键复制"})})]}),(0,l.jsx)("form",{className:"w-[100%] h-[86%]",children:(0,l.jsx)("textarea",{id:"result",className:"h-[100%] w-[100%] font-mono resize-none border-solid border-2 border-gray-200 rounded-md p-2",value:e,onChange:e=>r(e.target.value)})})]})]})}},563:function(){},6649:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(9563),d=Symbol.for("react.element"),c=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,h={},g=null,y=null;for(l in void 0!==n&&(g=""+n),void 0!==r.key&&(g=""+r.key),void 0!==r.ref&&(y=r.ref),r)c.call(r,l)&&!m.hasOwnProperty(l)&&(h[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===h[l]&&(h[l]=r[l]);return{$$typeof:d,type:e,key:g,ref:y,props:h,_owner:f.current}}r.jsx=q,r.jsxs=q},5075:function(e,r,n){"use strict";e.exports=n(6649)},9777:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{CheckmarkIcon:function(){return U},ErrorIcon:function(){return z},LoaderIcon:function(){return F},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ei},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var c,f=n(9563);let m={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||m,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let f=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+f+";":l+="f"==c[1]?o(f,c):c+"{"+o(f,"k"==c[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=f&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,f):c+":"+f+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let f=s(e),m=b[f]||(b[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!b[m]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=h.exec(e.replace(g,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);b[m]=o(d?{["@keyframes "+m]:r}:r,n?"":"."+m)}let x=n&&b.g?b.g:null;return n&&(b.g=b[m]),c=b[m],x?r.data=r.data.replace(x,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),m},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let x,_,w,C=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let f=Object.assign({},d),m=f.className||a.className;n.p=Object.assign({theme:_&&_()},f),n.o=/ *go\d+/.test(m),f.className=u.apply(n,l)+(m?" "+m:""),r&&(f.ref=c);let h=e;return e[0]&&(h=f.as||e,delete f.as),w&&h[0]&&w(f),x(h,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,E=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},k=new Map,$=e=>{if(k.has(e))return;let r=setTimeout(()=>{k.delete(e),dist_u({type:4,toastId:e})},1e3);k.set(e,r)},J=e=>{let r=k.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},N=[],O={toasts:[],pausedAt:void 0},dist_u=e=>{O=v(O,e),N.forEach(e=>{e(O)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,f.useState)(O);(0,f.useEffect)(()=>(N.push(n),()=>{let e=N.indexOf(n);e>-1&&N.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||S[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,f.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,f.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,f.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},f=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),m=f.findIndex(r=>r.id===e.id),h=f.filter((e,r)=>r<m&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},L=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,H=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=j("div")`
  position: absolute;
`,Y=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?f.createElement(Q,null,r):r:"blank"===n?null:f.createElement(Y,null,f.createElement(F,{...l}),"loading"!==n&&f.createElement(V,null,"error"===n?f.createElement(z,{...l}):f.createElement(U,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,et=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${C(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=f.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=f.createElement(M,{toast:e}),m=f.createElement(et,{...e.ariaProps},T(e.message,e));return f.createElement(X,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:m}):f.createElement(f.Fragment,null,c,m))});c=f.createElement,o.p=void 0,x=c,_=void 0,w=void 0;var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let c=f.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return f.createElement("div",{ref:c,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},eo=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:c,containerClassName:m})=>{let{toasts:h,handlers:g}=D(n);return f.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...c},className:m,onMouseEnter:g.startPause,onMouseLeave:g.endPause},h.map(n=>{let c=n.position||r,m=Re(c,g.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return f.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:g.updateHeight,className:n.visible?eo:"",style:m},"custom"===n.type?T(n.message,n):d?d(n):f.createElement(er,{toast:n,position:c}))}))},ei=dist_n}},function(e){e.O(0,[767,228,744],function(){return e(e.s=4415)}),_N_E=e.O()}]);