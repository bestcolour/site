import FAImageButton from "../../../../../Components/Common/Button/FAImageButton";
import { FAImgButton_DownloadLink } from "./FAImageButtonContent";

//This file stores all the page description infos found on the Hangry Guardian project page
const PageDescriptionContent_HangryGuardians_PageTitle =
{
  pageTitle: "Hangry Guardians"
  ,
  description: null
}

const PageDescriptionContent_HangryGuardians_DownloadSection =
{
  pageTitle: "Download Hangry Guardians"
  ,
  description:
    <div >
      <FAImageButton content={FAImgButton_DownloadLink} />
    </div>
}

export
{
  PageDescriptionContent_HangryGuardians_PageTitle as PageDescriptContent_pageTitle
  , PageDescriptionContent_HangryGuardians_DownloadSection as PageDescriptContent_downloadSection
};
