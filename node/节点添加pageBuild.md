# 节点添加pageBuild

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/nodes/pagebuilds/
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|nodeId|必选|int|节点ID
|status|必选|int|1:显示 2:隐藏
|presentableId|必选|string|节点与pb资源的presentable-id

### body示例

```js
{
    "nodeId": 1,
    "status": 1,
    "presentableId": "59e59c1dc08cd208ac0e0878"
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| id | int| 主键ID |
| nodeId | int| 节点ID |
| presentableId | string | PB资源的展示方案ID|
| userId | int| 创建用户ID |
| status | int| 状态 1:显示 2:隐藏 |
| createDate| date|创建日期|


### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "nodeId": 1,
        "presentableId": "59e59c1dc08cd208ac0e0878",
        "status": 1,
        "userId": 1,
        "createDate": "2017-10-17T08:10:43.253Z",
        "id": 8
    }
}
```