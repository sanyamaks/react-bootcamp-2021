(this["webpackJsonpreact-bootcamp-2021"]=this["webpackJsonpreact-bootcamp-2021"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),i=(n(21),n(22),n(23),n(1)),s=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header__container",children:Object(i.jsxs)("h1",{className:"header__text",children:["Weather",Object(i.jsx)("span",{className:"header__additional-text",children:" forecast"})]})})})},o=r.a.memo(s),u=n(2),d=n(4),f=(n(25),n(26),n(3)),j=n.n(f),b=(n(27),n(6)),v=Object(b.b)((function(e){return{cities:e.cities}}));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00001 6.41436L2.70712 11.7073L1.29291 10.293L8.00001 3.58594L14.7071 10.293L13.2929 11.7073L8.00001 6.41436Z",fill:"#8083A4"});function h(e,t){var n=e.title,r=e.titleId,c=O(e,["title","titleId"]);return a.createElement("svg",m({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,p)}var _=a.forwardRef(h),y=(n.p,function(e){var t=e.cities,n=e.sendCoordinates,r="Select city",c=Object(a.useState)(!1),l=Object(d.a)(c,2),s=l[0],o=l[1],u=Object(a.useState)(!0),f=Object(d.a)(u,2),b=f[0],v=f[1],m=Object(a.useState)(r),O=Object(d.a)(m,2),p=O[0],h=O[1],y=Object(a.useState)(-1),g=Object(d.a)(y,2),E=g[0],L=g[1],w=Object(a.useState)(-1),x=Object(d.a)(w,2),C=x[0],S=x[1],D=Object(a.useState)(-1),A=Object(d.a)(D,2),N=A[0],R=A[1],M=Object(a.useRef)(null),T=Object(a.useRef)(null);Object(a.useEffect)((function(){return s&&(document.addEventListener("keydown",P),document.addEventListener("click",H)),function(){document.removeEventListener("keydown",P),document.removeEventListener("click",H)}}),[E]);var H=Object(a.useCallback)((function(e){T.current&&e.target instanceof HTMLElement&&(T.current.contains(e.target)||(-1!==N&&(R(C),S(-1)),k()))}),[]),P=Object(a.useCallback)((function(e){if("ArrowDown"===e.key&&E<t.length-1&&(e.preventDefault(),R(-1),L(E+1)),"ArrowUp"===e.key&&E>0&&(e.preventDefault(),R(-1),L(E-1))," "===e.key||"Enter"===e.key){e.preventDefault();var a=t[E],r=null===a||void 0===a?void 0:a.name;r&&(M.current&&(M.current.value=r),h(r),R(E),S(-1),n(t[E].coordinates),k())}"Escape"===e.key&&(R(C),S(-1),k())}),[E]);function k(){o(!1),v(!0),document.removeEventListener("click",H),document.removeEventListener("keydown",P)}return Object(i.jsxs)("div",{className:"select",children:[Object(i.jsxs)("select",{className:"select__main",ref:M,onChange:function(e){!function(e){h(e.target.value),R(t.findIndex((function(t){return t.name===e.target.value})));var a=t.find((function(t){return t.name===e.target.value}));a&&n(a.coordinates),S(-1)}(e)},children:[Object(i.jsx)("option",{className:"select__option",disabled:!0,value:p,selected:!0,children:p}),t.map((function(e){return Object(i.jsx)("option",{className:"select__option",value:e.name,children:e.name},e.id)}))]}),Object(i.jsxs)("div",{className:"select__custom","aria-hidden":b,children:[Object(i.jsxs)("div",{className:j()("select__custom-placeholder-container",{"select__custom-placeholder-container_active":s}),onClick:function(e){s?k():(o(!0),v(!1),-1!==N?(L(N),S(N),R(-1)):L(-1),document.addEventListener("click",H),document.addEventListener("keydown",P),e.stopPropagation())},children:[Object(i.jsx)("p",{className:j()("select__custom-placeholder",{"select__custom-placeholder_active":p!==r}),children:p}),Object(i.jsx)(_,{className:j()("select__custom-arrow",{"select__custom-arrow_rotate":s})})]}),s&&Object(i.jsx)("div",{className:"select__custom-options",ref:T,children:t.map((function(e,t){return Object(i.jsx)("div",{className:j()("select__custom-option",{"select__custom-option_hover":E===t,"select__custom-option_active":N===t}),"data-value":e.name,onClick:function(){!function(e,t){M.current&&(M.current.value=t.name),h(t.name),R(e),S(-1),n(t.coordinates),k()}(t,e)},children:Object(i.jsxs)("p",{className:"select__custom-option-text",children:[" ",e.name]})},e.id)}))})]})]})}),g=v(r.a.memo(y)),E=(n(32),function(e){var t=e.sendDate,n=e.className,r="Select date",c=Object(a.useRef)(null),l=Object(a.useState)(r),s=Object(d.a)(l,2),o=s[0],u=s[1],f=Object(a.useState)(""),b=Object(d.a)(f,2),v=b[0],m=b[1],O=Object(a.useState)(""),p=Object(d.a)(O,2),h=p[0],_=p[1];Object(a.useEffect)((function(){var e=new Date,t=new Date;m(new Date(t.getTime()-432e6).toLocaleString("en-GB").split(",")[0].split("/").reverse().join("-")),_(new Date(e.getTime()-864e5).toLocaleString("en-GB").split(",")[0].split("/").reverse().join("-"))}),[]);return Object(i.jsxs)("div",{className:j()("input-date-container",n),children:[Object(i.jsx)("input",{className:"input-date-container__input",ref:c,type:"date",min:v,max:h,onChange:function(e){var n=new Date(e.target.value);t(n.getTime()/1e3),u(n.toLocaleString("en-GB").split(",")[0])}}),Object(i.jsx)("p",{className:j()("input-date-container__value",{"input-date-container__value_active":r!==o}),children:o})]})}),L=r.a.memo(E);n(33);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=a.createElement("path",{opacity:.6,d:"M105.547 136.644C74.6969 144.91 15.7198 121.458 7.44401 90.5726C-0.831753 59.687 10.1392 65.0111 40.9888 56.745C71.8385 48.4789 89.7421 -10.662 133.521 44.0256C177.3 98.7132 136.396 128.378 105.547 136.644Z",fill:"#8083A4",fillOpacity:.06}),S=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M122.5 119H94.5001H57.0001H35.5001H35.0001V118.992C26.6711 118.728 20.0001 111.893 20.0001 103.5C20.0001 95.4403 26.1516 88.8173 34.0157 88.0702C36.9893 78.1939 46.1546 71 57.0001 71C59.3754 71 61.6701 71.3451 63.8368 71.9878C69.0317 60.2162 80.8064 52 94.5001 52C112.092 52 126.517 65.5601 127.893 82.7983C135.479 85.1066 141 92.1586 141 100.5C141 110.55 132.986 118.728 123 118.993V119H122.5Z",fill:"white"}),D=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M133.314 85.4883C133.761 87.0812 134 88.761 134 90.4967C134 100.547 125.986 108.725 116 108.99V108.997H115.5H90.5001H50.0001H28.5001H28.0001V108.989C25.1881 108.9 22.565 108.062 20.3239 106.667C21.7532 113.551 27.7482 118.762 35.0001 118.992V119H35.5001H57.0001H94.5001H122.5H123V118.994C132.986 118.729 141 110.55 141 100.5C141 94.3202 137.97 88.848 133.314 85.4883Z",fill:"#373AF5",fillOpacity:.1}),A=a.createElement("path",{d:"M35.0001 119H34.0001V120H35.0001V119ZM35.0001 118.992H36.0001V118.023L35.0317 117.993L35.0001 118.992ZM34.0157 88.0702L34.1103 89.0657L34.7794 89.0021L34.9732 88.3585L34.0157 88.0702ZM63.8368 71.9878L63.5524 72.9465L64.3963 73.1969L64.7517 72.3916L63.8368 71.9878ZM127.893 82.7983L126.896 82.8778L126.95 83.5567L127.602 83.755L127.893 82.7983ZM123 118.993L122.974 117.994L122 118.02V118.993H123ZM123 119V120H124V119H123ZM122.5 118H94.5001V120H122.5V118ZM94.5001 118H57.0001V120H94.5001V118ZM57.0001 118H35.5001V120H57.0001V118ZM35.5001 118H35.0001V120H35.5001V118ZM36.0001 119V118.992H34.0001V119H36.0001ZM35.0317 117.993C27.2407 117.746 21.0001 111.351 21.0001 103.5H19.0001C19.0001 112.435 26.1014 119.711 34.9684 119.992L35.0317 117.993ZM21.0001 103.5C21.0001 95.9608 26.7546 89.7645 34.1103 89.0657L33.9211 87.0746C25.5486 87.8701 19.0001 94.9197 19.0001 103.5H21.0001ZM34.9732 88.3585C37.8232 78.8929 46.608 72 57.0001 72V70C45.7012 70 36.1555 77.4948 33.0582 87.7819L34.9732 88.3585ZM57.0001 72C59.2781 72 61.477 72.3309 63.5524 72.9465L64.1212 71.0291C61.8631 70.3593 59.4727 70 57.0001 70V72ZM64.7517 72.3916C69.7924 60.9692 81.2167 53 94.5001 53V51C80.3961 51 68.271 59.4632 62.9219 71.5841L64.7517 72.3916ZM94.5001 53C111.566 53 125.561 66.1553 126.896 82.8778L128.89 82.7187C127.473 64.965 112.618 51 94.5001 51V53ZM127.602 83.755C134.779 85.9387 140 92.611 140 100.5H142C142 91.7062 136.18 84.2744 128.184 81.8416L127.602 83.755ZM140 100.5C140 110.007 132.419 117.743 122.974 117.994L123.027 119.993C133.553 119.714 142 111.093 142 100.5H140ZM122 118.993V119H124V118.993H122ZM123 118H122.5V120H123V118Z",fill:"#373AF5"}),N=a.createElement("path",{d:"M20.0001 103.5C20.0001 94.9396 26.9396 88 35.5001 88C38.0189 88 40.3974 88.6008 42.5001 89.6669",stroke:"#373AF5",strokeWidth:2,strokeLinecap:"round"}),R=a.createElement("path",{d:"M128 85.5C128 66.9985 113.002 52 94.5 52C75.9985 52 61 66.9985 61 85.5",stroke:"#373AF5",strokeWidth:2,strokeLinecap:"round"}),M=a.createElement("circle",{cx:136.5,cy:17.5,r:5.5,stroke:"#373AF5",strokeWidth:2}),T=a.createElement("circle",{cx:6.50006,cy:36.5,r:3.5,stroke:"#373AF5",strokeWidth:2}),H=a.createElement("circle",{cx:137.5,cy:142.5,r:3.5,stroke:"#373AF5",strokeWidth:2}),P=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M65 47C64.4477 47 64 47.4477 64 48V51H61C60.4477 51 60 51.4477 60 52C60 52.5523 60.4477 53 61 53H64V56C64 56.5523 64.4477 57 65 57C65.5523 57 66 56.5523 66 56V53H69C69.5523 53 70 52.5523 70 52C70 51.4477 69.5523 51 69 51H66V48C66 47.4477 65.5523 47 65 47Z",fill:"#373AF5"}),k=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.83 62.2135C145.407 62.5685 145.352 63.1992 145.707 63.6223L147.636 65.9207L145.337 67.8494C144.914 68.2044 144.859 68.8351 145.214 69.2582C145.569 69.6813 146.2 69.7364 146.623 69.3814L148.921 67.4528L150.849 69.7507C151.204 70.1737 151.835 70.2289 152.258 69.8739C152.681 69.5189 152.736 68.8882 152.381 68.4651L150.453 66.1672L152.751 64.2391C153.174 63.8841 153.229 63.2534 152.874 62.8303C152.519 62.4072 151.889 62.352 151.466 62.7071L149.168 64.6352L147.239 62.3367C146.884 61.9137 146.253 61.8585 145.83 62.2135Z",fill:"#373AF5"}),I=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.1759 132.12C37.632 132.216 37.2688 132.734 37.3647 133.278L37.8857 136.233L34.9313 136.754C34.3874 136.85 34.0242 137.368 34.1201 137.912C34.216 138.456 34.7347 138.819 35.2785 138.723L38.233 138.202L38.7539 141.157C38.8498 141.701 39.3685 142.064 39.9124 141.968C40.4563 141.872 40.8194 141.353 40.7235 140.809L40.2026 137.855L43.157 137.334C43.7009 137.238 44.0641 136.72 43.9682 136.176C43.8723 135.632 43.3536 135.269 42.8097 135.365L39.8553 135.886L39.3343 132.931C39.2384 132.387 38.7198 132.024 38.1759 132.12Z",fill:"#373AF5"});function V(e,t){var n=e.title,r=e.titleId,c=x(e,["title","titleId"]);return a.createElement("svg",w({width:160,height:160,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,C,S,D,A,N,R,M,T,H,P,k,I)}var Z=a.forwardRef(V),Y=(n.p,function(e){var t=e.className,n=e.errorMessage,a=e.isLoad;return Object(i.jsxs)("div",{className:j()("not-found-cards",t),children:[Object(i.jsx)(Z,{className:j()("not-found-cards__icon",{"not-found-cards__icon_load":a})}),Object(i.jsx)("p",{className:"not-found-cards__message",children:n||"Fill in all the fields and the weather will be displayed"})]})}),F=r.a.memo(Y),W=n(5);n(34);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var B=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.41424 12.0001L16.7071 19.293L15.2929 20.7072L6.58582 12.0001L15.2929 3.29297L16.7071 4.70718L9.41424 12.0001Z",fill:"#8083A4"});function z(e,t){var n=e.title,r=e.titleId,c=q(e,["title","titleId"]);return a.createElement("svg",G({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,B)}var J=a.forwardRef(z);n.p;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z",fill:"#8083A4"});function X(e,t){var n=e.title,r=e.titleId,c=U(e,["title","titleId"]);return a.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Q)}var $,ee=a.forwardRef(X),te=(n.p,n(35),function(e){var t=e.className,n=e.card,r=Object(a.useState)(""),c=Object(d.a)(r,2),l=c[0],s=c[1],o=Object(a.useState)(""),u=Object(d.a)(o,2),f=u[0],b=u[1],v=Object(a.useCallback)((function(e){return["jan","feb","mar"," apr","may","jun","jul","aug","sep","oct","nov","dec"][e]}),[]);return Object(a.useEffect)((function(){if(n){if(n.temperature){var e=Math.round(null===n||void 0===n?void 0:n.temperature);e>0&&s("+".concat(e))}else s("");if(n.date){var t=new Date(1e3*(null===n||void 0===n?void 0:n.date)),a=t.getDate(),r=v(t.getMonth()),c=t.getFullYear();b("".concat(a," ").concat(r," ").concat(c))}else b("")}}),[n]),Object(i.jsxs)("article",{className:j()("card",t),children:[Object(i.jsx)("p",{className:"card__date",children:f}),Object(i.jsx)("img",{className:"card__icon",src:(null===n||void 0===n?void 0:n.image)||"",alt:"Weather icon"}),Object(i.jsx)("p",{className:"card__temperature",children:"".concat(l,"\xb0")})]})}),ne=function(e){var t=e.className,n=e.numberCards,r=e.cards,c=Object(a.useState)([]),l=Object(d.a)(c,2),s=l[0],o=l[1],u=Object(a.useState)(0),f=Object(d.a)(u,2),b=f[0],v=f[1];function m(){window.innerWidth>768&&r.length>3?(o(r.slice(0,3)),v(3)):o(Object(W.a)(r))}return Object(a.useEffect)((function(){window.innerWidth>768&&r.length>3?(o(r.slice(0,3)),v(3)):o(Object(W.a)(r))}),[r]),Object(a.useEffect)((function(){return r.length>3&&window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}}),[]),Object(i.jsxs)("div",{className:j()("cards",t),children:[r.length>3&&Object(i.jsx)("button",{className:j()("cards__button",{cards__button_disabled:3===b}),onClick:function(){r.length>3&&3!==b&&(o(r.slice(b-3-1,b-1)),v(b-1))},children:Object(i.jsx)(J,{className:"cards__button-left-icon"})}),Object(i.jsx)("div",{className:j()("cards__container",{cards__container_many:r.length>3,cards__container_one:1===r.length}),children:s.map((function(e){return Object(i.jsx)(te,{className:j()("cards__card",{cards__card_one:1===r.length}),card:e},null===e||void 0===e?void 0:e.date)}))}),n>3&&Object(i.jsx)("button",{className:j()("cards__button",{cards__button_disabled:b===r.length}),onClick:function(){r.length>3&&b!==r.length&&(o(r.slice(b-3+1,b+1)),v(b+1))},children:Object(i.jsx)(ee,{className:"cards__button-right-icon"})})]})},ae=r.a.memo(ne),re=function(e){var t=e.className,n=e.title,a=e.numberCards,r=e.errorMessage,c=e.isLoad,l=e.cards,s=e.sendCoordinates,o=e.sendDate;return Object(i.jsxs)("section",{className:j()("weather-section",t),children:[Object(i.jsx)("h2",{className:"weather-section__title",children:n}),Object(i.jsxs)("div",{className:"weather-section__inputs",children:[Object(i.jsx)(g,{sendCoordinates:s}),o&&Object(i.jsx)(L,{className:"weather-section__input-date",sendDate:o})]}),(r||0===l.length||c)&&Object(i.jsx)(F,{className:"weather-section__not-found-cards",errorMessage:r,isLoad:c}),!r&&l.length>0&&!c&&Object(i.jsx)(ae,{className:"weather-section__cards",numberCards:a,cards:l})]})},ce=r.a.memo(re),le=n(8),ie=n.n(le),se=n(14),oe="https://openweathermap.org",ue="https://api.openweathermap.org",de=["current","minutely","hourly","alerts"],fe="metric",je="7b54e6539c1070699e6118ca175348c7",be=function(){var e=Object(se.a)(ie.a.mark((function e(t){var n;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ue+"/data/2.5/onecall?lat="+t.lat+"&lon="+t.lon+"&exclude="+de.join(",")+"&units="+fe+"&appid="+je);case 2:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",Promise.reject(new Error("The request failed")));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(se.a)(ie.a.mark((function e(t,n){var a;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ue+"/data/2.5/onecall/timemachine?lat="+t.lat+"&lon="+t.lon+"&dt="+n+"&units="+fe+"&appid="+je);case 2:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:return e.abrupt("return",Promise.reject(new Error("The request failed")));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),me=function(e){return e?oe+"/img/wn/"+e+"@2x.png":null};!function(e){e.SET_7DAYS_WEATHER_INFO="SET_7DAYS_WEATHER_INFO",e.SET_7DAYS_ERROR="SET_7DAYS_ERROR",e.SET_7DAYS_LOADING="SET_7DAYS_LOADING",e.SET_DAY_PAST_WEATHER_INFO="SET_DAY_PAST_WEATHER_INFO",e.SET_DAY_PAST_ERROR="SET_DAY_PAST_ERROR",e.SET_DAY_PAST_LOADING="SET_DAY_PAST_LOADING"}($||($={}));var Oe=function(e){return{type:$.SET_7DAYS_WEATHER_INFO,payload:e}},pe=function(e){return{type:$.SET_7DAYS_ERROR,payload:e}},he=function(e){return{type:$.SET_7DAYS_LOADING,payload:e}},_e=function(e){return{type:$.SET_DAY_PAST_ERROR,payload:e}},ye=function(e){return{type:$.SET_DAY_PAST_LOADING,payload:e}},ge=function(e,t){return function(n){n(_e(null)),n(ye(!0)),ve(e,t).then((function(e){var t,a,r,c,l,i,s,o,u=e.current,d=e.hourly,f=(null===d||void 0===d?void 0:d.map((function(e){return e.temp})))||[],j=Math.max.apply(Math,Object(W.a)(f)),b=(null===d||void 0===d?void 0:d.findIndex((function(e){return e.temp===j})))||0,v=me(null!==(t=null===d||void 0===d||null===(a=d[b])||void 0===a||null===(r=a.weather)||void 0===r||null===(c=r[0])||void 0===c?void 0:c.icon)&&void 0!==t?t:null),m=null!==(l=null===d||void 0===d||null===(i=d[b])||void 0===i?void 0:i.temp)&&void 0!==l?l:null,O=null!==(s=null===u||void 0===u?void 0:u.dt)&&void 0!==s?s:null;n((o={date:O,temperature:m,image:v},{type:$.SET_DAY_PAST_WEATHER_INFO,payload:o}))})).catch((function(e){var t=e.message;n(_e(null!==t&&void 0!==t?t:"The request failed"))})).finally((function(){n(ye(!1))}))}},Ee=function(e){var t=e.sevenDays,n=e.errorMessageSevenDays,r=e.isLoadingSevenDays,c=e.dayPast,l=e.errorMessageDayPast,s=e.isLoadingDayPast,o=e.requestWeather7DaysInfo,f=e.requestWeatherInfoDayPast,j=Object(a.useState)({coordinates:null,time:null}),b=Object(d.a)(j,2),v=b[0],m=b[1];Object(a.useEffect)((function(){v.coordinates&&v.time&&f(v.coordinates,v.time)}),[v]);return Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)(ce,{title:"7 Days Forecast",sendCoordinates:function(e){o(e)},numberCards:7,cards:t,errorMessage:n,isLoad:r}),Object(i.jsx)(ce,{className:"main__weather-section",title:"Forecast for a Date in the Past",sendCoordinates:function(e){m(Object(u.a)(Object(u.a)({},v),{},{coordinates:{lat:e.lat,lon:e.lon}}))},sendDate:function(e){m(Object(u.a)(Object(u.a)({},v),{},{time:e}))},numberCards:1,cards:c,errorMessage:l,isLoad:s})]})},Le=Object(b.b)((function(e){return{sevenDays:e.sevenDays.days,errorMessageSevenDays:e.sevenDays.errorMessage,isLoadingSevenDays:e.sevenDays.isLoading,dayPast:e.dayPast.day,errorMessageDayPast:e.dayPast.errorMessage,isLoadingDayPast:e.dayPast.isLoading}}),(function(e){return{requestWeather7DaysInfo:function(t){e(function(e){return function(t){t(pe(null)),t(he(!0)),be(e).then((function(e){var t=e.daily;return null!==t&&void 0!==t?t:[]})).then((function(e){0===e.length?t(Oe([])):t(Oe(e.map((function(e){var t,n,a,r,c,l,i=me(null!==(t=null===e||void 0===e||null===(n=e.weather)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.icon)&&void 0!==t?t:null),s=null!==(r=null===e||void 0===e||null===(c=e.temp)||void 0===c?void 0:c.day)&&void 0!==r?r:null;return{date:null!==(l=null===e||void 0===e?void 0:e.dt)&&void 0!==l?l:null,temperature:s,image:i}}))))})).catch((function(e){var n=e.message;t(pe(null!==n&&void 0!==n?n:"The request failed"))})).finally((function(){t(he(!1))}))}}(t))},requestWeatherInfoDayPast:function(t,n){e(ge(t,n))}}}))(r.a.memo(Ee)),we=(n(37),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"footer__text",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})}),xe=r.a.memo(we),Ce=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(Le,{}),Object(i.jsx)(xe,{})]})},Se=n(15),De=n(16),Ae={idActiveCity:null,cities:[{id:1,name:"Samara",coordinates:{lat:"53.195873",lon:"50.100193"}},{id:2,name:"Togliatti",coordinates:{lat:"53.507836",lon:"49.420393"}},{id:3,name:"Saratov",coordinates:{lat:"51.533557",lon:"46.034257"}},{id:4,name:"Kazan",coordinates:{lat:"55.796127",lon:"49.106405"}},{id:5,name:"Krasnodar",coordinates:{lat:"45.035470",lon:"38.975313"}}],sevenDays:{days:[],errorMessage:null,isLoading:!1},dayPast:{day:[],errorMessage:null,isLoading:!1}},Ne=Object(Se.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.SET_7DAYS_LOADING:return Object(u.a)(Object(u.a)({},e),{},{sevenDays:Object(u.a)(Object(u.a)({},e.sevenDays),{},{isLoading:t.payload})});case $.SET_7DAYS_ERROR:return Object(u.a)(Object(u.a)({},e),{},{sevenDays:Object(u.a)(Object(u.a)({},e.sevenDays),{},{errorMessage:t.payload})});case $.SET_7DAYS_WEATHER_INFO:return Object(u.a)(Object(u.a)({},e),{},{sevenDays:Object(u.a)(Object(u.a)({},e.sevenDays),{},{days:Object(W.a)(t.payload)})});case $.SET_DAY_PAST_LOADING:return Object(u.a)(Object(u.a)({},e),{},{dayPast:Object(u.a)(Object(u.a)({},e.dayPast),{},{isLoading:t.payload})});case $.SET_DAY_PAST_ERROR:return Object(u.a)(Object(u.a)({},e),{},{dayPast:Object(u.a)(Object(u.a)({},e.dayPast),{},{errorMessage:t.payload})});case $.SET_DAY_PAST_WEATHER_INFO:return Object(u.a)(Object(u.a)({},e),{},{dayPast:Object(u.a)(Object(u.a)({},e.dayPast),{},{day:[t.payload]})});default:return e}}),Object(Se.a)(De.a));l.a.render(Object(i.jsx)(b.a,{store:Ne,children:Object(i.jsx)(Ce,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6f102b72.chunk.js.map