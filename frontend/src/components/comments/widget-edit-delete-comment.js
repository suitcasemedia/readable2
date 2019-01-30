import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {commentDelete} from '../../actions/comments';
import Modal from 'react-modal';
import EditComment from './edit-comment'; // 
import {Link} from 'react-router-dom';


class WidgetEditDeleteComment extends Component{
  
    state = {
        editCommentModalOpen: false,
       
      }

      openEditCommentModal = () => {
       
        this.setState(() => ({
          editCommentModalOpen: true,     
        }))
      }

      closeEditCommentModal = () => {
        
        this.setState(() => ({
          editCommentModalOpen: false,
          
        }))
      }
    render(){
        const {editCommentModalOpen} = this.state
        const {comment, dComment} =  this.props  ;
        const {id}  = comment;
        const stringId = id.toString();
       
        return (
            <div>
                <div>
                    <a href="#" onClick={()=>{
                            let result = window.confirm("At you sure you want to delete?");
                            if(result){
                                dComment(stringId )
                            }         
                        }} 
                        className="card-link d-block">
                        <i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i>
                    </a>
                    <a href="#" onClick={ this.openEditCommentModal }className="card-link d-block"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
                </div>
                <Modal
                  className='modal'
                  overlayClassName='overlay'
                  isOpen={editCommentModalOpen}
                  onRequestClose={this.closeEditCommentModal}
                  contentLabel='Modal'
                >
            
                    <EditComment
                     initialValues={comment}
                     id={stringId} 
                     closeModal={this.closeEditCommentModal}            
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
        dComment: (id,actionType)=>dispatch(commentDelete(id,actionType))
        
    }
}

export default connect(null,mapDispatchToProps)(WidgetEditDeleteComment);


