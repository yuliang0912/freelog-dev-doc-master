# 根据发行获取presentable资源

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/{nodeId}/presentables/detail{.extName}?releaseId={releaseId}&releaseName={releaseName}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| nodeId | 必选 | string | 节点ID |
| releaseId | 可选 | string | 发行ID,与发行名称必须存在一个,优先ID为准 |
| releaseName | 可选 | string | 发行名称,与发行ID必须存在一个,优先ID为准 |
| extName | 可选 | string | file:文件流(默认) info:presentable信息 release:presentable对应的发行 auth:授权结果 |


### extName[file]

 1.http-header返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| freelog-entity-nid | string | 当前响应的展品的依赖树链路ID |
| freelog-sub-dependencies | string | 当前展品的子依赖,base64编码的json字符串 |
| freelog-resource-type | string | 资源类型 |
| freelog-meta | string | 资源meta信息,encodeURIComponent编码过的json字符串 |
| freelog-system-meta | string | 资源的系统meta,encodeURIComponent编码过的json字符串 |

 2.response:
    fileStream 文件流

### extName[info] 返回说明 :

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| presentableId | string | 展示方案ID|
| presentableName | string | 展示方案名称 |
| userDefinedTags| string[]| 用户定义的tags |
| intro |string | presentable简介 |
| isOnline | int| 是否上线 0:否 1:是 |
| userId | int| 创建方案的用户ID |
| nodeId | int| 节点ID |
| resolveReleases|object[]|发行以及其上抛的解决方式|
| **releaseId|string|解决的发行ID|
| **releaseName|string|解决的发行名称|
| **contracts|object[]|解决的发行的策略|
| ****policyId|string|选中的策略ID|
| ****contractId|string|策略生成的合约ID|
| policies| object[]| 对外销售的方案策略组|
| releaseInfo| object|presentable引用的发行基础信息|
| **releaseId| string|发行ID|
| **releaseName| string|发行名称|
| **resourceType| string|资源类型|
| **version| string|引用的版本号|
| createDate| date|创建日期|

 ### extName[release] 返回说明 :

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| releaseId | string | 发行ID |
| resourceId | string | 资源ID |
| resourceType | string | 资源类型[[详见附表]][资源类型] |
| releaseName | string | 发行名称 |
| username	| string| 用户名 |
| policies|object[]|策略 |
| intro|string|资源简介 |
| latestVersion|object|最新版本 |
| resourceVersions|object[]|资源版本信息 |

 ### extName[auth] 返回说明 :

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| isAuth | bool | 是否授权通过 |
| authCode | int | 授权码,参考附表 |
| data | object | 附属信息 |
| errors | string[] | 授权相关错误信息 |



