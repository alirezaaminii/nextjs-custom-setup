import React from 'react';
import {Field, FieldProps} from 'formik';
import {Checkbox, CheckboxProps, CheckboxOptionType} from 'antd';
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {FormikInputProps} from "@/components/forms/control";
import {CheckboxStyle} from "./checkbox.style";
import {Label} from "../label/label";

export const _Checkbox =
    ({
         field,
         options,
         onChange,
         ...rest
     }: CheckboxProps & FieldProps & { options: (string | CheckboxOptionType)[] | undefined }): React.ReactElement => {

    const handleChange = (value: CheckboxValueType[]): void => {
        if(onChange) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange(value)
        }
    }

        return (
            <Checkbox.Group
                indeterminate={false}
                options={options}
                {...field}
                {...rest}
                onChange={handleChange}
            />
        );
    }

export const FormikCheckbox =
    ({
         label,
         name,
         errorMessage,
         options,
         ...rest
     }: CheckboxProps & FormikInputProps): React.ReactElement => (
        <CheckboxStyle>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                component={_Checkbox}
                label={label}
                options={options}
                {...rest}
            />
            <span>{errorMessage}</span>
        </CheckboxStyle>
    );


