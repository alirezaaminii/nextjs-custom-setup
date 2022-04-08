import {Dispatch} from 'redux';
import {AxiosError, AxiosPromise, AxiosResponse, CancelToken} from 'axios';

import {ReduxAction} from '../types';
import createAction from './create-action';
import isUnauthorized from './is-unauthorized';

export type FailurePayload = {
    error: AxiosError;
    retry: boolean;
    notShowError?: boolean;
};

export type OnUploadProgressPayload = {
    loaded: number;
    total: number;
};

export type Config = {
    cancelToken: CancelToken | null;
    onUploadProgress: (payload: unknown) => unknown;
    success: (payload: unknown) => unknown;
    failure: (payload: FailurePayload) => unknown;
    retry: {
        count: number;
        interval: number | ((index: number) => number);
    };
};

export type State = {
    retry: {
        count: number;
    };
};

export type RequestConfig = {
    promise: AxiosPromise;
    withResponse: boolean;
};

/**
 * HTTPAction is a utility for simplifying of the HTTP actions and reducing
 * boilerplate as much as possible. This utility has been designed specifically
 * for current codebase and it requires Axios and ReduxThunk.
 *
 * @class HTTPAction
 */
class HTTPAction {
    private actionType: string;

    private dispatcher: Dispatch<ReduxAction>;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    private request: RequestConfig;

    private config: Config = {
        cancelToken: null,
        onUploadProgress: payload => payload,
        success: payload => payload,
        failure: payload => payload,
        retry: {
            count: 0,
            interval: 0,
        },
    };

    private state: State = {
        retry: {
            count: 0,
        },
    };

    constructor(
        dispatch: Dispatch<ReduxAction>,
        actionType: string,
        config?: Config,
    ) {
        this.dispatcher = dispatch;
        this.actionType = actionType;
        this.config = {...this.config, ...config};
    }

    public static requestType(actionType: string): string {
        return `${actionType}/REQUEST`;
    }

    public static uploadType(actionType: string): string {
        return `${actionType}/UPLOAD`;
    }

    public static successType(actionType: string): string {
        return `${actionType}/SUCCESS`;
    }

    public static failureType(actionType: string): string {
        return `${actionType}/FAILURE`;
    }

    public handle(promise: AxiosPromise, withResponse = false): Promise<void> {
        this.request = {
            promise,
            withResponse,
        };

        return promise
            .then((response: AxiosResponse) => {
                if (withResponse) {
                    return this.success(response.data);
                }

                this.success();
            })
            .catch((error: AxiosError) => {
                this.failure(error);
            });
    }

    public init(payload?: unknown): HTTPAction {
        this.dispatch(HTTPAction.requestType(this.actionType), payload);
        return this;
    }

    public success(payload?: unknown): void {
        this.dispatch(
            HTTPAction.successType(this.actionType),
            this.config.success(payload),
        );
    }

    public retry(): void {
        if (this.state.retry.count >= this.config.retry.count) {
            return;
        }

        this.state.retry.count++;
        const interval: number =
            typeof this.config.retry.interval === 'number'
                ? this.config.retry.interval
                : this.config.retry.interval(this.state.retry.count);

        this.init();
        setTimeout(
            () => this.handle(this.request.promise, this.request.withResponse),
            interval,
        );
    }

    public failure(error: AxiosError, notShowError?: boolean): void {
        const payload: FailurePayload = {
            error,
            retry: isUnauthorized(error)
                ? false
                : this.state.retry.count < this.config.retry.count,
            notShowError,
        };

        this.dispatch(
            HTTPAction.failureType(this.actionType),
            this.config.failure(payload),
        );
        this.retry();
    }

    private dispatch(actionType: string, payload?: unknown): void {
        this.dispatcher(createAction(actionType, payload));
    }
}

export default HTTPAction;
