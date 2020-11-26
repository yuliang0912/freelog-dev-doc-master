# 切换presentable版本

### 调用方式: PUT

### 接口地址:

```
https://api.freelog.com/v1/presentables/{presentableId}/switchPresentableVersion
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|presentableId|必选|string|presentableId|


### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|version|必选|string| presentable对应的发行版本|

### body示例

```json
{
    "version": "0.2.0"
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | boolean | 是否上线或下线成功|


### 返回示例

```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
