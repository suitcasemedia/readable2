import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './font-awesome/css/font-awesome.min.css'
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Post from './containers/PostContainer';
import {Provider} from 'react-redux'
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>   
          <Route exact path="/"   component={Post} />
          <Route exact path="/:id" component={Post} />
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>

    , document.getElementById('root'));
registerServiceWorker();
