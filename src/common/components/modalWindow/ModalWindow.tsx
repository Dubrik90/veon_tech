import React from "react";
import {useFormik} from "formik";


import {
    CustomInputFile,
    InputFileText,
} from "./style";
import {Clouse} from "./assets";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsModalWindowOpenAC} from "../../../app/app-reduser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    Button,
    CustomInput,
    Errors,
    FormWrapper,
    InputBlock,
    Label,
    ModalWindowWrapper, RegisterWrapper, SubText,
    Title
} from "../consultantModal/style";

type FormikErrorType = {
    name?: string,
    phone?: string,
    file?: null
}


export const ModalWindoww = () => {


    const dispatch = useAppDispatch()
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    //
    const onClickOpenModalHandler = () => {
        dispatch(setIsModalWindowOpenAC({isOpen: false}))
    }

    const onChangeFileHandler = (e: any) => {
        console.log(e)
        if (e.currentTarget.files) {
            formik.setFieldValue(
                "file",
                e.currentTarget.files[0]
            );
        }
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            file: ''
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
        <ModalWindowWrapper openModal={isModalWindowOpen}>
            <RegisterWrapper>
                <Title>Заявка на обратный звонок</Title>
                <Clouse onClick={onClickOpenModalHandler}/>
                <FormWrapper onSubmit={formik.handleSubmit}>
                    <InputBlock>
                        <Label>
                            <CustomInput type='text'
                                         placeholder='Ваше имя'
                                         {...formik.getFieldProps('name')}
                                         onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name &&
                                <Errors>{formik.errors.name}</Errors>}
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
                        <Label>
                            <CustomInputFile type='file'
                                             {...formik.getFieldProps('file')}

                            />
                            <span>Прикрепите CV</span>
                            <InputFileText>{formik.values.file}</InputFileText>
                            {formik.touched.file && formik.errors.file &&
                                <Errors>{formik.errors.file}</Errors>}
                        </Label>
                    </InputBlock>
                    <SubText>
                        Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                        соответствии с целями указанными в Политике обработки персональных данных
                    </SubText>
                    <Button type='submit'>Отправить</Button>
                </FormWrapper>
            </RegisterWrapper>
        </ModalWindowWrapper>
    );
};

