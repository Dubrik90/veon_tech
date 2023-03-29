import React, {useRef} from "react";
import {Formik, Form, Field, useField} from "formik";

import * as yup from "yup";

//import {FileInput, ImageInput} from "formik-file-and-image-input/lib";

import {
    Button,
    CustomInput, CustomInputFile, Errors,
    FormWrapper,
    InputBlock,
    InputFileText,
    Label,
    ModalWindowWrapper,
    Placeholder,
    RegisterWrapper, SubText,
    Title
} from "./style";
import {useFormik} from "formik";
import {Clouse} from "./assets";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsModalWindowOpenAC} from "../../../app/app-reduser";
import {log} from "util";


// type FormikErrorType = {
//     name?: string,
//     phone?: string,
//     file?: null
// }

// @ts-ignore
// const CustomFileInputWrapper = ({onClick, fileName}) => {
//     return (
//         <div>
//             <button onClick={onClick}>Выбери File</button>
//             <p>{fileName}</p>
//         </div>
//     )
// }
//
// // @ts-ignore
// const CustomImageInputWrapper = ({onClick, fileName, src}) => {
//     return (
//         <div onClick={onClick}>
//             {!src && <button onClick={onClick}>Выбери Image</button>}
//             <img src={src}/>
//             <p>{fileName}</p>
//         </div>
//     )
// }

export const ModalWindoww = () => {

    const initialValues = {
        files: ""
    };
    const fileRef = useRef(null);

    const FileUpload = ({ fileRef, ...props }: any) => {
        const [field, meta] = useField(props);
        console.log(field)
        console.log(meta)
        return (
            <div>
                <label htmlFor="files">выбери files</label>{" "}
                <input ref={fileRef} multiple={true} type="file" {...field} />
                {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                ) : null}
            </div>
        );
    };

     const dispatch = useAppDispatch()
     const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    //
    const onClickOpenModalHandler = () => {
        dispatch(setIsModalWindowOpenAC({isOpen: false}))
    }
    //
    // const onChangeFileHandler = (e: any) => {
    //     console.log(e)
    //     // if (e.currentTarget.files) {
    //     //     formik.setFieldValue(
    //     //         "file",
    //     //         e.currentTarget.files[0]
    //     //     );
    //     // }
    // }


    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         phone: '',
    //         file: ''
    //     },
    //
    //     validate: (values) => {
    //         const errors: FormikErrorType = {}
    //
    //         if (!values.name) {
    //             errors.name = 'Поле не может быть пустым'
    //         }
    //
    //         if (!values.phone) {
    //             errors.phone = 'укажите ваш телефон'
    //         }
    //
    //
    //         return errors
    //     },
    //     onSubmit: values => {
    //         console.log(formik.values)
    //     }
    // })

    return (
        <ModalWindowWrapper openModal={isModalWindowOpen}>
            <Formik
                initialValues={initialValues}
                validationSchema={yup.object({
                    files: yup.mixed()

                })}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form>
                    <FileUpload name="files" fileRef={fileRef}
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </ModalWindowWrapper>


        // <ModalWindowWrapper openModal={isModalWindowOpen}>
        //     <RegisterWrapper>
        //         <Title>Заявка на обратный звонок</Title>
        //         <Clouse onClick={onClickOpenModalHandler}/>
        //         <FormWrapper onSubmit={formik.handleSubmit}>
        //             <InputBlock>
        //                 <Label>
        //                     <CustomInput type='text'
        //                                  placeholder='Ваше имя'
        //                                  {...formik.getFieldProps('name')}
        //                                  onChange={formik.handleChange}
        //                     />
        //                     {formik.touched.name && formik.errors.name &&
        //                         <Errors>{formik.errors.name}</Errors>}
        //                 </Label>
        //                 <Label>
        //                     <CustomInput type='text'
        //                                  placeholder='BY Номер телефона'
        //                                  {...formik.getFieldProps('phone')}
        //                                  onChange={formik.handleChange}/>
        //                     {formik.touched.phone && formik.errors.phone &&
        //                         <Errors>{formik.errors.phone}</Errors>}
        //                 </Label>
        //                 <Label>
        //                     <CustomInputFile type='file'
        //                                  {...formik.getFieldProps('file')}
        //                                  onChange={(e)=>onChangeFileHandler(e)}/>
        //                     <span>Прикрепите CV</span>
        //                     {/*<InputFileText>{formik.values.file}</InputFileText>*/}
        //                     {formik.touched.file && formik.errors.file &&
        //                         <Errors>{formik.errors.file}</Errors>}
        //                 </Label>
        //             </InputBlock>
        //             <SubText>
        //                 Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
        //                 соответствии с целями указанными в Политике обработки персональных данных
        //             </SubText>
        //             <Button type='submit'>Отправить</Button>
        //         </FormWrapper>
        //     </RegisterWrapper>
        // </ModalWindowWrapper>
    );
};

