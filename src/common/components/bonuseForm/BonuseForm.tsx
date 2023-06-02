import React, {useState} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {
    BonuseFormWrapper,
    Checkbox,
    CheckboxContainerBonuses,
    CheckboxLabel,
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
} from "./style";
import {setIsOpenBonuseFormAC} from "../../../app/app-reduser";
import {useAppDispatch} from "../../hook";
import {ROUTS} from "../../constans/routs";
import {Link} from "react-router-dom";
import {useScrollBlock} from "../../hook/use-scroll-block";
import emailjs from "emailjs-com";

interface MyFormValues {
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


export const BonuseForm: React.FC = () => {
    const dispatch = useAppDispatch()

    const [budget, setBudget] = useState('')
    const [helpFizUser, setHelpFizUser] = useState('')
    const [activeField, setActiveField] = useState("");
    const [service, setService] = useState(true)
    const [helpCompany, setHelpCompany] = useState('')
    const [bonuse, setBonuse] = useState('')
    const [blockScroll, allowScroll] = useScrollBlock();

    const closeFormModal = () => {
        allowScroll()
        dispatch(setIsOpenBonuseFormAC({isOpen: false}))
    }
    const handleFocus = (fieldName: string) => {
        setActiveField(fieldName);
    };
    const handleBlur = () => {
        setActiveField("");
    };

    const handleSubmit = (
        values: any,
        {setSubmitting}: FormikHelpers<MyFormValues>
    ) => {
        setSubmitting(true);
        closeFormModal();
        emailjs.send('service_jwks1lh', 'template_m2zj1z6', values, 'iy68w7qmdmjCwvP5W')
            .then((result: any) => {
            }, (error: any) => {
                console.log(error.text);
            });
    };

    return (
        <Formik<MyFormValues>
            initialValues={{
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
                            <ModalTitle>Contact us</ModalTitle>
                            <CloseModal onClick={closeFormModal}>
                                <div></div>
                                <div></div>
                            </CloseModal>
                        </DynamicContactHead>
                        <Form onSubmit={handleSubmit}>
                            <StyledRadioContainer>
                                <StyledRadioLabel checked={values.personType === "Physical"}>
                                    <Radio type="radio" name="personType" value="Physical"/>
                                    Individual
                                </StyledRadioLabel>
                                <StyledRadioLabel checked={values.personType === "Legal"}>
                                    <Radio type="radio" name="personType" value="Legal"/>
                                    Legal entity
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
                                    Name
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
                                    Surname
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
                                    Phone
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
                                    Email
                                </Label>
                            </InputContainer>
                            {values.personType === 'Legal' &&
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
                                Выберите бонус
                            </TitleBonuse>
                            {/*select bonuses*/}
                            <CheckboxContainerBonuses>
                                <CheckboxLabel checked={values.bonus1}>
                                    <Checkbox
                                        type="checkbox"
                                        name="bonus1"
                                        checked={values.bonus1}
                                        onChange={handleChange}
                                    />
                                    100 USD discount
                                </CheckboxLabel>
                                <p>When signing the contract within 3 days after receiving the commercial offer</p>
                                <CheckboxLabel checked={values.bonus2}>
                                    <Checkbox
                                        type="checkbox"
                                        name="bonus2"
                                        checked={values.bonus2}
                                        onChange={handleChange}
                                    />
                                    Free
                                    logo
                                </CheckboxLabel>
                                <p>When signing the contract within 3 days after receiving the commercial offer</p>
                                <CheckboxLabel checked={values.bonus3}>
                                    <Checkbox
                                        type="checkbox"
                                        name="bonus3"
                                        checked={values.bonus3}
                                        onChange={handleChange}
                                    />
                                    Hostfly.by
                                </CheckboxLabel>
                                <p>On any hosting tariff</p>
                                <CheckboxLabel checked={values.bonus4}>
                                    <Checkbox
                                        type="checkbox"
                                        name="bonus4"
                                        checked={values.bonus4}
                                        onChange={handleChange}
                                    />
                                    5% discount
                                </CheckboxLabel>
                                <p>For one-time payment of the entire service amount. For new customers. License fees are excluded.</p>
                            </CheckboxContainerBonuses>

                            {/*textarea*/}
                            <FormDataItemComment>
                                <TextareaWrapper>
                                    <TextareaItem name="comment" onChange={handleChange}/>
                                    <TextareaLabel>
                                        Tell us about the project
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
                                            add file
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
                            <SubmitButton type="submit"><span><span>Send</span></span></SubmitButton>
                            <PrivacyPolicy>
                                <TextPolicy>
                                    By clicking "Submit," you give your consent to the processing of personal data in accordance with the purposes specified in the  <Link to={ROUTS.POLICY}>Privacy Policy.</Link>
                                </TextPolicy>
                            </PrivacyPolicy>
                        </Form>
                    </ContainerForm>
                </BonuseFormWrapper>
            )}
        </Formik>
    );
};


