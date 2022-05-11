import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getApiData,  getApiError, successData, errorData } 
from './action';
import { switchMap, catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from '../app.services';

@Injectable()
export class StoreEffects { 
  constructor( private action$: Actions, private appService: AppService) {}
  //Success
    getDataEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(getApiData),
      mergeMap((action) => {
        return this.appService.getData(action.id).pipe(
          map(res => successData({ data: res })),
        )
      }
      )
    )
  );
  //Error
  getErrorEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(getApiError),
        mergeMap((action) =>
          this.appService.getError().pipe(
          catchError(error => of(errorData({ error }))), 
          )
        )
      )
    );

  


  
}