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
import emailjs from "emailjs-com";
import {ROUTS} from "../../constans/routs";
import {Link} from "react-router-dom";


interface MyFormValues {
    name: string;
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
        emailjs.send('service_jwks1lh', 'template_h0lfcm6', values, 'iy68w7qmdmjCwvP5W')
            .then((result: any) => {
            }, (error: any) => {
                console.log(error.text);
            });
    };


    return (
        <Formik<MyFormValues>
            initialValues={{
                name: "",
                phone: "",
                myFile: null,
            }}
            onSubmit={handleSubmit}
        >
            {({ values, handleSubmit, handleChange, setFieldValue }) => {
                return (
                    <ModalWindowWrapper openModal={isModalWindowOpen}>
                        <RegisterWrapper>
                            <Title>Request a callback</Title>
                            <Clouse onClick={onClickClouseModalHandler} />
                            <Form onSubmit={handleSubmit}>
                                <InputBlock>
                                    <Label>
                                        <CustomInput
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                    </Label>
                                    <Label>
                                        <PhoneInput
                                            value={"+ 375"}
                                            inputProps={{ name: "phone" }}
                                            onlyCountries={["by", "ru"]}
                                            countryCodeEditable={false}
                                            onChange={(phoneNumber, country, e) => {
                                                handleChange(e);
                                            }}
                                        />
                                    </Label>
                                    <Label>
                                        <InputFileText>
                                            {values.myFile?.name}
                                            <Label htmlFor="myFile">Upload a CV</Label>
                                            <CustomInputFile
                                                name="myFile"
                                                type="file"
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setFieldValue(
                                                        "myFile",
                                                        event.currentTarget.files?.[0] || null
                                                    );
                                                }}
                                                value={undefined}
                                            />
                                        </InputFileText>
                                    </Label>
                                </InputBlock>
                                <SubText>
                                    By clicking "Submit," you give your consent to the processing of
                                    personal data in accordance with the purposes specified in the
                                    <Link to={ROUTS.POLICY}> Privacy Policy.</Link>
                                </SubText>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </RegisterWrapper>
                    </ModalWindowWrapper>
                );
            }}
        </Formik>
    );
};







