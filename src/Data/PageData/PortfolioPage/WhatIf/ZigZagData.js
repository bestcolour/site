import styles from "../ZigZagData_CommonStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";

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
    , backgroundColor: "#393939"
    , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}WhatIf/Title.jpg`
    , cssStyling: styles.subjectBgImageClassStyle
}


const ImageButtonInfo_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/itch-io-badge.png`
    ,
    buttonLink: "https://fyp-whatif.itch.io/what-if"
    ,
    target: "_blank"
    ,
    width: "11.5em"
    ,
    height: "3.5em"
}

const ZigZagContent =
{
    subject: <BackgroundImage info={BackgroundImageInfo} />
    , titleJSX: <h6 className={`${GeneralStyles.white}`}>What If?</h6>
    , paragraphJSX:
        <div>
            < p className={GeneralStyles.white} >
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
                    <ImageButton content={ImageButtonInfo_example} />
                    <TextButton content={TextButtonInfo_app} onClickFunction={OnClickNewSite} />
                </p>
            </div>
        </div>


    , isLeft: false
}
export default ZigZagContent;