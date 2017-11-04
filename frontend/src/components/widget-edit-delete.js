import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {postDelete} from '../actions/posts';
import Modal from 'react-modal';
import EditPost from './edit-post';
import {Link} from 'react-router-dom';
import {Redirect,Route} from 'react-router'

class WidgetEditDelete extends Component{
  
    state = {
        editPostModalOpen: false,
       
      }

      openEditPostModal = () => {
        this.setState(() => ({
          editPostModalOpen: true,     
        }))
      }

      closeEditPostModal = () => {
        this.setState(() => ({
          editPostModalOpen: false,
          
        }))
      }
    render(){
        const {editPostModalOpen} = this.state
        const {post, d,dPost,deleteActionType,redirectHomeOnDelete} =  this.props  ;
        const {id}  = post;
        const stringId = id.toString();
       
        return (
            <div>
                <div>
                    <a href="#" onClick={()=>{
                            let result = window.confirm("At you sure you want to delete?");
                            if(result){
                                dPost(stringId ,deleteActionType,()=>{ if  (redirectHomeOnDelete) window.location.replace("/");  } )
                            }         
                        }} 
                        className="card-link d-block">
                        <i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i>
                    </a>
                    <a href="#" onClick={ this.openEditPostModal }className="card-link d-block"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
                </div>
                <Modal
                  className='modal'
                  overlayClassName='overlay'
                  isOpen={editPostModalOpen}
                  onRequestClose={this.closeEditPostModal}
                  contentLabel='Modal'
                >
            
                    <EditPost
                     initialValues={post}
                     id={stringId} 
                     closeModal={this.closeEditPostModal}
                     actionType={this.props.editActionType}

                     
                      />
            
                </Modal>
            </div>
        )


    }
    
}

function mapStateToProps(){
}

function mapDispatchToProps(dispatch){
    return{
        dPost: (id,actionType,callback)=>dispatch(postDelete(id,actionType,callback))
        
    }
}

export default connect(null,mapDispatchToProps)(WidgetEditDelete);


