import React, {FC} from 'react';
import {FilterBlockWrapper, FilterMenuList, MenuItem} from "./style";
import {Container} from "../../../common/style/Container";
import {FilterCaseType, FilterLinksType} from "../../../common/types/types";

type FilterBlockPropsType = {
    filter: FilterCaseType
    setFilter: (valFilter: FilterCaseType) => void
}

export const FilterBlock: FC<FilterBlockPropsType> = ({filter, setFilter}) => {

    const arrayLinks: FilterLinksType = [
        {title: 'ВСЕ', filter: 'all'},
        {title: 'ИНТЕРНЕТ- МАГАЗИНЫ', filter: 'magazines'},
        {title: 'ИНТЕРНЕТ- КАТАЛОГИ', filter: 'catalogs'},
        {title: 'КОРПОРАТИВНЫЕ САЙТЫ', filter: 'sites'},
        {title: 'САЙТ- ВИЗИТКИ', filter: 'visit'},
    ]

    const onClickFilterHandler = (valFilter: FilterCaseType) => {
        setFilter(valFilter)
    }

    return (
        <FilterBlockWrapper>
            <Container>
                <FilterMenuList>
                    {arrayLinks.map((el, index) => <MenuItem
                        className={filter === el.filter ? 'activeFilter' : ''}
                        key={index}
                        onClick={() => onClickFilterHandler(el.filter)}
                    >{el.title}
                    </MenuItem>)}
                </FilterMenuList>
            </Container>
        </FilterBlockWrapper>
    );
};

