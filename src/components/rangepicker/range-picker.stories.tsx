import * as React from 'react';

import Rangepicker from './range-picker';

export default {
    title: 'Components/Rangepicker',
    component: Rangepicker,
};

export const _Rangepicker = (): React.ReactElement => (
    <Rangepicker onChange={(value => console.log('selected date', value))}/>
);
