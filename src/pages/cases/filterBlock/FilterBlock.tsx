import React, {useState} from 'react';
import {FilterBlockWrapper, FilterMenuList, MenuItem} from "./style";
import {Container} from "../../../common/style/Container";
import {FilterCaseType, FilterLinksType} from "../../../common/types/types";

export const FilterBlock = () => {
    const [filter, setFilter] = useState<FilterCaseType>('all')

    const aryLinks: FilterLinksType = [
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
                    {aryLinks.map((el, index) => <MenuItem
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

