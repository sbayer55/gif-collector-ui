import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Promise<void> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get(`http://localhost:8080/auth`, {headers})
      .toPromise()
      .then(response => {
        this.headers = headers;
      });
  }

  public getHeaders(): HttpHeaders {
    return this.headers;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
