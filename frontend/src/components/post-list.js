import React, {Component} from 'react'
import Header from './header'
import Categories from './categories' ;
import PostListItem  from './post-list-item';
import {fetchPosts , receivePosts} from '../actions';
import {connect} from 'react-redux'
 

class PostList extends Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }
 //  dispatch(addComments(normalizer(comments))); 
    
    render(){
        console.log('props are ',this.props)
        
     

        return(
            <div>
                <Header/>
               
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-md-2 col-xs-12">
                            <Categories />
                         </div>
                        <div className="col-md-10 col-xs-12">
                            <div className="row">
                                <PostListItem/>
                                
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
      dispatch,
      fetchPosts,
      receivePosts
    }
  
  }
  function mapStateToProps({posts, comments}){
    
   return{posts, comments}
      
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PostList);
  
