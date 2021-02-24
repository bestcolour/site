import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe({ aboutMeInfo })
{
    //#region AboutMeInfo Desconstruction
    const { textData, backgroundColor, color, profileImg } = aboutMeInfo;
    //#endregion

    //#region BoxBg Style
    const boxBgStyle =
    {
        backgroundColor: backgroundColor
    }
    //#endregion

    const textColorStyle =
    {
        color: color
    }

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
                    <h1 id={styles.profileName} style={textColorStyle}>{textData.name}</h1>

                    {/* Profile Pic */}
                    <div style={profilePicStyle} id={styles.profilePicture}></div>

                    {/* About me description */}
                    <p style={textColorStyle}>{textData.description}</p>

                </div>

            </div>
        </div>
    )
}