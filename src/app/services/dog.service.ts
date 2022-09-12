import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Dog } from '../dtos/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(token: string | null): Observable<Dog[]>{ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Dog[]>('http://localhost:8080/api/dogs', { headers })
      .pipe(map(resp => resp))
  }

  getDog(token: string | null, id: number): Observable<Dog> { 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Dog>(`http://localhost:8080/api/dogs/${id}`, { headers })
      .pipe(map(resp => resp))
  }

  addDog(token: string | null, dog: Dog){ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<Dog>('http://localhost:8080/api/dogs', dog ,{ headers })
      .pipe(map(resp => resp))
  }

  deleteDog(token: string | null, id: number | undefined): Observable<unknown>{ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`http://localhost:8080/api/dogs/${id}`, { headers })
  }
}
