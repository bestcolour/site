import React from "react";
import styles from "./TextButton.module.css";
import { Link } from "react-router-dom";

export default function TextButton({ info }) 
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
    //#endregion

    const { text, buttonLink, target, backgroundColor, padding } = info;

    const bgStyle =
    {
        backgroundColor: backgroundColor
        , padding: padding
    }

    let finalJSX;
    const linkToWithinSite = !buttonLink.includes("https://");
    if (linkToWithinSite)
    {
        finalJSX =
            <Link to={buttonLink} style={bgStyle} target={target} className={styles.button}>
                {text}
            </Link>
    }
    else
    {
        finalJSX =
            <a href={buttonLink} style={bgStyle} target={target} className={styles.button}>
                {text}
            </a>
    }


    return (
        finalJSX
    );

}
