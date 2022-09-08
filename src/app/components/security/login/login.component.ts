import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';
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

  constructor(private service: JwtClientService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.getAccessToken(this.authRequest); 
    this.router.navigate(["/home"]);
  }

  getAccessToken(authRequest: any) {
    let resp = this.service.generateToken(authRequest);
    resp.subscribe(data => this.accessApi(data));
  }

  accessApi(token: string) {
    let resp = this.service.welcome(token);
    resp.subscribe(data => this.response = data);
  }

}
