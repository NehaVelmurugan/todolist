import { createReducer, on } from "@ngrx/store"
import { changeChannelName, customIncrement, decrementValue, incrementValue, resetValue } from "./ngrx-counter.action"
import { initialState } from "src/app/Reducer/counter.reducer"
import { state } from "@angular/animations"



const _counterReducer = createReducer(
    initialState,
     on(incrementValue, (state)=>state+1 ),
    // on(incrementValue,(state)=>{return {
    //  state:{   
    //      ...state,
    //     counter:state.counter+1
    // } }}),
    on(decrementValue, (state)=>state-1 ),
    on(resetValue, (state)=>  0 ),
    on(customIncrement,(state,action)=>action.count),
    on(changeChannelName,(state)=>state)
)
   


export function counterReducer(state:any,action: any){
    return  _counterReducer(state, action)
}

function channelName(channelName: any): import("@ngrx/store").ReducerTypes<number, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
    throw new Error("Function not implemented.")
}
