# 创建bucket

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/buckets
```

### body传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|bucketName|必选|string|bucket名称,1-63个字符之间,数字小写字母和-组成,连接符不能位于头尾|


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


### 示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "bucketName": "yuliangyuliangyu",
        "userId": 10026,
        "createDate": "2019-04-24T05:48:10.197Z"
    }
}
```


