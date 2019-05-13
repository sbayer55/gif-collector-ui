import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GifSearchResponse} from './gif-card/gif';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {HttpParamsOptions} from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private static readonly API_URL = 'http://localhost:8080/api/gif-search';
  private static readonly PAGE_SIZE = 25;

  constructor(private http: HttpClient, private authService: AuthService) { }

  public findGif(searchText: string, limit?: number, offset?: number): Observable<GifSearchResponse> {
    let params = new HttpParams();
    params = params.append('q', searchText);
    if (offset !== null && offset !== undefined) {
      params = params.append('offset', String(offset));
    }

    if (!limit) {
      params = params.append('limit', String(GifService.PAGE_SIZE));
    } else {
      params = params.append('limit', String(limit));
    }


    const httpOptions = {
      headers: this.authService.headers(),
      params: params
    };

    console.log('Posting request with httpOptionss', httpOptions);

    return this.http.get<GifSearchResponse>(GifService.API_URL, httpOptions);
  }

  public get pageSize() {
    return GifService.PAGE_SIZE;
  }
}
