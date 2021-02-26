import PageRouteData from "../PageRouteData";

const TopNavBarData =
{
    LinksData:
        [
            {
                linkName: "About Me"
                ,
                link: PageRouteData.LandingPagePath
            }
            ,
            {
                linkName: "Portfolio"
                ,
                link: PageRouteData.PortfolioPagePath
            }
            ,
            {
                linkName: "My Projects"
                ,
                link: PageRouteData.ProjectPagePath
            }
            , 
            {
                linkName: "Contact Me"
                ,
                link: PageRouteData.ContactPagePath
            }
        ]
    ,
    StyleData:
    {
        backgroundColor : "#393939"
    }

}



export default TopNavBarData;