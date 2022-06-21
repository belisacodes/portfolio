import React from "react";

import PortfolioLanding from "../views/PortfolioLanding";

// Not Found Page

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={PortfolioLanding} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
