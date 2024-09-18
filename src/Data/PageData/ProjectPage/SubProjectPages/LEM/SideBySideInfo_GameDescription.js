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
            Linear Effect Manager 2 (LEM 2) is the second iteration of <a href={"https://bestcolour.itch.io/linear-event-manager"} target="_blank">LEM 1</a>. LEM 2 is a node editor tool created in Unity and C# that makes blocks of code ,which executes an effect, easy to plan and reuse. This is specially useful for Tutorial events or UI transition events.
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
            <li>Modular and Reusable Code</li>
            <li>Effects are highly customisable</li>
            <li>Effects code can be self-optimized</li>
            <li>Visual Programming</li>
            <li>Open Source</li>
        </p>
    </div>
//#endregion

const SideBySideContent_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}LEM/Lem2_Example_Compressed1.mp4`} type="video/mp4" />
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