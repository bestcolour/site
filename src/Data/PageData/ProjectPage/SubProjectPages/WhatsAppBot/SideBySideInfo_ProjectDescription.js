import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import { PageRouteData, OnClickNewSite } from "../../../../PageRouteData";
import { Link } from "react-router-dom";


//#region ---------- Subject --------------
const imageSliderInfo =
{
    imageDataArray:
        [
            `../..${PageRouteData.ResourcePath}WhatsAppBot/help.PNG`
            ,
            `../..${PageRouteData.ResourcePath}WhatsAppBot/send.PNG`
            ,
            `../..${PageRouteData.ResourcePath}WhatsAppBot/list.PNG`
            ,
            `../..${PageRouteData.ResourcePath}WhatsAppBot/remove.PNG`
            ,
            `../..${PageRouteData.ResourcePath}WhatsAppBot/open-console.PNG`
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
                This Whatsapp bot is a personal project which I have developed during my time in National Service. It was developed to send reminders on whatsapp through a bot in a timely manner for my family and their friends.
            </p>
            <br />
            <p >
                There were many challenges that I've encountered while coding this bot such as software architecture and handling data. However, the webscraping aspect was the hardest for me as it was new to me.
            </p>
            <br />
            <p >
                I had to conceive different methods of accessing the web and it's information in tandem with Selenium.
            </p>
            <br />
            <p >
                All in all it was worth while to make this bot as it seems to be very useful for my mum. She used it to set reminders as well as to send a daily message asking about the number of people eating at home so that she could adjust her cooking proportions.
            </p>
        </div>


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