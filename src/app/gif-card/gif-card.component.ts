import {Component, Input, OnInit} from '@angular/core';
import {Gif} from './gif';
import {DomSanitizer} from '@angular/platform-browser';
import {GifCardService} from './gif-card.service';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {
  private static readonly MAX_TITLE_LENGTH = 20;
  private mGif: Gif;
  private titleFormatted;
  private isFavorite = false;
  private favoriteButtonText = 'Favorite';

  constructor(private domSanitizer: DomSanitizer, private gifCardService: GifCardService) { }

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
    console.log(gif);
  }

  private save() {
    this.gifCardService.saveGif(this.mGif).subscribe(
      () => {
        this.isFavorite = true;
        this.favoriteButtonText = 'Saved';
      });
  }

  private styleSanitizeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }

  private tag(value: string) {
    this.gifCardService.tag(value, this.mGif.gifId).subscribe(() => {
      this.mGif.tags.push({name: value});
    });
  }
}
