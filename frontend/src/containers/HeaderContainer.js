
// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../components/Header';
import {
  getNextId,
  reset,
  fetchPost,
  moveToRankings,
} from '../actions/posts';
function mapDispatchToProps(dispatch) {
  return  bindActionCreators ({fetchPost, getNextId, reset, moveToRankings}, dispatch);
}

function mapStateToProps(state) {
  const { post } = state;
  const { currentId, numberOfPostsRead, timeToRank } = post;
  return {
    currentId,
    numberOfPostsRead,
    timeToRank,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
