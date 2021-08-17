import React from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'
class Route extends React.Component {
  static contextType = RouterContext
  render () {
    const {component:RouterComponent} = this.props
    const {location, history} = this.context
    // const match = path === location.pathname
    const match = matchPath(location.pathname, this.props)// 获取match对象：包含匹配到的参数，是否精确匹配等信息
    let componentDOM = null
    if (match) {
      componentDOM = <RouterComponent {...{history, location, match}}/>
    } 
    return componentDOM
  }
}

export default Route