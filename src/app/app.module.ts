import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { JwtClientService } from './services/jwt-client.service';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { DogProfilePageComponent } from './components/dog-profile-page/dog-profile-page.component';
import { CreateDogComponent } from './components/forms/create-dog/create-dog.component';
import { UpdateDogComponent } from './components/forms/update-dog/update-dog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    HeaderBannerComponent,
    UserProfilePageComponent,
    DogProfilePageComponent,
    CreateDogComponent,
    UpdateDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [JwtClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
