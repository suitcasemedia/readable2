import {RECEIVE_POST} from '../actions' ;
export default function (state ={},action){
    switch (action.type){
        case RECEIVE_POST:{
           // console.log("receive post reducer ",state)
            const {post} = action;
            return{
                ...state, post
            }
        }
        default:
            return state;
    }      
}



    
     
         
     
