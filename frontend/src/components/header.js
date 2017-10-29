import React ,{Component} from 'react' ;
import Modal from 'react-modal';
import Loading  from 'react-loading';
import CreatePost from './create-post'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'
//import {createPost} from '../actions';

class Header extends Component {
  state = {
    createPostModalOpen: false,
   
  }
  openCreatePostModal = () => {
    console.log("should be open now")
    this.setState(() => ({
      createPostModalOpen: true,

     
    }))
  }
  closeCreatePostModal = () => {
    console.log("should be closed now")
    this.setState(() => ({
      createPostModalOpen: false,
      
    }))
  }
  render(){
  
    const {createPostModalOpen} = this.state

    return(
      <div>
      <nav className="navbar navbar-toggleable-md d-block pt-1 clearfix text-light bg-warning mb-4">
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
        
        <CreatePost   createPost={(data) =>
            { this.props.newPost(data)
              this.closeCreatePostModal()
             
             // this.props.callback()
              
            }
            
         }/>
        
        </Modal>
      </div>
       
    )
  }
    
}



function mapStateToProps(){

}
export  default Header  ;