//#region ============== Imports ====================
import styles from "./ZigZagData_CommonStyles.module.css";
import GeneralStyles from "../../../CommonStyles/GeneralStyles.module.css";

//#region  --------------- Commons -----------------
import BackgroundImage from "../../../Components/Common/BackgroundImage";
import TextButton from "../../../Components/Common/Button/TextButton";
//#endregion

//#region ------------- Data ----------------
import PageRouteData from "../../PageRouteData";
//#endregion

//#endregion

//#region ================ Common Content ================
const TextButtonContent_app =
{
    text: "Play here"
    , buttonLink: "https://bestcolour.itch.io/drag-and-pull"
    , target: "blank"
    , backgroundColor: "#393939"
    , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo_Subject =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}Drag&Pull/Menu.jpg`
    , cssStyling: styles.subjectBgImageClassStyle
}
//#endregion


const ZigZagInfo_Drag_and_Pull =
{
    subject: < BackgroundImage info={BackgroundImageInfo_Subject} />
    , titleJSX:
        <h6 className={`${GeneralStyles.white}`}>
            Drag and Pull
        </h6 >
    , paragraphJSX:
        <div>
            <p className={GeneralStyles.white}>
                Drag and Pull is a mobile game which was developed during my Year 2 studies. We had a project where the goal of it was to explore Unity's Physics systems and this was what I came up with.
            <br />
                <br />
            The game is relatively simple, reach the end goal at every level and you win! To move the player, as in the title, just drag and pull! 
            <br />
            </p>

            <div className={styles.buttonHolderVertical}>
                <p className={styles.buttonHolder}>
                    <TextButton info={TextButtonContent_app} />
                </p>
            </div>
        </div>

    , isLeft: true
}

export default ZigZagInfo_Drag_and_Pull;