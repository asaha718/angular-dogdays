import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/security/login/login.component';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';

const routes: Routes = [
  {path: "login", component: LoginComponent}, 
  {path: "home", component: HomePageComponent},
  {path: "userprofile/:id", component: UserProfilePageComponent},  
  {path:"", redirectTo: "/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
