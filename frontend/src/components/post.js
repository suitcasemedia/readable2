// middleware/api.js
// @flow
/* eslint-disable camelcase */
import React, { Component } from 'react';
import Header from './../containers/HeaderContainer';
import { connect } from 'react-redux';

import { Img } from 'react-image-loading';
import RankPosts from './../containers/RankPostsContainer';

type Props = {
  currentId: number,
  fetchPost: (currentId: number) => void,
  history: any,
  post: Article,
  timeToRank: boolean,
  fetching: boolean,
  error: string,
};

type Article = {
  id: number,
  title: string,
  body: Element[],
 

};
type Element = {
  type: string,
  model: any,
};
type State = {};
class Post extends React.Component<Props, State> {
  componentWillMount() {
    const { currentId: id, fetchPost } = this.props;

    id && fetchPost(id);
    this.props.history.push(`/${this.props.currentId}`);
  }
  componentDidUpdate(prevProps: Props) {
    // Typical usage (don't forget to compare props):

    if (this.props.currentId !== prevProps.currentId) {
      this.props.history.push(`/${this.props.currentId}`);
      this.props.fetchPost(this.props.currentId);
    }
  }

  render() {
   
    const { post, fetching, error } = this.props;
    if (this.props.timeToRank) {
      return <RankPosts />;
    }
    if (fetching) {
      return (
        <div>
          <Header {...this.props} />
          <h2>Loading...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <Header {...this.props} />
          <h2>{error}</h2>
        </div>
      );
    }
    if (post) {
      return (
        <div>
          <Header {...this.props} />
          <h2 className="text-center pt-3">{post.title ? post.title : ''}</h2>
          <div className="container">
            {post &&
              post.body &&
              post.body.map(element => {
                if (element && element.type === 'heading')
                  return <h4 className="text-center">{element.model.text}</h4>;
                if (element && element.type === 'paragraph')
                  return <p> {element.model.text}</p>;
                if (element && element.type === 'image')
                  return (
                    <div
                      style={{
                        margin: '50px',
                        minHeight: 150,
                        position: 'relative',
                      }}
                      className="image"
                    >
                      <Img
                        src={element.model.url}
                        alt={element.model.altText}
                        width={'100%'}
                        height={element.model.height}
                      />
                    </div>
                  );
                if (element && element.type === 'list')
                  return (
                    <ul>
                      {element.model.items.map(item => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  );
              })}
          </div>
        </div>
      );
    }

    return null;
  }
}
export default Post;
