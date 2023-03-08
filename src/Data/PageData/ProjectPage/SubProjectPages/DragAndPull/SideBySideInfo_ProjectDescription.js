import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}Drag&Pull/Menu.JPG`
            , `../..${PageRouteData.ResourcePath}Drag&Pull/unknown.jpg`
            , `../..${PageRouteData.ResourcePath}Drag&Pull/unknown2.jpg`
            , `../..${PageRouteData.ResourcePath}Drag&Pull/unknown3.jpg`
            , `../..${PageRouteData.ResourcePath}Drag&Pull/unknown4.jpg`
            , `../..${PageRouteData.ResourcePath}Drag&Pull/Win.jpg`

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
            This was a geniunely enjoyable physics phone game project to do as I took care of creating some assets in the game. The most challenging part of this project was finding the core mechanic for this game. 
        </p>
        <br />
        <p>
        I was initially thinking of doing a player controller which allowed you to change states (from solid to liquid to gas). However, I realised that I had little knowledge on creating fluid shaders and that designing levels for such a complex mechanic would be too difficult.
        </p>

        <br />
        <p>
        After experiencing some phone games (like Angry Birds), I have learnt that the main mechanic of a game does not need to be complex. It can be simple but yet create a complex puzzle.
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
            <li>Level Design</li>
            <li>Doodled the Sprites</li>
            <li>Designed the core mechanics</li>
            <li>InGame UI & UX feedback</li>
            <li>Deployed to Web & Android Platforms</li>
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
            <br />
            <br />
            {rolesAndResponsibilities}
        </div>
    ,
    isFlipped: true

}
export default SideBySideContent_ProjectDescription;