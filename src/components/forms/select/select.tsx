import React from 'react';
import {Field, FieldProps} from 'formik';
import {Select, SelectProps} from 'antd';
import {FormikInputProps} from "@/components/forms/control";
import {SelectStyle} from "./select.style";
import {Label} from "../label/label";
import {CustomErrorMessage} from "../error-message/error-message";

const {Option} = Select;

export const _Select =
    ({
         field,
         options,
         value,
         ...rest
     }: SelectProps & FieldProps): React.ReactElement => (
        <Select
            {...field}
            {...rest}>
            {options && options.map(option =>
                <Option selected={option.value === value} key={option.value} {...option}>{option.label}</Option>
            )}
        </Select>
    );

export const FormikSelect =
    ({
         label,
         name,
         errorMessage,
         ...rest
     }: SelectProps & FormikInputProps): React.ReactElement => (
        <SelectStyle>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                as={'select'}
                component={_Select}
                label={label}
                {...rest}
            />
            {
                errorMessage
                &&
                <CustomErrorMessage errorMessage={errorMessage}/>
            }
        </SelectStyle>
    );


