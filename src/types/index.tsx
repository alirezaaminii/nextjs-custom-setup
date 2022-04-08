import ReduxAction from './redux-action';

export type { default as ActionError } from './error';
export type { default as ReduxAction } from './redux-action';
export type { default as Option } from './option';

export interface Dictionary<T> {
  [id: string]: T;
}

export type ActionHandler<ReducerState> = (
  state: ReducerState,
  action: ReduxAction,
) => ReducerState;
