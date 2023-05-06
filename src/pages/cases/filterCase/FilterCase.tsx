import React, {useState} from 'react';
import {Button, FilterCaseWrapper, FilterFormMobile, SubMobileMenu, TitleSubMobileMenu} from './style';
import {Container} from '../../../common/style/Container';
import styled from 'styled-components';
import {setFilterCategoryAC, setFilterCountryAC} from "../../../app/app-reduser";
import {useAppDispatch} from "../../../common/hook";

interface MyFormValues {
    category: string;
    industries: string;
    countries: string;
}

interface FilterProps {
    // options: string[];
    // applyFilter: (selectedOptions: string[]) => void;
}

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxFilter = styled.input`
  appearance: none;
  min-width: 18px;
  height: 18px;
  border: 1px solid var(--colors-text-dark);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  margin-right: 10px;

  &:checked:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "\\2714";
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 13px;
    color: var(--colors-text-dark);

  }

  &:checked {
    background: var(--colors-bg-green);
    border: 1px solid transparent !important;
  }

  &:hover {
    // background-color: #EFEFEF;
  }
`;
type CheckboxLabelProps = {
    checked: boolean
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
  // margin-bottom: 8px;
  cursor: pointer;
  font-size: 20px;
  color: var(--colors-text-dark);
  font-weight: var(--fw-medium);

  @media (max-width: 650px) {
    font-weight: var(--fw-regular);
  }
  
`;


const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .scrollbar-none {
    scrollbar-width: none;
    -ms-overflow-style: none
  }

  .scrollbar-none::-webkit-scrollbar {
    display: none;
    width: 0
  }

  ::-webkit-scrollbar {
    width: 7px
  }

  ::-webkit-scrollbar-track {
    background: #fff
  }

  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 6px
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888
  }

`;

export const FilterCase: React.FC<FilterProps> = ({}) => {
    const dispatch = useAppDispatch()
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const [showBlock, setShowBlock] = useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = React.useState<string[]>([]);

    const handleOptionChange = (option: string, filterName: string) => {
        if (filterName === 'Категории' ) {
            setSelectedCategory((filterStore) =>
                filterStore.includes(option)
                    ? filterStore.filter((o) => o !== option)
                    : [...filterStore, option]
            );
        } else if (filterName === 'Страны' ) {
            setSelectedCountry((filterStore) =>
                filterStore.includes(option)
                    ? filterStore.filter((o) => o !== option)
                    : [...filterStore, option]
            );
        }


    };

    const handleApplyClick = () => {
        dispatch(setFilterCategoryAC({filter: selectedCategory}))
        dispatch(setFilterCountryAC({filter: selectedCountry}))
        setActiveGroup(null)
        setShowBlock(false)
    };

    const filterData = [
        {
            id: '0',
            filterName: 'Категории',
            type: ['magazines', 'catalogs', 'sites', 'visit'],
            filterCategories: ['Интернет-магазины', 'Интеренет-каталоги', 'Корпоративные сайты', 'Сайт-визитки', 'Веб-сервисы', 'Мобильные приложения', 'ПО',]
        },
        {
            id: '1',
            filterName: 'Отрасли',
            filterCategories: ['Медицина', 'Образование', 'Интеренет торговля', 'Развлечения', 'Логистика']
        },
        {
            id: '2',
            filterName: 'Страны',
            filterCategories: ['Беларусь', 'Россия', 'США', 'Эстония', 'Казахстан', 'Европа']
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
                                                <CheckboxLabel checked={[...selectedCategory, ...selectedCountry].includes(option)}>
                                                    <CheckboxFilter
                                                        type="checkbox"
                                                        checked={[...selectedCategory, ...selectedCountry].includes(option)}
                                                        onChange={() => handleOptionChange(option, el.filterName)}
                                                    />
                                                    {option}
                                                </CheckboxLabel>
                                            </li>))}
                                    </Ul>
                                    <div className="filter__content-btn">
                                        <Button onClick={handleApplyClick}>Применить</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <FilterFormMobile >
                    <div className={'filter__item'} onClick={() => setShowBlock(!showBlock)}>
                        <span className="filter__title">Фильтр</span>
                        <div className="filter-btn"></div>
                    </div>
                    { showBlock &&  <SubMobileMenu>
                        {filterData.map((el) => (
                            <div key={el.id}>
                                <TitleSubMobileMenu>{el.filterName}</TitleSubMobileMenu>
                                <ul className="filter__content-list scrollbar-theme">
                                    {el.filterCategories.map(option => (
                                        <li key={option}>
                                            <CheckboxLabel checked={[...selectedCategory, ...selectedCountry].includes(option)}>
                                                <CheckboxFilter
                                                    type="checkbox"
                                                    checked={[...selectedCategory, ...selectedCountry].includes(option)}
                                                    onChange={() => handleOptionChange(option, el.filterName)}
                                                />
                                                {option}
                                            </CheckboxLabel>
                                        </li>))}
                                </ul>
                            </div>
                        ))}
                        <div className="filter__content-btn">
                            <Button onClick={handleApplyClick}>Применить</Button>
                        </div>
                    </SubMobileMenu>}
                </FilterFormMobile>
            </Container>
        </FilterCaseWrapper>
    );
};

