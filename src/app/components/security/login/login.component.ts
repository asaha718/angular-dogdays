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
