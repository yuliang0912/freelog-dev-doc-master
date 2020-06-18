# 根据sha1查询文件是否存在

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/files/fileIsExist?sha1={sha1}
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| sha1 | 必选 | string | 文件的sha1值 |


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | boolean | 是否存在文件 |


### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": true
}
```