import { setPagination } from '../actions';
import setPaginationReducer from '../setPagination';
import { PaginationType } from '../../types';
import HOME_ACTION_TYPES from '../constants';
import initialState from '../initialState';

describe('测试分页setPagination', () => {
  const pagination: PaginationType = {
    current: 1,
    pageSize: 5,
    total: 100,
  };
  it('测试action setPagination', () => {
    expect(setPagination(pagination)).toEqual({
      type: HOME_ACTION_TYPES.SET_PAGINATION,
      pagination,
    });
  });

  it('测试reduce', () => {
    expect(
      setPaginationReducer(initialState, {
        type: HOME_ACTION_TYPES.SET_PAGINATION,
        pagination,
      }),
    ).toEqual({ ...initialState, pagination });
  });

  it('测试reduce传入默认值', () => {
    expect(setPaginationReducer(undefined, {})).toEqual(initialState);
  });
});
