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
    name?: string,
    phone?: string,
    text?: string
}

export const MapComponent = () => {

    const mapState = {center: [53.92859307064951, 27.58288749999989], zoom: 16};
    const coordinates = [53.92859307064951, 27.58288749999989];

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            text: ''
        },

        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.name) {
                errors.name = 'The field cannot be empty'
            }

            if (!values.phone) {
                errors.phone = 'Please provide your phone number'
            }

            return errors
        },
        onSubmit: values => {
        }
    })

    return (
        <MapComponentWrapper>
            <Container>
                <MapWrapperBlock>
                    <CardWrapper>
                        <Title> Our Office <span>Location</span> </Title>
                        <MapWrapper>
                            <YMaps width="100%" height="400px">
                                <StyledMap state={mapState}>
                                    <Placemark geometry={coordinates}/>
                                </StyledMap>
                            </YMaps>
                        </MapWrapper>
                    </CardWrapper>
                    <FormBlock>
                        <Title>We are happy to receive <span>your</span> inquiries!</Title>
                        <SubTitle>
                            Please leave your name and phone number, and we will be delighted to assist you.
                        </SubTitle>
                        <FormWrapper onSubmit={formik.handleSubmit}>
                            <InputBlock>
                                <Label>
                                    <CustomInput type='text'
                                                 placeholder='Name'
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
                                    <CustomTextArea
                                        placeholder='Massage'
                                        {...formik.getFieldProps('text')}
                                        onChange={formik.handleChange}
                                    />
                                </Label>
                            </InputBlock>
                            <SubText>
                                By clicking "Submit," you give your consent to the processing of personal data in accordance with the purposes specified in the<Link to={ROUTS.POLICY}> Privacy Policy.</Link>
                            </SubText>
                            <Button type='submit'>SUBMIT</Button>
                        </FormWrapper>
                    </FormBlock>
                </MapWrapperBlock>
            </Container>
        </MapComponentWrapper>
    );
}

