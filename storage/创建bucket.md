# 创建bucket(系统级的bucket不允许创建)

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v2/storages/buckets
```

### body传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| bucketName | 必选 | string |bucket名称,严格模式|


### body示例

```json
{
	"bucketName":"yuliang-bucket"
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| bucketName | string | bucket名称|
| userId | int | 用户ID|
| bucketType | int | 1:用户自定义  2:系统级 |
| totalFileSize | int | 当前bucket下的总存储对象大小 |


### 示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "bucketType": 1,
        "totalFileQuantity": 0,
        "totalFileSize": 0,
        "bucketName": "yuliang-a",
        "userId": 50021,
        "createDate": "2020-05-15T08:17:44.601Z",
        "updateDate": "2020-05-15T08:17:44.601Z"
    }
}
```

