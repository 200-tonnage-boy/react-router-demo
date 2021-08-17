import React from "react";
import ReactDOM from "react-dom";
import Acom from './components/Acom'
import Bcom from './components/Bcom'
import App from "./App";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
      </ul>
    </div>
    <div style={{ height: "500px", border: "1px solid" }}>
      <Route exact path="/a/:id/:name" component={Acom}>
      </Route>
      <Route path="/b" component={Bcom}>
      </Route>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
