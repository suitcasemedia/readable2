// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts ,fetchPostsSuccess,fetchPostsFailure, updateRankFrontEnd, rankPostsBackend} from '../actions/posts';
import RankPosts from './../components/RankPosts';



const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload.data));
          });
    },
    updateRankFrontEnd:(source,destination)=> {
      dispatch(updateRankFrontEnd(source,destination))
    },
    rankPostsBackend:()=>{
      dispatch(rankPostsBackend())
    }
  }
}
function mapStateToProps(state, ownProps) {
    const {posts, post} = state;
    const {numberOfPostsRead, timeToRank} = post;
    const {fetching, error} = posts;
    return {
      posts,
      numberOfPostsRead,
      timeToRank,
      error,
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankPosts);
