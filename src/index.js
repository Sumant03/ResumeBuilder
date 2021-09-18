import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./redux/rootReducer"
import thunk from "redux-thunk";

let myStore = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
       <Provider store={myStore}>
         <App/>
         </Provider>,

  document.getElementById('root')
);

