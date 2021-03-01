// import FAImageButton from "../../../../../Components/Common/Button/FAImageButton";
import ImageButton from "../../../../../Components/Common/Button/ImageButton";
import { PageRouteData } from "../../../../PageRouteData";

//This file stores all the page description infos found on the Hangry Guardian project page
const PageDescriptionContent_PageTitle =
{
  pageTitle: "What If"
  ,
  description: null
}



const ImageButton_Content =
{
  imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/itch-io-badge.png`
  ,
  buttonLink: "https://fyp-whatif.itch.io/what-if"
  ,
  target: "_blank"
  ,
  width: "11.5em"
  ,
  height: "3.5em"
}



const PageDescriptionContent_DownloadSection =
{
  pageTitle: "Play What If?"
  ,
  description:
    <div >
      <ImageButton content={ImageButton_Content} />
    </div>
}

export
{
  PageDescriptionContent_PageTitle as PageDescriptContent_pageTitle
  , PageDescriptionContent_DownloadSection as PageDescriptContent_downloadSection
};
