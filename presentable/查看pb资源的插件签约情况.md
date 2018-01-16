# 查看pb资源的插件签约

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/pageBuildAssociateWidgetContract?presentableId={presentableId}
```

### URL传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|pb-presentableID|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | object[] | presentable关联的插件合同ID |
| **contractId | string | 关联插件的合同ID |
| **resourceId | string | 关联插件的资源ID |

### 返回示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"resourceId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a",
		"resourceName": "freelog-alpha-reveal",
		"contractId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a"
	}]
}
```