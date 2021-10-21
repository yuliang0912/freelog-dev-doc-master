var str = `* [分页查询账户交易流水](payV2/分页查询账户交易流水.md)
    * [查看用户个人账户信息](payV2/查看用户个人账户信息.md)
\t* [查询交易记录详情](payV2/查询交易记录详情.md)
    * [激活个人账户](payV2/激活个人账户.md)
    * [修改交易密码](payV2/修改交易密码.md)
\t* [重置交易密码](payV2/重置交易密码.md)
\t* [校验交易密码](payV2/校验交易密码.md)`

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



