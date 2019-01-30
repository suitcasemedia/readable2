import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {Link,History    } from 'react-router-dom'
import {connect} from 'react-redux'
import {editPostAsync} from '../actions/posts'
import '../App.css'

class EditPost extends Component {
  renderField(field){
    const {meta : {touched , error}} = field;
    const className = `form-control ${touched && error ? 'is-invalid': ''}`
    return( 
       <div className="form-group">
            <label>{field.label}</label>
            <input
                className={className}
                type="text"
                {...field.input}
            >
            </input>
            <div className="text-help invalid-feedback">
                { touched ? error : ''}
            </div>
        </div>
   )       
}

    onSubmit(values){
        this.props.editPost(values, this.props.id, this.props.actionType)  
        this.props.closeModal();        

    }
    render(){
        const {handleSubmit,postId} = this.props;
        return(
            <div>
                <div className="App">
                    <div className="App-header">
                        <h2>  Edit post</h2>
                    </div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                          label="Title"
                          name="title"
                          component={this.renderField}
                        />
                       
                        <Field
                          label="Post Content"
                          name="body"
                          component={this.renderField}
                        />
                      
                        <button type="submit" className="btn">Submit</button>
                        <button type="submit"  onClick={ ()=>this.props.closeModal()} className="btn ml-1">Cancel</button>  
                       
                    </form> 
                </div>
            </div>       
        );
    }
}
  
function validate(values) {
  const errors = {}
  //   valitate the inputs from 'values'
  if(!values.title || values.title.length < 3){
      errors.title = "Enter a title that is at least 3 characters long"
  }
  if(!values.body){
      errors.body = "Enter some content please"
  }
return errors;
  
}
function mapDispatchToProps(dispatch){
    return {
        editPost : (values, id, actionType)=>{ dispatch(editPostAsync(values,id,actionType)) ;}
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditPost = reduxForm({
    validate,
    form: 'editForm' // a unique identifier for this form
  })(EditPost)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  EditPost = connect(null,
    mapDispatchToProps // bind post    loading action creator
  )(EditPost)
  
  export default EditPost;



