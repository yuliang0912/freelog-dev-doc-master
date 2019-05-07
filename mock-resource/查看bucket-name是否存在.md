# 查看bucket-name是否存在

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/buckets/isExist?bucketName={bucketName}
```

### url传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|bucketName|必选|string|bucket名称,1-63个字符之间,数字小写字母和-组成,连接符不能位于头尾|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | bool | 是否成功|


### 示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```