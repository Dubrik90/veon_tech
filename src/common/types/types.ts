export type ThemeType = 'light' | 'dark'
export type FilterLinksType = FilterLinkType[]

export type FilterLinkType = {
    title: string,
    filter: FilterCaseType
}
export type FilterCaseType = 'all' | 'magazines'| 'catalogs'| 'sites'| 'visit'