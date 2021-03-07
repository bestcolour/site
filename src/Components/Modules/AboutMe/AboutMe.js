import React from "react";
import styles from "./AboutMe.module.css";
import GeneralStyles from "../../../CommonStyles/GeneralStyles.module.css";

//#region ------------- Data ----------------
import AboutMeData from "../../../Data/PageData/LandingPage/AboutMeData";
//#endregion

export default function AboutMe()
{
    //#region AboutMeInfo Desconstruction
    const { textData, backgroundColor,  profileImg } = AboutMeData;
    //#endregion

    //#region BoxBg Style
    const boxBgStyle =
    {
        backgroundColor: backgroundColor
    }
    //#endregion

    // const textColorStyle =
    // {
    //     color: color
    // }

    //#region Profile Pic Style
    const profilePicStyle =
    {
        backgroundImage: `url(${profileImg})`
    }
    //#endregion

    return (
        <div>
            {/* ===== About Me Box ===== */}
            <div id={styles.boxBg} style={boxBgStyle}>

                <div id={styles.aboutMeContentHolder}>

                    {/* Name */}
                    <h1 id={styles.profileName} className={GeneralStyles.white}>{textData.name}</h1>

                    {/* Profile Pic */}
                    <div style={profilePicStyle} id={styles.profilePicture}></div>

                    {/* About me description */}
                    <p className={GeneralStyles.white}>{textData.description}</p>

                </div>

            </div>
        </div>
    )
}