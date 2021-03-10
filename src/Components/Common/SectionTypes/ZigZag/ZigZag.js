import React from "react";
import style from "./ZigZag.module.css";

export default function ZigZag({ content, cssClass_ZigZagSizeStyle, cssClass_DescriptionBgStyle }) 
{
    //#region -------------------------- Template -------------------------------
    ////Content will hold:
    //const content =
    //{
    // subject : <div></div> //A <div> wrapper that wrap the subject content (that means you can style it from here too) 
    // , description: <div></div> //A <div> wrapper that wrap the descriptiontext about the subject content (that means you can style it from here too)
    // , isLeft: true //Boolean to determine if subject ought to be placed on the left or the right. Is left does not have a mobile support
    //};

    //   const  cssClass_ZigZagSizeStyle = cssModule.class;
    //    const cssClass_DescriptionBgStyle: cssModule.class;

    //#endregion

    //#region =================== Unpacking Content =========================
    const { subject, description, isLeft } = content;

    //#region ------------ Root ZigZag Styles ------------------

    const zigZagRoot_FlexDirection = isLeft ? style.zigZagRoot_IsLeft_FlexDir_Default : style.zigZagRoot_IsNotLeft_FlexDir_Default;

    //Applying shadow styles to each sections
    const subjectShadowClass = isLeft ? style.rightContentShadow : style.leftContentShadow;

    const descriptionShadowClass = !isLeft ? style.rightContentShadow : style.leftContentShadow;
    //#endregion


    //#endregion


    //#region ====================== Unpacking CSSInfo ==================

    //#region --------------- Description background Colour -------------------
    //If that cssStyle defined, use the inputed css style else use the default class 
    const descriptionBgClass =cssClass_DescriptionBgStyle !== undefined ? cssClass_DescriptionBgStyle : style.descriptionRoot_BgColor_Default;

    //#endregion

    //#region -------------- ZigZag Section Sizing Styles ---------------------
    //Ifthat cssClass_ZigZagSizeStyle defined, use the inputed css style else use the default class 
    const zigZagSizeClass = cssClass_ZigZagSizeStyle !== undefined ?cssClass_ZigZagSizeStyle : style.zigZagRoot_Size_Default;
    //#endregion

    //#endregion




    return (
        <div className={`${zigZagSizeClass} ${style.zigZagRoot} ${zigZagRoot_FlexDirection}`} >

            {/* ================= Render subject =================*/}
            <div className={`${style.subjectRoot} ${subjectShadowClass}`}>
                {subject}
            </div>

            {/*================== Render Description ================*/}
            <div className={`${style.descriptionRoot} ${descriptionShadowClass} ${descriptionBgClass}`} >
                {description}
            </div>

        </div>
    );
}

