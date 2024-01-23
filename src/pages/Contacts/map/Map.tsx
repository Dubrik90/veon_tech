import React from 'react';
import {
    Button,
    CardWrapper,
    CustomInput,
    CustomTextArea,
    Errors,
    FormBlock,
    FormWrapper,
    InputBlock,
    Label,
    MapComponentWrapper,
    MapWrapper,
    MapWrapperBlock,
    StyledMap,
    SubText,
    SubTitle,
    Title
} from './style';
import {Container} from "../../../common/style/Container";
import {Placemark, YMaps} from 'react-yandex-maps';
import {useFormik} from "formik";

import PhoneInput from "react-phone-input-2";
import {ROUTS} from "../../../common/constans/routs";
import {Link} from "react-router-dom";

type FormikErrorType = {
    formName?: string,
    firstName?: string,
    phone?: string,
    comment?: string
}

export const MapComponent = () => {

    const mapState = {center: [53.92859307064951, 27.58288749999989], zoom: 16};
    const coordinates = [53.92859307064951, 27.58288749999989];

    const formik = useFormik({
        initialValues: {
            formName: 'Форма со страницы контактов',
            firstName: '',
            phone: '',
            comment: ''
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
            const formElement = document.querySelector("#contactForm");
            if (formElement instanceof HTMLFormElement) {
                const formData = new FormData(formElement);

                // Добавление значения budget в FormData
                formData.append("formName", values.formName);

                fetch("../back/mailContact.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                    })
                    .catch((error) => {
                        // Обработка ошибки
                        console.error(error);
                    });
            }

        }
    })

    return (
        <MapComponentWrapper>
            <Container>
                <MapWrapperBlock>
                    <CardWrapper>
                        <Title><span>РАСПОЛОЖЕНИЕ</span> Нашего Офиса </Title>
                        <MapWrapper>
                            <YMaps width="100%" height="400px">
                                <StyledMap state={mapState}>
                                    <Placemark geometry={coordinates}/>
                                </StyledMap>
                            </YMaps>
                        </MapWrapper>
                    </CardWrapper>
                    <FormBlock>
                        <Title>Мы рады увидеть <span>Вашу</span> заявку!</Title>
                        <SubTitle>
                            Пожалуйста оставьте Ваши имя и телефон, мы будем счастливы помочь Вам.
                        </SubTitle>
                        <FormWrapper id="contactForm" onSubmit={formik.handleSubmit} method={"POST"} encType="multipart/form-data">
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
                                            e.target.name = "phone";
                                            formik.handleChange(e);
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                </Label>
                                <Label>
                                    <CustomTextArea
                                        placeholder='Сообщение'
                                        {...formik.getFieldProps('comment')}
                                        onChange={formik.handleChange}
                                    />
                                    {/*{formik.touched.name && formik.errors.name &&*/}
                                    {/*    <Errors>{formik.errors.name}</Errors>}*/}
                                </Label>
                            </InputBlock>
                            <SubText>
                                Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                                соответствии с целями указанными в <Link to={ROUTS.POLICY}>Политике обработки персональных
                                данных</Link>
                            </SubText>
                            <Button type='submit'>Отправить</Button>
                        </FormWrapper>
                    </FormBlock>

                </MapWrapperBlock>
            </Container>
        </MapComponentWrapper>
    );
}

