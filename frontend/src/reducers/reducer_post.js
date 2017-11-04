import {RECEIVE_POST,
        POST_DETAIL_VOTE,
        POST_DETAIL_EDIT ,
        POST_DETAIL_DELETE ,
        POST_DETAIL_CREATE ,

       } from '../actions/posts' ;
export default function (state ={},action){
    switch (action.type){
        case RECEIVE_POST:{
            const {post} = action;
            return{
                ...state, post
            }
        }
        case POST_DETAIL_VOTE:{
            const {post} = state;
            const {voteScore} = post;
            const {newScore} = action;
            return{
                 ...state, post: { ...post, voteScore: newScore  }      
            }
        }
        case POST_DETAIL_EDIT :{
            const {post} = state;
            
            const {values} = action;
            const{title,body} = values;
            return{
                ...state, post: { ...post, title ,body }
            }
            


        }
        case POST_DETAIL_DELETE :{

        }
        case POST_DETAIL_CREATE  :{

        }
        default:
            return state;
    }      
}



    
     
         
     
