import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from './interfaces/interface';
import { addTodoList, addTodoListSuccess, deleteTodoList,deleteTodoListError,editTodoList } from './State/action';
import { TodoListState } from './State/reducer';
import { todoItemSelector } from './State/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoList_Program_ngrx';
  listItem:any;
  todoLists$ = this.store.select(todoItemSelector);
  // conformation = confirm("Are you sure, You want to delete");
  constructor(private store:Store<{rootState: TodoListState}>){
  }

  ngOnInit(): void {
    this.todoLists$.subscribe(x =>(x))
  }

addTodoList(){
  this.store.dispatch(addTodoList({item: this.listItem} ));
};

deleteTodoItem(id: number){
  debugger;
   let conformation = confirm("Are you sure, You want to delete");
   if(conformation == true){
    this.store.dispatch(deleteTodoList({id: id, pop:conformation }));
  }
  else{
    this.store.dispatch(deleteTodoListError({error:Error, pop:conformation}))
  }
}



// editTodoItem(){
//   this.store.dispatch(editTodoList({
//     item: this.listItem,
//     id: this.listItem.id
//   }))
// }




  /* addTodoList(item:string){
    this.todoLists.push({id:this.todoLists.length, name:item});
    console.warn(this.todoLists)
  }*/

  /* deleteTodoItem(id:number){
    let conformation=confirm("Are you sure you want to delete");
    console.warn(conformation);
    if(conformation === true){
      this.todoLists = this.todoLists.filter(item =>item.id !==id);
    }else{
      this.todoLists;
    }
  }*/
  // export function removeListItem(list: TodoItem[], id: number) {
  //   let conformation = confirm('Are you sure you want to delete');
  //   console.warn(conformation);
  //   if (conformation === true) {
  //     list = list.filter((item) => item.id !== id);
  //   } else {
  //     this.todoLists;
  //   }
  // }
  // Item: removeListItem(state.todoList, action.id)
}
