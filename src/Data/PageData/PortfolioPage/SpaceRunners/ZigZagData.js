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
    , buttonLink: PageRouteData.SpaceRunnersPath
    , target: ""
    // , backgroundColor: "#393939"
    // , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}SpaceRunners/GodView.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}

const ImageButtonInfo_app =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/itch-io-badge.png`
    ,
    buttonLink: "https://bestcolour.itch.io/spacerunners"
    ,
    target: "_blank"
    // ,
    // width: "11.5em"
    // ,
    // height: "3.5em"
}
//#endregion


const ZigZagContent =
{
    subject: < BackgroundImage info={BackgroundImageInfo} />
    , description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`}>
            <h6 className={styles.descriptionTitle} >
                SpaceRunners
            </h6 >


            <div>
                <p>
                    SpaceRunners is a multiplayer PC network game project which was developed as a school project during my Polytechnic year 3 studies from October to December 2020.
                    <br />
                    <br />
                    It is a 3D platformer where one player takes the role of a space overlord while the others take the role of space runners. The overlord's goal is to destroy every runner using its ability while the runners' goal is to collect x number of objectives on the map.
                    <br />
                </p>

                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <ImageButton cssClass_BackgroundImageElement={imgButtonStyles.rectangleButtonDimension}  content={ImageButtonInfo_app} />
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton } content={TextButtonContent_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>

        </div>

    , isLeft: true
}

export default ZigZagContent;