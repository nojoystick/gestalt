import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AudioStore } from './redux';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={AudioStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
