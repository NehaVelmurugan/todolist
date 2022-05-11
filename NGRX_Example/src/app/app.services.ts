import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';


@Injectable()
export class AppService {
  getData(id: string): Observable<any> {
    return from(new Promise(resolve => resolve({ id, data: 'Home data for ' + id })));
  }

  getError(): Observable<any> {
    return throwError('!!!Error!!!');
  }

}