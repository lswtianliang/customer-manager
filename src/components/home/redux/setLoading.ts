import HOME_ACTION_TYPES from './constants';
import initialState from './initialState';
export function setIsLoading(isLoading: boolean) {
  return {
    type: HOME_ACTION_TYPES.IS_LOADING,
    isLoading,
  };
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};
