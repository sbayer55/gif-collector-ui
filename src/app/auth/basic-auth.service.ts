import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUserDto} from '../login/create-user-dto';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BasicAuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const currentUser = {
      authdata: window.btoa(username + ':' + password)
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return this.http.get<any>(`http://localhost:8080/api/user`);
  }

  register(createUserDto: CreateUserDto): Observable<any> {
    localStorage.clear();
    return this.http.post<any>(`http://localhost:8080/signup`, createUserDto).pipe(map(response => {
      const currentUser = {
        authdata: window.btoa(createUserDto.username + ':' + createUserDto.password)
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return response;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.authdata;
  }
}
