(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{50:function(e,t,r){"use strict";var n=r(1),c=r(0),i=r(4),a=r.n(i),s=r(17),o=r.p+"static/media/gotham-bold.73ce573b.woff2";r(52);t.a=({children:e,level:t=1,as:r,align:i="auto",weight:A="medium",className:l,...d})=>{const u=Math.min(Math.max(t,0),4),m=r||`h${Math.max(u,1)}`;return Object(n.jsxs)(c.Fragment,{children:["bold"===A&&Object(n.jsxs)(s.a,{children:[Object(n.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(m,{className:a()(l,"heading",`heading--align-${i}`,`heading--level-${u}`,`heading--weight-${A}`),...d,children:e})]})}},51:function(e,t,r){"use strict";var n=r(1),c=r(4),i=r.n(c);r(54);t.a=({children:e,size:t="m",as:r="p",align:c="auto",weight:a="auto",secondary:s,className:o,...A})=>Object(n.jsx)(r,{className:i()(o,"text",`text--align-${c}`,`text--size-${t}`,`text--weight-${a}`,{"text--secondary":s}),...A,children:e})},52:function(e,t,r){},53:function(e,t,r){"use strict";var n=r(1),c=r(0),i=r(4),a=r.n(i);r(58);const s=Object(c.forwardRef)((({as:e="div",children:t,className:r,...c},i)=>Object(n.jsx)(e,{className:a()("section",r),ref:i,...c,children:t})));t.a=s},54:function(e,t,r){},55:function(e,t,r){"use strict";var n=r(1),c=r(0),i=r(4),a=r.n(i),s=r(7),o=r(19),A=r(11),l=r(49),d=r(18),u=r(23),m=r(8),p=r(2),j=r(59),b=r(24),h=r(20);r(67);const v=({onLoad:e,loaded:t,inViewport:r,srcSet:i,placeholder:b,delay:v,src:f,alt:g,play:x=!0,reveal:w,...O})=>{const E=Object(s.h)(),[y,B]=Object(c.useState)(!0),[Q,D]=Object(c.useState)(!E),[I,M]=Object(c.useState)(!1),[R,_]=Object(c.useState)(!1),[N,U]=Object(c.useState)(!1),[C,k]=Object(c.useState)(),[S,z]=Object(c.useState)(),T=Object(c.useRef)(),F=Object(c.useRef)(),P=null===f||void 0===f?void 0:f.endsWith(".mp4"),L=f||(null===i||void 0===i?void 0:i.split(" ")[0]),J=!u.a&&r;Object(c.useEffect)((()=>{const e=()=>{B(!1)},t=T.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(c.useEffect)((()=>{P&&i?(async()=>{const e=await Object(j.b)(i);z(e)})():P&&z(f)}),[P,f,i]),Object(c.useEffect)((()=>{const{width:e,height:t}=T.current;e&&t&&k({width:e,height:t})}),[]),Object(c.useEffect)((()=>{F.current&&S&&(x&&r?!r||E||u.a||(D(!0),F.current.play()):(D(!1),F.current.pause()))}),[r,x,E,S]);const G=e=>{e.preventDefault(),F.current.paused?(D(!0),F.current.play()):(D(!1),F.current.pause())},H=()=>{M(!0),U(!0)};return Object(n.jsxs)("div",{className:a()("image__element-wrapper",{"image__element-wrapper--reveal":w,"image__element-wrapper--in-viewport":r}),onMouseOver:P?()=>{M(!0),_(!0)}:void 0,onMouseOut:P?()=>_(!1):void 0,style:{"--delay":Object(p.c)(v+1e3)},children:[P&&Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:a()("image__element",{"image__element--loaded":t}),autoPlay:!E,role:"img",onLoadStart:e,src:S,"aria-label":g,ref:F,...O}),Object(n.jsx)(l.a,{in:R||N,onExit:d.b,onExited:()=>M(!1),timeout:{enter:0,exit:Object(p.b)(m.b.base.durationS)},children:e=>Object(n.jsx)(h.a,{visible:I,children:Object(n.jsxs)(o.a,{className:a()("image__button",`image__button--${e}`),onFocus:H,onBlur:()=>U(!1),onClick:G,children:[Object(n.jsx)(A.a,{icon:Q?"pause":"play"}),Q?"Pause":"Play"]})})})]}),!P&&Object(n.jsx)("img",{className:a()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:J?L:void 0,srcSet:J?i:void 0,width:null===C||void 0===C?void 0:C.width,height:null===C||void 0===C?void 0:C.height,alt:g,...O}),y&&Object(n.jsx)("img",{"aria-hidden":!0,className:a()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(p.c)(v)},ref:T,src:b,onLoad:e=>{const{width:t,height:r}=e.target;k({width:t,height:r})},width:null===C||void 0===C?void 0:C.width,height:null===C||void 0===C?void 0:C.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:r,delay:i=0,raised:o,src:A,...l})=>{const[d,u]=Object(c.useState)(!1),{themeId:m}=Object(b.c)(),j=Object(c.useRef)(),h=Object(s.d)(j,!(null===A||void 0===A?void 0:A.endsWith(".mp4"))),f=Object(c.useCallback)((()=>{u(!0)}),[]);return Object(n.jsx)("div",{className:a()("image",e,`image--${m}`,{"image--in-viewport":h,"image--reveal":r,"image--raised":o}),style:{...t,"--delay":Object(p.c)(i)},ref:j,children:Object(n.jsx)(v,{delay:i,onLoad:f,loaded:d,inViewport:h,reveal:r,src:A,...l})})}},56:function(e,t,r){"use strict";var n=r(1),c=r(57);r(65);t.a=()=>Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Gonzalez Leonel.`}),Object(n.jsx)(c.a,{secondary:!0,className:"footer__link",href:"https://github.com/leogonzalezok",target:"_self",children:"with love"})]})},57:function(e,t,r){"use strict";var n=r(1),c=r(12),i=r(4),a=r.n(i),s=r(13);r(64);const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:r,secondary:i,className:A,href:l,as:d,...u})=>{const m=o.includes(null===l||void 0===l?void 0:l.split(".").pop()),p=(null===l||void 0===l?void 0:l.includes("://"))||"#"===(null===l||void 0===l?void 0:l[0])||m,j=e||(p?"noreferrer noopener":void 0),b=t||(p?"_blank":void 0),h=d||(p?"a":c.b);return Object(n.jsx)(h,{className:a()("link",A,{"link--secondary":i}),rel:j,href:p?l:void 0,to:p?void 0:l,target:b,onMouseUp:s.a,...u,children:r})}},58:function(e,t,r){},59:function(e,t,r){"use strict";async function n({src:e,srcSet:t,sizes:r}){return new Promise(((n,c)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const c=new Image;e&&(c.src=e),t&&(c.srcset=t),r&&(c.sizes=r);const i=()=>{c.removeEventListener("load",i);const e=c.currentSrc;n(e)};c.addEventListener("load",i)}catch(i){c(`Error loading ${t}: ${i}`)}}))}async function c(e){const t=e.split(", ").map((e=>{const[t,r]=e.split(" ");return{src:t,image:function(e=1,t=1){const r=document.createElement("canvas"),n=r.getContext("2d");r.width=e,r.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const c=r.toDataURL("image/png","");return r.remove(),c}(Number(r.replace("w",""))),width:r}})),r=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),c=await n({srcSet:r});return t.find((e=>e.image===c)).src}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}))},62:function(e,t,r){"use strict";var n=r(1),c=r(0),i=r(4),a=r.n(i),s=r(7),o=r(61),A=r(20),l=r(23);r(66);const d=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],u="glyph",m="value";const p=({text:e,start:t=!0,delay:r=0,className:i,...p})=>{const j=Object(c.useRef)([{type:u,value:""}]),b=Object(c.useRef)(),h=Object(s.h)();return Object(c.useEffect)((()=>{const n=b.current,c=e.split("");let i;const a=()=>{const e=j.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},s=Object(o.g)(0,(e=>{j.current=function(e,t,r){return e.map(((e,n)=>{if(n<r)return{type:m,value:e};if(r%1<.5){const e=Math.floor(Math.random()*d.length);return{type:u,value:d[e]}}return{type:u,value:t[n].value}}))}(c,j.current,e),a()}));return!t||i||h||l.a||(i=Object(o.a)(Object(o.b)(r),Object(o.e)({from:0,to:c.length,stiffness:8,damping:5})).start(s)),h&&(j.current=c.map(((e,t)=>({type:m,value:c[t]}))),a()),()=>{i&&i.stop()}}),[h,t,r,e]),Object(n.jsxs)("span",{className:a()("decoder-text",i),...p,children:[Object(n.jsx)(A.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:b})]})};t.a=Object(c.memo)(p)},63:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return a}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)c(e.material);else for(const t of e.material)c(t)}))},c=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},i=e=>{e.dispose(),e.forceContextLoss(),e=null},a=e=>{for(const t of e)t.parent.remove(t)}},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},69:function(e,t,r){"use strict";var n=r(1),c=r(4),i=r.n(c),a=r(2);r(72);const s=({lineWidth:e,lineHeight:t,notchWidth:r,notchHeight:c,collapseDelay:s,collapsed:o,className:A,style:l})=>Object(n.jsxs)("div",{className:i()("divider",A),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":r,"--notchHeight":c,"--collapseDelay":Object(a.c)(s),...l},children:[Object(n.jsx)("div",{className:i()("divider__line",{"divider__line--collapsed":o})}),Object(n.jsx)("div",{className:i()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(a.c)(s+160)}})]});s.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=s},70:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k="},71:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z"},72:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},97:function(e,t,r){"use strict";r.r(t);var n=r(1),c=(r(75),r.p+"static/media/climapp-light-short.2f8c3946.png"),i=r.p+"static/media/climapp-dark-short.b8d4a36e.png",a=r.p+"static/media/iphone-11.dfa3acae.glb",s=r.p+"static/media/macbook-pro.29527f3f.glb",o=r.p+"static/media/administrador-de-veterinaria.a78ca883.png",A=r(70),l=r.p+"static/media/lg-crm-agile.netlify.app.5bbbacba.png",d=r(71),u=r(56),m=r(7),p=r(0),j=r(4),b=r.n(j),h=r(49),v=r(48),f=r(62),g=r(18),x=r(23),w=r(2);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var E=p.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"});function y({title:e,titleId:t,...r},n){return p.createElement("svg",O({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15",ref:n,"aria-labelledby":t},r),e?p.createElement("title",{id:t},e):null,E)}const B=p.forwardRef(y);r.p;var Q=r(8),D=r(50),I=r(53),M=r(24),R=r(20);r(76);const _=Object(p.lazy)((()=>r.e(14).then(r.bind(null,103))));var N=function({id:e,sectionRef:t,disciplines:r,scrollIndicatorHidden:c,...i}){const a=Object(M.c)(),[s,o]=Object(p.useState)(0),A=Object(m.l)(),l=Object(m.i)(a),d=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),u=r.filter(((e,t)=>t===s)),j=`${e}-title`;return Object(m.e)((()=>{const e=(s+1)%r.length;o(e)}),5e3,a.themeId),Object(p.useEffect)((()=>{l&&l.themeId!==a.themeId&&o(0)}),[a.themeId,l]),Object(n.jsx)(I.a,{className:"intro",as:"section",ref:t,id:e,"aria-labelledby":j,tabIndex:-1,...i,children:Object(n.jsx)(h.a,{appear:!x.a,in:!x.a,timeout:3e3,onEnter:g.b,children:e=>Object(n.jsxs)(p.Fragment,{children:[!x.a&&Object(n.jsx)(p.Suspense,{fallback:null,children:Object(n.jsx)(_,{})}),Object(n.jsxs)("header",{className:"intro__text",children:[Object(n.jsx)("h1",{className:b()("intro__name",`intro__name--${e}`),id:j,children:Object(n.jsx)(f.a,{text:"Gonzalez Leonel",start:!x.a,delay:300})}),Object(n.jsxs)(D.a,{level:0,as:"h2",className:"intro__title",children:[Object(n.jsx)(R.a,{className:"intro__title-label",children:`FullStack dev + ${d}`}),Object(n.jsxs)("span",{"aria-hidden":!0,className:b()("intro__title-row",{"intro__title-row--hidden":x.a}),children:[Object(n.jsx)("span",{className:b()("intro__title-word",`intro__title-word--${e}`),style:{"--delay":Q.b.base.durationXS},children:"FullStack"}),Object(n.jsx)("span",{className:b()("intro__title-line",`intro__title-line--${e}`)})]}),Object(n.jsx)(v.a,{className:b()("intro__title-row",{"intro__title-row--hidden":x.a}),component:"span",children:u.map((e=>Object(n.jsx)(h.a,{appear:!0,timeout:{enter:3e3,exit:2e3},onEnter:g.b,children:t=>Object(n.jsx)("span",{"aria-hidden":!0,className:b()("intro__title-word","intro__title-word--plus",`intro__title-word--${t}`),style:{"--delay":Q.b.base.durationL},children:e})},e)))})]})]}),A.width>w.a.tablet&&Object(n.jsx)("div",{className:b()("intro__scroll-indicator",`intro__scroll-indicator--${e}`,{"intro__scroll-indicator--hidden":c}),status:e}),A.width<=w.a.tablet&&Object(n.jsx)("div",{className:b()("intro__mobile-scroll-indicator",`intro__mobile-scroll-indicator--${e}`,{"intro__mobile-scroll-indicator--hidden":c}),children:Object(n.jsx)(B,{"aria-hidden":!0})})]})},a.themeId)})},U=r(57),C=r(19),k=r(69),S=r(55),z=r.p+"static/media/profile.9ed184e4.png",T=r.p+"static/media/profile-large.9ed184e4.png",F=r(51);r(77);const P=({status:e,titleId:t})=>Object(n.jsxs)(p.Fragment,{children:[Object(n.jsx)(D.a,{className:b()("profile__title",`profile__title--${e}`),level:3,id:t,children:Object(n.jsx)(f.a,{text:"Perfil",start:"exited"!==e,delay:500})}),Object(n.jsxs)(F.a,{className:b()("profile__description",`profile__description--${e}`),size:"l",children:["Hola mi nombre es Leo, un apasionado por el desarrollo de software y estoy en busqueda de mi primera experiencia profesional IT. Me considero una persona proactiva, responsable y con buena comunicaci\xf3n. Me gustar\xeda formar parte de un equipo en donde pueda crecer y desarrollarme profesionalmente. Puede conocer mis skills haciendo click ",Object(n.jsx)(U.a,{href:"/uses",children:"aqu\xed"}),"."]})]});var L=({id:e,visible:t,sectionRef:r})=>{const c=`${e}-title`;return Object(n.jsx)(I.a,{className:"profile",as:"section",id:e,ref:r,"aria-labelledby":c,tabIndex:-1,children:Object(n.jsx)(h.a,{in:t,timeout:0,onEnter:g.b,children:e=>Object(n.jsxs)("div",{className:"profile__content",children:[Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsx)(P,{status:e,titleId:c}),Object(n.jsx)(C.a,{secondary:!0,className:b()("profile__button",`profile__button--${e}`),href:"http://mailto:leogonzalez777.lg@gmail.com",icon:"send",children:"Enviar un mensaje"})]}),Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsxs)("div",{className:"profile__tag","aria-hidden":!0,children:[Object(n.jsx)(k.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(n.jsx)("div",{className:b()("profile__tag-text",`profile__tag-text--${e}`),children:"About Me"})]}),Object(n.jsx)("div",{className:"profile__image-wrapper",children:Object(n.jsx)(S.a,{reveal:!0,delay:100,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=",srcSet:`${z} 480w, ${T} 960w`,sizes:`(max-width: ${w.a.mobile}px) 100vw, 480px`,alt:"Mi foto de perfil"})})]})]})})})},J=r(60),G={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","\tvec4 sum = vec4( 0.0 );","\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;","\tgl_FragColor = sum;","}"].join("\n")},H={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","\tvec4 sum = vec4( 0.0 );","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;","\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;","\tgl_FragColor = sum;","}"].join("\n")},Y=r(74),W=r(61),Z=r(59),V=r(63);const $="spring-up",K="laptop-open";var X={phone:{url:a,width:374,height:512,position:{x:0,y:0,z:0},animation:$},laptop:{url:s,width:1280,height:800,position:{x:0,y:0,z:0},animation:K}};r(78);const q="Frame",ee="Screen";var te=({models:e,show:t=!0,showDelay:r=0,cameraPosition:c={x:0,y:0,z:8},enableControls:i,style:a,className:s,alt:o,...A})=>{const[l,d]=Object(p.useState)(),[u,j]=Object(p.useState)(!1),h=Object(p.useRef)(),v=Object(p.useRef)(),f=Object(p.useRef)(),g=Object(p.useRef)(),x=Object(p.useRef)(),O=Object(p.useRef)(),E=Object(p.useRef)(),y=Object(p.useRef)(),B=Object(p.useRef)(),Q=Object(p.useRef)(),D=Object(p.useRef)(),I=Object(p.useRef)(),M=Object(p.useRef)(),R=Object(p.useRef)(),_=Object(p.useRef)(),N=Object(p.useRef)(),U=Object(p.useRef)(),C=Object(p.useRef)(),k=Object(p.useRef)(),S=Object(m.d)(h,!1,{threshold:.4}),z=Object(m.h)();Object(p.useEffect)((()=>{const{clientWidth:t,clientHeight:n}=h.current;y.current=new J.Ob({canvas:v.current,alpha:!0,antialias:!1,powerPreference:"high-performance"}),y.current.setPixelRatio(2),y.current.setSize(t,n),y.current.outputEncoding=J.Pb,y.current.physicallyCorrectLights=!0,f.current=new J.fb(36,t/n,.1,100),f.current.position.set(c.x,c.y,c.z),E.current=new J.sb,g.current=new J.Db,x.current=new Y.a,O.current=new J.u;const i=new J.b(16777215,1.2),a=new J.o(16777215,1.1),s=new J.o(16777215,.8);s.position.set(-6,2,2),a.position.set(.5,0,.866),U.current=[i,a,s],U.current.forEach((e=>E.current.add(e))),B.current=new J.u,E.current.add(B.current),B.current.position.set(0,0,-.8),B.current.rotateX(Math.PI/2);const o=512;Q.current=new J.Nb(o,o),Q.current.texture.generateMipmaps=!1,D.current=new J.Nb(o,o),D.current.texture.generateMipmaps=!1;const A=new J.gb(8,8).rotateX(Math.PI/2),l=new J.S({map:Q.current.texture,opacity:.8,transparent:!0});N.current=new J.R(A,l),N.current.scale.y=-1,B.current.add(N.current),C.current=new J.R(A),C.current.visible=!1,B.current.add(C.current);const u=new J.S({color:16777215,opacity:0,transparent:!0});k.current=new J.R(A,u),k.current.rotateX(Math.PI),k.current.position.y-=1e-5,B.current.add(k.current),I.current=new J.db(-4,4,4,-4,0,1.5),I.current.rotation.x=Math.PI/2,B.current.add(I.current),M.current=new J.T,M.current.userData.darkness={value:3},M.current.onBeforeCompile=e=>{e.uniforms.darkness=M.current.userData.darkness,e.fragmentShader=`\n        uniform float darkness;\n        ${e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}\n      `},M.current.depthTest=!1,M.current.depthWrite=!1,R.current=new J.tb(G),R.current.depthTest=!1,_.current=new J.tb(H),_.current.depthTest=!1;const m=async(e,t)=>{e.encoding=J.Pb,e.minFilter=J.H,e.magFilter=J.H,e.flipY=!1,e.anisotropy=y.current.capabilities.getMaxAnisotropy(),e.generateMipmaps=!1,await y.current.initTexture(e),t.material.color=new J.l(16777215),t.material.transparent=!1,t.material.map=e},p=e.map((async(e,t)=>{const{texture:n,position:c,url:i}=e;let a;const[s,o]=await Promise.all([await x.current.loadAsync(i),await g.current.loadAsync(n.placeholder)]);s.scene.traverse((async e=>{e.material&&(e.material.color=new J.l(2039845),e.material.color.convertSRGBToLinear()),e.name===ee&&(m(o,e),a=async()=>{const t=await Object(Z.a)(n),r=await g.current.loadAsync(t);await m(r,e)})})),O.current.add(s.scene);return{...function({model:e,gltf:t,reduceMotion:r,renderFrame:n,index:c,showDelay:i}){const a=new J.Kb(e.position.x,e.position.y,e.position.z);if(r)return void t.scene.position.set(...a.toArray());if(e.animation===$){const e=new J.Kb(a.x,a.y-1,a.z),r=a;t.scene.position.set(...e.toArray());const s=Object(W.g)(t.scene.position,(({x:e,y:r,z:c})=>{t.scene.position.set(e,r,c),n()}));return{animation:Object(W.a)(Object(W.b)(300*c+.6*i),Object(W.e)({from:e,to:r,stiffness:60,damping:16,restSpeed:.001})),modelValue:s}}if(e.animation===K){const e=t.scene.children.find((e=>e.name===q)),r=new J.Kb(J.P.degToRad(90),0,0),s=new J.Kb(0,0,0);t.scene.position.set(...a.toArray()),e.rotation.set(...r.toArray());const o=Object(W.g)(e.rotation,(({x:t,y:r,z:c})=>{e.rotation.set(t,r,c),n()}));return{animation:Object(W.a)(Object(W.b)(300*c+i+200),Object(W.e)({from:r,to:s,stiffness:50,damping:14,restSpeed:.001})),modelValue:o}}}({model:e,gltf:s,position:c,reduceMotion:z,renderFrame:F,index:t,showDelay:r}),loadFullResTexture:a}}));return d(p),()=>{Object(V.c)(U.current),Object(V.b)(E.current),Object(V.a)(y.current)}}),[]);const T=Object(p.useCallback)((e=>{C.current.visible=!0,C.current.material=R.current,C.current.material.uniforms.tDiffuse.value=Q.current.texture,R.current.uniforms.h.value=e*(1/256),y.current.setRenderTarget(D.current),y.current.render(C.current,I.current),C.current.material=_.current,C.current.material.uniforms.tDiffuse.value=D.current.texture,_.current.uniforms.v.value=e*(1/256),y.current.setRenderTarget(Q.current),y.current.render(C.current,I.current),C.current.visible=!1}),[]),F=Object(p.useCallback)((()=>{const e=E.current.background;E.current.background=null,E.current.overrideMaterial=M.current,y.current.setRenderTarget(Q.current),y.current.render(E.current,I.current),E.current.overrideMaterial=null,T(5),T(2),y.current.setRenderTarget(null),E.current.background=e,y.current.render(E.current,f.current)}),[T]);return Object(p.useEffect)((()=>{let e=[];if(!l)return;E.current.add(O.current);return t&&(async()=>{const t=await Promise.all(l);j(!0);const r=t.map((async t=>{if(t.animation){const r=t.animation.start(t.modelValue);e.push(r)}z&&F(),await t.loadFullResTexture(),z&&F()}));await Promise.all(r)})(),()=>{for(const t of e)t.stop()}}),[l,z,F,t]),Object(p.useEffect)((()=>{let e,t;const r=r=>{const{rotation:n}=O.current,{innerWidth:c,innerHeight:i}=window,a=(r.clientX-c/2)/c,s=(r.clientY-i/2)/i;t||(t=Object(W.g)({x:n.x,y:n.y},(({x:e,y:t})=>{n.set(e,t,n.z),F()}))),e=Object(W.e)({from:t.get(),to:{x:s/2,y:a/2},stiffness:40,damping:40,velocity:t.getVelocity(),restSpeed:1e-5,mass:1.4}).start(t)};return S&&!z&&window.addEventListener("mousemove",r),()=>{var t;window.removeEventListener("mousemove",r),null===(t=e)||void 0===t||t.stop()}}),[S,z,F]),Object(p.useEffect)((()=>{const e=()=>{if(!h.current)return;const{clientWidth:e,clientHeight:t}=h.current;y.current.setSize(e,t),f.current.aspect=e/t,f.current.updateProjectionMatrix(),F()};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[F]),Object(n.jsx)("div",{className:b()("model",{"model--loaded":u},s),style:{"--delay":Object(w.c)(r),...a},ref:h,role:"img","aria-label":o,...A,children:Object(n.jsx)("canvas",{className:"model__canvas",ref:v})})};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ne=p.createElement("path",{d:"M113.904 33.552l-.288 1.152a18.13 18.13 0 0 1-.432 1.44l-.864 3.744c-11.808 46.224-36.864 75.312-82.656 95.76-4.752-9.648-8.784-15.12-18.144-24.192 38.304-11.952 64.224-37.44 72.432-70.992H23.76c-15.264.144-18.72.288-23.76.864v-25.92c5.472.864 9.504 1.152 24.192 1.152h73.44c.432-8.928 7.344-15.552 16.128-15.552 9.072 0 16.272 7.2 16.272 16.272s-7.056 16.128-16.128 16.272zm-.144-24.48c-4.464 0-8.208 3.744-8.208 8.208 0 4.32 3.744 8.064 8.208 8.064s8.208-3.744 8.208-8.064c0-4.464-3.744-8.208-8.208-8.208zm104.528 111.024h-61.776v9.936h-26.208c.864-7.92 1.152-12.816 1.152-23.472V32.544c0-6.192-.144-10.656-.576-16.56 5.04.432 7.92.576 17.424.576h77.616c8.928 0 11.088 0 17.856-.576-.288 5.04-.432 10.224-.432 16.992v73.008c0 11.088.288 18 1.008 23.76h-26.064v-9.648zm0-23.04V39.6h-61.776v57.456h61.776zm45.776-68.688L276.88 7.92c15.84 5.76 31.392 12.96 41.328 19.008L305.392 48.96C292 40.032 276.88 32.544 264.064 28.368zm73.008-16.992l14.256-4.752c5.04 6.624 9.36 14.688 12.672 22.896l-14.256 5.184c-3.888-9.504-7.488-16.272-12.672-23.328zm-84.24 52.416L266.08 43.2c15.408 6.048 28.944 12.816 40.176 20.448l-12.24 22.608c-10.368-8.064-26.496-16.848-41.184-22.464zM357.808 4.608L371.344 0c4.752 6.048 8.784 12.816 12.816 22.176l-13.824 5.04c-4.032-9.504-7.776-16.272-12.528-22.608zm-93.6 128.88l-7.2-27.36c12.672 0 30.96-3.888 44.352-9.216 26.928-10.656 45.936-31.824 56.16-62.928 6.912 7.776 13.536 13.392 21.168 18C360.4 97.2 327.712 121.968 274.432 131.04c-5.04 1.008-7.344 1.584-10.224 2.448zM449.952 64.8v42.912h22.464c9.216 0 13.68-.144 19.44-.864v21.888c-5.184-.432-9.216-.576-19.44-.576h-66.96c-10.512 0-12.672 0-19.584.576v-21.888c5.328.72 8.928.864 19.44.864h21.6V64.8h-13.248c-9.504 0-12.528.144-18.72.72V43.488c5.616.72 9.936 1.008 18.576 1.008h50.256c9.216 0 13.248-.288 18.864-1.008V65.52c-4.032-.432-9.936-.72-18.864-.72h-13.824zm97.472-62.064l27.216 4.896c-.72 1.296-1.008 1.728-1.728 3.6-.288.432-.576 1.296-1.008 2.16-.576 1.44-1.008 2.448-1.296 3.024-1.872 4.176-1.872 4.176-2.88 6.192l36.144-.432c5.616 0 7.2-.288 10.656-1.584L626.48 32.4c-1.728 2.88-2.16 3.744-4.176 10.224-7.344 23.904-17.136 42.624-29.808 57.024C579.392 114.624 563.12 126 539.504 136.8c-4.752-9.216-9.216-14.832-17.28-21.888 20.448-7.488 35.424-16.704 48.096-29.376 10.656-10.8 18.72-24.336 24.048-40.896l-38.304.432c-9.36 14.832-19.008 25.344-32.688 36.144-7.344-8.352-10.944-11.52-20.448-17.28 17.568-12.384 28.944-25.488 38.304-43.92 3.744-7.488 5.472-12.24 6.192-17.28zm137.936 130.32h-27.792c.576-6.48.864-10.656.864-22.032V27.216c0-11.664-.144-13.104-1.008-20.88h27.792c-.576 4.176-.72 11.376-.72 21.024v19.728c24.48 8.064 43.056 16.56 65.52 29.952l-13.68 24.48c-13.968-9.648-30.96-19.008-45.36-25.056-5.04-2.016-5.04-2.016-6.48-2.88v37.44c0 9.648.288 16.848.864 22.032z"});function ce({title:e,titleId:t,...r},n){return p.createElement("svg",re({"aria-hidden":"true",fill:"currentColor",width:750,height:137,viewBox:"0 0 750 137",ref:n,"aria-labelledby":t},r),e?p.createElement("title",{id:t},e):null,ne)}const ie=p.forwardRef(ce);r.p,r(79);var ae=({id:e,visible:t,sectionRef:r,index:c,title:i,description:a,model:s,buttonText:o,buttonLink:A,alternate:l,...d})=>{const u=Object(M.c)(),{width:j}=Object(m.l)(),v=`${e}-title`,f=j<=w.a.tablet,x="light"===u.themeId?.7:1,O=c<10?`0${c}`:c,E=`(max-width: ${w.a.tablet}px) 30vw, 20vw`,y=`(max-width: ${w.a.tablet}px) 80vw, 40vw`,B=e=>Object(n.jsxs)("div",{className:"project-summary__details",children:[Object(n.jsxs)("div",{"aria-hidden":!0,className:"project-summary__index",children:[Object(n.jsx)(k.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(n.jsx)("span",{className:b()("project-summary__index-number",`project-summary__index-number--${e}`),children:O})]}),Object(n.jsx)(D.a,{level:3,as:"h2",className:b()("project-summary__title",`project-summary__title--${e}`),id:v,children:i}),Object(n.jsx)(F.a,{className:b()("project-summary__description",`project-summary__description--${e}`),children:a}),Object(n.jsx)("div",{className:b()("project-summary__button",`project-summary__button--${e}`),children:Object(n.jsx)(C.a,{iconHoverShift:!0,href:A,iconEnd:"arrowRight",children:o})})]}),Q=e=>Object(n.jsxs)("div",{className:"project-summary__preview",children:["laptop"===s.type&&Object(n.jsxs)(p.Fragment,{children:[Object(n.jsx)(ie,{style:{"--opacity":x},className:b()("project-summary__svg","project-summary__svg--laptop",`project-summary__svg--${e}`,{"project-summary__svg--light":"light"===u.themeId})}),Object(n.jsx)(te,{className:b()("project-summary__model","project-summary__model--laptop"),alt:s.alt,cameraPosition:{x:0,y:0,z:8},showDelay:800,show:Object(g.a)(e),models:[{...X.laptop,texture:{...s.textures[0],sizes:y}}]})]}),"phone"===s.type&&Object(n.jsxs)(p.Fragment,{children:[Object(n.jsx)(ie,{style:{"--opacity":x},className:b()("project-summary__svg","project-summary__svg--phone",`project-summary__svg--${e}`,{"project-summary__svg--light":"light"===u.themeId})}),Object(n.jsx)(te,{className:b()("project-summary__model","project-summary__model--phone"),alt:s.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:500,show:Object(g.a)(e),models:[{...X.phone,position:{x:-.6,y:1.1,z:0},texture:{...s.textures[0],sizes:E}},{...X.phone,position:{x:.6,y:-.5,z:.3},texture:{...s.textures[1],sizes:E}}]})]})]});return Object(n.jsx)(I.a,{className:b()("project-summary",{"project-summary--alternate":l,"project-summary--first":"01"===c}),as:"section","aria-labelledby":v,ref:r,id:e,tabIndex:-1,...d,children:Object(n.jsx)("div",{className:"project-summary__content",children:Object(n.jsx)(h.a,{in:t,timeout:0,onEnter:g.b,children:e=>Object(n.jsxs)(p.Fragment,{children:[!l&&!f&&Object(n.jsxs)(p.Fragment,{children:[B(e),Q(e)]}),(l||f)&&Object(n.jsxs)(p.Fragment,{children:[Q(e),B(e)]})]})})})})},se=r(17),oe=r(3);const Ae=["JavaScript","React JS","Node JS","php","MySql"];t.default=()=>{const{status:e}=Object(m.j)(),{hash:t,state:r}=Object(oe.e)(),j=Object(p.useRef)(!0),[b,h]=Object(p.useState)([]),[v,f]=Object(p.useState)(!1),g=Object(p.useRef)(),x=Object(p.useRef)(),w=Object(p.useRef)(),O=Object(p.useRef)(),E=Object(p.useRef)(),y=Object(m.h)();return Object(p.useEffect)((()=>{const e=[g,x,w,O,E],t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target;if(t.unobserve(r),b.includes(r))return;h((e=>[...e,r]))}}))}),{rootMargin:"0px 0px -10% 0px"}),r=new IntersectionObserver((([e])=>{f(!e.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((e=>{t.observe(e.current)})),r.observe(g.current),()=>{t.disconnect(),r.disconnect()}}),[b]),Object(p.useEffect)((()=>{const r="entered"===e,n="scrollBehavior"in document.documentElement.style;let c,i;const a=(e,t)=>{clearTimeout(i);const r=[g,x,E],a=e.replace("#",""),s=r.filter((e=>e.current.id===a))[0];if(!s)return;const o=t&&!y?"smooth":"instant",A=s.current.offsetTop;c=new IntersectionObserver(((e,t)=>{const[r]=e;r.isIntersecting&&(i=setTimeout((()=>{s.current.focus()}),y?0:400),t.unobserve(r.target))}),{rootMargin:"-20% 0px -20% 0px"}),c.observe(s.current),n?window.scroll({top:A,left:0,behavior:o}):window.scrollTo(0,A)};return t&&j.current&&r?(a(t,!1),j.current=!1):!t&&j.current&&r?(window.scrollTo(0,0),j.current=!1):r&&a(t,!0),()=>{clearTimeout(i),c&&c.disconnect()}}),[t,r,y,e]),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)(se.a,{children:[Object(n.jsx)("title",{children:"Gonzalez Leonel | FullStack Developer"}),Object(n.jsx)("meta",{name:"description",content:"Portfolio of Gonzalez Leonel \u2013 a digital designer working on web & mobile\r apps with a focus on motion and user experience design."}),Object(n.jsx)("link",{rel:"prefetch",href:a,as:"fetch",crossorigin:""}),Object(n.jsx)("link",{rel:"prefetch",href:s,as:"fetch",crossorigin:""})]}),Object(n.jsx)(N,{id:"intro",sectionRef:g,disciplines:Ae,scrollIndicatorHidden:v}),Object(n.jsx)(ae,{id:"project-1",sectionRef:x,visible:b.includes(x.current),index:1,title:"Agile CRM | Gestion\xe1 tus clientes.",description:"Agile te permite tener un control de los clientes de tu empresa.",buttonText:"View Project",buttonLink:"https://lg-crm-agile.netlify.app/",model:{type:"laptop",alt:"Smart Sparrow lesson builder",textures:[{src:l,srcSet:`${l} 800w, ${l} 1440w`,placeholder:d.a}]}}),Object(n.jsx)(ae,{id:"project-2",alternate:!0,sectionRef:w,visible:b.includes(w.current),index:2,title:"ClimApp | El clima en tiempo real.",description:"A trav\xe9s de geolocalizaci\xf3n ClimApp te perimite conocer el clima en tiempo real de tu ciudad.",buttonText:"View Website",buttonLink:"https://lg-climapp.netlify.app/",model:{type:"phone",alt:"App login screen",textures:[{src:i,srcSet:`${i} 254w, ${i} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k="},{src:c,srcSet:`${c} 254w, ${c} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k="}]}}),Object(n.jsx)(ae,{id:"project-3",sectionRef:O,visible:b.includes(O.current),index:3,title:"PatientShifts Tool",description:"Esta herramienta es un CRUD completo que permite; gestionar turnos de pacientes de una veterinaria. ",buttonText:"View Project",buttonLink:"https://lg-administrador-de-veterinaria.netlify.app/",model:{type:"laptop",alt:"Annotating a biomedical image in the Slice app",textures:[{src:o,srcSet:`${o} 980w, ${o} 1376w`,placeholder:A.a}]}}),Object(n.jsx)(L,{sectionRef:E,visible:b.includes(E.current),id:"details"}),Object(n.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=6.228a8bd2.chunk.js.map