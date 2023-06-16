import React from 'react';
import {
    Button,
    CustomInput,
    Errors,
    FormWrapper,
    InputBlock,
    Label,
    ModalWindowWrapper,
    RegisterWrapper,
    SubText,
    Title
} from "./style";
import {useFormik} from "formik";
import {Clouse} from "./assets";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsConsultantModalOpenAC} from "../../../app/app-reduser";
import PhoneInput from "react-phone-input-2";
import '../../style/PhoneInput.css';
import {Link} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import {useScrollBlock} from "../../hook/use-scroll-block";
import emailjs from "emailjs-com";

type FormikErrorType = {
    formName?: string,
    firstName?: string,
    phone?: string
}

export const ConsultantModal = () => {
    const dispatch = useAppDispatch()
    const isConsultantModalOpen = useAppSelector(state => state.app.isConsultantModalOpen)
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickClouseModalHandler = () => {
        allowScroll()
        dispatch(setIsConsultantModalOpenAC({isOpen: false}))
    }

    const formik = useFormik({
        initialValues: {
            formName: "Форма для консульнации",
            firstName: '',
            phone: '',
        },

        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.firstName) {
                errors.firstName = 'Поле не может быть пустым'
            }

            if (!values.phone) {
                errors.phone = 'укажите ваш телефон'
            }
            return errors
        },
        onSubmit: values => {
            onClickClouseModalHandler()
            const formElement = document.querySelector("form")
            if (formElement instanceof HTMLFormElement) {
                fetch("../back/mail.php", {
                    method: "POST",
                    body: new FormData(formElement),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // Обработка ответа от сервера
                        console.log(data)
                    })
                    .catch((error) => {
                        // Обработка ошибки
                        console.error(error)
                    })
            }
        }
    })

    return (
        <ModalWindowWrapper openModal={isConsultantModalOpen}>
            <RegisterWrapper>
                <Title>Заявка на обратный звонок</Title>
                <Clouse onClick={onClickClouseModalHandler}/>
                <FormWrapper onSubmit={formik.handleSubmit}>
                    <InputBlock>
                        <Label>
                            <CustomInput type='text'
                                         placeholder='Ваше имя'
                                         {...formik.getFieldProps('firstName')}
                                         onChange={formik.handleChange}
                            />
                            {formik.touched.firstName && formik.errors.firstName &&
                                <Errors>{formik.errors.firstName}</Errors>}
                        </Label>
                        <Label>
                            <PhoneInput
                                value={'+ 375'}
                                inputProps={{name: "phone"}}
                                onlyCountries={['by', 'ru']}
                                countryCodeEditable={false}
                                onChange={(phoneNumber, country, e) => {
                                    formik.handleChange(e)
                                }}
                                onBlur={formik.handleBlur}
                            />
                        </Label>
                    </InputBlock>
                    <SubText>
                        Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                        соответствии с целями указанными в <Link onClick={onClickClouseModalHandler} to={ROUTS.POLICY}>Политике обработки персональных данных</Link>
                    </SubText>
                    <Button type='submit'>Отправить</Button>
                </FormWrapper>
            </RegisterWrapper>
        </ModalWindowWrapper>
    );
};

