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
    , buttonLink: PageRouteData.LEMPath
    , target: ""
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}LEM/Title.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}

const ImageButtonInfo_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/GitHubLogo.png`
    ,
    buttonLink: "https://github.com/bestcolour/Linear-Effect-Manager-2"
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
                Wonder Valley
            </h6 >

            <div>
                <p>
                Wonder Valley is a tower defense game made from Oct 2019 to Feb 2020 during my Year 2 studies in Polytechnic.
                <br />
                <br />
                The objective of the game is to get Alice to the castle in every level by placing and moving towers (Alice included). Deploying towers or moving towers consume mana and enemies spawn on the map with the objective of destroying the fragile Alice.
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