import { AnyAction } from 'redux';

import { ReduxAction } from '../types';

/**
 * Creates a simple ReduxAction object and fills it with type and action.
 * Use this function specifically for axios related actions. (start request,
 * successful request and failed request)
 *
 * @param type: Type of the action
 * @param payload: Payload of the action
 */
const createAction = (
  type: string,
  payload?: unknown,
  meta?: unknown,
): ReduxAction => {
  const action: AnyAction = { type };
  if (payload) {
    action.payload = payload;
  }
  if (meta) {
    action.meta = meta;
  }
  return action;
};

export default createAction;
