import React, {Component}from 'react'
import {connect} from 'react-redux'
import {createComment}  from '../../actions/comments'

class CommentBox extends Component {
    constructor(props){
        super(props);
        const {parentId} = this.props;
        this.state = {parentId ,body: '',author: ''}; 
            
    }
    handleAuthorChange = (event)=>{
        this.setState({ author: event.target.value})     
    }
    handleBodyChange = (event)=>{
        this.setState({ body: event.target.value})
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.saveComment(this.state)
        this.setState({parentId:this.props.parentId ,body: '',author: ''});
    }

    render(){
        const {parentId} =this.props;
       
        return(     
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h4>Add a comment</h4>
                <div className="form-group">
                   
                    <input 
                        placeholder="Your name"
                        className="form-control"
                        type="text"
                        value={this.state.author} 
                        onChange={this.handleAuthorChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                   
                    <textarea 
                        placeholder="Your comment"
                        className="form-control"
                        value={this.state.body} 
                        onChange={this.handleBodyChange.bind(this)}/>
                    <div>
                        <button className="btn mt-2" action="submit">Submit comment</button>
                    </div>
                </div>
            </form>                  
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        saveComment : (comment)=> dispatch(createComment(comment))
    }

}
;
export default connect(null,mapDispatchToProps)(CommentBox);