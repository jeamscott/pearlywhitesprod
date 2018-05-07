// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ENV } from '../core/env.config';
import { AuthenticationService, TokenPayload } from './authentication.service';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,private auth: AuthenticationService) { }
    

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  // GET list of public, future events
  getEvents$(): Observable<any> {
       return this.http
      .get(`${ENV.BASE_API}users`)
       .pipe(
         catchError((error) => this._handleError(error))
       );
  }

  // GET all events - private and public (admin only)
  getAdminEvents$(): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}events/admin`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET an event by ID (login required)
  getEventById$(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}event/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET RSVPs by event ID (login required)
  getRsvpsByEventId$(eventId: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}event/${eventId}/rsvps`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';

    return Observable.throw(errorMsg);
  }

}