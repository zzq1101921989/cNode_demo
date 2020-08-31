// 引用日期的 js 库
import datajs from "dayjs"
// 添加语言包 默认是英文
import 'dayjs/locale/zh-cn'
// 正因为 dayjs 体积小所以很多功能都是需要引用插件，详情可以看dayjs官网
var relativeTime = require('dayjs/plugin/relativeTime')
// 全局加载语言包
datajs.locale('zh-cn')
// 添加插件
datajs.extend(relativeTime);

export default function FromNow(props){
    let { data } = props
    return datajs(data).toNow()
}