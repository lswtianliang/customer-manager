import { fetchCustomers } from '../actions';
import fetchCustomerListReducer from '../fetchCustomerList';

import HOME_ACTION_TYPES from '../constants';
import initialState from '../initialState';
import { PaginationType } from '../../types';
import { combineCondition } from '../../services/combine';
import { getCustomers } from '../../services';

jest.mock('../../services/combine');
jest.mock('../../services');

const mockCondition = { condition: 'mock condition' };
const mockTotal = 999;
const mockList = [{ id: '111' }];
const mockGetCustomerListReturn = {
  data: {
    content: mockList,
    pageInfo: {
      total: mockTotal,
    },
  },
};
const dispatch = jest.fn();
const pagination: PaginationType = {
  current: 1,
  pageSize: 5,
  total: 100,
};
const searchKey = 'test search key';
const mockState = {
  home: {
    pagination,
    searchKey,
  },
};

const getState = () => mockState;
describe('测试获取客户列表', () => {
  it('获取客户列表-成功', async () => {
    // @ts-ignore 模拟combineCondition返回
    combineCondition.mockReturnValue(mockCondition);
    // @ts-ignore 模拟combineCondition返回
    getCustomers.mockResolvedValue(mockGetCustomerListReturn);

    await fetchCustomers()(dispatch, getState);
    expect(combineCondition).toBeCalledWith(searchKey, pagination);
    expect(getCustomers).toBeCalledWith(mockCondition);

    // 第一次调用dispatch设置loading状态
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: HOME_ACTION_TYPES.IS_LOADING,
      isLoading: true,
    });

    // 第二次调用dispatch设置订单列表
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: HOME_ACTION_TYPES.FETCH_CUSTOMER,
      list: mockList,
    });

    // 第三次调用dispatch设置分页
    expect(dispatch.mock.calls[2][0]).toEqual({
      type: HOME_ACTION_TYPES.SET_PAGINATION,
      pagination: { ...pagination, total: mockTotal },
    });

    // 第次调用dispatch设置loading状态
    expect(dispatch.mock.calls[3][0]).toEqual({
      type: HOME_ACTION_TYPES.IS_LOADING,
      isLoading: false,
    });
  });

  it('获取客户列表-失败', async () => {
    // @ts-ignore
    getCustomers.mockImplementation(() => {
      return Promise.reject('error');
    });
    // @ts-ignore
    await fetchCustomers()(dispatch, getState);
    // @ts-ignore
    expect(getCustomers()).rejects.toMatch('error');
  });

  it('测试reduce是否正确', () => {
    expect(
      fetchCustomerListReducer(initialState, {
        type: HOME_ACTION_TYPES.FETCH_CUSTOMER,
        list: mockList,
      }),
    ).toEqual({ ...initialState, list: mockList });
  });

  it('测试reduce传入默认值', () => {
    expect(fetchCustomerListReducer(undefined, {})).toEqual(initialState);
  });
});
