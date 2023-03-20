import React, {FC, useState, MouseEvent, useRef} from 'react';
import {ModalWindowWrapper} from "./style";
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string,
    phone?: string
}

type ModalWindowPropsType = {
    openModal: () => void
}

type BudgetType = 'Индивидуальный расчет' | '5K - 10K' | '10K - 50K' | 'Больше 50 K' | ''
export const ModalWindow: FC<ModalWindowPropsType> = ({openModal, ...rest}) => {
    const [activeTab, setActiveTab] = useState(true)
    const [service, setService] = useState(true)
    const [budget, setBudget] = useState('')
    const [helpFizUser, setHelpFizUser] = useState('')
    const [helpCompany, setHelpCompany] = useState('')


    const helpFizUserArray = [
        {val: 'Я знаю чего хочу'},
        {val: 'Доверюсь вашей компании'},
    ]
    const helpCompanyArray = [
        {val: 'У нас есть готовая идея'},
        {val: 'Доверимся вашей компании'},
    ]

    const budgetValuesArray = [
        {val: 'Индивидуальный расчет'},
        {val: '5K - 10K'},
        {val: '10K - 50K'},
        {val: 'Больше 50 K'},
    ]
    const servicesArray = [
        {service: 'Разработка сайтов'},
        {service: 'Разработка ПО'},
        {service: 'Поддержка проектов'},
        {service: 'UX/UI дизайн'},
    ]
    const onClickSetBudgetHandler = (val: string) => {
        setBudget(val)
    }
    const initialValueFile = {
        file: ""
    };
    const fileRef = useRef(null);


    const formik = useFormik({

        initialValues: {
            name: '',
            surName: '',
            phone: '',
            email: '',
            budget: '',
            companyName: '',
            aboutCompany: '',
            helpCompany: '',
            helpFizUser: '',
            service: '',
            files: ''
        },


        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Поле не может быть пустым'
            }
            if (!values.phone) {
                errors.phone = 'укажите ваш телефон'
            }
            return errors
        },
        onSubmit: values => {
            console.log(formik.values)
        }
    })

    return (
        <ModalWindowWrapper>
            <div className="modal-main-set modal-main-set--active">
                <div className="container">
                    <div className="modal-main-set__content">
                        <div className="dynamic-contact">
                            <div className="dynamic-contact__head">
                                <div className="modal-title">Свяжитесь с нами</div>
                                <div onClick={() => openModal()} className="close-modal">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="dynamic-contact__tabs">
                                <div onClick={() => setActiveTab(!activeTab)}
                                     className={activeTab ? 'tab tab--active' : 'tab'}>Физическое лицо
                                </div>
                                <div onClick={() => setActiveTab(!activeTab)}
                                     className={activeTab ? 'tab' : 'tab tab--active'}>Юридическое лицо
                                </div>
                            </div>
                            <div className="dynamic-contact__body ">
                                <div className={'item .item--active'}>
                                    <form onSubmit={formik.handleSubmit} className="form-data contact-form"
                                          autoComplete="off"
                                          encType="multipart/form-data">
                                        <div className="form-data__item">
                                            <div className="input-wrapper">
                                                <input className="input-item"
                                                       required={true}
                                                       type={'text'}
                                                       {...formik.getFieldProps('name')}
                                                       onChange={formik.handleChange}
                                                />
                                                <label className="input-label">Имя</label>
                                            </div>
                                        </div>
                                        <div className="form-data__item">
                                            <div className="input-wrapper">
                                                <input className="input-item"
                                                       required={true}
                                                       type={'text'}
                                                       {...formik.getFieldProps('surName')}
                                                       onChange={formik.handleChange}
                                                />
                                                <label className="input-label" htmlFor="surname_input_1">Фамилия</label>
                                            </div>
                                        </div>
                                        <div className="form-data__item">
                                            <div className="input-wrapper">
                                                <input className="input-item"
                                                       required={true}
                                                       type={'tel'}
                                                       {...formik.getFieldProps('phone')}
                                                       onChange={formik.handleChange}
                                                />
                                                <label className="input-label" htmlFor="tel_input_1">Телефон</label>
                                            </div>
                                        </div>
                                        <div className="form-data__item">
                                            <div className="input-wrapper">
                                                <input className="input-item"
                                                       required={true}
                                                       type={'email'}
                                                       {...formik.getFieldProps('email')}
                                                       onChange={formik.handleChange}
                                                />
                                                <label className="input-label" htmlFor="mail_input_1">Электронная
                                                    почта</label>
                                            </div>
                                        </div>
                                        {
                                            !activeTab &&
                                            <>
                                                <div className="form-data__item">
                                                    <div className="input-wrapper">
                                                        <input className="input-item "
                                                               required={true}
                                                               type={'text'}
                                                               {...formik.getFieldProps('companyName')}
                                                               onChange={formik.handleChange}
                                                        />
                                                        <label className="input-label">Название компании</label>
                                                    </div>
                                                </div>
                                                <div className="form-data__item">
                                                    <div className="input-wrapper">
                                                        <input className="input-item "
                                                               required={true}
                                                               type={'text'}
                                                               {...formik.getFieldProps('aboutCompany')}
                                                               onChange={formik.handleChange}
                                                        />
                                                        <label className="input-label">
                                                            Чем занимается ваша компания?
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        <div className="form-data__item form-data__item--choose">
                                            <div className="choose-wrapper">
                                                <div className="choose-wrapper__title light-gradient-text">
                                                    Бюджет в USD
                                                </div>
                                                <div className="choose-wrapper__choise custom-choise">
                                                    {
                                                        budgetValuesArray.map((el, index) => {
                                                            const onClickHandler = () => {
                                                                formik.values.budget = el.val;
                                                                setBudget(el.val)
                                                            }
                                                            return (
                                                                <div key={index}
                                                                     onClick={onClickHandler}
                                                                     className={formik.values.budget === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            activeTab &&
                                            <>
                                                <div className="form-data__item form-data__item--multi-choose">
                                                    <div className="choose-wrapper">
                                                        <div className="choose-wrapper__title light-gradient-text">
                                                            Услуги
                                                        </div>
                                                        <div className="choose-wrapper__choise">
                                                            {
                                                                servicesArray.map((ser, index) => {
                                                                    const onClickActiveServiceHandler = () => {
                                                                        if (formik.values.service.includes(ser.service)) {
                                                                            const arr = formik.values.service.split(',').filter(el => el !== ser.service).join(',')
                                                                            formik.values.service = arr
                                                                        } else {
                                                                            formik.values.service += ser.service + ','
                                                                        }
                                                                        setService(!service)
                                                                    }
                                                                    return (
                                                                        <div
                                                                            className={formik.values.service.includes(ser.service) ? 'choise-btn choise-btn--active' : 'choise-btn'}
                                                                            onClick={onClickActiveServiceHandler}
                                                                            key={index}
                                                                        >
                                                                            {ser.service}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {
                                            activeTab &&
                                            <>
                                                <div className="form-data__item form-data__item--choose">
                                                    <div className="choose-wrapper">
                                                        <div className="choose-wrapper__choise custom-choise">
                                                            {
                                                                helpFizUserArray.map((el, index) => {
                                                                    const onClickHandler = () => {
                                                                        formik.values.helpFizUser = el.val;
                                                                        setHelpFizUser(el.val)
                                                                    }
                                                                    return (
                                                                        <div key={index}
                                                                             onClick={onClickHandler}
                                                                             className={formik.values.helpFizUser === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {
                                            !activeTab &&
                                            <>
                                                <div className="form-data__item form-data__item--choose">
                                                    <div className="choose-wrapper">
                                                        <div className="choose-wrapper__choise custom-choise">
                                                            {
                                                                helpCompanyArray.map((el, index) => {
                                                                    const onClickHandler = () => {
                                                                        formik.values.helpFizUser = el.val;
                                                                        setHelpCompany(el.val)
                                                                    }
                                                                    return (
                                                                        <div key={index}
                                                                             onClick={onClickHandler}
                                                                             className={formik.values.helpFizUser === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        <div className="form-data__item form-data__item--comment">
                                            <div className="textarea-wrapper">
                                            <textarea className="textarea-item"
                                                      name="comment"></textarea>
                                                <label className="textarea-label">Расскажите о
                                                    проекте</label>
                                            </div>
                                        </div>
                                        <div className="form-data__item form-data__item--upload">
                                            <div className="upload-wrapper">
                                                <div className="upload-item ">
                                                    <div className="upload-item__ic-cont">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="52"
                                                             viewBox="0 0 57 52" fill="none">
                                                            <path
                                                                d="M52.5558 47.6609H53.0558V47.1609V19.9936C53.0558 19.1805 53.7147 18.5215 54.5279 18.5215C55.3409 18.5215 56 19.1804 56 19.9936V49.133C56 49.946 55.3411 50.6051 54.5279 50.6051H2.47208C1.65889 50.6051 1 49.946 1 49.133V19.9936C1 19.1803 1.65885 18.5215 2.47208 18.5215C3.28527 18.5215 3.94416 19.1805 3.94416 19.9936V47.1609V47.6609H4.44416H52.5558Z"
                                                                fill="#9FA1A5" stroke="black"></path>
                                                            <path
                                                                d="M38.0504 27.7421L38.0505 27.7421C38.6253 28.3167 38.6254 29.2488 38.0504 29.8238L38.404 30.1773L38.0504 29.8238L29.5383 38.3362C29.2617 38.6125 28.8873 38.7675 28.497 38.7675C28.1064 38.7675 27.7321 38.6125 27.4559 38.3363L18.9502 29.8298L18.9502 29.8298C18.3753 29.2549 18.3753 28.323 18.9502 27.7481C19.5253 27.173 20.4572 27.1732 21.0322 27.7481L26.1717 32.8879L27.0252 33.7414L27.0252 32.5344L27.0263 2.86663V2.86661C27.0263 2.05364 27.6854 1.39453 28.4984 1.39453C29.3115 1.39453 29.9704 2.05359 29.9704 2.86659C29.9704 2.8666 29.9704 2.86661 29.9704 2.86661L29.9694 32.5341L29.9693 33.7412L30.8229 32.8876L35.9685 27.7421C36.5434 27.1671 37.4753 27.167 38.0504 27.7421Z"
                                                                fill="#9FA1A5" stroke="black"></path>
                                                        </svg>
                                                    </div>
                                                    <label className="upload-item__label">Загрузить файл</label>
                                                    <div className="upload-item__result">{formik.values.files}</div>
                                                    <input type="file"
                                                           className="upload-item__input"
                                                           {...formik.getFieldProps('files')}
                                                           onChange={formik.handleChange}
                                                    />
                                                </div>
                                                <div className="upload-cancel"
                                                     style={!!formik.values.files ? {display: "block"} : {display:"none"}}
                                                     onClick={() =>{
                                                         formik.values.files = ''
                                                         setService(!service)
                                                     } }
                                                >
                                                    <div className="upload-cancel__inner">
                                                        <svg className="upload-cancel__icon"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                                            <path
                                                                d="m27.14 34h-18.28a2.93 2.93 0 0 1 -2.86-3v-19.77h2v19.77a.93.93 0 0 0 .86 1h18.28a.93.93 0 0 0 .86-1v-19.77h2v19.77a2.93 2.93 0 0 1 -2.86 3z"></path>
                                                            <path
                                                                d="m30.78 9h-25.78a1 1 0 0 1 0-2h25.78a1 1 0 0 1 0 2z"></path>
                                                            <path d="m21 13h2v15h-2z"></path>
                                                            <path d="m13 13h2v15h-2z"></path>
                                                            <path
                                                                d="m23 5.86h-1.9v-1.86h-6.2v1.86h-1.9v-1.86a2 2 0 0 1 1.9-2h6.2a2 2 0 0 1 1.9 2z"></path>
                                                            <path d="m0 0h36v36h-36z" fill="none"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-data__item form-data__item--btn">
                                            <div className="button-wrapper">
                                                <button type="submit" className="button-wrapper__btn empty-btn-1">
                                                    <span><span>Отправить</span></span></button>
                                            </div>
                                        </div>
                                        <div className="form-data__item form-data__item--privacy-policy">
                                            <div className="policy-wrapper">
                                                <div className="policy-item">
                                                    <p>Отправляя форму, Вы даете согласие на обработку своих
                                                        персональных
                                                        данных в соответствии с политикой конфиденциальности</p>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="page-url" value="#"/>
                                        <input type="hidden" name="form-descr"
                                               value="Модальное окно.Форма заявки для физ. лица"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWindowWrapper>

    )
}






