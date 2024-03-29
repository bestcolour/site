import styles from "../Desktop_CSS_Modules/ZigZagData_PortfolioStyles.module.css";
import bgImageStyles from "../Desktop_CSS_Modules/BackgroundImage_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
import imgButtonStyles from "../Desktop_CSS_Modules/ImageButton_PortfolioStyles.module.css";
import textButtonStyles from "../Desktop_CSS_Modules/TextButton_PortfolioStyles.module.css";


//#region ---------- Import Commons -----------------
import TextButton from "../../../../Components/Common/Button/TextButton";
import ImageButton from "../../../../Components/Common/Button/ImageButton";
import BackgroundImage from "../../../../Components/Common/BackgroundImage";
//#endregion

//#region ----------- Import Data ---------------
import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";
//#endregion


const TextButtonInfo_app =
{
    text: "Read More"
    , buttonLink: PageRouteData.WhatIfPath
    , target: ""
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}WhatIf/Title.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}


const ImageButtonInfo_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/itch-io-badge.png`
    ,
    buttonLink: "http://whatif.madgdd.com/index.html"
    ,
    target: "_blank"
}

const ZigZagContent =
{
    subject: <BackgroundImage info={BackgroundImageInfo} />
    , description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`}>
            <h6 className={styles.descriptionTitle}>What If?</h6>

            <div>
                <p>
                    <p>
                        What If? is a side project which I have collaborated with 2 other students from another course on. This game was done during Year 3 of my Polytechnic studies from October 2020 to March 2021.
                    </p>

                    <br />
                    <p>
                        The game is basically an interactive video player where the player choose their own ending depending on how they make choices.
                    </p>
                </p >


                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <ImageButton cssClass_BackgroundImageElement={imgButtonStyles.rectangleButtonDimension}  content={ImageButtonInfo_example} />
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton } content={TextButtonInfo_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>
        </div>

    , isLeft: true
}
export default ZigZagContent;