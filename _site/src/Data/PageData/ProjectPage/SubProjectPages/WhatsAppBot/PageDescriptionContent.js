import FAImageButton from "../../../../../Components/Common/Button/FAImageButton";
import { FAImgButton_DownloadLink } from "./FAImageButtonContent";

//This file stores all the page description infos found on the Hangry Guardian project page
const PageDescriptionContent_PageTitle =
{
  pageTitle: "Whatsapp Bot"
  ,
  description: null
}

const PageDescriptionContent_DownloadSection =
{
  pageTitle: "Download Whatsapp Bot"
  ,
  description:
    <div >
      <FAImageButton content={FAImgButton_DownloadLink} />
    </div>
}

export
{
  PageDescriptionContent_PageTitle as PageDescriptContent_pageTitle
  , PageDescriptionContent_DownloadSection as PageDescriptContent_downloadSection
};
