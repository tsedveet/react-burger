(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{92:function(t,e,n){t.exports={Order:"style_Order__3aFv3",Chat_notification:"style_Chat_notification__2RrXZ",Chat_notification_logo_wrapper:"style_Chat_notification_logo_wrapper__3yynJ",Chat_notification_logo:"style_Chat_notification_logo__ZRf02",Chat_notification_content:"style_Chat_notification_content__3bMNt",Chat_notification_title:"style_Chat_notification_title__1WCbX",Chat_notification_message:"style_Chat_notification_message__3ofgo"}},97:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(19),a=n(92),i=n.n(a),c=n(1),s=function(t){return Object(c.jsx)("div",{className:i.a.Chat_notification,children:Object(c.jsxs)("div",{className:i.a.Chat_notification_content,children:[Object(c.jsxs)("h4",{className:i.a.Chat_notification_title,children:["\u04ae\u043d\u0438\u0439\u043d \u0434\u04af\u043d: ",t.order.dun,"\u20ae"]}),Object(c.jsxs)("p",{className:i.a.Chat_notification_message,children:["\u0425\u0430\u044f\u0433: ",t.order.hayag.name," | ",t.order.hayag.street," | ",t.order.hayag.city]}),Object(c.jsxs)("p",{className:i.a.Chat_notification_message,children:["\u041e\u0440\u0446 - \u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445: ",t.order.orts.bacon,", \u0411\u044f\u0441\u043b\u0430\u0433:",t.order.orts.cheese,", \u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445: ",t.order.orts.meat,", \u0421\u0430\u043b\u0430\u0434:",t.order.orts.salad]})]})})},_=n(9),d=n(32),u=function(){return{type:"LOAD_ORDERS_START"}},f=function(t){return{type:"LOAD_ORDERS_SUCCESS",orders:t}},h=function(t){return{type:"LOAD_ORDERS_ERROR",error:t}},l=n(10);e.default=Object(_.b)((function(t){return{orders:t.orderReducer.orders,loading:t.orderReducer.loading,userId:t.signupReducer.userId}}),(function(t){return{loadOrders:function(e){return t(function(t){return function(e,n){e(u());var r=n().signupReducer.token;d.a.get("orders.json?&auth=".concat(r,'&orderBy="userId"&equalTo="').concat(t,'"')).then((function(t){var n=Object.entries(t.data).reverse();e(f(n))})).catch((function(t){return e(h(t))}))}}(e))}}}))((function(t){Object(r.useEffect)((function(){t.loadOrders(t.userId)}),[]);var e=Object(r.useContext)(l.b);return Object(c.jsxs)("div",{children:[""+e,t.loading?Object(c.jsx)(o.a,{}):t.orders.map((function(t){return Object(c.jsx)(s,{order:t[1]},t[0])}))]})}))}}]);
//# sourceMappingURL=4.6240f8b6.chunk.js.map