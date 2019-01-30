import React from 'react';
import { shallow } from 'enzyme';
// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from '../components/Post';
import Header from '../components/Header';
import HeaderDefaultPropsInit from './default-props/Header.defaultProps';
//import localStorage from './../../setUpTests';

configure({ adapter: new Adapter() });

describe('The header before all of the articles have been read', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...HeaderDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },

    };
    wrapper = shallow(<Header  {...defaultProps} />);
  });
 
  it('it counts the number of read articles correctly', () => {
    expect(wrapper.find('h5').contains(1)).toBe(true);
  });
  
  it('it has the navbar', () => {
    expect(wrapper.find('nav').hasClass('navbar')).toBe(true);
  });

 
  it('it renders a title', () => {
    expect(wrapper.find('h5').hasClass('text-center')).toBe(true);
  });
 

  it('it renders a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('the button has the correct text', () => {
    expect(wrapper.find('button').contains('Next article')).toBe(true);
  });

});



describe('The header on the fifth article', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...HeaderDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },
      numberOfPostsRead: 5,
    };
    
    wrapper = shallow(<Header  {...defaultProps} />);
  //  console.log(wrapper.debug())
   
  });
 
  it('it counts the number of read articles correctly', () => {
    expect(wrapper.find('h4').contains('Now please rank the articles 5 you have read')).toBe(true);
  });
  
  it('it has the navbar', () => {
    expect(wrapper.find('nav').hasClass('navbar')).toBe(true);
  });

 
  it('it renders a title', () => {
    expect(wrapper.find('h4').hasClass('text-center')).toBe(true);
  });
 

  it('it renders a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('the button has the correct text', () => {
    expect(wrapper.find('button').contains('Rank the articles')).toBe(true);
  });

});



describe('Render correctly when the articles are being ranked', () => {
  let wrapper;
  beforeEach(() => {
    const defaultProps = {
      ...HeaderDefaultPropsInit,
      fetchPost: jest.fn(),
      history: {
        push: jest.fn(),
      },
      numberOfPostsRead: 5,
      timeToRank: true,
    };
    
    wrapper = shallow(<Header  {...defaultProps} />);
   // console.log(wrapper.debug())
   
  });
 
  it('it counts the number of read articles correctly', () => {
    expect(wrapper.find('h4').contains('Now please rank the articles 5 you have read')).toBe(true);
  });
  
  it('it has the navbar', () => {
    expect(wrapper.find('nav').hasClass('navbar')).toBe(true);
  });

 
  it('it renders a title', () => {
    expect(wrapper.find('h4').hasClass('text-center')).toBe(true);
  });
 

  it('it renders a button', () => {
    expect(wrapper.find('button').exists()).toBe(false);
  });
  

});



