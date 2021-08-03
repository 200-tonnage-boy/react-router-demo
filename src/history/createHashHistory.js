function createHashHistory() {
  let action;// 最近一次操作的类型'PUSH' 'POP'等
  let listeners = []// 存放监听函数，变化时候循环调用，并传入action和location

  let historyStack = []
  let historyIndex = -1// 当前所在栈的索引位置；
  let state;
  function listen (callback) {
    listeners.push(callback)
    return () => {
      // 返回一个卸载函数
      let idx = listeners.indexOf(callback)
      listeners.splice(idx,1)
    }
  }
  window.addEventListener('hashchange',()=>{
    // 取的时候注意分割#号；
    let pathname = window.location.hash.slice(1)
    // 监听到改变后改变history的location
    Object.assign(history,{
      action,
      location:{pathname,state}
    })
    if (action === 'PUSH') {// push的时候注意，从当前index+1添加，然后截断后面的
      historyStack[++historyIndex] = history.location
      // 截断后面的
      historyStack = historyStack.filter((item,index) => index<=historyIndex)
    }
    listeners.forEach((cb)=>{
      //调用监听函数的时候把当前location传递进去；
      cb(history.location)// 现在先只传个pathname
    })
  })
  function go(n) {
    // 找出历史栈中对应的数据，然后将pathname赋值给hash 引起变化就可以了
    action = 'POP';
    let newIndex = historyIndex + n
    if (newIndex<0) {
      newIndex=0
    }
    if (newIndex>historyStack.length-1) {
      newIndex=historyStack.length-1
    }
    historyIndex = newIndex
    const nextLocation =  historyStack[historyIndex]
    state = nextLocation.state// 注意原生的rrd,在前进后退的时候会丢失state；
    window.location.hash = nextLocation.pathname
  }
  function push(pathname, newState) {// 允许两种传参形式，字符串+对象；或者单独一个对象通过属性名标识；注意原生的里面只有browser是允许的；
    // 注意赋值的时候是不用带#号，取的时候是带#号的；
    action = 'PUSH'// 当前操作的类型
    if(typeof pathname==='string') {
      state = newState
    }else {
      state = pathname.state;
      pathname = pathname.pathname
    }
    window.location.hash = pathname
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  const history = {
    action: "POP",
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {
      pathname: window.location.hash.slice(1) || "/",
      state: undefined,
    },
  };
  window.location.hash = window.location.hash.slice(1) || '/'// 没有带#号的时候自动给他补上，原生的使用时也会这样
  return history;
}
export default createHashHistory;
