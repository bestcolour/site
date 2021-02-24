import React from "react";
import styles from "./StaticBackground.module.css";

export default function StaticBackground({ info, content })
{
    //#region ----------- Template -------------
    // const info = 
    // {
    //     backgroundStyle : 
    //      {
    //          height: "50px"
    //      }
    //      ,
    //          contentYOffset : "40px"
    // }

    // const content =
    // {
        // jsxContent: <div></div>
        // , imageSrc: "Lalalla"
    // }

    //#endregion

    const { backgroundStyle } = info;
    const { jsxContent, imageSrc } = content;

    //#region ------------ Bg Style ------------------
    let finalBgStyle =
    {
        backgroundImage: `url(${imageSrc})`
    };
    
    finalBgStyle = { ...backgroundStyle, ...finalBgStyle };
    console.log(finalBgStyle);
    //#endregion


    const emptySpaceStyle =
    {
        height: info.contentYOffset
    }

    return (
        <div style={finalBgStyle} className={styles.bg}>
            <div style={emptySpaceStyle}></div>
            <div >{jsxContent}</div>
        </div>
    );
}
