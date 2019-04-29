# 创建mock资源

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks
```

### body传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|uploadFileId|必选|string|上传的资源返回来的uploadFileId值|
|name|必选|string|资源名称,需要同一个bucket下唯一 |
|meta|可选|json|自定义的资源meta信息|
|bucketName|必选|json|bucket名称|
|description|可选|string|资源描述|
|previewImages | 可选| string[] | 预览图URL地址,目前仅支持一个 |
|dependencies | 可选| object[] | 依赖的发行 |
|**releaseId | 必选| string | 依赖的发行ID |
|**versionRange | 必选| string | 依赖的发行semver范围 |

### body示例

```js
{
	"name": "my-first-mock-resource-1",
    "bucketName":"yuliang",
    "meta":{},
    "uploadFileId":"5cbfc79dae8edb53bc8de2ff"
}
```


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| id | string | mock资源ID|
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
		"previewImages": [],
		"status": 0,
		"name": "my-first-mock-resource-1",
		"sha1": "71fd7e3de0e9fe3d4f9c83e91d40a9f7cd2c8a39",
		"userId": 10026,
		"resourceType": "markdown",
		"systemMeta": {
			"dependencies": [],
			"sha1": "71fd7e3de0e9fe3d4f9c83e91d40a9f7cd2c8a39",
			"fileSize": 7206,
			"mimeType": "text/markdown"
		},
		"bucketId": "5c8b115192abd02280a188f3",
		"bucketName": "yuliang",
		"description": "",
		"createDate": "2019-04-24T06:55:42.077Z",
		"updateDate": "2019-04-24T06:55:42.077Z",
		"id": "5cc0086e71dee53dc8ff6c12",
		"meta": {}
	}
}
```