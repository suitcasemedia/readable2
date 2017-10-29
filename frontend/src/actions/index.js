import * as readableAPIUtil from '../utils/api';
import { normalize, schema } from 'normalizr';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const NEW_POST = "NEW_POST" ;

export const newPost = post => ({
  type: NEW_POST,
  post

})
export const createPost = post => dispatch => (
  readableAPIUtil
  .createPost(post)
  .then(post => dispatch(newPost(post)))
)





export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts 
});

export const fetchPosts = () => dispatch => (
  readableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  readableAPIUtil
      .fetchCategories()
      .then(posts => dispatch(receiveCategories(posts)))
);
/*
export const addCommentToPost = ()=>{}
export const addComments =() =>{}
export const normalizeCommentsInPost = comments => (dispatch, getState) => {
     Object.values(comments)
    .forEach(comment => dispatch(addCommentToPost(comment.parentId, comment.id)))
    dispatch(addComments(normalize(comments)))
} 

*/

