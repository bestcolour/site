import styles from "../Desktop_CSS_Modules/ZigZagData_PortfolioStyles.module.css";
import bgImageStyles from "../Desktop_CSS_Modules/BackgroundImage_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
import textButtonStyles from "../Desktop_CSS_Modules/TextButton_PortfolioStyles.module.css";


//#region ---------- Import Commons -----------------
import TextButton from "../../../../Components/Common/Button/TextButton";
import BackgroundImage from "../../../../Components/Common/BackgroundImage";
//#endregion

//#region ----------- Import Data ---------------
import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";
//#endregion


const TextButtonInfo_app =
{
    text: "See More"
    , buttonLink: PageRouteData.GamesPagePath
    , target: ""
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}HaulAway/Screenshot1.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}

const ZigZagContent =
{
    subject:
        <BackgroundImage info={BackgroundImageInfo} />
    ,
    description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`}>
            <h6 className={styles.descriptionTitle} >Games</h6>
            <br/>
            <p>Different types of game ranging from online/local multiplayer to mobile or interactive storytelling games.</p>
            <div>
                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton} content={TextButtonInfo_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>

        </div>
    , isLeft: false
}
export default ZigZagContent;