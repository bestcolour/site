import React from "react";
import styles from "./FAImageButton.module.css";

export default function FAImageButton({ content })
{
    //#region ------------------ Template -----------------------
    // const FAImageButtonContent_example =
    // {
    //     //You can wrap a <p></p> around this to make other arrangements
    //     imageJSX:<i class="fab fa-readme fa-2x"></i> 
    //     ,
    //     buttonLink: "#"
    //     ,
    //     target: ""
    // }
    //#endregion

    const { imageJSX, buttonLink, target} = content;
    // const { imageJSX, buttonLink, target, width, height } = content;

    //Since react doesnt support background images in css modules
    // const buttonStyle =
    // {
    //     width: width
    //     ,
    //     height: height
    // };

    return (
        <a href={buttonLink} target={target}   >
            <div  className={styles.FAHolder}>
                {imageJSX}
            </div>
        </a>
    );

}