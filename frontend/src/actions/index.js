import * as readableAPIUtil from '../utils/api';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts 
});

export const fetchPosts = () => dispatch => (
  readableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);


/*
export const normalizeCommentsInPost = comments => (dispatch, getState) => {
     Object.values(comments)
    .forEach(comment => dispatch(addCommentToPost(comment.parentId, comment.id)) 
}

*/