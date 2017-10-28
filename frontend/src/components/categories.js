import React from 'react';
import Filters from './filters' ;

const Categories = (props)=>{


    return(
        <div>
             <Filters/>
            <h4>Select categories:</h4>      
            <button type="button"  aria-pressed="true" className="btn btn-secondary mr-2 my-2 active">React</button>
            <button type="button"  className="btn btn-secondary mr-2 my-2">Udacity</button>
            <button type="button"   className="btn btn-secondary mr-2 my-2">Redux</button>
        </div>  
       
    )
}

export default Categories;