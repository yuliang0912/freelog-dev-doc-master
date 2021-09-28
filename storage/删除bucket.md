# 删除bucket

### 调用方式: DELETE

### 接口地址:

```
https://api.freelog.com/v2/storages/buckets/{bucketName}
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|bucketName | 必选 | string | bucket名称,严格模式 |


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | boolean | 是否删除成功 |


### 示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
