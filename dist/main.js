"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=DynaPuff&display=swap);"]),i.push([n.id,"html,\nbody {\n  width: 100%;\n  height: 100%;\n  padding: 0%;\n  margin: 0%;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 2rem;\n}\n\nh1 {\n  font-size: 45px;\n  margin: 0%;\n  font-family: 'DynaPuff', cursive;\n}\n\nmain {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n.table {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  margin: 12px;\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 54px;\n  min-height: auto;\n}\n\nh2 {\n  margin: 0%;\n  font-family: 'DynaPuff', cursive;\n}\n\n.btn {\n  max-height: fit-content;\n  max-width: fit-content;\n  font-family: 'DynaPuff', cursive;\n  border: none;\n  border-radius: 3px;\n}\n\n.btn:focus {\n  outline: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n#board {\n  margin: 0%;\n  display: flex;\n  flex-direction: column;\n  align-content: space-around;\n  height: auto;\n  max-height: 80vh;\n  overflow-y: auto;\n  border: 1px solid rgb(0, 0, 0, 0.3);\n  border-radius: 3px;\n}\n\nli {\n  padding: 4px;\n  font-family: 'DynaPuff', cursive;\n  outline: transparent;\n}\n\nli:nth-child(even) {\n  background-color: rgb(0, 0, 0, 0.15);\n}\n\n#inputs {\n  margin: 0%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  min-height: auto;\n  height: 120px;\n  max-height: 80vh;\n}\n\ninput {\n  margin: 0%;\n  padding: 4px;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid rgb(0, 0, 0, 0.1);\n  border-radius: 3px;\n  outline: none;\n  font-family: 'DynaPuff', cursive;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},913:(n,e,t)=>{var r=t(379),a=t.n(r),o=t(795),i=t.n(o),s=t(569),c=t.n(s),l=t(565),u=t.n(l),d=t(216),p=t.n(d),f=t(589),m=t.n(f),h=t(426),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),a()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const v="https://us-central1-js-capstone-backend.cloudfunctions.net/api",g="49UE7WNSjc9vGKaTdRhI",x=document.getElementById("refresh"),b=document.getElementById("user"),w=document.getElementById("score"),E=document.getElementById("submit"),T=document.getElementById("board");E.addEventListener("click",(async()=>{const n=await fetch(`${v}/games/${g}/scores/`,{method:"POST",body:JSON.stringify({user:b.value,score:w.value}),headers:{"Content-type":"application/json; charset=UTF-8"}});return await n.json()})),x.addEventListener("click",(async()=>{const n=await fetch(`${v}/games/${g}/scores/`,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}}),e=(await n.json()).result;T.innerHTML="",e.forEach((n=>{((n,e)=>{const t=document.getElementById("board"),r=document.createElement("li");r.classList.add("li"),r.innerHTML+=`${n}: ${e}`,t.appendChild(r)})(n.user,n.score)})),b.value=null,w.value=null}))}},n=>{n(n.s=913)}]);