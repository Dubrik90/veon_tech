export type ThemeType = 'light' | 'dark'
export type FilterLinksType = FilterLinkType[]

export type FilterLinkType = {
    title: string,
    filter: FilterCaseType
}
export type FilterCaseType = 'all' | 'magazines'| 'catalogs'| 'sites'| 'visit'
export type CaseType = {
    id: string,
    type: FilterCaseType,
    route: string,
    img: string,
    title: string,
}
export type CasesType = {
    ['magazines']: CaseType[],
    ['catalogs']: CaseType[],
    ['sites']: CaseType[],
    ['visit']: CaseType[],
    ['all']: CaseType[],
}
