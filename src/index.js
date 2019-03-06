import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterReducer from './Store/Reducers/Counter';
import resultReducer from './Store/Reducers/Results';

const logger = store => {
    return next => {
        return action => {
            // console.log("[middilewr action]", action)
            const result = next(action);
            // console.log("[middle ware store]", store.getState())
            return result
        }
    }
};

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: resultReducer
})

const store = createStore(rootReducer, composeEnhanser(applyMiddleware(logger, thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
