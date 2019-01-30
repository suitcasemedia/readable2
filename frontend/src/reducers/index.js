import { combineReducers } from 'redux';
import PostReducer from './reducer_post' ; 
import PostsReducer from './reducer_posts' ; 
import {reducer  as formReducer}  from 'redux-form' ;

const rootReducer = combineReducers({

  post: PostReducer,
  posts:PostsReducer,
  form: formReducer
});

export default rootReducer;
