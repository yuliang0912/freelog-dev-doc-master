# 查看节点的presentable列表




### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables?nodeId={nodeId}
```

### url传入参数说明：


| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|contractIds|可选|string|合同ID,多个用","分割|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| name | string | 展示方案名称 |
| resourceId | string | 方案对应的资源ID |
| contractId | string | 方案对应的资源合同ID |
| userId | int| 创建方案的用户ID |
| serialNumber| string| 当前方案的序列号(版本ID)|
| tagInfo| object| tag信息|
| **userDefined|string[]| 用户定义的tags |
| **resourceInfo| object| presentable对应的资源基础信息 |
| ****resourceId| string| 资源ID |
| ****resourceName| string| 资源名称 |
| ****resourceType| string| 资源类型 |
| ****mimeType|string| 资源mimeType |

### 示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": [
        {
            "presentableId": "59a67443e700dd14d8e81786",
            "name": "我的方案1",
            "resourceId": "59a3b81b0f1f332e84eba2ba",
            "contractId": "59a3c612567e5c22a41d8f5c",
            "userId": 1,
            "nodeId": 1,
            "serialNumber": "59a67443e700dd14d8e81785",
            "createDate": "2017-08-30T08:16:03.963Z",
            "tagInfo": {
                "userDefined": [],
                "resourceInfo": {
                    "resourceId": "",
                    "resourceName": "",
                    "resourceType": "",
                    "mimeType": ""
                }
            },
            "status": 0
        }
    ]
}
```