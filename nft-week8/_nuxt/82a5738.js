(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{281:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("22eaa25a",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var l={name:"NuxtHeader",data:function(){return{active:!1}}},o=(n(297),n(37)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("header",[e("nav",{staticClass:"navbar p-0"},[e("div",{staticClass:"container flex-nowrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("ul",{staticClass:"menu d-none d-md-flex"},[e("li",{staticClass:"border-end border-dark"},[t._v("探索")]),t._v(" "),e("li",{staticClass:"border-end border-dark"},[t._v("市值")]),t._v(" "),e("li",[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-wallet"}})],1)]),t._v(" "),e("div",{staticClass:"d-flex align-items-center d-md-none"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.active=!t.active}}},[e("span",{staticClass:"navbar-toggler-icon"})])])])]),t._v(" "),e("Collapsible",{staticClass:"d-flex d-md-none bg-white",attrs:{active:t.active}},[e("div",{staticClass:"collapse__menus"},[e("div",{staticClass:"collapse__menuitem"},[t._v("探索")]),t._v(" "),e("div",{staticClass:"collapse__menuitem"},[t._v("市值")]),t._v(" "),e("div",{staticClass:"collapse__menuitem"},[t._v("連結錢包")])])])],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("img",{attrs:{src:"imgs/logo.svg",alt:"logo"}})])},function(){var t=this._self._c;return t("div",{staticClass:"d-none d-md-flex border-end border-start border-dark flex-grow-1"},[t("input",{staticClass:"search",attrs:{type:"search",placeholder:"搜尋作品名稱、藝術家名稱"}})])}],!1,null,"26a829e1",null);e.default=component.exports;installComponents(component,{Collapsible:n(295).default,Header:n(286).default})},288:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("36697419",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n(281)},292:function(t,e,n){var l=n(74)((function(i){return i[1]}));l.push([t.i,'.content[data-v-e83c8a0e]{background-color:#fff;max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content.active[data-v-e83c8a0e]:after{content:"";position:fixed;height:100%;width:100%;top:0;left:0;background-color:rgba(0,0,0,.5)}',""]),l.locals={},t.exports=l},295:function(t,e,n){"use strict";n.r(e);var l={name:"NuxtCollapsible",props:{active:{type:Boolean,default:!1}},methods:{contentStyle:function(){return{maxHeight:this.active&&this.$el?this.$el.scrollHeight+"px":"0px"}}}},o=(n(291),n(37)),component=Object(o.a)(l,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"content",class:[t.active&&"active"],style:t.contentStyle()},[t._t("default")],2)}),[],!1,null,"e83c8a0e",null);e.default=component.exports},297:function(t,e,n){"use strict";n(288)},298:function(t,e,n){var l=n(74)((function(i){return i[1]}));l.push([t.i,"header[data-v-26a829e1]{border-bottom:1px solid #000;position:sticky;top:0;z-index:10}nav[data-v-26a829e1]{background-color:#fff;z-index:2}nav .container[data-v-26a829e1]{height:100px;display:flex;align-items:center;padding:0}nav .container>*[data-v-26a829e1]{height:100%}.navbar-brand[data-v-26a829e1]{margin:0;flex-grow:1;align-items:center;display:flex}.navbar-brand img[data-v-26a829e1]{width:auto;height:40px;margin-left:0}.collapse__menus[data-v-26a829e1]{width:100%;padding-bottom:36px;padding-left:36px;padding-right:36px;z-index:2;background-color:#fff}.collapse__menus .collapse__menuitem[data-v-26a829e1]{padding:24px;text-align:center;border-bottom:1px solid #000}.collapse__menus .collapse__menuitem[data-v-26a829e1]:hover{background-color:#e6553b;color:#fff;border:1px solid #000}.search[data-v-26a829e1]{height:100%;width:100%;padding:8px 32px;font-size:24px}.menu[data-v-26a829e1]{display:flex;list-style:none;margin:0;padding:0}.menu li[data-v-26a829e1]{font-weight:700;font-size:20px;padding:0 32px;white-space:nowrap;line-height:1.5;display:flex;align-items:center}",""]),l.locals={},t.exports=l}}]);