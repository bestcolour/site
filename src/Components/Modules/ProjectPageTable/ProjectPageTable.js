import React from "react";

//#region Import Common
import CardTable from "../../Common/CardTable";
import PageDescription from "../../Common/SectionTypes/PageDescription";
//#endregion
//#region --------------- Import Common Info --------------
import { PageDescriptionInfo_Default } from "../../../Data/CommonInfo/PageDescription/PageDescription_CommonInfo";
//#endregion

export default function ProjectPageTable({ cardTableInfo, pageDescriptorContent })
{

    return (
        <div >
            <PageDescription content={pageDescriptorContent} info={PageDescriptionInfo_Default} />
            <CardTable info={cardTableInfo} />
        </div>
    );
}