import React from "react";
import style from "./ContactPage.module.css";
import generalStyles from "../../../CommonStyles/GeneralStyles.module.css";
import emailjs from "emailjs-com";

//#region Common
import PageStructure from "../../Common/PageStructure";
import FAImageButton from "../../Common/Button/FAImageButton";
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
    function sendEmail(e)
    {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_lsydnkh', e.target, 'user_7T5EAzwrgEXNbQHfIr6a9')
            .then((result) =>
            {
                console.log(result.text);
            }, (error) =>
            {
                console.log(error.text);
            });

        e.target.reset();
    }

    //#region ----------------- FontAwesome Button Content ------------------
    const FAImageButtonContent_DownloadResume =
    {
        //You can wrap a <p></p> around this to make other arrangements
        imageJSX: <i class="far fa-file-pdf fa-2x"></i>
        ,
        buttonLink: "https://drive.google.com/file/d/1U831vOGkTnZ7dcQEva0omYsZEco-PdH3/view?usp=sharing"
        ,
        target: "blank"
    }
    //#endregion

    //#region =============== Side by Side Content ==================
    const sideBySideContent =
    {
        subject:
            //#region ------------- Subject ------------------
            <div className={generalStyles.white}>
                <h6 >Download my Resume here!</h6>
                <br></br>
                <br></br>
                <FAImageButton content={FAImageButtonContent_DownloadResume} />

            </div>
        //#endregion
        ,
        description:
            //#region ------------------ Description ----------------------
            <div className={generalStyles.white}>
                <h6 clas>Send Me A Message!</h6>

                <form className={style.formRoot} onSubmit={sendEmail}>
                    <div className={style.inputField}>
                        <h4 >Name: </h4>
                        <br></br>
                        <input type="text" placeholder="John Doe" name="name" required ></input>
                    </div>

                    <div className={style.inputField}>
                        <h4 >Email: </h4>
                        <br></br>
                        <input type="email" placeholder="example@gmail.com" name="email" required ></input>
                    </div>

                    <div className={style.inputField}>
                        <h4 >Subject: </h4>
                        <br></br>
                        <input type="text" placeholder="Game Project Offer" name="subject"  ></input>
                    </div>


                    <div className={style.inputField}>
                        <h4 >Message: </h4>
                        <br></br>
                        <textarea name="message" placeholder="Type your message here..." rows="5"></textarea>
                    </div>


                    <div className={style.inputField}>
                        <input type="submit" value="Send Message"></input>
                    </div>

                </form>
            </div>
        //#endregion

        ,
        //If is flipped is set to true, the subject's default position (left side on desktop, doenst affect mobile) will be on the opposite side
        isFlipped: false
    }
    //#endregion


    //#region ------------ Final Content -------------------
    const pageContent =
        <div className={style.pageContentRoot}>
            <div className={style.sideBySideContentRoot}>
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