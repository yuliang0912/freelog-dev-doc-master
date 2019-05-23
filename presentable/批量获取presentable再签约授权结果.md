# ~~批量获取presentable再签约授权结果~~

## 接口已过期,当前版本不提供签约授权功能

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentable/getPresentableSignAuth?presentableIds={presentableId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableIds|必选|presentableId,多个用逗号分隔|节点资源ID|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| isAcquireSignAuth | int | 是否获得签约授权,0:未获得 1:已获得 -1:无效的节点资源 |

### 返回示例
```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5c0e3435bfc645002bd59f04",
		"isAcquireSignAuth": 0
	}]
}
```