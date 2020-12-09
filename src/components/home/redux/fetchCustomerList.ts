import { Dispatch } from 'redux';
import HOME_ACTION_TYPES from './constants';
import { getCustomers } from '../services';
import { combineCondition } from '../services/combine';
import initialState from './initialState';
import { setIsLoading, setPagination } from './actions';

export function fetchCustomers() {
  return function (dispatch: Dispatch, getState: any) {
    dispatch(setIsLoading(true));
    const { searchKey, pagination } = getState().home;
    const condition = combineCondition(searchKey, pagination);
    getCustomers(condition)
      .then((res) => {
        let list = [];
        let total = 0;
        if (res.data) {
          if (res.data.content) {
            list = res.data.content;
          }
          if (res.data.pageInfo) {
            total = res.data.pageInfo.total;
          }
        }
        dispatch({
          type: HOME_ACTION_TYPES.FETCH_CUSTOMER,
          list: list,
        });

        dispatch(setPagination({ ...pagination, total }));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// reducer 根据action类型及数据返回新的state
export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.FETCH_CUSTOMER:
      return { ...state, list: action.list };

    default:
      return state;
  }
};
