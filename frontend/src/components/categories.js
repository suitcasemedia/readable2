import React from 'react';
import Filters from './filters' ;
import {Link} from 'react-router-dom' ;
import CategoryItem from './category-item';


const Categories = (props)=>{
    return(
        <div>
            <Filters/>
            <h4>Select categories:</h4>      
            <CategoryItem path={"/cat/react"} currentCat={props.currentCategory} catName={"react"}/>
            <CategoryItem path={"/cat/redux"} currentCat={props.currentCategory} catName={"redux"}/>
            <CategoryItem path={"/cat/udacity"} currentCat={props.currentCategory} catName={"udacity"}/>
            <Link className="button btn button--purple" to="/">Reset</Link>
        </div>  
       
    )
}

    
  
    

export default Categories ;