(window.webpackJsonp=window.webpackJsonp||[]).push([[8,13],{279:function(r,t,o){"use strict";o.r(t);var n={name:"OrangeButton"},e=o(37),component=Object(e.a)(n,(function(){return(0,this._self._c)("button",{staticClass:"btn btn-orange"},[this._t("default")],2)}),[],!1,null,"152ee4a9",null);t.default=component.exports},282:function(r,t,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,o(75).default)("c405b990",content,!0,{sourceMap:!1})},293:function(r,t,o){"use strict";o(282)},294:function(r,t,o){var n=o(74)((function(i){return i[1]}));n.push([r.i,".artwork-card[data-v-79fba49c]{width:300px;margin-bottom:24px}.artwork-card .artwork-card__img[data-v-79fba49c]{width:100%;margin-bottom:16px;padding:24px;background-color:#fff;position:relative}.artwork-card .artwork-card__img img[data-v-79fba49c]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.artwork-card .artwork-card__img .hover-wrap__inner[data-v-79fba49c]{display:flex;flex-direction:column;padding:16px;margin:16px;border:1px solid #fff;color:#fff;gap:8px}.artwork-card .artwork-card__img .hover-wrap[data-v-79fba49c]{display:none;position:absolute;z-index:7;width:calc(100% - 48px);height:calc(100% - 48px);background-color:rgba(0,0,0,.5)}.artwork-card:hover .artwork-card__img .hover-wrap[data-v-79fba49c]{display:flex}.artwork-card .artwork-card__info[data-v-79fba49c]{font-weight:700;padding-bottom:16px;border-bottom:1px solid #000}",""]),n.locals={},r.exports=n},296:function(r,t,o){"use strict";o.r(t);o(32);var n={name:"ArtworkCard",props:{artwork:{type:Object,required:!0}}},e=(o(293),o(37)),component=Object(e.a)(n,(function(){var r=this,t=r._self._c;return t("div",{staticClass:"artwork-card"},[t("div",{staticClass:"artwork-card__img"},[t("div",{staticClass:"hover-wrap"},[t("div",{staticClass:"hover-wrap__inner"},[t("span",[r._v(r._s(r.artwork.desc))]),r._v(" "),t("div",{staticClass:"flex-grow-1"},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-ethereum"}}),r._v("\n          "+r._s(r.artwork.price)+"\n        ")],1),r._v(" "),t("OrangeButton",{staticClass:"align-self-end"},[r._v("MORE")])],1)]),r._v(" "),t("img",{attrs:{src:r.artwork.img,alt:""}})]),r._v(" "),t("div",{staticClass:"artwork-card__info"},[r._v("\n    "+r._s(r.artwork.name)+"\n  ")])])}),[],!1,null,"79fba49c",null);t.default=component.exports;installComponents(component,{OrangeButton:o(279).default})}}]);