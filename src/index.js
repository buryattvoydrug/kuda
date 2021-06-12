import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}>
          <HashRouter>
            <App />
          </HashRouter>
        </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
