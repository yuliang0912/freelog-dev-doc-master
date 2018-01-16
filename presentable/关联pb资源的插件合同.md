# 关联pb资源的插件合同


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/presentables/pageBuildAssociateWidget
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|pbPresentableId|必选|string|需要关联的page-build资源的presentable|
|increaseContractIds|必选|string[]|需要关联的widget合同ID,如果切换contractId,则需要填写新的合同ID|
|removeContractIds|必选|string[]|需要取消关联的widget合同ID,如果切换contractId,则需要填写旧的合同ID|

### body示例

```js
{
    "pbPresentableId": "5a5334f49bc4e800219bbf22",
    "increaseContractIds": ["5a531f766f5da10020904589"],
    "removeContractIds": []
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| resourceId | string | presentable对应的资源ID |
| contractId | string | presentable对应的合同ID |
| relevanceContractIds | object[] | presentable关联的插件合同ID |
| **contractId | string | 关联插件的合同ID |
| **resourceId | string | 关联插件的资源ID |

### 返回示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"updateDate": "2018-01-15T09:47:23.832Z",
		"createDate": "2018-01-15T09:47:23.832Z",
		"presentableId": "5a5439049bc4e800219bbf24",
		"resourceId": "b2ceb75c53f6dccf14868b1c448f71c1298fca68",
		"contractId": "5a5438ef6f5da10020904590",
		"_id": "5a5c78abfe83c1001fcb88ef",
		"status": 0,
		"relevanceContractIds": [{
			"contractId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a",
			"resourceId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a"
		}]
	}
}
```