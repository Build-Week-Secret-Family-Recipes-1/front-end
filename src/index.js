import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer, applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
