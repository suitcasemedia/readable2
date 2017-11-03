import * as readableAPIUtil from '../utils/api';
import { normalize, schema } from 'normalizr';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const NEW_POST = "NEW_POST" ;
export const POST_VOTE = "POST_VOTE" ;
export const POST_DELETE = "POST_DELETE";
export const SORT_POST_BY = "SORT_POST_BY";
export const SET_CATEGORY = "SET_CATEGORY";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";


export const receivePost = post => ({
  type: RECEIVE_POST,
  post 
});
export const fetchPost = (id) => dispatch => (
  readableAPIUtil
      .fetchPost(id)
      .then(post => dispatch(receivePost(post)))
);





export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts 
});
export const fetchPosts = () => dispatch => (
  readableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);


export const newPost = post => ({
  type: NEW_POST,
  post
})
export const createPost = post => dispatch => (
  readableAPIUtil
  .createPost(post)
  .then(post => dispatch(newPost(post)))
)

export const editPostDispatch = (values,id) => ({
  
    type: EDIT_POST,
    values,
    id
   
  })

export const editPostAsync = (values,id) => dispatch => (
  readableAPIUtil
  .editPost(values,id)
  .then(() => dispatch(editPostDispatch(values,id)))
)

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  readableAPIUtil
      .fetchCategories()
      .then(posts => dispatch(receiveCategories(posts)))
);


export const setActiveCategory = (category)=> dispatch =>({
      type: SET_CATEGORY,
      category   
});
export const newVote = (id, option , newScore) =>
({
    type: POST_VOTE,
    id,
    option,
    newScore 
})

export const postVote = (id, option, newScore) => dispatch =>{

(
  readableAPIUtil
      .postVote(id,option, newScore)
      .then(() => dispatch(newVote(id,option,newScore)))
);
}


export const postDeleted = id => ({
  type : POST_DELETE,
  id
})
export const postDelete = id => dispatch => {
  readableAPIUtil
      .postDelete(id)
      .then(()=> dispatch(postDeleted(id)))

}
export function setSortPostBy (sortType) {
  console.log("sort type in the action =",sortType)
  return{

      type: SORT_POST_BY,
      sortType

  }
}

/*
export const addCommentToPost = ()=>{}
export const addComments =() =>{}
export const normalizeCommentsInPost = comments => (dispatch, getState) => {
     Object.values(comments)
    .forEach(comment => dispatch(addCommentToPost(comment.parentId, comment.id)))
    dispatch(addComments(normalize(comments)))
} 

*/
