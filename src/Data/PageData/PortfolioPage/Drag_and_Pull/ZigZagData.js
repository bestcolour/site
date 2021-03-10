//#region ============== Imports ====================
import styles from "../ZigZag_PortfolioStyles.module.css";
import bgImageStyles from "../BackgroundImage_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
import imgButtonStyles from "../ImageButton_PortfolioStyles.module.css";
import textButtonStyles from "../TextButton_PortfolioStyles.module.css";

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
    , buttonLink: PageRouteData.DragAndPullPath
    , target: ""
    // , backgroundColor: "#393939"
    // , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}Drag&Pull/Menu.jpg`
    , cssStyling: bgImageStyles.subjectBgImageClassStyle
}

const ImageButtonInfo_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/itch-io-badge.png`
    ,
    buttonLink: "https://bestcolour.itch.io/drag-and-pull"
    ,
    target: "_blank"
}

// const ImageButton_CssClass_BgImageElement = imgButtonStyles.imageButtonDimensions;

//#endregion


const ZigZagContent =
{
    subject: < BackgroundImage info={BackgroundImageInfo} />
    ,
    description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`} >
            <h6 className={styles.descriptionTitle} >
                Drag and Pull
            </h6 >

            <div>
                <p>
                    Drag and Pull is a mobile game which was developed during my Year 2 studies. We had a project where the goal of it was to explore Unity's Physics systems and this was what I came up with.
                <br />
                    <br />

                    The game is relatively simple, reach the end goal at every level and you win! To move the player, as in the title, just drag and pull!
                <br />
                </p>

                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <ImageButton content={ImageButtonInfo_example} cssClass_BackgroundImageElement={imgButtonStyles.imageButtonDimensions} />
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton } content={TextButtonContent_app} onClickFunction={OnClickNewSite}  />
                    </p>
                </div>
            </div>
        </div >

    , isLeft: true
}

export default ZigZagContent;