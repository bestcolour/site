import React from "react";
import generalStyles from "../../../CommonStyles/GeneralStyles.module.css";
import styles from "./TopNavBar.module.css";
import columnClasses from "../../../CommonStyles/Columns.module.css";
import {Link  } from "react-router-dom";

//What is expected from props:
//ThemeStyle:
//  - Background color according to theme
//Does not contain:
//  - Color theme for link text for states: Hover, Clicked,unclicekd
//linksData:
//  Is an array of object type with properties:
//  - Link name
//  - Link href
//  - any additional click event handling
export default function TopNavBarComponent({ linksData, styleData,selectedPageName })
{
    // Get the color values for bg and text according to light or dark theme from props
    // set the theme to the style property of the respective jsx element 
    const navbarBgStyle =
    {
        backgroundColor: `${styleData.backgroundColor}`
    }



    //#region Links Array
    const linksJSX = [];

    for (const linkData of linksData)
    {
        //Add a different jsx with a selectedlink class attached to it if this linkData's linkName == selectedPageName
        const finalJSX = linkData.linkName === selectedPageName
            ?
            <div className={styles.link} >
                <Link to={linkData.link} className={generalStyles.selectedLink} >
                    {linkData.linkName}
                </Link>
            </div>
            :
            <div className={styles.link}>
                <Link to={linkData.link}  >
                    {linkData.linkName}
                </Link>
            </div>;


        linksJSX.push(finalJSX);
    }
    //#endregion


    //#region Final Return
    return (
        <div>
            {/* Empty spacing worth the navbar's height since navbar is blocking content */}
            <div id={styles.navbarEmptySpace}></div>
            <div id={styles.navbarBg} style={navbarBgStyle} className={columnClasses.col12}>

                {/*===== Spacing =====*/}
                <div className={columnClasses.col1}></div>

                {/*===== Link holder box =====*/}
                <div id={styles.linksHolder} className={columnClasses.col10}>
                    {linksJSX}
                </div>

                {/*===== Spacing =====*/}
                <div className={columnClasses.col1}></div>
            </div>

        </div>
    );
    //#endregion 
}