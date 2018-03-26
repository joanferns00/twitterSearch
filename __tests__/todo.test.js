import TestComponent from '../src/js/components/TestComponent';
import React from 'react';
import { mount } from 'enzyme';

const testData = { id: 1, greeting: 'Hello World', inputValue: 'Buy Milk' };

test('Todo component renders the text of the todo', () => {
const wrapper = mount(
  <TestComponent greeting={testData.greeting} />
);  
  const p = wrapper.find('.style-greeting');
  expect(p.text()).toBe('Hello World');
});
