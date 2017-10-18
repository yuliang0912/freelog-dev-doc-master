# 查看presentable详情

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|展示策略ID


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
| createDate| date|创建日期|
| policy| object[]| 展示方案策略组 (示例数据仅做参考)|
| tagInfo| object| tag信息|
| **userDefined|string[]| 用户定义的tags |
| **resourceInfo| object| presentable对应的资源基础信息 |
| ****resourceId| string| 资源ID |
| ****resourceName| string| 资源名称 |
| ****resourceType| string| 资源类型 |
| ****mimeType|string| 资源mimeType |


### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "presentableId": "59e59c1dc08cd208ac0e0878",
        "name": "我的方案1",
        "resourceId": "59ddb58ad62d0d269803eed5",
        "contractId": "59e45c3b86651350a8733c82",
        "userId": 1,
        "nodeId": 1,
        "serialNumber": "59e59c1dc08cd208ac0e0877",
        "createDate": "2017-10-17T05:58:53.055Z",
        "updateDate": "2017-10-17T05:58:53.055Z",
        "policy": [
            {
                "segmentId": "7be32332fabb6381a85b893858e12560",
                "users": [
                    {
                        "userType": "individuals",
                        "users": [
                            "userA",
                            "userB"
                        ]
                    }
                ],
                "fsmDescription": [
                    {
                        "currentState": "initial",
                        "event": {
                            "type": "compoundEvents",
                            "params": [
                                {
                                    "type": "signing",
                                    "params": [
                                        "licenseA",
                                        "licenseB"
                                    ],
                                    "eventName": "signing_licenseA_licenseB",
                                    "eventId": "207fa63a44ca4aab8a5067f2ea7f2a90"
                                },
                                {
                                    "type": "contractGuaranty",
                                    "params": [
                                        "5000",
                                        "1",
                                        "day"
                                    ],
                                    "eventName": "contractGuaranty_5000_1_event",
                                    "eventId": "9e5755640d334949828e241b114fc5fc"
                                }
                            ],
                            "eventId": "01664d216c274621aeb1fc4339d2055f"
                        },
                        "nextState": "activatetwo"
                    },
                    {
                        "currentState": "activatetwo",
                        "event": {
                            "type": "arrivalDate",
                            "params": [
                                1,
                                "2012-12-12"
                            ],
                            "eventName": "arrivalDate_1_2012-12-12_event",
                            "eventId": "9819096cd55c4bd79c6ce47d028894a7"
                        },
                        "nextState": "activate"
                    },
                    {
                        "currentState": "activate",
                        "event": {
                            "type": "period",
                            "params": [
                                "day"
                            ],
                            "eventName": "period_day_event",
                            "eventId": "7e43cbd49f0849dfaef5ee7402ef7045"
                        },
                        "nextState": "activatetwo"
                    },
                    {
                        "currentState": "activatetwo",
                        "event": {
                            "type": "arrivalDate",
                            "params": [
                                0,
                                10,
                                "day"
                            ],
                            "eventName": "arrivalDate_0_10_day_event",
                            "eventId": "bf7f7634ed7d44528e29c65247294875"
                        },
                        "nextState": "activate"
                    }
                ],
                "activatedStates": [
                    "begining",
                    "activate"
                ],
                "initialState": "initial",
                "teminateState": "terminate"
            }
        ],
        "policyText": "For userA , userB in the following states:     \n    in initial : \n      proceed to activatetwo on accepting license licenseA , licenseB and on contract_guaranty of 5000 refund after 1 day \n    in activatetwo : \n      proceed to activate on date 2012-12-12 \n    in activate : \n      proceed to activatetwo on the end of day \n    in activatetwo : \n      proceed to activate on 10 day after contract creation \n    I agree to authorize token in begining , activate",
        "languageType": "freelog_policy_lang",
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
}
```