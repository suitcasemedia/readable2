import reducer from './reducers' ;
import {createStore, applyMiddleware, compose} from 'redux' ;
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    


const store = createStore(

  reducer,
  composeEnhancers(
      applyMiddleware(/*logger,*/ thunk,promise)
  )
)


if (window.Cypress) {
  // we are running in Cypress
  // expose the redux store
  window.reduxStore = store;
  // window.cypressStart();
  /* eslint-disable */
  if (window.hasOwnProperty('cypressStart')) {
    window.cypressStart();
  }
  /* eslint-enable */
}
export default store;