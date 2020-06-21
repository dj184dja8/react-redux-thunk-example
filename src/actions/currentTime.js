import { FETCH_START, FETCH_DONE, FETCH_FAILED } from '../reducers/currentTime';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCurrentTime = () => async (dispatch, getState) => {
    const {
        currentTime: { status },
    } = getState();
    if (status === 'fetching') {
        dispatch({ type: FETCH_FAILED });
        throw Error('please stop');
    }

    dispatch({ type: FETCH_START });
    // simulate an async action
    await delay(1000);
    dispatch({ type: FETCH_DONE, time: new Date().toISOString() });
};

export default { getCurrentTime };
