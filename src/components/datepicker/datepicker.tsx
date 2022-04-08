import {DatePicker, DatePickerProps} from 'antd';
import {DatepickerStyle} from './datepicker.style';

const Datepicker = (props: DatePickerProps) => (
    <DatepickerStyle>
        <DatePicker {...props} className={`${props.className}`}/>
    </DatepickerStyle>
)

export default Datepicker