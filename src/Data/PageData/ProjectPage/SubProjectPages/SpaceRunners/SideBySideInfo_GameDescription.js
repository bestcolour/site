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
            Hangry Guardians is a simple resource matching puzzle game about delivering offerings to mythical guardians. However, each Guardian has a different preference and you can only deliver the offerings to them within a limited number of moves! Every level has 3 Stars to be achieved, each being progressively challenging to obtain.
            Can you obtain all the Stars?
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
            <li>Casual Gameplay</li>
            <li>Puzzle with increasingly complex levels</li>
            <li>2D</li>
        </p>
    </div>
//#endregion

const SideBySideContent_SpaceRunners_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}HangryGuardians/trailerVideoCompressed.mp4`} type="video/mp4" />
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