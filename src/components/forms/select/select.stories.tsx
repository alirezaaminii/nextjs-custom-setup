import * as React from 'react';
import {Formik, Form} from 'formik';

import FormControl from '../control';

export default {
    title: 'Components/Select',
    component: FormControl,
};

export const _Select = (): React.ReactElement => (
    <Formik
        initialValues={{select: "3"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('select', values.select)}
    >
        {formikHelpers => (
            <Form className="w-full">
                <FormControl
                    mode="multiple"
                    allowClear
                    placeholder="Search..."
                    defaultValue={['2', '4']}
                    onChange={(value) => formikHelpers.setFieldValue('select', value)}
                    control="select"
                    name="select"
                    label="Hello world"
                    options={[
                        {
                            label: "hello world 2",
                            value: "2"
                        },
                        {
                            label: "hello world 3",
                            value: "3"
                        },
                        {
                            label: "hello world 0",
                            value: "0"
                        },
                        {
                            label: "hello world 1",
                            value: "1"
                        },
                        {
                            label: "hello world 4",
                            value: "4"
                        },
                        {
                            label: "hello world 5",
                            value: "5"
                        },
                        {
                            label: "hello world 6",
                            value: "6"
                        },
                        {
                            label: "hello world 7",
                            value: "7"
                        },
                        {
                            label: "hello world 8",
                            value: "8"
                        },
                        {
                            label: "hello world 9",
                            value: "9"
                        }
                    ]}
                />
            </Form>
        )}
    </Formik>
);
