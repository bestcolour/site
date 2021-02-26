import React from "react";
import style from "./ContactPage.module.css";
import generalStyles from "../../../CommonStyles/GeneralStyles.module.css";


//#region Common
import PageStructure from "../../Common/PageStructure";
//#endregion

//#region Modules
import TopNavBar from "../../Modules/TopNavBar";
import StandardFooter from "../../Modules/StandardFooter";
import SideBySide from "../../Common/SectionTypes/SideBySide";
//#endregion

//#region Data
import { Pagestruct_Default } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
import TopNavBarInfo from "../../../Data/PageData/TopNavBarInfo";
import FooterInfo from "../../../Data/FooterData/FooterInfo";
// import SideBySideContent from "../../../Data/PageData/ContactPage/SideBySideContent";
//#endregion

export default function ContactPage()
{
    const sideBySideContent =
    {
        subject:
            <div className={generalStyles.white}>
                <h6 >Download my Resume here!</h6>
            </div>
        ,
        description:
            <div className={generalStyles.white}>
                <h6 clas>Send Me A Message!</h6>

                <form className={style.formRoot} >
                    <div className={style.inputField}>
                        <h4 >Name: </h4>
                        <br></br>
                        <input type="text" name="name" required ></input>
                    </div>


                    <div className={style.inputField}>
                        <h4 >Email: </h4>
                        <br></br>
                        <input type="email" name="email" required ></input>
                    </div>


                    <div className={style.inputField}>
                        <h4 >Message: </h4>
                        <br></br>
                        <textarea name="message" rows="5"></textarea>
                    </div>


                    <div className={style.inputField}>
                        <input type="submit"></input>
                    </div>

                </form>
            </div>
        ,
        //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
        isFlipped: false
    }


    //#region ------------ Final Content -------------------
    const pageContent =
        <div className={style.root}>
            <div className={style.contactFormRoot}>
                <SideBySide content={sideBySideContent} />
            </div>
        </div>
    //#endregion


    return (
        <div>
            <TopNavBar topNavBarData={TopNavBarInfo} selectedPageName={"Contact Me"} />
            <PageStructure content={pageContent} info={Pagestruct_Default} />
            <StandardFooter footerInfo={FooterInfo} />
        </div>
    );
}