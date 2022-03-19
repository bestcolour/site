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

const ImageButtonInfo_app =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/google-play-badge.png`
    ,
    buttonLink: "https://play.google.com/store/apps/details?id=com.ET.HangryGods&hl=en"
    ,
    target: "_blank"
}


const TextButtonInfo_app =
{
    text: "Read More"
    , buttonLink: PageRouteData.HangryGuardiansPath
    , target: ""
}

const BackgroundImageInfo_Subject =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}HangryGuardians/SplashArt.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}

const ZigZagContent =
{
    subject: <BackgroundImage info={BackgroundImageInfo_Subject} />
    , description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`}>
            <h6 className={styles.descriptionTitle}>Hangry Guardians</h6>
            <div>
                <p>
                    <p>
                        Hangry Guardians was in development from April 2019 to September 2019 with its release on the Google PlayStore on 16 September 2019.
                    </p>

                    <br />

                    <p>
                        Being successful in its simplicity of game design, GameStartAsia, which was also the client, chose Hangry Guardians as one of the games to be showcased there.
                    </p>
                </p >


                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <ImageButton cssClass_BackgroundImageElement={imgButtonStyles.rectangleButtonDimension}  content={ImageButtonInfo_app} />
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton } content={TextButtonInfo_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>

        </div>

    , isLeft: false
}
export default ZigZagContent;