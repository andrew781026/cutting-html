(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{283:function(t,n,e){var content=e(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("25ea7b64",content,!0,{sourceMap:!1})},284:function(t,n,e){var content=e(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("3aab9c66",content,!0,{sourceMap:!1})},285:function(t,n,e){var content=e(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("2ab6c086",content,!0,{sourceMap:!1})},286:function(t,n,e){"use strict";e(283)},287:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.content[data-v-b71dd390]{\n  background-color:#fff;\n  max-height:0;\n  overflow:hidden;\n  transition:max-height .2s ease-out\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},288:function(t,n,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("298ad1ca",content,!0,{sourceMap:!1})},289:function(t,n,e){"use strict";e(284)},290:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\n.main-title[data-v-2d9712cb]{\n  position:relative;\n  display:flex;\n  gap:16px;\n  align-items:flex-end;\n  border-bottom:1px solid #000\n}\n.main-title .cht[data-v-2d9712cb]{\n  font-size:20px;\n  font-weight:700;\n  margin-bottom:16px\n}\n.main-title .eng[data-v-2d9712cb]{\n  font-size:48px\n}\n.main-title .more[data-v-2d9712cb]{\n  font-size:16px;\n  padding:8px 48px\n}\n.main-title .more[data-v-2d9712cb]:before{\n  content:"";\n  position:absolute;\n  right:0;\n  bottom:0;\n  width:0;\n  height:0;\n  border-color:transparent transparent #e6553b;\n  border-style:solid;\n  border-width:0 0 16px 16px;\n  transition:all .3s\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},291:function(t,n,e){var content=e(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("640e0e1d",content,!0,{sourceMap:!1})},292:function(t,n,e){"use strict";e.r(n);var o={name:"NuxtHeader",data:function(){return{active:!1}}},r=(e(296),e(35)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("header",[n("nav",{staticClass:"navbar p-0"},[n("div",{staticClass:"container flex-nowrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",{staticClass:"menu d-none d-md-flex"},[n("li",{staticClass:"border-end border-dark"},[t._v("探索")]),t._v(" "),n("li",{staticClass:"border-end border-dark"},[t._v("市值")]),t._v(" "),n("li",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-wallet"}})],1)]),t._v(" "),n("div",{staticClass:"d-flex align-items-center d-md-none"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){t.active=!t.active}}},[n("span",{staticClass:"navbar-toggler-icon"})])])])]),t._v(" "),n("Collapsible",{attrs:{active:t.active}},[n("div",{staticClass:"tt"},[t._v("GOOD JOB")])])],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("img",{attrs:{src:"imgs/logo.svg",alt:"logo"}})])},function(){var t=this._self._c;return t("div",{staticClass:"d-none d-md-flex border-end border-start border-dark flex-grow-1"},[t("input",{staticClass:"search",attrs:{type:"search",placeholder:"搜尋作品名稱、藝術家名稱"}})])}],!1,null,"5ab2d417",null);n.default=component.exports;installComponents(component,{Collapsible:e(293).default,Header:e(292).default})},293:function(t,n,e){"use strict";e.r(n);var o={name:"NuxtCollapsible",props:{active:{type:Boolean,default:!1}},methods:{contentStyle:function(){return{maxHeight:this.active&&this.$el?this.$el.scrollHeight+"px":"0px"}}}},r=(e(286),e(35)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"content",class:[t.active&&"active"],style:t.contentStyle()},[t._t("default")],2)}),[],!1,null,"b71dd390",null);n.default=component.exports},294:function(t,n,e){"use strict";e.r(n);var o={name:"MainTitle",props:{eng:{type:String,required:!0},cht:{type:String,required:!0}}},r=(e(289),e(35)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"main-title"},[n("span",{staticClass:"eng"},[t._v(t._s(t.eng))]),t._v(" "),n("span",{staticClass:"cht"},[t._v(t._s(t.cht))]),t._v(" "),n("div",{staticClass:"flex-grow-1"}),t._v(" "),n("div",{staticClass:"more"},[t._v("MORE")])])}),[],!1,null,"2d9712cb",null);n.default=component.exports},295:function(t,n,e){"use strict";e.r(n);var o={name:"OrangeButton"},r=e(35),component=Object(r.a)(o,(function(){return(0,this._self._c)("button",{staticClass:"btn btn-orange"},[this._t("default")],2)}),[],!1,null,"152ee4a9",null);n.default=component.exports},296:function(t,n,e){"use strict";e(285)},297:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nheader[data-v-5ab2d417]{\n  border-bottom:1px solid #000;\n  position:sticky;\n  top:0;\n  z-index:10\n}\nnav[data-v-5ab2d417]{\n  background-color:#fff\n}\nnav .container[data-v-5ab2d417]{\n  height:100px;\n  display:flex;\n  align-items:center;\n  padding:0\n}\nnav .container>*[data-v-5ab2d417]{\n  height:100%\n}\n.navbar-brand[data-v-5ab2d417]{\n  margin:0;\n  flex-grow:1;\n  align-items:center;\n  display:flex\n}\n.navbar-brand img[data-v-5ab2d417]{\n  width:auto;\n  height:40px;\n  margin-left:0\n}\n.tt[data-v-5ab2d417]{\n  width:100%;\n  height:100px;\n  background-color:#0a53be\n}\n.search[data-v-5ab2d417]{\n  height:100%;\n  width:100%;\n  padding:8px 32px;\n  font-size:24px\n}\n.menu[data-v-5ab2d417]{\n  display:flex;\n  list-style:none;\n  margin:0;\n  padding:0\n}\n.menu li[data-v-5ab2d417]{\n  font-weight:700;\n  font-size:20px;\n  padding:0 32px;\n  white-space:nowrap;\n  line-height:1.5;\n  display:flex;\n  align-items:center\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},298:function(t,n,e){"use strict";e(288)},299:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nimg[data-v-3ef4643b]{\n  width:auto;\n  height:100%;\n  margin:0\n}\n.other-box[data-v-3ef4643b]{\n  display:flex;\n  border:1px solid #000\n}\n.other-box img[data-v-3ef4643b]{\n  max-height:340px\n}\n.card[data-v-3ef4643b]{\n  display:flex;\n  flex-direction:column;\n  padding:24px;\n  border:none;\n  border-radius:0\n}\n.card .name[data-v-3ef4643b]{\n  font-size:18px\n}\n.card .title[data-v-3ef4643b]{\n  font-size:48px;\n  font-weight:700;\n  margin-top:8px;\n  margin-bottom:16px\n}\n.card .desc[data-v-3ef4643b]{\n  font-size:16px;\n  flex-grow:1;\n  margin-bottom:24px\n}\n.card button[data-v-3ef4643b]{\n  align-self:flex-end\n}\n.first-box[data-v-3ef4643b]{\n  display:flex;\n  border:1px solid #000\n}\n.first-box img[data-v-3ef4643b]{\n  max-height:500px\n}\n.first-box .recommend-block[data-v-3ef4643b]{\n  padding:24px;\n  background-color:#000;\n  color:#fff;\n  display:flex;\n  flex-direction:column;\n  gap:16px;\n  align-items:center\n}\n.first-box .recommend-block h2[data-v-3ef4643b]{\n  font-size:48px;\n  writing-mode:vertical-rl;\n  text-orientation:mixed\n}\n.first-box .recommend-block p[data-v-3ef4643b]{\n  font-size:20px;\n  word-wrap:break-word;\n  width:24px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},300:function(t,n,e){"use strict";e(291)},301:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\n.box .title[data-v-092228c4]{\n  padding:16px;\n  font-size:18px;\n  border-bottom:1px solid #000\n}\n.box .desc[data-v-092228c4]{\n  display:flex;\n  justify-content:space-between;\n  padding:8px 16px;\n  font-size:16px\n}\n.big-box[data-v-092228c4]{\n  border:1px solid #000\n}\n.big-box .img-box[data-v-092228c4]{\n  cursor:pointer;\n  position:relative;\n  overflow:hidden;\n  border-bottom:1px solid #000\n}\n.big-box .img-box img[data-v-092228c4]{\n  width:100%;\n  height:350px;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.big-box .img-box .number[data-v-092228c4]{\n  position:absolute;\n  top:0;\n  left:0;\n  height:64px;\n  width:64px;\n  font-size:32px;\n  line-height:64px;\n  text-align:center;\n  z-index:2;\n  background-color:#fff;\n  border-right:1px solid #000;\n  border-bottom:1px solid #000\n}\n.big-box .img-box .orange-button[data-v-092228c4]{\n  position:absolute;\n  bottom:-1px;\n  right:-1px;\n  transform:translateY(100%);\n  transition:all .3s\n}\n.big-box .img-box[data-v-092228c4]:hover:before{\n  content:"";\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background-color:rgba(0,0,0,.5)\n}\n.big-box .img-box:hover .orange-button[data-v-092228c4]{\n  transform:translateY(0)\n}\n.small-box[data-v-092228c4]{\n  display:flex;\n  border:1px solid #000\n}\n.small-box .number[data-v-092228c4]{\n  display:flex;\n  align-items:center;\n  font-size:24px;\n  padding:24px 16px\n}\n.small-box .img-box[data-v-092228c4]{\n  cursor:pointer;\n  position:relative;\n  overflow:hidden;\n  border-left:1px solid #000;\n  border-right:1px solid #000\n}\n.small-box .img-box img[data-v-092228c4]{\n  width:100px;\n  height:100px;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.small-box .img-box .more[data-v-092228c4]{\n  display:none;\n  position:absolute;\n  width:100%;\n  height:100%;\n  color:#fff;\n  font-size:18px;\n  justify-content:center;\n  align-items:center\n}\n.small-box .img-box .more[data-v-092228c4]:before{\n  content:"";\n  position:absolute;\n  right:0;\n  bottom:0;\n  width:0;\n  height:0;\n  border-color:transparent transparent #e6553b;\n  border-style:solid;\n  border-width:0 0 16px 16px;\n  transition:all .3s\n}\n.small-box .img-box[data-v-092228c4]:hover:before{\n  content:"";\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  background-color:rgba(0,0,0,.8)\n}\n.small-box .img-box:hover .more[data-v-092228c4]{\n  display:flex;\n  position:absolute\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},302:function(t,n,e){"use strict";e.r(n);var o={name:"NuxtRecommend"},r=(e(298),e(35)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-12 first-box flex-column flex-lg-row"},[n("div",{staticClass:"recommend-block d-none d-lg-flex"},[n("h2",[t._v("Recommend")]),t._v(" "),n("p",[t._v("推薦系列")])]),t._v(" "),n("img",{attrs:{src:"imgs/art01.jpg",alt:"logo"}}),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"name"},[t._v("Kemus Wu")]),t._v(" "),n("div",{staticClass:"title"},[t._v("瞳孔:流動的脈絡")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n          眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-orange"},[t._v("MORE")])])])]),t._v(" "),n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-12 col-lg-6"},[n("div",{staticClass:"flex-column-reverse flex-lg-row other-box"},[n("div",{staticClass:"card"},[n("div",{staticClass:"name"},[t._v("Joanne")]),t._v(" "),n("div",{staticClass:"title"},[t._v("海洋波度")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n            海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-orange"},[t._v("MORE")])]),t._v(" "),n("img",{attrs:{src:"imgs/art02.jpg",alt:"logo"}})])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6"},[n("div",{staticClass:"flex-column-reverse flex-lg-row other-box"},[n("div",{staticClass:"card"},[n("div",{staticClass:"name"},[t._v("Michael")]),t._v(" "),n("div",{staticClass:"title"},[t._v("我家窗前的鳥")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n            家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-orange"},[t._v("MORE")])]),t._v(" "),n("img",{attrs:{src:"imgs/art21.jpg",alt:"logo"}})])])])])}],!1,null,"3ef4643b",null);n.default=component.exports},303:function(t,n,e){"use strict";e.r(n);var o={name:"NuxtRanking",components:{MainTitle:e(294).default},data:function(){return{bigRankings:[{id:1,title:"散步遇到的女人",author:"Zoe Jiang",price:300,img:"imgs/art04.jpg"},{id:2,title:"爆炸頭的母親",author:"Yui",price:300,img:"imgs/art05.jpg"},{id:3,title:"夏天的時候",author:"Bug Lin",price:300,img:"imgs/art06.jpg"}],smallRankings:[{id:4,title:"追求者送我的花",author:"Michael",price:300,img:"imgs/art13.jpg"},{id:5,title:"今天釣到的魚",author:"Wei JJ",price:300,img:"imgs/art07.jpg"},{id:6,title:"人生中的貓咪們",author:"Even Lai",price:300,img:"imgs/art08.jpg"}]}}},r=(e(300),e(35)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("MainTitle",{attrs:{cht:"市價排行榜",eng:"Ranking"}}),t._v(" "),n("div",{staticClass:"row g-4 mt-5"},t._l(t.bigRankings,(function(e){return n("div",{key:e.id,staticClass:"col-12 col-md-4"},[n("div",{staticClass:"box big-box"},[n("div",{staticClass:"img-box"},[n("div",{staticClass:"number"},[t._v(t._s(e.id))]),t._v(" "),n("OrangeButton",{staticClass:"orange-button"},[t._v("MORE")]),t._v(" "),n("img",{attrs:{src:e.img,alt:"NFT"}})],1),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"author"},[t._v(t._s(e.author))]),t._v(" "),n("div",{staticClass:"price"},[n("font-awesome-icon",{attrs:{icon:"fa-brands fa-ethereum"}}),t._v("\n            "+t._s(e.price)+"\n          ")],1)])])])})),0),t._v(" "),n("div",{staticClass:"row g-4 mt-3"},t._l(t.smallRankings,(function(e){return n("div",{key:e.id,staticClass:"col-12 col-md-4"},[n("div",{staticClass:"box small-box"},[n("div",{staticClass:"number"},[t._v(t._s(e.id))]),t._v(" "),n("div",{staticClass:"img-box"},[n("div",{staticClass:"more"},[t._v("MORE")]),t._v(" "),n("img",{attrs:{src:e.img,alt:"NFT"}})]),t._v(" "),n("div",{staticClass:"flex-grow-1"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"author"},[t._v(t._s(e.author))]),t._v(" "),n("div",{staticClass:"price"},[n("font-awesome-icon",{attrs:{icon:"fa-brands fa-ethereum"}}),t._v("\n              "+t._s(e.price)+"\n            ")],1)])])])])})),0)],1)}),[],!1,null,"092228c4",null);n.default=component.exports;installComponents(component,{OrangeButton:e(295).default})},309:function(t,n,e){"use strict";e.r(n);var o=e(292),r=e(302),l=e(303),d={name:"IndexPage",components:{Recommend:r.default,Header:o.default,Ranking:l.default}},c=e(35),component=Object(c.a)(d,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("Header"),t._v(" "),n("Recommend"),t._v(" "),n("Ranking")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(292).default})}}]);