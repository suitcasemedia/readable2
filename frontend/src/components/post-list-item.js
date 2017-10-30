import React from 'react';
import renderDate from '../utils/render-date';
import {connect} from 'react-redux' ;
import {
    postVote
   
    } from '../actions';

function PostListItem(props){

    const {id} = props;

    return(

        <div className=" col-xs-12 col-sm-6 col-md-4 mb-4">
        <div className="card p-3 m-t-1">
            <div className="card-body">
                <p className="card-subtitle mb-2 text-muted">{renderDate(new Date(props.timestamp))}
                <a href="#" className="card-link"><i className="fa fa-times fa-2x fa--purple float-right" aria-hidden="true"></i></a>
                    <a href="#" className="card-link"><i className="fa fa-pencil-square-o fa-2x fa--purple float-right mr-2 " aria-hidden="true"></i></a>
                   
                </p>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">By {props.author}</p>
                <p className="card-text">{ props.body ? props.body.substring(0,26) : ''}...</p>
                <p className="card-text"> 
                    <i className="fa fa-comments  fa-2x  mr-2" aria-hidden="true"></i>
                    No of comments : {props.commentCount}
                </p>
                <p className="card-text">
                    <a href="#"  className="card-link">
                        <i onClick={(id,option)=>{
                            const newScore = props.voteScore + 1;
                            option = "upVote"
                            props.newVote(props.id,"upVote" , newScore)
        
                        }}
                        className="fa fa-hand-o-up fa-2x " aria-hidden="true"> </i>
                    </a>
                    <a href="#"   className="card-link ml-1">
                        <i onClick={(id,option)=>{
                            const newScore = props.voteScore - 1
                            props.newVote(props.id,"downVote", newScore)
                            }}  className="fa fa-hand-o-down fa-2x ml-1 mr-2  " aria-hidden="true"> </i>
                    </a>
                    No of votes: {props.voteScore}
                </p>
            
            </div>
        </div>
    </div>    



    )
}
function mapDispatchToProps(dispatch){
    return{
        newVote : (id,option , newScore)=> dispatch(postVote(id,option,newScore))
    }

}
function mapStateToProps(){

}

export default connect(null,mapDispatchToProps)(PostListItem);