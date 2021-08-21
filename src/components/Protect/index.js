import React from 'react';
import Login from './Login'
import {Route, Redirect} from '../../react-router-dom'
const Protect = (props) => {
  const {path, component:RenderComponent} = props
  const isLogin = localStorage.getItem('cjy-login')
  return <>
    <Route path={path} render={(routeProps) => {
      return isLogin?<RenderComponent {...routeProps} />:<Redirect to={{pathname:'/login', state:{from:path}}}></Redirect>
    }}/>
  </>
  
}

export default Protect