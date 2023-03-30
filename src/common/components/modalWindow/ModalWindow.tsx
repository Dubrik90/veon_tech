import React from "react";
import {useFormik} from "formik";


import {
    Button,
    CustomInput,
    CustomInputFile,
    Errors,
    FormWrapper,
    InputBlock, InputFileText,
    Label,
    ModalWindowWrapper,
    RegisterWrapper,
    SubText,
    Title
} from "./style";
import {Clouse} from "./assets";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsModalWindowOpenAC} from "../../../app/app-reduser";


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
                            <CustomInput type='text'
                                         placeholder='BY Номер телефона'
                                         {...formik.getFieldProps('phone')}
                                         onChange={formik.handleChange}/>
                            {formik.touched.phone && formik.errors.phone &&
                                <Errors>{formik.errors.phone}</Errors>}
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

