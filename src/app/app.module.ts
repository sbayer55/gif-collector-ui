import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GifCardComponent} from './gif-card/gif-card.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    GifCardComponent,
    LoginComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
