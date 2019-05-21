import { Component, OnInit } from '@angular/core';
import {GifCardService} from '../gif-card/gif-card.service';
import {Gif} from '../gif-card/gif';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private gifs: Gif[];

  constructor(private gifCardService: GifCardService) { }

  ngOnInit() {
    this.gifCardService.getAll()
      .subscribe(gifs => this.gifs = gifs);
  }

}
