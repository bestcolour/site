import React from "react";
import styles from "./StandardFooter.module.css";
import FooterData from "../../../Data/ModuleData/FooterData";

export default function StandardFooter()
{
    const { backgroundColor, color, creatorName } = FooterData;

    const bgColorStyle =
    {
        backgroundColor: backgroundColor
    }

    const textColorStyle =
    {
        color: color
    }

    const date = new Date();
    const year = date.getFullYear();
    const copyRight = `©${year} by ${creatorName}`

    return (
        <div id={styles.contentHolder} style={bgColorStyle}>
            <p id={styles.content} style={textColorStyle}>
                {copyRight}
            </p>
        </div>
    );
}