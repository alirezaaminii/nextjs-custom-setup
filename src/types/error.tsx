import MessageError from './message-error';

interface ActionError {
  code: string;
  message: string | MessageError;
  id: number;
}

export default ActionError;
