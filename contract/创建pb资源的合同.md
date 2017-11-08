# 创建pb资源的合同


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/contracts/createPageBuildContracts
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID
|contracts|必选|object[]|pb以及widget的合同创建信息
|**resourceId|必选|string|资源ID
|**serialNumber|必选|string|资源策略的序列号
|**segmentId|必选|string|资源策略的段落ID

### body示例

```js
{
    "nodeId": 10013,
    "contracts": [
        {
            "resourceId": "4f342f30b11dd0f5e0d2915ff7c04549e49d9931",
            "serialNumber": "59ca1fdfda724128284832c9",
            "segmentId": "7e9567b69b68769402de9383867ff3f6"
        },
        {
            "resourceId": "b140977ee61b5a56e267a77dbaca9c44a898beb5",
            "serialNumber": "59f2ec2fa2bbc2001f129c76",
            "segmentId": "378a0a98c79244237be0a7e64df3bdff"
        }
    ]
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| oldContracts | object[] | 使用旧合同的资源信息|
| newContracts | object[] | 创建新合同的资源信息 |


### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "oldContracts": [
            {
                "contractId": "5a02c4098d07431b8c4bd8ec",
                "resourceId": "4f342f30b11dd0f5e0d2915ff7c04549e49d9931"
            }
        ],
        "newContracts": [
            {
                "contractId": "5a02c47b2c2a044908809faa",
                "resourceId": "b140977ee61b5a56e267a77dbaca9c44a898beb5"
            }
        ]
    }
}
```

