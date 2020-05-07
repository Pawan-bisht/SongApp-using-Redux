import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';       //It is component and named export
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store = { createStore(reducers) }>
        <App  />
    </Provider>,
    document.getElementById("root"));