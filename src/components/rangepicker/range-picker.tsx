import {DatePicker, TimeRangePickerProps} from 'antd';
import {DatepickerStyle} from "../datepicker/datepicker.style";

const { RangePicker } = DatePicker;

const Rangepicker = (props: TimeRangePickerProps) => (
    <DatepickerStyle>
        <RangePicker {...props} />
    </DatepickerStyle>
)

export default Rangepicker