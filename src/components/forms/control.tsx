import React from 'react';
import {SelectProps, RadioGroupProps, CheckboxProps, SwitchProps} from "antd";
import {InputProps, TextAreaProps} from "antd/es/input";
import {DefaultOptionType} from "rc-cascader";
import {SizeType} from "antd/es/config-provider/SizeContext";

import {FormikTextarea} from './textarea/textarea';
import {FormikInput} from './input/input';
import {FormikSelect} from "./select/select";
import {FormikRadio} from "./radio/radio";
import {FormikCheckbox} from "./checkbox/checkbox";
import {FormikSwitch} from "./switch/switch";
import {FormikSearch} from "./search/search";

export interface FormikInputProps {
    errorMessage?: string;
    size?: SizeType;
    type?: string
    label?: string;
    name?: string;
    control?: string;
    options?: DefaultOptionType[];
}

interface FormControlProps extends FormikInputProps {
    control: 'textarea' | 'input' | 'select' | 'search' | 'radio' | 'checkbox' | 'switch' ;
}

const FormControl = (
    {
        control,
        ...rest
    }: FormControlProps & TextAreaProps & InputProps &
        SelectProps & RadioGroupProps & CheckboxProps & SwitchProps
): React.ReactElement | null => {
    switch (control) {
        case 'textarea':
            return <FormikTextarea {...rest} />;
        case 'input':
            return <FormikInput {...rest} control={control}/>;
        case 'select':
            return <FormikSelect {...rest} />;
        case 'radio':
            return <FormikRadio {...rest} />;
        case 'checkbox':
            return <FormikCheckbox {...rest} />;
        case 'switch':
            return <FormikSwitch {...rest} />;
        case 'search':
            return <FormikSearch {...rest} />;
        default:
            return null;
    }
};

export default FormControl;
