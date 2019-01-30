import { combineReducers } from 'redux';
import PostReducer from './reducer_post' ; 
import PostsReducer from './reducer_posts' ; 
import CommentsReducer from './reducer_comments' ; 
import CategoriesReducer from './reducer_categories' ; 
import FiltersReducer from './reducer_filters' ; 
import {reducer  as formReducer}  from 'redux-form' ;

const rootReducer = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  categories : CategoriesReducer,
  filters: FiltersReducer,
  form: formReducer
});

export default rootReducer;
