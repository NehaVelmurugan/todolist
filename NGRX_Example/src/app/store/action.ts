import { createAction, props } from '@ngrx/store';

//ACTION Type constants
const API_DATA = '[Home] Get API Data';
const API_ERROR = '[Home] Get API Error';
const SUCCESS_DATA = '[Home] Get Success Data';
const ERROR_DATA = '[Home] Get Error Data';
const COUNT_DATA = '[Home] Count'

//Defining actions
export const getApiData = createAction(API_DATA, props<{ id: string }>());
export const getApiError = createAction(API_ERROR, props<{ id: string }>());
export const successData = createAction(SUCCESS_DATA, props<{ data: any }>());
export const errorData = createAction(ERROR_DATA, props<{ error: string }>());
export const countData = createAction(COUNT_DATA, props<{ count: string}>());