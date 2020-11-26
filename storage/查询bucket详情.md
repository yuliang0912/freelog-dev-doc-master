# 查询bucket详情

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/buckets/{bucketName}
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| bucketName | 必选 | string | bucket名称,1-63个字符之间,数字小写字母和-组成,连接符不能位于头尾 |


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
