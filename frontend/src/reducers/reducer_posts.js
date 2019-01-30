// import { combineReducers} from 'redux' ;
//import post from './reducer_post'
import {RECEIVE_POSTS ,
        NEW_POST ,
        POST_VOTE ,
        POST_DELETE, 
        EDIT_POST
        } from '../actions/posts' ;
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        case RECEIVE_POSTS:{
            const {posts} = action;
            return {
                ...state,
                  posts:[...posts]
            }
        }
        case NEW_POST:{
            const {post} = action;
            const {id} = post ;
            const { posts } = state 
            
            return {
                ...state,
                posts: [ ...posts , post],
            }
        }
        case EDIT_POST:{
            console.log("edit post reducer")
            const {values, id} = action ;
            const {title,body} = values;
            const {posts} = state;
            const newPost = posts.map(post=>{
                if (id === post.id){
                    return{...post, title, body}
                }
                return post;
            })
            return {...state, posts: newPost }
        }
        case  POST_VOTE:{
            console.log("voting reducer")
            const { id ,option , newScore } = action
            const {posts} = state;
           
            const newPost =  posts.map(post =>{
                if(post.id === id){
                    return{...post,voteScore:newScore}
                    
                }
                return post;

            })        
            return{...state,posts: newPost}   
        }  
        case POST_DELETE:{
            console.log("post delete redcuer")
            const {id} = action;
            const {posts} = state;

            const newPosts = posts.map(post => {
                if( post.id === id) {
                    return{...post,deleted:true}
                  
            }
            return post;
        })
          return{...state, posts: newPosts}
           
        }           
        default:
            return state;
    }   
}