# 查看单个mock资源详情

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/{mockResourceId}
```

### 传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|mockResourceId|必选|string|mock资源ID|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| mockResourceId | string | mock资源ID|
| resourceType | string | 资源类型[[详见附表]][资源类型] |
| name | string | mock资源名 |
| description|string|资源描述|
| previewImages | string[] | 预览图 |
| meta | object | meta信息 |
| systemMeta | object | 系统meta信息 |
| bucketName | string | bucket名 |


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"mockResourceId": "5ce26c5356c28e5be8b51e5e",
		"fullName": "yuliang/markdown-file-1",
		"previewImages": [],
		"status": 0,
		"name": "markdown-file-1",
		"sha1": "81024b25db669618cb79823df0f9005776d6141a",
		"userId": 10026,
		"resourceType": "markdown",
		"systemMeta": {
			"sha1": "81024b25db669618cb79823df0f9005776d6141a",
			"fileSize": 394,
			"mimeType": "text/plain",
			"dependencies": []
		},
		"bucketId": "5c8b115192abd02280a188f3",
		"bucketName": "yuliang",
		"description": "",
		"createDate": "2019-05-20T08:58:59.390Z",
		"updateDate": "2019-05-20T08:58:59.509Z",
		"meta": {}
	}
}
```