# 批量获取授权链授权结果(再签约授权,合同授权)

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentables/getPresentableContractChainAuth?presentableIds={presentableIds}&nodeId={nodeId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|节点ID|
|presentableIds|必选|presentableId,多个用逗号分隔|节点资源ID|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| authResult | int | 0:无效 1:授权通过  2:未获得再签约授权  3:未获得合同授权 |

### 返回示例
```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5c403a99b94000002998a9d7",
		"authResult": 1
	}, {
		"presentableId": "5c403afdb94000002998a9de",
		"authResult": 1
	}]
}
```