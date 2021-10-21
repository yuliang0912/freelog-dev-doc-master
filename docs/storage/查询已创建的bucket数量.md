# 查询已创建的bucket数量

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v2/storages/buckets/Count
```


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | number | 当前用户创建的bucket数量(bucketType = 1) |


### 示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": 1
}
```
