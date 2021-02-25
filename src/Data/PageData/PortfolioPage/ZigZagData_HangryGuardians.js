import styles from "./ZigZagData_CommonStyles.module.css";
import GeneralStyles from "../../../CommonStyles/GeneralStyles.module.css";

//#region ---------- Import Commons -----------------
import TextButton from "../../../Components/Common/Button/TextButton";
import ImageButton from "../../../Components/Common/Button/ImageButton";
import BackgroundImage from "../../../Components/Common/BackgroundImage";
//#endregion

//#region ----------- Import Data ---------------
import PageRouteData from "../../PageRouteData";
//#endregion

const ImageButtonInfo_app =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/google-play-badge.png`
    ,
    buttonLink: "https://play.google.com/store/apps/details?id=com.ET.HangryGods&hl=en"
    ,
    target: "_blank"
    ,
    width: "11.5em"
    ,
    height: "3.5em"
}


const TextButtonInfo_app =
{
    text: "Read More"
    , buttonLink: PageRouteData.HangryGuardiansPath
    , target: ""
    , backgroundColor: "#393939"
    , padding: "3.5% 3.5% 3.5% 3.5%"
}

const BackgroundImageInfo_hangryGuardiansSubject =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}HangryGuardians/SplashArt.jpg`
    , cssStyling: styles.subjectBgImageClassStyle
}

const ZigZagContent_HangryGuardians =
{
    subject: <BackgroundImage info={BackgroundImageInfo_hangryGuardiansSubject} />
    , titleJSX: <h6 className={`${GeneralStyles.white}`}>Hangry Guardians</h6>
    , paragraphJSX:
        <div>
            < p className={GeneralStyles.white} >
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
                    <ImageButton info={ImageButtonInfo_app} />
                    <TextButton info={TextButtonInfo_app} />
                </p>
            </div>
        </div>


    , isLeft: true
}
export default ZigZagContent_HangryGuardians;