import * as readableAPIUtil from '../utils/api';
export const NEW_COMMENT = "NEW_COMMENT" ;
export const COMMENT_VOTE = "COMMENT_VOTE";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";



export const newComment = (comment) => ({
    type: NEW_COMMENT,
    comment
  })
export const createComment = (comment) => dispatch => (
  readableAPIUtil
  .createComment(comment)
  .then(comment => dispatch(newComment(comment)))
  
)
export const newVote = (id, option , newScore) =>
({
    type: COMMENT_VOTE,
    id,
    option,
    newScore 
})

export const commentVote = (id, option, newScore, type) => dispatch =>{
  (
    readableAPIUtil
        .commentVote(id,option, newScore)
        .then(() => dispatch(newVote(id,option,newScore,type)))
  );
}


export const editCommentDispatch = (values,id) => ({
  
    //type: EDIT_POST,
    type: EDIT_COMMENT,
    values,
    id
   
  })

export const editCommentAsync = (values,id) => dispatch => (
  readableAPIUtil
  .editComment(values,id)
  .then(() => dispatch(editCommentDispatch(values,id)))
)


export const commentDeleted = (id) => ({
   type : DELETE_COMMENT,
   id
 })
 export const commentDelete = (id )=> dispatch => {
   readableAPIUtil
       .commentDelete(id)
       .then(()=> dispatch(commentDeleted(id)))
     
 
 }


