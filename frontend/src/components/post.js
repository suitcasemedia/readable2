import React ,{Component}from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {fetchComments, fetchPost ,createPost} from '../actions';
import WidgetVoting from './widget-voting';

class Post extends Component{

    componentWillMount(){
        const {id} = this.props.match.params ;
        const {fetchPost ,fetchComments } = this.props ;
        fetchPost(id) ;
        fetchComments(id) ;
    }
    renderComments(comments){
        if(comments === undefined){          
            return <div>
                
                         <div className="container">Loading...</div>
                    </div>
        }
        else{
            return(
                <div className="container">
                    
                   { comments.map((comment) =>{
                       return <p>{comment.body}</p> 
                   })}
                </div>     
            )
        }   
    }

    renderPost(post){
           if(post === undefined){          
               return <div>
                       <Header />
                            <div className="container">Loading...</div>
                       </div>
           }
           
          
          
           else{
            const {voteScore, id} = post;
               return(
                    <div>
                        <Header />    
                            <div className="container">
                                <h2>{post.title}</h2>

                                <p>{post.body}</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <WidgetVoting post={post} actionType={"POST_DETAIL_VOTE"}/>
                        
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                    
                                </div>

                            </div>
                   </div>     
               )
           }   
       }

       render(){

        const {post,comments} = this.props;
       
       // const {voteScore, id} = post;
       // const stringId = id.toString();
           return(
           <div>
                 {this.renderPost( post)}
                 {this.renderComments(comments) }
                 
                 

           </div>
           )
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