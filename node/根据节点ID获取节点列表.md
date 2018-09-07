# 根据节点ID获取节点列表

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/nodes/list
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeIds|必选|string|节点ID,多个用逗号分隔|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| nodeId | int | 节点ID |
| nodeName | string | 节点名称 |
| nodeDomain | string | 节点域名前缀 |
| ownerUserId | int | 节点所有者ID |
| status | int | 节点状态(0:未发布 1:已发布 2:系统冻结) |
| createDate | date | 创建日期 |

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"nodeId": 10015,
		"nodeName": "test1",
		"nodeDomain": "test1",
		"ownerUserId": 10004,
		"status": 0,
		"createDate": "2018-07-11T06:53:00.000Z",
		"updateDate": "2018-07-11T06:53:00.000Z"
	}, {
		"nodeId": 10016,
		"nodeName": "markdown2",
		"nodeDomain": "markdown2",
		"ownerUserId": 10004,
		"status": 0,
		"createDate": "2018-07-20T03:29:49.000Z",
		"updateDate": "2018-07-20T03:29:49.000Z"
	}]
}
```

