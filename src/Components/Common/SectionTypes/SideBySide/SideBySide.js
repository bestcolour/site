import React from "react";
import style from "./SideBySide.module.css";

export default function SideBySide({ content })
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
    // }
    //#endregion

    const { subject, description, isFlipped } = content;

    const rootStyle = isFlipped ? style.notFlipped : style.flipped;

    return (
        <div className={`${rootStyle} ${style.sideBySideRoot}`}>
            <span>
                {subject}
            </span>
            <span className= {style.textDescription}>
                {description}
            </span>
        </div>
    );
}