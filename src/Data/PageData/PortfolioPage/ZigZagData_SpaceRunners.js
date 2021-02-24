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
    text: "Read More"
    , buttonLink: PageRouteData.SpaceRunnersPath
    , target: ""
    , backgroundColor: "#393939"
    , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo_spaceRunnerSubject =
{
    bgImageSrc: `../..${PageRouteData.LandingPagePath}/Resources/SpaceRunners/GodView.png`
    , cssStyling: styles.subjectBgImageClassStyle
}
//#endregion


const ZigZagInfo_SpaceRunners =
{
    subject: < BackgroundImage info={BackgroundImageInfo_spaceRunnerSubject} />
    , titleJSX:
        <h6 className={`${GeneralStyles.white}`}>
            SpaceRunners
        </h6 >
    , paragraphJSX:
        <div>
            <p className={GeneralStyles.white}>
                SpaceRunners is a multiplayer PC network game project which was developed as a school project during my Polytechnic year 3 studies from October to December 2020.
            <br />
                <br />
            It is a 3D platformer where 1 player takes the role of a space overlord while the others take the role of space runners. The overlord's goal is to destroy every runner using its ability while the runners' goal is to collect x number of objectives on the map.
            <br />
            </p>

            <div className={styles.buttonHolderVertical}>
                <p className={styles.buttonHolder}>
                    <TextButton info={TextButtonContent_app} />
                </p>
            </div>
        </div>

    , isLeft: false
}

export default ZigZagInfo_SpaceRunners;