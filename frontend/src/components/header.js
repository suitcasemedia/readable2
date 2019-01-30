import React ,{Component} from 'react' ;
import Modal from 'react-modal';
import Loading  from 'react-loading';
import CreatePost from './create-post';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/posts';

class Header extends Component {
  state = {
    createPostModalOpen: false,
   
  }
  openCreatePostModal = () => {
    this.setState(() => ({
      createPostModalOpen: true,

     
    }))
  }
  closeCreatePostModal = () => {
    this.setState(() => ({
      createPostModalOpen: false,
      
    }))
  }
  render(){
    const {actionType} = this.props;
    const {createPostModalOpen} = this.state

    return(
      <div>
      <nav className="navbar navbar-toggleable-md d-block pt-1 clearfix text-light bg-warning mb-4">
        <ul className="nav float-left">
          <li>
            <Link to="/" >Home</Link>
          
          </li>
        </ul>
        <ul className="nav float-right ">                                                          
          <li>
            <button  onClick={this.openCreatePostModal} className="btn btn-outline float-right" href="#">Create New Post <i className="fa fa-plus" aria-hidden="true"></i></button>
          </li> 
        </ul>
        
      </nav>
     
      <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={createPostModalOpen}
          onRequestClose={this.closeCreatePostModal}
          contentLabel='Modal'
        >
        
        <CreatePost 
           redirectHome={this.props.redirectHome}
           shutModal={()=>{this.closeCreatePostModal()}} 
           createPost={(data,actionType,callback) =>
            { this.props.newPost(data,actionType,callback)
              this.closeCreatePostModal()
             // this.props.callback()  
            }}
            actionType={actionType}
         />
        
        </Modal>
      </div>
       
    )
  }
    
}

function mapDispatchToProps(dispatch){
  return{
    newPost :(data,actionType,callback) => dispatch(createPost(data,actionType,callback)),
   
  }
}


export  default connect(null,mapDispatchToProps) (Header)  ;