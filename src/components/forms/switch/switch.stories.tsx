import * as React from 'react';
import {Formik, Form} from 'formik';

import FormControl from '../control';

export default {
    title: 'Components/Switch',
    component: FormControl,
};

export const _Switch = (): React.ReactElement => (
    <Formik
        initialValues={{switch: "3"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('switch', values.switch)}
    >
        {formikHelpers => (
            <Form className="w-full">
                <FormControl
                    onChange={(value) => formikHelpers.setFieldValue('switch', value)}
                    control="switch"
                    name="switch"
                    label="Hello world"
                />
            </Form>
        )}
    </Formik>
);
