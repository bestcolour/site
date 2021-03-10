import React from "react";
import styles from "./TextButton.module.css";
import { Link } from "react-router-dom";
import { GetButtonType, IsLinkToWithinSite } from "../ButtonFunctions";

export default function TextButton({ content, onClickFunction, CssClass_TextButtonElement }) 
{
    //#region ----------- Template ---------------
    // const TextButtonInfo_app =
    // {
    //     text: "lalalala"
    //     , buttonLink: "#"
    //     , target : ""
    //     , backgroundColor : "red"
    //     , padding : "2% 2% 2% 2%"
    // }

    // const CssClass_TextButtonElement = cssModule.class;

    //#endregion

    const { text, buttonLink, target } = content;
    // const { text, buttonLink, target, backgroundColor, padding } = content;

    // const bgStyle =
    // {
    //     backgroundColor: backgroundColor
    //     , padding: padding
    // }


    //#region --------------- CSS Styling -------------
    const finalClass_TextButtonElement = CssClass_TextButtonElement !== undefined ? CssClass_TextButtonElement : styles.textButtonElement_Default;
    //#endregion


    let finalJSX;


    //linkToWithinSite checks if you want to direct the user to a webpage outside of urs
    const buttonType = GetButtonType(buttonLink, onClickFunction);
    const isWithinSite = IsLinkToWithinSite(buttonLink);




    switch (buttonType)
    {
        case "FUNCTION_ONLY":
            //#region -------------- FUNCTION_ONLY ------------------
            finalJSX = <a onClick={onClickFunction} className={`${styles.button} ${finalClass_TextButtonElement}`}>
                {text}
            </a>;
            //#endregion
            break;
        case "LINK_ONLY":
            //#region -------------- LINK_ONLY ------------------
            finalJSX = isWithinSite ?
                <Link to={buttonLink} target={target} className={`${styles.button} ${finalClass_TextButtonElement}`}>
                    {text}
                </Link>
                :
                <a href={buttonLink} target={target} className={`${styles.button} ${finalClass_TextButtonElement}`}>
                    {text}
                </a>;
            //#endregion
            break;

        case "LINK_AND_FUNCTION":
            //#region -------------- LINK_AND_FUNCTION ------------------
            finalJSX = isWithinSite ?
                <Link to={buttonLink} target={target} className={`${styles.button} ${finalClass_TextButtonElement}`} onClick={onClickFunction}>
                    {text}
                </Link>
                :
                <a href={buttonLink} target={target} className={`${styles.button} ${finalClass_TextButtonElement}`} onClick={onClickFunction}>
                    {text}
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
