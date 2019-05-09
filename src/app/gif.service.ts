import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  public findGif(searchText: string): any {
    let params = new HttpParams();
    params = params.append('q', searchText);
    return this.http.get('http://localhost:8080/gif', {params: params})
  }
}
