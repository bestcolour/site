import React from "react";
import style from "./SideBySide.module.css";

export default function SideBySide({ content, info, cssInfo })
{
    //#region ---------- Template ----------
    // const content =
    // {
    //     subject: <div>Subject</div>
    //     ,
    //     description:
    //         <div>
    //             <h6>Title</h6>
    //             <p>Text</p>
    //         </div>
    //     ,
    //     //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
    //     isFlipped: false
    // };
    // const info  = 
    // {
    //     subjectBackgroundColor : "red"
    //     ,
    //     descriptionBackgroundColor:"blue"
    // };
    // const cssInfo =
    // {
    //     cssStyle_flipped: cssModule.flipped
    //     ,
    //     cssStyle_notFlipped: cssModule.notFlipped
    //      ,
    //      cssStyle_SideBySideElement : cssModule.SideBySideElement
    // }

    //#endregion

    const { subject, description, isFlipped } = content;

    //#region ------------- Root Style -----------------------
    let rootStyle;
    //If there is no cssInfo added, then use default
    if (cssInfo === undefined)
    {
        rootStyle = isFlipped ? style.notFlipped : style.flipped;
    }
    else
    {
        rootStyle = isFlipped ? cssInfo.cssStyle_flipped : cssInfo.cssStyle_notFlipped;
    }
    //#endregion

    //#region -------------- Backgrounds Style ----------------------
    const descriptionBgStyle =
    {
        backgroundColor: info === undefined ? "transparent" : info.descriptionBackgroundColor
    }

    const subjectBgStyle =
    {
        backgroundColor: info === undefined ? "transparent" : info.subjectBackgroundColor
    }
    //#endregion

    //#region ----------------- SideBySide Element Style ------------------------
    const sideBySideElementStyle = cssInfo !== undefined && cssInfo.cssStyle_SideBySideElement !== undefined? cssInfo.cssStyle_SideBySideElement : style.sideBySideElement;
    //#endregion



    return (
        <div className={`${rootStyle} ${style.sideBySideRoot}`}>
            <span className={sideBySideElementStyle} style={subjectBgStyle}>
                {subject}
            </span>
            <span className={sideBySideElementStyle} style={descriptionBgStyle}>
                {description}
            </span>
        </div>
    );
}