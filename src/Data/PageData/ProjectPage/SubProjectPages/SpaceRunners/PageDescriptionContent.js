import FAImageButton from "../../../../../Components/Common/Button/FAImageButton";
import { FAImgButton_DownloadLink } from "./FAImageButtonContent";

//This file stores all the page description infos found on the Hangry Guardian project page
const PageDescriptionContent_SpaceRunners_PageTitle =
{
  pageTitle: "Space Runners"
  ,
  description: null
}

const PageDescriptionContent_SpaceRunners_DownloadSection =
{
  pageTitle: "Download Space Runners"
  ,
  description:
    <div >
      <FAImageButton content={FAImgButton_DownloadLink} />
    </div>
}

export
{
  PageDescriptionContent_SpaceRunners_PageTitle as PageDescriptContent_pageTitle
  , PageDescriptionContent_SpaceRunners_DownloadSection as PageDescriptContent_downloadSection
};
