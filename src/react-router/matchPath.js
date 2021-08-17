import  {pathToRegexp} from 'path-to-regexp';

const cache = {};
const cacheLimit = 10000;
let cacheCount = 0;
function compilePath(path, options) {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  const pathCache = cache[cacheKey] || (cache[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  const keys = []// 提取出来参数
  const regexp = pathToRegexp(path,keys,options)// 匹配路径的正则表达式，option配置
  const res = {keys, regexp}
  if (cacheCount < cacheLimit) {// 不超出上限就添加缓存；
    pathCache[path] = res;
    cacheCount++;
  }
  return res
}

/**
 * 
 * @param {*} pathName 浏览器当前真实的路径名
 * @param {*} options Route组件的props 比如path component exact等；
 * path：Route上指定的path；exact：是否精确匹配；strict: 是否严格匹配，后面能不能有可选的/；
 * sensitive：大小写敏感； 这些属性都死 path-to-regexp库生成正则可以配置的选项；
 */
function matchPath(pathName, options={}) {
  let {path='/', exact=false, strict=false, sensitive=false} = options
  let {keys, regexp} = compilePath(path,{end: exact,strict,sensitive })
  const match = regexp.exec(pathName)
  if(!match) return null
  const [url,...values] = match
  const isExact = pathName === url
  if (exact && !isExact) return null// 配置了精确匹配 但是不满足
  console.log('cjy-match', keys, values)
  return {// 这个就是注入给子组件props里面的match对象；
    path,
    url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index]
      return memo
    },{})
  }
}

export default matchPath