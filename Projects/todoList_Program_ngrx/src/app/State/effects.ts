import { Injectable } from "@angular/core";
import { AppService } from "./Services";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { addTodoList, addTodoListSuccess, deleteTodoList, deleteTodoListError, deleteTodoListSuccess } from "./action";
import { catchError, filter, mergeMap, of} from "rxjs";


@Injectable()
export class StoreEffect{
    constructor(private action$:Actions, private appService: AppService){}

    addTodoList$ = createEffect( 
       ()=>this.action$.pipe(
            ofType(addTodoList),
            mergeMap((action)=>{
                return this.appService.addTodoList(Math.random(),action.item, false)
                .pipe(mergeMap(async (res) =>{console.log(res); return addTodoListSuccess({data: res})}))
            })
        )
    );
    removeTodoList$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteTodoList),
            mergeMap( (action) =>
                this.appService.removeTodoList(action.id, action.pop)
                .pipe(mergeMap(async(res)=>{console.log(action.pop, res.id); return deleteTodoListSuccess({pop:action.pop, id:res.id})}))
            )
        )
    )

}

