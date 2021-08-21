import React, { useState } from 'react'
import userUtil from './util'
const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const handleInputChange = (e) => {
    console.log('cjy-addUser',e )
    setUserName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.isDefaultPrevented()
    console.log('cjy-submit')
    userUtil.addUser({
      id: Date.now(),
      name: userName
    })
    props.history.push('/user/list')
  }

  return <>
    <p>添加用户</p>
    <div>
      <form onSubmit={handleSubmit}>
        <input value={userName} onChange={handleInputChange}/>
        <button   type="submit">添加</button>
      </form>
    </div>
  </>
}

export default AddUser