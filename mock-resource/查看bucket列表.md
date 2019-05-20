# 查看bucket列表

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/buckets
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| bucketId | string | bucketId|
| bucketName | string | bucket名称|
| userId | int | 用户ID|
| resourceCount |int |包含的资源数量|
| totalFileSize |int |包含的资源总文件字节大小|
| createDate | date | 创建日期 |


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"bucketId": "5c8b115192abd02280a188f3",
		"resourceCount": 0,
		"totalFileSize": 0,
		"bucketName": "yuliang",
		"userId": 10026,
		"createDate": "2019-03-15T02:43:29.841Z",
		"updateDate": "2019-05-20T08:40:57.737Z"
	}]
}
```
