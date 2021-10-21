var str = ` * [retCode](附表/一级状态码.md)
    * [errCode](附表/二级状态码.md)
    * [用户角色](附表/用户角色.md)
    * [资源类型](附表/资源类型.md)
    * [合同相关枚举说明](附表/合同相关枚举说明.md)
    * [账户类型](附表/账户类型.md)
    * [货币类型](附表/货币类型.md)
    * [交易类型](附表/交易类型.md)
    * [交易类型](附表/交易类型.md)
    * [bucketName格式](附表/bucketName格式.md)
    * [授权服务状态码](附表/授权服务状态码.md)
    * [资源meta说明](附表/资源meta说明.md)
    * [授权策略分组说明](附表/授权策略分组说明.md)
    * [授权策略分组说明](附表/授权策略分组说明.md)`

const groups = str.split(/[(\r\n)]+/);

const list = [];
for (let i = 0; i < groups.length; i += 2) {
    if (!groups[i]) {
        continue;
    }
    list.push({title: groups[i].replace('* [', '').replace(']', '').trim(), path: groups[i + 1]})
}
console.log(list)
// for (const item of str.split(/[(\r\n)]+/)) {
//     if (!item) {
//         continue;
//     }
//     console.log(item.replace('* [', '').replace(']', '').trim())
// }



