import {AxiosError} from 'axios';

// TODO:: write logic of this helper
const isUnauthorized = (error?: AxiosError): boolean => !!error;

export default isUnauthorized;
