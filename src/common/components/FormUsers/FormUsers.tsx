import React, {FormEvent, useRef, useState} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {
    BonuseFormWrapper,
    CheckboxContainer,
    CheckboxContainerGlobalForm,
    CheckboxGlobalForm,
    CheckboxLabelGlobalForm,
    CloseModal,
    ContainerForm,
    DynamicContactHead,
    FormDataItemComment,
    FormDataItemUpload,
    Input,
    InputContainer,
    InputUploadItem,
    Label,
    ModalTitle,
    PrivacyPolicy,
    Radio,
    StyledRadioContainer,
    StyledRadioLabel,
    SubmitButton,
    TextareaItem,
    TextareaLabel,
    TextareaWrapper,
    TextPolicy,
    TitleBonuse,
    UploadCancel,
    UploadCancelInner,
    UploadItem,
    UploadItemIcCont,
    UploadItemLabel,
    UploadItemResult,
    UploadWrapper
} from "../bonuseForm/style";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useAppDispatch, useAppSelector} from "../../hook";
import {ROUTS} from "../../constans/routs";
import {Link, useLocation} from "react-router-dom";
import {useScrollBlock} from "../../hook/use-scroll-block";


interface MyFormValues {
    formName: string
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    companyName: string,
    aboutCompany: string,
    bonus1: boolean;
    bonus2: boolean;
    bonus3: boolean;
    bonus4: boolean;
    myFile: File | null;
    personType: string;
    budget: string,
    service: string,
    helpFizUser: string,
    helpCompany: string,
    comment: string
}


