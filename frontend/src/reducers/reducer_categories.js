import {RECEIVE_CATEGORIES,SET_CATEGORY} from '../actions';
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        case SET_CATEGORY:
         console.log("cat reducer working! ")
            return{
                ...state,
                     activeCat: action.category
            }
        case RECEIVE_CATEGORIES:
            return {
               // categories: action.categories
            }
        default:
            return state;
    }   
}