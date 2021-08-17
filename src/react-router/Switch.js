import React from "react";
import RouterContext from "./RouterContext.js";
import matchPath from "./matchPath.js";

class Switch extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const location = this.props.location || context.location;
          let element, match;
          React.Children.forEach(this.props.children, child => {// 官方提供方法，解决 children可能不是数组的情况
            if (match == null && React.isValidElement(child)) {//isValidElement 用于确保是个react组件，而不是文本之类的children
              element = child;
              match =  matchPath(location.pathname, { ...child.props });
            }
          });

          return match
            ? React.cloneElement(element, { location, computedMatch: match })// 注入computedMatch   在Route组件中 如果有computedMatch就不再计算match
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Switch;
