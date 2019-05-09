import { Component } from '@angular/core';
import {GifService} from "./gif.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private searchText = '';
  private gifs = [];

  constructor (private gifService: GifService, private domSanitizer: DomSanitizer) {}

  private onKey(event: any) {
    this.searchText = event.target.value;
    this.gifService.findGif(this.searchText).subscribe(response => {
      console.log(response);
      this.gifs = response.data.map(gif => gif.images.fixed_height);
    })
  }

  private styleSanitizeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
