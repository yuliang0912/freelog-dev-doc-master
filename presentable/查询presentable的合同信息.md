# 查询presentable的合同信息

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/contractInfos?nodeId={nodeId}&presentableIds={presentableIds}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|presentableIds|必选|string|presentableId,多个用","分割|


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| presentableName | string | 展示方案名称 |
| isOnline | int| 是否上线 0:否 1:是 |
| status | int| 状态 1:合同已完备  2:存在可用策略 总状态通过\|运算 |
| createDate| date|创建日期|
| contracts| object[]|presentable下的节点合同|
|  **contractId | string | 合同ID
|  **resourceId | string | 资源ID
|  **createDate | date | 创建日期
|  **isMasterContract | bool | 是否主合同 |
|  **contractStatus | int | 合同状态

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5b0d1ca255d4055cf84bdb73",
		"presentableName": "presentableName",
		"status": 2,
		"isOnline": 0,
		"createDate": "2018-05-29T09:25:54.043Z",
		"contracts": [{
			"contractId": "5b0e4d772868266bb8055c1f",
			"resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
			"contractStatus": 3,
			"createDate": "2018-05-30T07:06:31.436Z",
			"isMasterContract": true
		}, {
			"contractId": "5b18abd1fed4a14698e13019",
			"resourceId": "0b8edaf2061fe5280a358ecb09e0818c4c989a1b",
			"contractStatus": 3,
			"createDate": "2018-06-07T03:51:45.936Z",
			"isMasterContract": false
		}, {
			"contractId": "5b0f6454503ced3fbc3dee78",
			"resourceId": "0bee49c19387521a79aeff78504425dde0ee4897",
			"contractStatus": 3,
			"createDate": "2018-05-31T02:56:20.820Z",
			"isMasterContract": false
		}, {
			"contractId": "5b0f631a503ced3fbc3dee77",
			"resourceId": "2b0e51145bd40943e75511efdce36cfceb2eeada",
			"contractStatus": 3,
			"createDate": "2018-05-31T02:51:06.122Z",
			"isMasterContract": false
		}, {
			"contractId": "5b0f57d1503ced3fbc3dee76",
			"resourceId": "365f17a7ddf718ca058a22eed2bef25867891d1d",
			"contractStatus": 3,
			"createDate": "2018-05-31T02:02:57.497Z",
			"isMasterContract": false
		}]
	}]
}
```