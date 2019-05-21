import { Component, OnInit } from '@angular/core';
import {Gif, GifSearchResponse} from '../gif-card/gif';
import {PageEvent} from '@angular/material';
import {GifService} from '../gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private readonly DEFAULT_SEARCH = 'Cat';
  private searchText: string = this.DEFAULT_SEARCH;
  private gifs: Gif[];
  private searchResponse: GifSearchResponse = {count: 0, gifs: [], offset: 0, totalCount: 0};
  private pageEvent: PageEvent;

  constructor(private gifService: GifService) {
  }

  private search(): any {
    let offset = 0;
    let pageSize = this.gifService.pageSize;
    if (this.pageEvent) {
      pageSize = this.pageEvent.pageSize;
    }
    if (this.pageEvent) {
      offset = pageSize * this.pageEvent.pageIndex;
    }

    this.gifService.findGif(this.searchText, pageSize, offset).subscribe(response => {
      this.gifs = response.gifs;
      this.searchResponse = response;
    }, err => {
      console.error('Http error on search, searchText: ', this.searchText, 'pageSize: ', this.gifService.pageSize, 'offset: ', offset, err);
    });
  }

  private onKey(event: any) {
    this.searchText = event.target.value;
    this.search();
  }

  ngOnInit(): void {
    this.search();
  }

  private onPageEvent(event: PageEvent) {
    this.pageEvent = event;
    this.search();
    window.scrollTo(0, 0);
  }

}
