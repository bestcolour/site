import React from "react";
import TopNavBarComponent from "./TopNavBarComponent";

export default function TopNavBar({topNavBarData , selectedPageName})
{

  //Keeping it as a component holder for now incase i want to switch between mobile & desktop versions?
  return (
    <TopNavBarComponent linksData={topNavBarData.LinksData} styleData={topNavBarData.StyleData} selectedPageName = {selectedPageName}/>
  );

}

