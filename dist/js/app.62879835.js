(function(t){function e(e){for(var n,o,u=e[0],s=e[1],i=e[2],p=0,l=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(l.length)l.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0c69":function(t,e,r){"use strict";r("70aa")},"0cfc":function(t,e,r){},"1bd2":function(t,e,r){"use strict";r("4d3d")},"304c":function(t,e,r){},4392:function(t,e,r){"use strict";r("569a")},"4d3d":function(t,e,r){},"51b9":function(t,e,r){"use strict";r("f98e")},"569a":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view")],1)},c=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"nav-bar"}},[r("router-link",{attrs:{to:"/products",id:"products-link"}},[r("h1",[t._v("FABULOUS FOOTWEAR")])]),r("router-link",{attrs:{to:"/cart",id:"cart-link"}},[r("button",[t._v("Shopping Cart")])])],1)},u=[],s={name:"NavBar"},i=s,d=(r("d294"),r("2877")),p=Object(d["a"])(i,o,u,!1,null,"76eb08ca",null),l=p.exports,f={name:"App",components:{NavBar:l}},m=f,v=(r("034f"),Object(d["a"])(m,a,c,!1,null,null,null)),h=v.exports,_=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-wrap"}},[r("h1",[t._v("Shopping Cart")]),r("ProductsList",{attrs:{products:t.cartItems},on:{"remove-from-cart":function(e){return t.removeFromCart(e)}}}),r("h3",{attrs:{id:"total-price"}},[t._v("Total: $"+t._s(t.totalPrice))]),r("button",{attrs:{id:"checkout-button"}},[t._v("Proceed to Checkout")])],1)},g=[],w=(r("13d5"),r("a9e3"),r("96cf"),r("1da1")),P=r("bc3a"),O=r.n(P),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products.length>0?r("div",t._l(t.products,(function(e){return r("ProductsListItem",{key:e.id,attrs:{product:e},on:{"remove-from-cart":function(e){return t.$emit("remove-from-cart",e)}}})})),1):r("p",[t._v("There are no products in your cart")])},C=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-container"},[r("img",{staticClass:"product-image",attrs:{src:t.product.imageUrl}}),r("div",{staticClass:"details-wrap"},[r("h3",[t._v(t._s(t.product.name))]),r("p",[t._v("$"+t._s(t.product.price))])]),r("button",{staticClass:"remove-button",on:{click:function(e){return t.$emit("remove-from-cart",t.product.id)}}},[t._v("Remove From Cart")])])},y=[],I={name:"ProductslistItem",props:["product"]},$=I,k=(r("6c95"),Object(d["a"])($,j,y,!1,null,"4361c3c5",null)),R=k.exports,S={name:"ProductsList",props:["products"],components:{ProductsListItem:R}},E=S,F=(r("7ae5"),Object(d["a"])(E,x,C,!1,null,"710d645a",null)),T=F.exports,M={name:"CartPage",components:{ProductsList:T},data:function(){return{cartItems:[]}},computed:{totalPrice:function(){return this.cartItems.reduce((function(t,e){return t+Number(e.price)}),0)}},methods:{removeFromCart:function(t){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,O.a.delete("/api/users/12345/cart/".concat(t));case 2:n=r.sent,e.cartItems=n.data;case 4:case"end":return r.stop()}}),r)})))()}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/users/12345/cart");case 2:r=e.sent,n=r.data,t.cartItems=n;case 5:case"end":return e.stop()}}),e)})))()}},N=M,G=(r("b94b"),Object(d["a"])(N,b,g,!1,null,"d80983ac",null)),L=G.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{attrs:{id:"page-wrap"}},[r("div",{attrs:{id:"img-wrap"}},[r("img",{attrs:{src:t.product.imageUrl}})]),r("div",{attrs:{id:"product-details"}},[r("h1",[t._v(t._s(t.product.name))]),r("h3",{attrs:{id:"price"}},[t._v("$"+t._s(t.product.price))]),r("p",[t._v("Average rating: "+t._s(t.product.averageRating))]),t.itemIsInCart||t.showSuccessMessage?t._e():r("button",{attrs:{id:"add-to-cart"},on:{click:t.addToCart}},[t._v("Add to Cart")]),t.itemIsInCart?r("button",{staticClass:"gray-button",attrs:{id:"add-to-cart"}},[t._v("Item is already added")]):t._e(),!t.itemIsInCart&&t.showSuccessMessage?r("button",{staticClass:"green-button",attrs:{id:"add-to-cart"}},[t._v("Successfully added item to cart!")]):t._e(),r("h4",[t._v("Description")]),r("p",[t._v(t._s(t.product.description))])])]):r("NotFoundPage")},U=[],B=(r("45fc"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("404: Page Not Found")])}),D=[],J={name:"NotFoundPage"},V=J,W=(r("51b9"),Object(d["a"])(V,B,D,!1,null,"67acb557",null)),q=W.exports,z={name:"ProductDetailPage",components:{NotFoundPage:q},data:function(){return{product:{},cartItems:[],showSuccessMessage:!1}},computed:{itemIsInCart:function(){var t=this;return this.cartItems.some((function(e){return e.id===t.product.id}))}},methods:{addToCart:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/users/12345/cart",{productId:t.$route.params.id});case 2:t.showSuccessMessage=!0,setTimeout((function(){t.$router.push("/products")}),3e3);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var r,n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/products/".concat(t.$route.params.id));case 2:return r=e.sent,n=r.data,t.product=n,e.next=7,O.a.get("/api/users/12345/cart");case 7:a=e.sent,c=a.data,t.cartItems=c;case 10:case"end":return e.stop()}}),e)})))()}},H=z,K=(r("1bd2"),Object(d["a"])(H,A,U,!1,null,"4d3709cd",null)),Q=K.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-wrap"}},[r("ProductsGrid",{attrs:{products:t.products}})],1)},Y=[],Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-wrap"},t._l(t.products,(function(t){return r("ProductsGridItem",{key:t.id,attrs:{product:t}})})),1)},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item"},[r("img",{attrs:{src:t.product.imageUrl}}),r("h3",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),r("p",{staticClass:"product-price"},[t._v("$"+t._s(t.product.price))]),r("router-link",{attrs:{to:"/products/"+t.product.id}},[r("button",[t._v("View Details")])])],1)},rt=[],nt={name:"ProductsGridItem",props:["product"]},at=nt,ct=(r("0c69"),Object(d["a"])(at,et,rt,!1,null,"c29c71aa",null)),ot=ct.exports,ut={name:"ProductsGrid",props:["products"],components:{ProductsGridItem:ot}},st=ut,it=(r("4392"),Object(d["a"])(st,Z,tt,!1,null,"77f30404",null)),dt=it.exports,pt={name:"ProductsPage",components:{ProductsGrid:dt},data:function(){return{products:[]}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/products");case 2:r=e.sent,n=r.data,t.products=n;case 5:case"end":return e.stop()}}),e)})))()}},lt=pt,ft=Object(d["a"])(lt,X,Y,!1,null,null,null),mt=ft.exports;n["a"].use(_["a"]);var vt=[{path:"/products",name:"Products",component:mt},{path:"/products/:id",name:"ProductDetail",component:Q},{path:"/cart",name:"Cart",component:L},{path:"/",redirect:"/products"},{path:"*",component:q}],ht=new _["a"]({mode:"history",base:"/",routes:vt}),_t=ht;n["a"].config.productionTip=!1,new n["a"]({router:_t,render:function(t){return t(h)}}).$mount("#app")},"6c40":function(t,e,r){},"6c95":function(t,e,r){"use strict";r("0cfc")},"70aa":function(t,e,r){},"7ae5":function(t,e,r){"use strict";r("304c")},"85ec":function(t,e,r){},a781:function(t,e,r){},b94b:function(t,e,r){"use strict";r("6c40")},d294:function(t,e,r){"use strict";r("a781")},f98e:function(t,e,r){}});
//# sourceMappingURL=app.62879835.js.map