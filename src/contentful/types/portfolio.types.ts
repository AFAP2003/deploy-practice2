import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioFields {
    image: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Symbol;
    bodyOne?: EntryFieldTypes.Text;
    bodyTwo?: EntryFieldTypes.Text;
    bodyThree?: EntryFieldTypes.Text;
    bodyFour?: EntryFieldTypes.Text;
}

export interface IContentfulAsset {
    sys:{id:string},
    fields:{
        file:{
            url:string,
            detail?:string,
            filename?:string,
            contentType?:string
        }
    }
}

export type TypePortfolioSkeleton = EntrySkeletonType<TypePortfolioFields, "portfolio">;
export type TypePortfolio<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePortfolioSkeleton, Modifiers, Locales>;