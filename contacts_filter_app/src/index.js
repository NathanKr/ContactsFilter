import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware} from 'redux'
import rootReducer from './Reducers/rootReducer';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger);
const store = createStore(rootReducer,middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
