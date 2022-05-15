import { createAction,props } from "@ngrx/store";

export const addTodoList = createAction("Add todo item in the list", props<{item: string}>());
export const editTodoList = createAction(" Edit todo item in the list", props<{item:string, id:number}>())
export const deleteTodoList = createAction("Remove the todo item from list", props<{id:number}>()); 