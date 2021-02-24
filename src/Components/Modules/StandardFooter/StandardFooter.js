import React from "react";
import styles from "./StandardFooter.module.css";

export default function StandardFooter({ footerInfo })
{
    const { backgroundColor, color, creatorName } = footerInfo;

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