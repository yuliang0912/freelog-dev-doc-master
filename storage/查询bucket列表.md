# 查看用户的bucket列表

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/buckets?bucketType={bucketType}
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|bucketType | 可选 | int | bucket类型 0:全部 1:用户自定义 2:系统创建 默认全部 |


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
	"data": [{
		"bucketType": 2,
		"totalFileQuantity": 0,
		"totalFileSize": 0,
		"bucketName": ".UserNodeData",
		"userId": 50021,
		"createDate": "2020-05-13T08:32:46.323Z",
		"updateDate": "2020-05-13T08:32:46.323Z"
	}]
}
```

