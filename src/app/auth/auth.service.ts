import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GetTokenResponse} from './get-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private response: GetTokenResponse;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Promise<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic R2lmQ29sbGVjdG9yQ2xpZW50OnBhc3N3b3Jk',
        'Access-Control-Allow-Header': 'Access-Control-Allow-Origin'
      })
    };

    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post('http://localhost:8080/oauth/token', httpParams, httpOptions).toPromise().then((response: GetTokenResponse) => {
      this.response = response;
      console.log('Token ', response.access_token);
    });
  }

  public headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.response.access_token,
      'Access-Control-Allow-Header': 'Access-Control-Allow-Origin'
    });
  }
}
