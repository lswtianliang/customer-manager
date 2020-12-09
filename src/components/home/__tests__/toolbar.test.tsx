import React from 'react';
import { shallow, mount } from 'enzyme';
import { Toolbar } from '../Toolbar';
import { Row, Col, Button, Input } from '@seeyon/syf-components';

const searchKey = 'test search key';

const setSearchKey = jest.fn();
const fetchCustomers = jest.fn();
const openCreateModal = jest.fn();
describe('test header', () => {
  it('test the header text', () => {
    const wrapper = mount(
      <Toolbar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        fetchCustomers={fetchCustomers}
        openCreateModal={openCreateModal}></Toolbar>,
    );
    expect(wrapper.find('input').get(0).props.placeholder).toBe('客户名称');
  });

  it('has two buttons', () => {
    const wrapper = shallow(
      <Toolbar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        fetchCustomers={fetchCustomers}
        openCreateModal={openCreateModal}></Toolbar>,
    );
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button).first().text()).toBe('搜索');
    expect(wrapper.find(Button).get(1).props.children).toBe('新增');
  });

  it('test events', () => {
    const wrapper = shallow(
      <Toolbar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        fetchCustomers={fetchCustomers}
        openCreateModal={openCreateModal}></Toolbar>,
    );
    wrapper.find(Button).first().simulate('click');

    expect(fetchCustomers).toBeCalled();
  });

  it('test events', () => {
    const wrapper = shallow(
      <Toolbar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        fetchCustomers={fetchCustomers}
        openCreateModal={openCreateModal}></Toolbar>,
    );
    wrapper.find(Button).last().simulate('click');

    expect(openCreateModal).toBeCalled();
  });
});
