import React from 'react';
import {ErrorMessageStyle} from './error-message.style'

export const CustomErrorMessage = ({errorMessage}: { errorMessage?: string }): React.ReactElement | null => (
    <>
        {errorMessage && <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>}
    </>
)