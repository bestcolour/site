import React from "react";
import styles from "./FAImageButton.module.css";
import { GetButtonType, IsLinkToWithinSite } from "../ButtonFunctions";
import { Link } from "react-router-dom";

export default function FAImageButton({ content, onClickFunction })
{
    //#region ------------------ Template -----------------------
    // const FAImageButtonContent_example =
    // {
    //     //You can wrap a <p></p> around this to make other arrangements
    //     imageJSX:<i class="fab fa-readme fa-2x"></i> 
    //     ,
    //     buttonLink: null
    //     ,
    //     target: ""
    // }
    // const onClickFunction = SomeMethod;
    //#endregion

    const { imageJSX, buttonLink, target } = content;

    let finalJSX;
    const buttonType = GetButtonType(buttonLink, onClickFunction);
    const isWithinSite = IsLinkToWithinSite(buttonLink);


    switch (buttonType)
    {
        case "FUNCTION_ONLY":
            //#region -------------- FUNCTION_ONLY ------------------
            finalJSX = <a onClick={onClickFunction}  >
                <div className={styles.FAHolder}>
                    {imageJSX}
                </div>
            </a>;
            //#endregion
            break;
        case "LINK_ONLY":
            //#region -------------- LINK_ONLY ------------------
            finalJSX = isWithinSite ?
                <Link href={buttonLink} target={target}   >
                    <div className={styles.FAHolder}>
                        {imageJSX}
                    </div>
                </Link>
                :
                <a href={buttonLink} target={target}   >
                    <div className={styles.FAHolder}>
                        {imageJSX}
                    </div>
                </a>
                ;
            //#endregion
            break;

        case "LINK_AND_FUNCTION":
            //#region -------------- LINK_AND_FUNCTION ------------------
            finalJSX = isWithinSite ?
                <Link href={buttonLink} target={target} onClick={onClickFunction}  >
                    <div className={styles.FAHolder}>
                        {imageJSX}
                    </div>
                </Link>
                :
                <a href={buttonLink} target={target} onClick={onClickFunction}  >
                    <div className={styles.FAHolder}>
                        {imageJSX}
                    </div>
                </a>;
            //#endregion
            break;

        default:
            // finalJSX = <div></div>
            break;
    }

    return (
        finalJSX
    );

}