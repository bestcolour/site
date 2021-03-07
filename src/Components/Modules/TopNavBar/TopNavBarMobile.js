import React, { useState } from "react";
import { Link } from "react-router-dom";

import FAImageButton from "../../Common/Button/FAImageButton";
import styles from "./TopNavBarMobile.module.css";
import generalStyles from "../../../CommonStyles/GeneralStyles.module.css";

export default function TopNavBarMobile({ linksData, selectedPageName })
{

    function OnClicked_FAImageButton()
    {
        updateIsOpen(true);
    }

    function OnClicked_ReturnPanel()
    {
        updateIsOpen(false);
    }

    //#region =========== Content ================
    //#region ----------- FAImage -------------
    const FAImageButtonContent_example =
    {
        //You can wrap a <p></p> around this to make other arrangements
        imageJSX: <i className="fas fa-bars fa-2x"></i>
        ,
        buttonLink: null
        ,
        target: ""
    }
    //#endregion


    //#region ----------- Links Array -------------
    const linksJSX = [];
    for (const linkData of linksData)
    {
        //Add a different jsx with a selectedlink class attached to it if this linkData's linkName == selectedPageName
        const finalJSX = linkData.linkName === selectedPageName
            ?
            <div className={styles.linkElement} >
                <Link to={linkData.link} className={generalStyles.selectedLink} >
                    {linkData.linkName}
                </Link>
            </div>
            :
            <div className={styles.linkElement}>
                <Link to={linkData.link}  >
                    {linkData.linkName}
                </Link>
            </div>;


        linksJSX.push(finalJSX);
    }
    //#endregion

    //#endregion

    //#region -------------- Logic -----------------
    const [isOpen, updateIsOpen] = useState(false);

    //Toggle the panel class according to the current state of isOpen
    const linkPanelClass = isOpen ? styles.linkPanelActive : styles.linkPanelInactive;
    const returnPanelClass = isOpen ? styles.returnPanelActive : styles.returnPanelInactive;
    //#endregion


    return (
        <div id={styles.mobileRoot}>
            {/* =================== Hamburger Button ==================== */}
            <div id={styles.hamburgerButton}>
                <FAImageButton content={FAImageButtonContent_example} onClickFunction={OnClicked_FAImageButton} />
            </div>

            {/* =================== Links Panel ==================== */}
            <div id={styles.linkPanel} className={linkPanelClass} >
                {linksJSX}
            </div>

            {/* =================== Return Panel ==================== */}
            <div id={styles.returnPanel} onClick={OnClicked_ReturnPanel} className={returnPanelClass} />
        </div>
    );
}