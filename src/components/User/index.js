import React from 'react'
import AddUser from './AddUser'
import UserList from './UserList'
import UserDetail from './UserDetail'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "../../react-router-dom";
const User = (props) => {
  return <>
    <div style={{display: 'flex', height: '50px', border: '1px solid blue', justifyContent:'space-around'}}>
        <Link to='/user/add'>添加用户</Link>
        <Link to='/user/list'>用户列表</Link>
    </div>

    <div style={{display: 'flex', minHeight: '50px', border: '1px solid green', marginTop:'20px'}}>
      <p>用户界面</p>
      <Route exact path="/user/add" component={AddUser}></Route>
      <Route exact path="/user/list" component={UserList}></Route>
      <Route exact path="/user/detail/:id" component={UserDetail}></Route>
    </div>
  </>
}

export default User