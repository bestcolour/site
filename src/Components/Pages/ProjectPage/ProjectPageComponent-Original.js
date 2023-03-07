import React from "react";

//#region Import Common & Modules
import PageStructure from "../../Common/PageStructure";
import ProjectPageTable from "../../Modules/ProjectPageTable";
//#endregion

//#region Import Data
import CardTableInfo_ProjectPage from "../../../Data/PageData/ProjectPage/CardTableInfo_ProjectPage";
import PageDescriptionContent_ProjectPage from "../../../Data/PageData/ProjectPage/ProjectPage_PageDescriptionContent";
import {PageStruct_Grey} from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
//#endregion

///Renders just the default normal page
export default function ProjectPageComponent()
{
    const projectPageContent = <div><ProjectPageTable cardTableInfo={CardTableInfo_ProjectPage} pageDescriptorContent={PageDescriptionContent_ProjectPage} /></div>
    return (
        <PageStructure content={projectPageContent} info={PageStruct_Grey} />
    );
}