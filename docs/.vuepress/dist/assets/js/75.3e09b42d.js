(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{447:function(t,a,e){"use strict";e.r(a);var s=e(46),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"批量获取展品授权结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量获取展品授权结果"}},[t._v("#")]),t._v(" 批量获取展品授权结果")]),t._v(" "),e("h3",{attrs:{id:"调用方式-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-get"}},[t._v("#")]),t._v(" 调用方式: GET")]),t._v(" "),e("h3",{attrs:{id:"接口地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://api.freelog.com/v2/auths/presentables/nodes/{nodeId}/batchAuth/result\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"url传入参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url传入参数说明"}},[t._v("#")]),t._v(" url传入参数说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nodeId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("authType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("授权类型 1:节点侧授权 2:资源侧授权 3:节点+资源侧授权 4:全链路(包含用户,节点与资源)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("presentableIds")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("展品ID,多个逗号分隔")])])])]),t._v(" "),e("h3",{attrs:{id:"返回说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("presentableId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("展品ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("presentableName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("展品名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("referee")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("做出授权结果的标的物服务类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("breachResponsibilityType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("授权不通过责任方(1:资源 2:节点 3:c端消费者 128:未知)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("authCode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("授权码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("isAuth")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否授权通过")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("错误信息")])])])]),t._v(" "),e("h3",{attrs:{id:"返回示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errCode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presentableId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"608667da52abf900867dfd48"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presentableName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"novel-theme"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"referee"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authCode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isAuth"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);