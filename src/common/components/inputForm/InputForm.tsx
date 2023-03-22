import React, {FC} from 'react';
import {useFormik} from "formik";

type InputFormPropsType = {
    type: string,
    onChange:(e: any)=> void,
    propsName: string
}

export const InputForm:FC<InputFormPropsType> = ({type, onChange, propsName, ...props}) => {
    return (
        <div className="form-data__item">
            {/*<div className="input-wrapper">*/}
            {/*    <input className="input-item"*/}
            {/*           required={true}*/}
            {/*           type={type}*/}
            {/*           {...formik.getFieldProps(propsName)}*/}
            {/*           onChange={onChange}*/}
            {/*    />*/}
            {/*    <label className="input-label">Имя</label>*/}
            {/*</div>*/}
        </div>
    );
};

