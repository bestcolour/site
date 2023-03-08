import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import ImageSlider from "../../../../../Components/Common/ImageSlider";
import {PageRouteData,OnClickNewSite} from "../../../../PageRouteData";
import {Link} from "react-router-dom";


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
        <p className={GeneralStyles.white}>
            This Whatsapp bot is a personal project which I have developed during my time in National Service. The idea arised from an issue my family had faced often: forgetting and miscalculating things. 
        </p>
        <br />
        <p className={GeneralStyles.white}>
            We occasionally had multiple vouchers and coupons for meals at restaurants but would often forget about it until we found out near it's expiration date and start panicking about it. My parents are not really tech savy and are hesitant to learn new applications but they do know how to use Whatsapp. 
        </p>
        <br />
        <p className={GeneralStyles.white}>
            Hence, I wrote this bot for them so that they could set reminders for themselves and others about events or due dates.
        </p>
        <br />
        <p className={GeneralStyles.white}>
            This bot seems to be very useful for my mum as she also used it to send a daily message asking about the number of people eating at home so that she could adjust her cooking proportions.
        </p>
        <br />

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