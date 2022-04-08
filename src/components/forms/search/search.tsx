import React from 'react';
import {Field, FieldProps} from 'formik';
import {Input} from 'antd';
import {InputProps} from "antd/es/input";
import {FormikInputProps} from "@/components/forms/control";
import {SearchStyle} from './search.style';
import {Label} from "../label/label";

export const _Input =
    ({
         field,
         ...rest
     }: InputProps & FieldProps): React.ReactElement => (
        <Input.Search
            {...field}
            {...rest}
            allowClear
        />
    );

export const FormikSearch =
    ({
         label,
         name,
         errorMessage,
         control,
         size,
         ...rest
     }: FormikInputProps & InputProps): React.ReactElement => (
        <SearchStyle size={size}>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                as={control}
                component={_Input}
                label={label}
                {...rest}
            />
            <span>{errorMessage}</span>
        </SearchStyle>
    );


