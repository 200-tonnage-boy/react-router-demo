import React, { useEffect, useState } from 'react'
import userUtil from './util'
const UserDetail = (props) => {
  const [user, setUser] = useState({id:null, name:null})
  useEffect(() => {
    const userState = props.location.state
   
    if (userState) {// hash状态下刷新页面会丢失state
      setUser(userState)
      return
    }
    const id = props.match.params.id
    const newUser = userUtil.findUser(id)

    console.log(newUser,userState,id,props,'cjy-detail')
    newUser&&setUser(newUser)
  },[props.location.state, props.match.id])
  return <>
    <p>用户详情：</p>

    <div style={{marginTop:'10px', border:'1px solid pink'}}>
            <p>用户id:{user.id}</p>
            <p>用户名字：{user.name}</p>
          </div>

  </>
}

export default UserDetail