import React from 'react'
import RouterContext from './RouterContext'
class Route extends React.Component {
  static contextType = RouterContext
  render () {
    const {component:RouterComponent, path } = this.props
    const {location, history} = this.context
    const match = path === location.pathname
    let componentDOM = null
    if (match) {
      componentDOM = <RouterComponent {...{history, location, match}}/>
    } 
    return componentDOM
  }
}

export default Route