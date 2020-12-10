# 飞致网络API接口文档简述

[TOC]

### API概况

所有api都基于[restful](https://www.jianshu.com/p/3f8953f73a79)标准实现.其中主要使用到下面4个具体的Http Method:

- GET  获取资源
- POST 创建资源
- PUT 修改资源
- DELETE 删除资源

API的版本号目前统一以V{number}的形式作为path部分的前缀. 

API如无特别说明,均以JSON的形式返回特定结构的数据.具体格式参考下文**API返回格式说明**



### API返回格式说明

| 字段名称 | 字段类型                                     | 字段说明         |
| -------- | :------------------------------------------- | ---------------- |
| ret      | int                                          | 服务器一级状态码 |
| errCode  | int                                          | 服务器二级状态码 |
| msg      | string                                       | 消息说明         |
| data     | any                                          | api响应的数据    |



> **返回示例1:**

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"resourceId": "5fb24c3a3851db0030b9cd24",
		"latestVersion": "1.0.2",
		"intro": "",
		"coverImages": [],
		"tags": [],
		"status": 1,
		"resourceName": "12345676789/13",
		"resourceType": "json",
		"userId": 50028,
		"username": "12345676789",
		"resourceVersions": [{
			"version": "1.0.2",
			"versionId": "00318088c10e55c69a572c9acd042a80",
			"createDate": "2020-11-16T09:54:20.043Z"
		}],
		"baseUpcastResources": [],
		"policies": [{
			"policyId": "6546452dfffd8f249d83bb8f6f1897e8",
			"policyName": "免费策略",
			"status": 1
		}, {
			"policyId": "36292c1b56a35d837df0380faf987b6a",
			"policyName": "免费策略2",
			"status": 1
		}],
		"createDate": "2020-11-16T09:54:02.012Z",
		"updateDate": "2020-11-19T06:37:35.317Z"
	}
}
```



> **返回示例2:**

```jsonon
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": true
}
```



> **返回示例3:**

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"resourceId": "5fb24c3a3851db0030b9cd24",
		"latestVersion": "1.0.2",
		"intro": "",
		"coverImages": [],
		"tags": [],
		"status": 1,
		"resourceName": "12345676789/13",
		"resourceType": "json",
		"userId": 50028,
		"username": "12345676789",
		"resourceVersions": [{
			"version": "1.0.2",
			"versionId": "00318088c10e55c69a572c9acd042a80",
			"createDate": "2020-11-16T09:54:20.043Z"
		}],
		"baseUpcastResources": [],
		"policies": [{
			"policyId": "6546452dfffd8f249d83bb8f6f1897e8",
			"policyName": "免费策略",
			"status": 1
		}, {
			"policyId": "36292c1b56a35d837df0380faf987b6a",
			"policyName": "免费策略2",
			"status": 1
		}],
		"createDate": "2020-11-16T09:54:02.012Z",
		"updateDate": "2020-11-19T06:37:35.317Z"
	}]
}
```



### API-Data分页格式说明

| 字段名称  | 字段类型 | 字段说明                                 |
| --------- | -------- | ---------------------------------------- |
| skip      | int      | 跳过的数量.默认为0.                      |
| limit     | int      | 本次请求获取的数据条数.一般不允许超过100 |
| totalItem | int      | 总的条目数,用于计算总页数                |
| dataList  | any[]    | 本业列表数据                             |



>  **返回示例1:**

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"skip": 0,
		"limit": 2,
		"totalItem": 60,
		"dataList": [{
			"resourceId": "5fb24c3a3851db0030b9cd24",
			"latestVersion": "1.0.2",
			"intro": "",
			"coverImages": [],
			"tags": [],
			"status": 1,
			"resourceName": "12345676789/13",
			"resourceType": "json",
			"userId": 50028,
			"username": "12345676789",
			"resourceVersions": [{
				"version": "1.0.2",
				"versionId": "00318088c10e55c69a572c9acd042a80",
				"createDate": "2020-11-16T09:54:20.043Z"
			}],
			"baseUpcastResources": [],
			"policies": [{
				"policyId": "6546452dfffd8f249d83bb8f6f1897e8",
				"policyName": "免费策略",
				"status": 1
			}, {
				"policyId": "36292c1b56a35d837df0380faf987b6a",
				"policyName": "免费策略2",
				"status": 1
			}],
			"createDate": "2020-11-16T09:54:02.012Z",
			"updateDate": "2020-11-19T06:37:35.317Z"
		}, {
			"resourceId": "5fb241f23851db0030b9cd23",
			"latestVersion": "",
			"intro": "",
			"coverImages": [],
			"tags": [],
			"status": 0,
			"resourceName": "12345676789/12",
			"resourceType": "json",
			"userId": 50028,
			"username": "12345676789",
			"resourceVersions": [],
			"baseUpcastResources": [],
			"policies": [],
			"createDate": "2020-11-16T09:10:10.038Z",
			"updateDate": "2020-11-16T09:10:10.038Z"
		}]
	}
}
```



>  **返回示例2:**

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"skip": 0,
		"limit": 10,
		"totalItem": 0,
		"dataList": []
	}
}
```



### 一级状态码(ret)说明:

> 一级状态码主要指**服务器或者运维**相关错误信息,还未到达具体业务层.一般由官网层面设置

| 状态值 | 含义                                             |
| :----- | :----------------------------------------------- |
| -10    | 服务器维护中                                     |
| 0      | 正常结果                                         |
| 1      | 应用程序内部错误,一般系统自动捕捉,属于非正常流程 |
| 4      | 网关代理相关错误                                 |



### 二级状态码(errCode)说明:

> **业务层服务**一般只使用二级状态码

| 状态值 | 含义                                                      |
| :----- | :-------------------------------------------------------- |
| 0      | 正常结果                                                  |
| 1      | 应用程序内部错误,一般系统自动捕捉,属于非正常流程          |
| 2      | 应用程序错误,一般是业务内部主动抛出的未指定错误类型的错误 |
| 3      | 授权错误,一般指获得操作授权                               |
| 4      | 参数错误,一般指参数校验失败                               |
| 5      | 内部API调用错误                                           |
| 6      | 业务规则中的逻辑错误                                      |
| 7      | 网络相关错误                                              |
| 30     | 认证错误,一般指身份认证失败,需要登录                      |
| 31     | 网关代理组件调用出现异常                                  |
| 32     | 网关服务入口处URL路由不匹配错误                           |
| 33     | 网关服务器调用上游源服务器出现错误                        |



### 访问地址


*  外网 https://api.freelog.com

* 内网 http://192.168.164.165:8895




[^Restful]: See https://www.jianshu.com/p/3f8953f73a79
