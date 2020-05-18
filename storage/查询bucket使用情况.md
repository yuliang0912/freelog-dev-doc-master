# 查询bucket使用情况


### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/buckets/spaceStatistics
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| bucketCount | string | 已创建的bucket数量 |
| totalFileSize | string | 总的object文件大小 |

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"bucketCount": 2,
		"totalFileSize": 505421
	}
}
```