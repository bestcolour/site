import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}SpaceRunners/GodView.jpg`
            , `../..${PageRouteData.ResourcePath}SpaceRunners/Lobby.jpg`
            , `../..${PageRouteData.ResourcePath}SpaceRunners/Runnerview.jpg`
            , `../..${PageRouteData.ResourcePath}SpaceRunners/Runnerview2.jpg`

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
        <div className={GeneralStyles.white}>
            <p >
                Space Runners is my first multiplayer networking project and there were definitely challenges that I have faced while creating this game with my co-programmer {<a href="https://enriquecmarcelo.github.io/" target="blank">Enrique</a>}.
            </p>
            <br />
            <p >
                As I was tasked to handle the lobby match making, I had quite a tough and interesting time understanding the lobby and room logic with the new perspective of multiple clients and master client.
            </p>
            <br />
            <p >
                However, it was interesting enough for me to want to learn more multiplayer networking coding for making future multiplayer games.
            </p>

        </div>
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
            <li>Matchmaking Lobby</li>
            <li>UI & UX Design</li>
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