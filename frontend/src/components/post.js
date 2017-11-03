import React ,{Component}from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {/*fetchComments,*/fetchPost ,createPost} from '../actions'

class Post extends Component{

    componentDidMount(){
        const {id} = this.props.match.params ;
        const {fetchPost ,fetchComments } = this.props ;
        fetchPost(id) ;
      //  fetchComments(id) ;
    }
    renderPost(){
           if(this.props.post.title === undefined){          
               return <div>
                       <Header />
                            <div className="container">Loading...</div>
                       </div>
           }
           else{
               return(
                   <div>
                       <Header />    
                       <h2>{this.props.post.title}where is the props?</h2>
                       <p>{this.props.post.body}</p>
                   </div>     
               )
           }   
       }

       render(){
           return(
           <div>
                 {this.renderPost()}

           </div>
           )
       }
}

function mapDispatchToProps(dispatch){
    return{
        newPost: data =>dispatch(createPost(data)),
        fetchPost : (id)=> dispatch(fetchPost(id)),
       /* fetchComments : (id)=> dispatch(fetchComments(id))*/
    }
}
function mapStateToProps({post},ownProps){
    
    return{
        post,
        id: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)