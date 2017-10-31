import React, {Component} from 'react'
import Header from './header'
import Categories from './categories' ;
import PostListItem  from './post-list-item';
import deepEquals from 'deep-equals'
import {
    fetchPosts ,
    fetchCategories,
    createPost,

   
    } from '../actions';
import {connect} from 'react-redux'
 
class PostList extends Component {
    componentDidMount() {
        const { fetchPosts , fetchCategories} = this.props;
       fetchPosts();
        fetchCategories();
    }
   
 //  dispatch(addComments(normalizer(comments))); 
    render(){
       
        const { posts, categories} = this.props;
        return(
            <div>
                <Header newPost={(data)=>{
                    this.props.newPost(data)
                    }} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-md-2 col-xs-12">
                            <Categories />
                         </div>
                        <div className="col-md-10 col-xs-12">
                            <div className="row">
                                { posts ?
                                     posts.map((post, index)=>{return(
                                         
                                         <PostListItem
                                            
                                            key={index}
                                            title={post.title}
                                            edit={this.editPost}
                                            delete={this.deletePost}
                                            commentCount={post.commentCount}
                                            voteScore={post.voteScore}
                                            author={post.author}
                                            category={post.category}
                                            body={post.body}
                                            id={post.id}
                                            timestamp={post.timestamp}
                                            
                                            />
                                         )} )
                                 : ''}
                                
                                
                            </div>
                        </div>
               
                       
                     </div>
                </div>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch){
    return{
      newPost :(data) => dispatch(createPost(data)),
      fetchPosts : ()=> dispatch(fetchPosts()),
      fetchCategories :()=> dispatch(fetchCategories()),
     
      
    }
  
  }

  function mapStateToProps({posts, categories}){
   
   return{posts : posts.posts ,
          categories : categories.categories}
      
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PostList);
  
