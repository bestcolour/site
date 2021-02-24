import React from "react";
import style from "./ZigZag.module.css";

export default function ZigZag({ content, info }) 
{
    //#region -------------------------- Template -------------------------------
    ////Content will hold:
    ////1) A <div> wrapper that wrap the subject content (that means you can style it from here too) 
    ////2) A <h1> wrapper that wrap the title text about the subject content (that means you can style it from here too)
    ////3) A <p> wrapper that wrap the descriptiontext about the subject content (that means you can style it from here too)
    ////4) Boolean to determine if subject ought to be placed on the left or the right
    ////5) Text bg color
    //const content =
    //{
    // subject : <div></div>
    // , titleJSX: <h1 ></h1>
    // , paragraphJSX:<p ></p>
    // , isLeft: true
    //}
    
    ////Info will hold:
    // const info =
    // {
    //     textBgColor: "#5A5A5A"
    // }
    //#endregion

    const { subject, titleJSX, paragraphJSX, isLeft } = content;
    const { textBgColor } = info;

    //#region Styles
    const zigZagStyle =
    {
        flexDirection: isLeft ? "row-reverse" : "row"
    }

    const subjectClass = isLeft ? style.rightContentShadow : style.leftContentShadow;

    const textBgClass = !isLeft ? style.rightContentShadow : style.leftContentShadow;

    const textBgStyle =
    {
        backgroundColor: textBgColor
    }
    //#endregion



    return (
        <div className={style.zigZagSection} style={zigZagStyle}>
            {/* Render subject */}
            <div className={`${style.subject} ${subjectClass}`}>{subject}</div>

            {/* Render Text */}
            <div className={`${style.textBackground} ${textBgClass}`} style={textBgStyle}>
                <h2>
                    {titleJSX}
                    <br />
                    {paragraphJSX}
                </h2>
            </div>

        </div>
    );
}

