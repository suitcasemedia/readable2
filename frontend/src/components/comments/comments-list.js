import React from 'react';
import WidgetVotingComment from './widget-voting-comment';
import WidgetEditDeleteComment from './widget-edit-delete-comment';



const CommentsList = props=>{
   
    const {comments} = props;
    
        if(comments === undefined){          
            return <div>
                
                         <div className="container">Loading...</div>
                    </div>
        }
        else{
          
            return(
                <div className="container"> 
                   { comments.slice(0).reverse().map((comment) =>{
                    return (
                        <div className="card" key={comment.id}>
                            <div className="card-body">
                                <p className="card-text m-1 p-1">{comment.body}</p>
                                <p className="card-text m-1 p-1">By: {comment.author}</p>
                                <WidgetVotingComment comment={comment}/>
                                <WidgetEditDeleteComment comment={comment} />
                            </div> 
                        </div>
                    )
                        
                   })}
                </div>     
            )
        }  
         
    }

export default CommentsList;