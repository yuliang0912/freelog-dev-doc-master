# 搜索节点列表

> 此接口只针对后台,调用时注意区分业务环境



### 调用方式: GET



### 接口地址:

```
https://api.freelog.com/v2/nodes/search
```



### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| skip | 可选 | int  | 跳过的数量.默认为0.                      |
| limit | 可选| int  | 本次请求获取的数据条数.一般不允许超过100 |
| status | 可选 | int| 节点状态(0:正常 1:冻结) |
| keywords | 可选 | string | 搜索关键字,目前支持节点域名和节点名称 |
| tagIds | 可选 | string | 标签ID,多个用逗号分隔 |
| startRegisteredDate | 可选 | date | 起始注册时间 |
| endRegisteredDate | 可选 | date | 截止注册时间 |
| projection | 可选 | string | 指定返回的字段,多个用逗号分隔 |



### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| nodeId | int | 节点ID |
| nodeName | string | 节点名称 |
| nodeDomain | string | 节点域名前缀 |
| nodeThemeId | string | 节点主题展品ID |
| ownerUserId | int | 节点所有者ID |
| ownerUserName | string | 节点所有者名称 |
| status | int | 节点状态(0:未发布 1:已发布 2:系统冻结) |
| createDate | date | 创建日期 |
| tags | object[] | 标签信息 |
| ** tagId | int | 标签ID |
| ** tagName | string | 标签名称 |



### 示例

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"skip": 0,
		"limit": 10,
		"totalItem": 1,
		"dataList": [{
			"nodeThemeId": "",
			"status": 0,
			"nodeId": 80000000,
			"nodeName": "我的小节点",
			"nodeDomain": "xiaoxiao",
			"ownerUserId": 50021,
			"ownerUserName": "yuliang",
			"createDate": "2020-09-23T06:19:20.280Z",
			"updateDate": "2020-09-23T06:19:20.280Z",
			"tags": [{
				"tagId": 3,
				"tag": "tag3"
			}, {
				"tagId": 4,
				"tag": "节点标签2"
			}]
		}]
	}
}
```