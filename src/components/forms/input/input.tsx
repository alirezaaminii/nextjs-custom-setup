import React from 'react';
import {Field, FieldProps} from 'formik';
import {Input} from 'antd';
import {InputProps} from "antd/es/input";
import {FormikInputProps} from "@/components/forms/control";
import {InputStyle} from './input.style';
import {Label} from "../label/label";
import {CustomErrorMessage} from "../error-message/error-message";

export const _Input =
    ({
         field,
         ...rest
     }: InputProps & FieldProps): React.ReactElement => (
        <Input
            {...field}
            {...rest}
            bordered
        />
    );

export const FormikInput =
    ({
         label,
         name,
         errorMessage,
         control,
         size,
         ...rest
     }: FormikInputProps & InputProps): React.ReactElement => (
        <InputStyle size={size}>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                as={control}
                component={_Input}
                label={label}
                {...rest}
                className={`${rest.className || ""} ${errorMessage ? "error" : ""}`}
            />
            {
                errorMessage
                &&
                <CustomErrorMessage errorMessage={errorMessage}/>
            }
        </InputStyle>
    );


