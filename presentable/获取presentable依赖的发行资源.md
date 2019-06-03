# 获取presentable依赖的发行资源

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentable/subResource/{resourceId}?token={token}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|resourceId|必选|string|资源ID|
|token|必选|string|授权token,从http-header[sub-resource-auth-token]中获取|


### http-header返回说明：
| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| freelog-resource-type | string | 资源类型|
| freelog-meta | json-string-base64 | 资源meta信息,经过base64编码的json字符串|
| freelog-system-meta | json-string-base64 | 资源的系统meta,经过base64编码的json字符串 |

### http-response : FileStream