import React, { useState } from 'react'
import userUtil from './util'
import {Prompt} from 'react-router-dom'

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [TestBlock, setTestBlock] = useState(false)

  const handleInputChange = (e) => {
    console.log('cjy-addUser',e )
    setTestBlock(true)
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
      <Prompt message='阻止跳转阻止跳转' when={TestBlock}/>
      <form onSubmit={handleSubmit}>
        <input value={userName} onChange={handleInputChange}/>
        <button   type="submit">添加</button>
      </form>
    </div>
  </>
}

export default AddUser