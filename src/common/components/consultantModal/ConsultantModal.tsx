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
import {Slide, toast} from "react-toastify";

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
                errors.firstName = 'Для отправки введите имя и телефон'
            }

            if (!values.phone) {
                errors.phone = 'укажите ваш телефон'
            }
            return errors
        },
        onSubmit: values => {
            onClickClouseModalHandler()
            const formElement = document.querySelector("#consultantForm")
            if (formElement instanceof HTMLFormElement) {
                const formData = new FormData(formElement);

                formData.append("formName", values.formName);

                fetch("../back/mailConsultant.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        toast.success('Заявка попала в нужные руки. Мы свяжемся с вами в ближайшее время!', {
                            position: "top-right",
                            autoClose: 4000,
                            theme: "colored",
                            transition: Slide
                        });

                    })
                    .catch((error) => {
                        toast.error('Что-то пошло не так. Повтоите попытку!', {
                            position: "top-right",
                            autoClose: 4000,
                            theme: "colored",
                            transition: Slide
                        });
                    });
            }
        }
    })

    return (
        <ModalWindowWrapper openModal={isConsultantModalOpen}>
            <RegisterWrapper>
                <Title>Заявка на обратный звонок</Title>
                <Clouse onClick={onClickClouseModalHandler}/>
                <FormWrapper id={"consultantForm"} onSubmit={formik.handleSubmit} method={"POST"}
                             encType="multipart/form-data">
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
                        соответствии с целями указанными в <Link onClick={onClickClouseModalHandler} to={ROUTS.POLICY}>Политике
                        обработки персональных данных</Link>
                    </SubText>
                    <Button type='submit'>Отправить</Button>
                </FormWrapper>
            </RegisterWrapper>
        </ModalWindowWrapper>
    );
};

