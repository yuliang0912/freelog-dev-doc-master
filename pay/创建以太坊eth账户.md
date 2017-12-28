# 创建以太坊eth账户

### 调用方式: POST

### 接口地址:

```
https://api.freelog.com/v1/pay/accounts/createEthAccount
```

### body传入参数说明：

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
|password|必选|string|密码,最少6位


### body示例

```js
{
    "password": "123456"
}
```

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| address | string | 账户地址
| userId | int | 用户ID

### 返回示例

```js
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "userId": 10022,
        "address": "0x4BE199c2Cf10F17F80D351B1C7A5c2f3e1430d81"
    }
}
```
