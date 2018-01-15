# 关联pb资源的插件合同


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/presentables/pageBuildAssociateWidget
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|pbPresentableId|必选|string|需要关联的page-build资源的presentable|
|increaseContractIds|必选|string[]|需要关联的widget合同ID|
|removeContractIds|必选|string[]|需要取消关联的widget合同ID|

### body示例

```js
{
    "pbPresentableId": "5a5334f49bc4e800219bbf22",
    "increaseContractIds": ["5a531f766f5da10020904589"],
    "removeContractIds": []
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| resourceId | string | presentable对应的资源ID |
| contractId | string | presentable对应的合同ID |
| relevanceContractIds | string[] | presentable关联的插件合同ID |

### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "presentableId": "5a43448416acaa002a2730ac",
        "resourceId": "f12c2952dae1372bd13bce6b55a0cac190c4c4e7",
        "contractId": "5a43446ffba1ef00213053ef",
        "relevanceContractIds": ["5a531f766f5da10020904589"],
        "status": 0,
        "updateDate": "2018-01-15T06:52:13.325",
        "createDate": "2018-01-15T06:51:51.194"
    }
}
```