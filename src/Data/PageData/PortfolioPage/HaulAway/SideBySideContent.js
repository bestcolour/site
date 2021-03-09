import BackgroundImage from "../../../../Components/Common/BackgroundImage";
import styles from "../ZigZagData_CommonStyles.module.css";

import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";


const BackgroundImageInfo =
{
    bgImageSrc: `../..${PageRouteData.ResourcePath}HaulAway/Poster.jpg`
    , cssStyling: styles.subjectBgImageClassStyle
}



const content =
{
    subject: <div>
<BackgroundImage info={BackgroundImageInfo}/>
    </div>
    ,
    description:
        <div>
            <h6>Title</h6>
            <p>Text</p>
        </div>
    ,
    //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
    isFlipped: false
};


export default content;