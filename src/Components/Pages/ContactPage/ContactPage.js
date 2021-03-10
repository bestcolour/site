import React from "react";
import style from "./ContactPage.module.css";
import generalStyles from "../../../CommonStyles/GeneralStyles.module.css";
import emailjs from "emailjs-com";

//#region Common
import PageStructure from "../../Common/PageStructure";
import FAImageButton from "../../Common/Button/FAImageButton";
import SideBySide from "../../Common/SectionTypes/SideBySide";
//#endregion

//#region Modules
import TopNavBar from "../../Modules/TopNavBar";
import StandardFooter from "../../Modules/StandardFooter";
//#endregion

//#region --------------- Import Common Info --------------------
import { SideBySide_CommonInfo_AlwaysVertical_cssClass_SideBySideElement, SideBySide_CommonInfo_AlwaysVertical_FlipClasses } from "../../../Data/CommonInfo/SideBySide/SideBySide_CommonInfo";
//#endregion

//#region Data
import { Pagestruct_Default } from "../../../Data/CommonInfo/PageStructure/PageStructureInfo_CommonPageInfo";
//#endregion

export default function ContactPage()
{
    //#region ------------ Functions ----------------
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
    //#endregion

    //#region ----------------- FontAwesome Button Content ------------------
    const FAImageButtonContent_DownloadResume =
    {
        //You can wrap a <p></p> around this to make other arrangements
        imageJSX: <i class="far fa-file-pdf fa-2x"></i>
        ,
        buttonLink: "https://drive.google.com/drive/folders/1RGgKZviYUfZ8bzhR-rvG-m1mabG8j0tU?usp=sharing"
        ,
        target: "blank"
    }
    //#endregion

    //#region =============== Side by Side Content ==================
    const sideBySideContent =
    {
        subject:
            //#region ------------- Subject ------------------
            <div className={`${generalStyles.white} ${style.resumeRoot}`}>
                <h4>Download my Resume here!</h4>
                <div id={style.resumeDownload}>
                    <FAImageButton content={FAImageButtonContent_DownloadResume} />
                </div>
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
        isFlipped: true
    }
    //#endregion


    //#region ------------ Final Content -------------------
    const pageContent =
        <div className={style.pageContentRoot}>
            <div className={style.sideBySideContentRoot}>
                <SideBySide content={sideBySideContent} cssInfo_flipClasses={SideBySide_CommonInfo_AlwaysVertical_FlipClasses} cssClass_SideBySideElement={SideBySide_CommonInfo_AlwaysVertical_cssClass_SideBySideElement} />
            </div>
        </div>
    //#endregion


    return (
        <div>
            <TopNavBar selectedPageName={"Contact Me"} />
            <PageStructure content={pageContent} info={Pagestruct_Default} />
            <StandardFooter />
        </div>
    );
}