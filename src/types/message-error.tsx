import { Dictionary } from './index';

interface MessageError {
  code: string;
  detail: string;
  metadata?: Dictionary<string>;
  status?: string;
}

export default MessageError;
