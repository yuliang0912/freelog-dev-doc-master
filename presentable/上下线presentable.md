# 上下线presentable

### 调用方式: PUT

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}/switchOnlineState
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|presentableId|


### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|onlineState|必选|int| 上线状态 0:下线 1:上线|

### body示例

```json
{
    "onlineState": 1
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | boolean | 是否上线或下线成功|


### 返回示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
