import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Clouse} from "./assets";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsModalWindowOpenAC} from "../../../app/app-reduser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    Button,
    CustomInput,
    InputBlock,
    Label,
    ModalWindowWrapper,
    RegisterWrapper,
    SubText,
    Title
} from "../consultantModal/style";
import {CustomInputFile, InputFileText} from "./style";
import {useScrollBlock} from "../../hook/use-scroll-block";


interface MyFormValues {
    formName: string,
    firstName: string;
    phone: string;
    myFile: File | null;
}


export const ModalWindoww = () => {
    const dispatch = useAppDispatch()
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickClouseModalHandler = () => {
        allowScroll()
        dispatch(setIsModalWindowOpenAC({isOpen: false}))
    }

    const handleSubmit = (
        values: any,
        {setSubmitting}: FormikHelpers<MyFormValues>
    ) => {
        setSubmitting(true);
        onClickClouseModalHandler()

        const formElement = document.querySelector("#jobForm");
        if (formElement instanceof HTMLFormElement) {
            const formData = new FormData(formElement);

            // Добавление значения budget в FormData
            formData.append("formName", values.formName);

            fetch("../back/mailJob.php", {
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
                formName: "Форма для вакансии",
                firstName: "",
                phone: "",
                myFile: null,
            }}
            onSubmit={handleSubmit}
        >
            {({values, handleSubmit, handleChange, setFieldValue}) => (
                <ModalWindowWrapper openModal={isModalWindowOpen}>
                    <RegisterWrapper>
                        <Title>Заявка на обратный звонок</Title>
                        <Clouse onClick={onClickClouseModalHandler}/>
                        <Form id={"jobForm"} onSubmit={handleSubmit} method={"POST"} encType="multipart/form-data">
                            <InputBlock>
                                <Label>
                                    <CustomInput type="text"
                                                 name="firstName"
                                                 placeholder='Ваше имя'
                                                 value={values.firstName}
                                                 onChange={handleChange}
                                    />
                                </Label>
                                <Label>
                                    <PhoneInput
                                        value={'+ 375'}
                                        inputProps={{name: "phone"}}
                                        onlyCountries={['by', 'ru']}
                                        countryCodeEditable={false}
                                        onChange={(phoneNumber, country, e) => {
                                            handleChange(e)
                                        }}
                                    />
                                </Label>
                                <Label>
                                    <InputFileText>
                                        {values.myFile?.name}
                                        <Label htmlFor="myFile">
                                            Загрузите CV
                                        </Label>
                                        <CustomInputFile
                                            name="myFile"
                                            type="file"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setFieldValue("myFile", event.currentTarget.files?.[0] || null);
                                            }}
                                            value={undefined}/>
                                    </InputFileText>
                                </Label>
                            </InputBlock>
                            <SubText>
                                Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                                соответствии с целями указанными в Политике обработки персональных данных
                            </SubText>
                            <Button type='submit'>Отправить</Button>
                        </Form>

                    </RegisterWrapper>
                </ModalWindowWrapper>
            )}
        </Formik>
    );
};







