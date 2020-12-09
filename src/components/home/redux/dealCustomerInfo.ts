import { HomeState } from '../types';
import { Dispatch } from 'redux';
import { Customer } from '../types';
import initialState from './initialState';
import { addCustomer, deleteCustomer, editCustomer, getCustomer } from '../services';
import { setIsLoading } from './actions';

export function addCustomers(customer: Customer, callback?: any) {
  return function (dispatch: Dispatch) {
    dispatch(setIsLoading(true));
    const payload = { body: customer };
    addCustomer(payload)
      .then((res) => {
        callback(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
}

export function deleteCustomers(id: string, callback?: any) {
  return function (dispatch: Dispatch) {
    dispatch(setIsLoading(true));
    const payload = { body: { id } };
    deleteCustomer(payload)
      .then((res) => {
        callback(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
}

export function getCustomers(id: string, callback?: any) {
  return function (dispatch: Dispatch) {
    dispatch(setIsLoading(true));
    const payload = { path: { id } };
    getCustomer(payload)
      .then((res) => {
        callback(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
}

export function editCustomers(customer: Customer, callback?: any) {
  return function (dispatch: Dispatch) {
    dispatch(setIsLoading(true));
    const payload = { body: customer };
    editCustomer(payload)
      .then((res) => {
        callback(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
}

export default (state: HomeState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
