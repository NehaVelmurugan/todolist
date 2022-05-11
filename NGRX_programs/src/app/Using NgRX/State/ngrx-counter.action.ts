import { createAction, props } from "@ngrx/store";

export const incrementValue = createAction('increment');
export const decrementValue = createAction('decrement');
export const resetValue = createAction('reset');


export const customIncrement = createAction('customIncrement', props<{count:number}>())

export const changeChannelName = createAction('channelName');