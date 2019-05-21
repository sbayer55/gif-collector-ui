import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gif} from './gif';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifCardService {
  private static readonly API_URL = 'http://localhost:8080/api/gif';

  constructor(private http: HttpClient) { }

  public saveGif(gif: Gif): Observable<any> {
    return this.http.put(GifCardService.API_URL, gif);
  }

  public getAll(): Observable<Gif[]> {
    return this.http.get<Gif[]>(GifCardService.API_URL);
  }


  public tag(value: string, id: number) {
    const tagRequest = { gifId: id, name: value };
    return this.http.put<Gif[]>(GifCardService.API_URL + '/tag', tagRequest);
  }
}
