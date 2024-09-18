import React from "react";
import style from "./PageDescription.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";


export default function PageDescription({ info, content })
{
    //#region ------------ Template -----------------
    //     const content =
    // {
    //     pageTitle: <div>Project Table</div>
    //     ,
    //     description: <div>"In this page, I store all of my past projects. The good and the bad are all in here as I think it is good to learn from mistakes and keep doing what is right."</div>
    //     ,
    //      Xalignment: "left/right/center"
    // }
    // const info =
    // {
    //     //Text color
    //     titleColor: "#EBE9E8"
    //     ,
    //     descriptionColor: "#EBE9E8"
    // }
    //#endregion

    const { pageTitle, description, xAlignment } = content;
    const { titleColor, descriptionColor } = info;

    const titleStyle = { color: titleColor };
    const descriptionStyle = { color: descriptionColor };

    //#region ============== Determining Xalignment Style ===================
    let xAlignmentStyle;
    switch (xAlignment)
    {
        case "left":
            xAlignmentStyle = style.xAlignmentLeft;
            break;
        case "right":
            xAlignmentStyle = style.xAlignmentRight;
            break;
        default:
            xAlignmentStyle = style.xAlignmentCenter;
            break;
    }
    //#endregion

    return (
        <div className={`${style.pageDescriptionContentHolder} ${xAlignmentStyle}`} >
            <h6 style={titleStyle} >{pageTitle}</h6>
            {description === null ? <div /> : <br />}
            <p style={descriptionStyle}> {description}</p>
        </div>
    );
}
