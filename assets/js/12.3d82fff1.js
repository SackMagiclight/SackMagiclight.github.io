(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(t,e,a){"use strict";var i=a(31);a.n(i).a},181:function(t,e,a){"use strict";a.r(e);var i={name:"Articles",data:()=>({loading:!0}),created(){this.$nextTick(function(){this.loading=!1})},props:["pages","prefix"],mounted(){console.log(this.filteredPages)},computed:{filteredPages(){return this.pages.filter(t=>!t.frontmatter.exclude&&!t.path.match(/tag|category/)).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},s=(a(176),a(1)),r=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?t._e():a("div",t._l(t.filteredPages,function(e){return a("div",{key:e.key,staticClass:"article-container"},[a("h3",{staticClass:"article-title"},[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title||"No Title"))])],1),t._v(" "),a("div",{staticClass:"second-line"},[e.frontmatter.date?a("div",{staticClass:"published-date"},[a("i",{staticClass:"far fa-calendar calendar-icon"}),t._v("\r\n        "+t._s(e.frontmatter.date.slice(0,10))+"\r\n      ")]):t._e(),t._v(" "),a("div",{staticClass:"tag-container"},[a("i",{staticClass:"fas fa-tags tag-icon"}),t._v(" "),t._l(e.frontmatter.categories,function(e){return a("router-link",{key:e,staticClass:"tag",attrs:{tag:"div",to:"/category/"+e+".html"}},[t._v(t._s(e))])})],2),t._v(" "),e.frontmatter.description?a("div",{staticClass:"article-description"},[t._v(t._s(e.frontmatter.description))]):t._e()])])}),0)},[],!1,null,"31a9374a",null);e.default=r.exports},31:function(t,e,a){}}]);