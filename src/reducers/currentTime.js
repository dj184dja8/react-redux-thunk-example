export const FETCH_START = 'FETCH_START';
export const FETCH_DONE = 'FETCH_DONE';
export const FETCH_FAILED = 'FETCH_FAILED';

const defaultState = {
    status: null,
    time: '--/--/-- --:--:--',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                status: 'fetching',
            };
        case FETCH_DONE:
            return {
                ...state,
                status: 'done',
                time: action.time,
            };
        case FETCH_FAILED:
            return {
                ...state,
                status: 'failed',
                time: '--:--:--',
            };
        default:
            return state;
    }
};
