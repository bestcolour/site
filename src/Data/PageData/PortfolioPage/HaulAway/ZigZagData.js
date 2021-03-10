import bgImageStyles from "../BackgroundImage_PortfolioStyles.module.css";
import styles from "../ZigZag_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
import textButtonStyles from "../TextButton_PortfolioStyles.module.css";


//#region ---------- Import Commons -----------------
import TextButton from "../../../../Components/Common/Button/TextButton";
import BackgroundImage from "../../../../Components/Common/BackgroundImage";
//#endregion

//#region ----------- Import Data ---------------
import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";
//#endregion


const TextButtonInfo_app =
{
    text: "Read More"
    , buttonLink: PageRouteData.HaulAwayPath
    , target: ""
    // , backgroundColor: "#393939"
    // , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}HaulAway/Poster.jpg`
    , cssStyling: bgImageStyles.subjectBgImageClassStyle
}

const ZigZagContent =
{
    subject:
            <BackgroundImage info={BackgroundImageInfo} />
    ,
    description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`}>
            <h6 className={styles.descriptionTitle} >Haul Away</h6>
            <div>
                <p>
                    <p>
                        Haul Away is an on-going project which I have worked on with five other team members for my Polytechnic's final year project. The development time was from October 2020 to present time.
                    </p>
                    <br />
                    <p>
                        As a local co-op game, players have to work together and manage a ship to traverse the dangerous seas in order to complete tasks set out by Shady Steve, the boss of the shady courier company which you and your fellow crewmates intern in.
                    </p>
                </p>


                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton } content={TextButtonInfo_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>

        </div>
    , isLeft: true
}
export default ZigZagContent;