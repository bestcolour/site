import React from "react";
import style from "./Table.module.css";
import {PageRouteData} from "../../../Data/PageRouteData";

//#region Import Commons
import Card from "../Card";
//#endregion

//props : info
export default class CardTable extends React.Component
{
    //#region ==================== Template =============================
    // const CardTableInfo_example =
    //     {
    //         //#region --------------- Table Data ----------------------
    //         //Stores the number of columns you want per row and the bg color
    //         tableData:
    //         {
    //             col: 3
    //             ,
    //             tableBackgroundColor: "#5A5A5A"
    //         }
    //         //#endregion
    //         ,
    //         //#region --------------- CardStyle Info ------------------------
    //         cardStyleInfo:
    //         {
    //             //Store the dimensions and margin of each card, as well as it bg color
    //             //The size of each card must be less than the size of the cell in order to leave space for margin
    //             cardWidth: "13em"
    //             , cardHeight: "17em"

    //             , cardHorizontalMargin: "2em"
    //             , cardVerticalMargin: "2em"

    //             , cardBackgroundColor: "#EBE9E8"
    //         }
    //         //#endregion
    //         ,
    //         //#region  --------------------- Card Data --------------------
    //         cardData:
    //             //CardData holds an array of data
    //             // - Link (for the href)
    //             // - Image of the project (optional)
    //             // - Tag (for sorting)
    //             // - Icon (optional, it is displayed at the top right corner of the card)
    //             // - Title (For searchbox)
    //             // - Short Description (For searchbox)
    //             // - Date of project (For sorting)
    //             [
    //                 //     //================== TEMPLATE CARD ==================
    //                 //     {
    //                 //        link: PageRouteData.ProjectPagePath
    //                 //        , image: ""
    //                 //        , tag: ""
    //                 //        , icon: `../..${PageRouteData.ResourcePath}Images/Logos/Unity/unity-tab-square-black.png`
    //                 //        , title: ""
    //                 //        , description: ""
    //                 //        , date: ""
    //                 //  , customStyle:
    //                 // {
    //                 //     backgroundSize: "35%"
    //                 //     , backgroundPosition: "0% 15%"
    //                 // }
    //                 //    }
    //             ]
    //         //#endregion

    //     }
    //#endregion


    constructor(props)
    {
        super(props);
        //Set state
        this.state =
        {
            //This is the list which you will do sorting with, it will be an array of arrays where the first array will represent row group and the second will be col elements
            //cardList[0] = firstRow
            //cardList[0][0] = firstRow's card element
            cardsList: []
        }
    }

    componentDidMount() 
    {
        //#region  Deconstruction
        const { cardData, cardStyleInfo, tableData } = this.props.info;
        //#endregion


        //On Mount, add all the data into an array and then render it
        this.setState
            (
                prevState => 
                {
                    let populatedCardsList = [...prevState.cardsList];

                    for (let index = 0; index < cardData.length; index++)
                    {
                        //Calculate which row this card belongs to
                        const rowIndex = index % tableData.col_desktop_;
                        const cardInfo = cardData[index];


                        //If the populdatedCardList havent created this row array,
                        if (populatedCardsList.length === rowIndex)
                        {
                            populatedCardsList.push([]);
                        }

                        populatedCardsList[rowIndex].push(<Card key={`CardInfo ${index}`} cardInfo={cardInfo} cardStyleInfo={cardStyleInfo} />)
                    }

                    //Iterate through all of the row groups and add a div to make sure that the rows are separated according to their rows
                    populatedCardsList = populatedCardsList.map(rowGroup => <div>{rowGroup}</div>)

                    return { cardsList: populatedCardsList };
                }
            )
    }

    render()
    {
        //#region  Deconstruction
        //CardTableInfo's TableData
        const { tableData } = this.props.info;
        //#endregion

        //#region Table Style
        const tableBackgroundStyle =
        {
            backgroundColor: tableData.tableBackgroundColor
        }
        //#endregion

        //Render the cardList
        return (
            <div className={style.table} style={tableBackgroundStyle}>
                {/* Cards */}
                {this.state.cardsList}
            </div>
        );
    }

}

