// import LandingPage from "../../../Components/Pages/LandingPage/index";
import PageRouteData from "../../PageRouteData";
const CardTableInfo_ProjectPage =
{
    //Stores the card width & height as well as the numeber of rows & columns you want in a table
    tableData:
    {
        col: 3
        ,
        tableBackgroundColor: "#5A5A5A"
    }
    ,
    cardStyleInfo:
    {
        //The size of each card must be less than the size of the cell in order to leave space for margin
        cardWidth: "13em"
        , cardHeight: "17em"

        , cardHorizontalMargin: "2em"
        , cardVerticalMargin: "2em"

        , cardBackgroundColor: "#EBE9E8"
    }
    ,
    cardData:
        [
            //============ HANGRY GUARDIAN ===========
            {
                link: PageRouteData.HangryGuardiansPath
                , image: `../..${PageRouteData.ResourcePath}/Resources/HangryGuardians/AppIcon.png`
                , tag: ""
                , icon: `../..${PageRouteData.ResourcePath}/Resources/Images/Logos/Unity/unity-tab-square-black.png`
                , title: "Hangry Guardians"
                , description: "An android mobile game client project for GameStart Asia"
                , date: "2019"
                , customStyle:
                {
                    backgroundSize: "35%"
                    , backgroundPosition: "0% 15%"
                }
            }
        ]
}
export default CardTableInfo_ProjectPage;