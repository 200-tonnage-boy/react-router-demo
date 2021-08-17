const  {pathToRegexp}= require('path-to-regexp') 

const keys = []// 提取出来参数
const regexp = pathToRegexp('/a/:id/:name',keys)// 匹配路径的正则表达式，option配置
console.log('/a/2/cjy'.match(regexp))
console.log(regexp.exec('/a/2/cjy'))
console.log(keys)
