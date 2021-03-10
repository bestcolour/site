import customStyles from "./CustomSideBySide.module.css";

//#region ------------- Horizontal ----------------
const alwaysHorizontal_cssInfo_flipClasses = 
{
    cssClass_flipped : customStyles.alwaysHorizontal_Flipped
    ,
    cssClass_notFlipped: customStyles.alwaysHorizontal_NotFlipped
}

const alwaysHorizontal_cssClass_SideBySideElement = customStyles.alwaysHorizontal_SideBySideElement;
//#endregion


//#region ---------------- Vertical -----------------
const alwaysVertical_cssInfo_flipClasses = 
{
    cssClass_flipped : customStyles.alwaysVertical_Flipped
    ,
    cssClass_notFlipped: customStyles.alwaysVertical_NotFlipped
}
const alwaysVertical_cssClass_SideBySideElement = customStyles.alwaysVertical_SideBySideElement;
//#endregion

export 
{
    alwaysHorizontal_cssInfo_flipClasses as SideBySide_CommonInfo_AlwaysHorizontal_FlipClasses
    ,
    alwaysHorizontal_cssClass_SideBySideElement as SideBySide_CommonInfo_AlwaysHorizontal_cssClass_SideBySideElement
    ,
    alwaysVertical_cssInfo_flipClasses as SideBySide_CommonInfo_AlwaysVertical_FlipClasses
    ,
    alwaysVertical_cssClass_SideBySideElement as SideBySide_CommonInfo_AlwaysVertical_cssClass_SideBySideElement

};