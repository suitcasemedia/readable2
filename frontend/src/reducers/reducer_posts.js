// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {RECEIVE_POSTS , NEW_POST ,POST_VOTE} from '../actions' ;
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        case RECEIVE_POSTS:{
            const {posts} = action;
            return {
                ...state, posts
            }
        }
        case NEW_POST:{
            const {post} = action;
            const {id} = post ;
            const { posts } = state 
            
            return {
                ...state,
                posts: [ ...posts, post ],
            }
        }
        case  POST_VOTE:{
            const { id ,option , newScore } = action
            const {posts} = state;
           
           const newPosts =  posts.map(post =>{
                if(post.id === id){
                    return{...post,voteScore:newScore}
                    
                }
                return post;

            })        
            return{...state,posts: newPosts}   
        }             
        default:
            return state;
    }   
}