//#region ============== Imports ====================
import styles from "../Desktop_CSS_Modules/ZigZagData_PortfolioStyles.module.css";
import bgImageStyles from "../Desktop_CSS_Modules/BackgroundImage_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
import imgButtonStyles from "../Desktop_CSS_Modules/ImageButton_PortfolioStyles.module.css";
import textButtonStyles from "../Desktop_CSS_Modules/TextButton_PortfolioStyles.module.css";


//#region  --------------- Commons -----------------
import BackgroundImage from "../../../../Components/Common/BackgroundImage";
import TextButton from "../../../../Components/Common/Button/TextButton";
import ImageButton from "../../../../Components/Common/Button/ImageButton";
//#endregion

//#region ------------- Data ----------------
import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";
//#endregion

//#endregion

//#region ================ Common Content ================
const TextButtonContent_app =
{
    text: "Read More"
    , buttonLink: PageRouteData.WhatsAppBotPath
    , target: ""
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}WhatsAppBot/help.PNG`
    , cssStyling: bgImageStyles.zigZag_Subject
}

const ImageButtonInfo_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/GitHubLogo.png`
    ,
    buttonLink: "https://github.com/bestcolour/Python-Whatsappbot"
    ,
    target: "_blank"
}

//#endregion


const ZigZagContent =
{
    subject: < BackgroundImage info={BackgroundImageInfo} />
    ,
    description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`} >
            <h6 className={styles.descriptionTitle} >
                Whatsapp Bot
            </h6 >

            <div>
                <p>
                A whatsapp bot written in python during my free time throughout my National Service.
                <br />
                <br />
                This bot can send scheduled messages to a group or phone number. It has been written to help my family with reminders and due dates.
                <br />
                <br />
                {/* (for eg. coupon expiry dates and confirmation of the number of people eating so that cooking proportions would be more appropriate) */}
                </p>

                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <ImageButton content={ImageButtonInfo_example} cssClass_BackgroundImageElement={imgButtonStyles.squareButtonDimension} />
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton} content={TextButtonContent_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>
        </div >

    , isLeft: true
}

export default ZigZagContent;