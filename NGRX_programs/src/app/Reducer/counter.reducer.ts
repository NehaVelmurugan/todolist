import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./Action/counter.action";


export const initialState = 0;
 
export const counterReduces = createReducer(
    initialState, 
    on(increment, (state)=>state+1 ), 
    on(decrement, (state)=>state-1 ),
    on(reset, (state)=>  0 )
); 