import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/generic/header";
import { ROUTERS_APP } from "../components/config/router";
import NotMatch from "./nomatch";
import { NAMEPROYECT } from "../utility/constante";
const  PageMain = ()=> {
    return (
      <Router>
        <Header name={NAMEPROYECT} />
        <div className="container ">
          <Switch>
            {ROUTERS_APP.map(rut => {
              return (
                <Route
                  key={"rut" + rut.pos}
                  exact
                  path={rut.path}
                  component={rut.component}
                />
              );
            })}
            <Route component={NotMatch} />
          </Switch>
        </div>
      </Router>
    );

}
export default PageMain;
