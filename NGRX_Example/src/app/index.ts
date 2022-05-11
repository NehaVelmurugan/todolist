
import { StoreEffects } from './store/effect';
import { DataModel, storeReducer } from './store/reducer';
import {  getCounterData, getCount, getErrorData } from './store/selector';
import { countData, errorData, getApiData, getApiError, successData } from './store/action';

export const fromStore = {
  getApiData,  getApiError, successData, errorData, storeReducer, StoreEffects,getCounterData,countData, getCount, getErrorData };
  