import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import { PageRouteData } from "../../../../PageRouteData";

//#region -------- Game Description --------------
const gameDescription =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Tool Description
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            This Python Automation program is a simple macro program that uses a console to operate and execute commands. There are numerous inbuilt commands to allow the user to carry out. Furthermore, this program also allows for recording of custom commands and looping of commands. Thus this makes it suitable for carrying out repetitive tasks on the computer. (See example of video subtitling process)
            </p>
    </div>
//#endregion

//#region -------- Game Features -----------------
const gameFeatures =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Tool Features
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            <li>Console Interface</li>
            <li>Ability to add and record commands</li>
            <li>Looping is allowed</li>
        </p>
    </div>
//#endregion

const SideBySideContent_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}PythonAutomation/Video_Subtitling.mp4`} type="video/mp4" />
            Your browser doesnt support the video player
        </video>
        </div>
    ,
    description:
        <div>
            {gameDescription}
            <br />
            <br />
            {gameFeatures}
        </div>
    ,
    isFlipped: true

}
export default SideBySideContent_GameDescription;