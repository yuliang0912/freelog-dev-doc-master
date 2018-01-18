# 查看pb资源的插件签约

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/pageBuildAssociateWidgetContract?presentableId={presentableId}
```

### URL传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|pb-presentableID|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableInfo | object | presentable信息 |
| **presentableId | string | 展示方案ID|
| **name | string | 展示方案名称 |
| **resourceId | string | 方案对应的资源ID |
| **contractId | string | 方案对应的资源合同ID |
| **userId | int| 创建方案的用户ID |
| **nodeId | int| 节点ID |
| **serialNumber| string| 当前方案的序列号(版本ID)|
| **createDate| date|创建日期|
| **policy| object[]| 展示方案策略组 (示例数据仅做参考)|
| **tagInfo| object| tag信息|
| ****userDefined|string[]| 用户定义的tags |
| ****resourceInfo| object| presentable对应的资源基础信息 |
| ******resourceId| string| 资源ID |
| ******resourceName| string| 资源名称 |
| ******resourceType| string| 资源类型 |
| ******mimeType|string| 资源mimeType |
| resourceInfo | object | 资源信息 |
| **resourceId | string | 资源ID|
| **resourceType | string | 资源类型[[详见附表]][资源类型]|
| **resourceUrl | string | 资源URL |
| **resourceName | string | 资源名称 |
| **mimeType	| string| 资源局mime信息|
| **meta	| json| 用户定义的资源meta信息|
| **systemMeta| json| 系统追加的meta信息|
| **createDate| string| 资源创建时间|
| **status| int| 资源状态(1:正常 2:发布 3:冻结)|
| widgets | object | 插件信息 |
| **resourceId | string | 插件的资源ID |
| **resourceName | object | 插件的资源名称 |
| **contractId | object | 插件关联的合同ID |

### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "presentableInfo": {
            "presentableId": "5a5439049bc4e800219bbf24",
            "name": "slider-page-build",
            "resourceId": "b2ceb75c53f6dccf14868b1c448f71c1298fca68",
            "contractId": "5a5438ef6f5da10020904590",
            "userId": 10008,
            "nodeId": 6,
            "serialNumber": "5a5710675c684d002195438b",
            "createDate": "2018-01-09T03:37:40.604Z",
            "updateDate": "2018-01-11T07:21:11.358Z",
            "policy": [
                {
                    "terminateState": "terminate",
                    "initialState": "initial",
                    "activatedStates": [
                        "activate"
                    ],
                    "fsmDescription": [
                        {
                            "nextState": "signing",
                            "event": {
                                "eventId": "74b67f5e9c3b481bba331f906d6484a6",
                                "eventName": "transaction_feth209fa4da1a4_2000_event",
                                "params": [
                                    "feth209fa4da1a4",
                                    2000
                                ],
                                "type": "transaction"
                            },
                            "currentState": "initial"
                        },
                        {
                            "nextState": "activate",
                            "event": {
                                "eventId": "d96bf6a7fb2c4c318281c5e957aa08de",
                                "eventName": "signing_license_A",
                                "params": [
                                    "license_A"
                                ],
                                "type": "signing"
                            },
                            "currentState": "signing"
                        }
                    ],
                    "users": [
                        {
                            "users": [
                                "testUser1"
                            ],
                            "userType": "individual"
                        }
                    ],
                    "segmentText": "For testUser1 :\n  in initial :\n    proceed to signing on accepting transaction of 2000 to feth209fa4da1a4\n  in signing:\n    proceed to activate on accepting license license_A\n  I agree to authorize token in activate",
                    "segmentId": "7452398f3f40c6dbf9bed8797722a1f0"
                }
            ],
            "policyText": "For testUser1 :\n  in initial :\n    proceed to signing on accepting transaction of 2000 to feth209fa4da1a4\n  in signing:\n    proceed to activate on accepting license license_A\n  I agree to authorize token in activate",
            "languageType": "freelog_policy_lang",
            "tagInfo": {
                "userDefined": [],
                "resourceInfo": {
                    "resourceId": "b2ceb75c53f6dccf14868b1c448f71c1298fca68",
                    "resourceName": "sliders",
                    "resourceType": "page_build",
                    "mimeType": "text/html"
                }
            },
            "status": 0
        },
        "resourceInfo": {
            "resourceId": "b2ceb75c53f6dccf14868b1c448f71c1298fca68",
            "resourceName": "sliders",
            "resourceType": "page_build",
            "mimeType": "text/html",
            "meta": {},
            "systemMeta": {
                "sha1": "b2ceb75c53f6dccf14868b1c448f71c1298fca68",
                "widgets": [
                    {
                        "resourceId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a",
                        "resourceName": "freelog-alpha-reveal"
                    }
                ],
                "fileSize": 149,
                "mimeType": "text/html"
            },
            "resourceUrl": "http://freelog-shenzhen.oss-cn-shenzhen-internal.aliyuncs.com/resources/page_build/5d7668d4c2094ef4a8284e6660b19629",
            "userId": 10010,
            "status": 2,
            "createDate": "2018-01-09 15:32:35"
        },
        "widgets": [
            {
                "resourceId": "dff5a487df8cfb3e99f57b1c75d8a788ec70780a",
                "resourceName": "freelog-alpha-reveal",
                "contractId": "5a5438ef6f5da10020904591"
            }
        ]
    }
}
```