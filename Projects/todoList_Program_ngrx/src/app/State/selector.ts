
import { createSelector } from "@ngrx/store";
import { TodoListState } from "./reducer";

const getListItems = (state: {rootState: TodoListState})=>state.rootState;

export const todoItemSelector = createSelector(
    getListItems,
    (state:TodoListState)=>state.listItem
)