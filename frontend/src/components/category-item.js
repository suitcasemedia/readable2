import React from 'react';
import {Link} from 'react-router-dom';
import {setActiveCategory} from '../actions'
import {connect} from 'react-redux';


const CategoryItem  = (props) =>{
    const { path, currentCat , catName, setCat} = props;
    const  cssClass = getClassName(catName, currentCat)
  
    return(
        
        <Link to={path} type="button" onClick={()=> setCat(catName)} className={`btn btn-secondary mr-2 my-2 ${cssClass}`}>{catName}</Link>
       
    )
}

const getClassName = (catName, currentCat)=>{  
    if(catName === currentCat){
        return "btn--purple";
    }
    else return '';
}
function mapDispatchToProps(dispatch){
     
    return{
        setCat: (cat) => dispatch(setActiveCategory(cat)),
    }
};


function mapStateToProps(){
}

export default connect(null,mapDispatchToProps)(CategoryItem);