import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { throwError } from "rxjs";
import { TodoItem } from "../interfaces/interface";
import * as TodoItemAction from './action'

export interface TodoListState{
    listItem:TodoItem[];
}
export const initialState:TodoListState={
    listItem: []
}

export const TodoListReducer = createReducer(
    initialState,
    on(TodoItemAction.addTodoList, (state, action: any) => {
      // const addedItem = {id: state.listItem.length, task: action.item, completed: false  }
      return {
        ...state,                                               // state is all ways an object, It immutable
        // listItem: [...state.listItem, ...[addedItem] ],
      };
    }),

    on(TodoItemAction.addTodoListSuccess,(state,action)=>{
      debugger
      return {
        ...state,
        listItem: [...state.listItem, ...[action.data]]
      }
    }),

    on(TodoItemAction.deleteTodoList, (state,) => {
      return {
        ...state,
      };
    }),
    on(TodoItemAction.deleteTodoListSuccess,(state, action)=>{
      return {
        ...state,
        listItem:removeItemList(state.listItem,action.id)
      }
    })
    // on(TodoItemAction.editTodoList, (state,action)=>{
    //   return {
    //     ...state,
    //     listItem : editItemList(state.listItem, action.id)
    //   }
    // })
  );
   



  function removeItemList(list: TodoItem[], id: number) {
    console.log(id)
    
    
      // return list.slice(id, 1); 
      /* Not Working Code */

      return list.filter((item) => {
        debugger;
          item.id !== id;
       });
  
  }
 
  function editItemList(list:TodoItem[],id:number){
    
    return list.filter((item)=>{
      if(item.id === id){
        item =item;
      }
    })
  }



