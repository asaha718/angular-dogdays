import { Component, Input, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserResponseDTO } from 'src/app/dtos/user-response-dto';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  username: string | null = "";
  token: string | null = ""; 

  userInfo: UserResponseDTO= { 
    username: "",
  }; 

  constructor(
    private lsService: LocalStorageService, 
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.token = this.getAccessToken(); 
    this.username = this.getUsername(); 

    this.getUser(); 
  }

  getAccessToken(): string | null{ 
    return this.lsService.get("token")
  }

  getUsername(): string | null{ 
    return this.lsService.get("username")
  }
  
  getUser(): void{ 
    this.userService.getUser(this.token, this.username).subscribe(data => this.userInfo = data)
  }

}
