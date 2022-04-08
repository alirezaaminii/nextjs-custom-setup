import React from 'react';
import {LabelStyle} from "./label.style";

interface LabelProps {
    label?: string;
    htmlFor?: string
}

export const Label = ({label, htmlFor}: LabelProps): React.ReactElement | null => {
    if (label) {
        return (
            <LabelStyle>
                <label htmlFor={htmlFor}>{label}</label>
            </LabelStyle>
        )
    }
    return null
};
