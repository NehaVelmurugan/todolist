import { createReducer, on } from '@ngrx/store';
import { getApiData,  getApiError, successData, errorData, countData } 
from './action';

export interface DataModel {
  error: any;
  counter: number;
  responseData: { id: null, data: null };
} 

const initialState: DataModel = {
    error: null,
    counter: 0,
    responseData: {
        id: null,
        data: null
    }
}

export const storeReducer = createReducer(initialState,
  on(successData, (state, action) => ({ responseData: action.data, error: null, counter:state.counter })),

  on(countData, (state, action) =>{ 
    state.counter++;
    return ({ responseData: state.responseData, error: state.error, counter:state.counter})}),

//   on(errorData, (state, action) =>({ responseData: null, error: action.error, counter:state.counter }))

);
