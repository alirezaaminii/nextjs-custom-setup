import React from 'react';
import {Field, FieldProps} from 'formik';
import {Switch, SwitchProps} from 'antd';
import {FormikInputProps} from "@/components/forms/control";
import {SwitchStyle} from "./switch.style";
import {Label} from "../label/label";

export const _Switch =
    ({
         field,
         label,
         ...rest
     }: SwitchProps & FieldProps & { label?: string }): React.ReactElement => (
        <label>
            <Switch {...field} {...rest} />
            <span>{label && label}</span>
        </label>
    );

export const FormikSwitch =
    ({
         label,
         name,
         errorMessage,
         ...rest
     }: SwitchProps & FormikInputProps): React.ReactElement => (
    <SwitchStyle>
        <Label label={label} htmlFor={name}/>
        <Field
            name={name}
            component={_Switch}
            label={label}
            {...rest}
        />
        <span>{errorMessage}</span>
    </SwitchStyle>
    );


