import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Createupdate from "./pages/cadastro/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/createupdate" component={Createupdate} />
    </Switch>
  );
}
