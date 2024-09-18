import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}PythonAutomation/ExecuteHelp-1.jpg`
            , `../..${PageRouteData.ResourcePath}PythonAutomation/ExecuteHelp-2.jpg`
            , `../..${PageRouteData.ResourcePath}PythonAutomation/ExecuteHelp-3.jpg`
            , `../..${PageRouteData.ResourcePath}PythonAutomation/ExecuteHelp-4.jpg`
            , `../..${PageRouteData.ResourcePath}PythonAutomation/Recordtask.jpg`
        ]
}
//#endregion

//#region -------- Project Description --------------
const projectDescription =
    <div className={`${GeneralStyles.white}`}>
        <h6 >
            Project Description
        </h6>
        <br />
        <p >
            After graduation from my polytechnic, I started to take interest in expanding my code skillset and hence wanted to do a project in python as a form of exercise.
        </p>
        <br />
        <p >
            I learnt about basic python syntax, functions and libraries while writing this project. I had initially used it to claim my game's daily gift every morning while I went to brush my teeth.
        </p>

        <br />
        <p >
            Now, after finding a new hobby of making videos, I see it's value shine through as I could use it to subtitle my videos and save me a ton of time and manual work in the video editing program I use.
        </p>

    </div>
//#endregion


const SideBySideContent_ProjectDescription =
{
    subject:
        <div>
            <ImageSlider info={imageSliderInfo} />
        </div>
    ,
    description:
        <div>
            {projectDescription}
        </div>
    ,
    isFlipped: true

}
export default SideBySideContent_ProjectDescription;