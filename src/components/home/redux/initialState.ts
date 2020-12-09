import { HomeState } from '../types';

const initialState: HomeState = {
  list: [],
  isLoading: false,
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
  searchKey: '',
};

export default initialState;
