# 根据sha1查询文件是否存在

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/files/fileIsExist?sha1={sha1}
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| sha1 | 必选 | string | 文件的sha1值,多个用逗号分隔 |


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| sha1 | string | 文件的sha1值 |
| isExisting | boolean | 是否存在 |


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"sha1": "edf31f7f2d7814d45d08666c13524bc2de600cb1",
		"isExisting": true
	}, {
		"sha1": "04b68b18f9f71c8cdb648b7391a73a7c51e5c56e",
		"isExisting": true
	}, {
		"sha1": "04b68b18f9f71c8cdb648b7391a73a7c51e5c56b",
		"isExisting": false
	}]
}
```