import {Component, OnInit} from '@angular/core';
import {BasicAuthService} from './auth/basic-auth.service';

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

  constructor(private authService: BasicAuthService) {
  }

  private logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }
}
