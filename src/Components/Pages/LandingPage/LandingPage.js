import React from "react";

//#region Common
import PageStructure from "../../Common/PageStructure";
//#endregion

//#region Modules
import TopNavBar from "../../Modules/TopNavBar";
import AboutMe from "../../Modules/AboutMe";
import StandardFooter from "../../Modules/StandardFooter";
//#endregion

//#region Data
import { PageStruct_Grey } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
// import TopNavBarInfo from "../../../Data/ModuleData/TopNavBarData";
// import AboutMeInfo from "../../../Data/PageData/LandingPage/AboutMeInfo";
import FooterInfo from "../../../Data/FooterData/FooterInfo";
//#endregion

function LandingPage()
{

  const pageContent =
    <div>
      <AboutMe />
    </div>

  return (
    <div>
      <TopNavBar selectedPageName={"About Me"} />
      <PageStructure content={pageContent} info={PageStruct_Grey} />
      <StandardFooter footerInfo={FooterInfo} />
    </div>
  );
}

export default LandingPage;
