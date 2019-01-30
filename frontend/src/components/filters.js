import React from 'react';
import  {setSortPostBy} from '../actions/posts';
import {connect} from 'react-redux';

const Filters = (props)=>{
    return(
            <div className="clearfix mb-4" >
                <h4 className="mb-3">Order By:</h4>
                <select  className="custom-select " defaultValue={ "filter by"}   onChange={(event) => props.setFilter(event.target.value)} >  
                   
                    <option  value="most-votes">Most votes</option>
                    <option  value="least-votes">Least votes</option>
                    <option  value="newest">Newest</option>
                    <option  value="oldest">Oldest</option>
                </select>
            </div>  
       
    )
}

function mapDispatchToProps(dispatch){
    return{ setFilter : (value) => dispatch(setSortPostBy(value))}
}


export default connect(null,mapDispatchToProps) (Filters);