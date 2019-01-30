import React from 'react';
import { shallow } from 'enzyme';
// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RankPosts from '../components/RankPosts';
import Header from '../components/Header';
import RankPostsPropsInit from './default-props/RankPost.defaultProps';
import Column from '../components/Column';

configure({ adapter: new Adapter() });

describe('All the articles are loaded and ready for ranking', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...RankPostsPropsInit,
      fetchPosts: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };
    wrapper = shallow(<RankPosts {...defaultProps} />);
    
  });

  it('it has container class', () => {
    expect(wrapper.find('.container').hasClass('container')).toBe(true);
  });
  it('it renders the header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });
 
});

describe('Shows the loading state correctly when waiting for a response from the server', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...RankPostsPropsInit,
      fetchPosts: jest.fn(),
      history: {
        push: jest.fn(),
      },
      fetching: true,
    };

    wrapper = shallow(<RankPosts {...defaultProps} />);
   
  });
  it('it renders  the loading message', () => {
    expect(wrapper.find('h2').contains('loading...'));
  });

  it('it has container class', () => {
    expect(wrapper.find('.container').hasClass('container')).toBe(true);
  });
  it('it renders the header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });

  it('it doesnt render the draf and drop column', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className="container">
          <Column />
        </div>
      )
    ).toBe(false);
  });
});

describe('It renders the error state correctly', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...RankPostsPropsInit,
      fetchPosts: jest.fn(),
      history: {
        push: jest.fn(),
      },
      error: 'Here is a lovely error message',
    };

    wrapper = shallow(<RankPosts {...defaultProps} />);
   
  });

  it('it renders the error correctly', () => {
    expect(wrapper.find('div h2').contains('Here is a lovely error message'));
  });

  it('it has container class', () => {
    expect(wrapper.find('.container').hasClass('container')).toBe(true);
  });
  it('it renders the header', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });
  it('it  does not render the draf and drop column', () => {
    expect(
      wrapper.containsMatchingElement(
        <div>
          <Column />
        </div>
      )
    ).toBe(false);
  });
});
