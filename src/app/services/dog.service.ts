import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Dog } from '../dtos/dog';
import { CreateDogDto } from '../dtos/create-dog-dto';
import { DogResponseDto } from '../dtos/dog-response-dto';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(token: string | null): Observable<DogResponseDto[]>{ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<DogResponseDto[]>('http://localhost:8080/api/dogs', { headers })
      .pipe(map(resp => resp))
  }

  getDog(token: string | null, id: number | undefined): Observable<DogResponseDto> { 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<DogResponseDto>(`http://localhost:8080/api/dogs/${id}`, { headers })
      .pipe(map(resp => resp))
  }

  addDog(token: string | null, dog: CreateDogDto){ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<DogResponseDto>('http://localhost:8080/api/dogs', dog ,{ headers })
      .pipe(map(resp => resp))
  }

  updateDog(token: string | null, dog: CreateDogDto, id: number | undefined){ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<DogResponseDto>(`http://localhost:8080/api/dogs/${id}`, dog, { headers })
  }; 

  deleteDog(token: string | null, id: number | undefined): Observable<unknown>{ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`http://localhost:8080/api/dogs/${id}`, { headers })
  }
}
