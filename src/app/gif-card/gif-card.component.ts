import {Component, Input, OnInit} from '@angular/core';
import {Gif} from './gif';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {
  private static readonly MAX_TITLE_LENGTH = 20;
  private mGif: Gif;
  private titleFormatted;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  @Input()
  set gif(gif: Gif) {
    this.mGif = gif;
    if (this.mGif.title.length > GifCardComponent.MAX_TITLE_LENGTH) {
      this.titleFormatted = this.mGif.title.substr(0, GifCardComponent.MAX_TITLE_LENGTH) + '...';
    } else {
      this.titleFormatted = this.mGif.title;
    }
  }

  private styleSanitizeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
