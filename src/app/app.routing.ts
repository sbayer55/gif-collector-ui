import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
