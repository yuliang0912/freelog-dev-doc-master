(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{473:function(t,a,e){"use strict";e.r(a);var s=e(46),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"批量冻结或解封资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量冻结或解封资源"}},[t._v("#")]),t._v(" 批量冻结或解封资源")]),t._v(" "),e("h3",{attrs:{id:"调用方式-put"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-put"}},[t._v("#")]),t._v(" 调用方式: PUT")]),t._v(" "),e("h3",{attrs:{id:"接口地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://api.freelog.com/v2/resources/freeOrRecover/batch\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"body传入参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body传入参数说明"}},[t._v("#")]),t._v(" body传入参数说明:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("resourceIds")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("资源ID,最多100个")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reason")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原因(例如冻结原因,解封原因)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("remark")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("备注")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("operationType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("操作类型 1:冻结 2:解封")])])])]),t._v(" "),e("h3",{attrs:{id:"返回说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("[data]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否操作成")])])])]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);