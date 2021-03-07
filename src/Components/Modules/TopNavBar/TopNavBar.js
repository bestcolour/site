import React from "react";
import TopNavBarDesktop from "./TopNavBarDesktop";
import TopNavBarMobile from "./TopNavBarMobile";
import styles from "./TopNavBar.module.css";

//#region --------------- Data ------------------
import TopNavBarData from "../../../Data/ModuleData/TopNavBarData";
//#endregion

export default function TopNavBar({ selectedPageName })
{

  //Keeping it as a component holder for now incase i want to switch between mobile & desktop versions?
  return (
    <div>

      <div id={styles.navBarDesktopRoot}>
        <TopNavBarDesktop linksData={TopNavBarData.LinksData} selectedPageName={selectedPageName} />
      </div>

      <div id={styles.navBarMobileRoot}>
        <TopNavBarMobile linksData={TopNavBarData.LinksData} selectedPageName={selectedPageName} />
      </div>
    </div>
  );

}

