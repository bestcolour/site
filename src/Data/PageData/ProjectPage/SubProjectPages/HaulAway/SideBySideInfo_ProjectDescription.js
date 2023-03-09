import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}HaulAway/Screenshot1.jpg`
            , `../..${PageRouteData.ResourcePath}HaulAway/Screenshot2.jpg`
            , `../..${PageRouteData.ResourcePath}HaulAway/Screenshot3.jpg`
            , `../..${PageRouteData.ResourcePath}HaulAway/Screenshot4.jpg`

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
            <p>
                This project was accomplished with 5 other people whom includes {<a href="https://enriquecmarcelo.github.io/" target="blank">Enrique</a>} and {<a href="https://kaixingnicholas.wixsite.com/gdportfolio" target="blank">Nicholas</a>}.
            </p>
            <br />

            <p>
                The main challenge I have faced with developing this game was the sheer amount of conditions and physics related bugs which arises when making a physics game. Although the realism of physics is really nice viusally to look at, the work needed to ensure it goes well is astounding. However, it was all worth it when this game managed to be awarded Bronze for the Crowbar Awards in 2021.
            </p>

            <br />

            <p>
                From this experience, I have learnt how to prototype quickly when making a game as well as to plan ahead for future additions and implementation of new mechanics.
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
            <li>Game Systems & Architecture</li>
            <li>Gameplay Mechanics</li>
            <li>Player Controller</li>
            <li>Bouyancy Physics</li>
            <li>UI & UX {<a href="https://drive.google.com/file/d/1-p-gqGlf4XtEd06wrDVFLHS3w9wq36Pd/view?usp=sharing" target={"blank"}>Design</a>}</li>
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