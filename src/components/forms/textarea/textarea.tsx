import React from 'react';
import {Field, FieldProps} from 'formik';
import {Input} from 'antd';
import {TextAreaProps} from "antd/es/input";
import {FormikInputProps} from "@/components/forms/control";
import {TextareaStyle} from "./textarea.style";
import {Label} from "../label/label";
import {CustomErrorMessage} from "../error-message/error-message";

const {TextArea} = Input;

export const _TextArea =
    ({
         field,
         ...rest
     }: TextAreaProps & FieldProps): React.ReactElement => (
        <TextArea
            {...field}
            {...rest}
            bordered
        />
    );

export const FormikTextarea =
    ({
         label,
         name,
         errorMessage,
         ...rest
     }: TextAreaProps & FormikInputProps): React.ReactElement => (
        <TextareaStyle>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                as={'textarea'}
                component={_TextArea}
                label={label}
                {...rest}
            />
            {
                errorMessage
                &&
                <CustomErrorMessage errorMessage={errorMessage}/>
            }
        </TextareaStyle>
    );


