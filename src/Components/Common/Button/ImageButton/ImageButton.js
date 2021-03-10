import React from "react";
import styles from "./ImageButton.module.css"
import { Link } from "react-router-dom";
import { GetButtonType, IsLinkToWithinSite } from "../ButtonFunctions";


export default function ImageButton({ content, onClickFunction, cssClass_BackgroundImageElement })
{
    //#region ---------------- Template --------------------
    // const ImageButtonInfo_example =
    // {
    //     imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/google-play-badge.png`
    //     ,
    //     buttonLink: "https://play.google.com/store/apps/details?id=com.ET.HangryGods&hl=en"
    //     ,
    //     target: "_blank"
    // }

    // const info = 
    // {
    //      onClickFunction : SomeMethod
    // }

    // const cssClass_BackgroundImageElement = cssModule.class;

    //#endregion

    const { imageSrc, buttonLink, target } = content;
    // const { imageSrc, buttonLink, target, width, height } = content;

    //Since react doesnt support background images in css modules
    const buttonStyle =
    {
        backgroundImage: `url(${imageSrc})`
        // ,
        // width: width
        // ,
        // height: height
    };

    let finalJSX;
    //linkToWithinSite checks if you want to direct the user to a webpage outside of urs
    const buttonType = GetButtonType(buttonLink, onClickFunction);
    const isWithinSite = IsLinkToWithinSite(buttonLink);

    //#region ------------- CSS Styling ------------------
    console.log(cssClass_BackgroundImageElement=== undefined);
    const finalClass_BackgroundImageElement = cssClass_BackgroundImageElement !== undefined ? cssClass_BackgroundImageElement : styles.imageBackgroundRoot_Default;

    //#endregion


    switch (buttonType)
    {
        case "FUNCTION_ONLY":
            //#region -------------- FUNCTION_ONLY ------------------
            finalJSX = <a>
                <p style={buttonStyle} className={`${styles.image} ${finalClass_BackgroundImageElement}`} onClick={onClickFunction}></p>
            </a>;
            //#endregion
            break;
        case "LINK_ONLY":
            //#region -------------- LINK_ONLY ------------------
            finalJSX = isWithinSite ?
                <Link to={finalJSX} target={target} >
                    <p style={buttonStyle} className={`${styles.image} ${finalClass_BackgroundImageElement}`} ></p>
                </Link>
                :
                <a href={buttonLink} target={target} >
                    <p style={buttonStyle} className={`${styles.image} ${finalClass_BackgroundImageElement}`} ></p>
                </a>;
            //#endregion
            break;

        case "LINK_AND_FUNCTION":
            //#region -------------- LINK_AND_FUNCTION ------------------
            finalJSX = isWithinSite ?
                <Link to={finalJSX} target={target} onClick={onClickFunction} >
                    <p style={buttonStyle} className={`${styles.image} ${finalClass_BackgroundImageElement}`} ></p>
                </Link>
                :
                <a href={buttonLink} target={target} onClick={onClickFunction} >
                    <p style={buttonStyle} className={`${styles.image} ${finalClass_BackgroundImageElement}`} ></p>
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