import React from "react";
import style from "./SideBySide.module.css";

export default function SideBySide({ content, cssInfo_flipClasses, cssClass_SideBySideElement, cssClass_descriptionBg, cssClass_subjectBg })
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

    // const cssInfo_flipClasses = 
    // {
    // cssClass_flipped: cssModule.flipped,
    // cssClass_notFlipped: cssModule.notFlipped
    // }

    // cssClass_SideBySideElement = cssModule.SideBySideElement; //Can control the width of the elements here
    // cssClass_descriptionBg = cssModule.descriptionBgStyle;
    // cssClass_subjectBg = cssModule.subjectBgStyle;

    //#endregion

    const { subject, description, isFlipped } = content;

    //#region ------------- Root Style -----------------------
    let rootStyle;
    //If there is no cssClass of flipped/notflipped, then use default
    if (cssInfo_flipClasses === undefined && cssInfo_flipClasses.cssClass_flipped === undefined || cssInfo_flipClasses.cssClass_notFlipped === undefined)
    {
        rootStyle = isFlipped ? style.notFlipped : style.flipped;
    }
    else
    {
        rootStyle = isFlipped ? cssInfo_flipClasses.cssClass_flipped : cssInfo_flipClasses.cssClass_notFlipped;
    }
    //#endregion

    //#region -------------- Backgrounds Style ----------------------
    const descriptionBgClass = cssClass_descriptionBg !== undefined ? cssClass_descriptionBg : style.descriptionBgColor_Default;

    const subjectBgClass = cssClass_subjectBg !== undefined ? cssClass_subjectBg : style.subjectBgColor_Default;
    //#endregion

    //#region ----------------- SideBySide Element Style ------------------------
    const sideBySideElementStyle = cssClass_SideBySideElement !== undefined ? cssClass_SideBySideElement : style.sideBySideElement;
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