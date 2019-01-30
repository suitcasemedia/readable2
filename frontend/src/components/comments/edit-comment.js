import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {Link,History    } from 'react-router-dom'
import {connect} from 'react-redux'
import {editCommentAsync} from '../../actions/comments'
import '../../App.css'

class EditComment extends Component {
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
        this.props.editComment(values, this.props.id, )  
        this.props.closeModal();        

    }
    render(){
        const {handleSubmit,postId} = this.props;
        return(
            <div>
                <div className="App">
                    <div className="App-header">
                        <h2>  Edit Comment</h2>
                    </div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        
                       
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
  
  if(!values.body){
      errors.body = "Enter some content please"
  }
return errors;
  
}
function mapDispatchToProps(dispatch){
    return {
        editComment : (values, id)=>{ dispatch(editCommentAsync(values,id)) ;}
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditComment = reduxForm({
    validate,
    form: 'editForm' // a unique identifier for this form
  })(EditComment)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  EditComment = connect(null,
    mapDispatchToProps // bind post    loading action creator
  )(EditComment)
  
  export default EditComment;



