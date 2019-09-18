# 搜索presentable依赖树

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/searchDependency
```

### url传入参数说明：[releaseIds和presentableIds最少需要一个必选参数]

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|releaseName|必选|string|搜索的目标发行名称|
|versionRange|可选|string|目标发行的版本范围|

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID |
| presentableName | string | 展示方案名称 |
| version | string | presentable引用的发行版本 |

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"page": 1,
		"pageSize": 10,
		"totalItem": 2,
		"dataList": [{
			"presentableId": "5d4cd7efa736c59dac15cf2b",
			"presentableName": "my-presentable",
			"version": "0.2.0"
		}, {
			"presentableId": "5d4cd83ea736c59dac15cf2e",
			"presentableName": "my-presentable1",
			"version": "0.1.0"
		}]
	}
}
```