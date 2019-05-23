# ~~删除presentable~~

## 改版之后理论上不允许删除presentable,因为创建时就产生了合约

### 调用方式: DELETE

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|presentableId

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | bool | 是否删除成功|

### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
