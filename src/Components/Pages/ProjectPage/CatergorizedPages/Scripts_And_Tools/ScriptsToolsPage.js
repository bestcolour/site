import React from "react";
import styles from "./PortfolioPage.module.css";
import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";

//#region --------------- Import Common & Modules ----------------------
import StandardFooter from "../../../../Modules/StandardFooter";
import ZigZag from "../../../../Common/SectionTypes/ZigZag";
import PageStructure from "../../../../Common/PageStructure";
import PageDescription from "../../../../Common/SectionTypes/PageDescription";
import SideBySide from "../../../../Common/SectionTypes/SideBySide";
//#endregion

//#region ------------ Import Common's Info --------------
import { ZigZag_DescriptionBg_Black, ZigZag_SubjectRoot_OverwriteShadows } from "../../../../../Data/CommonInfo/ZigZag/ZigZagInfo";
import { SideBySide_CommonInfo_AlwaysVertical_FlipClasses, SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot, SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot } from "../../../../../Data/CommonInfo/SideBySide/SideBySide_CommonInfo";
import { PageStruct_Grey } from "../../../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import { PageDescriptionInfo_Default } from "../../../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion

//#region ==================== Import Content ==================================

//#region --------------- Common Content ---------------------
import PageDescriptionContent_ScriptsToolsPage from "../../../../../Data/PageData/ProjectPage/CatergorizedPages/Scripts_And_Tools/PageDescriptionContent_PortfolioPage";
//#endregion

//#region --------------- ZigZag Content ---------------------------
// import ZigZagContent_HangryGuardians from "../../../../../Data/PageData/PortfolioPage/HangryGuardians/ZigZagData";
// import ZigZagContent_SpaceRunners from "../../../../../Data/PageData/PortfolioPage/SpaceRunners/ZigZagData";
// import ZigZagContent_DragAndPull from "../../../../../Data/PageData/PortfolioPage/Drag_and_Pull/ZigZagData";
// import ZigZagInfo_HaulAway from "../../../../../Data/PageData/PortfolioPage/HaulAway/ZigZagData";
// import ZigZagInfo_WhatIf from "../../../../../Data/PageData/PortfolioPage/WhatIf/ZigZagData";
import ZigZagInfo_LEM from "../../../../../Data/PageData/PortfolioPage/LEM/ZigZagData";
import ZigZagInfo_WhatsappBot from "../../../../../Data/PageData/PortfolioPage/WhatsAppBot/ZigZagData";
// import ZigZagInfo_WonderValley from "../../../Data/PageData/PortfolioPage/WonderValley/ZigZagData";
import ZigZagInfo_PythonMacro from "../../../../../Data/PageData/PortfolioPage/PythonMacro/ZigZagData";
//#endregion

//#region --------------- SideBySide Content -------------------------
// import sideBySide_Content_HaulAway from "../../../../../Data/PageData/PortfolioPage/HaulAway/SideBySideContent";
// import sideBySide_Content_HangryGuardians from "../../../../../Data/PageData/PortfolioPage/HangryGuardians/SideBySideContent";
// import sideBySide_Content_Drag_and_Pull from "../../../../../Data/PageData/PortfolioPage/Drag_and_Pull/SideBySideContent";
// import sideBySide_Content_SpaceRunners from "../../../../../Data/PageData/PortfolioPage/SpaceRunners/SideBySideContent";
// import sideBySide_Content_WhatIf from "../../../../../Data/PageData/PortfolioPage/WhatIf/SideBySideContent";
import sideBySide_Content_LEM from "../../../../../Data/PageData/PortfolioPage/LEM/SideBySideContent";
import sideBySide_PythonMacro from "../../../../../Data/PageData/PortfolioPage/PythonMacro/SideBySideContent";
import sideBySide_Whatsappbot from "../../../../../Data/PageData/PortfolioPage/WhatsAppBot/SideBySideContent";
//#endregion

//#endregion



//The portfolio page will display all of the proudest work i have
export default function ScriptsToolsPage() 
{
    //#region ------------------------ Content ---------------------------------
    const content =
        <div>
            <PageDescription info={PageDescriptionInfo_Default} content={PageDescriptionContent_ScriptsToolsPage} />

            {/* =================== Desktop & Tablet ====================== */}
            <div className={styles.portfolioDesktopElements}>

                {/* --------- Whatsapp bot ---------- */}
                <ZigZag content={ZigZagInfo_WhatsappBot} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />
                
                {/* Python Macro */}
                <ZigZag content={ZigZagInfo_PythonMacro} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />

                {/* --------- LEM ---------- */}
                <ZigZag content={ZigZagInfo_LEM} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />



            </div>

            {/* =================== Mobile ====================== */}
            <div className={`${styles.portfolioMobileElements} ${GeneralStyles.white}`} >

                {/* --------- Whatsapp bot ---------- */}
                <SideBySide content={sideBySide_Whatsappbot} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />
                
                {/* --------- Python Macro ---------- */}
                <SideBySide content={sideBySide_PythonMacro} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

                {/* --------- LEM ---------- */}
                <SideBySide content={sideBySide_Content_LEM} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />

            </div>




        </div>
    //#endregion

    return (
        <div>
            <PageStructure content={content} info={PageStruct_Grey} />
            <StandardFooter />
        </div>
    );
}
