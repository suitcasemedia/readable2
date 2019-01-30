import {RECEIVE_COMMENTS} from '../actions/posts';
import {
    NEW_COMMENT,
    COMMENT_VOTE ,
    DELETE_COMMENT,
    EDIT_COMMENT} from '../actions/comments'

//maybe import lodash

export default function(state = {}, action){
    switch(action.type){
        case RECEIVE_COMMENTS:{
        const {comments} = action;
            return{
               comments
            } 
        }
        case NEW_COMMENT : {
            const{comment} = action;
            const{comments} = state;
            return {
                ...state,comments:[...comments,comment]
            }
        }
        case COMMENT_VOTE:{
            const { id,option, newScore } = action;
            const {comments} = state;
            const newComment = comments.map(comment => {
                if(id === comment.id){
                    return{...comment,voteScore:newScore}
                }
                return comment;      
            })
            return{...state,comments: newComment}

           

        }
        case DELETE_COMMENT:{
            const{comments} = state;
            const{id } = action;
            const NewArray = comments.filter(comment=>{
                return comment.id !== id
            })
            return{
              ...state, comments: NewArray 
            }

        }
        case EDIT_COMMENT :{
            const {comments} = state;
            const {values, id} = action;
            const {body} = values
            console.log("the body is",body)
            const newComments = comments.map(comment=>{
                if(id === comment.id){
                    return {...comment,body}
                }
                return comment;
            })
            console.log("new edited comements " , newComments)
            return {
                ...state ,comments:newComments
            }

        }
       default:
    return state;
    }   
}