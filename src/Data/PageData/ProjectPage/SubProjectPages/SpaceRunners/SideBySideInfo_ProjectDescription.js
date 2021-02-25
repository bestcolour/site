import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import PageRouteData from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray: 
    [
        `../..${PageRouteData.ResourcePath}HangryGuardians/SplashArt.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Ice.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Ice&Wind.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Star.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Tunnel.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Tunel&Ice.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Tutorial.jpg`
        ,
        `../..${PageRouteData.ResourcePath}HangryGuardians/Wind&TUnnel.jpg`
    ]
}
//#endregion

//#region -------- Project Description --------------
const projectDescription =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Project Description
            </h6>
        <br />
        <p className={GeneralStyles.white}>
          Hangry Guardians is my first 2D mobile game client project I have ever done in my life. I worked together with 7 other people in my Polytechnic class to accomplish this game for the client, GameStartAsia. One of the most challenging aspect of this project was to provide information to the player about the rules of the game as there seems to be a lot of things happening on the screen. I designed the tutorial to hide certain UI elements in the early levels of each map. This allows me to slowly introduce the mechanics without overwhelming the player. This led to an idea for LEM (Linear Effect Manager) which allows me to sequence events in order to make Tutorial making a lot easier. Other notable things I have done are the visual effects which give the players feedback whenever they are doing something positive or negative.
            </p>
    </div>
//#endregion

//#region -------- Responsibilities -----------------
const rolesAndResponsibilities =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Roles and Responsibilities
            </h6>
        <br />
        <p className={GeneralStyles.white}>
            <li>Gameplay Programmer</li>
            <li>UI & UX Design</li>
            <li>Tutorial Designer</li>
        </p>
    </div>
//#endregion

const SideBySideContent_SpaceRunners_ProjectDescription =
{
    subject:
        <div>
            <ImageSlider info={imageSliderInfo} />
        </div>
    ,
    description:
        <div>
            {projectDescription}
            <br />
            <br />
            {rolesAndResponsibilities}
        </div>
    ,
    isFlipped: true

}
export default SideBySideContent_SpaceRunners_ProjectDescription;