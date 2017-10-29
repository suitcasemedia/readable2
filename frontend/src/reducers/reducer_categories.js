import {RECEIVE_CATEGORIES} from '../actions';
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        case RECEIVE_CATEGORIES:
            return {
                categories: action.categories
            }
        default:
            return state;
    }   
}