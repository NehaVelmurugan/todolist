import { createReducer, on } from "@ngrx/store";
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
      const addedItem = {id: state.listItem.length, task: action.item, completed: false  }
      return {
        ...state, // state is all ways an object, It immutable
        listItem: [...state.listItem, ...[addedItem] ],
      };
    }),
    on(TodoItemAction.deleteTodoList, (state, action) => {
      return {
        ...state,
        listItem: removeItemList(state.listItem, action.id),
      };
    }),
    // on(TodoItemAction.editTodoList, (state,action)=>{
    //   return {
    //     ...state,
    //     listItem : editItemList(state.listItem, action.id)
    //   }
    // })
  );
   



  function removeItemList(list: TodoItem[], id: number) {
    let conformation = confirm('Are you sure you want to delete');
    //  if (conformation == true) {
       return list.filter((item) => {
          item.id !== id;
        //  console.log(item.id);
      });
    // }else{list};
  }

  function editItemList(list:TodoItem[],id:number){
    
    return list.filter((item)=>{
      if(item.id === id){
        item =item;
      }
    })
  }



