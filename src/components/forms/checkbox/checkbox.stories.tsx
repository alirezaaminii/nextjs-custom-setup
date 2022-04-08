import * as React from 'react';
import {Formik, Form} from 'formik';

import FormControl from '../control';

export default {
    title: 'Components/Checkbox',
    component: FormControl,
};

export const _Checkbox = (): React.ReactElement => (
    <Formik
        initialValues={{checkbox: "3"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('checkbox', values.checkbox)}
    >
        {formikHelpers => (
            <Form className="w-full">
                <FormControl
                    onChange={(value) => formikHelpers.setFieldValue('checkbox', value)}
                    control="checkbox"
                    name="checkbox"
                    label="Hello world"
                    options={[
                        {
                            label: "hello world 2",
                            value: "2"
                        },
                        {
                            label: "hello world 3",
                            value: "3"
                        }
                    ]}
                    disabled
                />
            </Form>
        )}
    </Formik>
);
