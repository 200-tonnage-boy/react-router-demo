import React from "react";
import ReactDOM from "react-dom";
import Acom from "./components/Acom";
import Bcom from "./components/Bcom";
import App from "./App";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <ul>
        <li>
          {/* url1:#/a/2/cjy   url2：#/a?id=2&name=cjy */}
          <a href="/a/2/cjy">to A</a>
          <Link to='/a/2/cjy'>跳转A组件</Link>
        </li>
        <li>
          {/* <a href="#/b">to B</a> */}
          <Link to='#/b'>跳转B组件</Link>
        </li>
        <li>
          <Link to='#/cc'>匹配不到组件</Link>
        </li>
        <li>
          <Link to='#test'>锚点</Link>
        </li>
      </ul>
    </div>
    <div style={{ height: "1500px", border: "1px solid", position:'relative' }}>
      <Switch>
        <Route exact path="/a/:id/:name" component={Acom}></Route>
        <Route exact path="/a/:id/:name" component={Bcom}></Route>
        <Route path="/b" component={Bcom}></Route>
        <Redirect to='/b' />
      </Switch>

      <div id="test" style={{ height: "20px", border: "1px solid", position:'absolute' ,bottom:'0px'}}></div>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
