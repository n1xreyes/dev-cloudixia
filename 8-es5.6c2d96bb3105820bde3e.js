function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(e,t,r){"use strict";r.r(t),r.d(t,"OrdersModule",(function(){return J}));var i=r("ofXK"),c=r("PCNd"),n=r("tyNb"),o=r("kt0X"),s=function(e){return e.orders},a=Object(o.p)(s,(function(e){return e.ordersListing})),b=Object(o.p)(s,(function(e){return e.loading})),l=r("3E0/"),u=r("P7K9"),d=r("bbeA"),p=r("fXoL"),f=r("668k"),h=r("dbUT"),v=r("sYmb"),y=r("9lMO");function g(e,t){if(1&e){var r=p.Yb();p.Xb(0,"tr",7),p.fc("click",(function(){p.Bc(r);var e=t.$implicit;return p.hc(2).navigate(e)})),p.Xb(1,"th",8),p.Kc(2),p.Wb(),p.Xb(3,"td"),p.Kc(4),p.Wb(),p.Xb(5,"td"),p.Kc(6),p.Wb(),p.Xb(7,"td"),p.Kc(8),p.Wb(),p.Xb(9,"td"),p.Kc(10),p.ic(11,"async"),p.ic(12,"enum"),p.Wb(),p.Xb(13,"td"),p.Kc(14),p.Wb(),p.Wb()}if(2&e){var i=t.$implicit,c=t.index,n=p.hc(2);p.Cb(2),p.Lc(c),p.Cb(2),p.Lc(i.title),p.Cb(2),p.Lc(i.description),p.Cb(2),p.Lc(i.price),p.Cb(2),p.Lc(p.jc(11,6,p.kc(12,8,i.status,"OrderStatus"))),p.Cb(4),p.Lc(n.isSeller?i.buyer.displayName:i.seller.displayName)}}function m(e,t){if(1&e&&(p.Xb(0,"table",4),p.Xb(1,"thead"),p.Xb(2,"tr"),p.Xb(3,"th"),p.Kc(4,"#"),p.Wb(),p.Xb(5,"th",5),p.Kc(6,"order.fields.title"),p.Wb(),p.Xb(7,"th",5),p.Kc(8,"order.fields.description"),p.Wb(),p.Xb(9,"th",5),p.Kc(10,"order.fields.price"),p.Wb(),p.Xb(11,"th",5),p.Kc(12,"order.fields.status"),p.Wb(),p.Xb(13,"th"),p.Kc(14),p.ic(15,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(16,"tbody"),p.Ic(17,g,15,11,"tr",6),p.ic(18,"async"),p.Wb(),p.Wb()),2&e){var r=p.hc();p.Cb(14),p.Lc(p.jc(15,2,r.isSeller?"order.virtualFields.buyerName":"order.virtualFields.sellerName")),p.Cb(3),p.nc("ngForOf",p.jc(18,4,r.orders$))}}var O,j=((O=function(){function e(t,r,i){_classCallCheck(this,e),this.store=t,this.activeRoute=r,this.router=i,this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions.push(this.activeRoute.url.subscribe((function(t){e.isSeller=t[0]&&"seller"===t[0].path,e.store.dispatch(new u.a({type:e.isSeller?d.b.SELLER:d.b.BUYER,userId:t[1]?t[1].path:void 0}))}))),this.isLoading$=this.store.select(b).pipe(Object(l.a)(0)),this.orders$=this.store.pipe(Object(o.q)(a))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(e){e.unsubscribe()}))}},{key:"navigate",value:function(e){this.router.navigate(["".concat(this.isSeller?"seller":"buyer","/orderDetail/").concat(e.uid)],{relativeTo:this.activeRoute.parent})}}]),e}()).\u0275fac=function(e){return new(e||O)(p.Rb(o.h),p.Rb(n.a),p.Rb(n.c))},O.\u0275cmp=p.Lb({type:O,selectors:[["app-orders"]],decls:10,vars:12,consts:[[1,"px-4","white","section-header"],[1,"container-fluid"],["mdbTable","","hover","true",4,"ngIf"],[3,"isLoading","showNoRecordsMessage"],["mdbTable","","hover","true"],["translate",""],["mdbTableRow","",3,"click",4,"ngFor","ngForOf"],["mdbTableRow","",3,"click"],["scope","row"]],template:function(e,t){if(1&e&&(p.Xb(0,"div",0),p.Xb(1,"h3"),p.Kc(2),p.ic(3,"translate"),p.Wb(),p.Wb(),p.Xb(4,"div",1),p.Ic(5,m,19,6,"table",2),p.ic(6,"async"),p.Sb(7,"app-loader",3),p.ic(8,"async"),p.ic(9,"async"),p.Wb()),2&e){var r,i=!(null!=(r=p.jc(9,10,t.orders$))&&r.length);p.Cb(2),p.Lc(p.jc(3,4,t.isSeller?"header.sellerToolsDropdown.soldOrders":"header.sellerToolsDropdown.boughtOrders")),p.Cb(3),p.nc("ngIf",!p.jc(6,6,t.isLoading$)),p.Cb(2),p.nc("isLoading",p.jc(8,8,t.isLoading$))("showNoRecordsMessage",i)}},directives:[i.t,f.a,h.Q,v.a,i.s,h.R],pipes:[v.d,i.b,y.a],styles:[""]}),O),C=r("1C/U"),X=r("NnDD"),W=r("Z21x"),w=r("+a7H");function k(e,t){if(1&e&&p.Sb(0,"app-user-profile-preview",7),2&e){var r=p.hc(2);p.nc("userProfile",r.order.seller)}}function S(e,t){if(1&e&&p.Sb(0,"app-user-profile-preview",7),2&e){var r=p.hc(2);p.nc("userProfile",r.order.buyer)}}function R(e,t){if(1&e&&(p.Xb(0,"mdb-card"),p.Xb(1,"mdb-card-header"),p.Kc(2),p.Wb(),p.Xb(3,"div",1),p.Ic(4,k,1,1,"app-user-profile-preview",2),p.Ic(5,S,1,1,"app-user-profile-preview",2),p.Wb(),p.Xb(6,"mdb-card-body"),p.Xb(7,"mdb-card-text"),p.Kc(8),p.Wb(),p.Wb(),p.Xb(9,"ul",3),p.Xb(10,"li",4),p.Kc(11),p.ic(12,"translate"),p.Wb(),p.Xb(13,"li",4),p.Xb(14,"span"),p.Kc(15),p.ic(16,"translate"),p.Wb(),p.Xb(17,"mdb-badge",5),p.Kc(18),p.ic(19,"async"),p.ic(20,"enum"),p.Wb(),p.Wb(),p.Wb(),p.Xb(21,"mdb-card-body"),p.Sb(22,"app-back-button"),p.Xb(23,"button",6),p.Kc(24,"Fake Action 1"),p.Wb(),p.Xb(25,"button",6),p.Kc(26,"Fake Action 2"),p.Wb(),p.Wb(),p.Wb()),2&e){var r=p.hc();p.Cb(2),p.Lc(r.order.title),p.Cb(2),p.nc("ngIf",!r.hideSeller),p.Cb(1),p.nc("ngIf",!r.hideBuyer),p.Cb(3),p.Mc(" ",r.order.description," "),p.Cb(3),p.Nc(" ",p.jc(12,8,"order.fields.price"),": ",r.order.price," "),p.Cb(4),p.Mc(" ",p.jc(16,10,"order.fields.status"),": "),p.Cb(3),p.Mc(" ",p.jc(19,12,p.kc(20,14,r.order.status,"OrderStatus"))," ")}}var L,I,K,P,D=((L=function(){function e(t,r){_classCallCheck(this,e),this.activeRoute=t,this.ordersService=r,this.hideSeller=!1,this.hideBuyer=!1,this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions.push(this.activeRoute.params.subscribe({next:function(t){e.ordersService.findOrderById(t.id).subscribe((function(t){e.order=t}))}}),this.activeRoute.url.subscribe({next:function(t){e.hideBuyer="buyer"===t[0].path,e.hideSeller="seller"===t[0].path}}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(e){e.unsubscribe()}))}},{key:"openUserProfile",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||L)(p.Rb(n.a),p.Rb(X.a))},L.\u0275cmp=p.Lb({type:L,selectors:[["app-order-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"center"],[3,"userProfile",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["color","red"],["mdbBtn","","type","button",1,"primary"],[3,"userProfile"]],template:function(e,t){1&e&&p.Ic(0,R,27,17,"mdb-card",0),2&e&&p.nc("ngIf",t.order)},directives:[i.t,h.F,h.H,h.E,h.J,h.y,W.a,h.D,w.a],pipes:[v.d,i.b,y.a],styles:[""]}),L),N=[{path:"seller",component:j},{path:"buyer",component:j},{path:"seller/orderDetail/:id",component:D},{path:"buyer/orderDetail/:id",component:D},{path:"seller/:id",component:j,canActivate:[C.a]},{path:"buyer/:id",component:j,canActivate:[C.a]},{path:"orderDetail/:id",component:D,canActivate:[C.a]}],$=((I=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:I}),I.\u0275inj=p.Ob({factory:function(e){return new(e||I)},imports:[[n.g.forChild(N)],n.g]}),I),_=r("snw9"),E=r("LRne"),B=r("itXk"),F=r("eIep"),T=r("lJxs"),x=r("JIr8"),A=r("N/25"),M=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=((P=function e(t,r,i){var c=this;_classCallCheck(this,e),this.actions$=t,this.ordersService=r,this.authService=i,this.ordersSearch$=this.actions$.pipe(Object(_.d)(u.d.LoadOrders),Object(F.a)((function(e){return e.payload.userId?Object(E.a)(e.payload):c.authService.getAuthState().pipe(Object(T.a)((function(t){var r;return Object.assign(Object.assign({},e.payload),{userId:null===(r=t)||void 0===r?void 0:r.uid})})))})),Object(F.a)((function(e){if(e.userId)return c.ordersService.findOrdersByBuyerId(e.userId,e.type).pipe(Object(F.a)((function(t){if(!t||!t.length)return Object(E.a)([]);var r=t.map((function(t){var r=e.type===d.b.SELLER;return c.authService.getDBUserProfile(r?t.buyerUid:t.sellerUid).pipe(Object(T.a)((function(e){return r?t.buyer=e:t.seller=e,t})))}));return Object(B.a)(r)})),Object(T.a)((function(e){return new u.c({data:e})})));throw new Error("We are doomed.")})),Object(x.a)((function(e){return Object(E.a)(new u.b({error:e}))})))}).\u0275fac=function(e){return new(e||P)(p.bc(_.a),p.bc(X.a),p.bc(A.a))},P.\u0275prov=p.Nb({token:P,factory:P.\u0275fac}),function(e,t,r,i){var c,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(n<3?c(o):n>3?c(t,r,o):c(t,r))||o);n>3&&o&&Object.defineProperty(t,r,o)}([Object(_.b)(),M("design:type",Object)],P.prototype,"ordersSearch$",void 0),P),J=((K=function e(){_classCallCheck(this,e)}).\u0275mod=p.Pb({type:K}),K.\u0275inj=p.Ob({factory:function(e){return new(e||K)},imports:[[$,i.c,c.a,h.W,_.c.forFeature([U])]]}),K)}}]);