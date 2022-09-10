import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserResponseDTO } from 'src/app/dtos/user-response-dto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  username: string | null = "";
  token: string | null = "";

  userInfo: UserResponseDTO = { 
    username: ""
  };

  constructor(private lsService: LocalStorageService,
     private userService: UserService) { }

  ngOnInit(): void {
    this.token = this.getAccessToken(); 
    this.username = this.getUsername();
    this.getUser(); 
  }

  getAccessToken(): string | null {
    return this.lsService.get("token")
  }

  getUsername(): string | null {
    return this.lsService.get("username")
  }

  getUser(): void {
    this.userService.getUser(this.token, this.username).subscribe(data => this.userInfo = data)
  }

}
