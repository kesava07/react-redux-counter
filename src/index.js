import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterReducer from './containers/Reducers/Counter';
import resultReducer from './containers/Reducers/Results';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: resultReducer
})

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
