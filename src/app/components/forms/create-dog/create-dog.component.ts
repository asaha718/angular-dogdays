import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dog } from 'src/app/dtos/dog';
import { DogOwner } from 'src/app/dtos/dog-owner';
import { Personality } from 'src/app/dtos/personality';
import { DogService } from 'src/app/services/dog.service';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PersonalityService } from 'src/app/services/personality.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css']
})
export class CreateDogComponent implements OnInit {
  token: string | null = "";
  ownerId: number | undefined;
  personalities?: Personality[]

  createdDog: Dog = {
    name: '',
    age: 0,
    breed: '',
    personalities: [],
    owner: undefined
  }

  constructor(private jwtService: JwtClientService,
    private router: Router,
    private route: ActivatedRoute,
    private lsService: LocalStorageService,
    private dogService: DogService,
    private personalityService: PersonalityService
  ) { }

  ngOnInit(): void {
    this.getOwnerId();
    this.token = this.getAccessToken();
    this.getPersonalities()
  }

  getAccessToken(): string | null {
    return this.lsService.get("token")
  }

  onDogCreate(createdDog: Dog) {
    this.dogService.addDog(this.token, this.createdDog).subscribe(dog => {
      this.router.navigate(["/userprofile/ownerId"]);
      createdDog = {
        name: '',
        age: 0,
        breed: '',
        personalities: [],
        owner: undefined
      }
    })
  }

  getOwnerId() {
    this.route.paramMap.subscribe(paramMap => {
      this.createdDog.owner = { id: Number(paramMap.get('id')) };
    })
  }

  getPersonalities() {
    this.personalityService.getPersonalities(this.token).subscribe(p => {
      console.log("all personalities", p); 
      this.personalities = p; 
    })
  }
}
