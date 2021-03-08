import customStyles from "./CustomSideBySide.module.css";

const SideBySide_CSSInfo_alwaysHorizontal =
{
    cssStyle_flipped: customStyles.alwaysHorizontal_Flipped
    ,
    cssStyle_notFlipped: customStyles.alwaysHorizontal_NotFlipped
    ,
    cssStyle_SideBySideElement: customStyles.alwaysHorizontal_SideBySideElement
}

const SideBySide_CSSInfo_alwaysVertical =
{
    cssStyle_flipped: customStyles.alwaysVertical_Flipped
    ,
    cssStyle_notFlipped: customStyles.alwaysVertical_NotFlipped
    ,
    cssStyle_SideBySideElement: customStyles.alwaysVertical_SideBySideElement
}


export 
{
    SideBySide_CSSInfo_alwaysHorizontal
    ,
    SideBySide_CSSInfo_alwaysVertical
};