import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication-service';
import {Gif} from './gif';

@Injectable({
  providedIn: 'root'
})
export class GifCardService {
  private static readonly API_URL = 'http://localhost:8080/api/gif';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  public saveGif(gif: Gif): Promise<any> {
    const httpOptions = {
      headers: this.authenticationService.getHeaders()
    };

    console.log('saveGif Headers!', httpOptions.headers);

    return this.http.put(GifCardService.API_URL, gif, httpOptions).toPromise();
  }

  public getAll(): Promise<Gif[]> {
    const httpOptions = {
      headers: this.authenticationService.getHeaders()
    };

    console.log('getAll Headers!', httpOptions.headers);

    return this.http.get<Gif[]>(GifCardService.API_URL, httpOptions).toPromise()
      .then(gifs => {
        console.log('gifs: ', gifs);
        return gifs;
      });
  }


  public tag(value: string, id: number) {
    const httpOptions = {
      headers: this.authenticationService.getHeaders()
    };
    const tagRequest = { gifId: id, name: value };

    console.log('tag Headers!', httpOptions.headers);

    return this.http.put<Gif[]>(GifCardService.API_URL + '/tag', tagRequest, httpOptions).toPromise()
      .then(() => {
        console.log('Tag successful');
      });
  }
}
