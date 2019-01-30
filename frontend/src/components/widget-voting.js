import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postVote} from '../actions/posts';

function WidgetVoting(props){
       
    WidgetVoting.PropTypes = {     
        newVote : PropTypes.func.isRequired, // can get this from dispatchToProps
        post: PropTypes.object.isRequired, // passed from parent 
       
    }
    
    const {post,newVote,actionType} =  props ;
    const {id, voteScore} = post  ;
    const stringId = id.toString();
   
    return (
        <p className="card-text">
            <a href="#"  className="card-link">
                <i onClick={()=>{
                    const newScore = voteScore + 1;
                    newVote(stringId,"upVote" , newScore,actionType)
                    }}
                    className="fa fa-hand-o-up fa-2x " aria-hidden="true">
                 </i>
            </a>
            <a href="#"   className="card-link ml-1">
                <i onClick={()=>{
                        const newScore = voteScore - 1
                        newVote(stringId,"downVote", newScore,actionType)
                    }}  
                    className="fa fa-hand-o-down fa-2x ml-1 mr-2  " aria-hidden="true"> </i>
            </a>
            No of votes: {voteScore}
        </p>
    )
}

function mapDispatchToProps(dispatch){
    return{
        newVote : (id, option, newScore,actionType)=> dispatch(postVote(id, option, newScore,actionType))
    }
}
function mapStateToProps(state,ownProps){
    return{
    }
}

export default connect(null,mapDispatchToProps) (WidgetVoting);