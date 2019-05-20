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
        "updateDate": "2019-05-20T08:58:59.390Z",
        "meta": {}
    }
}
```