import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private navList = [
    {text: 'Login', route: '/login'},
    {text: 'Search for Gifs', route: '/search'},
    {text: 'My Profile', route: '/profile'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
