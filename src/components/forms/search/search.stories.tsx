import * as React from 'react';
import {Formik, Form} from 'formik';

import FormControl from '../control';

export default {
    title: 'Components/Search',
    component: FormControl,
};

export const _Search = (): React.ReactElement => (
    <Formik
        initialValues={{name: "hello world"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('name', values.name)}
    >
        {() => (
            <Form className="w-full">
                <FormControl
                    control="search"
                    name="name"
                    label="Hello world"
                />
            </Form>
        )}
    </Formik>
);
