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
            <div className={`${columnStyles.col_desktop_1} ${columnStyles.col_tablet_1} ${columnStyles.col_mobile_1}`} style={sideStyle} />
            <div className={`${columnStyles.col_desktop_10} ${columnStyles.col_tablet_10} ${columnStyles.col_mobile_10}`} style={centerStyle}>{content}</div>
            <div className={`${columnStyles.col_desktop_1} ${columnStyles.col_tablet_1} ${columnStyles.col_mobile_1}`} style={sideStyle} />
        </div>
    )
}
