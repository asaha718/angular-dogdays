import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDogComponent } from './components/forms/create-dog/create-dog.component';
import { UpdateDogComponent } from './components/forms/update-dog/update-dog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/security/login/login.component';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';

const routes: Routes = [
  { path: ":ownerId/update-dog/:dogId", component: UpdateDogComponent},
  { path: "userprofile/:id", component: UserProfilePageComponent}, 
  {path: ":id/create-dog", component: CreateDogComponent},  
  {path: "login", component: LoginComponent}, 
  {path: "home", component: HomePageComponent},
  {path:"", redirectTo: "/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
