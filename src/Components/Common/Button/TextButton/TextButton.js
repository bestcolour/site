import React from "react";
import styles from "./TextButton.module.css";

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
    
    const { text, buttonLink,target, backgroundColor,padding } = info;

    const bgStyle =
    {
        backgroundColor: backgroundColor
        ,padding:padding
    }


    return (
        <a href={buttonLink} style={bgStyle} target={target} className={styles.button}>
            {text}
        </a>
    );

}
