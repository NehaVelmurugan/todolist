
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
// import { TodoItem } from "../interfaces/interface";

@Injectable()
export class AppService{
    addTodoList(id:number, task:string, completed:boolean) : Observable<any>{
        return of({id,task,completed});
    }
    removeTodoList(id:number, pop:boolean):Observable<any>{
        return of({id,pop})
    }
    getError(pop:boolean):Observable<any>{
        return throwError("Deleting Todo List is Error");
    }
}