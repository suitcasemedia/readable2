import React from 'react';
import { shallow } from 'enzyme';
// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from '../components/Post';
import Header from '../components/Header';
import PostDefaultPropsInit from './default-props/Post.defaultProps';
import { Img ,ImageLoad} from 'react-image-loading';
//import localStorage from './../../setUpTests';

configure({ adapter: new Adapter() });

describe('An article is loaded successfully', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...PostDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };

    wrapper = shallow(<Post  {...defaultProps} />);
   
  });
 
  it('it has container class', () => {
    expect(wrapper.find('.container').hasClass('container')).toBe(true);
  });
 
  it('it renders a title', () => {
    expect(wrapper.find('h2').hasClass('text-center')).toBe(true);
  });
  it('it renders  the correct text in the  title', () => {
    expect(wrapper.find('h2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(true);
  });
  it('it renders a sub title', () => {
    expect(wrapper.find('h4').hasClass('text-center')).toBe(true);
  });

  it('it renders  the correct text in the sub title', () => {
    expect(wrapper.find('h2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(true);
  });

  it('it renders a sub title', () => {
    expect(wrapper.find('h4').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(true);
  });

  
  it('it rendersat least one', () => {
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('renders the image correctly', ()=> {
    expect(wrapper.find('.image').hasClass('image')
    ).toBe(true);
  })
});



describe('It has loding state rndered correctly when waiting for api response', () => {

  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...PostDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },
      fetching: true,
    };

    wrapper = shallow(<Post  {...defaultProps} />);
   
  });
 
  it('it renders  the loading message', () => {
    expect(wrapper.find('h2').contains('loading...'))
  });

  it('it renders a title', () => {
    expect(wrapper.find('h2').hasClass('text-center')).toBe(false);
  });
  it('it renders a sub title', () => {
    expect(wrapper.find('h4').exists()).toBe(false);
  });
  
  it('it rendersat least one', () => {
    expect(wrapper.find('p').exists()).toBe(false);
  });
});


describe('It renders errors from the server correctly', () => {

  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...PostDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },
      error: "here is a lovely informative error message from the server",
    };
    

    wrapper = shallow(<Post  {...defaultProps} />);
   
  });

  it('it renders the error correctly', () => {
    expect(wrapper.find('div h2').contains('here is a lovely informative error message from the server'))
  });

  it('it renders a title', () => {
    expect(wrapper.find('h2').hasClass('text-center')).toBe(false);
  });
  it('it renders a sub title', () => {
    expect(wrapper.find('h4').exists()).toBe(false);
  });

  it('it rendersat least one', () => {
    expect(wrapper.find('p').exists()).toBe(false);
  });



});

