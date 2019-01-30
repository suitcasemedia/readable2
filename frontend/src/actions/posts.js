import * as readableAPIUtil from '../utils/api';
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const NEW_POST = "NEW_POST" ;
export const POST_VOTE = "POST_VOTE" ;
export const POST_DELETE = "POST_DELETE";
export const SORT_POST_BY = "SORT_POST_BY";
export const SET_CATEGORY = "SET_CATEGORY";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const POST_DETAIL_VOTE = "POST_DETAIL_VOTE";
export const POST_DETAIL_EDIT = "POST_DETAIL_EDIT";
export const POST_DETAIL_DELETE = "POST_DETAIL_DELETE";
export const POST_DETAIL_CREATE = "POST_DETAIL_CREATE";


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



export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
export const fetchComments = (id) => dispatch => (
  readableAPIUtil
      .fetchComments(id)
      .then(comments => dispatch(receiveComments(comments)))
);



export const newPost = (post,type) => ({
  //type: NEW_POST,
  type,
  post
})
export const createPost = (post,type,callback) => dispatch => (
  readableAPIUtil
  .createPost(post)
  .then(post => dispatch(newPost(post,type)))
  .then(()=> callback())
)

export const editPostDispatch = (values,id,type) => ({
  
    //type: EDIT_POST,
    type,
    values,
    id
   
  })

export const editPostAsync = (values,id,type) => dispatch => (
  readableAPIUtil
  .editPost(values,id)
  .then(() => dispatch(editPostDispatch(values,id,type)))
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

export const newVote = (id, option , newScore,type) =>
  ({
      type,
      id,
      option,
      newScore 
  })

export const postVote = (id, option, newScore, type) => dispatch =>{
    (
      readableAPIUtil
          .postVote(id,option, newScore)
          .then(() => dispatch(newVote(id,option,newScore,type)))
    );
  }


export const postDeleted = (id,type) => ({
 // type : POST_DELETE,
  type,
  id
})
export const postDelete = (id,type ,callback)=> dispatch => {
  readableAPIUtil
      .postDelete(id)
      .then(()=> dispatch(postDeleted(id,type)))
      .then(()=> callback())

}
export function setSortPostBy (sortType) {
 
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
