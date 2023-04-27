import React, {useState} from 'react';
import {FilterCaseWrapper} from './style';
import {Container} from '../../../common/style/Container';
import {Form, Formik, FormikHelpers} from "formik";
import {
    Button,
    CustomInput,
    InputBlock,
    Label,
    ModalWindowWrapper,
    RegisterWrapper, SubText,
    Title
} from "../../../common/components/consultantModal/style";
import {Clouse} from "../../../common/components/modalWindow/assets";
import PhoneInput from "react-phone-input-2";
import {CustomInputFile, InputFileText} from "../../../common/components/modalWindow/style";

interface MyFormValues {
    firstName: string;
    phone: string;
    myFile: File | null;
}

export const FilterCase = () => {
    const [showBlock, setShowBlock] = useState(false)

    const filterData = [
        {
            id: '0',
            filterName: 'Категории',
            filterCategories: ['Интернет-магазины', 'B2B', 'Сайты', 'Приложения', 'Интеграции', 'Битрикс24', 'Техподдержка', 'Дизайн-концепция', 'Готовые решения',]
        },
        {
            id: '1',
            filterName: 'Отрасли',
            filterCategories: ['Топ', 'Банки', 'Образование', 'Гос. организации', 'Фитнес', 'Развлечения', 'Технологии',
                'Канцтовары', 'Некоммерческие организации', 'Медицина', 'Промышленность',]
        },
        {
            id: '2',
            filterName: 'Страны',
            filterCategories: ['Беларусь', 'Россия', 'Армения', 'Казахстан', 'Европа', 'США']
        },
    ]

    const handleSubmit = (
        values: MyFormValues,
        {setSubmitting}: FormikHelpers<MyFormValues>
    ) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <FilterCaseWrapper>
            <Container>
                <Formik<MyFormValues>
                    initialValues={{
                        firstName: "",
                        phone: "",
                        myFile: null,
                    }}
                    onSubmit={handleSubmit}
                >
                    {({values, handleSubmit, handleChange, setFieldValue}) => (
                        <Form onSubmit={handleSubmit}>

                            <Button type='submit'>Отправить</Button>
                        </Form>
                    )}
                </Formik>


                <form className="filter__form js-filter-form">
                    <div className={showBlock ? 'filter__block show' : 'filter__block'}>
                        <div className="filter__item js-filter-item" onClick={() => setShowBlock(!showBlock)}>
                            <span className="filter__title">Категории</span>
                            <div className="filter-btn js-filter-btn"></div>
                        </div>
                        <div className='filter__content'>
                            <div className="filter__content-inner">
                                <ul className="filter__content-list scrollbar-theme">
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_917"
                                               type="checkbox" value="917" name="FILTERS[FILTER_CATEGORY_917]"/>
                                        <label htmlFor="FILTER_CATEGORY_917">Интернет-магазины</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_918"
                                               type="checkbox" value="918" name="FILTERS[FILTER_CATEGORY_918]"/>
                                        <label htmlFor="FILTER_CATEGORY_918">B2B</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_919"
                                               type="checkbox" value="919" name="FILTERS[FILTER_CATEGORY_919]"/>
                                        <label htmlFor="FILTER_CATEGORY_919">Сайты</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_920"
                                               type="checkbox" value="920" name="FILTERS[FILTER_CATEGORY_920]"/>
                                        <label htmlFor="FILTER_CATEGORY_920">Приложения</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_930"
                                               type="checkbox" value="930" name="FILTERS[FILTER_CATEGORY_930]"/>
                                        <label htmlFor="FILTER_CATEGORY_930">Интеграции</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_929"
                                               type="checkbox" value="929" name="FILTERS[FILTER_CATEGORY_929]"/>
                                        <label htmlFor="FILTER_CATEGORY_929">Битрикс24</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_931"
                                               type="checkbox" value="931" name="FILTERS[FILTER_CATEGORY_931]"/>
                                        <label htmlFor="FILTER_CATEGORY_931">Техподдержка</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_950"
                                               type="checkbox" value="950" name="FILTERS[FILTER_CATEGORY_950]"/>
                                        <label htmlFor="FILTER_CATEGORY_950">Дизайн-концепция</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_CATEGORY_987"
                                               type="checkbox" value="987" name="FILTERS[FILTER_CATEGORY_987]"/>
                                        <label htmlFor="FILTER_CATEGORY_987">Готовые решения</label>
                                    </li>
                                </ul>
                                <div className="filter__content-btn">
                                    <button className="filter__content-apply js-filter-content-apply btn" type="button">
                                        Применить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__block js-filter-block">
                        <div className="filter__item js-filter-item" data-filter-item="filterFILTER_INDUSTRIES"><span
                            className="filter__title">Отрасли</span>
                            <div className="filter-btn js-filter-btn"></div>
                        </div>
                        <div className="filter__content js-filter-content" data-filter-cont="filterFILTER_INDUSTRIES">
                            <div className="filter__content-inner">
                                <ul className="filter__content-list scrollbar-theme">
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_921"
                                               type="checkbox" value="921" name="FILTERS[FILTER_INDUSTRIES_921]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_921">Топ</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_922"
                                               type="checkbox" value="922" name="FILTERS[FILTER_INDUSTRIES_922]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_922">Банки</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_923"
                                               type="checkbox" value="923" name="FILTERS[FILTER_INDUSTRIES_923]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_923">Образование</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_924"
                                               type="checkbox" value="924" name="FILTERS[FILTER_INDUSTRIES_924]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_924">Гос. организации</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_942"
                                               type="checkbox" value="942" name="FILTERS[FILTER_INDUSTRIES_942]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_942">Фитнес</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_939"
                                               type="checkbox" value="939" name="FILTERS[FILTER_INDUSTRIES_939]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_939">Развлечения</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_934"
                                               type="checkbox" value="934" name="FILTERS[FILTER_INDUSTRIES_934]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_934">Технологии</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_949"
                                               type="checkbox" value="949" name="FILTERS[FILTER_INDUSTRIES_949]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_949">Канцтовары</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_943"
                                               type="checkbox" value="943" name="FILTERS[FILTER_INDUSTRIES_943]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_943">Некоммерческие организации</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_932"
                                               type="checkbox" value="932" name="FILTERS[FILTER_INDUSTRIES_932]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_932">Медицина</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_948"
                                               type="checkbox" value="948" name="FILTERS[FILTER_INDUSTRIES_948]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_948">Промышленность</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_944"
                                               type="checkbox" value="944" name="FILTERS[FILTER_INDUSTRIES_944]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_944">Детские товары</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_935"
                                               type="checkbox" value="935" name="FILTERS[FILTER_INDUSTRIES_935]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_935">Бытовая техника</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_947"
                                               type="checkbox" value="947" name="FILTERS[FILTER_INDUSTRIES_947]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_947">Еда, напитки</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_940"
                                               type="checkbox" value="940" name="FILTERS[FILTER_INDUSTRIES_940]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_940">Мода</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_936"
                                               type="checkbox" value="936" name="FILTERS[FILTER_INDUSTRIES_936]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_936">Цифровые продукты</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_937"
                                               type="checkbox" value="937" name="FILTERS[FILTER_INDUSTRIES_937]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_937">Строительство, мебель</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_941"
                                               type="checkbox" value="941" name="FILTERS[FILTER_INDUSTRIES_941]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_941">Косметика</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_933"
                                               type="checkbox" value="933" name="FILTERS[FILTER_INDUSTRIES_933]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_933">Авто</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_INDUSTRIES_938"
                                               type="checkbox" value="938" name="FILTERS[FILTER_INDUSTRIES_938]"/>
                                        <label htmlFor="FILTER_INDUSTRIES_938">Путешествия</label>
                                    </li>
                                </ul>
                                <div className="filter__content-btn">
                                    <button className="filter__content-apply js-filter-content-apply btn" type="button">
                                        Применить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__block js-filter-block">
                        <div className="filter__item js-filter-item" data-filter-item="filterFILTER_COUNRTIES"><span
                            className="filter__title">Страны</span>
                            <div className="filter-btn js-filter-btn"></div>
                        </div>
                        <div className="filter__content js-filter-content" data-filter-cont="filterFILTER_COUNRTIES">
                            <div className="filter__content-inner">
                                <ul className="filter__content-list scrollbar-theme">
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_925"
                                               type="checkbox" value="925" name="FILTERS[FILTER_COUNRTIES_925]"/>
                                        <label htmlFor="FILTER_COUNRTIES_925">Беларусь</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_926"
                                               type="checkbox" value="926" name="FILTERS[FILTER_COUNRTIES_926]"/>
                                        <label htmlFor="FILTER_COUNRTIES_926">Россия</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_927"
                                               type="checkbox" value="927" name="FILTERS[FILTER_COUNRTIES_927]"/>
                                        <label htmlFor="FILTER_COUNRTIES_927">Армения</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_928"
                                               type="checkbox" value="928" name="FILTERS[FILTER_COUNRTIES_928]"/>
                                        <label htmlFor="FILTER_COUNRTIES_928">Казахстан</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_946"
                                               type="checkbox" value="946" name="FILTERS[FILTER_COUNRTIES_946]"/>
                                        <label htmlFor="FILTER_COUNRTIES_946">Европа</label>
                                    </li>
                                    <li className="filter__content-item">
                                        <input className="styled-checkbox js-filter-checkbox" id="FILTER_COUNRTIES_945"
                                               type="checkbox" value="945" name="FILTERS[FILTER_COUNRTIES_945]"/>
                                        <label htmlFor="FILTER_COUNRTIES_945">США</label>
                                    </li>
                                </ul>
                                <div className="filter__content-btn">
                                    <button className="filter__content-apply js-filter-content-apply btn" type="button">
                                        Применить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__mob-apply">
                        <button className="filter__content-apply js-filter-content-apply btn" type="button">Применить
                        </button>
                    </div>
                </form>
            </Container>
        </FilterCaseWrapper>
    );
};

