# 删除mock资源


### 调用方式: DELETE

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/{mockResourceId}
```

### url传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|mockResourceId|必选|string|mock资源ID|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | bool | 是否成功|


### 示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
