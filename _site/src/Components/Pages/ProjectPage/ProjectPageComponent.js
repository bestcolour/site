import React from "react";
import styles from "./ProjectPage.module.css";
import GeneralStyles from "../../../CommonStyles/GeneralStyles.module.css";


//#region --------------- Import Common & Modules ----------------------
import ZigZag from "../../Common/SectionTypes/ZigZag";
import PageStructure from "../../Common/PageStructure";
import PageDescription from "../../Common/SectionTypes/PageDescription";
import SideBySide from "../../Common/SectionTypes/SideBySide";
//#endregion

//#region ------------ Import Common's Info --------------
import { ZigZag_DescriptionBg_Black, ZigZag_SubjectRoot_OverwriteShadows } from "../../../Data/CommonInfo/ZigZag/ZigZagInfo";
import { SideBySide_CommonInfo_AlwaysVertical_FlipClasses, SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot, SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot } from "../../../Data/CommonInfo/SideBySide/SideBySide_CommonInfo";
import { PageStruct_Grey, PageStruct_Transparent } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import { PageDescriptionInfo_Default } from "../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion
//#region --------------- Common Content ---------------------
import ProjectPage_PageDescriptionContent from "../../../Data/PageData/ProjectPage/ProjectPage_PageDescriptionContent";
//#endregion


//#region --------------- ZigZag Content ---------------------------
import ZigZagInfo_Tools_And_Scripts from "../../../Data/PageData/ProjectPage/Scripts_And_Tools/ZigZagData";
import ZigZagInfo_Games from "../../../Data/PageData/ProjectPage/Games/ZigZagData";
//#endregion

//#region --------------- SidebySide Content ---------------------------
import sideBySide_Content_ToolsAndScripts from "../../../Data/PageData/ProjectPage/Scripts_And_Tools/SideBySideContent";
import sideBySide_Content_Games from "../../../Data/PageData/ProjectPage/Games/SideBySideContent";
//#endregion

///Renders just the default normal page
export default function ProjectPageComponent() {


    const content =
        <div>
            <PageDescription info={PageDescriptionInfo_Default} content={ProjectPage_PageDescriptionContent} />

            {/* === Desktop Elements === */}
            <div className={styles.portfolioDesktopElements}>
                <ZigZag content={ZigZagInfo_Tools_And_Scripts} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />
                <ZigZag content={ZigZagInfo_Games} cssClass_DescriptionRoot={ZigZag_DescriptionBg_Black} cssClass_SubjectRoot={ZigZag_SubjectRoot_OverwriteShadows} />


            </div>


            <div className={`${styles.portfolioMobileElements} ${GeneralStyles.white}`} >
                {/* --------- Haul Away ---------- */}
                <SideBySide content={sideBySide_Content_ToolsAndScripts} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />
                <SideBySide content={sideBySide_Content_Games} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_descriptionRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot} cssClass_subjectRoot={SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot} />
            </div>


        </div>



    return (
        <div>
            <PageStructure content={content} info={PageStruct_Grey} />
        </div>
    );
}