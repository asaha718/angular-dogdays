import { Component, Input, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  userName: string= ""; 

  constructor(private service: JwtClientService) {
  }

  ngOnInit(): void {
    // this.getUsername(); 
  }

  // getUsername(): void{ 
  //   this.service.welcome(this.service.accessToken, this.service.username).subscribe( data=> this.userName= data.username)
  // }

}
