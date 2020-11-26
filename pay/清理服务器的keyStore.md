# 清理服务器保存的keyStore


### 调用方式: GET

```
https://api.freelog.com/v1/pay/helper/feather/clearKeyStore
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|address|必选|string|eth账户地址

### 返回说明：
| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
|  [data] | bool | 是否成功

### 返回示例
```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
