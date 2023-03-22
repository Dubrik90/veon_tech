import React, {FC} from 'react';
import { Formik, Form, useField } from 'formik';




// @ts-ignore
export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    // @ts-ignore
    const [field, meta] = useField(props);
    return (
        <>
            <div className="form-data__item">
                <div className="input-wrapper">
                    <input className="text-input" {...field} {...props} />
                    <label className="input-label">{label}</label>
                </div>
            </div>
        </>
    );
};