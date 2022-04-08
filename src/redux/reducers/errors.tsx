import {ERROR_ADD, ERROR_REMOVE} from '@/constants/index';

import {ActionError, ReduxAction} from '@/types/index';

export type ErrorsState = ActionError[];
export const initialState: ErrorsState = [];

const handleActions = (
    state: ErrorsState = initialState,
    action: ReduxAction,
): ErrorsState => {
    switch (action.type) {
        case ERROR_ADD:
            return [...state, action.payload];
        case ERROR_REMOVE:
            return state.filter(err => err.id !== action.payload.id);
        default:
            return state;
    }
};

export default handleActions;
