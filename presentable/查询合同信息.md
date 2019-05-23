# ~~查询presentable的合同信息~~

## 接口已过期,前端服务器可以调用presentable/list和contracts/list即可组合完成该功能

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
|  **status | int | 合同状态

### 示例

```js
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"presentableId": "5cde533c1e6b38334876b318",
		"presentableName": "my-presentable",
		"status": 0,
		"isOnline": 0,
		"createDate": "2019-05-17T06:22:52.382Z",
		"resolveReleases": [{
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"isMasterRelease": false,
			"contracts": [{
				"contractId": "5cce9f33ffbf3642dc291979",
				"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
				"status": 4
			}]
		}, {
			"releaseId": "5cc1271a204f822804244992",
			"releaseName": "a-a-b-6",
			"isMasterRelease": true,
			"contracts": [{
				"contractId": "5cdd25e58b01222dac2620d6",
				"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
				"status": 4
			}]
		}]
	}]
}
```