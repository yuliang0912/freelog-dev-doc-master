# 查询bucket使用情况


### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v2/storages/buckets/spaceStatistics
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| storageLimit | int | 总的存储空间大小 |
| bucketCount | int | 已创建的bucket数量 |
| totalFileSize | int | 已使用的存储空间大小 |

### 示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
	    "storageLimit": 5368709120,
		"bucketCount": 2,
		"totalFileSize": 505421
	}
}
```
