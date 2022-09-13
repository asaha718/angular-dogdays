import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/dtos/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest: LoginDTO = {
    "username": "",
    "password": ""
  };

  guestAuthRequest: LoginDTO = { 
    "username": "GuestUser",
    "password": "password123"
  }

  constructor(private service: JwtClientService,
    private router: Router,
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  guestLogin(){ 
    this.getAccessToken(this.guestAuthRequest); 
  }

  loginUser() {
    this.getAccessToken(this.authRequest);
  }

  getAccessToken(authRequest: any) {
    this.lsService.set("username", authRequest.username)
    this.service.generateToken(authRequest)
      .subscribe(data => {
        this.lsService.set("token", data);
        this.router.navigate(["/home"]);
      });
  }

}
