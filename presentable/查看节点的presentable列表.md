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


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| name | string | 展示方案名称 |
| resourceId | string | 方案对应的资源ID |
| contractId | string | 方案对应的资源合同ID |
| userId | int| 创建方案的用户ID |
| serialNumber| string| 当前方案的序列号(版本ID)|
| policy| object[]| 展示方案策略组 (示例数据仅做参考)|

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
            "updateDate": "2017-08-30T08:16:03.963Z",
            "expireDate": "2018-12-31T16:00:00.000Z",
            "policy": [
                {
                    "users": [
                        {
                            "userType": "individuals",
                            "users": [
                                "yuliang",
                                "myusers_B",
                                "myusers_C"
                            ]
                        },
                        {
                            "userType": "groups",
                            "users": [
                                "myusers_groupA",
                                "myusers_groupB",
                                "myusers_groupC"
                            ]
                        }
                    ],
                    "license": [
                        "FREELOG_LICENSE"
                    ],
                    "payments": [
                        {
                            "price": 1,
                            "unitGroup": 2,
                            "unitType": "view"
                        },
                        {
                            "price": 2,
                            "unitGroup": 3,
                            "unitType": "week"
                        }
                    ],
                    "segmentId": "6dce1c2aef0a5bcbd8c5b3d34397d49a"
                },
                {
                    "users": [
                        {
                            "userType": "groups",
                            "users": [
                                "myusers_groupA",
                                "myusers_groupB",
                                "myusers_groupC"
                            ]
                        }
                    ],
                    "license": null,
                    "payments": null,
                    "payMents": null,
                    "segmentId": "37f84b10c5c5b2163d678ff9781a5954"
                },
                {
                    "users": [
                        {
                            "userType": "self"
                        }
                    ],
                    "license": [
                        "FREELOG_LICENSE"
                    ],
                    "payments": [
                        {
                            "price": 1,
                            "unitGroup": 2,
                            "unitType": "week"
                        }
                    ],
                    "segmentId": "00214397af83fa21e0fd6daeb0c52f7a"
                }
            ],
            "status": 0
        }
    ]
}
```