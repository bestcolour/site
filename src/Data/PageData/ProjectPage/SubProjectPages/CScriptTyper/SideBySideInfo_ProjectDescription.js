import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData } from "../../../../PageRouteData";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}CScriptTyper/Title.PNG`
            ,`../..${PageRouteData.ResourcePath}CScriptTyper/IntList.PNG`
            ,`../..${PageRouteData.ResourcePath}CScriptTyper/List-Template.PNG`
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
            During my time in National Service, I decided to learn the C language on Youtube however, I ran into a situation where I would need a list.
        </p>
        <br />
        <p >
            As C does not have in built lists to use, I thought that I could replicate C# Generic Lists in C.
        </p>

        <br />
        <p >
            After digging into the documentation of the C# Generic Lists, I understood how it had a main array that had extra size to lower the frequency of reallocating the array memory and wrote the list in C with this behaviour in mind.
        </p>
        <br />
        <p >
            Realising creating these lists for each type in C would be troublesome, I decided to write a script that writes these lists for inputted types so as to practice more of C.
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
        </div>
    ,
    isFlipped: true

}
export default SideBySideContent_ProjectDescription;