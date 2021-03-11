import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import {PageRouteData} from "../../../../PageRouteData";

//#region -------- Game Description --------------
const gameDescription =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Game Description
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            Drag and Pull is a small 2D physics platform game where your only goal in the game is to get to the flag of each level! The controls are simple! Just drag and pull! Each level poses different challenges, can you complete them all?
            </p>
    </div>
//#endregion

//#region -------- Game Features -----------------
const gameFeatures =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Game Features
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            <li>2D Platformer</li>
            <li>Physics</li>
            <li>Casual</li>
            <li>Simple Mechanics</li>
            <li>Android & Web</li>
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