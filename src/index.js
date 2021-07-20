import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
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
          <a href="#/a">to A</a>
        </li>
        <li>
          <a href="#/b">to B</a>
        </li>
      </ul>
    </div>
    <div style={{ height: "500px", border: "1px solid" }}>
      <Route exact path="/a">
        <span>页面A</span>
      </Route>
      <Route path="/b">
        <span>页面B</span>
      </Route>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
