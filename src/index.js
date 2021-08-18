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
  Redirect
} from "./react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <ul>
        <li>
          {/* url1:#/a/2/cjy   url2：#/a?id=2&name=cjy */}
          <a href="#/a/2/cjy">to A</a>
        </li>
        <li>
          <a href="#/b">to B</a>
        </li>
        <li>
          <a href="#/xxx">匹配不到</a>
        </li>
      </ul>
    </div>
    <div style={{ height: "500px", border: "1px solid" }}>
      <Switch>
        <Route exact path="/a/:id/:name" component={Acom}></Route>
        <Route exact path="/a/:id/:name" component={Bcom}></Route>
        <Route path="/b" component={Bcom}></Route>
        <Redirect to='/b' />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
