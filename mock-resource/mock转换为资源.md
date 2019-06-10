# mock转换为资源

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/{mockResourceId}/convert
```

### url传入参数说明:
| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|mockResourceId|必选|string|mock资源ID|


### body传入参数说明:
| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| resourceAliasName | 必选 | string | 资源别名 |


### body示例

```js
{
	"resourceAliasName": "资源别名"
}
```


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| resourceId | string | 资源ID|
| resourceType | string | 资源类型[[详见附表]][资源类型] |
| aliasName | string | 资源别名 |
| description|string|资源描述|
| previewImages | string[] | 预览图 |
| intro | string | 资源简介 |
| meta | object | meta信息 |
| systemMeta | object | 系统meta信息 |

### 示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "previewImages": [
            "https://image.freelog.com/preview/b042cd88-cc9a-43fb-b8fb-1cae320b7977.jpg"
        ],
        "customMimeType": "",
        "status": 0,
        "resourceId": "71fd7e3de0e9fe3d4f9c83e91d40a9f7cd2c8a39",
        "aliasName": "新新新资源",
        "userId": 10026,
        "resourceType": "markdown",
        "systemMeta": {
            "dependencies": [
                {
                    "releaseId": "5cbd33192f4de92fb419b53c",
                    "versionRange": "^0.1.0",
                    "releaseName": "a-a-a-13"
                }
            ],
            "sha1": "71fd7e3de0e9fe3d4f9c83e91d40a9f7cd2c8a39",
            "fileSize": 7206,
            "mimeType": "text/markdown"
        },
        "description": "<p>文件描述</p>",
        "intro": "文件描述",
        "createDate": "2019-04-24T02:20:35.852Z",
        "updateDate": "2019-04-24T02:20:35.852Z",
        "meta": {}
    }
}
```

[资源类型]: /附表/资源类型.html "资源类型"
[备注]: /附表/资源meta说明.html "资源meta说明"