import {ReactNode} from "react";

interface Option {
    label: ReactNode;
    value?: string | number | null;
}

export default Option;
