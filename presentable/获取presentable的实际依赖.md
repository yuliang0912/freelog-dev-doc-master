# 获取presentable的实际依赖

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}/dependencyTree
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| presentableId | 必选 | string | presentableId |
| version | 可选 | string | 引用的发行版本号,默认使用锁定的最新版本 |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID |
| nodeId | int | 节点ID |
| masterReleaseId | string | presentable所引用的主发行ID |
| version | string | presentable所引用的主发行版本 |
| dependencyTree | object[] | 依赖树 |
| **releaseId | string | 发行ID |
| **releaseName | string | 发行名称 |
| **version | string | 实际使用的发行版本 |
| **versionRange | string | 声明的版本范围 |
| **deep | string | 依赖树层级,从1开始 |
| **parentReleaseId | string | 父级发行ID |
| **parentReleaseVersion | string | 父级发行版本 |


### 返回示例

```json
{
	"ret": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"presentableId": "5cde533c1e6b38334876b318",
		"status": 0,
		"nodeId": 80000003,
		"version": "0.1.0",
		"masterReleaseId": "5cc1271a204f822804244992",
		"dependencyTree": [{
			"releaseId": "5cc1271a204f822804244992",
			"releaseName": "a-a-b-6",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "b65f942feec6e2e02f0c28a477292583eb72242f",
			"deep": 1,
			"parentReleaseId": "",
			"releaseSchemeId": "5cc1271a204f822804244994"
		}, {
			"releaseId": "5cb03c9a59b15317d037d474",
			"releaseName": "a1",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "77f03f9a633a9f59aae4f930147b66683b673995",
			"deep": 2,
			"parentReleaseId": "5cc1271a204f822804244992",
			"releaseSchemeId": "5cb03c9a59b15317d037d476"
		}, {
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "e3e4164bc863488515b0e47adb16a2d0f3e8ff0c",
			"deep": 3,
			"parentReleaseId": "5cb03c9a59b15317d037d474",
			"releaseSchemeId": "5cb039815a791845b4aed4ad"
		}, {
			"releaseId": "5cb03a295a791845b4aed4ae",
			"releaseName": "b2",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "e3e4164bc863488515b0e47adb16a2d0f3e8ff0c",
			"deep": 3,
			"parentReleaseId": "5cb03c9a59b15317d037d474",
			"releaseSchemeId": "5cb03a295a791845b4aed4b0"
		}, {
			"releaseId": "5cb3f23220020a552cf2984f",
			"releaseName": "a2",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "c96a1d6097de19c41f3bfea94f916d0afccb1279",
			"deep": 2,
			"parentReleaseId": "5cc1271a204f822804244992",
			"releaseSchemeId": "5cb3f23320020a552cf29851"
		}, {
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "e3e4164bc863488515b0e47adb16a2d0f3e8ff0c",
			"deep": 3,
			"parentReleaseId": "5cb3f23220020a552cf2984f",
			"releaseSchemeId": "5cb039815a791845b4aed4ad"
		}, {
			"releaseId": "5cb0414a3077a353f4b8d4c9",
			"releaseName": "b4",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "bb9a056c9e43b254b999f2ac6b494595e29af682",
			"deep": 3,
			"parentReleaseId": "5cb3f23220020a552cf2984f",
			"releaseSchemeId": "5cb0414a3077a353f4b8d4cb"
		}, {
			"releaseId": "5cb03c9a59b15317d037d474",
			"releaseName": "a1",
			"version": "0.1.0",
			"versionRange": "^0.1.0",
			"resourceId": "77f03f9a633a9f59aae4f930147b66683b673995",
			"deep": 4,
			"parentReleaseId": "5cb0414a3077a353f4b8d4c9",
			"releaseSchemeId": "5cb03c9a59b15317d037d476"
		}, {
			"releaseId": "5cb039815a791845b4aed4ab",
			"releaseName": "b1",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "e3e4164bc863488515b0e47adb16a2d0f3e8ff0c",
			"deep": 5,
			"parentReleaseId": "5cb03c9a59b15317d037d474",
			"releaseSchemeId": "5cb039815a791845b4aed4ad"
		}, {
			"releaseId": "5cb03a295a791845b4aed4ae",
			"releaseName": "b2",
			"version": "0.1.0",
			"versionRange": "0.1.0",
			"resourceId": "e3e4164bc863488515b0e47adb16a2d0f3e8ff0c",
			"deep": 5,
			"parentReleaseId": "5cb03c9a59b15317d037d474",
			"releaseSchemeId": "5cb03a295a791845b4aed4b0"
		}],
		"createDate": "2019-05-17T06:22:52.459Z",
		"updateDate": "2019-05-17T06:22:52.459Z"
	}
}

```
