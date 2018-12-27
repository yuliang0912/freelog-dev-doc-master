# 批量获取presentable合同激活状态

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/getPresentableContractState?presentableIds={presentableId}&nodeId={nodeId}
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
| status | int | 是否全部激活 0:未全部激活 1:全部激活 |

### 返回示例
```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5c0e3435bfc645002bd59f04",
		"status": 1
	}]
}
```