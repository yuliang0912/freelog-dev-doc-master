(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{429:function(t,a,e){"use strict";e.r(a);var s=e(46),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"查看节点详情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看节点详情"}},[t._v("#")]),t._v(" 查看节点详情")]),t._v(" "),e("h3",{attrs:{id:"调用方式-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-get"}},[t._v("#")]),t._v(" 调用方式: GET")]),t._v(" "),e("h3",{attrs:{id:"接口地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("url1: https://api.freelog.com/v2/nodes/{nodeId}\nurl2: https://api.freelog.com/v2/nodes/detail?nodeName={nodeName}&nodeDomain={nodeDomain}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"url1传入参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url1传入参数说明"}},[t._v("#")]),t._v(" url1传入参数说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点ID")])])])]),t._v(" "),e("h3",{attrs:{id:"url2传入参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url2传入参数说明"}},[t._v("#")]),t._v(" url2传入参数说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeDomain")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点域名")])])])]),t._v(" "),e("h3",{attrs:{id:"返回说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeDomain")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点域名前缀")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeThemeId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点主题展品ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pageBuildId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("兼容旧版,nodeThemeId的别名,后期可能取消字段.建议使用nodeThemeId")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ownerUserId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点所有者ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ownerUserName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点所有者名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点状态(1:下线 2:上线 4:冻结)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建日期")])])])]),t._v(" "),e("h3",{attrs:{id:"返回示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeThemeId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80000003")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我的小节点4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeDomain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoxiao4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ownerUserId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50021")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ownerUserName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yuliang"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createDate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-08-05T06:48:08.702Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateDate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-08-05T06:48:08.702Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pageBuildId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);