import React from 'react'
import userUtil from './util'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "../../react-router-dom";
const UserList = (props) => {
  const user = userUtil.getUserList()
  const handleClick = (id) => {
    props.history.push(`/user/detail/${id}`)
  }
  return <>
    <p>用户列表：</p>
    <div>
      {
        user.map(item => {
          return <div style={{marginTop:'10px', border:'1px solid pink'}}>
            <p><Link to={{pathname:`/user/detail/${item.id}`, state:item}}>用户名字：{item.name}</Link></p>
          </div>
        })
      }
    </div>
  </>
}

export default UserList