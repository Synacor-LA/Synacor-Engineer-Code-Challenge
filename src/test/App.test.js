import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

describe('initial test', () => {
  it('runs a test', () => {
    expect(true).toEqual(true);
  });
});

describe('App tests', () => {
  it('renders a div', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
