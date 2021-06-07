import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux'; 
import {createLogger} from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';
import App from './containers/App';  //by default considers app.js if type not sprcified
import {searchRobots, requestRobots} from './reducers';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));  //store created that contains state of the app

ReactDOM.render(
  //Provider component passes down the store to all the components down the component tree from the app
  <Provider store={store}>  
   <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
