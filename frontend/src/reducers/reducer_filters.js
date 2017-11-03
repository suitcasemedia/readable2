import {SORT_POST_BY} from '../actions';
//maybe import lodash
export default function(state = {sortPostBy: "most-votes"}, action){
    switch (action.type){
        case SORT_POST_BY:
        console.log("filters reducer is getting called")
            return {
              ...state,
                    sortPostBy: action.sortType

                 
            }
        default:
            return state;
    }   
}