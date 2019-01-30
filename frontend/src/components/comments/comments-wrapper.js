import React from 'react';
import CommentBox from './comment-box';
import CommentsList from './comments-list';



const CommentsWrapper = props=>{
   
    const {comments,parentId} = props;
    
      return(
          <div className="container">
              <CommentBox parentId={parentId} />
              <CommentsList comments={comments}/>
          </div>
            
      )
         
    }

export default CommentsWrapper;