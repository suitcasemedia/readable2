// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, fetchPostSuccess, fetchPostFailure } from '../actions/posts';

import Post from './../components/Post';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchPost(id))
        .then((result) => {
          
          if (result.payload  && result.payload.error && result.payload !== 200) {
            dispatch(fetchPostFailure(result.payload));
          } else {
            dispatch(fetchPostSuccess(result))
          }
        })
    }
  }
}
function mapStateToProps(state, ownProps) {
  const {post:parent} = state;
  const {post} = parent

  const{numberOfPostsRead, currentId, timeToRank, fetching, error} = parent

  return {
    error,
    fetching,
    currentId,
    numberOfPostsRead,
    post,
    timeToRank,
    id: ownProps.match.params.id,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
