import React from 'react';
import * as NextImage from "next/image";

import 'antd/dist/antd.css';
import "../src/styles/globals.scss";
import {GlobalStyle} from '../src/styles/styledComponents/_global';

export const decorators = [
    Story => (
        <>
            <GlobalStyle/>
            <Story/>
        </>
    ),
];

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized/>,
});