import React, {FC} from 'react';
import {FilterBlockWrapper, FilterMenuList, MenuItem} from "./style";
import {Container} from "../../../common/style/Container";
import {FilterCaseType, FilterLinksType} from "../../../common/types/types";
import {useAppDispatch} from "../../../common/hook";

type FilterBlockPropsType = {
    filter: FilterCaseType

}

export const FilterBlock: FC<FilterBlockPropsType> = ({filter}) => {
    const dispatch = useAppDispatch()

    const arrayLinks: FilterLinksType = [
        {title: 'ВСЕ', filter: 'all'},
        {title: 'ИНТЕРНЕТ- МАГАЗИНЫ', filter: 'magazines'},
        {title: 'ИНТЕРНЕТ- КАТАЛОГИ', filter: 'catalogs'},
        {title: 'КОРПОРАТИВНЫЕ САЙТЫ', filter: 'sites'},
        {title: 'САЙТ- ВИЗИТКИ', filter: 'visit'},
    ]

    const onClickFilterHandler = (valFilter: FilterCaseType) => {
      //  dispatch(setFilterCaseAC({filter: valFilter}))
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

