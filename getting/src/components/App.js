import React from "react";
import { Switch, Route } from "react-router-dom";
import { MyPage, Person, Login, Main } from "./index";

import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/person/:username" component={Person}/>
        <Route exact path="/mypage" component={MyPage}/>
      </Switch>
    </div>
  );
};

export default App;
