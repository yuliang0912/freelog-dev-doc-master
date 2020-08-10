# 根据sha1查询版本列表 (查询文件对象所挂载的资源及版本)

### 调用方式: GET

### 接口地址:

```
https://api.freelog.com/v2/resources/files/:fileSha1/versions
```

### url传入参数说明
| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| fileSha1 | 必选 | string | 文件sha1值 |
| projection | 可选 | string | 过滤需要返回的字段,多个用逗号分隔,默认全部 |

### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| resourceId | string | 资源ID|
| resourceType | string | 资源类型[[详见附表]][资源类型] |
| resourceName | string | 资源名称 |
| userId | int | 用户ID |
| description | string | 资源描述信息 |
| version | string | 版本号 |
| versionId | string | 版本ID |
| fileSha1 | string | 资源sha1值 |
| dependencies | object[] | 资源依赖信息 |
| **resourceId | string | 依赖的资源ID |
| **resourceName | string | 依赖的资源名称 |
| **versionRange | string | 依赖的资源版本范围 |
| upcastResources | object[] | 真实上抛资源列表,资源的基础上抛子集 |
| ** resourceId | string | 上抛资源ID |
| ** resourceName | string | 上抛资源名称 |
| resolveResources | object[] | 版本解决的依赖以及上抛 |
| ** resourceId | string | 解决的资源ID |
| ** contracts | object[] | 解决所用的合同信息 |
| **** policyId | string | 策略ID |
| **** contractId | string | 合同ID |
| systemProperty | object | 系统属性 |
| customProperty | object | 自定义系统属性(根据描述器自动生成的) |
| customPropertyDescriptors | object[] | 自定义属性描述器 |
| ** key | string | 自定义属性名称 |
| ** defaultValue | string | 自定义属性对应的值 |
| ** type | string | 属性类型(editableText:可编辑文本,readonlyText:只读文本,radio:单选,checkbox:多选,select:下拉选项) |
| ** candidateItems | string[] | 选项列表,单选,多选,下拉选择时需要提供选项 |
| createDate | date | 创建日期 |

### 示例

```js
{
    "ret":0,
    "errcode":0,
    "msg":"success",
    "data":{
        "description":"版本描述",
        "status":1,
        "versionId":"51efb8c3e8b18e7c7ecc6b2d646b6cc8",
        "version":"1.0.0",
        "resourceId":"5ef04fb1bfe6f11cb0424e50",
        "resourceName":"yuliang/my-first-resource3",
        "userId":50021,
        "resourceType":"text",
        "fileSha1":"4a10ed3b6e45f8014b8240ad37f44cfc9c75e754",
        "dependencies":[
        ],
        "resolveResources":[
        ],
        "upcastResources":[
        ],
        "systemProperty":{
            "fileSize":338
        },
        "customPropertyDescriptors":[
            {
                "candidateItems":[
                ],
                "remark":"名称-可编辑文本框",
                "key":"name",
                "defaultValue":"1",
                "type":"editableText"
            }],
        "createDate":"2020-06-22T06:46:40.010Z",
        "updateDate":"2020-06-22T06:46:40.010Z",
        "customProperty":{
            "name":"1"
        }
    }
}

```