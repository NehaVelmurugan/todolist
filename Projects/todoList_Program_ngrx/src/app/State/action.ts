import { createAction,props } from "@ngrx/store";

export const addTodoList = createAction("Add todo item in the list", props<{item:string}>());
export const addTodoListSuccess = createAction('Success Todo Item ', props<{data:any}>())

export const deleteTodoList = createAction("Remove the todo item from list", props<{id:number, pop:boolean}>()); 

export const deleteTodoListSuccess = createAction(" Remove Todo List Success", props<{id:number, pop:boolean}>())

export const deleteTodoListError = createAction(" Remove Todo List error ", props<{error:any, pop:boolean}>())

export const editTodoList = createAction(" Edit todo item in the list", props<{item:string, id:number}>())