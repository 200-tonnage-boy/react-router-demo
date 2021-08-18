import React from 'react';
import RouterContext from "./RouterContext.js";
import LifeCicycle from './LifeCicycle'
function Redirect ({to}) {
  console.log('redirect')
  return <RouterContext.Consumer>
    {(value) => {
      return <LifeCicycle onMount={() => {
        value.history.push(to)
      }}></LifeCicycle>
    }}
  </RouterContext.Consumer>
}

export default Redirect