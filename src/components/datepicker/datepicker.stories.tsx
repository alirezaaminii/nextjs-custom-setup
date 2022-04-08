import * as React from 'react';

import Datepicker from './datepicker';

export default {
    title: 'Components/Datepicker',
    component: Datepicker,
};

export const _Datepicker = (): React.ReactElement => (
    <Datepicker onChange={(value => console.log('selected date', value))}/>
);
