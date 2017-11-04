import React, {Component} from 'react'
import Header from './header'
import Categories from './categories' ;
import Loading  from 'react-loading';
import PostListItem  from './post-list-item';
import sortByHelper from '../utils/sort-by-helper.js'
import {
    fetchPosts ,
    fetchCategories,
    setActiveCategory
    } from '../actions/posts';
import {connect} from 'react-redux'
 
class PostList extends Component {
    componentDidMount() {
        const { fetchPosts , fetchCategories } = this.props;
       fetchPosts();
        fetchCategories();
    }

    
    render(){
       
       
        const { posts } = this.props;
        // const {categories} = this.props;
        if(posts === undefined){          
            return <div>
                        <Header 
                            redirectHome={false}
                            actionType={"NEW_POST"}
                         />
                        <div className="container">
                             <Loading delay={200} type='spin' color='#222' className='loading' />
                        </div>
                    </div>
        }
        else{
            return(
            <div>
                <Header 
                   redirectHome={false}
                   actionType={"NEW_POST"}
                 />
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
                                            linkButton={true}
                                            post={post}
                                            key={index} 
                                            delete={this.deletePost}                                        
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
}
function mapDispatchToProps(dispatch){
    return{
     
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
  