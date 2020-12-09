import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

describe('test header', () => {
  const wrapper = mount(<Header></Header>);

  it('test the header text', () => {
    expect(wrapper.find('h1').first().text()).toBe('客户管理系统');
  });
});
