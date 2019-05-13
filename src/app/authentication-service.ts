import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Promise<void> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    // headers = headers.append('Authorization', 'Basic ' + new Buffer(username + ':' + password).toString('base64'));
    headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Access-Control-Allow-Header', 'Access-Control-Allow-Origin');

    const body = {
      username: 'testaaar',
      password: 'testPass',
      firstName: 'test_steven',
      lastName: 'test_bayer'
    };

    console.log('Headers', headers);

    return this.http.get(`http://localhost:8080/oauth/token`, {headers})
      .toPromise()
      .then(response => {
        console.log('success!', response);
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
