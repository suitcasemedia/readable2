// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {
  RECEIVE_POST,
  NEW_POST,
  POST_VOTE,
  GET_NEXT_ID,
  RESET,
  MOVE_TO_RANKINGS,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../actions/posts';
//maybe import lodash

const unshuffled = [1, 2, 3, 4, 5];

const shuffled = unshuffled
  .map(a => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map(a => a.value);

export default function(
  state = {
    postsRanking: [0, 1, 2, 3, 4],
    numberOfPostsRead: 1,
    shuffledPosts: shuffled,
    currentId: shuffled[0],
    timeToRank:false,
    fetching: false,
    error: '',
  },
  action
) {
  switch (action.type) {
    case GET_NEXT_ID: {
      const { shuffledPosts, numberOfPostsRead } = state;
      const newShuffle =
        numberOfPostsRead < 5
          ? shuffledPosts.splice(1, 5 - numberOfPostsRead)
          : shuffledPosts;
      return {
        ...state,
        shuffledPosts: [...newShuffle],
        currentId: newShuffle[0],
        numberOfPostsRead: numberOfPostsRead + 1 ,
       
      };
    }
    case MOVE_TO_RANKINGS:{
      const { shuffledPosts, numberOfPostsRead } = state;
      
      return{
        ...state,
        timeToRank: true,
     
      }
    }
    case RESET: {
      
      const unshuffled = [1, 2, 3, 4, 5];

      const shuffled = unshuffled
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
      return {
        ...state,
        postsRanking: [0, 1, 2, 3, 4],
        numberOfPostsRead: 1,
        shuffledPosts: shuffled,
        currentId: shuffled[0],
        timeToRank:false,
        fetching: false,
        error: '',
      };
    }
    case FETCH_POST:{
      return {
        ...state,
        fetching: true,
        error: '',
        post:'',
      }
    }
    case FETCH_POST_SUCCESS:{
      const {payload} = action;
      
      return {
        ...state,
        post:payload,
        fetching: false,
        error: ''
      }
    }
    case  FETCH_POST_FAILURE :{
      const {payload} = action;

      return{
        ...state,
        fetching:false,
        error: payload.error,
        post:''
      }
    }
   

    case POST_VOTE: {
      const { id, option, newScore } = action;
      const { posts } = state;
      const newPost = posts.map(post => {
        if (post.id === id) {
          return { ...post, voteScore: newScore };
        }
        return post;
      });
      return { ...state, posts: newPost };
    }

    default:
      return state;
  }
}
