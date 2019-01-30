import React ,{Component}from 'react';
import renderDate from '../utils/render-date';
import {connect} from 'react-redux' ;
//import Modal from 'react-modal';
import Loading  from 'react-loading';
//import EditPost from './edit-post';
import {Link} from 'react-router-dom';
import WidgetVoting from './widget-voting';
import WidgetEditDelete from './widget-edit-delete'
import {
    postVote,
   // newVote,
    postDelete,
    postDeleted
   
    } from '../actions/posts';

class PostListItem extends Component{
   

    render(){
       

        const {post,key, dPost } = this.props;
       // const{newVote, } = this.props
        const {id,title,author,category,body,commentCount,voteScore,timestamp} = post;
    
        const stringId = id.toString()

    return(

        <div className=" col-xs-12 col-sm-6 col-md-4 mb-4">
        <div className="card u-faux-block-link p-3 m-t-1 ">
           
            <div className="card-body">
                <WidgetEditDelete 
                    post={post}
                    redirectHomeOnDelete={false}
                    editActionType={"EDIT_POST"}
                    deleteActionType={"POST_DELETE"} 
                    post={post}
                     
                />
                <p className="card-subtitle mb-2 text-muted">{renderDate(new Date(timestamp))}</p>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">By {author}</p>
                <p className="card-text">Category {category}</p>
                <p className="card-text">{body ? body.substring(0,26) : ''}...</p>
                <p className="card-text"> 
                    <i className="fa fa-comments  fa-2x  mr-2" aria-hidden="true"></i>
                    No of comments : {commentCount}
                </p>
                <WidgetVoting post={post} actionType={"POST_VOTE"}/>
                <Link to={`/post/${id}`} className="u-faux-block-link__overlay"/>
            </div>
            
        </div>
        
    </div>    



    )





    }

}

function mapDispatchToProps(dispatch){
    return{
        newVote : (id,option , newScore)=> dispatch(postVote(id,option,newScore)),
        dPost : (id) => dispatch(postDelete(id))
    }

}


  
function mapStateToProps(){

}

export default connect(null,mapDispatchToProps)(PostListItem);