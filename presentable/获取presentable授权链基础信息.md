# 获取presentable授权链基础信息

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}/authChainInfo
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| presentableId | 必选 | string | presentableId |
| projection | 必选 | string | 需要返回的字段,多个用逗号分隔,默认全部 |


### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID |
| presentableName | string | 展示方案名称 |
| userId | int | 创建方案的用户ID |
| nodeId | int | 节点ID |
| masterReleaseId | string | presentable所引用的主发行ID |
| nodeResolveReleases | object[] | 节点解决的发行及其上抛的发行 |
| ** releaseId | string | 解决的发行ID |
| ** releaseName | string | 解决的发行名称 |
| ** contracts | object[] | 解决的发行的策略信息 |
| **** policyId | string | 选中的策略ID |
| **** contractId | string | 策略对应的合约ID |
| schemeResolveReleases | object[] | 发行的方案所解决的依赖发行 |
| ** releaseId | string | 解决的发行ID |
| ** releaseName | string | 解决的发行名称 |
| ** version | string | 解决的发行版本号 |
| ** releaseSchemeId | string | 当前版本发行对应的方案ID |
| ** parentReleaseSchemeId | string | 父级方案ID |
| ** deep | int | 授权树的层级 |


### 返回示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"presentableId": "5cde533c1e6b38334876b318",
		"nodeId": 80000003,
		"masterReleaseId": "5cc1271a204f822804244992",
		"userId": 50003,
		"presentableName": "my-presentable",
		"nodeResolveReleases": [{
			"contracts": [{
				"contractId": "5cce9f33ffbf3642dc291979",
				"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc"
			}],
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1"
		}, {
			"contracts": [{
				"contractId": "5cdd25e58b01222dac2620d6",
				"policyId": "8cefe2f1dcc6dd0bdaadac946cb63dbc"
			}],
			"releaseId": "5cc1271a204f822804244992",
			"releaseName": "a-a-b-6"
		}],
		"schemeResolveReleases": [{
			"releaseId": "5cc1271a204f822804244992",
			"releaseName": "a-a-b-6",
			"version": "0.1.0",
			"releaseSchemeId": "5cc1271a204f822804244994",
			"parentReleaseSchemeId": "",
			"deep": 1
		}, {
			"releaseId": "5cb03a295a791845b4aed4ae",
			"releaseName": "b2",
			"version": "0.1.0",
			"releaseSchemeId": "5cb03a295a791845b4aed4b0",
			"parentReleaseSchemeId": "5cc1271a204f822804244994",
			"deep": 2
		}, {
			"releaseId": "5cb03c9a59b15317d037d474",
			"releaseName": "a1",
			"version": "0.1.0",
			"releaseSchemeId": "5cb03c9a59b15317d037d476",
			"parentReleaseSchemeId": "5cc1271a204f822804244994",
			"deep": 2
		}, {
			"releaseId": "5cb3f23220020a552cf2984f",
			"releaseName": "a2",
			"version": "0.1.0",
			"releaseSchemeId": "5cb3f23320020a552cf29851",
			"parentReleaseSchemeId": "5cc1271a204f822804244994",
			"deep": 2
		}, {
			"releaseId": "5cb0414a3077a353f4b8d4c9",
			"releaseName": "b4",
			"version": "0.1.0",
			"releaseSchemeId": "5cb0414a3077a353f4b8d4cb",
			"parentReleaseSchemeId": "5cb3f23320020a552cf29851",
			"deep": 3
		}, {
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"version": "0.1.0",
			"releaseSchemeId": "5cb039815a791845b4aed4ad",
			"parentReleaseSchemeId": "5cb0414a3077a353f4b8d4cb",
			"deep": 4
		}, {
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"version": "0.1.0",
			"releaseSchemeId": "5cb039815a791845b4aed4ad",
			"parentReleaseSchemeId": "",
			"deep": 1
		}]
	}
}

```
