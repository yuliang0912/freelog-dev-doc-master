# 获取presentable策略身份认证结果

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentables/batchPolicyIdentityAuthentication?presentableIds={presentableIds}
```

### 传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| presentableIds | 必选 | string | presentableId,多个用逗号分隔 |
| policyIds | 可选 | string | 策略ID,下标需要和releaseIds一一对应 |
| isFilterSignedPolicy | 可选 | 是否忽略已签约的策略 0:忽略(默认) 1:不忽略 |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| releaseId | string | 发行ID|
| policyId | string | 策略Id|
| authenticationResult | int | 认证结果 -1:无效策略 0:认证失败 1:认证成功 2:已签约,忽略认证 |

### 示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"releaseId": "5cb039815a791845b4aed4ab",
		"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
		"authenticationResult": 1
	}, {
		"releaseId": "5cb03a295a791845b4aed4ae",
		"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
		"authenticationResult": 1
	}]
}
```
