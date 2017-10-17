# 根据合同ID批量获取presentable列表


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/presentables/getPresentablesByContractIds
```

### body传入参数说明：


| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|contractIds|必选|array|合同ID|


### body示例

```js
{
    "nodeId": 1,
    "contractIds": [
        "59a3c612567e5c22a41d8f5c"
    ]
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| name | string | 展示方案名称 |
| resourceId | string | 方案对应的资源ID |
| contractId | string | 方案对应的资源合同ID |
| userId | int| 创建方案的用户ID |
| nodeId | int| 节点ID |
| serialNumber| string| 当前方案的序列号(版本ID)|
| createDate| date| 创建日期|
| status| int| 状态 (暂未定义)|


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
            "status": 0
        }
    ]
}
```