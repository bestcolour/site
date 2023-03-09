import GeneralStyles from "../../../../../CommonStyles/GeneralStyles.module.css";
import { PageRouteData } from "../../../../PageRouteData";


//#region -------- Game Description --------------
const gameDescription =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Bot Description
        </h6>
        <br />
        <p className={GeneralStyles.white}>
            A whatsapp bot written in python to help send scheduled messages to a group or phone number.
        </p>

        <a href="https://github.com/bestcolour/Python-Whatsappbot" target={'_blank'}>
            Learn More
        </a>

        <br />
    </div>
//#endregion

//#region -------- Game Features -----------------
const gameFeatures =
    <div>
        <h6 className={`${GeneralStyles.white}`}>
            Features
        </h6>
        <br />
        <p className={GeneralStyles.white}>
            <li>Send messages at specific times and date</li>
            <li>Messages can be repeatedly sent at a specific interval</li>
            <li>Has a control console for greater control of the bot</li>
            <li>Able to send to phone numbers</li>
        </p>
    </div>
//#endregion

const SideBySideContent_GameDescription =
{
    subject:
        <div>
            <video controls width="100%" height="100%">
                <source src={`../..${PageRouteData.ResourcePath}WhatsAppBot/Whatsappbot-Video.mp4`} type="video/mp4" />
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