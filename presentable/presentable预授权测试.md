# presentable预授权测试

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v1/auths/presentables/{presentableId}/presentableTreeAuthTest?nodeId={nodeId}

```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID|
|presentableId|必选|string|展示策略ID|



### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| isAuth | bool | 是否获得授权|


### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "isAuth": true
    }
}
```