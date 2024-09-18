import React from "react";
import style from "./SideBySide.module.css";

export default function SideBySide({ content, cssInfo_flipClasses, cssClass_descriptionRoot, cssClass_subjectRoot })
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

    // cssClass_descriptionRoot = cssModule.descriptionBgStyle;
    // cssClass_subjectRoot = cssModule.subjectBgStyle;

    //#endregion

    const { subject, description, isFlipped } = content;

    //#region ------------- Root Style -----------------------
    let rootStyle;
    //If there is no cssClass of flipped/notflipped, then use default
    if (cssInfo_flipClasses !== undefined && cssInfo_flipClasses.cssClass_flipped !== undefined && cssInfo_flipClasses.cssClass_notFlipped !== undefined)
    {
        rootStyle = isFlipped ? cssInfo_flipClasses.cssClass_flipped : cssInfo_flipClasses.cssClass_notFlipped;
    }
    else
    {
        rootStyle = isFlipped ? style.notFlipped : style.flipped;
    }
    //#endregion

    //#region -------------- Backgrounds Style ----------------------
    const descriptionRootClass = cssClass_descriptionRoot !== undefined ? cssClass_descriptionRoot : style.descriptionRoot_Default;

    const subjectRootClass = cssClass_subjectRoot !== undefined ? cssClass_subjectRoot : style.subjectRoot_Default;
    //#endregion



    return (
        <div className={`${rootStyle} ${style.sideBySideRoot}`}>
            <span className={` ${subjectRootClass}`} >
                {subject}
            </span>
            <span className={` ${descriptionRootClass}`} >
                {description}
            </span>
        </div>
    );
}