import React from "react";
import styles from "./ImageButton.module.css"
import PageRouteData from "../../../../Data/PageRouteData";
import { Link } from "react-router-dom";


export default function ImageButton({ info })
{
    //#region ---------------- Template --------------------
    // const ImageButtonInfo_example =
    // {
    //     imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/google-play-badge.png`
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

    let finalJSX;
    //linkToWithinSite checks if you want to direct the user to a webpage outside of urs
    const linkToWithinSite = !buttonLink.includes("https://");
    if (linkToWithinSite)
    {
        finalJSX = <Link to={finalJSX} target={target}  >
            <p style={buttonStyle} className={styles.image}></p>
        </Link>;
    }
    else
    {
        finalJSX = <a href={buttonLink} target={target}  >
            <p style={buttonStyle} className={styles.image}></p>
        </a>;
    }


    return (
        finalJSX 
    );

}