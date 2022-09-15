import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateDogDto } from 'src/app/dtos/create-dog-dto';
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

  createdDog: CreateDogDto = {
    name: "",
    age: 1,
    breed: "",
    personalityIds: [],
    ownerId: undefined,
  };

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

  onDogCreate(createdDog: CreateDogDto) {
    console.log("createDog object", createdDog); 
    this.dogService.addDog(this.token, createdDog).subscribe(dog => {
      this.router.navigate([`/userprofile/${createdDog.ownerId}`]);
      this.createdDog = {
        name: "",
        age: 1,
        breed: "",
        personalityIds: [],
        ownerId: undefined,
      }
    })
  }

  getOwnerId() {
    this.route.paramMap.subscribe(paramMap => {
      this.createdDog.ownerId = Number(paramMap.get('id'));
    })
  }

  getPersonalities() {
    this.personalityService.getPersonalities(this.token).subscribe(p => {
      this.personalities = p;
    })
  }

  addPersonalityToDog(id:any){ 
    this.createdDog.personalityIds.push(Number(id)); 
  }
}
