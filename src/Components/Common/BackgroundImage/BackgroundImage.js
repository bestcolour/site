import React from "react";

export default function BackgroundImage({ info })
{
    //#region --------- Template -----------
    // const BackgroundImageInfo_hangryGuardiansSubject =
    // {
    // bgImageSrc : `../..${PageRouteData.ResourcePath}HangryGuardians/SplashArt.jpg`
    // ,cssStyling: styles.subjectBgImageClassStyle
    // }
    //#endregion

    const { bgImageSrc, cssStyling } = info;

    const style =
    {
        backgroundImage: `url(${bgImageSrc})`
    };

    return (
        <div style={style} className={cssStyling}></div>
    );
}