# 查询bucket是否存在

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/buckets/{bucketName}/isExist
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| bucketName | 必选 | string | bucket名称,严格模式 |


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | boolean | 是否存在 |


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": false
}
```