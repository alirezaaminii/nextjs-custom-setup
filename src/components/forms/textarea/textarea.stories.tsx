import * as React from 'react';
import {Formik, Form} from 'formik';

import FormControl from '../control';

export default {
    title: 'Components/Textarea',
    component: FormControl,
};

export const _Textarea = (): React.ReactElement => (
    <Formik
        initialValues={{textarea: "hello world"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('textarea', values)}
    >
        {() => (
            <Form className="w-full">
                <FormControl
                    control="textarea"
                    name="textarea"
                    label="Hello world"
                />
            </Form>
        )}
    </Formik>
);
