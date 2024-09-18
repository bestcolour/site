import customStyles from "./CustomSideBySide.module.css";

//#region ------------- Horizontal ----------------
const alwaysHorizontal_cssInfo_flipClasses =
{
    cssClass_flipped: customStyles.alwaysHorizontal_Flipped
    ,
    cssClass_notFlipped: customStyles.alwaysHorizontal_NotFlipped
}

const alwaysHorizontal_cssClass_DescriptionRoot = customStyles.alwaysHorizontal_HalfWidth;
const alwaysHorizontal_cssClass_SubjectRoot = customStyles.alwaysHorizontal_HalfWidth;
// const alwaysHorizontal_cssClass_SideBySideElement = customStyles.alwaysHorizontal_SideBySideElement;
//#endregion


//#region ---------------- Vertical -----------------
const alwaysVertical_cssInfo_flipClasses =
{
    cssClass_flipped: customStyles.alwaysVertical_Flipped
    ,
    cssClass_notFlipped: customStyles.alwaysVertical_NotFlipped
}
// const alwaysVertical_cssClass_SideBySideElement = customStyles.alwaysVertical_SideBySideElement;

const alwaysVertical_cssClass_DescriptionRoot = customStyles.alwaysVertical_FullWidth;
const alwaysVertical_cssClass_SubjectRoot = customStyles.alwaysVertical_FullWidth;
//#endregion

export 
{
    alwaysHorizontal_cssInfo_flipClasses as SideBySide_CommonInfo_AlwaysHorizontal_FlipClasses
    ,
    alwaysHorizontal_cssClass_DescriptionRoot as SideBySide_CommonInfo_AlwaysHorizontal_cssClass_DescriptionRoot
    ,
    alwaysHorizontal_cssClass_SubjectRoot as SideBySide_CommonInfo_AlwaysHorizontal_cssClass_SubjectRoot
    ,


    alwaysVertical_cssInfo_flipClasses as SideBySide_CommonInfo_AlwaysVertical_FlipClasses
    ,
    alwaysVertical_cssClass_DescriptionRoot as SideBySide_CommonInfo_AlwaysVertical_cssClass_DescriptionRoot
    ,
    alwaysVertical_cssClass_SubjectRoot as SideBySide_CommonInfo_AlwaysVertical_cssClass_SubjectRoot
};