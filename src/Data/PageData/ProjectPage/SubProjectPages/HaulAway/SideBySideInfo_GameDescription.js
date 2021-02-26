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
            Haul Away is a local co-op game ,of up to 4 players, where the players have to work together to manage a boat and complete objectives on the high seas. Objectives can range from delivering cargo, fighting pirates or visiting locations!
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
            <li>PC</li>
            <li>Casual Party Game</li>
            <li>Local Multiplayer</li>
            <li>Ship Management</li>
            <li>Co-operative Gameplay</li>
        </p>
    </div>
//#endregion

const SideBySideContent_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}HaulAway/Haul Away! Gameplay Trailer-compressed.mp4`} type="video/mp4" />
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