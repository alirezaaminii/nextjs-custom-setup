import * as React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from "yup";

import FormControl from '../control';

export default {
    title: 'Components/Input',
    component: FormControl,
};


export const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Long text caption 2'),
});

export const _Input = (): React.ReactElement => (
    <Formik
        initialValues={{name: ""}}
        validationSchema={ValidationSchema}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('name', values.name)}
    >
        {(formik) => (
            <Form className="w-full">
                <FormControl
                    control="input"
                    name="name"
                    label="Hello world"
                    errorMessage={formik.errors?.name}
                />

                <div style={{marginTop: "4rem"}}>
                    <button type="submit">submit</button>
                </div>
            </Form>
        )}
    </Formik>
);
