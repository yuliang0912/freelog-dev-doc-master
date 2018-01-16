# 查看pb资源的插件签约数据统计


### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/pbPresentableStatistics?presentableIds={presentableIds}
```

### URL传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableIds|必选|string|pb-presentableID,多个用逗号分隔|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | object[] | presentable统计信息 |
| **presentableId | string | presentableId |
| **isActivated | bool | presentable的合同是否是激活态 |
| **widgetsCount | int | 全部插件数量 |
| **widgetContractCount | int | 已经关联的合同数量 |
| **widgetContractActivatedCount | int | 已经关联的合同激活状态的数量 |
| **widgetPresentableCount | int | 已经关联的合同创建presentable数量 |

### 返回示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5a43448416acaa002a2730ac",
		"isActivated": true,
		"widgetsCount": 1,
		"widgetContractCount": 1,
		"widgetContractActivatedCount": 1,
		"widgetPresentableCount": 1
	}]
}
```