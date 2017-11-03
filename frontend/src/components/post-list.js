import React, {Component} from 'react'
import Header from './header'
import Categories from './categories' ;
import PostListItem  from './post-list-item';
import deepEquals from 'deep-equals';
import sortByHelper from '../utils/sort-by-helper.js'
import {
    fetchPosts ,
    fetchCategories,
    createPost,
    setActiveCategory

   
    } from '../actions';
import {connect} from 'react-redux'
 
class PostList extends Component {
    componentDidMount() {
        const { fetchPosts , fetchCategories } = this.props;
       fetchPosts();
        fetchCategories();
    }

    
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
                            <Categories  currentCategory={this.props.currentCategory}/>
                         </div>
                        <div className="col-md-10 col-xs-12">
                            <div className="row">
                                { posts ?
                                    sortByHelper(posts,this.props.filters).map((post, index)=>{
                                        if(post.deleted === false){
                                         return(
                                         
                                         <PostListItem
                                            
                                            key={index}
                                            title={post.title}
                                            //edit={this.editPost}
                                            delete={this.deletePost}
                                            commentCount={post.commentCount}
                                            voteScore={post.voteScore}
                                            author={post.author}
                                            category={post.category}
                                            body={post.body}
                                            id={post.id}
                                            timestamp={post.timestamp}
                                            
                                            />
                                         )}} )
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
      setCat: (cat) => dispatch(setActiveCategory(cat)),
    }
  }
function mapStateToProps({posts, sortBy, filters}, ownProps){
    let catItem = '' ;
    if( ownProps.match.params.category ){
        catItem = ownProps.match.params.category
    }
   let finalFilteredPosts  =  posts.posts
   let currentCategory = '';

    if(posts.posts){
        if( ownProps.match.params.category ){
             currentCategory = ownProps.match.params.category ;
             const filteredPosts = posts.posts.filter(post=> {
                 return  post.category == currentCategory
          })
          if(filteredPosts){
            finalFilteredPosts = filteredPosts;
        }
    }   
  }  
  return{
        posts : finalFilteredPosts  ,
        currentCategory :catItem ,
        filters,
        }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(PostList);
  