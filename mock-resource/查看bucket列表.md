# 查看bucket列表

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/resources/mocks/buckets
```


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| bucketName | string | bucket名称|
| userId | int | 用户ID|
| createDate | date | 创建日期 |


### 示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": [
        {
            "userId": 10026,
            "bucketName": "yuliang",
            "createDate": "2019-03-15T02:43:29.841Z"
        }
    ]
}
```
