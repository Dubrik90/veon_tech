import React, {useState} from 'react';
import {
    Button,
    CheckboxFilter,
    CheckboxLabel,
    FilterCaseWrapper,
    FilterFormMobile,
    SubMobileMenu,
    TitleSubMobileMenu,
    Ul
} from './style';
import {Container} from '../../../common/style/Container';
import {setFilterCategoryAC, setFilterCountryAC, setFilterIndustryAC} from "../../../app/app-reduser";
import {useAppDispatch} from "../../../common/hook";



export const FilterCase: React.FC = () => {
    const dispatch = useAppDispatch()
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const [showBlock, setShowBlock] = useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = React.useState<string[]>([]);
    const [selectedIndustry, setSelectedIndustry] = React.useState<string[]>([]);

    const handleOptionChange = (option: string, filterName: string) => {
        if (filterName === 'Categories') {
            setSelectedCategory((filterStore) =>
                filterStore.includes(option)
                    ? filterStore.filter((o) => o !== option)
                    : [...filterStore, option]
            );
        } else if (filterName === 'Countries') {
            setSelectedCountry((filterStore) =>
                filterStore.includes(option)
                    ? filterStore.filter((o) => o !== option)
                    : [...filterStore, option]
            );
        } else if (filterName === 'Industries') {
            setSelectedIndustry((filterStore) =>
                filterStore.includes(option)
                    ? filterStore.filter((o) => o !== option)
                    : [...filterStore, option]
            );
        }
    };

    const handleApplyClick = () => {
        dispatch(setFilterCategoryAC({filter: selectedCategory}))
        dispatch(setFilterCountryAC({filter: selectedCountry}))
        dispatch(setFilterIndustryAC({filter: selectedIndustry}))
        setActiveGroup(null)
        setShowBlock(false)
    };


    const filterData = [
        {
            id: '0',
            filterName: 'Categories',
           // type: ['magazines', 'catalogs', 'sites', 'visit'],
            filterCategories: ['Online stores', 'Online catalogs', 'Corporate websites', 'Web services', ]
        },
        {
            id: '1',
            filterName: 'Industries',
            filterCategories: ['Medicine', 'Online trading', 'Entertainments', 'Logistics']
        },
        {
            id: '2',
            filterName: 'Countries',
            filterCategories: ['Belarus', 'Russia', 'USA', 'Europe']
        },
    ]


    const onClickToggleHandler = (ind: string) => {
        if (ind == activeGroup) {
            return setActiveGroup(null)
        }
        setActiveGroup(ind)
    }

    return (
        <FilterCaseWrapper>
            <Container>
                <div className="filter__form">
                    {filterData.map((el) => (
                        <div className={activeGroup === el.id ? 'filter__block show' : 'filter__block'} key={el.id}
                             onClick={() => onClickToggleHandler(el.id)}>
                            <div className="filter__item"
                                 onClick={() => setShowBlock(!showBlock)}>
                                <span className="filter__title">{el.filterName}</span>
                                <div className="filter-btn"></div>
                            </div>
                            <div className='filter__content'>
                                <div className="filter__content-inner" onClick={(e) => e.stopPropagation()}>
                                    <Ul className="filter__content-list scrollbar-theme">
                                        {el.filterCategories.map((option) => (
                                            <li key={option}>
                                                <CheckboxLabel
                                                    checked={[...selectedCategory, ...selectedCountry, ...selectedIndustry].includes(option)}>
                                                    <CheckboxFilter
                                                        type="checkbox"
                                                        checked={[...selectedCategory, ...selectedCountry, ...selectedIndustry].includes(option)}
                                                        onChange={() => handleOptionChange(option, el.filterName)}
                                                    />
                                                    {option}
                                                </CheckboxLabel>
                                            </li>))}
                                    </Ul>
                                    <div className="filter__content-btn">
                                        <Button onClick={handleApplyClick}>APPLY</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <FilterFormMobile className={showBlock ? 'filter__block show' : ''}>
                    <div className='filter__item' onClick={() => setShowBlock(!showBlock)}>
                        <span className="filter__title">Фильтр</span>
                        <div className='filter-btn'></div>
                    </div>
                    {showBlock && <SubMobileMenu>
                        {filterData.map((el) => (
                            <div key={el.id}>
                                <TitleSubMobileMenu>{el.filterName}</TitleSubMobileMenu>
                                <ul className="filter__content-list scrollbar-theme">
                                    {el.filterCategories.map(option => (
                                        <li key={option}>
                                            <CheckboxLabel
                                                checked={[...selectedCategory, ...selectedCountry, ...selectedIndustry].includes(option)}>
                                                <CheckboxFilter
                                                    type="checkbox"
                                                    checked={[...selectedCategory, ...selectedCountry, ...selectedIndustry].includes(option)}
                                                    onChange={() => handleOptionChange(option, el.filterName)}
                                                />
                                                {option}
                                            </CheckboxLabel>
                                        </li>))}
                                </ul>
                            </div>
                        ))}
                        <div className="filter__content-btn">
                            <Button onClick={handleApplyClick}>APPLY</Button>
                        </div>
                    </SubMobileMenu>}
                </FilterFormMobile>
            </Container>
        </FilterCaseWrapper>
    );
};

