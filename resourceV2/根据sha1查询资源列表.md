# 根据sha1查询资源列表 (查询文件对象所挂载的资源)

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v2/resources/files/:fileSha1
```

### url传入参数说明
| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| fileSha1 | 必选 | string | 文件sha1值 |
| projection | 可选 | string | 过滤需要返回的字段,多个用逗号分隔,默认全部 |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| resourceId | string | 资源ID|
| resourceType | string | 资源类型[[详见附表]][资源类型] |
| resourceName | string | 资源名称 |
| userId | int | 用户ID |
| username | string | 用户姓名 |
| coverImages | string[] | 封面图片 |
| intro | string | 资源简介 |
| tags | string[] | 资源标签集 |
| latestVersion | string | 资源最大版本号 |
| resourceVersions | object[] | 资源版本信息 |
| ** version | string | 资源版本号 |
| ** versionId | string | 资源版本Id |
| ** createDate | date | 版本创建时间 |
| policies | object[] | 资源授权策略 |
| baseUpcastResources | object[] | 基础上抛信息 |
| ** resourceId | string | 上抛资源ID |
| ** resourceName | string | 上抛资源名称 |

### 示例

```json
{
    "ret":0,
    "errcode":0,
    "msg":"success",
    "data":[
        {
            "resourceId":"5ee3288b32f1a8439c207aa2",
            "latestVersion":"1.1.1",
            "intro":"资源简介",
            "coverImages":[
                "https://image.freelog.com/preview/b042cd88-cc9a-43fb-b8fb-1cae320b7977.jpg"],
            "tags":[
                "t1",
                "t2"],
            "status":0,
            "resourceName":"yuliang/my-first-resource",
            "resourceType":"text",
            "userId":50021,
            "username":"yuliang",
            "policies":[
            ],
            "resourceVersions":[
                {
                    "version":"1.0.1",
                    "versionId":"a35145b5f60514aa05efb28f22a2cb73",
                    "createDate":"2020-06-12T07:23:51.751Z"
                },
                {
                    "version":"1.0.2",
                    "versionId":"61dee0327834793be2e4bab65149f758",
                    "createDate":"2020-06-12T07:24:08.470Z"
                },
                {
                    "version":"1.1.1",
                    "versionId":"6a3371dc351272b30edc13ced6467ba5",
                    "createDate":"2020-06-12T07:30:51.547Z"
                }],
            "baseUpcastResources":[
            ],
            "createDate":"2020-06-12T07:02:35.476Z",
            "updateDate":"2020-06-12T07:31:18.406Z"
        }]
}
```

[资源类型]: /附表/资源类型.html "资源类型"
