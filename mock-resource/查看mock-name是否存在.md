# 查看mock-name是否存在

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/isExistMockName?name={mockResourceName}&bucketName={bucketName}
```

### url传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|bucketName|必选|string|bucketName|
|name|必选|string|需要校验的mock资源名|


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
