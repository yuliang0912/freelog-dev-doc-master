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
|resourceType|可选|string|资源类型|
|tags|可选|string|用户创建presentable时设置的自定义标签,多个用","分割|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| presentableName | string | 展示方案名称 |
| resourceId | string | 方案对应的资源ID |
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


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5b0d1ca255d4055cf84bdb73",
		"presentableName": "presentableName",
		"resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
		"userId": 10026,
		"nodeId": 10015,
		"nodeName": "demo",
		"createDate": "2018-05-29T09:25:54.043Z",
		"updateDate": "2018-05-30T08:10:30.236Z",
		"contracts": [{
			"resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
			"authSchemeId": "5afb9e67f313cc4d88a3f9a1",
			"policySegmentId": "397c06bd49cb3712437890c9cdf8b222",
			"contractId": "5b0e4d772868266bb8055c1f"
		}],
		"policy": [{
			"segmentId": "a68379dd361e74a89a37fce7a8b8d989",
			"policyName": "新的方案1",
			"segmentText": "for public: in <init> : terminate",
			"users": [{
				"userType": "group",
				"users": ["public"]
			}],
			"fsmDescription": [{
				"currentState": "<init>"
			}],
			"activatedStates": ["<init>"],
			"initialState": "<init>",
			"terminateState": "terminate",
			"status": 0
		}],
		"userDefinedTags": ["tag1", "tag2"],
		"resourceInfo": {
			"resourceName": "我的资源",
			"resourceType": "license"
		},
		"status": 0
	}]
}
```