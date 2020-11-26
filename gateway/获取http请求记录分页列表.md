# 获取http请求记录分页列表

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/gateway/trafficStatistics/requestRecords
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| page | 可选 | int | 页码(默认为1) |
| pageSize | 可选 | int | 每页数量 (默认为10) |
| serverGroupName | 可选 | string | 服务组名称,例如api-node-service.production |
| serviceResponseTime | 可选 | int | 服务响应时间,需要配合参数operator一起使用 |
| routerId | 可选 | string | 路由ID,用于筛选访问记录  |
| requestUrl | 可选 | string| 请求URL,用于筛选访问记录  |
| userId | 可选 | int | 用于筛选访问记录  |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| requestId | string | 请求ID,网关分配 |
| traceId | string | 请求链路ID,网关分配 |
| routerId | string | 代理请求所使用的路由ID |
| requestUrl | string | 请求的URL |
| method | string | 请求的method |
| serviceResponseTime | int | 服务响应时间(ms) |
| serverGroupName | string | 服务所在的分组,网关可以提供全部的数据 |
| forwardUrl | string | 代理的目标服务器实际请求URL |
| reqContentLength | int | 请求发送的内容长度 |
| resContentLength | int | 请求响应的内容长度 |
| userId | int | 请求所属的用户ID |
| createDate | date | 请求时间 |

### 示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"page": 1,
		"pageSize": 10,
		"totalItem": 12,
		"dataList": [{
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "721a8cdb2fcf",
			"traceId": "01d0d18b3544",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 23,
			"createDate": "2020-04-16T03:41:37.189Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "2920c4e6750e",
			"traceId": "9338ad6a984e",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 28,
			"createDate": "2020-04-16T03:20:17.072Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "81a945736ce4",
			"traceId": "261e61f39744",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 20,
			"createDate": "2020-04-16T02:53:03.601Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "7490ea47a51d",
			"traceId": "32d9e94df34b",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 3,
			"createDate": "2020-04-16T02:51:43.022Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "8d025c6020a7",
			"traceId": "f633c595a941",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 3,
			"createDate": "2020-04-16T02:51:42.776Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "73fcb1218437",
			"traceId": "f4179579c34d",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 3,
			"createDate": "2020-04-16T02:51:42.495Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "e1912f59520f",
			"traceId": "11be518faa4b",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 3,
			"createDate": "2020-04-16T02:51:39.902Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "5a76062be66f",
			"traceId": "bf00975dec41",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 3,
			"createDate": "2020-04-16T02:51:39.488Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "50b8e91c55ae",
			"traceId": "13e726fe4f42",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 4,
			"createDate": "2020-04-16T02:51:39.066Z"
		}, {
			"userId": 0,
			"reqContentLength": 0,
			"resContentLength": 276,
			"requestId": "10fc890b545d",
			"traceId": "fa446ef14340",
			"routerId": "5e956ced8736e939f4a28d07",
			"method": "GET",
			"requestUrl": "/v1/userinfos/detail?keywords=18923803593",
			"forwardUrl": "/v1/userinfos/detail?keywords=18923803593",
			"serverGroupName": "localhost-server-group",
			"serviceResponseTime": 8,
			"createDate": "2020-04-16T02:48:50.409Z"
		}]
	}
}
```

