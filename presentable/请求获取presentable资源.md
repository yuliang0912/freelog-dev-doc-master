# 请求获取presentable资源

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentable/{presentableId}?nodeId={nodeId}&userContractId={userContractId}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|presentableId|必选|string|展示策略ID|


### http-header返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| freelog-sub-resourceIds | string | presentbale的子资源(没有子资源时不存在该属性)|
| freelog-sub-resource-auth-token | string | presentbale的子资源的授权token(没有子资源时不存在该属性)|
| freelog-resource-type | string | 资源类型|
| freelog-meta | string | 资源meta信息,encodeURIComponent编码过的json字符串|
| freelog-system-meta | string | 资源的系统meta,encodeURIComponent编码过的json字符串 |


### http-response : FileStream

