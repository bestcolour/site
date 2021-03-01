import React from "react";

//#region --------------- Import Common & Modules ----------------------
import StandardFooter from "../../Modules/StandardFooter";
import TopNavBar from "../../Modules/TopNavBar";
import ZigZag from "../../Common/SectionTypes/ZigZag";
import PageStructure from "../../Common/PageStructure";
import PageDescription from "../../Common/SectionTypes/PageDescription";
//#endregion

//#region ------------ Import Common's Info --------------
import { ZigZag_Default } from "../../../Data/CommonInfo/ZigZag/ZigZagInfo_Default";
import { PageStruct_Grey } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import { PageDescriptionInfo_Default } from "../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion

//#region ==================== Import Content ==================================

//#region --------------- Common Content ---------------------
import TopNavBarInfo from "../../../Data/PageData/TopNavBarInfo";
import FooterInfo from "../../../Data/FooterData/FooterInfo";
import PageDescriptionContent_PortfolioPage from "../../../Data/PageData/PortfolioPage/PageDescriptionContent_PortfolioPage";
//#endregion

//#region --------------- ZigZag Content ---------------------------
import ZigZagContent_HangryGuardians from "../../../Data/PageData/PortfolioPage/HangryGuardians/ZigZagData";
import ZigZagContent_SpaceRunners from "../../../Data/PageData/PortfolioPage/SpaceRunners/ZigZagData";
import ZigZagContent_DragAndPull from "../../../Data/PageData/PortfolioPage/Drag_and_Pull/ZigZagData";
import ZigZagInfo_HaulAway from "../../../Data/PageData/PortfolioPage/HaulAway/ZigZagData";
import ZigZagInfo_WhatIf from "../../../Data/PageData/PortfolioPage/WhatIf/ZigZagData";
//#endregion

//#endregion



//The portfolio page will display all of the proudest work i have
export default function PortfolioPage() 
{
    const content =
        <div>
            <PageDescription info={PageDescriptionInfo_Default} content={PageDescriptionContent_PortfolioPage} />
            <ZigZag content={ZigZagInfo_HaulAway} info={ZigZag_Default} />
            <ZigZag content={ZigZagContent_SpaceRunners} info={ZigZag_Default} />
            <ZigZag content={ZigZagContent_HangryGuardians} info={ZigZag_Default} />
            <ZigZag content={ZigZagContent_DragAndPull} info={ZigZag_Default} />
            <ZigZag content={ZigZagInfo_WhatIf} info={ZigZag_Default} />
        </div>

    return (
        <div>
            <TopNavBar topNavBarData={TopNavBarInfo} selectedPageName="Portfolio" />
            <PageStructure content={content} info={PageStruct_Grey} />
            <StandardFooter footerInfo={FooterInfo} />
        </div>
    );
}
