import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import PageRouteData from "../../../../PageRouteData";

//#region -------- Game Description --------------
const gameDescription =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Game Description
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            Space Runners is a competitive 3D platformer multiplayer networking game which can have up to 6 players playing at one time. The host player takes the role of a space overlord while the others take the role of space runners. The overlord's goal is to destroy every runner using its laser ability which temporarily disables tiles while the runners' goal is to collect x number of objectives by parkouring around the map before all of them fall into the void below. 
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
            <li>Multiplayer Networking</li>
            <li>Competitive Gameplay</li>
            <li>Asymmetrical Gameplay</li>
            <li>3D Parkour</li>
        </p>
    </div>
//#endregion

const SideBySideContent_SpaceRunners_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}SpaceRunners/Video-Compressed.mp4`} type="video/mp4" />
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
export default SideBySideContent_SpaceRunners_GameDescription;