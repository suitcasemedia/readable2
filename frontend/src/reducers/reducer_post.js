import {POST_VOTE} from '../actions' ;
const post = (state,action) =>{
    switch (action.type){
        case POST_VOTE:{
            const {posts} = state;
            if(state.id !== post.id ){
                return state
            }
            return{
                 ...state,
                    posts: [...posts,  { ...post, voteScore:  10} ]
            }
        }
        default:
            return state;
    }      
}



    
     
         
     
