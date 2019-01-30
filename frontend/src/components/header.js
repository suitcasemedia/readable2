import React, { Component } from 'react';
import Modal from 'react-modal';
import Loading from 'react-loading';
import { withRouter, Link, } from 'react-router-dom';

import { connect } from 'react-redux';

class Header extends Component {
  next = () => {
    const {
      history,
      nextPostId,
      getNextId,
      numberOfPostsRead,
      fetchPost,
      currentId,
      moveToRankings,
    } = this.props;
    if (numberOfPostsRead === 5) {
      history.push(`/rank-the-articles`);
      moveToRankings();
    } else {
      getNextId();
    }
  };
  reset = () => {
    
    
      this.props.reset();
      this.props.history && this.props.history.push(`/${this.props.currentId}`);
  
    
    return null;
  };
  componentDidMount() {
    //  const { history } = this.props;
    // history.push(`/${this.props.currentId}`);
  }
  render() {
    const { numberOfPostsRead } = this.props;

    return (
      <div>
        <nav className="navbar navbar-toggleable-md d-block pt-1 clearfix text-light bg-warning mb-4">
          <ul className="nav float-left">
            <li>
              {this.props.currentId && (<a href="" onCLick={ ()=>this.reset()}>Start again </a>)} 
              {!this.props.currentId && (<a href="/">Start again </a>)} 
             
               
            </li>
          </ul>
          {numberOfPostsRead === 5 && !this.props.timeToRank && (
            <ul className="nav float-right ">
              <li>
                <button
                  className="pb-3"
                  onClick={() => this.next()}
                  className="btn btn-outline float-right"
                  href="#"
                >
                  Rank the articles
                </button>
              </li>
            </ul>
          )}
          {numberOfPostsRead < 5 && (
            <ul className="nav float-right ">
              <li>
                <button
                  className="pb-3"
                  onClick={() => this.next()}
                  className="btn btn-outline float-right"
                  href="#"
                >
                  Next article
                </button>
              </li>
            </ul>
          )}

          {numberOfPostsRead !== 5 &&  numberOfPostsRead  < 6 &&(
            <h5 className="text-center pt-3">
              You have read {numberOfPostsRead} of 5 articles{' '}
            </h5>
          )}

          {numberOfPostsRead > 4  && (
            <h4 className="text-center pt-3">
              {' '}
              Now please rank the articles 5 you have read
            </h4>
            
          )}




        </nav>
      </div>
    );
  }
}
export default Header;