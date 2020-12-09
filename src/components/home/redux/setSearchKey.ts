import HOME_ACTION_TYPES from './constants';
import initialState from './initialState';
export function setSearchKey(searchKey: string) {
  return {
    type: HOME_ACTION_TYPES.SET_SEARCH_KEY,
    searchKey,
  };
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.SET_SEARCH_KEY:
      return { ...state, searchKey: action.searchKey };

    default:
      return state;
  }
};
