function createBrowserHistory() {
  const globalHistory = window.history
  let action;// 最近一次操作的类型'PUSH' 'POP'等
  let listeners = []// 存放监听函数，变化时候循环调用，并传入action和location
  let state;
  function listen (callback) {
    listeners.push(callback)
    return () => {
      // 返回一个卸载函数
      let idx = listeners.indexOf(callback)
      listeners.splice(idx,1)
    }
  }
  
  function go(n) {
    globalHistory.go(n)
  }
  // 这个就是更新的关键地方，在pushSate并不会触发popstate事件，因此在push的时候要调用改方法，更新location,并触发listener;
  function setState (newLocation) {
    Object.assign(history,newLocation)// newLocation有action和location
    listeners.forEach(item => {
      item(history.location)
    })
  }
  function push(pathname, newState) {// 允许两种传参形式，字符串+对象；或者单独一个对象通过属性名标识；注意原生的里面只有browser是允许的；
    action = 'PUSH'
    if (typeof pathname === 'object') {
      state = pathname.state
      pathname = pathname.pathname
    }else {
      state = newState
    }
    globalHistory.pushState(state,null,pathname)
    let location = {state, pathname}
    setState({location,action})
  }
  window.onpopstate = () => {
    setState({action:'POP',location:{pathname:window.location.pathname,state:globalHistory.state}})
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  const history = {
    action: "POP",
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {
      pathname: window.location.pathname,
      state: globalHistory.state,// 所以这里可以实现保存state
    },
  };
  return history;
}
export default createBrowserHistory;
