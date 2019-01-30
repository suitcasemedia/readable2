import React from 'react';
import ReactDOM from 'react-dom';
import './font-awesome/css/font-awesome.min.css'
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import PostList from './components/post-list';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Post from './components/post';
import {createStore, applyMiddleware, compose} from 'redux' ;
import reducer from './reducers' ;
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const logger = store => next => action  => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
const store = createStore(

    reducer,
    composeEnhancers(
        applyMiddleware(/*logger,*/ thunk)
    )
)




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
      
          <Route exact path="/" component={PostList} />
          <Route exact path="/cat/:category" component={PostList} />
          <Route exact path="/post/:id" component={Post} />
      
        </Switch>
      </div>

    </BrowserRouter>
  </Provider>

    , document.getElementById('root'));
registerServiceWorker();
