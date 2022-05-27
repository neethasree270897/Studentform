import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

private apiURL = " ";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiURL+'/AllStudents')
    .pipe( 
      catchError(this.errorHandler)
      )
  }
   
  create(student): Observable<Student[]> {
    return this.httpClient.put<Student[]>(this.apiURL + '/StudentInsert', JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   

   
 
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
