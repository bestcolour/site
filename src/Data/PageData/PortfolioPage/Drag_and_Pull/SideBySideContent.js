
//===================== Description ====================
//This data file is for mobile support of the portfolio page
import ImageButton from "../../../../Components/Common/Button/ImageButton"
import styles from "../Mobile_CSS_Modules/SideBySide_PortfolioStyle.module.css";
import imgButtonStyles from "../Mobile_CSS_Modules/ImageButton_PortfolioStyles.module.css";


import { PageRouteData, OnClickNewSite } from "../../../PageRouteData";



const ImageButtonContent_example =
{
    imageSrc: `../..${PageRouteData.ResourcePath}Drag&Pull/Menu.jpg`
    ,
    buttonLink: PageRouteData.DragAndPullPath
    ,
    target: ""
}



const content =
{
    subject:
        <div className={styles.subjectRoot}>
            <ImageButton content={ImageButtonContent_example} onClickFunction = {OnClickNewSite} cssClass_BackgroundImageElement={`${imgButtonStyles.backgroundImageElement}`}/>
        </div>
    ,
    description:
        <div className={styles.descriptionRoot}>
            <h4>Drag & Pull</h4>
        </div>
    ,
    //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
    isFlipped: true
};





export default content;