import React from 'react' ;



const Header = (props) => {

    return(



      <nav className="navbar navbar-toggleable-md d-block pt-1 clearfix text-light bg-warning mb-4">
        <ul className="nav float-right ">                                                          
   
          <li>
         
          <button className="btn btn-outline float-right" href="#">Create New Post <i className="fa fa-plus" aria-hidden="true"></i></button>
          </li>
         
        </ul>
          
       
       

      </nav>
    )
}

export default Header ;