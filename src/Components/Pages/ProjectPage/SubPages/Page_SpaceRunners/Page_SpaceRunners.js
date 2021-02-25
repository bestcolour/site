//#region --------- Importing ------------
import React from "react";
import styles from "../SubPage_CommonStyles.module.css";
import columnStyle from "../../../../../CommonStyles/Columns.module.css";

//#region --------- Import Common ---------------
import PageStructure from "../../../../Common/PageStructure";
import StaticBackground from "../../../../Common/StaticBackground";
import PageDescription from "../../../../Common/SectionTypes/PageDescription"
import SideBySide from "../../../../Common/SectionTypes/SideBySide";
import Overlay from "../../../../Common/Overlay";
//#endregion 

//#region ---------------- Import Common Info --------------
import { PageDescriptionInfo_Default } from "../../../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
import StaticBackgroundInfo_Default from "../../../../../Data/CommonInfo/StaticBackground/StaticBackground_CommonInfo";
import { OverlayInfo_default } from "../../../../../Data/CommonInfo/Overlay/OverlayInfo_Default";
import { PageStruct_Black1, PageStruct_Transparent } from "../../../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import PageRouteData from "../../../../../Data/PageRouteData";
//#endregion

//#region --------- Import Data ------------------
//#region *************** PageDescription *****************
import { PageDescriptContent_pageTitle, PageDescriptContent_downloadSection } from "../../../../../Data/PageData/ProjectPage/SubProjectPages/SpaceRunners/PageDescriptionContent";
//#endregion

//#region *************** Side By Side Info *****************
import SideBySideContent_HangryGuardians_GameDescription from "../../../../../Data/PageData/ProjectPage/SubProjectPages/SpaceRunners/SideBySideInfo_GameDescription";
import SideBySideContent_HangryGuardians_ProjectDescription from "../../../../../Data/PageData/ProjectPage/SubProjectPages/SpaceRunners/SideBySideInfo_ProjectDescription";
//#endregion

//#region *************** Static Background *********************
import {staticBgContent_SpaceRunners} from "../../../../../Data/PageData/ProjectPage/SubProjectPages/SpaceRunners/StaticBackgroundContent";
//#endregion

//#endregion

//#endregion

export default function Page_SpaceRunners()
{

    //#region ---------- Hero Content ------------
    let heroPageTitle =
        <div className={styles.heroParent}>
            <div className={columnStyle.col3}></div>
            <div className={columnStyle.col6}>
                <Overlay content={<PageDescription info={PageDescriptionInfo_Default} content={PageDescriptContent_pageTitle} />} info={OverlayInfo_default} />
            </div>

            <div className={columnStyle.col3}></div>
        </div>
        ;

    heroPageTitle =
    {
        imageSrc: `${staticBgContent_SpaceRunners.titleHeroImageLink}`
        // imageSrc: `../..${PageRouteData.ResourcePath}HangryGuardians/Ice.jpg`
        ,
        jsxContent: <PageStructure content={heroPageTitle} info={PageStruct_Transparent} />
    };


    //#endregion

    //#region ---------- Main Content ------------
    let sideBySideContent =
        <>
            <div className={styles.topBotPadding}>
                <SideBySide content={SideBySideContent_HangryGuardians_GameDescription} />
                <br />
                <br />
                <SideBySide content={SideBySideContent_HangryGuardians_ProjectDescription} />
            </div>
        </>
        ;
    sideBySideContent = <PageStructure content={sideBySideContent} info={PageStruct_Black1} />;

    //#endregion



    //#region ---------- Reflection Title ------------

   
    let heroReflectionTitle =
        <div className={styles.heroParent}>
            <div className={columnStyle.col3}></div>
            <div className={columnStyle.col6}>
                <Overlay content={<PageDescription content={PageDescriptContent_downloadSection} info={PageDescriptionInfo_Default} />} info={OverlayInfo_default} />
                {/* <PageDescription info={PageDescriptionInfo_Default} content={PageDescriptContent_reflectionTitle} /> */}
            </div>
            <div className={columnStyle.col3}></div>
        </div>
        ;

    heroReflectionTitle =
    {
        imageSrc: `${staticBgContent_SpaceRunners.downloadHeroImageLink}`
        // imageSrc: `../..${PageRouteData.ResourcePath}HangryGuardians/Tunel&Ice_edited.jpg`
        ,
        jsxContent: <PageStructure content={heroReflectionTitle} info={PageStruct_Transparent} />
    }
    //#endregion

    return (
        <>
            <StaticBackground info={StaticBackgroundInfo_Default} content={heroPageTitle} />
            {sideBySideContent}
            <StaticBackground info={StaticBackgroundInfo_Default} content={heroReflectionTitle} />
        </>
    );
}