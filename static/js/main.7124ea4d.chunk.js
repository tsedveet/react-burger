(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={BreadTop:"style_BreadTop__2D9Gv",Seed:"style_Seed__1fPll",Second:"style_Second__1JrST",Third:"style_Third__3tayL",Fourth:"style_Fourth__3b-i8",Salad:"style_Salad__KIa5N",Meat:"style_Meat__2aa_V",Cheese:"style_Cheese__1UoAo",Bacon:"style_Bacon__2FqfG",BreadBottom:"style_BreadBottom___Q7lh"}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(3),r=n(4),c=n(0),o=n.n(c),s=n(12),i=n(1),l=o.a.createContext(),u={saving:!1,logginIn:!1,error:null,errorCode:null,token:null,userId:null,expireDate:null},d=function(e){var t=Object(c.useState)(u),n=Object(r.a)(t,2),o=n[0],d=n[1],j=function(e,t,n,r){localStorage.setItem("token",e),localStorage.setItem("userId",t),localStorage.setItem("expireDate",n),localStorage.setItem("refreshToken",r),d(Object(a.a)(Object(a.a)({},o),{},{logginIn:!1,error:null,errorCode:null,token:e,userId:t,expireDate:n}))};return Object(i.jsx)(l.Provider,{value:{state:o,signupUser:function(e,t){d(Object(a.a)(Object(a.a)({},o),{},{saving:!0}));var n={email:e,password:t,returnSecureToken:!0};s.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",n).then((function(e){var t=e.data.idToken,n=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",n),d(Object(a.a)(Object(a.a)({},o),{},{saving:!1,token:t,userId:n,error:null,errorCode:null}))})).catch((function(e){d(Object(a.a)(Object(a.a)({},o),{},{faving:!1,token:null,userId:null,error:e.message,errorCode:e.code}))}))},loginUser:function(e,t){d(Object(a.a)(Object(a.a)({},o),{},{logginIn:!0}));var n={email:e,password:t,returnSecureToken:!0};s.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",n).then((function(e){console.log("Logged in =======>",e.data),console.log(new Date);var t=e.data.idToken,n=e.data.localId,a=e.data.expiresIn,r=new Date((new Date).getTime()+1e3*a),c=e.data.refreshToken;j(t,n,r,c)})).catch((function(e){d(Object(a.a)(Object(a.a)({},o),{},{logginIn:!1,error:e.message,errorCode:e.code,token:null,userId:null,expireDate:null}))}))},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expiresDate"),localStorage.removeItem("refreshToken"),d({initialState:u})},loginUserSuccess:j,autoRenewTokenAfterMillisec:function e(t){s.a.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyCYNPy91m4oKBJFASY6oKtDwBKtSmlpByY",{grant_type:"refresh_token",refresh_token:localStorage.getItem("refreshToken")}).then((function(e){var t=e.data.id_token,n=e.data.user_id,a=e.data.expires_in,r=new Date((new Date).getTime()+1e3*a),c=e.data.refresh_token;j(t,n,r,c)})).catch((function(e){d(Object(a.a)(Object(a.a)({},o),{},{logginIn:!1,error:e.message,errorCode:e.code,token:null,userId:null,expireDate:null}))})),setTimeout((function(){e(36e5)}),t)}},children:e.children})};t.b=l},function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(16),r=n(3),c=n(4),o=n(0),s=n.n(o),i=n(12),l=n(1),u=s.a.createContext(),d={salad:150,cheese:250,bacon:800,meat:1500},j={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:1e3,purchasing:!1,ingredientNames:{bacon:"\u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445",cheese:"\u0411\u044f\u0441\u043b\u0430\u0433",meat:"\u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445",salad:"\u0421\u0430\u043b\u0430\u0434"},saving:!1,finished:!1,error:null},b=function(e){var t=Object(o.useState)(j),n=Object(c.a)(t,2),s=n[0],b=n[1];return Object(l.jsx)(u.Provider,{value:{burger:s,addIngredient:function(e){b(Object(r.a)(Object(r.a)({},s),{},{ingredients:Object(r.a)(Object(r.a)({},s.ingredients),{},Object(a.a)({},e,s.ingredients[e]+1)),totalPrice:s.totalPrice+d[e],purchasing:!0}))},removeIngredient:function(e){var t=s.totalPrice-d[e];b(Object(r.a)(Object(r.a)({},s),{},{ingredients:Object(r.a)(Object(r.a)({},s.ingredients),{},Object(a.a)({},e,s.ingredients[e]-1)),totalPrice:t,purchasing:t>1e3}))},saveBurger:function(e,t){b(Object(r.a)(Object(r.a)({},s),{},{saving:!0})),i.a.post("/orders.json?auth=".concat(t),e).then((function(e){b(Object(r.a)(Object(r.a)({},s),{},{saving:!1,finished:!0,error:null}))})).catch((function(e){b(Object(r.a)(Object(r.a)({},s),{},{saving:!1,finished:!0,error:e}))}))},clearBurger:function(){b(j)},toggle:function(){b(Object(r.a)(Object(r.a)({},s),{},{saving:!s.saving}))}},children:e.children})};t.b=u},function(e,t,n){"use strict";n(0);var a=n(28),r=n.n(a),c=n(1);t.a=function(e){return Object(c.jsxs)("button",{onClick:e.daragdsan,className:"".concat(r.a.Button," ").concat(r.a[e.btnType]),children:[e.text," "]})}},function(e,t,n){"use strict";var a=n(45),r=n.n(a).a.create({baseURL:"https://burger-app-cd623-default-rtdb.asia-southeast1.firebasedatabase.app/"});t.a=r},,function(e,t,n){e.exports={SideBar:"style_SideBar__zhsAF",Open:"style_Open__1hBjX",Close:"style_Close__rGi01",Logo:"style_Logo__ZitFW"}},,,,,function(e,t,n){"use strict";n(0);var a=n(50),r=n.n(a),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:r.a.Loader})}},,,,,function(e,t,n){e.exports={Toolbar:"style_Toolbar__obvuW",HideOnMobile:"style_HideOnMobile__1hSOJ"}},function(e,t,n){e.exports={MenuItem:"style_MenuItem__26Mad",active:"style_active__azzL-"}},,,function(e,t,n){e.exports={Button:"style_Button__3xCBQ",Success:"style_Success__3rLk5",Danger:"style_Danger__29vB8"}},,,,,,,,,function(e,t,n){"use strict";n(0);var a=n(47),r=n.n(a),c=n(1);t.a=function(e){return e.show?Object(c.jsx)("div",{onClick:e.darahad,className:r.a.Shadow}):null}},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(3),r=n(4),c=n(0),o=n.n(c),s=n(12),i=n(1),l=o.a.createContext(),u={orders:[],loading:!1,error:null},d=function(e){var t=Object(c.useState)(u),n=Object(r.a)(t,2),o=n[0],d=n[1];return Object(i.jsx)(l.Provider,{value:{state:o,loadOrders:function(e,t){d(Object(a.a)(Object(a.a)({},o),{},{loading:!0})),s.a.get("orders.json?&auth=".concat(t,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){var t=Object.entries(e.data).reverse();d(Object(a.a)(Object(a.a)({},o),{},{orders:t}))})).catch((function(e){return d(Object(a.a)(Object(a.a)({},o),{},{error:e}))}))}},children:e.children})};t.b=l},function(e,t,n){"use strict";var a=n(0),r=n(6),c=n.n(r),o=n(1),s=function(e){return"bread-top"===e.type?Object(o.jsxs)("div",{className:c.a.BreadTop,children:[Object(o.jsx)("div",{className:c.a.Seed}),Object(o.jsx)("div",{className:"".concat(c.a.Seed," ").concat(c.a.Second)}),Object(o.jsx)("div",{className:"".concat(c.a.Seed," ").concat(c.a.Third)}),Object(o.jsx)("div",{className:"".concat(c.a.Seed," ").concat(c.a.Fourth)})]}):"salad"===e.type?Object(o.jsx)("div",{className:c.a.Salad}):"bacon"===e.type?Object(o.jsx)("div",{className:c.a.Bacon}):"meat"===e.type?Object(o.jsx)("div",{className:c.a.Meat}):"cheese"===e.type?Object(o.jsx)("div",{className:c.a.Cheese}):"bread-bottom"===e.type?Object(o.jsx)("div",{className:c.a.BreadBottom}):Object(o.jsx)("div",{children:"..."})},i=n(48),l=n.n(i),u=n(10);t.a=function(){var e=Object(a.useContext)(u.b);return Object(a.useMemo)((function(){var t=Object.entries(e.burger.ingredients),n=[];return t.map((function(e){for(var t=0;t<e[1];t++)n.push(Object(o.jsx)(s,{type:e[0]},"".concat(e[0]).concat(t+1)))})),0===n.length&&(n=Object(o.jsx)("p",{children:"\u0425\u0430\u0447\u0438\u0440\u0442\u0430\u0439 \u0442\u0430\u043b\u0445\u043d\u044b\u0445\u0430\u0430 \u043e\u0440\u0446\u044b\u0433 \u0441\u043e\u043d\u0433\u043e\u043d\u043e \u0443\u0443..."})),Object(o.jsxs)("div",{className:l.a.Burger,children:[Object(o.jsx)(s,{type:"bread-top"}),n,Object(o.jsx)(s,{type:"bread-bottom"})]})}),[e.burger.ingredients])}},function(e,t,n){e.exports={Content:"style_Content__13d3l"}},function(e,t,n){e.exports={Logo:"style_Logo__3vzSa"}},,function(e,t,n){e.exports={Menu:"style_Menu__12pWR"}},,,function(e,t,n){e.exports={HamburgerMenu:"style_HamburgerMenu__20KCA"}},function(e,t,n){e.exports={Shadow:"style_Shadow__309yj"}},function(e,t,n){e.exports={Burger:"style_Burger__3C1ul"}},function(e,t,n){e.exports={ContactData:"style_ContactData__3xjMn"}},function(e,t,n){e.exports={Loader:"style_Loader__1xY3J",load3:"style_load3__1Tpkd"}},function(e,t,n){e.exports={ShippingPage:"style_ShippingPage__19oep"}},function(e,t,n){e.exports={Login:"style_Login__serYP"}},,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),s=(n(58),n(4)),i=n(40),l=n.n(i),u=n(24),d=n.n(u),j=n.p+"static/media/burger-logo.ec69c7f6.png",b=n(41),g=n.n(b),O=n(1),x=function(){return Object(O.jsx)("div",{className:g.a.Logo,children:Object(O.jsx)("img",{src:j})})},h=(n(53),n(43)),p=n.n(h),f=n(21),m=n(25),v=n.n(m),_=function(e){return Object(O.jsx)("li",{className:v.a.MenuItem,children:Object(O.jsx)(f.b,{exact:e.exact,activeClassName:v.a.active,to:e.link,children:e.children})})},y=n(9),S=function(e){var t=Object(a.useContext)(y.b);return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:p.a.Menu,children:t.state.userId?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{exact:!0,link:"/",children:"\u0428\u0418\u041d\u042d \u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410"}),Object(O.jsx)(_,{link:"/orders",children:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410\u041d\u0423\u0423\u0414"}),Object(O.jsx)(_,{link:"/logout",children:"\u0413\u0410\u0420\u0410\u0425"})]}):Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(_,{link:"/login",children:"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"}),Object(O.jsx)(_,{link:"/signup",children:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"})]})})})},I=n(46),k=n.n(I),B=function(e){return Object(O.jsxs)("div",{onClick:e.toggleSideBar,className:k.a.HamburgerMenu,children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},C=function(e){return Object(O.jsxs)("header",{className:d.a.Toolbar,children:[Object(O.jsx)(B,{toggleSideBar:e.toggleSideBar}),Object(O.jsx)(x,{}),Object(O.jsx)("nav",{className:d.a.HideOnMobile,children:Object(O.jsx)(S,{})})]})},T=n(14),N=n.n(T),w=n(37),D=function(e){var t=[N.a.SideBar,N.a.Close];return e.showSidebar&&(t=[N.a.SideBar,N.a.Open]),Object(O.jsxs)("div",{children:[Object(O.jsx)(w.a,{show:e.showSidebar,darahad:e.toggleSideBar}),Object(O.jsxs)("div",{onClick:e.toggleSideBar,className:t.join(" "),children:[Object(O.jsx)("div",{className:N.a.Logo,children:Object(O.jsx)(x,{})}),Object(O.jsx)(S,{})]})]})},P=n(2),M=n(39),L=n(11),F=n(49),A=n.n(F),z=n(19),K=n(10),Y=function(e){var t=Object(a.useContext)(y.b),n=Object(P.g)(),r=Object(a.useContext)(K.b),c=Object(a.useState)(),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(),d=Object(s.a)(u,2),j=d[0],b=d[1],g=Object(a.useState)(),x=Object(s.a)(g,2),h=x[0],p=x[1],f=Object(a.useRef)();Object(a.useEffect)((function(){return r.burger.finished&&!r.burger.error&&n.replace("/orders"),function(){r.clearBurger()}}),[r.burger.finished]);return console.log("Contact Data rendered......"),Object(O.jsxs)("div",{className:A.a.ContactData,children:[Object(O.jsxs)("div",{ref:f,children:[Object(O.jsxs)("strong",{style:{fontSize:"16px"},children:["\u0414\u04af\u043d: ",r.burger.totalPrice]})," "]}),Object(O.jsx)("div",{children:r.burger.error&&"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u0433 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445\u0430\u0434 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430 : ".concat(r.burger.error)}),r.burger.saving?Object(O.jsx)(z.a,{}):Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{onChange:function(e){"red"===f.current.style.color?f.current.style.color="green":f.current.style.color="red",l(e.target.value)},type:"text",name:"name",className:"border-solid border-2 border-green-500 rounded-full py-3 px-6",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440"}),Object(O.jsx)("input",{onChange:function(e){b(e.target.value)},type:"text",name:"city",className:"border-solid border-2 border-green-500 rounded-full py-3 px-6",placeholder:"\u0425\u043e\u0442"}),Object(O.jsx)("input",{onChange:function(e){p(e.target.value)},type:"text",name:"street",className:"border-solid border-2 border-green-500 rounded-full py-3 px-6",placeholder:"\u0413\u0443\u0434\u0430\u043c\u0436"}),Object(O.jsx)(L.a,{text:"\u0418\u041b\u0413\u042d\u042d\u0425",btnType:"Success",daragdsan:function(){var e={userId:t.state.userId,orts:r.burger.ingredients,dun:r.burger.totalPrice,hayag:{name:i,city:j,street:h}};r.saveBurger(e,t.state.token)}})]}),Object(O.jsx)(L.a,{text:"Toggle",btnType:"Success",daragdsan:r.toggle})]})},J=n(51),U=n.n(J),E=function(e){var t=Object(a.useContext)(K.b);return Object(O.jsxs)("div",{className:U.a.ShippingPage,children:[Object(O.jsx)("p",{className:"font-mono text-yellow-700",children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430 \u0430\u043c\u0442\u0442\u0430\u0439 \u0431\u0430\u0439\u043d\u0430 \u0433\u044d\u0436 \u043d\u0430\u0439\u0434\u0430\u0436 \u0431\u0430\u0439\u043d\u0430..."}),Object(O.jsx)("p",{className:"font-mono text-yellow-700",children:Object(O.jsxs)("strong",{children:["\u0414\u04af\u043d: ",t.burger.totalPrice,"\u20ae"]})}),Object(O.jsx)(M.a,{}),Object(O.jsx)(L.a,{daragdsan:function(){e.history.goBack()},btnType:"Danger",text:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u042b\u0413 \u0426\u0423\u0426\u041b\u0410\u0425"}),Object(O.jsx)(L.a,{daragdsan:function(){e.history.replace("/ship/contact")},btnType:"Success",text:"\u0425\u04ae\u0420\u0413\u042d\u041b\u0422\u0418\u0419\u041d \u041c\u042d\u0414\u042d\u042d\u041b\u042d\u041b \u041e\u0420\u0423\u0423\u041b\u0410\u0425"}),Object(O.jsx)(P.b,{path:"/ship/contact",children:Object(O.jsx)(Y,{})})]})},H=n(52),R=n.n(H),W=function(e){var t=Object(a.useContext)(y.b),n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],d=l[1];return Object(O.jsxs)("div",{className:R.a.Login,children:[t.state.userId&&Object(O.jsx)(P.a,{to:"/orders"}),Object(O.jsx)("input",{onChange:function(e){o(e.target.value)},type:"text",placeholder:"Email \u0445\u0430\u044f\u0433"}),Object(O.jsx)("input",{onChange:function(e){d(e.target.value)},type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433"}),t.state.logginIn&&Object(O.jsx)(z.a,{}),t.state.error&&Object(O.jsx)("div",{style:{color:"red"},children:t.state.error?"Email \u044d\u0441\u0432\u044d\u043b \u043d\u0443\u0443\u0446 \u04af\u0433 \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043d\u0430!!!":null}),Object(O.jsx)(L.a,{text:"\u041d\u044d\u0432\u0442\u0440\u044d\u0445",btnType:"Success",daragdsan:function(){t.loginUser(c,u)}})]})},G=function(e){var t=Object(a.useContext)(y.b);return Object(a.useEffect)((function(){t.logout()}),[t]),Object(O.jsx)(P.a,{to:"/"})},q=n(38),Q=r.a.lazy((function(){return n.e(3).then(n.bind(null,95))})),V=r.a.lazy((function(){return n.e(4).then(n.bind(null,96))})),X=r.a.lazy((function(){return n.e(5).then(n.bind(null,93))})),Z=function(e){var t=Object(a.useContext)(y.b),n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],o=r[1],i=function(){o((function(e){return!e}))};return Object(a.useEffect)((function(){var e=localStorage.getItem("token"),n=localStorage.getItem("userId"),a=new Date(localStorage.getItem("expireDate")),r=localStorage.getItem("refreshToken");e&&(a>new Date?(t.loginUserSuccess(e,n,a,r),t.autoRenewTokenAfterMillisec(a.getTime()-(new Date).getTime())):t.autoRenewTokenAfterMillisec(36e5))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{toggleSideBar:i}),Object(O.jsx)(D,{showSidebar:c,toggleSideBar:i}),Object(O.jsx)("main",{className:l.a.Content,children:Object(O.jsx)(K.a,{children:Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)("div",{children:"\u0422\u04af\u0440 \u0445\u04af\u043b\u044d\u044d\u043d\u044d \u04af\u04af..."}),children:t.state.userId?Object(O.jsxs)(P.d,{children:[Object(O.jsx)(P.b,{path:"/logout",component:G}),Object(O.jsx)(P.b,{path:"/orders",children:Object(O.jsx)(q.a,{children:Object(O.jsx)(V,{})})}),Object(O.jsx)(P.b,{path:"/ship",component:E}),Object(O.jsx)(P.b,{path:"/",component:Q})]}):Object(O.jsxs)(P.d,{children:[Object(O.jsx)(P.b,{path:"/signup",component:X}),Object(O.jsx)(P.b,{path:"/login",component:W}),Object(O.jsx)(P.a,{to:"/login"})]})})})})]})},$=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(O.jsx)(f.a,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(Z,{})})}),document.getElementById("root")),$()}],[[87,1,2]]]);
//# sourceMappingURL=main.7124ea4d.chunk.js.map