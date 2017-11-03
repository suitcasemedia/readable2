

import React  from 'react'
import PropTypes from 'prop-types'


function WidgetEditDelete(props){
       
    WidgeteditDelete.PropTypes = {
      
        dPost : PropTypes.func.isRequired,
        openEditPostModal : PropTypes.func.isRequired,
        stringId : PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,

    }
 
    const {stringId,id,dPost} =  props   
   
    return (
        <div>
            <a href="#" onClick={(stringId)=>{ dPost(id) ;}} className="card-link d-block"><i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i></a>
            <a href="#" onClick={ this.openEditPostModal }className="card-link d-block"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
        </div>

    )

}

export default WidgetEditDelete;


