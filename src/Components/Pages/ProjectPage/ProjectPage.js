import React from "react";
import {  Route, Switch } from "react-router-dom";

//#region Import Common
import StandardFooter from "../../Modules/StandardFooter";
import TopNavBar from "../../Modules/TopNavBar";
//#endregion

//#region ---------------- Import Modules -----------------------
//This is the main page
import ProjectPageComponent from "./ProjectPageComponent";
//============= BEYOND HERE ARE PAGES =============
import Page_HangryGuardians from "./SubPages/Page_HangryGuardians";
import Page_SpaceRunners from "./SubPages/Page_SpaceRunners";
import Page_HaulAway from "./SubPages/Page_HaulAway";
//#endregion

//#region ------------ Data ----------------
import TopNavBarInfo from "../../../Data/PageData/TopNavBarInfo";
import FooterInfo from "../../../Data/FooterData/FooterInfo";
import PageRouteData from "../../../Data/PageRouteData";
//#endregion

//Handles the multiple kinds of project pages so that i dont hv to keep on reimporting Standard footer etc
export default function ProjectPage()
{
    return (
        <div>
            <TopNavBar topNavBarData={TopNavBarInfo} selectedPageName="My Projects" />
                <Switch>
                    <Route component={ProjectPageComponent} path={PageRouteData.ProjectPagePath} exact />
                    <Route component={Page_HangryGuardians} path={PageRouteData.HangryGuardiansPath} />
                    <Route component={Page_SpaceRunners} path={PageRouteData.SpaceRunnersPath} />
                    <Route component={Page_HaulAway} path={PageRouteData.HaulAwayPath} />
                </Switch>
            <StandardFooter footerInfo={FooterInfo} />
        </div>
    )
}