(this["webpackJsonpthe-dojo"]=this["webpackJsonpthe-dojo"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(21),a=n.n(s),u=(n(42),n(43),n(12)),i=n(19),l=n(7),j=n.n(l),o=n(11),d=n(6),b=n(33),O=(n(45),n(20));n(78),n(47),n(77);O.a.initializeApp({apiKey:"AIzaSyCBzmYdOmptHUv6swBZt9gt80bnSZ5zCKE",authDomain:"boramchan-site.firebaseapp.com",projectId:"boramchan-site",storageBucket:"boramchan-site.appspot.com",messagingSenderId:"45202961400",appId:"1:45202961400:web:fa0e87076f1888c0b05c0d"});var p=O.a.firestore(),h=O.a.auth(),x=O.a.storage(),f=O.a.firestore.Timestamp,m=n(9),v=n(25),g=function(e,t,n){var r=Object(c.useState)(null),s=Object(d.a)(r,2),a=s[0],u=s[1],i=Object(c.useState)(null),l=Object(d.a)(i,2),j=l[0],o=l[1],b=Object(c.useRef)(t).current,O=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=p.collection(e);b&&(c=(t=c).where.apply(t,Object(v.a)(b)));O&&(c=(n=c).orderBy.apply(n,Object(v.a)(O)));var r=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),u(t),o(null)}),(function(e){console.log(e),o("could not fetch the data")}));return function(){return r()}}),[e,b,O]),{documents:a,error:j}},N=n(2),y=Object(c.createContext)(),D=function(e,t){switch(t.type){case"LOGIN":return Object(m.a)(Object(m.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},S=function(e){var t=e.children,n=Object(c.useReducer)(D,{user:null,authIsReady:!1}),r=Object(d.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var e=h.onAuthStateChanged((function(t){a({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",s),Object(N.jsx)(y.Provider,{value:Object(m.a)(Object(m.a)({},s),{},{dispatch:a}),children:t})},E=function(){var e=Object(c.useContext)(y);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},R={document:null,isPending:!1,error:null,success:null},w=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"UPDATED_DOCUMENT":return{isPending:!1,document:t.payloadl,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},U=function(e){var t=Object(c.useReducer)(w,R),n=Object(d.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!1),u=Object(d.a)(a,2),i=u[0],l=u[1],b=p.collection(e),O=function(e){i||s(e)},h=function(){var e=Object(o.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"IS_PENDING"}),e.prev=1,n=f.fromDate(new Date),e.next=5,b.add(Object(m.a)(Object(m.a)({},t),{},{createdAt:n}));case 5:c=e.sent,O({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:O({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).update(n);case 4:return c=e.sent,O({type:"UPDATED_DOCUMENT",payload:c}),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message}),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return l(!0)}}),[]),{addDocument:h,updateDocument:v,deleteDocument:x,response:r}},C=[{value:"\uac1c\ubc1c\uc790",label:"\uac1c\ubc1c\uc790"},{value:"\ub514\uc790\uc778",label:"\ub514\uc790\uc778"},{value:"\uc601\uc5c5",label:"\uc601\uc5c5"}],L=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),u=a[0],l=a[1],O=Object(c.useState)(""),p=Object(d.a)(O,2),h=p[0],x=p[1],m=Object(c.useState)(""),v=Object(d.a)(m,2),y=v[0],D=v[1],S=Object(c.useState)([]),R=Object(d.a)(S,2),w=R[0],L=R[1],k=Object(c.useState)(null),P=Object(d.a)(k,2),I=P[0],A=P[1],_=Object(i.g)(),T=g("users").documents,q=Object(c.useState)([]),B=Object(d.a)(q,2),G=B[0],M=B[1],z=E().user,F=U("projects"),H=F.addDocument,K=F.response;Object(c.useEffect)((function(){if(T){var e=T.map((function(e){return{value:e,label:e.displayName}}));M(e)}}),[T]);var Y=function(){var e=Object(o.a)(j.a.mark((function e(t){var c,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),A(null),y){e.next=5;break}return A("\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 5:if(!(w.length<1)){e.next=8;break}return A("\ud55c \uba85 \uc774\uc0c1\uc758 \uc791\uc131\uc790\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"),e.abrupt("return");case 8:return c=w.map((function(e){return{displayName:e.value.displayName,photoURL:e.value.photoURL,id:e.value.id}})),r={displayName:z.displayName,photoURL:z.photoURL,id:z.uid},s={name:n,details:u,assignedUsersList:c,createdBy:r,category:y.value,dueDate:f.fromDate(new Date(h)),comments:[]},e.next=13,H(s);case 13:K.error||_.push("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"create-form",children:[Object(N.jsx)("h2",{className:"page-title",children:" \uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"}),Object(N.jsxs)("form",{onSubmit:Y,children:[Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984:"}),Object(N.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:n,required:!0})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\ud504\ub85c\uc81d\ud2b8 \uc124\uba85:"}),Object(N.jsx)("textarea",{type:"text",onChange:function(e){return l(e.target.value)},value:u,required:!0})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uae30\ud55c:"}),Object(N.jsx)("input",{type:"date",onChange:function(e){return x(e.target.value)},value:h,required:!0})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uad6c\ud574\uc694: "}),Object(N.jsx)(b.a,{options:C,onChange:function(e){return D(e)}})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uc62c\ub9b0 \uc0ac\ub78c"}),Object(N.jsx)(b.a,{options:G,onChange:function(e){return L(e)},isMulti:!0})]}),Object(N.jsx)("button",{className:"btn",children:"\uc791\uc131\uc644\ub8cc"}),I&&Object(N.jsx)("p",{className:"error",children:I})]})]})};n(68);function k(e){var t=e.src;return Object(N.jsx)("div",{className:"avatar",children:Object(N.jsx)("img",{src:t,alt:"\uc720\uc800\uc758 \uc544\ubc14\ud0c0\uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4"})})}n(69);function P(e){var t=e.projects;return Object(N.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(N.jsx)("p",{children:"\uc544\uc9c1 \uac1c\uc124\ub41c \ud504\ub85c\uc81d\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"}),t&&t.map((function(e){var t,n;return Object(N.jsxs)(u.b,{to:"/groups/".concat(e.id),children:[Object(N.jsx)("h4",{children:e.name},e.id),Object(N.jsxs)("p",{children:["Due by ",null===(t=e.dueDate)||void 0===t?void 0:t.toDate().toDateString()]}),Object(N.jsxs)("div",{className:"assigned-to",children:[Object(N.jsx)("p",{children:Object(N.jsx)("strong",{children:"Assigned to:"})}),Object(N.jsx)("ul",{children:null===(n=e.assignedUsersList)||void 0===n?void 0:n.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(k,{src:e.photoURL})},e.photoURL)}))})]})]},e.id)}))]})}n(70);var I=function(){var e=g("projects"),t=e.documents,n=e.error;return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"page-title",children:"\ub300\uc26c\ubcf4\ub4dc"}),n?Object(N.jsx)("p",{children:n}):null,t?Object(N.jsx)(P,{projects:t}):null]})},A=(n(71),function(e){var t,n,c,r=e.project,s=U("projects").deleteDocument,a=E().user,u=Object(i.g)();return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"project-summary",children:[Object(N.jsx)("h2",{className:"page-title",children:r.name}),Object(N.jsxs)("p",{children:["\uc791\uc131\uc790 : ",null===(t=r.createdBy)||void 0===t?void 0:t.displayName]}),Object(N.jsxs)("p",{className:"due-date",children:["\ud504\ub85c\uc81d\ud2b8 \uae30\ud55c ",r.dueDate.toDate().toDateString()]}),Object(N.jsx)("p",{className:"details",children:r.details}),Object(N.jsx)("h4",{children:"\ud568\uaed8 \ud558\ub294 \uc0ac\ub78c\ub4e4 : "}),null===(n=r.assignedUsersList)||void 0===n?void 0:n.map((function(e){return Object(N.jsx)("div",{children:Object(N.jsx)(k,{src:e.photoURL})},e.id)}))]}),a.uid===(null===(c=r.createdBy)||void 0===c?void 0:c.id)&&Object(N.jsx)("button",{className:"btn",onClick:function(e){s(r.id),u.push("/")},children:"\uc644\ub8cc\ub41c \ud504\ub85c\uc81d\ud2b8"})]})}),_=function(e){var t,n,r=e.project,s=U("projects"),a=s.updateDocument,u=(s.res,Object(c.useState)("")),i=Object(d.a)(u,2),l=i[0],b=i[1],O=E().user,p=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={displayName:O.displayName,photoURL:O.photoURL,content:l,createdAt:f.fromDate(new Date),id:Math.random()},e.next=4,a(r.id,{comments:[].concat(Object(v.a)(r.comments),[n])});case 4:return e.next=6,b("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"project-comments",children:[Object(N.jsx)("h4",{children:"\ud504\ub85c\uc81d\ud2b8 \ub313\uae00"}),Object(N.jsx)("ul",{children:(null===(t=r.comments)||void 0===t?void 0:t.length)>0&&(null===(n=r.comments)||void 0===n?void 0:n.map((function(e){return Object(N.jsxs)("li",{children:[Object(N.jsxs)("div",{className:"comment-author",children:[Object(N.jsx)(k,{src:e.photoURL}),Object(N.jsx)("p",{children:e.displayName})]}),Object(N.jsx)("div",{className:"comment-date",children:Object(N.jsx)("p",{children:"date here"})}),Object(N.jsx)("div",{className:"comment-content",children:Object(N.jsx)("p",{children:e.content})})]},e.id)})))}),Object(N.jsxs)("form",{className:"\ub313\uae00 \ucd94\uac00",onSubmit:p,children:[Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uc0c8\ub85c\uc6b4 \ub313\uae00 \ucd94\uac00 : "}),Object(N.jsx)("textarea",{required:!0,onChange:function(e){return b(e.target.value)},value:l})]}),Object(N.jsx)("button",{className:"btn",children:"\ub313\uae00 \ucd94\uac00"})]})]})},T=function(){var e=function(e,t){var n=Object(c.useState)(null),r=Object(d.a)(n,2),s=r[0],a=r[1],u=Object(c.useState)(null),i=Object(d.a)(u,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){var n=p.collection(e).doc(t).onSnapshot((function(e){e.data()?(a(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id})),j(null)):j("No such document exists")}),(function(e){console.log(e.message),j("failed to get document")}));return function(){return n()}}),[e,t]),{document:s,error:l}}("projects",Object(i.h)().id),t=e.document,n=e.error;return n?Object(N.jsx)("div",{className:"error",children:n}):t?Object(N.jsx)("div",{className:"project-details",children:t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(A,{project:t}),Object(N.jsx)(_,{project:t})]}):Object(N.jsx)("p",{children:"\ub370\uc774\ud130 \ub85c\ub529\uc911"})}):Object(N.jsx)("div",{className:"loading",children:"\ub85c\ub529\uc911..."})},q=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),u=a[0],i=a[1],l=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(d.a)(s,2),u=a[0],i=a[1],l=Object(c.useState)(!1),b=Object(d.a)(l,2),O=b[0],x=b[1],f=E().dispatch,m=function(){var e=Object(o.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),x(!0),e.prev=2,e.next=5,h.signInWithEmailAndPassword(t,c);case 5:return r=e.sent,e.next=8,p.collection("users").doc(r.user.uid).update({online:!0});case 8:f({type:"LOGIN",payload:r.user}),n||(x(!1),i(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(i(e.t0.message),x(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{login:m,isPending:O,error:u}}(),b=l.login,O=l.isPending,x=l.error;return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),b(n,u)},children:[Object(N.jsx)("h2",{children:"\ub85c\uadf8\uc778"}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uc774\uba54\uc77c: "}),Object(N.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638: "}),Object(N.jsx)("input",{required:!0,type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),O?Object(N.jsx)("button",{className:"btn",children:"\uc9c4\ud589\uc911..."}):Object(N.jsx)("button",{className:"btn",children:"\ub85c\uadf8\uc778"}),x?Object(N.jsx)("div",{className:"error",children:x}):null]})})},B=(n(72),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),u=a[0],i=a[1],l=Object(c.useState)(""),b=Object(d.a)(l,2),O=b[0],f=b[1],m=Object(c.useState)(null),v=Object(d.a)(m,2),g=v[0],y=v[1],D=Object(c.useState)(""),S=Object(d.a)(D,2),R=S[0],w=S[1],U=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(d.a)(s,2),u=a[0],i=a[1],l=Object(c.useState)(!1),b=Object(d.a)(l,2),O=b[0],f=b[1],m=E().dispatch,v=function(){var e=Object(o.a)(j.a.mark((function e(t,c,r,s){var a,u,l,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),f(!0),e.prev=2,e.next=5,h.createUserWithEmailAndPassword(t,c);case 5:if(a=e.sent){e.next=8;break}throw new Error("\ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4");case 8:return u="thumbnails/".concat(a.user.uid,"/").concat(s.name),e.next=11,x.ref(u).put(s);case 11:return l=e.sent,e.next=14,l.ref.getDownloadURL();case 14:return o=e.sent,e.next=17,a.user.updateProfile({displayName:r,photoURL:o});case 17:return e.next=19,p.collection("users").doc(a.user.uid).set({online:!0,displayName:r,photoURL:o});case 19:m({type:"LOGIN",payload:a.user}),n||(f(!1),i(null)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),n||(i(e.t0.message),console.log(e.t0.message),f(!1));case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{signup:v,error:u,isPending:O}}(),C=U.signup,L=U.isPending,k=U.error;return Object(N.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),C(n,u,O,g)},children:[Object(N.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uc774\uba54\uc77c: "}),Object(N.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638: "}),Object(N.jsx)("input",{required:!0,type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\uc0ac\uc6a9\uc790 \uc774\ub984: "}),Object(N.jsx)("input",{required:!0,type:"text",onChange:function(e){return f(e.target.value)},value:O})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0: "}),Object(N.jsx)("input",{required:!0,type:"file",onChange:function(e){y(null);var t=e.target.files[0];console.log(t),t?t.type.includes("image")?t.size>1e6?w("1000KB \uc774\ud558\uc758 \uc774\ubbf8\uc9c0\ub9cc \uc5c5\ub85c\ub4dc \ud574\uc8fc\uc138\uc694!\ud83e\udd7a"):(w(null),y(t),console.log("\uc378\ub124\uc77c \uc5c5\ub370\uc774\ud2b8 \uc644\ub8cc!")):w("\ud760.. \uc62c\ub9ac\uc2e0 \ud30c\uc77c\uc774 \uc774\ubbf8\uc9c0\uac00 \uc544\ub2cc \uac83 \uac19\uc544\uc694!\ud83e\udd7a"):w("\uc378\ub124\uc77c \uc774\ubbf8\uc9c0\ub97c \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694\ud83e\udd7a")}}),R?Object(N.jsx)("div",{className:"error",children:R}):null]}),L?Object(N.jsx)("button",{className:"btn",children:"\uc9c4\ud589\uc911..."}):Object(N.jsx)("button",{className:"btn",children:"\uc81c\ucd9c\ud558\uae30"}),k?Object(N.jsx)("div",{className:"error",children:k}):null]})}),G=(n(73),n.p,function(){var e=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(d.a)(s,2),u=a[0],i=a[1],l=Object(c.useState)(!1),b=Object(d.a)(l,2),O=b[0],x=b[1],f=E(),m=f.dispatch,v=f.user,g=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),x(!0),e.prev=2,t=v.uid,e.next=6,p.collection("users").doc(t).update({online:!1});case 6:return e.next=8,h.signOut();case 8:m({type:"LOGOUT"}),n||(x(!1),i(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(i(e.t0.message),x(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{logout:g,error:u,isPending:O}}(),t=e.logout,n=e.isPending,r=E().user;return Object(N.jsx)("div",{className:"navbar",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{className:"logo",children:Object(N.jsx)("span",{})}),r?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("li",{children:n?Object(N.jsx)("button",{className:"btn",onClick:t,children:"\ub85c\uadf8\uc544\uc6c3 \uc911\uc785\ub2c8\ub2e4..."}):Object(N.jsx)("button",{className:"btn",onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/login",children:"\ub85c\uadf8\uc778\ud83d\udd12"})}),Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})})}),M=(n(74),n.p+"static/media/dashboard_icon.bc800f3b.svg"),z=n.p+"static/media/add_icon.376e9b6a.svg",F=function(){var e=E().user;return Object(N.jsx)("div",{className:"sidebar",children:Object(N.jsxs)("div",{className:"sidebar-content",children:[Object(N.jsx)("div",{className:"user",children:e?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(k,{src:e.photoURL}),Object(N.jsxs)("p",{children:["\uc548\ub155\ud558\uc138\uc694 ",e.displayName,"\ub2d8!"]})]}):null}),Object(N.jsx)("nav",{className:"links",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsxs)(u.c,{exact:!0,to:"/",children:[Object(N.jsx)("img",{src:M,alt:"\ub300\uc26c\ubcf4\ub4dc \uc544\uc774\ucf58"}),Object(N.jsx)("span",{children:"\ub300\uc26c\ubcf4\ub4dc"})]})}),Object(N.jsx)("li",{children:Object(N.jsxs)(u.c,{to:"/create",children:[Object(N.jsx)("img",{src:z,alt:"\ud504\ub85c\uc81d\ud2b8 \ucd94\uac00 \uc544\uc774\ucf58"}),Object(N.jsx)("span",{children:"\uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8"})]})})]})})]})})},H=(n(75),function(){var e=g("users"),t=e.error,n=e.documents;return Object(N.jsxs)("div",{className:"user-list",children:[Object(N.jsx)("h2",{children:"\ubaa8\ub4e0 \uc720\uc800"}),t?Object(N.jsx)("p",{className:"error",children:t}):null,n&&n.map((function(e){return Object(N.jsxs)("div",{className:"user-list-item",children:[e.online?Object(N.jsx)("span",{className:"online-user"}):null," ",Object(N.jsx)("p",{children:e.displayName}),Object(N.jsx)(k,{src:e.photoURL})]},e.id)}))]})});var K=function(){var e=E(),t=e.user,n=e.authIsReady;return Object(N.jsx)("div",{className:"App",children:n&&Object(N.jsxs)(u.a,{children:[Object(N.jsx)(F,{}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(G,{}),Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{exact:!0,path:"/",children:t?Object(N.jsx)(I,{}):Object(N.jsx)(i.a,{to:"/login"})}),Object(N.jsx)(i.b,{path:"/create",children:t?Object(N.jsx)(L,{}):Object(N.jsx)(i.a,{to:"/login"})}),Object(N.jsx)(i.b,{path:"/groups/:id",children:t?Object(N.jsx)(T,{}):Object(N.jsx)(i.a,{to:"/login"})}),Object(N.jsx)(i.b,{path:"/login",children:t?Object(N.jsx)(i.a,{to:"/"}):Object(N.jsx)(q,{})}),Object(N.jsx)(i.b,{path:"/signup",children:t?Object(N.jsx)(i.a,{to:"/"}):Object(N.jsx)(B,{})}),Object(N.jsx)(i.b,{path:"/signup",children:t?Object(N.jsx)(i.a,{to:"/"}):Object(N.jsx)(B,{})})]})]}),t&&Object(N.jsx)(H,{})]})})};a.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(S,{children:Object(N.jsx)(K,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.641388a5.chunk.js.map