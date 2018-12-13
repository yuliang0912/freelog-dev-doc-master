# 查看节点的presentable列表


### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables?nodeId={nodeId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|page|可选|int|页码(默认为1)|
|pageSize|可选|int|每页数量 (默认为10)|
|resourceType|可选|string|资源类型|
|isOnline|可选|int|是否上线(0:下线 1:上线 2:全部) 默认上线|
|tags|可选|string|用户创建presentable时设置的自定义标签,多个用","分割|
|projection|可选|string|指定返回的字段,多个用逗号分隔|
|isSignContract|可选|int|是否签约(0:未签约 1:已签约 2:全部) 默认全部|
|keywords|可选|string[1,100]|搜索关键字,目前支持模糊搜索节点资源名称和资源名称|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| presentableName | string | 展示方案名称 |
| resourceId | string | 方案对应的资源ID |
| masterContractId | string | 主合同ID |
| userId | int| 创建方案的用户ID |
| nodeId | int| 节点ID |
| nodeName | string| 节点名称 |
| policy| object[]| 展示方案策略组 (示例数据仅做参考)|
| createDate| date|创建日期|
| userDefinedTags| string[]| 用户定义的tags |
| resourceInfo| object| presentable对应的资源基础信息 |
| **resourceName| string| 资源名称 |
| **resourceType| string| 资源类型 |
| contracts | object[]| 当前presentable关联的执行合同 |
| isOnline | int| 是否上线 0:否 1:是 |
| status | int| 状态 1:合同已完备  2:存在可用策略 总状态通过\|运算 |

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"page": 1,
		"pageSize": 10,
		"totalItem": 1,
		"dataList": [{
			"presentableId": "5bc0379d62f500016881329f",
			"resourceInfo": {
				"resourceName": "我的资源",
				"resourceType": "widget",
				"meta": {}
			},
			"presentableName": "presentableName",
			"policy": [{
				"segmentId": "99516c75a8ca0b1b3a69bda6d0e8f2fa",
				"policyName": "收费方案",
				"status": 1,
				"authorizedObjects": [{
					"userType": "GROUP",
					"users": ["REGISTERED_USERS"]
				}],
				"policyText": "for REGISTERED_USERS:\n    escrow account acct\ninitial:\n    proceed to signed on accepting agreement @e759419923ea25bf6dff2694391a1e65c21739ce\nsigned:\n    proceed to auth on acct exceed 10 feather\nauth:\n    active\n    terminate",
				"fsmDeclarations": {
					"acct": {
						"type": "escrowaccount",
						"declareType": "contractAccount"
					}
				},
				"fsmStates": {
					"initial": {
						"authorization": [],
						"transition": {
							"signed": {
								"code": "S101",
								"params": {
									"licenseResourceId": ["e759419923ea25bf6dff2694391a1e65c21739ce"]
								}
							}
						}
					},
					"signed": {
						"authorization": [],
						"transition": {
							"auth": {
								"code": "S210",
								"params": {
									"contractAccountName": "acct",
									"amount": {
										"type": "literal",
										"literal": "10"
									},
									"currencyUnit": "feather"
								}
							}
						}
					},
					"auth": {
						"authorization": ["active"],
						"transition": {
							"terminate": null
						}
					}
				}
			}],
			"masterContractId": "",
			"userDefinedTags": ["tag1", "tag2", "tag3"],
			"presentableIntro": "",
			"isOnline": 1,
			"status": 7,
			"nodeId": 10015,
			"masterContractId": "5bc03c0d88ea6b34305486f9",
			"resourceId": "0bee49c19387521a79aeff78504425dde0ee4897",
			"userId": 10026,
			"nodeName": "demo",
			"contracts": [{
				"resourceId": "0bee49c19387521a79aeff78504425dde0ee4897",
				"authSchemeId": "5bbef4e69ddbbc246c425a62",
				"policySegmentId": "4b1e9e0ba36eae6c42d85f85c3208d78",
				"contractId": "5bc03c0d88ea6b34305486f9"
			}],
			"createDate": "2018-10-12T05:56:45.552Z",
			"updateDate": "2018-12-05T06:07:37.518Z"
		}]
	}
}
```