import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {Link ,Redirect   } from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions/posts'
import '../App.css'


class CreatePost extends Component {

  renderSelect(field){
    const {meta : {touched , error}} = field;

    return(
        <div className="">
            <label>{field.label}</label>
            <select className="form-control form-control"  {...field.input}>
                <option >please select a category</option>
                <option value="udacity">Udacity</option>
                <option value="redux">Redux</option>
                <option value="react">React</option>
            </select>  
            <div className="text-help invalid-feedback">
                { touched ? error : ''}
            </div>
        </div>

    )

  }

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
  
   this.props.createPost(values, this.props.actionType,()=>  this.props.redirectHome ? window.location.replace("/") : '' )
      
   // this.props.History.push('/')

}
closeModal(){
    this.props.shutModal()
}
render(){
  
          const {handleSubmit} = this.props;
  
          return(
            <div>
            
              <div className="App">
                <div className="App-header">
                
                  <h2>  Create new post</h2>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                      label="Title"
                      name="title"
                      component={this.renderField}
                  />
                  
                  <Field name="category" label="Category" component={this.renderSelect}>
                    

               
                </Field>
                  <Field
                      label="Post Content"
                      name="body"
                      component={this.renderField}
  
                  />
                  <Field
                      label="Author"
                      name="author"
                      component={this.renderField}
  
                  />
                 
                  <button type="submit" className="btn">Submit</button>
                  <button type="submit" onClick={()=> this.closeModal()} className="btn ml-1">Cancel</button>  
                       

                 
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
  if(!values.category){
      errors.category = "Enter a Category"

  }
  if(!values.body){
      errors.body = "Enter some content please"

  }
  if(!values.author){
    errors.author = "Enter some content please"

}


return errors;
  
}


export default reduxForm({
  validate,
  form:'PostsNewForm'
})(
 connect(null,null)(CreatePost)
);

