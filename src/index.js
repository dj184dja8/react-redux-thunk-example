import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkWithErrorHandler from 'redux-thunk-with-error-handler';
import App from './components/App';
import reducer from './reducers';

const errorHandler = (err) => (/*dispatch, getState*/) => {
    console.error('error =>', err);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkWithErrorHandler(errorHandler)))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
