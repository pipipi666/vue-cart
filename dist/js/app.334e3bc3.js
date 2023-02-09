(function(){var t={4145:function(t,e,r){"use strict";var i=r(6369),s=r(551),a=r.n(s),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header-panel"),e("div",{staticClass:"content"},[e("bread-crumbs"),e("cart-title"),e("cart-main"),e("viewed-products")],1)],1)},c=[],o=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumbs"},[e("a",{attrs:{href:"#"}},[t._v("Главная")]),e("div",{staticClass:"breadcrumbs__arrow"}),e("a",{staticClass:"text_secondary",attrs:{href:"#"}},[t._v("Корзина")])])}],l={name:"BreadCrumbs"},d=l,_=r(1001),m=(0,_.Z)(d,o,u,!1,null,"291dae1d",null),p=m.exports,g=function(){var t=this,e=t._self._c;return t.getProductsCount?e("div",{staticClass:"cart-main"},[e("div",{staticClass:"cart-main__list"},[e("cart-list"),e("extra-service")],1),e("cart-total")],1):e("div",{staticClass:"text_l message"},[t._v("Ваша корзина пуста")])},v=[],f=r(3822),C=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list"},t._l(t.getCartProducts,(function(r,i){return e("li",{key:r.id},[e("cart-item",{attrs:{item:r}}),e("hr",{directives:[{name:"show",rawName:"v-show",value:i<t.getCartProducts.length-1,expression:"index < getCartProducts.length - 1"}]})],1)})),0)},P=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("img",{staticClass:"card__image",attrs:{src:t.getImgUrl(t.item.image)}}),e("div",{staticClass:"card__info"},[e("span",{staticClass:"text_m text_b"},[t._v(t._s(t.item.category)+" "+t._s(t.item.model))]),e("span",{staticClass:"text_s"},[t._v(t._s(t.item.characteristics.squareMin)+"-"+t._s(t.item.characteristics.squareMax)+"/"+t._s(t.item.characteristics.circulation)+" м"),t._m(0),t._v("/ч / "+t._s(t.item.characteristics.isGidro&&"Гидрорегулируемый расход")+" / "+t._s(t.item.characteristics.isSensor&&"От датчика присутствия"))]),e("span",{staticClass:"text_secondary"},[t._v("Артикул: "+t._s(t.item.code))])]),e("div",{staticClass:"card__calc"},[e("main-button",{staticClass:"card__calc_left",attrs:{btnType:"button_counter",onClick:t.decrement}},[t._v("-")]),e("div",{staticClass:"card__calc_count"},[t._v(t._s(t.item.quantity))]),e("main-button",{staticClass:"card__calc_right",attrs:{btnType:"button_counter",onClick:t.increment}},[t._v("+")])],1),e("span",{staticClass:"card__text_price text_price text_l"},[t._v(t._s((t.item.price*t.item.quantity).toLocaleString("ru"))+" ₽")]),e("button",{staticClass:"card__button_close",on:{click:t.deleteP}})])},h=[function(){var t=this,e=t._self._c;return e("sup",[e("small",[t._v("3")])])}],b=function(){var t=this,e=t._self._c;return e("button",{class:t.btnType,on:{click:t.onClick}},[t._t("default")],2)},y=[],w={name:"MainButton",props:{btnType:{validator(t){return["button_default","button_accent","button_secondary","button_counter"].includes(t)}},onClick:{type:Function,default(){console.log("a")}}}},S=w,q=(0,_.Z)(S,b,y,!1,null,"b15fb2bc",null),G=q.exports,M={components:{MainButton:G},name:"CartItem",props:{item:{id:Number,quantity:Number,category:String,model:String,minPrice:Number,maxPrice:Number,price:Number,code:String,description:String,characteristics:{squareMin:Number,squareMax:Number,circulation:Number,isGidro:Boolean,isSensor:Boolean},image:String}},computed:(0,f.Se)(["getProductCount"]),methods:{getImgUrl(t){const e=r(5675);return e("./"+t+".png")},...(0,f.OI)(["incrementProduct","decrementProduct","deleteProduct"]),increment(){this.incrementProduct(this.$props.item.id)},decrement(){this.decrementProduct(this.$props.item.id)},deleteP(){this.deleteProduct(this.$props.item.id)}}},H=M,I=(0,_.Z)(H,x,h,!1,null,"70121909",null),N=I.exports,O={components:{CartItem:N},name:"CartList",computed:(0,f.Se)(["getCartProducts"])},T=O,k=(0,_.Z)(T,C,P,!1,null,"6ed284aa",null),B=k.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper total"},[e("h3",[t._v("Итого")]),e("ul",{staticClass:"total__list text_m"},[e("li",{staticClass:"total__list__item"},[e("span",[t._v("Сумма заказа")]),e("span",{staticClass:"text_numeric"},[t._v(t._s(t.getTotalPrice.toLocaleString("ru"))+" ₽")])]),e("li",{staticClass:"total__list__item"},[e("span",[t._v("Количество")]),e("span",{staticClass:"text_numeric"},[t._v(t._s(t.getProductsCount)+" шт")])]),e("li",{staticClass:"total__list__item"},[e("span",[t._v("Установка")]),e("span",{staticClass:"text_numeric"},[t._v(" "+t._s(t.getInstallation?t.getInstallationPrice:"Нет"))])])]),e("hr"),e("div",{staticClass:"total__result text_b"},[e("span",{staticClass:"text_l"},[t._v("Стоимость товаров")]),e("span",{staticClass:"total__result_sum text_b text_numeric"},[t._v(t._s(t.getTotalPrice.toLocaleString("ru"))+" ₽")])]),e("main-button",{staticClass:"text_l",attrs:{onClick:t.fetchOrder,btnType:"button_accent"}},[t._v("Оформить заказ")]),e("main-button",{staticClass:"text_l",attrs:{btnType:"button_default"}},[t._v("Купить в 1 клик")])],1)},E=[],L={components:{MainButton:G},name:"CartTotal",computed:(0,f.Se)(["getProductsPrice","getTotalPrice","getProductsCount","getInstallation","getInstallationPrice"]),methods:{...(0,f.nv)(["fetchOrder"])}},j=L,V=(0,_.Z)(j,Z,E,!1,null,"280e6c56",null),$=V.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"extra wrapper"},[e("input",{staticClass:"extra__checkbox",attrs:{type:"checkbox",name:"extra-checkbox",id:"extra-checkbox"},on:{click:t.toggleInstallation}}),t._m(0),t._m(1)])},F=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"extra__icon"},[e("img",{staticClass:"extra__icon__img",attrs:{src:r(6103),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"extra__text"},[e("span",{staticClass:"text_b text_m"},[t._v("Установка")]),e("span",{staticClass:"text_secondary"},[t._v("Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.")])])}],D={name:"ExtraService",computed:(0,f.Se)(["getInstallation"]),methods:{...(0,f.OI)(["toggleInstallation"])}},A=D,X=(0,_.Z)(A,U,F,!1,null,"bab015e4",null),J=X.exports,z={components:{CartList:B,ExtraService:J,CartTotal:$},name:"CartMain",computed:(0,f.Se)(["getProductsCount"])},K=z,Q=(0,_.Z)(K,g,v,!1,null,"5855ac60",null),R=Q.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-title"},[e("h1",[t._v("Ваша корзина")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.getProductsCount,expression:"getProductsCount"}],staticClass:"cart-title__info"},[e("span",{staticClass:"text_secondary text_l"},[t._v("4 товара")]),e("main-button",{staticClass:"cart-title__info__button text_secondary",attrs:{btnType:"button_secondary",onClick:t.clearCart}},[t._v("Очистить корзину")])],1)])},Y=[],tt={components:{MainButton:G},name:"CartTitle",computed:(0,f.Se)(["getProductsCount"]),methods:{...(0,f.OI)(["clearCart"])}},et=tt,rt=(0,_.Z)(et,W,Y,!1,null,"8502bb5e",null),it=rt.exports,st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__content"},[e("cart-preview")],1)])},at=[],nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart__preview"},[e("img",{staticClass:"cart__preview_icon",attrs:{alt:"",src:r(4173)}}),e("div",{staticClass:"cart__preview_info"},[e("span",[t._v("Ваша корзина")]),e("span",{staticClass:"text_secondary text_s"},[t._v(t._s(t.getProductsCount)+" товар"+t._s(t.suff))]),e("span",{staticClass:"text_s"},[t._v(t._s(t.getTotalPrice.toLocaleString("ru"))+" ₽")])])])},ct=[],ot={name:"CartPreview",computed:{...(0,f.Se)(["getProductsCount","getTotalPrice"]),suff(){const t=this.getProductsCount%10>4||!(this.getProductsCount%10)||this.getProductsCount>10&&this.getProductsCount<15?"ов":this.getProductsCount%10===1?"":"а";return t}}},ut=ot,lt=(0,_.Z)(ut,nt,ct,!1,null,"583c9803",null),dt=lt.exports,_t={components:{CartPreview:dt},name:"HeaderPanel"},mt=_t,pt=(0,_.Z)(mt,st,at,!1,null,"1a9bae58",null),gt=pt.exports,vt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"viewed__header"},[e("h2",[t._v("Просмотренные товары")]),e("div",{staticClass:"viewed__header__pagination"},[t._m(0),e("div",{staticClass:"text_pages"},[e("span",{staticClass:"current-page"},[t._v(t._s(t.pagesIndex)+" ")]),e("span",{staticClass:"text_secondary text_m"},[t._v(" / "+t._s(t.pagesCount))])]),t._m(1)])]),e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOptions,expression:"swiperOptions",arg:"mySwiper"}],staticClass:"swiper swiper-container",on:{transitionStart:t.transitionStart}},[e("div",{staticClass:"swiper-wrapper"},t._l(t.getViewedProducts,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("viewed-item",{attrs:{item:t}})],1)})),0)])])},ft=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"button prev"},[e("i",{staticClass:"left"})])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"button next"},[e("i",{staticClass:"right"})])}],Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper card"},[e("img",{staticClass:"card__image",attrs:{src:t.getImgUrl(t.item.image)}}),e("span",{staticClass:"text_large text_b"},[t._v(t._s(t.item.model))]),e("span",{staticClass:"description"},[t._v(t._s(t.item.description))]),e("span",{staticClass:"text_large text_numeric text_price text_l"},[t._v(t._s(t.item.minPrice.toLocaleString("ru"))+" ₽ - "+t._s(t.item.maxPrice.toLocaleString("ru"))+" ₽")]),e("span",{staticClass:"text_m text_secondary"},[t._v(t._s((t.item.minPrice/t.getEuroCoef).toFixed(2).toLocaleString("ru"))+" € - "+t._s((t.item.maxPrice/t.getEuroCoef).toFixed(2).toLocaleString("ru"))+" €")]),e("main-button",{staticClass:"btn",attrs:{btnType:"button_accent"}},[t._v("Подробнее")])],1)},Pt=[],xt={components:{MainButton:G},name:"ViewedItem",props:{item:{id:Number,quantity:Number,category:String,model:String,minPrice:Number,maxPrice:Number,price:Number,code:String,description:String,characteristics:{squareMin:Number,squareMax:Number,circulation:Number,isGidro:Boolean,isSensor:Boolean},image:String}},computed:(0,f.Se)(["getProductCount","getEuroCoef"]),methods:{getImgUrl(t){const e=r(5675);return e("./"+t+".png")},...(0,f.OI)(["incrementProduct","decrementProduct","deleteProduct"]),increment(){this.incrementProduct(this.$props.item.id)},decrement(){this.decrementProduct(this.$props.item.id)},deleteP(){this.deleteProduct(this.$props.item.id)}}},ht=xt,bt=(0,_.Z)(ht,Ct,Pt,!1,null,"266be5d9",null),yt=bt.exports,wt={components:{ViewedItem:yt},name:"ViewedProducts",computed:{...(0,f.Se)(["getViewedProducts"])},data(){return{pagesCount:1,pagesIndex:1,swiperOptions:{slidesPerView:4,slidesPerGroup:4,spaceBetween:50,navigation:{nextEl:".button.next",prevEl:".button.prev"}}}},mounted(){this.pagesCount=Math.round(this.mySwiper.slides.length/4)},methods:{transitionStart(){const{realIndex:t}=this.mySwiper;this.pagesIndex=Math.round((t+1)/4)+1}}},St=wt,qt=(0,_.Z)(St,vt,ft,!1,null,"209135a8",null),Gt=qt.exports,Mt={name:"App",components:{HeaderPanel:gt,BreadCrumbs:p,CartTitle:it,CartMain:R,ViewedProducts:Gt}},Ht=Mt,It=(0,_.Z)(Ht,n,c,!1,null,null,null),Nt=It.exports,Ot=[{id:1,quantity:87,category:"Вытяжное устройство",model:"G2H",price:12644,minPrice:6848,maxPrice:56584,code:"G2H1065",description:"Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:2,quantity:5,category:"Вытяжное устройство",model:"ВХС",minPrice:6848,maxPrice:56584,price:25288,code:"G2H1065",description:"Вытяжное устройство для механической системы вентиляции",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"BXC"},{id:3,quantity:3,category:"Вытяжное устройство",model:"GHN",minPrice:6848,maxPrice:56584,price:12644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"GHN"},{id:4,quantity:11,category:"Вытяжное устройство",model:"G2H5",minPrice:6848,maxPrice:56584,price:13644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:5,quantity:2,category:"Вытяжное устройство",model:"G2H1",minPrice:6848,maxPrice:56584,price:11644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:6,quantity:87,category:"Вытяжное устройство",model:"G2H3",minPrice:6848,maxPrice:56584,price:112644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:7,quantity:187,category:"Вытяжное устройство",model:"G2H11",minPrice:6848,maxPrice:56584,price:2644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:8,quantity:87,category:"Вытяжное устройство",model:"G2H111",minPrice:6848,maxPrice:56584,price:644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:9,quantity:87,category:"Вытяжное устройство",model:"G23",minPrice:6848,maxPrice:56584,price:16644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"},{id:10,quantity:87,category:"Вытяжное устройство",model:"2H",minPrice:6848,maxPrice:56584,price:12644,code:"G2H1065",description:"Вытяжное устройство с датчиком присутствия",characteristics:{squareMin:12,squareMax:72,circulation:168,isGidro:!0,isSensor:!0},image:"G2H"}];i["default"].use(f.ZP);var Tt=new f.ZP.Store({state:{userId:"id",installationPrice:2e3,euroCoef:78.29,cartProducts:[Ot[0],Ot[1],Ot[2]],viewedProduct:Ot,isInstallationNeeded:!1},getters:{getProduct(t,e){const r=t.cartProducts.find((t=>t.id===e));return r},getCartProducts(t){return t.cartProducts},getViewedProducts(t){return t.viewedProduct},getInstallation(t){return t.isInstallationNeeded},getInstallationPrice(t){return t.installationPrice},getEuroCoef(t){return t.euroCoef},getProductsPrice(t){return t.cartProducts.reduce(((t,e)=>t+e.price*e.quantity),0)},getTotalPrice(t,e){return t.isInstallationNeeded?e.getProductsPrice+t.installationPrice:e.getProductsPrice},getProductsCount(t){return t.cartProducts.reduce(((t,e)=>t+e.quantity),0)},getProductCount(t,e,r){const i=t.cartProducts.find((t=>t.id===r));return i.quantity}},mutations:{toggleInstallation(t){t.isInstallationNeeded=!t.isInstallationNeeded},incrementProduct(t,e){const r=t.cartProducts.find((t=>t.id===e));r.quantity++},decrementProduct(t,e){const r=t.cartProducts.find((t=>t.id===e));r.quantity--,r.quantity||(t.cartProducts=t.cartProducts.filter((t=>t.id!==e)))},deleteProduct(t,e){t.cartProducts=t.cartProducts.filter((t=>t.id!==e))},clearCart(t){t.cartProducts=[]}},actions:{fetchOrder({state:t}){const e=t.cartProducts.map((t=>({id:t.id,quantity:t.quantity}))),r={...t.userId,products:e};return fetch("https://example.com",{method:"POST",body:JSON.stringify(r)}).catch((t=>console.error(t)))}},modules:{}});i["default"].config.productionTip=!1,i["default"].use(a()),new i["default"]({store:Tt,render:t=>t(Nt)}).$mount("#app")},5675:function(t,e,r){var i={"./BXC.png":3057,"./G2H.png":3161,"./GHN.png":4209,"./TDA.png":4263};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id=5675},4173:function(t,e,r){"use strict";t.exports=r.p+"img/cart-icon.ce65c181.svg"},6103:function(t,e,r){"use strict";t.exports=r.p+"img/tools.83d8e528.svg"},3057:function(t,e,r){"use strict";t.exports=r.p+"img/BXC.de93dc7e.png"},3161:function(t,e,r){"use strict";t.exports=r.p+"img/G2H.e990d529.png"},4209:function(t,e,r){"use strict";t.exports=r.p+"img/GHN.d20b7e41.png"},4263:function(t,e,r){"use strict";t.exports=r.p+"img/TDA.25accd93.png"}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,i,s,a){if(!i){var n=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],a=t[l][2];for(var c=!0,o=0;o<i.length;o++)(!1&a||n>=a)&&Object.keys(r.O).every((function(t){return r.O[t](i[o])}))?i.splice(o--,1):(c=!1,a<n&&(n=a));if(c){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,s,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/vue-cart/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,n=i[0],c=i[1],o=i[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(s in c)r.o(c,s)&&(r.m[s]=c[s]);if(o)var l=o(r)}for(e&&e(i);u<n.length;u++)a=n[u],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},i=self["webpackChunkvue_cart"]=self["webpackChunkvue_cart"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(4145)}));i=r.O(i)})();
//# sourceMappingURL=app.334e3bc3.js.map