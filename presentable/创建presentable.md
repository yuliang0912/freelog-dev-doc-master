# 创建presentable


### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/presentables/
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|name|必选|string|presentable名称
|nodeId|必选|int|节点ID
|contractId|必选|string|合同ID
|policyText|必选|string|策略描述语言(base64转译)
|languageType|必选|string|策略语言类型(yaml和freelog_policy_lang)

### body示例

```js
{
    "name": "我的方案1",
    "nodeId": 1,
    "contractId": "59e45c3b86651350a8733c82",
    "policyText": "Rm9yIHVzZXJBICwgdXNlckIgaW4gdGhlIGZvbGxvd2luZyBzdGF0ZXM6ICAgICAKICAgIGluIGluaXRpYWwgOiAKICAgICAgcHJvY2VlZCB0byBhY3RpdmF0ZXR3byBvbiBhY2NlcHRpbmcgbGljZW5zZSBsaWNlbnNlQSAsIGxpY2Vuc2VCIGFuZCBvbiBjb250cmFjdF9ndWFyYW50eSBvZiA1MDAwIHJlZnVuZCBhZnRlciAxIGRheSAKICAgIGluIGFjdGl2YXRldHdvIDogCiAgICAgIHByb2NlZWQgdG8gYWN0aXZhdGUgb24gZGF0ZSAyMDEyLTEyLTEyIAogICAgaW4gYWN0aXZhdGUgOiAKICAgICAgcHJvY2VlZCB0byBhY3RpdmF0ZXR3byBvbiB0aGUgZW5kIG9mIGRheSAKICAgIGluIGFjdGl2YXRldHdvIDogCiAgICAgIHByb2NlZWQgdG8gYWN0aXZhdGUgb24gMTAgZGF5IGFmdGVyIGNvbnRyYWN0IGNyZWF0aW9uIAogICAgSSBhZ3JlZSB0byBhdXRob3JpemUgdG9rZW4gaW4gYmVnaW5pbmcgLCBhY3RpdmF0ZQ==",
    "languageType": "freelog_policy_lang"
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
| policy| object[]| 展示方案策略组 (示例数据仅做参考)|
| createDate| date|创建日期|


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
                "teminateState": "terminate",
                "initialState": "initial",
                "activatedStates": [
                    "begining",
                    "activate"
                ],
                "fsmDescription": [
                    {
                        "nextState": "activatetwo",
                        "event": {
                            "eventId": "01664d216c274621aeb1fc4339d2055f",
                            "params": [
                                {
                                    "eventId": "207fa63a44ca4aab8a5067f2ea7f2a90",
                                    "eventName": "signing_licenseA_licenseB",
                                    "params": [
                                        "licenseA",
                                        "licenseB"
                                    ],
                                    "type": "signing"
                                },
                                {
                                    "eventId": "9e5755640d334949828e241b114fc5fc",
                                    "eventName": "contractGuaranty_5000_1_event",
                                    "params": [
                                        "5000",
                                        "1",
                                        "day"
                                    ],
                                    "type": "contractGuaranty"
                                }
                            ],
                            "type": "compoundEvents"
                        },
                        "currentState": "initial"
                    },
                    {
                        "nextState": "activate",
                        "event": {
                            "eventId": "9819096cd55c4bd79c6ce47d028894a7",
                            "eventName": "arrivalDate_1_2012-12-12_event",
                            "params": [
                                1,
                                "2012-12-12"
                            ],
                            "type": "arrivalDate"
                        },
                        "currentState": "activatetwo"
                    },
                    {
                        "nextState": "activatetwo",
                        "event": {
                            "eventId": "7e43cbd49f0849dfaef5ee7402ef7045",
                            "eventName": "period_day_event",
                            "params": [
                                "day"
                            ],
                            "type": "period"
                        },
                        "currentState": "activate"
                    },
                    {
                        "nextState": "activate",
                        "event": {
                            "eventId": "bf7f7634ed7d44528e29c65247294875",
                            "eventName": "arrivalDate_0_10_day_event",
                            "params": [
                                0,
                                10,
                                "day"
                            ],
                            "type": "arrivalDate"
                        },
                        "currentState": "activatetwo"
                    }
                ],
                "users": [
                    {
                        "users": [
                            "userA",
                            "userB"
                        ],
                        "userType": "individuals"
                    }
                ],
                "segmentId": "7be32332fabb6381a85b893858e12560"
            }
        ],
        "policyText": "For userA , userB in the following states:     \n    in initial : \n      proceed to activatetwo on accepting license licenseA , licenseB and on contract_guaranty of 5000 refund after 1 day \n    in activatetwo : \n      proceed to activate on date 2012-12-12 \n    in activate : \n      proceed to activatetwo on the end of day \n    in activatetwo : \n      proceed to activate on 10 day after contract creation \n    I agree to authorize token in begining , activate",
        "languageType": "freelog_policy_lang",
        "status": 0
    }
}
```