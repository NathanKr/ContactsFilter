import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware} from 'redux'
import rootReducer from './Reducers/rootReducer';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(logger);
const store = createStore(
    rootReducer,
    composeWithDevTools(middleware
    // other store enhancers if any
  ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
