// import FAImageButton from "../../../../../Components/Common/Button/FAImageButton";
// import { FAImgButton_DownloadLink } from "./FAImageButtonContent";
import {PageRouteData} from "../../../../PageRouteData";
import ImageButton from "../../../../../Components/Common/Button/ImageButton";


const ImageButtonContent_example =
{
  imageSrc: `../..${PageRouteData.ResourcePath}Images/Logos/GitHubLogo.png`
  ,
  buttonLink: "https://github.com/bestcolour-Completed-Projects/Linear-Effect-Manager-2"
  ,
  target: "_blank"
}



//This file stores all the page description infos found on the Hangry Guardian project page
const PageDescriptionContent_DownloadSection =
{
  pageTitle: "Download LEM"
  ,
  description:
    <div >
      <ImageButton content={ImageButtonContent_example} />
      {/* <FAImageButton content={FAImgButton_DownloadLink} /> */}
    </div>
}

export
{
  PageDescriptionContent_DownloadSection as PageDescriptContent_downloadSection
};
