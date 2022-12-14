import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/dtos/dog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DogService } from 'src/app/services/dog.service';
import { DogResponseDto } from 'src/app/dtos/dog-response-dto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  token: string | null = "";
  allDogs: DogResponseDto[] = [];

  constructor(private lsService: LocalStorageService, private dogService: DogService) { }


  ngOnInit(): void {
    this.token = this.getAccessToken();
    this.getDogs()
  }

  getAccessToken(): string | null {
    return this.lsService.get("token")
  }

  getDogs(): void {
    this.dogService.getDogs(this.token).subscribe(dogs => { this.allDogs = dogs })
  }
}
