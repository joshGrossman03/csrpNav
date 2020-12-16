import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { configurationStore } from './store/configurestore';



const store = configurationStore();



ReactDOM.render(
    
        <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  
    

    , document.querySelector('#root'));