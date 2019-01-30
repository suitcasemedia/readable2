import { 
  RECEIVE_POSTS,
  UPDATE_RANK_FRONT_END,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE } from '../actions/posts';

export default function(
  state = {
    fetching: false,
    error: '',
    posts: [],
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Articles drag and drop',
        postIds: [],
      },
    },
    columnOrder: ['column-1'],
  },
  action
) {
  switch (action.type) {


    case RECEIVE_POSTS: {
      const postIds = action.posts.map(post=> post.id)
      return {
        ...state,
        posts: action.posts,
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'Articles drag and drop',
            postIds: [...postIds],
          },
        },
      };
    }
    
    case FETCH_POSTS:{

      return {
        ...state,
        fetching: true,
        error: '',
        posts: [],
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'Articles drag and drop',
            postIds: [],
          },
        },
      };

    }
    case FETCH_POSTS_SUCCESS:{
      const postIds =  action.payload.map(post=> post.id) ;
      return{
        ...state,
        fetching: false,
        error:'',
        posts: action.payload,
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'Articles drag and drop',
            postIds: [...postIds],
          },
        },
      };

    }
    case FETCH_POSTS_FAILURE:{

      return {
        ...state,
        error: action.payload.error,
        posts: [],
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'Articles drag and drop',
            postIds: [],
          },
        },
      };

    }


    case UPDATE_RANK_FRONT_END:{
      const {source, destination} = action;
     const itemToMove =  state.posts[source]
      const newPosts = state.posts;
      newPosts.splice(source,1)
      newPosts.splice(destination,0,itemToMove)

    
    return {
      ...state,
      posts: [...newPosts]
     
    }
    }
    default:
      return state;
  }
}
