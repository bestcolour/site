const PageRouteData =
{
    //Please use <Link> instead of <a> if you are using these paths for links

    LandingPagePath: "/"
    , ProjectPagePath: "/projectPage"
    , PortfolioPagePath: "/portfolio"
    , ContactPagePath: "/contact"

    //#region Project Pages
    , GamesPagePath: "/projectPage/games"
    , ScriptsAndToolsPath: "/projectPage/scriptsAndTools"
    //REMINDER TO SELF:
    //When you are appending projectpages, do not use "-" to separate words, instead use "/" or else ReactRouter will not work!
    , HangryGuardiansPath: "/projectPage/hangryGuardians"
    , SpaceRunnersPath: "/projectPage/spaceRunners"
    , HaulAwayPath: "/projectPage/haulAway"
    , DragAndPullPath: "/projectPage/dragAndPull"
    , WhatIfPath: "/projectPage/whatIf"
    , LEMPath: "/projectPage/lem"
    , PythonMacroPath: "/projectPage/pythonMacro"
    , WhatsAppBotPath: "/projectPage/whatsAppBot"
    , CScriptTyperPath: "/projectPage/csharpGenericListInClanguage"
    //#endregion

    ,
    ResourcePath: "/site/Resources/"
    ,
    PublicPath: "/site/"
}

function OnClickNewSite()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export  
{
    PageRouteData
    , OnClickNewSite
}
;