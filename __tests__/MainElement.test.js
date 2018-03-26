import MainElement from '../src/js/components/MainElement';
import React from 'react';
import { mount } from 'enzyme';

//test out h1
//Check to see if input exists 
//Renderlist should be empty
describe('<MainElement />', () => {
  it('renders an h1 element', () => {
    const wrapper = mount(<MainElement />);
    const p = wrapper.find('h1');
    expect(p.text()).toBe("See whats happening right now")
  });

  it('renders an input element', ()=>{
    const wrapper = mount(<MainElement />);
    const p = wrapper.find('input');
    expect(p).to.have.length(1);
  })

  //Test the styles of the input element

  //Test the onChange event of the input element using sinon.spy()

  //Render the ListElement using props

  //Test out the styles of the ListElement

  //Test out the components with test data in src/data/tweetData.json

})
