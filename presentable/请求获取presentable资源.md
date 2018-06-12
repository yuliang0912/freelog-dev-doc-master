# 请求获取presentable资源


### 调用方式: GET



### 接口地址:

```
http://api.freelog.com/v1/auths/presentable/{presentableId}[.{extName}]?nodeId={nodeId}&userContractId={userContractId}&resourceId={resourceId}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|presentableId|必选|string|展示策略ID|
|resourceId|可选|string|presentable所属的资源或者子资源,默认为主资源|
|extName|可选|string|可选值为[datal]|
|userContractId|可选|string|如果用户有多个合同,此处为用户需要执行的合同ID.默认可以不传,系统会自动查找|

### extName返回值说明：
| extName值 | extName说明
| :--- | :--- | :--- |
| [empty] | 系统直接返回当前presentable对应的resource基础信息|
| data  | 系统直接返回当前presnetable对应的resource文件,即创建资源时上传的文件|


### extName为空时返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| resourceId | string | 资源ID|
| resourceType | string | 资源类型[[详见附表]][资源类型]|
| resourceUrl | string | 资源URL |
| resourceName | string | 资源名称 |
| mimeType	| string| 资源局mime信息|
| meta	| json| 用户定义的资源meta信息|
| systemMeta| json| 系统追加的meta信息|
| createDate| string| 资源创建时间|
| status| int| 资源状态(1:正常 2:发布 3:冻结)|


### extName为data时header返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| freelog-resource-type | string | 资源类型|
| freelog-meta | json-string-base64 | 资源meta信息,经过base64编码的json字符串|
| freelog-system-meta | json-string-base64 | 资源的系统meta,经过base64编码的json字符串 |
| freelog-contract-id | string | presentable - resource的合同ID |


###  extName为空时返回示例
```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "resourceId": "b140977ee61b5a56e267a77dbaca9c44a898beb5",
        "resourceName": "page build test1",
        "resourceType": "page_build",
        "mimeType": "text/html",
        "meta": {
            "test": "123"
        },
        "systemMeta": {
            "sha1": "b140977ee61b5a56e267a77dbaca9c44a898beb5",
            "fileSize": 755,
            "mimeType": "text/html"
        },
        "status": 2,
        "createDate": "2017-11-06T16:05:55.000Z"
    }
}
```