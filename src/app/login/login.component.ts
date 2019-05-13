import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(username: string, password: string) {
    console.log('username', username);
    console.log('password', password);
    this.authService.login(username, password)
      .then(() => this.router.navigate(['/', 'search']));
  }
}
