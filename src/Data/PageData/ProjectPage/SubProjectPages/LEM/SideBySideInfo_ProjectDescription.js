import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}LEM/Title.jpg`
            , `../..${PageRouteData.ResourcePath}LEM/BlockColor.gif`
            , `../..${PageRouteData.ResourcePath}LEM/HideExecutors.gif`
            , `../..${PageRouteData.ResourcePath}LEM/CreatingNewBlock.gif`
            , `../..${PageRouteData.ResourcePath}LEM/CopyPastingEffect.gif`
            , `../..${PageRouteData.ResourcePath}LEM/DeletingEffects.gif`
            , `../..${PageRouteData.ResourcePath}LEM/DuplicatingBlocks.gif`
            , `../..${PageRouteData.ResourcePath}LEM/DeletingBlocks.gif`
            , `../..${PageRouteData.ResourcePath}LEM/ArrowMode.gif`

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
            Back in Year 2's Hangry Guardians project, I was coding the tutorial for the beginner levels and I hesitated at the idea of coding each tutorial levels manually. There, I made a prototype Tutorial Event Manager script which allowed me to modularize certain blocks of code which did certain things in a linear order.
        </p>
        <br />
        <p>
            Seeing how unoptimized and ugly it was, I took it upon myself to learn to make it into a node editor and wanted to use it in my next project.
        </p>
        <br />
        <p>
            LEM 1 was more or less completed on June of 2020 where I learnt design patterns like the Command Pattern and how to write a custom Unity's EditorWindow class.
        </p>
        <br />
        <p>
            However, that was not enough, LEM 1 was still unoptimized and hard to add custom code thus making it hard for me to use in a project where I may need to write custom effects.
        </p>
        <br />
        <p>
            Thus, I started my second iteration of LEM on September 2020 and completed it more or less on October 2020 where I made the node blocks more organized and simple to reuse and customize its code.
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
            <li>Code Architecture</li>
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