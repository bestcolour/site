import React from "react";
import styles from "./ImageButton.module.css"
// import {PageRouteData} from "../../../../Data/PageRouteData";
import { Link } from "react-router-dom";
import { GetButtonType, IsLinkToWithinSite } from "../ButtonFunctions";


export default function ImageButton({ content, onClickFunction })
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

    // const info = 
    // {
    //      onClickFunction : SomeMethod
    // }
    //#endregion

    const { imageSrc, buttonLink, target, width, height } = content;

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
    const buttonType = GetButtonType(buttonLink, onClickFunction);
    const isWithinSite = IsLinkToWithinSite(buttonLink);


    switch (buttonType)
    {
        case "FUNCTION_ONLY":
            //#region -------------- FUNCTION_ONLY ------------------
            finalJSX = <a   >
                <p style={buttonStyle} className={styles.image} onClick={onClickFunction}></p>
            </a>;
            //#endregion
            break;
        case "LINK_ONLY":
            //#region -------------- LINK_ONLY ------------------
            finalJSX = isWithinSite ?
                 <Link to={finalJSX} target={target} >
                    <p style={buttonStyle} className={styles.image} ></p>
                </Link>
                :
                  <a href={buttonLink} target={target} >
                    <p style={buttonStyle} className={styles.image} ></p>
                </a>;
            //#endregion
            break;

        case "LINK_AND_FUNCTION":
            //#region -------------- LINK_AND_FUNCTION ------------------
            finalJSX = isWithinSite ?
                 <Link to={finalJSX} target={target} onClick={onClickFunction} >
                    <p style={buttonStyle} className={styles.image} ></p>
                </Link>
                :
               <a href={buttonLink} target={target} onClick={onClickFunction} >
                    <p style={buttonStyle} className={styles.image} ></p>
                </a>;
            //#endregion
            break;

        default:
            break;
    }






    return (
        finalJSX
    );

}