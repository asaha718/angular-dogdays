import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest: any = {
    "username": "",
    "password": ""
  };

  response: any;

  constructor(private service: JwtClientService, private router: Router, private lsService:LocalStorageService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.getAccessToken(this.authRequest);
    this.router.navigate(["/home"]);
  }

  getAccessToken(authRequest: any) {
    // this.service.setUsername(authRequest.username); 
    this.lsService.set("username", authRequest.username)
    let resp = this.service.generateToken(authRequest);
    resp.subscribe(data => {
      // this.service.setAccessToken(data);
      this.lsService.set("token", data)
      // this.accessApi(data, authRequest.username)
    });
  }

  // accessApi(token: string, username: string) {
  //   let resp = this.service.welcome(token, username);
  //   resp.subscribe(data => { this.service.userInfo = data; this.response = data; console.log(data) });
  // }

}
