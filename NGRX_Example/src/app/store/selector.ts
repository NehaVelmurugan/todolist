import { createSelector } from '@ngrx/store';
import { DataModel } from './reducer';

const getSuccessData = (state: DataModel): any => state.responseData;
const getCountValue = (state: DataModel): any =>  state.counter;
const getError = (state: DataModel): any =>  state.error;


const getCounterData = createSelector(
  (state: {rootState: DataModel}) => state.rootState,
  getSuccessData 
);
 
const getCount = createSelector(
  (state: {rootState: DataModel}) => state.rootState, 
  getCountValue
);

const getErrorData = createSelector(
  (state: {rootState: DataModel}) => state.rootState, 
  getError
);


export {  getCounterData, getCount, getErrorData }

