import React from "react";
import FAImageButton from "../../Common/Button/FAImageButton";

export default function TopNavBarMobile({ linksData, selectedPageName })
{

    function OnClicked_FAImageButton()
    {
console.log("Open panel");
    }

    const FAImageButtonContent_example =
    {
        //You can wrap a <p></p> around this to make other arrangements
        imageJSX: <i className="fas fa-bars fa-2x"></i>
        ,
        buttonLink: null
        ,
        target: ""
    }

    return (
        <div>
            <FAImageButton content={FAImageButtonContent_example} onClickFunction={OnClicked_FAImageButton} />
        </div>
    );
}