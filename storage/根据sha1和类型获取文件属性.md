# 根据sha1和类型获取文件属性

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/storages/files/{sha1}/property
```

### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| sha1 | 必选 | string | 文件的sha1值,多个用逗号分隔 |
| resourceType | 必选 | string | 资源类型 |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| fileSize | int | 文件大小 |
| ... | string | 动态文件属性 |


### 示例

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"fileSize": 1647726,
		"width": 3840,
		"height": 2160,
		"type": "jpg",
		"mime": "image/jpeg"
	}
}
```
