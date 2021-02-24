import React from "react";
import columnStyles from "../../../CommonStyles/Columns.module.css";
import styles from "./PageStructure.module.css";

export default function PageStructure({ content, info })
{
    //#region ------------ Template -----------------
    // const PageStructureInfo =
    // {
    //     sideBgColor: "#909090"
    //     ,
    //     centerBgColor: "#909090"
    // }
    //#endregion

    const sideStyle = {
        backgroundColor: info.sideBgColor
    }

    const centerStyle = {
        backgroundColor: info.centerBgColor
    }


    return (
        <div className={styles.content} style={sideStyle}>
            <div className={columnStyles.col1} style={sideStyle}></div>
            <div className={columnStyles.col10} style={centerStyle}>{content}</div>
            <div className={columnStyles.col1} style={sideStyle}></div>
        </div>
    )
}
