import React ,{Component}from 'react';
import renderDate from '../utils/render-date';
import {connect} from 'react-redux' ;
import Modal from 'react-modal';
import Loading  from 'react-loading';
import EditPost from './edit-post';
import {Link} from 'react-router-dom';
import {
    postVote,
    newVote,
    postDelete,
    postDeleted
   
    } from '../actions';

class PostListItem extends Component{
    state = {
        editPostModalOpen: false,
       
      }
      openEditPostModal = () => {
        console.log("should be open now")
        this.setState(() => ({
          editPostModalOpen: true,
    
         
        }))
      }
      closeEditPostModal = () => {
        console.log("should be closed now")
        this.setState(() => ({
          editPostModalOpen: false,
          
        }))
      }

    render(){
        const {editPostModalOpen} = this.state


    const {id,title,author,category,body,commentCount,voteScore,newVote,timestamp,dPost} = this.props;
    const stringId = id.toString()

    return(

        <div className=" col-xs-12 col-sm-6 col-md-4 mb-4">
        <div className="card u-faux-block-link p-3 m-t-1 ">
           
            <div className="card-body">
                <div>
                    
                    <a href="#" onClick={(stringId)=>{ dPost(id) ;}} className="card-link d-block"><i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i></a>
                    <a href="#" onClick={ this.openEditPostModal }className="card-link d-block"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
                    
                </div>
                <p className="card-subtitle mb-2 text-muted">{renderDate(new Date(timestamp))}
                
                </p>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">By {author}</p>
                <p className="card-text">Category {category}</p>
                <p className="card-text">{body ? body.substring(0,26) : ''}...</p>
                <p className="card-text"> 
                    <i className="fa fa-comments  fa-2x  mr-2" aria-hidden="true"></i>
                    No of comments : {commentCount}
                </p>
                <p className="card-text">
                    <a href="#"  className="card-link">
                        <i onClick={(id,option)=>{
                            const newScore = voteScore + 1;
                            option = "upVote"
                            newVote(stringId,"upVote" , newScore)
        
                        }}
                        className="fa fa-hand-o-up fa-2x " aria-hidden="true"> </i>
                    </a>
                    <a href="#"   className="card-link ml-1">
                        <i onClick={(id,option)=>{
                            const newScore = voteScore - 1
                            newVote(stringId,"downVote", newScore)
                            }}  className="fa fa-hand-o-down fa-2x ml-1 mr-2  " aria-hidden="true"> </i>
                    </a>
                    No of votes: {voteScore}
                </p>
                <Link to={`/post/${id}`} className="u-faux-block-link__overlay"/>
            </div>
            
        </div>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={editPostModalOpen}
          onRequestClose={this.closeEditPostModal}
          contentLabel='Modal'
        >
        
        <EditPost initialValues={this.props} id={stringId} closeModal={this.closeEditPostModal} />
        
        </Modal>
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