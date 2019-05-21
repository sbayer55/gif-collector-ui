import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BasicAuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const currentUser = {
      authdata: window.btoa(username + ':' + password)
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return this.http.get<any>(`http://localhost:8080/api/user`);
    // return this.http.post<any>(`http://localhost:8080/api/user`, { username, password })
    //   .pipe(map(user => {
    //     // login successful if there's a user in the response
    //     if (user) {
    //       // store user details and basic auth credentials in local storage
    //       // to keep user logged in between page refreshes
    //       user.authdata = window.btoa(username + ':' + password);
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //
    //     return user;
    //   }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
