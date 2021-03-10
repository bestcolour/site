import React from "react";
import style from "./SideBySide.module.css";

export default function SideBySide({ content, cssInfo })
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

    // const cssInfo =
    // {
    //     cssStyle_flipped: cssModule.flipped
    //     ,
    //     cssStyle_notFlipped: cssModule.notFlipped
    //      ,
    //      cssStyle_SideBySideElement : cssModule.SideBySideElement
    // ,
    // cssStyle_descriptionBg : cssModule.descriptionBgStyle
    // ,
    // cssStyle_subjectBg : cssModule.subjectBgStyle
    // }

    //#endregion

    const { subject, description, isFlipped } = content;

    //#region ------------- Root Style -----------------------
    let rootStyle;
    //If there is no cssInfo added or no cssStyle of flipped/notflipped, then use default
    if (cssInfo === undefined || cssInfo.cssStyle_flipped === undefined || cssInfo.cssStyle_notFlipped === undefined)
    {
        rootStyle = isFlipped ? style.notFlipped : style.flipped;
    }
    else
    {
        rootStyle = isFlipped ? cssInfo.cssStyle_flipped : cssInfo.cssStyle_notFlipped;
    }
    //#endregion

    //#region -------------- Backgrounds Style ----------------------
    const descriptionBgClass = cssInfo !== undefined && cssInfo.cssStyle_descriptionBg !== undefined ? cssInfo.cssStyle_descriptionBg : style.descriptionBgColor_Default;

    const subjectBgClass = cssInfo !== undefined && cssInfo.cssStyle_subjectBg !== undefined ? cssInfo.cssStyle_subjectBg : style.subjectBgColor_Default;
    //#endregion

    //#region ----------------- SideBySide Element Style ------------------------
    const sideBySideElementStyle = cssInfo !== undefined && cssInfo.cssStyle_SideBySideElement !== undefined ? cssInfo.cssStyle_SideBySideElement : style.sideBySideElement;
    //#endregion



    return (
        <div className={`${rootStyle} ${style.sideBySideRoot}`}>
            <span className={`${sideBySideElementStyle} ${subjectBgClass}`} >
                {subject}
            </span>
            <span className={`${sideBySideElementStyle} ${descriptionBgClass}`} >
                {description}
            </span>
        </div>
    );
}