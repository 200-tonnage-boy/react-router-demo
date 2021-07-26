import React from 'react';
import RouterContext from './RouterContext'
class Router extends React.Component {
  // 注入context
  // 维护state
  constructor (props) {
    super(props)
    this.state={
      location: props.history.location
    }
    this.unListen = props.history.listen((location) => {// 用于监听路由的变化，变化后将最新的location传递下去，方法返回卸载函数，用于卸载监听；
      this.setState({
        location: location
      })
    })
  }
  componentWillUnmount () {
    this.unListen()
  }
  render () {
    const value={
      location: this.state.location,
      history: this.props.history
    }
    return <RouterContext.Provider value={value}>
      {this.props.children}
    </RouterContext.Provider>
  }
}

export default Router