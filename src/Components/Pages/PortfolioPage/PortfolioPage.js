import React from "react";
import styles from "./PortfolioPage.module.css";

//#region --------------- Import Common & Modules ----------------------
import StandardFooter from "../../Modules/StandardFooter";
import TopNavBar from "../../Modules/TopNavBar";
import ZigZag from "../../Common/SectionTypes/ZigZag";
import PageStructure from "../../Common/PageStructure";
import PageDescription from "../../Common/SectionTypes/PageDescription";
import SideBySide from "../../Common/SectionTypes/SideBySide";
//#endregion

//#region ------------ Import Common's Info --------------
import { ZigZag_Default } from "../../../Data/CommonInfo/ZigZag/ZigZagInfo_Default";
import { PageStruct_Grey } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import { PageDescriptionInfo_Default } from "../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion

//#region ==================== Import Content ==================================

//#region --------------- Common Content ---------------------
// import TopNavBarInfo from "../../../Data/ModuleData/TopNavBarData";
//import FooterInfo from "../../../Data/FooterData/FooterInfo";
import PageDescriptionContent_PortfolioPage from "../../../Data/PageData/PortfolioPage/PageDescriptionContent_PortfolioPage";
//#endregion

//#region --------------- ZigZag Content ---------------------------
import ZigZagContent_HangryGuardians from "../../../Data/PageData/PortfolioPage/HangryGuardians/ZigZagData";
import ZigZagContent_SpaceRunners from "../../../Data/PageData/PortfolioPage/SpaceRunners/ZigZagData";
import ZigZagContent_DragAndPull from "../../../Data/PageData/PortfolioPage/Drag_and_Pull/ZigZagData";
import ZigZagInfo_HaulAway from "../../../Data/PageData/PortfolioPage/HaulAway/ZigZagData";
import ZigZagInfo_WhatIf from "../../../Data/PageData/PortfolioPage/WhatIf/ZigZagData";
//#endregion

//#region --------------- SideBySide Content -------------------------

//#endregion

//#endregion



//The portfolio page will display all of the proudest work i have
export default function PortfolioPage() 
{
    //#region ------------------------ Content ---------------------------------
    const content =
        <div>
            <PageDescription info={PageDescriptionInfo_Default} content={PageDescriptionContent_PortfolioPage} />

            {/* =================== Desktop & Tablet ====================== */}
            <div className={styles.portfolioDesktopElement}>
                <ZigZag content={ZigZagInfo_HaulAway} info={ZigZag_Default} />
            </div>
            <div className={styles.portfolioDesktopElement}>
                <ZigZag content={ZigZagContent_SpaceRunners} info={ZigZag_Default} />
            </div>
            <div className={styles.portfolioDesktopElement}>
                <ZigZag content={ZigZagContent_HangryGuardians} info={ZigZag_Default} />
            </div>
            <div className={styles.portfolioDesktopElement}>
                <ZigZag content={ZigZagInfo_WhatIf} info={ZigZag_Default} />
            </div>
            <div className={styles.portfolioDesktopElement}>
                <ZigZag content={ZigZagContent_DragAndPull} info={ZigZag_Default} />
            </div>


            {/* =================== Mobile ====================== */}
<div className = {styles.portfolioMobileElement}>
<SideBySide />
</div>




        </div>
    //#endregion

    return (
        <div>
            <TopNavBar selectedPageName="Portfolio" />
            <PageStructure content={content} info={PageStruct_Grey} />
            <StandardFooter />
        </div>
    );
}
