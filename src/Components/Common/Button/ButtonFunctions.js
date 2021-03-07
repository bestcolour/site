//Returns a button type by checking if the button's link and clickfunction are defined
function GetButtonType(buttonLink, onClickFunction)
{
    let buttonType;
    if (buttonLink === null)
    {
        //Button is not going to be used for linking purposes
        if (onClickFunction === undefined)
        {
            //Button is just a picture with no purpose.... wth?
            buttonType = "UNUSED";
        }
        else
        {
            //Button is used to call functions only
            buttonType = "FUNCTION_ONLY";
        }
    }
    else
    {
        //Button is going to be used for linking purposes
        if (onClickFunction === undefined)
        {
            //Button is purely just used for linking
            buttonType = "LINK_ONLY";
        }
        else
        {
            //Button is used to call functions and linking purposes
            buttonType = "LINK_AND_FUNCTION";
        }
    }

    return buttonType;
}


//Returns boolean to determine whether a url link is pointing to a site within my website or a site outside of my website
function IsLinkToWithinSite(link)
{

    return link === null ? false : !link.includes("https://");
}


export 
{
    GetButtonType
    , IsLinkToWithinSite
};