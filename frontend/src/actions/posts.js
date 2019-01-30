import * as readableAPIUtil from '../utils/api';
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const POST_VOTE = "POST_VOTE" ;
export const GET_NEXT_ID = "GET_NEXT_ID";
export const RESET = "RESET";
export const MOVE_TO_RANKINGS = "MOVE_TO_RANKINGS";
export const UPDATE_RANK_FRONT_END = "UPDATE_RANK_FRONT_END";
export const NEW_RANK = "NEW_RANK";

//Fetch post
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const updateRankFrontEnd = (source,destination) =>{
  return{
    type: UPDATE_RANK_FRONT_END,
    source,
    destination
  }
}

export const rankPostsBackend = posts => dispatch => (
  readableAPIUtil
  .rank(posts)
  .then(posts => dispatch(newRank()))
)

export const newRank = () => ({
  type: NEW_RANK,
  
})

/*
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts 
});
export const fetchPosts = () => dispatch => (
  readableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

*/


export function fetchPosts() {
  const request = readableAPIUtil.fetchPosts()

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}


export function fetchPost(id) {
  const  request = readableAPIUtil.fetchPost(id);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost.payload,
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  }
}

export const moveToRankings = () => ({type: MOVE_TO_RANKINGS})
export const getNextId = () => ({type: GET_NEXT_ID})
export const reset = () => ({type:RESET})













