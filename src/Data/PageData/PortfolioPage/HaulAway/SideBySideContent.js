
//===================== Description ====================
//This data file is for mobile support of the portfolio page
// import BackgroundImage from "../../../../Components/Common/BackgroundImage";
import ImageButton from "../../../../Components/Common/Button/ImageButton"
import styles from "../Mobile_CSS_Modules/SideBySide_PortfolioStyle.module.css";


import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";


// const BackgroundImageInfo =
// {
//     bgImageSrc: `../..${PageRouteData.ResourcePath}HaulAway/Poster.jpg`
//     , cssStyling: bgImageStyles.sideBySide_Subject
// }


const ImageButtonContent_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}HaulAway/Poster.jpg`
    ,
    buttonLink: PageRouteData.HaulAwayPath
    ,
    target: ""
}



const content =
{
    subject:
        <div className={styles.subjectRoot}>
            <ImageButton content={ImageButtonContent_example} onClickFunction = {OnClickNewSite} />
        </div>
    ,
    description:
        <div className={styles.descriptionRoot}>
            <h6>Haul Away</h6>
        </div>
    ,
    //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
    isFlipped: false
};





export default content;