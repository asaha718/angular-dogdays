import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dog } from 'src/app/dtos/dog';
import { DogOwner } from 'src/app/dtos/dog-owner';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css']
})
export class CreateDogComponent implements OnInit {
  ownerId:number | undefined; 

  createdDog: Dog ={
    name: '',
    age: 0,
    breed: '', 
    personalities: [], 
    owner: undefined
  }

  constructor(private jwtService: JwtClientService,
    private router: Router,
    private route: ActivatedRoute,
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getOwnerId(); 
  }

  onDogCreate(){ 

  }

  getOwnerId(){ 
    this.route.paramMap.subscribe(paramMap => {
      this.createdDog.owner = {id : Number(paramMap.get('id'))};
    })
  }
}
