(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{320:function(t,e,r){"use strict";r.r(e);r(43),r(88),r(45);var c=r(47),n=Object(c.b)({props:{article:{type:Object,required:!0}},setup:function(t){var e=Object(c.a)((function(){return t.article.slug})),r=Object(c.a)((function(){return t.article.createdAt?t.article.createdAt.split("T")[0]:""})),path="https://www.gaftalk.com/blog/items/"+e.value;return{slug:e,date:r,twitterUrl:Object(c.a)((function(){return"https://twitter.com/intent/tweet?url=".concat(path,"&text=").concat(t.article.title)}))}}}),o=r(34),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("article",{staticClass:"border-t-2 p-4"},[r("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{to:"/blog/items/"+t.slug}}),t._v(" "),r("time",{staticClass:"text-right text-sm text-gray-700"},[t._v(t._s(t.date)+"🕥")]),t._v(" "),r("h2",{staticClass:"text-xl font-bold"},[t._v(t._s(t.article.title))]),t._v(" "),r("nuxt-content",{staticClass:"prose",attrs:{document:t.article}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"w-8 h-8"},[r("a",{attrs:{href:t.twitterUrl,target:"_blank"}},[r("svg",{staticClass:"w-8 h-8 text-gray-600 hover:text-gray-800",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z",fill:"currentColor"}})])])])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r.r(e);var c=r(9),n=(r(44),r(47)),o=Object(n.b)({setup:function(){var t=Object(n.h)(),title=t.title,meta=t.meta,e=Object(n.g)().$content,r=Object(n.i)(),o=Object(n.a)((function(){return r.value.params.slug})),article=Object(n.d)({});return Object(n.f)(Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("blog",o.value).fetch();case 2:r=t.sent,article.value=r,title.value=r.title,meta.value=[{hid:"description",property:"description",content:r["og:description"]||"いろいろなこと"},{hid:"og:description",property:"og:description",content:r["og:description"]||"いろいろなこと"},{hid:"og:title",property:"og:title",content:"".concat(r.title)},{hid:"og:url",property:"og:url",content:"".concat("https://www.gaftalk.com","/blog/items/").concat(o.value)},{hid:"og:image",property:"og:image",content:"".concat(r["og:image"])},{hid:"twitter:card",property:"twitter:card",content:"summary"}];case 6:case"end":return t.stop()}}),t)}))),"jhnxrBdym872b0L0/19Bzg=="),{article:article}},head:{}}),l=r(34),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[r("Card",{attrs:{article:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(320).default})}}]);