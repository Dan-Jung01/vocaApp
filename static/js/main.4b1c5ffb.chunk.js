(this.webpackJsonpvoca_app=this.webpackJsonpvoca_app||[]).push([[0],{68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c(48),s=c.n(n),r=c(26),i=c(14),o=c(16),l=c(1),u=c.n(l),j=c(2),d=c(36);c(57),c(70);d.a.initializeApp({apiKey:"AIzaSyCpyVtJ4DyAYmm0kNZJIsU4VkYhy6V7XBw",authDomain:"vocaapp-e81a6.firebaseapp.com",projectId:"vocaapp-e81a6",storageBucket:"vocaapp-e81a6.appspot.com",messagingSenderId:"868198706500",appId:"1:868198706500:web:823a073ddb2b20a697bb11"});var b=d.a,h=d.a.auth(),O=d.a.firestore(),p=c(7),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(!0),b=Object(i.a)(d,2),O=b[0],x=b[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),v=m[0],y=m[1],N=function(e){var t=e.target,c=t.name,a=t.value;"email"===c?n(a):"password"===c&&l(a)},g=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(c,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(c,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:g,className:"container",children:[Object(p.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:c,onChange:N,className:"authInput"}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:N,className:"authInput"}),Object(p.jsx)("input",{type:"submit",value:O?"Create Account":"Sign In",className:"authInput authSubmit"}),v&&Object(p.jsx)("span",{className:"authError",children:v})]}),Object(p.jsx)("span",{onClick:function(){return x((function(e){return!e}))},className:"authSwitch",children:O?"You already have an account? Log in here":"You don't have an account yet? Create account here"})]})},f=c(28),m=function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(c=new b.auth.GoogleAuthProvider),e.next=4,h.signInWithPopup(c);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"authContainer",children:[Object(p.jsx)("div",{className:"authTitle",children:"\ub098\ub9cc\uc758 \ub2e8\uc5b4\uc7a5"}),Object(p.jsx)(x,{}),Object(p.jsx)("div",{className:"authBtns",children:Object(p.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(p.jsx)(f.d,{size:15})]})})]})},v=function(e){var t=e.userObj,c=Object(o.f)(),n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],l=s[1],d=Object(o.g)().day,b=Object(a.useRef)(null),h=Object(a.useRef)(null);function x(){return(x=Object(j.a)(u.a.mark((function e(a){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r||!b.current||!h.current){e.next=19;break}if(n=b.current.value,s=h.current.value,""!==n||""!==s){e.next=8;break}alert("\ubaa8\ub4e0 \uce78\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694"),e.next=19;break;case 8:if(""!==n){e.next=12;break}alert("\uc601\uc5b4\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"),e.next=19;break;case 12:if(""!==s){e.next=16;break}alert("\ub73b\uc774 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"),e.next=19;break;case 16:return l(!0),e.next=19,O.collection("users").doc(t.uid).collection("words").add({creatorId:t.uid,day:d,eng:n,kor:s,isDone:!1,isKorShow:!0,isEngShow:!0}).then((function(){alert("\uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),c.push("/day/".concat(d)),l(!1)}));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"cwContainer",children:Object(p.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},className:"cwform",children:[Object(p.jsx)("label",{className:"cwTitle",children:" \uc0c8\ub85c\uc6b4 \ub2e8\uc5b4\ub97c \ucd94\uac00\ud574\uc8fc\uc138\uc694 "}),Object(p.jsxs)("div",{className:"input_area",children:[Object(p.jsx)("label",{children:"Eng"}),Object(p.jsx)("input",{type:"text",placeholder:"\uc601\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:b})]}),Object(p.jsxs)("div",{className:"input_area",children:[Object(p.jsx)("label",{children:"Kor"}),Object(p.jsx)("input",{type:"text",placeholder:"\ub73b\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:h})]}),Object(p.jsx)("button",{className:"cwSave",style:{opacity:r?.3:1},children:r?"Saving...":"\uc800\uc7a5"})]})})},y=c(31);function N(e){var t=e.open,c=e.close,a=e.save,n=e.header;return Object(p.jsx)("div",{className:t?"openModal modal":"modal",children:t?Object(p.jsxs)("section",{children:[Object(p.jsxs)("header",{children:[n,Object(p.jsxs)("button",{className:"close",onClick:c,children:[" ","\xd7"," "]})]}),Object(p.jsx)("main",{children:e.children}),Object(p.jsxs)("footer",{children:[Object(p.jsxs)("button",{className:"close",onClick:c,children:[" ","close"," "]}),Object(p.jsxs)("button",{className:"close",onClick:a,children:[" ","save"," "]})]})]}):null})}var g=function(e){var t=e.word,c=e.userObj,n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(t.isDone),d=Object(i.a)(l,2),b=d[0],h=d[1],x=Object(a.useState)(t.isEngShow),m=Object(i.a)(x,2),v=m[0],y=m[1],g=Object(a.useState)(t.isKorShow),w=Object(i.a)(g,2),k=w[0],S=w[1],C=Object(a.useState)(!1),I=Object(i.a)(C,2),E=I[0],A=I[1],D=Object(a.useRef)(null),P=Object(a.useRef)(null);function B(){return(B=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.doc("users/".concat(c.uid,"/words/").concat(t.id)).update({isKorShow:!k});case 2:S(!k);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.doc("users/".concat(c.uid,"/words/").concat(t.id)).update({isEngShow:!v});case 2:y(!v);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.doc("users/".concat(c.uid,"/words/").concat(t.id)).update({isDone:!b});case 2:h(!b);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc774 \ub2e8\uc5b4\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=4;break}return e.next=4,O.doc("users/".concat(c.uid,"/words/").concat(t.id)).delete().then(alert("\ub2e8\uc5b4\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E||!D.current||!P.current){e.next=21;break}if(a=D.current.value,n=P.current.value,""!==a||""!==n){e.next=7;break}alert("\ubaa8\ub4e0 \uce78\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694"),e.next=21;break;case 7:if(""!==a){e.next=11;break}alert("\uc601\uc5b4\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"),e.next=21;break;case 11:if(""!==n){e.next=15;break}alert("\ub73b\uc774 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"),e.next=21;break;case 15:return A(!0),e.next=18,O.doc("users/".concat(c.uid,"/words/").concat(t.id)).update({eng:a,kor:n});case 18:alert("\uc218\uc815\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),o(!1),A(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("tr",{className:b?"off":"",children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"checkbox",checked:b,onChange:function(){return U.apply(this,arguments)}})}),Object(p.jsx)("td",{children:v&&t.eng}),Object(p.jsx)("td",{children:k&&t.kor}),Object(p.jsxs)("td",{children:[Object(p.jsxs)("button",{onClick:function(){return T.apply(this,arguments)},children:["\uc601\ub2e8\uc5b4 ",v?"\uc228\uae30\uae30":"\ubcf4\uae30"]}),Object(p.jsxs)("button",{onClick:function(){return B.apply(this,arguments)},children:["\ub73b ",k?"\uc228\uae30\uae30":"\ubcf4\uae30"]})]}),Object(p.jsx)("td",{children:Object(p.jsx)(f.f,{className:"icon",onClick:z})}),Object(p.jsxs)("td",{children:[Object(p.jsx)(f.e,{className:"icon",onClick:function(){o(!0)}}),Object(p.jsxs)(N,{open:r,close:function(){o(!1)},save:_,header:"\ub2e8\uc5b4\uc218\uc815",children:[Object(p.jsxs)("div",{className:"input_area",children:[Object(p.jsx)("label",{children:"Eng"}),Object(p.jsx)("input",{type:"text",placeholder:"\uc601\uc5b4\ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:D,defaultValue:t.eng})]}),Object(p.jsxs)("div",{className:"input_area",children:[Object(p.jsx)("label",{children:"Kor"}),Object(p.jsx)("input",{type:"text",placeholder:"\ub73b\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:P,defaultValue:t.kor})]})]})]})]})},w=c(42),k=function(e){var t=e.userObj,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],l=n[1],u=Object(a.useState)([]),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(o.g)().day,x=Object(o.f)();Object(a.useEffect)((function(){O.collection("users").doc(t.uid).collection("words").where("day","==",h).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));l(t)}))}),[h,t.uid]),Object(a.useEffect)((function(){O.collection("users").doc(t.uid).collection("dayss").orderBy("day").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));b(t)}))}),[t.uid]);return Object(p.jsxs)("div",{className:"dayContainer",children:[Object(p.jsxs)("div",{className:"dayHeader",children:[Object(p.jsxs)("div",{className:"dayMovePage",children:[Object(p.jsx)(f.a,{onClick:function(){Number(h)>1?x.push("/day/".concat(Number(h)-1)):alert("\uc774\uc804 \ub2e8\uc5b4\uc7a5\uc740 \uc5c6\uc2b5\ub2c8\ub2e4")},className:"dayArrowLeft icon"}),Object(p.jsx)(f.b,{onClick:function(){Number(h)<d.length?x.push("/day/".concat(Number(h)+1)):alert("\ub2e4\uc74c \ub2e8\uc5b4\uc7a5\uc740 \uc5c6\uc2b5\ub2c8\ub2e4")},className:"dayArrowRight icon"})]}),Object(p.jsxs)("div",{className:"dayTitle",children:["Day ",h," "]}),Object(p.jsx)(r.b,{to:"/create_word/".concat(h),className:"dayAddWord",children:Object(p.jsx)(w.b,{size:25})})]}),0===s.length&&Object(p.jsxs)("h4",{className:"dayAskingAdd",children:["\ub2e8\uc5b4\ub97c \ucd94\uac00\ud574\uc8fc\uc138\uc694 ",Object(p.jsx)(f.c,{size:23,className:"dayArrowUp"})," "]}),Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[0!==s.length?Object(p.jsxs)("tr",{className:"dayTableInfo",children:[Object(p.jsx)("td",{children:"\uc644\ub8cc"}),Object(p.jsx)("td",{children:"\uc601\uc5b4"}),Object(p.jsx)("td",{children:"\ub73b"}),Object(p.jsx)("td",{children:"\ubcf4\uc774\uae30 / \uc228\uae30\uae30"}),Object(p.jsx)("td",{children:"\uc0ad\uc81c"}),Object(p.jsx)("td",{children:"\uc218\uc815"})]}):null,s.map((function(e){return t.uid===e.creatorId?Object(p.jsx)(g,{word:e,userObj:t},e.id):null}))]})})]})},S=c(51),C=function(e){var t=e.userObj,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],o=n[1],l=Object(a.useState)(!1),d=Object(i.a)(l,2),b=(d[0],d[1]);Object(a.useEffect)((function(){O.collection("users").doc(t.uid).collection("dayss").orderBy("day").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));o(t)}))}),[t]);var h=function(){var e=Object(j.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,O.collection("users").doc(t.uid).collection("dayss").add({day:s.length+1}).then((function(){b(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"homeContainer",children:[t.displayName?Object(p.jsxs)("div",{className:"homeTitle",children:[" \uc548\ub155\ud558\uc138\uc694 ",t.displayName," \ub2d8 "]}):Object(p.jsx)("div",{className:"homeTitle",children:" \ud504\ub85c\ud544\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694 "}),Object(p.jsxs)("ul",{className:"homeDayContainer",children:[s.map((function(e){return Object(p.jsx)("li",{className:"homeEachDay",children:Object(p.jsxs)(r.b,{to:{pathname:"/day/".concat(e.day)},children:["Day ",e.day]})},e.id)})),Object(p.jsxs)("button",{className:"homeAddDay",onClick:h,children:["Add Day ",Object(p.jsx)(S.a,{size:30})]})]})]})},I=function(e){var t=e.userObj,c=e.refreshUser,n=Object(a.useState)(t.displayName),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)([]),d=Object(i.a)(l,2),b=d[0],h=d[1],x=Object(a.useState)([]),f=Object(i.a)(x,2),m=f[0],v=f[1],N=m.length/b.length*100;console.log(N),console.log(m),Object(a.useEffect)((function(){O.collection("users").doc(t.uid).collection("words").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));h(t);var c=t.filter((function(e){return!0===e.isDone}));v(c)}))}),[t.uid]);var g=function(){var e=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===r){e.next=5;break}return e.next=4,t.updateProfile({displayName:r}).then(alert("\uc774\ub984\uc774 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4"));case 4:c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"profileContainer",children:[Object(p.jsxs)("form",{onSubmit:g,className:"profileForm",children:[Object(p.jsx)("label",{className:"profileformTitle",children:"\uc0ac\uc6a9\uc790 \uc774\ub984"}),Object(p.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:r,className:"formInput"}),Object(p.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(p.jsxs)("div",{className:"profileInfo",children:[Object(p.jsxs)("div",{className:"profileEachInfo",children:[Object(p.jsx)("label",{children:"\ucd1d \ub2e8\uc5b4 \uac1c\uc218\ub294 "}),Object(p.jsxs)("label",{children:[b.length,"\uac1c\uc785\ub2c8\ub2e4"]})]}),Object(p.jsxs)("div",{className:"profileEachInfo",children:[Object(p.jsx)("label",{children:"\uc644\ub8cc\ud55c \ub2e8\uc5b4 \uac1c\uc218\ub294 "}),Object(p.jsxs)("label",{children:[m.length,"\uac1c\uc785\ub2c8\ub2e4"]})]}),Object(p.jsx)("div",{className:"profileEachInfo",children:N?Object(p.jsxs)("label",{children:["\uc9c0\uae08\uae4c\uc9c0 ",N,"% \uc644\ub8cc\ud558\uc168\uc2b5\ub2c8\ub2e4!"]}):Object(p.jsx)("label",{children:"\uc9c0\uae08\uae4c\uc9c0 0% \uc644\ub8cc\ud558\uc168\uc2b5\ub2c8\ub2e4!"})})]})]})},E=function(){var e=Object(o.f)();return Object(p.jsx)("div",{className:"navLogOutBtn",children:Object(p.jsx)(w.a,{onClick:function(){h.signOut(),e.push("/")},size:25,className:"icon"})})},A=function(){return Object(p.jsxs)("nav",{className:"navContainer",children:[Object(p.jsxs)("div",{className:"navLeftSide",children:[Object(p.jsx)("h1",{className:"navTitle",children:Object(p.jsx)(r.b,{to:"/",children:"\ub098\ub9cc\uc758 \uc601\uc5b4\ub2e8\uc5b4\uc7a5"})}),Object(p.jsxs)("ul",{className:"navMenu",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(r.b,{to:"/",children:"Home"})," "]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(r.b,{to:"/profile",children:"My Profile"})," "]})]})]}),Object(p.jsx)("div",{className:"navRightSide",children:Object(p.jsx)(E,{})})]})},D=function(e){var t=e.isLoggedIn,c=e.userObj,a=e.refreshUser;return Object(p.jsxs)(r.a,{basename:"/vocaApp",children:[t&&Object(p.jsx)(A,{}),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(o.c,{children:t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(C,{userObj:c})}),Object(p.jsx)(o.a,{exact:!0,path:"/day/:day",children:Object(p.jsx)(k,{userObj:c})}),Object(p.jsx)(o.a,{exact:!0,path:"/profile",children:Object(p.jsx)(I,{userObj:c,refreshUser:a})}),Object(p.jsx)(o.a,{path:"/create_word/:day",children:Object(p.jsx)(v,{userObj:c})})]}):Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(m,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(a.useState)(null),j=Object(i.a)(u,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){e?(l(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):l(!1),n(!0)}))}),[]),Object(p.jsx)(p.Fragment,{children:c?Object(p.jsx)(D,{isLoggedIn:o,userObj:d,refreshUser:function(){var e=h.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing..."})};c(68);s.a.render(Object(p.jsx)(r.a,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4b1c5ffb.chunk.js.map