import React from "react";
import style from "./Card.module.css";
import {PageRouteData} from "../../../Data/PageRouteData";
import { Link } from "react-router-dom";

export default function Card({ cardInfo, cardStyleInfo })
{
    //#region ================== TEMPLATE CARD ==================
    //Usually the is placed in CardTables so cardInformation const will not be needed
    // const cardInformation =
    // {
    //     link: PageRouteData.ProjectPagePath
    //     , image: ""
    //     , tag: ""
    //     , icon: `../..${PageRouteData.ResourcePath}Images/Logos/Unity/unity-tab-square-black.png`
    //     , title: ""
    //     , description: ""
    //     , date: ""
    //     , customStyle:
    //     {
    //         backgroundSize: "35%"
    //         , backgroundPosition: "0% 15%"
    //     }
    // }
    //#endregion

    //#region Deconstruction of Info
    //Card info will hold all the content needed to display on the card
    const { link, image, icon, title, description, date, customStyle } = cardInfo;

    //Card style will hold all of the properties related to the style of the card
    const { cardBackgroundColor, cardWidth, cardHeight, cardHorizontalMargin, cardVerticalMargin } = cardStyleInfo;
    //#endregion

    //#region Card Style
    //Will handle the card's width, height, margins & bg color
    const cardStyle =
    {
        backgroundColor: cardBackgroundColor
        , width: cardWidth
        , height: cardHeight
        , marginLeft: cardHorizontalMargin
        , marginRight: cardHorizontalMargin
        , marginTop: cardVerticalMargin
        , marginBottom: cardVerticalMargin
    }

    const iconStyle =
    {
        backgroundImage: `url(${icon})`
    }

    let imageStyle =
    {
        backgroundImage: `url(${image})`
        , height: cardHeight
        , zIndex: "1"
    }

    imageStyle = customStyle === undefined ? imageStyle : { ...imageStyle, ...customStyle };

    //#region ------------- Determining if Link Is Going Out ----------------------
    let finalLinkJSX;
    const isLinkGoingOutSite = link.includes("https://");
    if (isLinkGoingOutSite)
    {
        finalLinkJSX =
            <a href={link} className={style.overlay}>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
            </a>;
    }
    else
    {
        finalLinkJSX =
            <Link to={link} className={style.overlay}>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
            </Link>;
    }
    //#endregion

    //#endregion

    return (
        <div style={cardStyle} className={style.card}>

            {/* Overlay */}
            {finalLinkJSX}

            {/* Render Icon */}
            <div className={style.top}>
                <div style={iconStyle} className={style.icon}>    </div>
            </div>

            {/* Render Image */}
            <div className={style.middle}>
                <div style={imageStyle} className={style.cardImage}>  </div>
            </div>


        </div>
    );
}

