import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthService} from '../auth/basic-auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: BasicAuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(username: string, password: string) {
    this.authService.login(username, password)
      .pipe(first())
      .subscribe(user => { this.router.navigate(['/search']); });
  }

  public register(username: string, password: string, firstName: string, lastName: string) {
    this.authService.register({username, password, firstName, lastName})
      .pipe(first())
      .subscribe(user => { this.router.navigate(['/search']); });
  }
}
