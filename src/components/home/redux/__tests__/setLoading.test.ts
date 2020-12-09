import { setIsLoading } from '../actions';
import setLoading from '../setLoading';

import HOME_ACTION_TYPES from '../constants';
import initialState from '../initialState';

describe('设置Loading状态', () => {
  it('设置action为true', () => {
    expect(setIsLoading(true)).toEqual({
      type: HOME_ACTION_TYPES.IS_LOADING,
      isLoading: true,
    });
  });

  it('测试reduce是否正确', () => {
    expect(
      setLoading(initialState, {
        type: HOME_ACTION_TYPES.IS_LOADING,
        isLoading: false,
      }),
    ).toEqual({ ...initialState, isLoading: false });
  });

  it('测试reduce传入默认值', () => {
    expect(setLoading(undefined, {})).toEqual(initialState);
  });
});
