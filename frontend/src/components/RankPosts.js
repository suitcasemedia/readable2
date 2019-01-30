import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Column from './Column';
import initData from './../utils/init-data';

import { connect } from 'react-redux';
//import InitialData from './../utils';

class RankPosts extends React.Component {
  state = initData;
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    this.props.updateRankFrontEnd(source.index, destination.index);
    this.props.rankPostsBackend(this.props.posts);
  };
  renderColumn = () => {
    return this.props.posts.columnOrder.map(columnId => {
      const column = this.props.posts.columns[columnId];
      const posts = column.postIds.map(postId => this.props.posts[postId]);

      return (
        <Column
          onDragEnd={this.onDragEnd}
          key={column.id}
          column={column}
          posts={this.props.posts.posts}
        />
      );
    });
  };

  componentWillMount() {
    const { fetchPosts} = this.props;
    fetchPosts();
  }
  render() {
    const {posts,fetching,error} = this.props;
    return (
      <div>
        <Header
          numberOfPostsRead={this.props.numberOfPostsRead}
          timeToRank={this.props.timeToRank}
        />

        <div className="container">
          {fetching && (
            <div><h2>Loading...</h2></div>
          )}
          {error && (
            <div><h2>{error}</h2></div>
          )}
          {posts  && !fetching && error === '' && this.renderColumn()}
          
        </div>
      </div>
    );
  }
}
export default RankPosts;
