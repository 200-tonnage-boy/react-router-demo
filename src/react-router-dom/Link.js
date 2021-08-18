import React from 'react'
import {__RouterContext as RouterContext} from '../react-router'
function Link (props) {
  return <RouterContext.Consumer>
    {(value) => {
      return <a {...props} onClick={(e)=>{
        e.preventDefault()
        value.history.push(props.to)
      }}>{props.children}</a>
    }}
  </RouterContext.Consumer>
}
export default Link