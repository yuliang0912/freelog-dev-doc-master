# 查询presentable分页列表


### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables?nodeId={nodeId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|userId|可选|int|用户ID|
|page|可选|int|页码(默认为1)|
|pageSize|可选|int|每页数量 (默认为10)|
|resourceType|可选|string|资源类型|
|isOnline|可选|int|是否上线(0:下线 1:上线 2:全部) 默认上线|
|tags|可选|string|用户创建presentable时设置的自定义标签,多个用","分割|
|projection|可选|string|指定返回的字段,多个用逗号分隔|
|keywords|可选|string[1,100]|搜索关键字,目前支持模糊搜索节点资源名称和资源名称|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID |
| presentableName | string | 展示方案名称 |
| userDefinedTags | string[] | 用户定义的tags |
| intro | string | presentable简介 |
| isOnline | int | 是否上线 0:否 1:是 |
| userId | int | 创建方案的用户ID |
| nodeId | int | 节点ID |
| resolveReleases | object[] | 发行以及其上抛的解决方式 |
| **releaseId | string | 解决的发行ID |
| **releaseName | string | 解决的发行名称 |
| **contracts | object[] | 解决的发行的策略 |
| ****policyId | string | 选中的策略ID |
| ****contractId | string | 策略生成的合约ID |
| policies | object[] | 对外销售的方案策略组 |
| releaseInfo | object | presentable引用的发行基础信息 |
| **releaseId | string | 发行ID |
| **releaseName | string | 发行名称 |
| **resourceType | string | 资源类型 |
| **version | string | 引用的版本号 |
| createDate | date | 创建日期 |

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
			"presentableId": "5cde533c1e6b38334876b318",
			"presentableName": "my-presentable",
			"userDefinedTags": ["tag1", "tag2", "tag3"],
			"intro": "简介",
			"isOnline": 0,
			"contractStatus": 0,
			"status": 0,
			"userId": 50003,
			"resolveReleases": [{
				"contracts": [{
					"contractId": "5cce9f33ffbf3642dc291979",
					"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc"
				}],
				"releaseId": "5cb039815a791845b4aed4ab",
				"releaseName": "b1"
			}, {
				"contracts": [{
					"contractId": "5cdd25e58b01222dac2620d6",
					"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc"
				}],
				"releaseId": "5cc1271a204f822804244992",
				"releaseName": "a-a-b-6"
			}],
			"policies": [{
				"authorizedObjects": [{
					"userType": "GROUP",
					"users": ["PUBLIC"]
				}],
				"policyName": "免费策略",
				"status": 1,
				"policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
				"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc"
			}],
			"nodeId": 80000003,
			"releaseInfo": {
				"releaseId": "5cc1271a204f822804244992",
				"releaseName": "a-a-b-6",
				"resourceType": "markdown",
				"version": "0.1.0"
			},
			"createDate": "2019-05-17T06:22:52.382Z",
			"updateDate": "2019-05-17T06:22:52.445Z"
		}]
	}
}
```