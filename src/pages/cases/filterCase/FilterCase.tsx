import React, {useState} from 'react';
import {Button, FilterCaseWrapper} from './style';
import {Container} from '../../../common/style/Container';
import styled from 'styled-components';
import {setFilterCaseAC} from "../../../app/app-reduser";
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

    // const [res, setRes] = useState<string[]>([])
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);


    // const filterResultArr = casesData['all'].filter(el => {
    //     return res.includes(el.title)
    // })
    // console.log(filterResultArr)

    const handleOptionChange = (option: string) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option)
                ? prevSelectedOptions.filter((o) => o !== option)
                : [...prevSelectedOptions, option]
        );
    };

    const handleApplyClick = () => {
        dispatch(setFilterCaseAC({filter: selectedOptions}))
        //setRes(selectedOptions);
        setActiveGroup(null)
    };


    const [showBlock, setShowBlock] = useState(false)

    const filterData = [
        {
            id: '0',
            filterName: 'Категории',
            type: ['magazines', 'catalogs', 'sites', 'visit'],
            filterCategories: ['Интернет-магазины', 'Интеренет-каталоги', 'Корпоративные сайты', 'Сайт-визитки', 'Веб-сервисы', 'Мобильные приложения', 'ПО', ]
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
    const onClickCloseGroup = () => {
        if (activeGroup) {
            setActiveGroup(null)
        }
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
                                                <CheckboxLabel checked={selectedOptions.includes(option)}>
                                                    <CheckboxFilter
                                                        type="checkbox"
                                                        checked={selectedOptions.includes(option)}
                                                        onChange={() => handleOptionChange(option)}
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

            </Container>
        </FilterCaseWrapper>
    );
};

