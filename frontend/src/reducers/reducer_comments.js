import {RECEIVE_COMMENTS} from '../actions';
//maybe import lodash

export default function(state = {}, action){

    switch(action.type){
        case RECEIVE_COMMENTS:{
        const {comments} = action;
            return{
                
               comments
            } 
        }
       default:
    return state;
    }
   
}