import fetchCustomers from './fetchCustomerList';
import setSearchKey from './setSearchKey';
import setPagination from './setPagination';
import setLoading from './setLoading';
import initialState from './initialState';

const reducers = [fetchCustomers, setSearchKey, setPagination, setLoading];

export default function (state = initialState, action: any) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }

  return reducers.reduce(
    (currentState, currentReduce) => currentReduce(currentState, action),
    newState,
  );
}
