import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}WhatIf/Title.png`
            , `../..${PageRouteData.ResourcePath}WhatIf/unknown1.png`
            , `../..${PageRouteData.ResourcePath}WhatIf/unknown2.jpg`
            , `../..${PageRouteData.ResourcePath}WhatIf/unknown3.jpg`
            , `../..${PageRouteData.ResourcePath}WhatIf/unknown.jpg`
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
            What If? is honestly one of those games which I thought I would do in my game programming life... just not this soon.
            I collaborated with 2 other students from another diploma course to complete this project. They handled supplying me the animation and I handled the Unity aspect of it.
        </p>
        <br />
        <br />

        <p>
        Although simple, this was the first step to experiencing making story-branching games. One challenge I faced was getting the video player in Unity to play the video assets on the web platform as there is a bug with Unity's video player which causes the video to turn black upon playing. This led me to work with Unity's StreamingAssets folder which is surprisingly easy and behaves much like the Resources folder.

        </p>
        <br />
        <br />

        <p>
        Despite being a simple project, I'm glad I managed to learn something new from it which I can tuck away for later use in the future.
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
            <li>UI and UX Design & Programming</li>
            <li>Web GL Deployment</li>
            <li>Story Branching System</li>
            <li>Unity Video Assets Integration</li>
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