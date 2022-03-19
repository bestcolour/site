import React from "react";
import styles from "./PortfolioPage.module.css";
import GeneralStyles from "../../../CommonStyles/GeneralStyles.module.css";

//#region --------------- Import Common & Modules ----------------------
import StandardFooter from "../../Modules/StandardFooter";
import TopNavBar from "../../Modules/TopNavBar";
import ZigZag from "../../Common/SectionTypes/ZigZag";
import PageStructure from "../../Common/PageStructure";
import PageDescription from "../../Common/SectionTypes/PageDescription";
import SideBySide from "../../Common/SectionTypes/SideBySide";
//#endregion

//#region ------------ Import Common's Info --------------
import { ZigZag_DescriptionBg_Black, ZigZag_SubjectRoot_OverwriteShadows } from "../../../Data/CommonInfo/ZigZag/ZigZagInfo";
import { SideBySide_CommonInfo_AlwaysVertical_FlipClasses, SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot, SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot } from "../../../Data/CommonInfo/SideBySide/SideBySide_CommonInfo";
import { PageStruct_Grey } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import { PageDescriptionInfo_Default } from "../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion

//#region ==================== Import Content ==================================

//#region --------------- Common Content ---------------------
import PageDescriptionContent_PortfolioPage from "../../../Data/PageData/PortfolioPage/PageDescriptionContent_PortfolioPage";
//#endregion

//#region --------------- ZigZag Content ---------------------------
import ZigZagContent_HangryGuardians from "../../../Data/PageData/PortfolioPage/HangryGuardians/ZigZagData";
import ZigZagContent_SpaceRunners from "../../../Data/PageData/PortfolioPage/SpaceRunners/ZigZagData";
import ZigZagContent_DragAndPull from "../../../Data/PageData/PortfolioPage/Drag_and_Pull/ZigZagData";
import ZigZagInfo_HaulAway from "../../../Data/PageData/PortfolioPage/HaulAway/ZigZagData";
import ZigZagInfo_WhatIf from "../../../Data/PageData/PortfolioPage/WhatIf/ZigZagData";
import ZigZagInfo_LEM from "../../../Data/PageData/PortfolioPage/LEM/ZigZagData";
// import ZigZagInfo_WonderValley from "../../../Data/PageData/PortfolioPage/WonderValley/ZigZagData";
import ZigZagInfo_PythonMacro from "../../../Data/PageData/PortfolioPage/PythonMacro/ZigZagData";
//#endregion

//#region --------------- SideBySide Content -------------------------
import sideBySide_Content_HaulAway from "../../../Data/PageData/PortfolioPage/HaulAway/SideBySideContent";
import sideBySide_Content_HangryGuardians from "../../../Data/PageData/PortfolioPage/HangryGuardians/SideBySideContent";
import sideBySide_Content_Drag_and_Pull from "../../../Data/PageData/PortfolioPage/Drag_and_Pull/SideBySideContent";
import sideBySide_Content_SpaceRunners from "../../../Data/PageData/PortfolioPage/SpaceRunners/SideBySideContent";
import sideBySide_Content_WhatIf from "../../../Data/PageData/PortfolioPage/WhatIf/SideBySideContent";
import sideBySide_Content_LEM from "../../../Data/PageData/PortfolioPage/LEM/SideBySideContent";
import sideBySide_PythonMacro from "../../../Data/PageData/PortfolioPage/PythonMacro/SideBySideContent";
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
            <div className={styles.portfolioDesktopElements}>
                {/* --------- Haul Away ---------- */}
                <ZigZag content={ZigZagInfo_HaulAway} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* Python Macro */}
                <ZigZag content={ZigZagInfo_PythonMacro} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* --------- SpaceRunners ---------- */}
                <ZigZag content={ZigZagContent_SpaceRunners} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* --------- Hangry Guardians ---------- */}
                <ZigZag content={ZigZagContent_HangryGuardians} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* --------- What If ---------- */}
                <ZigZag content={ZigZagInfo_WhatIf} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* --------- Drag & Pull ---------- */}
                <ZigZag content={ZigZagContent_DragAndPull} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />
                
                {/* --------- LEM ---------- */}
                <ZigZag content={ZigZagInfo_LEM} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />
                {/* --------- Wonder Valley ---------- */}
                {/* <ZigZag content={ZigZagInfo_WonderValley} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} /> */}


            </div>

            {/* =================== Mobile ====================== */}
            <div className={`${styles.portfolioMobileElements} ${GeneralStyles.white}`} >
                {/* --------- Haul Away ---------- */}
                <SideBySide content={sideBySide_Content_HaulAway} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

                {/* --------- Python Macro ---------- */}
                <SideBySide content={sideBySide_PythonMacro} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />


                {/* --------- SpaceRunners ---------- */}
                <SideBySide content={sideBySide_Content_SpaceRunners} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />


                {/* --------- Hangry Guardians ---------- */}
                <SideBySide content={sideBySide_Content_HangryGuardians} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

                {/* --------- WhatIf ---------- */}
                <SideBySide content={sideBySide_Content_WhatIf} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

                {/* --------- Drag & Pull ---------- */}
                <SideBySide content={sideBySide_Content_Drag_and_Pull} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

                {/* --------- LEM ---------- */}
                <SideBySide content={sideBySide_Content_LEM} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />


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
