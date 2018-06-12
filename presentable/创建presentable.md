# 创建presentable


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/presentables/
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|name|必选|string|presentable名称
|nodeId|必选|int|节点ID |
|resourceId|必选|string|资源ID|
|presentableName|可选|string|presentable名称|

### body示例

```js
{
    "presentableName": "我的方案1",
    "nodeId": 10015,
    "resourceId": "004c19dd7d2257436e9e238abf1b6ef6e639e2bf"
}
```

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
| isOnline | int| 是否上线 0:否 1:是 |
| status | int| 状态 1:合同已完备  2:存在可用策略 总状态通过\|运算 |


### 返回示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"presentableId": "5b05152faaaef01564d40a7b",
		"presentableName": "",
		"resourceId": "004c19dd7d2257436e9e238abf1b6ef6e639e2bf",
		"userId": 10026,
		"nodeId": 10015,
		"nodeName": "demo",
		"createDate": "2018-05-23T07:15:59.482Z",
		"updateDate": "2018-05-30T07:58:51.147Z",
		"contracts": [],
		"policy": [],
		"userDefinedTags": [],
		"resourceInfo": {
			"resourceName": "pb2",
			"resourceType": "page_build"
		},
		"status": 0
	}
}
```