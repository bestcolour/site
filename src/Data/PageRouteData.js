const PageRouteData =
{
    //Please use <Link> instead of <a> if you are using these paths for links

    LandingPagePath: "/"
    , ProjectPagePath: "/projectPage"
    , PortfolioPagePath: "/portfolio"
    , ContactPagePath  : "/contact"

    //#region Project Pages
    //REMINDER TO SELF:
    //When you are appending projectpages, do not use "-" to separate words, instead use "/" or else ReactRouter will not work!
    , HangryGuardiansPath: "/projectPage/hangryGuardians"
    , SpaceRunnersPath: "/projectPage/spaceRunners"
    //#endregion

    ,
    ResourcePath: "/site/Resources/"
    ,
    PublicPath: "/site/"
}

export default PageRouteData;