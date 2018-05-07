import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';
import { ENV } from '../core/env.config';



@Injectable()
export class SupportService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  private getToken(): string {
    return this.auth.getToken();
  }

  tabIs(currentTab: string, tab: string): boolean {
    // Check if current tab is tab name
    return currentTab === tab;
  }

  getPatientById(id: string,): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}support/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
      
  }

  getPatientProfile(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}patient/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  updatePatientProfile(id: string, profile): Observable<any> {
    return this.http
      .put(`${ENV.BASE_API}patient/${id}`, profile, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  getPatientBill(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}billing/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  updatePatientBill(id: string, bill): Observable<any> {
    return this.http
      .put(`${ENV.BASE_API}billing/${id}`, bill, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  getPatientAppointment(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}appointment/${id}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  updatePatientAppointment(id: string, appointment): Observable<any> {
    return this.http
      .put(`${ENV.BASE_API}appointment/${id}`, appointment, { headers: { Authorization: `Bearer ${this.getToken()}` }})
  }

  private request(method: 'post'|'get'|'put', type: 'support', request?): Observable<any> {
    let base;

    
    if (method === 'post') {
      request._id = this.auth.getUserDetails()._id;
    base = this.http.post(`${ENV.BASE_API}${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    } 
      else if (method === 'put'){ 
      request._id = this.auth.getUserDetails()._id;
      base = this.http.put(`${ENV.BASE_API}${type}`, request, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
      else {
      base = this.http.get(`${ENV.BASE_API}${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    return base;
  }

  public profile(): Observable<any> {
    return this.request('get', 'support');
  }

  // /* Experimental
  public update(profile): Observable<any> { 
    return this.request('put', 'support', profile);
  }
  // */
}

