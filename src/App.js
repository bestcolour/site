//#region Import React dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";
//#endregion

//#region Import Styles
import ResetFormat from "./CommonStyles/ResetFormat.module.css";
import GeneralStyles from "./CommonStyles/GeneralStyles.module.css";
//#endregion
//#region Import Main Pages
//Import pages (this must be behind the reset format and GeneralStyles import allow LandingPage styles to override the above styles)
import PageRouteData from "./Data/PageRouteData";
import LandingPage from "./Components/Pages/LandingPage";
import ProjectPage from "./Components/Pages/ProjectPage";
import PortfolioPage from "./Components/Pages/PortfolioPage";
//#endregion


class App extends React.Component
{
  render()
  {
    return (
      <div>
        <Switch>
          <Route component={LandingPage} path={PageRouteData.LandingPagePath} exact />
          <Route component={ProjectPage} path={PageRouteData.ProjectPagePath} />
          <Route component={PortfolioPage} path={PageRouteData.PortfolioPagePath} />
        </Switch>
      </div>
    );
  }

}


export default App;
