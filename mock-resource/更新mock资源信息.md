# 更新mock资源信息

### 调用方式: PUT

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/{mockResourceId}
```

### url传入参数说明:
| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|mockResourceId|必选|string|mock资源ID|


### body传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|meta|可选|json|自定义的资源meta信息|
|description|可选|string|资源描述|
|resourceType | 可选| string | 资源类型 |
|dependencyInfo | 可选| object | 依赖的发行 |
|**mocks | 可选| object[] | 依赖的mock资源列表 |
|****mockResourceId | 必选| string | 依赖的mock资源ID |
|**releases | 可选| object[] | 依赖的发行列表 |
|****releaseId | 必选| string | 依赖的发行ID |
|****versionRange | 必选| string | 依赖的发行semver范围 |
|uploadFileId|可选|string|上传的资源返回来的uploadFileId值|
|previewImages | 可选| string[] | 预览图URL地址,目前仅支持一个 |


### body示例

```json
{
	"dependencyInfo": {
		"mocks": [{
			"mockResourceId": "5ce2752c2670523708c7eae4"
		}],
		"releases": [{
			"releaseId": "5cb039815a791845b4aed4ab",
			"versionRange": "0.1.0"
		}]
	}
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

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "mockResourceId": "5d0756cab3173652a0420dd1",
        "fullName": "yuliang/readme111",
        "previewImages": [],
        "status": 0,
        "name": "readme111",
        "sha1": "81024b25db669618cb79823df0f9005776d6141a",
        "userId": 10026,
        "resourceType": "markdown",
        "systemMeta": {
            "sha1": "81024b25db669618cb79823df0f9005776d6141a",
            "fileSize": 394,
            "mimeType": "text/plain",
            "dependencyInfo": {
                "mocks": [
                    {
                        "mockResourceId": "5ce2752c2670523708c7eae4",
                        "mockResourceName": "yuliang/markdown-file-1"
                    }
                ],
                "releases": [
                    {
                        "releaseId": "5cb039815a791845b4aed4ab",
                        "versionRange": "0.1.0",
                        "releaseName": "b1"
                    }
                ]
            },
            "filename": "MIT.txt"
        },
        "bucketId": "5c8b115192abd02280a188f3",
        "bucketName": "yuliang",
        "description": "",
        "createDate": "2019-06-17T09:00:58.650Z",
        "updateDate": "2019-06-18T02:47:05.838Z",
        "meta": {}
    }
}
```

[资源类型]: /附表/资源类型.html "资源类型"
[备注]: /附表/资源meta说明.html "资源meta说明"
