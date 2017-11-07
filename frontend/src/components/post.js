import React ,{Component}from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {fetchComments, fetchPost ,createPost} from '../actions/posts';
import WidgetVoting from './widget-voting';
import WidgetEditDelete from './widget-edit-delete';
import CommentsWrapper from './comments/comments-wrapper';
import _ from 'lodash';

class Post extends Component{
    componentWillMount(){
        const {id} = this.props.match.params ;
        const {fetchPost ,fetchComments } = this.props ;
        fetchPost(id) ;
        fetchComments(id) ;
    }
   
    renderPost(post){
            
          
           if(post.error){
            return (
                <div>
                <Header  actionType="POST_DETAIL_CREATE"/>
                     <div className="container">Sorry we couldn't find that post</div>
                </div> 
            ) 
        }
           else{
            const {comments} = this.props;
            //const {voteScore} = post;
            //const {id} = post;
               return(
                    <div>
                        <Header redirectHome={true} actionType="POST_DETAIL_CREATE" />    
                            <div className="container mb-5">
                                <h2>{post.title}</h2>
                                <h6>Number of comments: {post.commentCount}</h6>


                                <p>{post.body}</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <WidgetVoting post={post} actionType={"POST_DETAIL_VOTE"}/>
                        
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                        <WidgetEditDelete 
                                            redirectHomeOnDelete={true}
                                            editActionType={"POST_DETAIL_EDIT"}
                                            deleteActionType={"POST_DETAIL_DELETE"} 
                                            post={post}
                                        />
                                    </div>
                    
                                </div>

                            </div>
                             <CommentsWrapper parentId={post.id} comments={comments} />
                   </div>     
               )
           } 
           
            
       }

       render(){

        const {post,comments} = this.props;
       // console.log("the post is", post.id)
        if(post === undefined || _.has(post, 'id') == false){          
            return <div>
                    <Header  />
                         <div className="container">Sorry we don't have that post</div>
                    </div>
        }
        else{

            return(
                <div>
                      {this.renderPost( post)}
                     
                     
                </div>
                )

        }
           
       }
}

function mapDispatchToProps(dispatch){
    return{
        newPost: data =>dispatch(createPost(data)),
        fetchPost : (id)=> dispatch(fetchPost(id)),
       fetchComments : (id)=> dispatch(fetchComments(id))
    }
}
function mapStateToProps({post, comments},ownProps){
    return{
        comments:comments.comments,
        post : post.post,
        id: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)