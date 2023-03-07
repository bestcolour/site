import React from "react";
import {  Route, Switch } from "react-router-dom";

//#region Import Common
import StandardFooter from "../../Modules/StandardFooter";
import TopNavBar from "../../Modules/TopNavBar";
//#endregion

//#region ---------------- Import Modules -----------------------
//This is the main page
import ProjectPageComponent from "./ProjectPageComponent";
import GamePage from "./CatergorizedPages/Games/GamePage";
//============= BEYOND HERE ARE PAGES =============
import Page_HangryGuardians from "./SubPages/HangryGuardians/PageContent";
import Page_SpaceRunners from "./SubPages/SpaceRunners/PageContent";
import Page_HaulAway from "./SubPages/HaulAway/PageContent";
import Page_DragAndPull from "./SubPages/DragAndPull/PageContent";
import Page_WhatIf from "./SubPages/WhatIf/PageContent";
import Page_LEM from "./SubPages/LEM/PageContent";
import Page_PythonAutomation from "./SubPages/PythonAutomation/PageContent";
//#endregion

//#region ------------ Data ----------------
import {PageRouteData} from "../../../Data/PageRouteData";
//#endregion

//Handles the multiple kinds of project pages so that i dont hv to keep on reimporting Standard footer etc
export default function ProjectPage()
{
    return (
        <div>
            <TopNavBar selectedPageName="My Projects" />
                <Switch>
                    <Route component={ProjectPageComponent} path={PageRouteData.ProjectPagePath} exact />
                    <Route component={GamePage} path={PageRouteData.GamesPagePath}  />
                    <Route component={Page_HangryGuardians} path={PageRouteData.HangryGuardiansPath} />
                    <Route component={Page_SpaceRunners} path={PageRouteData.SpaceRunnersPath} />
                    <Route component={Page_HaulAway} path={PageRouteData.HaulAwayPath} />
                    <Route component={Page_DragAndPull} path={PageRouteData.DragAndPullPath} />
                    <Route component={Page_WhatIf} path={PageRouteData.WhatIfPath} />
                    <Route component={Page_LEM} path={PageRouteData.LEMPath} />
                    <Route component={Page_PythonAutomation} path={PageRouteData.PythonMacroPath} />
                </Switch>
            <StandardFooter  />
        </div>
    )
}