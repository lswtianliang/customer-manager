import { PaginationType } from '../types';
import HOME_ACTION_TYPES from './constants';
import initialState from './initialState';
export function setPagination(pagination: PaginationType) {
  return {
    type: HOME_ACTION_TYPES.SET_PAGINATION,
    pagination,
  };
}

// reducer 根据action类型及数据返回新的state
export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.SET_PAGINATION:
      return { ...state, pagination: action.pagination };

    default:
      return state;
  }
};