export const FormUsers: React.FC = () => {
    const dispatch = useAppDispatch()
    const location = useLocation();
    const currentPath = location.pathname

    const [budget, setBudget] = useState('')
    const [helpFizUser, setHelpFizUser] = useState('')
    const [activeField, setActiveField] = useState("");
    const [service, setService] = useState(true)
    const [helpCompany, setHelpCompany] = useState('')
    const [bonuse, setBonuse] = useState('')
    const [blockScroll, allowScroll] = useScrollBlock();

    const isOpenForm = useAppSelector(state => state.app.isOpenForm)

    const closeFormModal = () => {
        allowScroll()
        dispatch(setIsOpenFormAC({isOpen: false}))
    }

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
    const helpFizUserArray = [
        {val: 'Я знаю чего хочу'},
        {val: 'Доверюсь вашей компании'},
    ]

    const handleFocus = (fieldName: string) => {
        setActiveField(fieldName);
    };
    const handleBlur = () => {
        setActiveField("");
    };

    const handleSubmit = (
        values: MyFormValues,
        {setSubmitting}: FormikHelpers<MyFormValues>
    ) => {
        setSubmitting(true);
        closeFormModal();
        console.log(values);

        const formElement = document.querySelector("#globalForm");
        if (formElement instanceof HTMLFormElement) {
            const formData = new FormData(formElement);

            // Добавление значения budget в FormData
            formData.append("budget", values.budget);
            formData.append("service", values.service);
            formData.append("formName", values.formName);

            fetch("../back/mail.php", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    // Обработка ответа от сервера
                    console.log(data);
                })
                .catch((error) => {
                    // Обработка ошибки
                    console.error(error);
                });
        }
    };

    return (
        <Formik<MyFormValues>
            initialValues={{
                formName: "Форма с главной страницы",
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                companyName: '',
                aboutCompany: '',
                bonus1: false,
                bonus2: false,
                bonus3: false,
                bonus4: false,
                myFile: null,
                personType: 'Физическое',
                budget: '',
                service: '',
                helpFizUser: '',
                helpCompany: '',
                comment: ''
            }}
            onSubmit={handleSubmit}
        >
            {({values, handleSubmit, handleChange, setFieldValue}) => (
                <BonuseFormWrapper>
                    <ContainerForm>
                        <DynamicContactHead>
                            <ModalTitle>{currentPath === '/about' ? 'ОБСУДИТЬ ПРОЕКТ' : 'Свяжитесь с нами'} </ModalTitle>
                            <CloseModal onClick={closeFormModal}>
                                <div></div>
                                <div></div>
                            </CloseModal>
                        </DynamicContactHead>
                        <Form onSubmit={handleSubmit} method={"POST"} id={"globalForm"} encType="multipart/form-data">
                            <StyledRadioContainer>
                                <StyledRadioLabel checked={values.personType === "Физическое"}>
                                    <Radio type="radio" name="personType" value="Физическое"/>
                                    Физическое лицо
                                </StyledRadioLabel>
                                <StyledRadioLabel checked={values.personType === "Юридическое"}>
                                    <Radio type="radio" name="personType" value="Юридическое"/>
                                    Юридическое лицо
                                </StyledRadioLabel>
                            </StyledRadioContainer>
                            {/*firstName*/}
                            <InputContainer>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onFocus={() => handleFocus("firstName")}
                                    onBlur={handleBlur}
                                />
                                <Label htmlFor="firstName" isActive={activeField === "firstName"}>
                                    Имя
                                </Label>
                            </InputContainer>
                            {/*lastName*/}
                            <InputContainer>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onFocus={() => handleFocus("lastName")}
                                    onBlur={handleBlur}
                                />
                                <Label htmlFor="lastName" isActive={activeField === "lastName"}>
                                    Фамилия
                                </Label>
                            </InputContainer>
                            {/*phone*/}
                            <InputContainer>
                                <Input
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onFocus={() => handleFocus("phone")}
                                    onBlur={handleBlur}
                                />
                                <Label htmlFor="phone" isActive={activeField === "phone"}>
                                    Телефон
                                </Label>
                            </InputContainer>
                            {/*email*/}
                            <InputContainer>
                                <Input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onFocus={() => handleFocus("email")}
                                    onBlur={handleBlur}
                                />
                                <Label htmlFor="email" isActive={activeField === "email"}>
                                    Почта
                                </Label>
                            </InputContainer>
                            {values.personType === 'Юридическое' &&
                                <>
                                    {/*companyName*/}
                                    <InputContainer>
                                        <Input
                                            type="text"
                                            name="companyName"
                                            value={values.companyName}
                                            onFocus={() => handleFocus("companyName")}
                                            onBlur={handleBlur}
                                        />
                                        <Label htmlFor="companyName" isActive={activeField === "companyName"}>
                                            Название компании
                                        </Label>
                                    </InputContainer>
                                    {/*aboutCompany*/}
                                    <InputContainer>
                                        <Input
                                            type="text"
                                            name="aboutCompany"
                                            value={values.aboutCompany}
                                            onFocus={() => handleFocus("aboutCompany")}
                                            onBlur={handleBlur}
                                        />
                                        <Label htmlFor="aboutCompany" isActive={activeField === "aboutCompany"}>
                                            Чем занимается ваша компания?
                                        </Label>
                                    </InputContainer>
                                </>}
                            <TitleBonuse>
                                Бюджет в USD
                            </TitleBonuse>
                            {/*Budget*/}
                            <CheckboxContainer>
                                {
                                    budgetValuesArray.map((el, index) => {
                                        const onClickHandler = () => {
                                            values.budget = el.val;
                                            setBudget(el.val)
                                        }
                                        return (
                                            <div key={index}
                                                 onClick={onClickHandler}
                                                 className={values.budget === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                            </div>
                                        )
                                    })
                                }
                            </CheckboxContainer>
                            {
                                values.personType === 'Физическое' &&
                                <>
                                    <TitleBonuse>
                                        Услуги
                                    </TitleBonuse>
                                    <CheckboxContainer>
                                        {servicesArray.map((ser, index) => {
                                            const onClickActiveServiceHandler = () => {
                                                if (values.service.includes(ser.service)) {
                                                    const arr = values.service.split(',').filter(el => el !== ser.service).join(',')
                                                    values.service = arr
                                                } else {
                                                    values.service += ser.service + ','
                                                }
                                                setService(!service)
                                            }
                                            return (
                                                <div
                                                    className={values.service.includes(ser.service) ? 'choise-btn choise-btn--active' : 'choise-btn'}
                                                    onClick={onClickActiveServiceHandler}
                                                    key={index}
                                                >
                                                    {ser.service}
                                                </div>
                                            )
                                        })}
                                    </CheckboxContainer>
                                    <CheckboxContainer>
                                        {
                                            helpFizUserArray.map((el, index) => {
                                                const onClickHandler = () => {
                                                    values.helpFizUser = el.val;
                                                    setHelpFizUser(el.val)
                                                }
                                                return (
                                                    <div key={index}
                                                         onClick={onClickHandler}
                                                         className={values.helpFizUser === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                                    </div>
                                                )
                                            })
                                        }
                                    </CheckboxContainer>
                                </>
                            }
                            {
                                values.personType === 'Юридическое' &&
                                <>
                                    <CheckboxContainer>
                                        {
                                            helpCompanyArray.map((el, index) => {
                                                const onClickHandler = () => {
                                                    values.helpCompany = el.val;
                                                    setHelpCompany(el.val)
                                                }
                                                return (
                                                    <div key={index}
                                                         onClick={onClickHandler}
                                                         className={values.helpCompany === el.val ? 'choise-btn choise-btn--active' : "choise-btn"}>{el.val}
                                                    </div>
                                                )
                                            })
                                        }
                                    </CheckboxContainer>
                                </>
                            }
                            <TitleBonuse>
                                Выберите бонус
                            </TitleBonuse>
                            {/*select bonuses*/}
                            <CheckboxContainerGlobalForm>
                                <CheckboxLabelGlobalForm checked={values.bonus1}>
                                    <CheckboxGlobalForm
                                        type="checkbox"
                                        name="bonus1"
                                        checked={values.bonus1}
                                        onChange={handleChange}

                                    />
                                    Скидка 100 BYN
                                </CheckboxLabelGlobalForm>
                                <CheckboxLabelGlobalForm checked={values.bonus2}>
                                    <CheckboxGlobalForm
                                        type="checkbox"
                                        name="bonus2"
                                        checked={values.bonus2}
                                        onChange={handleChange}
                                    />
                                    Бесплатный логотип
                                </CheckboxLabelGlobalForm>
                                <CheckboxLabelGlobalForm checked={values.bonus3}>
                                    <CheckboxGlobalForm
                                        type="checkbox"
                                        name="bonus3"
                                        checked={values.bonus3}
                                        onChange={handleChange}
                                    />
                                    Hostfly.by
                                </CheckboxLabelGlobalForm>
                                <CheckboxLabelGlobalForm checked={values.bonus4}>
                                    <CheckboxGlobalForm
                                        type="checkbox"
                                        name="bonus4"
                                        checked={values.bonus4}
                                        onChange={handleChange}
                                    />
                                    5% скидка на все услуги
                                </CheckboxLabelGlobalForm>
                            </CheckboxContainerGlobalForm>

                            {/*textarea*/}
                            <FormDataItemComment>
                                <TextareaWrapper>
                                    <TextareaItem name="comment" onChange={handleChange}/>
                                    <TextareaLabel>
                                        Расскажите о проекте
                                    </TextareaLabel>
                                </TextareaWrapper>
                            </FormDataItemComment>
                            {/*files*/}
                            <FormDataItemUpload>
                                <UploadWrapper>
                                    <UploadItem>
                                        <UploadItemIcCont>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="52"
                                                 viewBox="0 0 57 52" fill="none">
                                                <path
                                                    d="M52.5558 47.6609H53.0558V47.1609V19.9936C53.0558 19.1805 53.7147 18.5215 54.5279 18.5215C55.3409 18.5215 56 19.1804 56 19.9936V49.133C56 49.946 55.3411 50.6051 54.5279 50.6051H2.47208C1.65889 50.6051 1 49.946 1 49.133V19.9936C1 19.1803 1.65885 18.5215 2.47208 18.5215C3.28527 18.5215 3.94416 19.1805 3.94416 19.9936V47.1609V47.6609H4.44416H52.5558Z"
                                                    fill="#9FA1A5" stroke="black"></path>
                                                <path
                                                    d="M38.0504 27.7421L38.0505 27.7421C38.6253 28.3167 38.6254 29.2488 38.0504 29.8238L38.404 30.1773L38.0504 29.8238L29.5383 38.3362C29.2617 38.6125 28.8873 38.7675 28.497 38.7675C28.1064 38.7675 27.7321 38.6125 27.4559 38.3363L18.9502 29.8298L18.9502 29.8298C18.3753 29.2549 18.3753 28.323 18.9502 27.7481C19.5253 27.173 20.4572 27.1732 21.0322 27.7481L26.1717 32.8879L27.0252 33.7414L27.0252 32.5344L27.0263 2.86663V2.86661C27.0263 2.05364 27.6854 1.39453 28.4984 1.39453C29.3115 1.39453 29.9704 2.05359 29.9704 2.86659C29.9704 2.8666 29.9704 2.86661 29.9704 2.86661L29.9694 32.5341L29.9693 33.7412L30.8229 32.8876L35.9685 27.7421C36.5434 27.1671 37.4753 27.167 38.0504 27.7421Z"
                                                    fill="#9FA1A5" stroke="black"></path>
                                            </svg>
                                        </UploadItemIcCont>
                                        <UploadItemResult>
                                            {values.myFile?.name}
                                        </UploadItemResult>
                                        <UploadItemLabel htmlFor="myFile">
                                            Загрузить файл
                                        </UploadItemLabel>
                                        <InputUploadItem
                                            name="myFile"
                                            type="file"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setFieldValue("myFile", event.currentTarget.files?.[0] || null);
                                            }}
                                            value={undefined}/>
                                    </UploadItem>

                                    <UploadCancel
                                        style={!!values.myFile ? {display: "block"} : {display: "none"}}
                                        onClick={() => {
                                            values.myFile = null
                                            setService(!service)
                                        }}
                                    >
                                        <UploadCancelInner>
                                            <svg
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
                                        </UploadCancelInner>
                                    </UploadCancel>
                                </UploadWrapper>
                            </FormDataItemUpload>
                            {/*BUTTON*/}
                            <SubmitButton type="submit"><span><span>Отправить</span></span></SubmitButton>
                            <PrivacyPolicy>
                                <TextPolicy>
                                    Отправляя форму, Вы даете согласие на обработку своих
                                    персональных данных в соответствии с <Link onClick={closeFormModal}
                                                                               to={ROUTS.POLICY}>политикой
                                    конфиденциальности</Link>
                                </TextPolicy>
                            </PrivacyPolicy>
                        </Form>
                    </ContainerForm>
                </BonuseFormWrapper>
            )}
        </Formik>
    );
};


