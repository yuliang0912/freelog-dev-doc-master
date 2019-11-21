# 获取presentable依赖的发行资源

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentables/{presentableId}/subDepend{.extName}?entityNid={entityNid}&subReleaseId={subReleaseId}&subReleaseName={subReleaseName}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| presentableId | 必选 | string | presentableId |
| entityNid | 必选 | string | 当前子资源的父级资源的依赖树链路ID |
| releaseId | 可选 | string | 依赖的子发行ID |
| releaseName | 可选 | string | 依赖的子发行名称 |
| extName | 可选 | string | file:文件流(默认) info:release信息 auth:授权结果 |


### extName[file]

1.http-header返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| freelog-entity-nid | string | 当前响应的测试资源的依赖树链路ID |
| freelog-sub-dependencies | string | 当前测试资源子依赖,base64编码的json字符串 |
| freelog-resource-type | string | 资源类型 |
| freelog-meta | string | 资源meta信息,encodeURIComponent编码过的json字符串 |
| freelog-system-meta | string | 资源的系统meta,encodeURIComponent编码过的json字符串 |

2.response:
  fileStream 文件流

 ### extName[info] 返回说明 :

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