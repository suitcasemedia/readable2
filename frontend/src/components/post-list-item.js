import React from 'react';


function PostListItem(props){



    return(

        <div className=" col-xs-12 col-sm-6 col-md-4 mb-4">
        <div className="card p-3 m-t-1">
            <div className="card-body">
                <p className="card-subtitle mb-2 text-muted">Date 
                <a href="#" className="card-link"><i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i></a>
                    <a href="#" className="card-link"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
                   
                </p>
                <h4 className="card-title">Post title</h4>
                <p className="card-text">By Post Author</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="card-text"> 
                    <i className="fa fa-comments  fa-2x  mr-2" aria-hidden="true"></i>
                    No of comments : 0
                </p>
                <p className="card-text">
                    <a href="#" className="card-link">
                        <i className="fa fa-hand-o-up fa-2x " aria-hidden="true"> </i>
                    </a>
                    <a href="#" className="card-link ml-1">
                        <i className="fa fa-hand-o-down fa-2x ml-1 mr-2  " aria-hidden="true"> </i>
                    </a>
                    No of votes: 0
                </p>
            
            </div>
        </div>
    </div>    



    )
}


export default PostListItem;