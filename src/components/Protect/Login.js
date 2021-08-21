import React from 'react';

const Login = (props) => {
  const handleLogin = () => { 
    localStorage.setItem('cjy-login', true)
    const toPath = props.location.state.from || '/'
    props.history.push(toPath)
  }
  return <button onClick={handleLogin}>点击登录</button>
}

export default Login