import React from "react";
import style from "./ImageSlider.module.css";
import PageRouteData from "../../../Data/PageRouteData";

export default class ImageSlider extends React.Component
{
    //#region ------------- Template ---------------
    // const imageSliderInfo =
    // {
    //     imageDataArray: 
    //     [
    //         `../..${PageRouteData.LandingPagePath}/Resources/HangryGuardians/SplashArt.jpg`
    //        
    //     ]
    // }
    //#endregion

    constructor()
    {
        super();
        this.state =
        {
            _currImageIndex: 0
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide()
    {
        this.setState
            (
                (prevState, props) =>
                {
                    const newImageIndex = prevState._currImageIndex == 0 ? props.info.imageDataArray.length - 1 : prevState._currImageIndex - 1;
                    return { _currImageIndex: newImageIndex };
                }
            );
    }

    nextSlide()
    {
        this.setState
            (
                (prevState, props) =>
                {
                    const newImageIndex = prevState._currImageIndex == props.info.imageDataArray.length - 1 ? 0 : prevState._currImageIndex + 1;
                    return { _currImageIndex: newImageIndex };
                }
            );
    }

    render()
    {
        const { imageDataArray } = this.props.info;

        const finalImageJSX = [];
        for (let index = 0; index < imageDataArray.length; index++)
        {
            const element = imageDataArray[index];
            const isIndexCurrIndex = index === this.state._currImageIndex;

            const jsxToPush =
                <div className={!isIndexCurrIndex ? style.slide : style.slideActive}>
                    {isIndexCurrIndex && (<img src={element} key={index}></img>)}
                </div>
            finalImageJSX.push(jsxToPush);
        }

        return (
            <div className={style.imageSlideRoot}>
                <div className={style.imageHolder}>
                    {finalImageJSX}
                    <i className={`fas fa-circle fa-2x ${style.leftArrowBg}`} onClick={this.prevSlide} >
                        <i className={`fas fa-arrow-alt-circle-left fa-1x ${style.arrowImage}`}></i>
                    </i>
                    <i className={`fas fa-circle fa-2x ${style.rightArrowBg}`} onClick={this.nextSlide} >
                        <i className={`fas fa-arrow-alt-circle-right fa-1x ${style.arrowImage}`}></i>
                    </i>
                </div>

            </div>
        );
    }

}
