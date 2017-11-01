# 节点修改pageBuild状态

### 调用方式: PUT

### 接口地址:

```
https://api.freelog.com/v1/nodes/pagebuilds/{id}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|id|必选|int|节点的pageBuild标识ID,列表中返回

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID
|status|必选|int|1:显示 2:隐藏

### body示例

```js
{
    "status": 2,
    "nodeId": 1
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | bool| 是否成功 |


### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```