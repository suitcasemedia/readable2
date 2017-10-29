import {RECEIVE_POSTS , NEW_POST} from '../actions' ;
//maybe import lodash
export default function(state = {}, action){
    switch (action.type){
        case RECEIVE_POSTS:
            const {posts} = action;
            return {
                ...state, posts
            }
        case NEW_POST:
            const {post} = action;
            const {id} = post ;
            return {
                ...state,
                    [id] : post
            }
        default:
            return state;
    }   
}