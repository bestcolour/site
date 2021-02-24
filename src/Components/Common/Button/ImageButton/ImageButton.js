import React from "react";
import styles from "./ImageButton.module.css"
import PageRouteData from "../../../../Data/PageRouteData";


export default function ImageButton({ info })
{
    //#region ---------------- Template --------------------
    // const ImageButtonInfo_example =
    // {
    //     imageSrc: `../..${PageRouteData.LandingPagePath}/Resources/Images/Logos/google-play-badge.png`
    //     ,
    //     buttonLink: "https://play.google.com/store/apps/details?id=com.ET.HangryGods&hl=en"
    //     ,
    //     target: "_blank"
    //     ,
    //     width: "11.5em"
    //     ,
    //     height: "3.5em"
    // }
    //#endregion

    const { imageSrc, buttonLink, target, width, height } = info;

    //Since react doesnt support background images in css modules
    const buttonStyle =
    {
        backgroundImage: `url(${imageSrc})`
        ,
        width: width
        ,
        height: height
    };

    return (
        <a href={buttonLink} target={target}  >
            <p style={buttonStyle} className={styles.image}></p>
        </a>
    );

}