# 上下线presentable

### 调用方式: PUT

### 接口地址:

```
https://api.freelog.com/v2/presentables/{presentableId}/onlineStatus
```

### url传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明  |
| :--- | :--- | :--- | :---  |
| presentableId | 必选 | string | 展品ID |


### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明  |
| :--- | :--- | :--- | :---  | 
| onlineStatus | 必选 | int | 上线状态 0:下线 1:上线 |

### body示例

```js
{
	"onlineStatus": 1
}
```

### 返回说明：


| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| [data] | bool | 是否操作成功 |

### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": true
}
```
