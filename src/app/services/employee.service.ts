import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map, catchError, retry  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';
// import { ErrorObservable } from 'rxjs/observable';
import { ENV } from '../core/env.config';



export interface Employee {
  _id: string;
  user_name: string;
  employee_status: boolean;
  }

@Injectable()
export class EmployeeService {
  public result: Employee;
  

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    return this.auth.getToken();
  }

  private request(method: 'post'|'get'|'put', type: 'employee', request?): Observable<any> {
    let base;

    
    if (method === 'post') {
      request._id = this.auth.getUserDetails()._id;
    base = this.http.post(`${ENV.BASE_API}${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    } 
      else if (method === 'put'){ //experimental
      request._id = this.auth.getUserDetails()._id;
      base = this.http.put(`${ENV.BASE_API}${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else {
      base = this.http.get(`${ENV.BASE_API}${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    return base;
  }

  public employed(): Observable<Employee> {
    return this.request('get', 'employee')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
 
  public hire(employee): Observable<Employee> { 
    return this.request('put', 'employee', employee);
    
    
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new Observable();
  };
  //employee: Employee

  //public isEmployee() {
    
  //    this.employed()
  //      .subscribe(data => this.employee = {
  //        _id: data['_id'],
  //        user_name: data['user_name'],
  //        employee_status: data['employee_status']
  //        }
  //      )
   
        
  //}

  //public employee_only() {
  //  const employed = this.isEmployee().subscribe(
  //    is_employee => is_employee
  //  )
    //console.log(employed)
    //if (employed) {
    //    employed.employee_status = true;        
    //  return true
    //} 
    //else {
    //  return false;
    //}
  //return employed

  //}
}
