import React from "react";

export default function Overlay({ info, content })
{
    //#region ============== Template =============
    // const OverlayInfo =
    // {
    //     mainColor: "rgba(57, 57, 57, .5)"
    //     ,
    //     borderStyle: "3px solid #00D4FE"
    // }
    //#endregion

    
    const { mainColor, borderStyle } = info;

    const overlayStyle =
    {
        backgroundColor: mainColor
        ,
        border: borderStyle
    }

    return (
        <div style={overlayStyle} >
            {content}
        </div>
    );
}