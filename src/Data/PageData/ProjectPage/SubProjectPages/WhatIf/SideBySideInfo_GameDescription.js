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
          What If is a interactive video player where the player gets to choose how the story ends. The story starrs Cora, a student studying for a Science diploma. However, she aspires to become an artist. Her mundane lifestyle limits her from chasing her dreams. What if you could make that change for her?
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
            <li>Web Game</li>
            <li>Interactive Video</li>
            <li>Multiple Story Ending</li>
        </p>
    </div>
//#endregion

const SideBySideContent_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}WhatIf/Gameplay-Edited-Compressed.mp4`} type="video/mp4" />
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