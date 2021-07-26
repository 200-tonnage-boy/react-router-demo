import React from "react";
import ReactDOM from "react-dom";
import Acom from './components/Acom'
import Bcom from './components/Bcom'
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
      <Route exact path="/a" component={Acom}>
      </Route>
      <Route path="/b" component={Bcom}>
      </Route>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
