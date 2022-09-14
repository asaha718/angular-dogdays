import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateDogDto } from 'src/app/dtos/create-dog-dto';
import { Dog } from 'src/app/dtos/dog';
import { DogService } from 'src/app/services/dog.service';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-update-dog',
  templateUrl: './update-dog.component.html',
  styleUrls: ['./update-dog.component.css']
})
export class UpdateDogComponent implements OnInit {
  token: string | null = "";
  ownerId: number | undefined;
  dogId?: number;

  updatedDog: CreateDogDto = {
    name: "",
    age: 1,
    breed: "",
    personalityIds: [],
    ownerId: undefined,
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private lsService: LocalStorageService,
    private dogService: DogService,) { }

  ngOnInit(): void {
    this.token = this.getAccessToken();
    this.getOwnerId();
    this.getDogId();
    this.getDog();
  }

  getAccessToken(): string | null {
    return this.lsService.get("token")
  }

  getOwnerId() {
    this.route.paramMap.subscribe(paramMap => {
      this.updatedDog.ownerId = Number(paramMap.get('ownerId'));
    })
  }

  getDogId() {
    this.route.paramMap.subscribe(paramMap => {
      this.dogId = Number(paramMap.get('dogId'));
    })
  }

  getDog() {
    this.dogService.getDog(this.token, this.dogId).subscribe(dog => {
      console.log('editing dog', dog)
      this.updatedDog.name = dog.name;
      this.updatedDog.age = dog.age;
      this.updatedDog.breed = dog.breed;
      // this.updatedDog.personalityIds = dog.personalities?.map(pobj=> pobj.id); 
    })
  }

  onUpdateDog(updatedDog: CreateDogDto){ 
    this.dogService.updateDog(this.token, updatedDog, this.dogId).subscribe(dog=> { 
      this.router.navigate([`/userprofile/${this.updatedDog.ownerId}`]); 
      this.updatedDog = {
        name: '',
        age: 0,
        breed: '',
        personalityIds: [],
        ownerId: 0
      }
    })
  }
}
