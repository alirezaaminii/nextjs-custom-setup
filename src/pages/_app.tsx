import React from "react";
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import NextNProgress from "nextjs-progressbar";
import {appWithTranslation} from 'next-i18next'

import store from '@/redux/store';

// styles
import 'antd/dist/antd.css';
import '@/styles/globals.scss';
import {GlobalStyle} from "@/styles/styledComponents/_global";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <NextNProgress
                color={"#000000"}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </Provider>
    );
}

export default appWithTranslation(MyApp);