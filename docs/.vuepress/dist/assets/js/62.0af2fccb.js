(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{435:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"查看用户个人账户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看用户个人账户信息"}},[t._v("#")]),t._v(" 查看用户个人账户信息")]),t._v(" "),s("h3",{attrs:{id:"调用方式-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用方式-get"}},[t._v("#")]),t._v(" 调用方式: GET")]),t._v(" "),s("h3",{attrs:{id:"接口地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://api.freelog.com/v2/accounts/individualAccounts/{userId}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"url传入参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url传入参数说明"}},[t._v("#")]),t._v(" url传入参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型及范围")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("userId")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前登录用户ID")])])])]),t._v(" "),s("h3",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值字段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("字段说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accountId")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accountName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户名称")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accountType")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户类型 (1:个人 2:合约 3:节点 4:组织或公司)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ownerId")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户所有者ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ownerName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户所属者名称")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ownerUserId")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户所属者用户ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("balance")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("余额")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("freezeBalance")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("冻结的金额")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accountName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户名称")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("状态 0:未激活 1:正常 2:冻结")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("updateDate")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("datetime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("账户数据最后更新时间")])])])]),t._v(" "),s("h3",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ret"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accountId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"233332382945822"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accountName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yuliang"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accountType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ownerId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50021"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ownerName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yuliang"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ownerUserId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50021")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1200.00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"freezeBalance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-30T08:30:05.287Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-05-07T06:29:26.000Z"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);