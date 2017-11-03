import {RECEIVE_POST,POST_DETAIL_VOTE} from '../actions' ;
export default function (state ={},action){
    switch (action.type){
        case RECEIVE_POST:{
           // console.log("receive post reducer ",state)
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
                ...state,
                  post:post,
                    voteScore:newScore
               
                   
                
            }
        }
        default:
            return state;
    }      
}



    
     
         
     
