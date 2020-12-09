import { setSearchKey } from '../actions';
import setSearchKeyReducer from '../setSearchKey';

import HOME_ACTION_TYPES from '../constants';
import initialState from '../initialState';

describe('设置setSearchKey状态', () => {
  const searchKey = 'test';
  it('测试searchKey', () => {
    expect(setSearchKey(searchKey)).toEqual({
      type: HOME_ACTION_TYPES.SET_SEARCH_KEY,
      searchKey,
    });
  });

  it('测试reduce是否正确', () => {
    expect(
      setSearchKeyReducer(initialState, {
        type: HOME_ACTION_TYPES.SET_SEARCH_KEY,
        searchKey,
      }),
    ).toEqual({ ...initialState, searchKey });
  });

  it('测试reduce传入默认值', () => {
    expect(setSearchKeyReducer(undefined, {})).toEqual(initialState);
  });
});
