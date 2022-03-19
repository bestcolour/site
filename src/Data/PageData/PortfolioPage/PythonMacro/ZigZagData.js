//#region ============== Imports ====================
import styles from "../Desktop_CSS_Modules/ZigZagData_PortfolioStyles.module.css";
import bgImageStyles from "../Desktop_CSS_Modules/BackgroundImage_PortfolioStyles.module.css";
import GeneralStyles from "../../../../CommonStyles/GeneralStyles.module.css";
// import imgButtonStyles from "../Desktop_CSS_Modules/ImageButton_PortfolioStyles.module.css";
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
    , buttonLink: PageRouteData.PythonMacroPath
    , target: ""
}

const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}PythonAutomation/ProgramConsole.jpg`
    , cssStyling: bgImageStyles.zigZag_Subject
}

// ------------ v NOTE v ----------------
// Removed the extra image button because i dont wanna show ppl my code.
// Uncomment the below code and the code in the description <div> when you are ready to show
// ------------ ^ NOTE ^ ----------------

// const ImageButtonInfo_example =
// {
//     imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/GitHubLogo.png`
//     ,
//     buttonLink: "https://github.com/bestcolour/Linear-Effect-Manager-2"
//     ,
//     target: "_blank"
// }

//#endregion


const ZigZagContent =
{
    subject: < BackgroundImage info={BackgroundImageInfo} />
    ,
    description:
        <div className={`${GeneralStyles.white} ${styles.descriptionWrapper}`} >
            <h6 className={styles.descriptionTitle} >
                Python Macro Project
            </h6 >

            <div>
                <p>
                    A small python macro program which I have made to learn Python after graduating from polytechnic.
                    <br />
                    <br />
                    This program allows for recording of keyboard and mouse commands as well as some windows functions like moving or deletion of certain types of files. 
                </p>

                <div className={styles.buttonHolderVertical}>
                    <p className={styles.buttonHolder}>
                        {/* <ImageButton content={ImageButtonInfo_example} cssClass_BackgroundImageElement={imgButtonStyles.squareButtonDimension} /> */}
                        <TextButton CssClass_TextButtonElement={textButtonStyles.readMoreTextButton} content={TextButtonContent_app} onClickFunction={OnClickNewSite} />
                    </p>
                </div>
            </div>
        </div >

    , isLeft: true
}

export default ZigZagContent;